import { supabase } from './supabase/client';

export type OfflineEmployeeCache = {
  id: string;
  id_karyawan: string;
  nama: string;
  email?: string | null;
  jabatan?: string | null;
  departemen?: string | null;
  status_karyawan?: string | null;
  status_aktif?: boolean | null;
  tanggal_masuk?: string | null;
  auth_user_id?: string | null;
};

export type OfflineAttendanceEvent = {
  client_event_id: string;
  auth_user_id: string;
  action: 'clock_in' | 'clock_out';
  id_karyawan: string;
  tanggal: string;
  jam: string;
  lat: number;
  long: number;
  accuracy: number;
  selfie: string;
  lokasi?: string;
};

type SecureRecord = {
  id: string;
  ciphertext: string;
  iv: string;
};

const DB_NAME = 'project-tirta-android-offline-v2';
const DB_VERSION = 2;
const SECURE_STORE = 'secure_records';
const KEY_STORE = 'crypto_keys';
const LEGACY_STORE = 'attendance_events';
const EMPLOYEE_PREFIX = 'employee:';
const ATTENDANCE_PREFIX = 'attendance:';
const ATTENDANCE_CACHE_PREFIX = 'attendance-cache:';
const CRYPTO_KEY_ID = 'project-tirta-aes-gcm-v1';
const LEGACY_EMPLOYEE_PREFIX = 'project-tirta-offline-employee-v1:';
const LEGACY_ATTENDANCE_PREFIX = 'project-tirta-offline-attendance-v1:';

function toBase64(bytes: ArrayBuffer | Uint8Array): string {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = '';
  for (const byte of view) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function fromBase64(value: string): Uint8Array {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB tidak tersedia pada perangkat ini.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(SECURE_STORE)) {
        db.createObjectStore(SECURE_STORE, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(KEY_STORE)) {
        db.createObjectStore(KEY_STORE, { keyPath: 'id' });
      }
      // Keep the legacy store temporarily so queued v1 events can be migrated
      // without silently discarding offline attendance.
      if (!db.objectStoreNames.contains(LEGACY_STORE)) {
        db.createObjectStore(LEGACY_STORE, { keyPath: 'client_event_id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Database offline gagal dibuka.'));
  });
}

async function getCryptoKey(db: IDBDatabase): Promise<CryptoKey> {
  const existing = await new Promise<CryptoKey | null>((resolve, reject) => {
    const tx = db.transaction(KEY_STORE, 'readonly');
    const req = tx.objectStore(KEY_STORE).get(CRYPTO_KEY_ID);
    req.onsuccess = () => resolve(req.result?.key || null);
    req.onerror = () => reject(req.error || new Error('Kunci penyimpanan aman gagal dibaca.'));
  });

  if (existing) return existing;
  if (!globalThis.crypto?.subtle) throw new Error('Web Crypto tidak tersedia pada perangkat ini.');

  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );

  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(KEY_STORE, 'readwrite');
    tx.objectStore(KEY_STORE).put({ id: CRYPTO_KEY_ID, key });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('Kunci penyimpanan aman gagal disimpan.'));
  });

  return key;
}

async function encryptJson(db: IDBDatabase, value: unknown): Promise<SecureRecord> {
  const key = await getCryptoKey(db);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const payload = new TextEncoder().encode(JSON.stringify(value));
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, payload);
  return {
    id: '',
    ciphertext: toBase64(encrypted),
    iv: toBase64(iv),
  };
}

async function decryptJson<T>(db: IDBDatabase, record: SecureRecord): Promise<T> {
  const key = await getCryptoKey(db);
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromBase64(record.iv) },
    key,
    fromBase64(record.ciphertext),
  );
  return JSON.parse(new TextDecoder().decode(decrypted)) as T;
}

async function securePut(id: string, value: unknown) {
  const db = await openDb();
  try {
    const encrypted = await encryptJson(db, value);
    encrypted.id = id;
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(SECURE_STORE, 'readwrite');
      tx.objectStore(SECURE_STORE).put(encrypted);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Data offline gagal disimpan.'));
    });
  } finally {
    db.close();
  }
}

