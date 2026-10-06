import { createClient } from 'npm:@supabase/supabase-js@2';
import { JWT } from 'npm:google-auth-library@9';

interface Announcement {
  id: string;
  title: string;
  body: string;
  priority: 'normal' | 'important' | 'urgent';
  status: string;
  audience: { type?: string; ids?: string[] } | null;
}

interface Employee {
  auth_user_id: string | null;
  email: string | null;
  status_aktif: boolean | null;
  departemen: string | null;
  lokasi_kerja: string | null;
  jabatan: string | null;
}

interface LookupRow {
  id: string;
  kode?: string | null;
  nama?: string | null;
}

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
const FIREBASE_SERVICE_ACCOUNT_JSON = Deno.env.get('FIREBASE_SERVICE_ACCOUNT_JSON')!;

const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function normalize(value: unknown): string {
  return String(value ?? '').trim().toLowerCase();
}

function audienceMatches(
  audience: Announcement['audience'],
  employee: Employee,
  lookups: { department: LookupRow[]; branch: LookupRow[]; position: LookupRow[] },
): boolean {
  const type = normalize(audience?.type || 'all');
  if (type === 'all') return true;

  const ids = (audience?.ids ?? []).map(normalize).filter(Boolean);
  if (!ids.length) return false;

  const field = type === 'department'
    ? normalize(employee.departemen)
    : type === 'branch'
      ? normalize(employee.lokasi_kerja)
      : type === 'position'
        ? normalize(employee.jabatan)
        : '';
  if (!field) return false;
  if (ids.includes(field)) return true;

  const rows = type === 'department'
    ? lookups.department
    : type === 'branch'
      ? lookups.branch
      : lookups.position;

  const matchedLookupValues = new Set<string>();
  for (const id of ids) {
    for (const row of rows) {
      if ([row.id, row.kode, row.nama].some((value) => normalize(value) === id)) {
        [row.id, row.kode, row.nama].forEach((value) => {
          const normalized = normalize(value);
          if (normalized) matchedLookupValues.add(normalized);
        });
      }
    }
  }
  return matchedLookupValues.has(field);
}

async function getFirebaseAccessToken(serviceAccount: any): Promise<string> {
  const client = new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });
  const token = await client.getAccessToken();
  if (!token) throw new Error('FCM access token tidak tersedia.');
  return token;
}

async function sendOne(
  accessToken: string,
  projectId: string,
  token: string,
  announcement: Announcement,
): Promise<{ ok: boolean; deactivate?: boolean; error?: string }> {
  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/messages:send`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        message: {
          token,
          notification: {
            title: `Pengumuman: ${announcement.title}`,
            body: announcement.body.slice(0, 300),
          },
          data: {
            type: 'announcement',
            announcement_id: announcement.id,
            link: '#/announcements',
            priority: announcement.priority,
          },
          android: {
            priority: announcement.priority === 'urgent' ? 'high' : 'normal',
            notification: {
              channel_id: 'project-tirta-announcements',
              sound: 'default',
              tag: `announcement-${announcement.id}`,
            },
          },
        },
      }),
    },
  );

  if (response.ok) return { ok: true };

  const payload = await response.json().catch(() => ({}));
  const message = JSON.stringify(payload);
  const deactivate = /UNREGISTERED|registration-token-not-registered|INVALID_ARGUMENT/i.test(message);
  return { ok: false, deactivate, error: message.slice(0, 1000) };
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const authorization = req.headers.get('Authorization') ?? '';
  if (!authorization.toLowerCase().startsWith('bearer ')) {
    return new Response(JSON.stringify({ error: 'Authorization required' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authorization } },
  });

  const { data: userData, error: userError } = await userClient.auth.getUser();
  if (userError || !userData.user) {
    return new Response(JSON.stringify({ error: 'Sesi login tidak valid.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data: allowed, error: permissionError } = await userClient.rpc('hris_has_permission', {
    p_code: 'announcements.write',
  });
  if (permissionError || !allowed) {
    return new Response(JSON.stringify({ error: 'Akses ditolak: announcements.write' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const input = await req.json().catch(() => ({}));
  const announcementId = String(input?.announcementId ?? '').trim();
  if (!announcementId) {
    return new Response(JSON.stringify({ error: 'announcementId wajib diisi.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data: announcement, error: announcementError } = await admin
    .from('hris_announcements')
    .select('id,title,body,priority,status,audience')
    .eq('id', announcementId)
    .maybeSingle<Announcement>();

  if (announcementError) throw announcementError;
  if (!announcement || announcement.status !== 'published') {
    return new Response(JSON.stringify({ error: 'Pengumuman belum berstatus published.' }), {
      status: 409,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!FIREBASE_SERVICE_ACCOUNT_JSON) {
    return new Response(JSON.stringify({
      error: 'FIREBASE_SERVICE_ACCOUNT_JSON belum dikonfigurasi di Supabase Edge Function.',
      delivered: 0,
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_JSON);
  const projectId = String(serviceAccount.project_id ?? '').trim();
  if (!projectId || !serviceAccount.client_email || !serviceAccount.private_key) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON tidak lengkap.');
  }

  const [{ data: employees, error: employeeError }, { data: department, error: departmentError }, { data: branch, error: branchError }, { data: position, error: positionError }] = await Promise.all([
    admin.from('karyawan').select('auth_user_id,email,status_aktif,departemen,lokasi_kerja,jabatan').eq('status_aktif', true).not('auth_user_id', 'is', null),
    admin.from('hris_departemen').select('id,kode,nama'),
    admin.from('hris_cabang').select('id,kode,nama'),
    admin.from('hris_jabatan').select('id,kode,nama'),
  ]);

  if (employeeError) throw employeeError;
  if (departmentError) throw departmentError;
  if (branchError) throw branchError;
  if (positionError) throw positionError;

  const lookups = { department: department ?? [], branch: branch ?? [], position: position ?? [] };
  const recipientIds = (employees ?? [])
    .filter((employee) => employee.auth_user_id && audienceMatches(announcement, employee, lookups))
    .map((employee) => employee.auth_user_id as string);

  if (!recipientIds.length) {
    return new Response(JSON.stringify({ announcementId, recipients: 0, delivered: 0, inactive: 0 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data: tokenRows, error: tokenError } = await admin
    .from('hris_push_tokens')
    .select('id,user_id,token')
    .in('user_id', recipientIds)
    .eq('platform', 'android')
    .eq('is_active', true);

  if (tokenError) throw tokenError;
  if (!tokenRows?.length) {
    return new Response(JSON.stringify({ announcementId, recipients: recipientIds.length, tokens: 0, delivered: 0, inactive: 0 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const accessToken = await getFirebaseAccessToken(serviceAccount);
  let delivered = 0;
  let inactive = 0;

  const chunks: typeof tokenRows[] = [];
  for (let i = 0; i < tokenRows.length; i += 20) chunks.push(tokenRows.slice(i, i + 20));

  for (const chunk of chunks) {
    const results = await Promise.all(chunk.map((row) => sendOne(accessToken, projectId, row.token, announcement)));
    for (let i = 0; i < results.length; i += 1) {
      const result = results[i];
      const row = chunk[i];
      if (result.ok) {
        delivered += 1;
      } else if (result.deactivate) {
        inactive += 1;
        await admin.from('hris_push_tokens').update({ is_active: false }).eq('id', row.id);
      }
    }
  }

  return new Response(JSON.stringify({
    announcementId,
    recipients: recipientIds.length,
    tokens: tokenRows.length,
    delivered,
    inactive,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