async function secureGet<T>(id: string): Promise<T | null> {
  const db = await openDb();
  try {
    const record = await new Promise<SecureRecord | null>((resolve, reject) => {
      const tx = db.transaction(SECURE_STORE, 'readonly');
      const req = tx.objectStore(SECURE_STORE).get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error || new Error('Data offline gagal dibaca.'));
    });
    return record ? await decryptJson<T>(db, record) : null;
  } finally {
    db.close();
  }
}

async function secureGetAll(prefix: string): Promise<SecureRecord[]> {
  const db = await openDb();
  try {
    const records = await new Promise<SecureRecord[]>((resolve, reject) => {
      const tx = db.transaction(SECURE_STORE, 'readonly');
      const req = tx.objectStore(SECURE_STORE).getAll();
      req.onsuccess = () => resolve((req.result || []).filter((item: SecureRecord) => item.id.startsWith(prefix)));
      req.onerror = () => reject(req.error || new Error('Data offline gagal dibaca.'));
    });
    return records;
  } finally {
    db.close();
  }
}

async function secureDelete(id: string) {
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(SECURE_STORE, 'readwrite');
      tx.objectStore(SECURE_STORE).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Data offline gagal dihapus.'));
    });
  } finally {
    db.close();
  }
}

async function migrateLegacyAttendance(db: IDBDatabase, authUserId: string, employeeId: string) {
  if (!db.objectStoreNames.contains(LEGACY_STORE)) return;

  const legacy = await new Promise<OfflineAttendanceEvent[]>((resolve, reject) => {
    const tx = db.transaction(LEGACY_STORE, 'readonly');
    const req = tx.objectStore(LEGACY_STORE).getAll();
    req.onsuccess = () => resolve((req.result || []) as OfflineAttendanceEvent[]);
    req.onerror = () => reject(req.error || new Error('Data antrean lama gagal dibaca.'));
  });

  for (const event of legacy.filter(item => item.id_karyawan === employeeId)) {
    const migrated: OfflineAttendanceEvent = { ...event, auth_user_id: event.auth_user_id || authUserId };
    const encrypted = await encryptJson(db, migrated);
    encrypted.id = `${ATTENDANCE_PREFIX}${migrated.client_event_id}`;
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([SECURE_STORE, LEGACY_STORE], 'readwrite');
      tx.objectStore(SECURE_STORE).put(encrypted);
      tx.objectStore(LEGACY_STORE).delete(event.client_event_id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Migrasi antrean offline gagal.'));
    });
  }
}

export async function cacheEmployee(userId: string, employee: OfflineEmployeeCache): Promise<void> {
  const safe: OfflineEmployeeCache = {
    id: employee.id,
    id_karyawan: employee.id_karyawan,
    nama: employee.nama,
    email: employee.email || null,
    jabatan: employee.jabatan || null,
    departemen: employee.departemen || null,
    status_karyawan: employee.status_karyawan || null,
    status_aktif: employee.status_aktif ?? null,
    tanggal_masuk: employee.tanggal_masuk || null,
    auth_user_id: userId,
  };
  try {
    await securePut(`${EMPLOYEE_PREFIX}${userId}`, safe);
    try { localStorage.removeItem(`${LEGACY_EMPLOYEE_PREFIX}${userId}`); } catch { /* ignore */ }
  } catch {
    // Cache hanya pelengkap; jangan menggagalkan aplikasi online.
  }
}

export async function getCachedEmployee(userId: string): Promise<OfflineEmployeeCache | null> {
  try {
    const cached = await secureGet<OfflineEmployeeCache>(`${EMPLOYEE_PREFIX}${userId}`);
    if (cached) return cached;

    // One-time migration from the old plaintext localStorage cache.
    const raw = localStorage.getItem(`${LEGACY_EMPLOYEE_PREFIX}${userId}`);
    if (!raw) return null;
    const legacy = JSON.parse(raw) as OfflineEmployeeCache;
    await cacheEmployee(userId, legacy);
    try { localStorage.removeItem(`${LEGACY_EMPLOYEE_PREFIX}${userId}`); } catch { /* ignore */ }
    return legacy;
  } catch {
    return null;
  }
}

export async function cacheAttendance(userId: string, rows: unknown[]): Promise<void> {
  try {
    await securePut(`${ATTENDANCE_CACHE_PREFIX}${userId}`, (rows || []).slice(0, 90));
    try { localStorage.removeItem(`${LEGACY_ATTENDANCE_PREFIX}${userId}`); } catch { /* ignore */ }
  } catch {
    // Non-critical cache.
  }
}

export async function getCachedAttendance(userId: string): Promise<any[]> {
  try {
    const cached = await secureGet<any[]>(`${ATTENDANCE_CACHE_PREFIX}${userId}`);
    if (Array.isArray(cached)) return cached;

    const raw = localStorage.getItem(`${LEGACY_ATTENDANCE_PREFIX}${userId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const safe = Array.isArray(parsed) ? parsed : [];
    await cacheAttendance(userId, safe);
    try { localStorage.removeItem(`${LEGACY_ATTENDANCE_PREFIX}${userId}`); } catch { /* ignore */ }
    return safe;
  } catch {
    return [];
  }
}

export async function enqueueOfflineAttendance(event: OfflineAttendanceEvent) {
  const safe: OfflineAttendanceEvent = {
    ...event,
    auth_user_id: event.auth_user_id,
    selfie: String(event.selfie || ''),
    lokasi: event.lokasi || 'GPS ESS OFFLINE',
  };
  await securePut(`${ATTENDANCE_PREFIX}${safe.client_event_id}`, safe);
}

export async function listOfflineAttendance(authUserId: string, idKaryawan: string): Promise<OfflineAttendanceEvent[]> {
  const db = await openDb();
  try {
    await migrateLegacyAttendance(db, authUserId, idKaryawan);
    const records = await new Promise<SecureRecord[]>((resolve, reject) => {
      const tx = db.transaction(SECURE_STORE, 'readonly');
      const req = tx.objectStore(SECURE_STORE).getAll();
      req.onsuccess = () => resolve((req.result || []).filter((item: SecureRecord) => item.id.startsWith(ATTENDANCE_PREFIX)));
      req.onerror = () => reject(req.error || new Error('Antrean absensi gagal dibaca.'));
    });
    const rows: OfflineAttendanceEvent[] = [];
    for (const record of records) {
      try {
        const event = await decryptJson<OfflineAttendanceEvent>(db, record);
        if (event.auth_user_id === authUserId && event.id_karyawan === idKaryawan) rows.push(event);
      } catch {
        // Ignore corrupt/foreign records; never surface partial sensitive data.
      }
    }
    return rows.sort((a, b) => `${a.tanggal} ${a.jam}`.localeCompare(`${b.tanggal} ${b.jam}`));
  } finally {
    db.close();
  }
}

export async function countOfflineAttendance(authUserId: string, idKaryawan: string): Promise<number> {
  try {
    return (await listOfflineAttendance(authUserId, idKaryawan)).length;
  } catch {
    return 0;
  }
}

async function removeOfflineAttendance(clientEventId: string) {
  await secureDelete(`${ATTENDANCE_PREFIX}${clientEventId}`);
}

export async function syncOfflineAttendance(authUserId: string, idKaryawan: string) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { synced: 0, failed: 0 };
  }

  let synced = 0;
  let failed = 0;
  const events = await listOfflineAttendance(authUserId, idKaryawan);

  for (const item of events) {
    const { error } = await supabase.rpc('hris_ess_sync_offline_attendance', {
      p_client_event_id: item.client_event_id,
      p_action: item.action,
      p_id_karyawan: item.id_karyawan,
      p_tanggal: item.tanggal,
      p_jam: item.jam,
      p_lat: item.lat,
      p_long: item.long,
      p_accuracy: item.accuracy,
      p_selfie: item.selfie,
      p_lokasi: item.lokasi || 'GPS ESS OFFLINE',
    });

    if (error) {
      failed += 1;
      break;
    }

    await removeOfflineAttendance(item.client_event_id);
    synced += 1;
  }

  return { synced, failed };
}
