import { lazy, Suspense, useEffect, useMemo, useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase/client';
import { useTranslation } from '../locales/LanguageContext';
import moonLogo from '../assets/moon-logo.png';
import { appConfirm, appPrompt } from '../lib/app-dialog';

type Props = {
  route: string;
  name: string;
  role: string;
  onNavigate: (route: string) => void;
  onDataChange?: () => void;
};

type Row = Record<string, any>;

const MasterData = lazy(() => import('../components/admin/employee/MasterData'));
const Employee360 = lazy(() => import('../components/admin/employee/Employee360'));
const BPJSModule = lazy(() => import('../components/admin/employee/BPJSModule'));
const IDCardModule = lazy(() => import('../components/admin/employee/IDCardModule'));
const AttendanceUnified = lazy(() => import('../components/admin/dashboard/AttendanceUnified'));
const AttendanceShiftV24 = lazy(() => import('../components/admin/attendance/AttendanceShiftV24'));
const HRISCore = lazy(() => import('../components/admin/core/HRISCore'));
const RecruitmentATSv25 = lazy(() => import('../components/admin/recruitment/RecruitmentATSv25'));
const ProductionHR = lazy(() => import('../components/admin/payroll/ProductionHR'));
const PayrollProductionV22 = lazy(() => import('../components/admin/payroll/PayrollProductionV22'));
const PayrollIndonesiaV23 = lazy(() => import('../components/admin/payroll/PayrollIndonesiaV23'));
const ProfessionalSuite = lazy(() => import('../components/admin/enterprise/ProfessionalSuite'));
const EnterpriseV20 = lazy(() => import('../components/admin/enterprise/EnterpriseV20'));
const EnterpriseRoadmapV26V35 = lazy(() => import('../components/admin/enterprise/EnterpriseRoadmapV26V35'));
const SecurityCenterV21 = lazy(() => import('../components/admin/security/SecurityCenterV21'));
const AICenter = lazy(() => import('../components/admin/dashboard/AICenter'));
const PayrollEngineV9 = lazy(async () => {
  const m = await import('../components/admin/payroll/PayrollEngineV9');
  return { default: m.PayrollEngineV9 };
});
const PayrollEnterprise = lazy(async () => {
  const m = await import('../components/admin/enterprise/EnterpriseModules');
  return { default: m.PayrollEnterprise };
});
const RoleEditorEnterprise = lazy(async () => {
  const m = await import('../components/admin/enterprise/EnterpriseModules');
  return { default: m.RoleEditorEnterprise };
});
const ApprovalCenter = lazy(async () => {
  const m = await import('../components/admin/enterprise/EnterpriseModules');
  return { default: m.ApprovalCenter };
});

function LoadingFeature() {
  const { t } = useTranslation();
  return <div className="web-feature-loading">{t("web_loading")}</div>;
}

function Header({ title, description, action, onAction }: { title: string; description: string; action?: string; onAction?: () => void }) {
  return (
    <div className="web-feature-heading">
      <div>
        <span className="web-feature-kicker">PROJECT BY TIRTA</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action && <button type="button" className="web-f-primary" onClick={onAction}>{action}</button>}
    </div>
  );
}

function Tabs({ items, value, onChange }: { items: Array<[string, string]>; value: string; onChange: (value: string) => void }) {
  return (
    <div className="web-feature-tabs">
      {items.map(([key, label]) => (
        <button key={key} type="button" className={value === key ? 'active' : ''} onClick={() => onChange(key)}>{label}</button>
      ))}
    </div>
  );
}

function DataTable({ columns, rows }: { columns: Array<[string, string]>; rows: Row[] }) {
  return (
    <div className="web-f-panel web-f-table-panel">
      <div className="web-f-scroll">
        <table className="web-f-table">
          <thead><tr>{columns.map(([key, label]) => <th key={key}>{label}</th>)}</tr></thead>
          <tbody>
            {rows.length ? rows.map((row, index) => (
              <tr key={row.id || index}>
                {columns.map(([key]) => <td key={key}>{String(row[key] ?? '—')}</td>)}
              </tr>
            )) : <tr><td colSpan={columns.length} className="web-f-empty">{"Belum ada karyawan"}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmployeeListPage({ onDataChange }: { onDataChange?: () => void }) {
  const { t } = useTranslation();
  const [rows, setRows] = useState<Row[]>([]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<Row | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [bpjsKesFile, setBpjsKesFile] = useState<File | null>(null);
  const [bpjsKetFile, setBpjsKetFile] = useState<File | null>(null);
  const [cardLinks, setCardLinks] = useState({ kesehatan: '', ketenagakerjaan: '' });

  const newEmployee = () => {
    setBpjsKesFile(null);
    setBpjsKetFile(null);
    setCardLinks({ kesehatan: '', ketenagakerjaan: '' });
    setMessage('');
    setEditing({
      id_karyawan: '',
      nama: '',
      email: '',
      no_telp: '',
      nik_ktp: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      jenis_kelamin: '',
      alamat_rumah: '',
      status_pernikahan: '',
      nama_ibu_kandung: '',
      departemen: '',
      jabatan: '',
      level_jabatan: '',
      lokasi_kerja: '',
      tipe_karyawan: 'Tetap',
      status_karyawan: 'Tetap',
      tanggal_masuk: '',
      gaji_pokok: 0,
      bank_name: '',
      bank_account: '',
      bpjs_kesehatan: '',
      bpjs_ketenagakerjaan: '',
      status_aktif: true,
    });
  };

  const openEdit = (row: Row) => {
    setBpjsKesFile(null);
    setBpjsKetFile(null);
    setCardLinks({ kesehatan: '', ketenagakerjaan: '' });
    setMessage('');
    setEditing({ ...row });
  };

  const load = async () => {
    const { data, error } = await supabase
      .from('karyawan')
      .select('*')
      .order('nama');

    if (error) setMessage(error.message);
    else setRows(data || []);
  };

  useEffect(() => {
    void load();
  }, []);

  useEffect(() => {
    let active = true;

    const loadCardLinks = async () => {
      if (!editing?.id) {
        if (active) setCardLinks({ kesehatan: '', ketenagakerjaan: '' });
        return;
      }

      const next = { kesehatan: '', ketenagakerjaan: '' };

      for (const [kind, path] of [
        ['kesehatan', String(editing.bpjs_kesehatan_card_path || '')],
        ['ketenagakerjaan', String(editing.bpjs_ketenagakerjaan_card_path || '')],
      ] as const) {
        if (!path) continue;

        const { data } = await supabase.storage
          .from('bpjs-cards')
          .createSignedUrl(path, 900);

        if (active && data?.signedUrl) {
          next[kind] = data.signedUrl;
        }
      }

      if (active) setCardLinks(next);
    };

    void loadCardLinks();

    return () => {
      active = false;
    };
  }, [editing?.id, editing?.bpjs_kesehatan_card_path, editing?.bpjs_ketenagakerjaan_card_path]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return rows.filter((row) => {
      const text = [
        row.nama,
        row.id_karyawan,
        row.email,
        row.departemen,
        row.jabatan,
      ]
        .map(value => String(value || ''))
        .join(' ')
        .toLowerCase();

      return !q || text.includes(q);
    });
  }, [rows, query]);

  const updateField = (key: string, value: string | boolean | number) => {
    setEditing(prev => prev ? { ...prev, [key]: value } : prev);
  };

  const validateCard = (file: File) => {
    const allowed = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/pdf',
    ];

    if (!allowed.includes(file.type)) {
      throw new Error('Kartu BPJS harus JPG, PNG, WebP, atau PDF.');
    }

    // Sesuai bucket Supabase aktif: maksimum 5 MB.
    if (file.size > 5 * 1024 * 1024) {
      throw new Error('Ukuran kartu BPJS maksimal 5 MB.');
    }
  };

  const uploadCard = async (
    employeeId: string,
    file: File,
    type: 'kesehatan' | 'ketenagakerjaan',
  ) => {
    validateCard(file);

    const ext =
      file.name.split('.').pop()?.toLowerCase() ||
      (file.type === 'application/pdf' ? 'pdf' : 'jpg');

    const random =
      typeof crypto !== 'undefined' &&
      typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const path = `employees/${employeeId}/${type}-${random}.${ext}`;

    const { data: signed, error: signedError } = await supabase.storage
      .from('bpjs-cards')
      .createSignedUploadUrl(path, { upsert: false });

    if (signedError) throw signedError;
    if (!signed?.token) throw new Error('Token upload kartu BPJS tidak tersedia.');

    const { error: uploadError } = await supabase.storage
      .from('bpjs-cards')
      .uploadToSignedUrl(path, signed.token, file);

    if (uploadError) throw uploadError;

    return path;
  };

  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;

    const idKaryawan = String(editing.id_karyawan || '').trim().toUpperCase();
    const nama = String(editing.nama || '').trim();

    if (!idKaryawan) {
      setMessage('ID Karyawan wajib diisi.');
      return;
    }

    if (!nama) {
      setMessage('Nama karyawan wajib diisi.');
      return;
    }

    setSaving(true);
    setMessage('');

    let uploadedKes = '';
    let uploadedKet = '';

    try {
      const payload: Record<string, unknown> = {
        id_karyawan: idKaryawan,
        nama,
        email: String(editing.email || '').trim() || null,
        no_telp: String(editing.no_telp || '').trim() || null,
        nik_ktp: String(editing.nik_ktp || '').trim() || null,
        tempat_lahir: String(editing.tempat_lahir || '').trim() || null,
        tanggal_lahir: String(editing.tanggal_lahir || '').trim() || null,
        jenis_kelamin: String(editing.jenis_kelamin || '').trim() || null,
        alamat_rumah: String(editing.alamat_rumah || '').trim() || null,
        status_pernikahan: String(editing.status_pernikahan || '').trim() || null,
        nama_ibu_kandung: String(editing.nama_ibu_kandung || '').trim() || null,
        departemen: String(editing.departemen || '').trim() || null,
        jabatan: String(editing.jabatan || '').trim() || null,
        level_jabatan: String(editing.level_jabatan || '').trim() || null,
        lokasi_kerja: String(editing.lokasi_kerja || '').trim() || null,
        tipe_karyawan: String(editing.tipe_karyawan || 'Tetap'),
        status_karyawan: String(editing.status_karyawan || 'Tetap'),
        tanggal_masuk: String(editing.tanggal_masuk || '').trim() || null,
        gaji_pokok: Number(editing.gaji_pokok || 0),
        bank_name: String(editing.bank_name || '').trim() || null,
        bank_account: String(editing.bank_account || '').trim() || null,
        bpjs_kesehatan: String(editing.bpjs_kesehatan || '').trim() || null,
        bpjs_ketenagakerjaan: String(editing.bpjs_ketenagakerjaan || '').trim() || null,
        status_aktif: editing.status_aktif !== false,
      };

      const existing = Boolean(editing.id);

      let savedId = idKaryawan;

      if (existing) {
        const oldKes = String(editing.bpjs_kesehatan_card_path || '');
        const oldKet = String(editing.bpjs_ketenagakerjaan_card_path || '');

        const { error } = await supabase
          .from('karyawan')
          .update(payload)
          .eq('id', editing.id);

        if (error) throw error;

        if (bpjsKesFile) {
          uploadedKes = await uploadCard(idKaryawan, bpjsKesFile, 'kesehatan');
        }

        if (bpjsKetFile) {
          uploadedKet = await uploadCard(idKaryawan, bpjsKetFile, 'ketenagakerjaan');
        }

        const cardUpdate: Record<string, unknown> = {};

        if (uploadedKes) cardUpdate.bpjs_kesehatan_card_path = uploadedKes;
        if (uploadedKet) cardUpdate.bpjs_ketenagakerjaan_card_path = uploadedKet;

        if (Object.keys(cardUpdate).length) {
          const { error: cardError } = await supabase
            .from('karyawan')
            .update(cardUpdate)
            .eq('id', editing.id);

          if (cardError) throw cardError;
        }

        if (uploadedKes && oldKes && oldKes !== uploadedKes) {
          await supabase.storage.from('bpjs-cards').remove([oldKes]).catch(() => undefined);
        }

        if (uploadedKet && oldKet && oldKet !== uploadedKet) {
          await supabase.storage.from('bpjs-cards').remove([oldKet]).catch(() => undefined);
        }
      } else {
        const { error } = await supabase
          .from('karyawan')
          .insert({
            ...payload,
            role: 'Karyawan',
            email_terverifikasi: true,
          });

        if (error) throw error;

        if (bpjsKesFile) {
          uploadedKes = await uploadCard(savedId, bpjsKesFile, 'kesehatan');
        }

        if (bpjsKetFile) {
          uploadedKet = await uploadCard(savedId, bpjsKetFile, 'ketenagakerjaan');
        }

        const cardUpdate: Record<string, unknown> = {};

        if (uploadedKes) cardUpdate.bpjs_kesehatan_card_path = uploadedKes;
        if (uploadedKet) cardUpdate.bpjs_ketenagakerjaan_card_path = uploadedKet;

        if (Object.keys(cardUpdate).length) {
          const { error: cardError } = await supabase
            .from('karyawan')
            .update(cardUpdate)
            .eq('id_karyawan', savedId);

          if (cardError) throw cardError;
        }
      }

      setEditing(null);
      setBpjsKesFile(null);
      setBpjsKetFile(null);
      setCardLinks({ kesehatan: '', ketenagakerjaan: '' });
      setMessage(existing ? 'Data karyawan berhasil diperbarui.' : 'Karyawan berhasil ditambahkan.');
      await load();
      onDataChange?.();
    } catch (error) {
      if (uploadedKes) {
        await supabase.storage.from('bpjs-cards').remove([uploadedKes]).catch(() => undefined);
      }

      if (uploadedKet) {
        await supabase.storage.from('bpjs-cards').remove([uploadedKet]).catch(() => undefined);
      }

      setMessage(error instanceof Error ? error.message : 'Gagal menyimpan data karyawan.');
    } finally {
      setSaving(false);
    }
  }

  async function remove(row: Row) {
    if (!(await appConfirm(t('confirm_delete_employee').replace('{name}', row.nama || row.id_karyawan || t('employee')), { title: t('dialog_confirmation'), cancelText: t('cancel'), confirmText: t('delete') }))) return;

    const { error } = await supabase
      .from('karyawan')
      .delete()
      .eq('id', row.id);

    if (error) {
      setMessage(error.message);
      return;
    }

    await load();
    onDataChange?.();
  }

  const textField = (
    key: string,
    label: string,
    type = 'text',
    disabled = false,
  ) => (
    <label>
      {label}
      <input
        type={type}
        value={String(editing?.[key] ?? '')}
        disabled={saving || disabled}
        onChange={e => updateField(key, e.target.value)}
      />
    </label>
  );

  return <>
    <Header
      title={t('web_all_employees')}
      description={t('web_all_employees_desc')}
      action={t('web_add_employee')}
      onAction={newEmployee}
    />

    <div className="web-f-toolbar">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={t('web_search_employee')}
      />
      <span>{filtered.length} data</span>
      <button
        type="button"
        className="web-f-secondary"
        onClick={() => void load()}
      >
        {t('web_refresh')}
      </button>
    </div>

    {message && <div className="web-f-alert">{message}</div>}

    <div className="web-f-panel web-f-table-panel">
      <div className="web-f-scroll">
        <table className="web-f-table">
          <thead>
            <tr>
              <th>{t('web_name')}</th>
              <th>{t('web_id_employee')}</th>
              <th>{t('web_position')}</th>
              <th>{t('web_department')}</th>
              <th>{t('status')}</th>
              <th>{t('web_basic_salary')}</th>
              <th>{t('web_action')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? filtered.map(row => (
              <tr key={row.id}>
                <td>
                  <b>{row.nama || '—'}</b>
                  <small>{row.email || '—'}</small>
                </td>
                <td>{row.id_karyawan || '—'}</td>
                <td>{row.jabatan || '—'}</td>
                <td>{row.departemen || '—'}</td>
                <td>
                  <span className={`web-f-status ${row.status_aktif === false ? 'danger' : 'success'}`}>
                    {row.status_aktif === false ? t('web_inactive') : t('web_active')}
                  </span>
                </td>
                <td>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                  }).format(Number(row.gaji_pokok) || 0)}
                </td>
                <td>
                  <button
                    type="button"
                    className="web-f-link"
                    onClick={() => openEdit(row)}
                  >
                    {t('web_edit')}
                  </button>
                  {' '}
                  <button
                    type="button"
                    className="web-f-danger"
                    onClick={() => void remove(row)}
                  >
                    {t('web_delete')}
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={7} className="web-f-empty">
                  {t('web_no_employees')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    {editing && (
      <div className="web-f-overlay">
        <form className="web-f-drawer" onSubmit={save}>
          <div className="web-f-drawer-head">
            <div>
              <span>{t("web_organization")}</span>
              <h2>
                {editing.id ? t('web_edit') : t('web_add_employee')}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setEditing(null)}
              aria-label={t('web_close')}
            >
              ×
            </button>
          </div>

          <div className="web-f-form-grid">
            <div style={{ gridColumn: '1 / -1', paddingTop: 2, fontWeight: 800, letterSpacing: '.08em', fontSize: 8 }}>
              {t('web_section_personal')}
            </div>

            {textField('id_karyawan', t('web_id_employee'), 'text', Boolean(editing.id))}
            {textField('nama', t('web_name'))}
            {textField('nik_ktp', t('web_nik_ktp'))}
            {textField('tempat_lahir', t('web_birth_place'))}
            {textField('tanggal_lahir', t('web_birth_date'), 'date')}
            {textField('email', t('email'), 'email')}
            {textField('no_telp', t('web_phone'))}
            {textField('alamat_rumah', t('web_address'))}
            {textField('nama_ibu_kandung', t('web_mother_name'))}

            <label>
              {t('web_gender')}
              <select
                value={String(editing.jenis_kelamin || '')}
                disabled={saving}
                onChange={e => updateField('jenis_kelamin', e.target.value)}
              >
                <option value="">—</option>
                <option value="Laki-laki">{t('web_male')}</option>
                <option value="Perempuan">{t('web_female')}</option>
              </select>
            </label>

            <label>
              {t('web_marital_status')}
              <select
                value={String(editing.status_pernikahan || '')}
                disabled={saving}
                onChange={e => updateField('status_pernikahan', e.target.value)}
              >
                <option value="">—</option>
                <option value="Belum Menikah">{t('web_single')}</option>
                <option value="Menikah">{t('web_married')}</option>
                <option value="Cerai">{t('web_divorced')}</option>
              </select>
            </label>

            <div style={{ gridColumn: '1 / -1', paddingTop: 8, fontWeight: 800, letterSpacing: '.08em', fontSize: 8 }}>
              {t('web_section_work')}
            </div>

            {textField('departemen', t('web_department'))}
            {textField('jabatan', t('web_position'))}
            {textField('level_jabatan', t('web_level_position'))}
            {textField('lokasi_kerja', t('web_work_location'))}
            {textField('tanggal_masuk', t('web_join_date'), 'date')}

            <label>
              {t('web_employee_type')}
              <select
                value={String(editing.tipe_karyawan || 'Tetap')}
                disabled={saving}
                onChange={e => updateField('tipe_karyawan', e.target.value)}
              >
                <option value="Tetap">{t("web_active")}</option>
                <option value="Kontrak">Kontrak</option>
                <option value="Harian">Harian</option>
                <option value="Probation">Probation</option>
              </select>
            </label>

            <label>
              {t('web_employee_status')}
              <select
                value={String(editing.status_karyawan || 'Tetap')}
                disabled={saving}
                onChange={e => updateField('status_karyawan', e.target.value)}
              >
                <option value="Tetap">{t("web_active")}</option>
                <option value="Kontrak">Kontrak</option>
                <option value="Harian">Harian</option>
                <option value="Probation">Probation</option>
                <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </label>

            <label>
              {t('status')}
              <select
                value={editing.status_aktif === false ? 'inactive' : 'active'}
                disabled={saving}
                onChange={e => updateField('status_aktif', e.target.value === 'active')}
              >
                <option value="active">{t('web_active')}</option>
                <option value="inactive">{t('web_inactive')}</option>
              </select>
            </label>

            <div style={{ gridColumn: '1 / -1', paddingTop: 8, fontWeight: 800, letterSpacing: '.08em', fontSize: 8 }}>
              {t('web_section_payroll')}
            </div>

            {textField('gaji_pokok', t('web_basic_salary'), 'number')}
            {textField('bank_name', t('web_bank'))}
            {textField('bank_account', t('web_account_number'))}

            <div style={{ gridColumn: '1 / -1', paddingTop: 8, fontWeight: 800, letterSpacing: '.08em', fontSize: 8 }}>
              {t('web_section_bpjs')}
            </div>

            {textField('bpjs_kesehatan', t('web_bpjs_health'))}
            {textField('bpjs_ketenagakerjaan', t('web_bpjs_work'))}

            <label>
              {t('web_upload_bpjs_health')}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                disabled={saving}
                onChange={e => setBpjsKesFile(e.target.files?.[0] || null)}
              />
              <small>
                {bpjsKesFile?.name ||
                  (cardLinks.kesehatan
                    ? <a href={cardLinks.kesehatan} target="_blank" rel="noreferrer">{t('web_open_saved_card')}</a>
                    : t('web_no_card'))}
              </small>
            </label>

            <label>
              {t('web_upload_bpjs_work')}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                disabled={saving}
                onChange={e => setBpjsKetFile(e.target.files?.[0] || null)}
              />
              <small>
                {bpjsKetFile?.name ||
                  (cardLinks.ketenagakerjaan
                    ? <a href={cardLinks.ketenagakerjaan} target="_blank" rel="noreferrer">{t('web_open_saved_card')}</a>
                    : t('web_no_card'))}
              </small>
            </label>
          </div>

          <div className="web-f-drawer-foot">
            <button
              type="button"
              className="web-f-secondary"
              disabled={saving}
              onClick={() => setEditing(null)}
            >
              {t('cancel')}
            </button>

            <button
              className="web-f-primary"
              disabled={saving}
            >
              {saving ? t('web_processing') : t('web_save_employee')}
            </button>
          </div>
        </form>
      </div>
    )}
  </>;
}

function PendingRegistrationPage({ onDataChange }: { onDataChange?: () => void }) {
  const { t } = useTranslation();
  const [rows, setRows] = useState<Row[]>([]);
  const [selected, setSelected] = useState<Row | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const load = async () => {
    const { data, error } = await supabase.from('karyawan').select('*').eq('email_terverifikasi', false).order('created_at',{ascending:false});
    if (error) setMessage(error.message); else setRows(data || []);
  };
  useEffect(() => { void load(); }, []);
  async function decide(decision: 'Terima'|'Tolak') {
    if (!selected) return;
    setBusy(true); setMessage('');
    const { data, error } = await supabase.functions.invoke('approve-employee-registration', { body: { employee_id: selected.id_karyawan || '', decision } });
    if (error) setMessage(error.message); else if (!data?.ok) setMessage(data?.error || 'Gagal memproses registrasi.');
    else { setSelected(null); await load(); onDataChange?.(); }
    setBusy(false);
  }
  return <>
    <Header title={t("web_pending_registration")} description={t("web_pending_registration_desc")}/>
    {message && <div className="web-f-alert">{message}</div>}
    <DataTable columns={[["nama","Nama"],["id_karyawan","ID"],["email","Email"],["departemen","Departemen"],["jabatan","Jabatan"],["created_at","Dibuat"]]} rows={rows}/>
    {rows.length > 0 && <div className="web-f-panel"><div className="web-f-panel-head"><strong>{t("web_select_applicant")}</strong><select value={selected?.id || ''} onChange={e => setSelected(rows.find(r => r.id === e.target.value) || null)}><option value="">{t("web_select")}</option>{rows.map(r => <option key={r.id} value={r.id}>{r.nama} — {r.id_karyawan}</option>)}</select></div>{selected && <div className="web-f-inline-actions"><button className="web-f-danger" disabled={busy} onClick={() => void decide('Tolak')}>{t("web_reject")}</button><button className="web-f-primary" disabled={busy} onClick={() => void decide('Terima')}>{busy ? t("web_processing") : t("web_accept")}</button></div>}</div>}
  </>;
}

function InactivePage({ onDataChange }: { onDataChange?: () => void }) {
  const { t } = useTranslation();
  const [rows, setRows] = useState<Row[]>([]);
  const [message, setMessage] = useState('');
  const load = async () => { const { data, error } = await supabase.from('karyawan').select('*').eq('status_aktif',false).order('nama'); if(error)setMessage(error.message); else setRows(data||[]); };
  useEffect(()=>{void load()},[]);
  async function activate(id:string){const {error}=await supabase.from('karyawan').update({status_aktif:true}).eq('id',id);if(error)setMessage(error.message);else{await load();onDataChange?.();}}
  return <><Header title={t("web_inactive_employees")} description={t("web_inactive_employees_desc")}/><DataTable columns={[["nama","Nama"],["id_karyawan","ID"],["departemen","Departemen"],["jabatan","Jabatan"],["tanggal_keluar","Keluar"],["alasan_keluar","Alasan"]]} rows={rows}/>{message&&<div className="web-f-alert">{message}</div>}<div className="web-f-panel"><div className="web-f-inline-actions">{rows.map(r=><button key={r.id} type="button" className="web-f-secondary" onClick={()=>void activate(r.id)}>{t("web_reactivate")} {r.nama}</button>)}</div></div></>;
}

function RegistrationPage({ onDataChange }: { onDataChange?: () => void }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ id_karyawan:'', nama:'', nik_ktp:'', email:'', no_telp:'', departemen:'', jabatan:'', tanggal_masuk:'', gaji_pokok:'0', bank_name:'', bank_account:'' });
  const [saving,setSaving]=useState(false); const [message,setMessage]=useState('');
  const field=(key:keyof typeof form,label:string,type='text')=><label>{label}<input type={type} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})}/></label>;
  async function submit(e:FormEvent){e.preventDefault();setSaving(true);setMessage('');const payload={...form,tanggal_masuk:form.tanggal_masuk||null,gaji_pokok:Number(form.gaji_pokok||0),status_aktif:true,status_karyawan:'Tetap',role:'Karyawan',email_terverifikasi:true};const {error}=await supabase.from('karyawan').insert(payload);if(error)setMessage(error.message);else{setMessage('Karyawan berhasil didaftarkan.');setForm({...form,id_karyawan:'',nama:'',nik_ktp:'',email:'',no_telp:'',departemen:'',jabatan:'',tanggal_masuk:'',gaji_pokok:'0',bank_name:'',bank_account:''});onDataChange?.()}setSaving(false)}
  return <><Header title={t("web_employee_registration")} description={t("web_employee_registration_desc")}/><form className="web-f-panel web-f-form-grid web-f-form-panel" onSubmit={submit}>{field('id_karyawan',t('web_id_employee'))}{field('nama',t('web_name'))}{field('nik_ktp','NIK KTP')}{field('email',t('email'),'email')}{field('no_telp',t('web_phone'))}{field('departemen',t('web_department'))}{field('jabatan',t('web_position'))}{field('tanggal_masuk',t('web_join_date'),'date')}{field('gaji_pokok',t('web_basic_salary'),'number')}{field('bank_name',t('web_bank'))}{field('bank_account',t('web_account_number'))}<div className="web-f-form-actions"><button className="web-f-primary" disabled={saving}>{saving?t('web_processing'):t('web_save_employee')}</button></div></form>{message&&<div className="web-f-alert">{message}</div>}</>;
}

function NotificationsPage() {
  const { t } = useTranslation();
  const [rows,setRows]=useState<Row[]>([]); const [email,setEmail]=useState(''); const [message,setMessage]=useState('');
  const load=async()=>{const {data:u}=await supabase.auth.getUser();const e=u.user?.email||'';setEmail(e);const {data,error}=await supabase.from('hris_notifications').select('*').eq('recipient_email',e).order('created_at',{ascending:false}).limit(100);if(error)setMessage(error.message);else setRows(data||[])};
  useEffect(()=>{void load()},[]);
  async function markRead(id:string){const {error}=await supabase.from('hris_notifications').update({is_read:true}).eq('id',id).eq('recipient_email',email);if(error)setMessage(error.message);else load()}
  const unread=rows.filter(r=>!r.is_read).length;
  return <><Header title={t("notifications")} description={t("web_notifications_desc")}/><div className="web-f-kpis"><div><span>{t("web_unread")}</span><strong>{unread}</strong></div><div><span>{t("web_total")}</span><strong>{rows.length}</strong></div></div>{message&&<div className="web-f-alert">{message}</div>}<div className="web-f-list">{rows.length?rows.map(r=><article key={r.id} className={`web-f-notification ${r.is_read?'':'unread'}`}><div><span className="web-f-status info">{r.type||'system'}</span><h3>{r.title||t('notifications')}</h3><p>{r.message||'—'}</p><small>{r.created_at?new Date(r.created_at).toLocaleString('id-ID'):'—'}</small></div>{!r.is_read&&<button className="web-f-secondary" onClick={()=>void markRead(r.id)}>{t("web_mark_read")}</button>}</article>):<div className="web-f-panel web-f-empty">{t("web_no_notifications")}</div>}</div></>;
}

function AnnouncementPage() {
  const { t } = useTranslation();
  const [rows,setRows]=useState<Row[]>([]); const [form,setForm]=useState({title:'',body:'',category:'general',priority:'normal',status:'draft',pinned:false}); const [editing,setEditing]=useState<Row|null>(null); const [message,setMessage]=useState('');
  const load=async()=>{const {data,error}=await supabase.from('hris_announcements').select('*').order('created_at',{ascending:false});if(error)setMessage(error.message);else setRows(data||[])};
  useEffect(()=>{void load()},[]);
  async function save(e:FormEvent){e.preventDefault();const payload={title:form.title.trim(),body:form.body.trim(),category:form.category,priority:form.priority,status:form.status,pinned:form.pinned,published_at:form.status==='published'?new Date().toISOString():null,created_by:(await supabase.auth.getUser()).data.user?.email||null,updated_at:new Date().toISOString()};const q=editing?supabase.from('hris_announcements').update(payload).eq('id',editing.id):supabase.from('hris_announcements').insert(payload);const {error}=await q;if(error)setMessage(error.message);else{setForm({title:'',body:'',category:'general',priority:'normal',status:'draft',pinned:false});setEditing(null);await load()}}
  async function remove(id:string){if(!(await appConfirm(t('confirm_delete_announcement'),{title:t('dialog_confirmation'),cancelText:t('cancel'),confirmText:t('delete')})))return;const {error}=await supabase.from('hris_announcements').delete().eq('id',id);if(error)setMessage(error.message);else load()}
  return <><Header title={t("web_announcements")} description={t("web_announcements_desc")} action={editing?t('cancel'):t('web_new_announcement')} onAction={()=>setEditing(editing?null:{})}/>{message&&<div className="web-f-alert">{message}</div>}<div className="web-f-panel web-f-form-grid"><label>{t("web_name")}<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label><label>{t("web_general")}<select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}><option value="general">{t("web_general")}</option><option value="hr">{t("web_hr")}</option><option value="attendance">{t("web_attendance")}</option><option value="holiday">{t("web_holiday")}</option><option value="important">{t("web_important")}</option><option value="urgent">{t("web_urgent")}</option></select></label><label>{t("web_important")}<select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}><option value="normal">{t("web_normal")}</option><option>important</option><option>urgent</option></select></label><label>{t("status")}<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option>draft</option><option>published</option><option>archived</option></select></label><label className="web-f-check"><input type="checkbox" checked={form.pinned} onChange={e=>setForm({...form,pinned:e.target.checked})}/> {t("web_important")} Pin</label><label className="web-f-wide">{t("web_content")}<textarea rows={6} value={form.body} onChange={e=>setForm({...form,body:e.target.value})}/></label><div className="web-f-form-actions"><button className="web-f-primary" onClick={save}>{t("web_save")}</button></div></div><div className="web-f-list">{rows.map(r=><article className="web-f-announcement" key={r.id}><div><span className="web-f-status info">{r.status}</span> <span className="web-f-status">{r.priority}</span><h3>{r.title}</h3><p>{r.body}</p><small>{r.created_at?new Date(r.created_at).toLocaleString('id-ID'):'—'}</small></div><div className="web-f-inline-actions"><button className="web-f-link" onClick={()=>{setEditing(r);setForm({title:r.title||'',body:r.body||'',category:r.category||'general',priority:r.priority||'normal',status:r.status||'draft',pinned:!!r.pinned})}}>{t("web_edit")}</button><button className="web-f-danger" onClick={()=>void remove(r.id)}>{t("web_delete")}</button></div></article>)}</div></>;
}

function FeedbackPage() {
  const { t } = useTranslation();
  const [rows,setRows]=useState<Row[]>([]); const [filter,setFilter]=useState('Semua'); const [message,setMessage]=useState('');
  const load=async()=>{const {data,error}=await supabase.from('hris_employee_feedback').select('*').order('created_at',{ascending:false}).limit(200);if(error)setMessage(error.message);else setRows(data||[])};
  useEffect(()=>{void load()},[]);
  async function update(id:string, patch:Row){const {error}=await supabase.from('hris_employee_feedback').update({...patch,updated_at:new Date().toISOString()}).eq('id',id);if(error)setMessage(error.message);else load()}
  return <><Header title={t("web_feedback")} description={t("web_feedback_desc")}/><div className="web-f-toolbar"><select value={filter} onChange={e=>setFilter(e.target.value)}><option>Semua</option><option>Baru</option><option>Diproses</option><option>Selesai</option></select><span>{rows.filter(r=>filter==='Semua'||r.status===filter).length} feedback</span><button className="web-f-secondary" onClick={()=>void load()}>{t("web_refresh")}</button></div>{message&&<div className="web-f-alert">{message}</div>}<div className="web-f-list">{rows.filter(r=>filter==='Semua'||r.status===filter).map(r=><article className="web-f-feedback" key={r.id}><div><span className="web-f-status">{r.kategori||'Masukan'}</span><span className={`web-f-status ${r.status==='Selesai'?'success':r.status==='Baru'?'warning':'info'}`}>{r.status||'Baru'}</span><h3>{r.judul||'Tanpa judul'}</h3><p>{r.isi||'—'}</p><small>{r.id_karyawan||'—'} · {r.created_at?new Date(r.created_at).toLocaleString('id-ID'):'—'}</small></div><div className="web-f-inline-actions"><select value={r.status||'Baru'} onChange={e=>void update(r.id,{status:e.target.value})}><option>Baru</option><option>Diproses</option><option>Selesai</option></select>{r.tanggapan_hr&&<span className="web-f-response">{t('reply_prefix')} {r.tanggapan_hr}</span>}<button className="web-f-secondary" onClick={async()=>{const reply=await appPrompt(t("web_hr_reply"),r.tanggapan_hr||'',{title:t("web_hr_reply"),cancelText:t('cancel'),confirmText:t('web_save')});if(reply!==null)await update(r.id,{tanggapan_hr:reply,status:r.status==='Baru'?'Diproses':r.status})}}>{t("web_reply")}</button></div></article>)}</div></>;
}

function KaryawanHub({ onDataChange }: { onDataChange?: () => void }) {
  const { t } = useTranslation();
  const [tab,setTab]=useState('employees'); const [rows,setRows]=useState<Row[]>([]); const [employeeId,setEmployeeId]=useState(''); const employeeData = rows.map(row => ({...row,id: String(row.id_karyawan ?? row.id ?? ''),nama: String(row.nama ?? '')}));
  useEffect(()=>{void supabase.from('karyawan').select('*').order('nama').then(({data})=>setRows(data||[]))},[]);
  const employees=rows; return <>
    <Header title={t("web_employee_module")} description={t("web_employee_module_desc")}/>
    <Tabs value={tab} onChange={setTab} items={[['employees',t('web_all_employees')],['pending',t('web_pending_registration')],['inactive',t('web_inactive_employees')],['360',t('web_employee_360')],['idcard',t('id_card')],['bpjs',t('bpjs')],['organization',t('web_organization')],['hr',t('web_hr_operations')]]}/>
    {tab==='employees'&&<EmployeeListPage onDataChange={onDataChange}/>}
    {tab==='pending'&&<PendingRegistrationPage onDataChange={onDataChange}/>}
    {tab==='inactive'&&<InactivePage onDataChange={onDataChange}/>}
    {tab==='360'&&<><div className="web-f-toolbar"><select value={employeeId} onChange={e=>setEmployeeId(e.target.value)}><option value="">{t("web_select")} {t("web_employee_module")}</option>{employees.map(e=><option key={e.id_karyawan} value={e.id_karyawan}>{e.nama} — {e.id_karyawan}</option>)}</select></div><Employee360 employees={employeeData} initialEmployeeId={employeeId}/></>}
    {tab==='idcard'&&<IDCardModule employees={employeeData} companyName="Project by Tirta" logoUrl={moonLogo}/>}
    {tab==='bpjs'&&<BPJSModule/>}
    {tab==='organization'&&<MasterData/>}
    {tab==='hr'&&<HRISCore employees={employeeData}/>}
  </>;
}

function ReportsHub() {
  const { t } = useTranslation();
  const [tab,setTab]=useState('attendance'); const [employees,setEmployees]=useState<Row[]>([]); const employeeData = employees.map(row => ({ ...row, id: String(row.id_karyawan ?? ''), nama: String(row.nama ?? '') })); const [attendance,setAttendance]=useState<Row[]>([]); void attendance;
  useEffect(()=>{void Promise.all([supabase.from('karyawan').select('*').order('nama'),supabase.from('absensi').select('*').order('tanggal',{ascending:false}).limit(1000)]).then(([k,a])=>{setEmployees(k.data||[]);setAttendance(a.data||[])})},[]);
  return <><Header title={t("web_reports")} description={t("web_reports_desc")}/><Tabs value={tab} onChange={setTab} items={[['attendance',t('web_attendance')],['shift',t('shift')],['payroll',t('web_payroll')],['overtime',t('web_overtime')],['payslip',t('web_payslip')],['performance',t('web_performance')],['recruitment',t('web_recruitment')],['enterprise',t('web_people_analytics')]]}/>
    {tab==='attendance'&&<AttendanceUnified/>}
    {tab==='shift'&&<AttendanceShiftV24/>}
    {tab==='payroll'&&<PayrollEnterprise employees={employeeData} view="payroll"/>}
    {tab==='overtime'&&<PayrollEnterprise employees={employeeData} view="overtime"/>}
    {tab==='payslip'&&<PayrollEnterprise employees={employeeData} view="payslip"/>}
    {tab==='performance'&&<EnterpriseRoadmapV26V35 version="v27"/>}
    {tab==='recruitment'&&<RecruitmentATSv25/>}
    {tab==='enterprise'&&<EnterpriseV20 employees={employeeData}/>}
    <div className="web-f-note">Data laporan aktif berasal dari tabel Supabase yang sesuai. Tidak ada data dummy yang digunakan oleh halaman fitur.</div>
  </>;
}

function SettingsHub({
  initialTab = 'roles',
  standalone = false,
}: {
  initialTab?: string;
  standalone?: boolean;
}) {
  const { t } = useTranslation();
  const [tab, setTab] = useState(initialTab);
  const [employees, setEmployees] = useState<Row[]>([]);
  const [attendance, setAttendance] = useState<Row[]>([]);
  const employeeData = employees.map(row => ({
    ...row,
    id: String(row.id_karyawan ?? row.id ?? ''),
    nama: String(row.nama ?? ''),
  }));
  const [role, setRole] = useState('Super Admin');
  const [perms, setPerms] = useState<string[]>([]);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    void Promise.all([
      supabase.from('karyawan').select('*').order('nama'),
      supabase.from('absensi').select('*').order('tanggal', { ascending: false }).limit(500),
      supabase.auth.getUser(),
    ]).then(async ([k, a, u]) => {
      setEmployees(k.data || []);
      setAttendance(a.data || []);
      if (u.data.user?.email) {
        const { data: p } = await supabase
          .from('hris_users')
          .select('role')
          .ilike('email', u.data.user.email)
          .maybeSingle();
        const r = p?.role || 'Super Admin';
        setRole(r);
        const { data: rp } = await supabase
          .from('hris_role_permissions')
          .select('permission_code')
          .eq('role_name', r);
        setPerms((rp || []).map(x => x.permission_code));
      }
    });
  }, []);

  const moduleMeta: Record<string, [string, string]> = {
    roles: ['Peran & Hak Akses', 'Kelola peran, permission, dan akses modul.'],
    notifications: ['Notifikasi', 'Kelola pusat notifikasi dan pemberitahuan HR.'],
    security: ['Pusat Keamanan', 'Kelola kontrol keamanan aplikasi dan akses.'],
    ai: ['AI HR Center', 'Pusat AI untuk analitik dan otomasi proses HR.'],
    professional: ['Operasional Profesional', 'Dashboard operasional HR untuk kebutuhan harian.'],
    'payroll-engine': ['Payroll Engine', 'Mesin penggajian dan perhitungan payroll.'],
    'hr-production': ['Pusat Transaksi HR', 'Transaksi dan proses operasional HR terpusat.'],
    'payroll-control': ['Kontrol Penggajian', 'Kontrol produksi payroll dan verifikasi proses.'],
    'payroll-indonesia': ['Kepatuhan Payroll Indonesia', 'Kepatuhan dan aturan payroll Indonesia.'],
    enterprise: ['Pusat Kendali Platform', 'Kontrol platform dan modul HR terintegrasi.'],
    v26: ['Dokumen & Kepatuhan', 'Dokumen, kebijakan, dan kontrol kepatuhan.'],
    v27: ['Kinerja & KPI Lanjutan', 'KPI dan pengukuran kinerja tingkat lanjut.'],
    v28: ['Analitik SDM & BI', 'Analitik HR dan business intelligence.'],
    v29: ['Pusat Notifikasi & Kotak Masuk HR', 'Kotak masuk, notifikasi, dan tindak lanjut HR.'],
    v30: ['Layanan Mandiri Karyawan (ESS)', 'Layanan mandiri karyawan dan akses informasi pribadi.'],
    v31: ['Pusat QA & Pengujian', 'Quality assurance dan pengujian modul HR.'],
    v32: ['Optimasi Produksi', 'Optimasi proses dan kesiapan produksi.'],
    v33: ['Multi-Perusahaan', 'Pengelolaan lingkungan dan entitas multi-perusahaan.'],
    v34: ['API & Integrasi', 'Integrasi API dan koneksi sistem eksternal.'],
    v35: ['AI HR & Otomasi', 'Otomasi alur kerja HR berbasis AI.'],
  };

  const [title, description] = moduleMeta[tab] || ['Pengaturan Sistem', 'Konfigurasi, keamanan, dan akses sistem HR.'];
  const items: Array<[string, string]> = [
    ['roles', t('web_roles_permissions')],
    ['notifications', t('notifications')],
    ['security', t('web_security_center')],
    ['ai', t('web_ai_hr_center')],
    ['professional', t('web_professional_operations')],
    ['payroll-engine', t('web_payroll_engine')],
    ['hr-production', t('web_hr_transaction_center')],
    ['payroll-control', t('web_payroll_control')],
    ['payroll-indonesia', t('web_payroll_indonesia')],
  ];

  return <>
    <Header title={title} description={description}/>
    {!standalone && <Tabs value={tab} onChange={setTab} items={items}/>}
    {tab === 'roles' && <RoleEditorEnterprise userRole={role}/>}
    {tab === 'notifications' && <NotificationsPage/>}
    {tab === 'security' && <SecurityCenterV21/>}
    {tab === 'ai' && <AICenter dbPerms={perms} userRole={role}/>}
    {tab === 'professional' && <ProfessionalSuite employees={employeeData} attendance={attendance} onNavigate={()=>{}}/>}
    {tab === 'payroll-engine' && <PayrollEngineV9/>}
    {tab === 'hr-production' && <ProductionHR employees={employeeData}/>}
    {tab === 'payroll-control' && <PayrollProductionV22/>}
    {tab === 'payroll-indonesia' && <PayrollIndonesiaV23/>}
    {tab === 'enterprise' && <EnterpriseV20 employees={employeeData}/>}
    {['v26','v27','v28','v29','v30','v31','v32','v33','v34','v35'].includes(tab) && <EnterpriseRoadmapV26V35 version={tab as any}/>}
  </>;
}

function ApprovalsHub() {
  const { t } = useTranslation(); return <><Header title={t("web_approval_center")} description={t("web_approval_center_desc")}/><ApprovalCenter/></>; }

function FeatureBody({ route, onDataChange }: { route: string; onDataChange?: () => void }) {
  if (route === 'karyawan') return <KaryawanHub onDataChange={onDataChange}/>;
  if (route === 'registrasi') return <RegistrationPage onDataChange={onDataChange}/>;
  if (route === 'approval') return <ApprovalsHub/>;
  if (route === 'pengumuman') return <AnnouncementPage/>;
  if (route === 'feedback') return <FeedbackPage/>;
  if (route === 'laporan') return <ReportsHub/>;
  if (route === 'pengaturan') return <SettingsHub/>;
  if (route === 'roles') return <SettingsHub initialTab="roles" standalone/>;
  if (route === 'security') return <SettingsHub initialTab="security" standalone/>;
  if (route === 'notifications') return <SettingsHub initialTab="notifications" standalone/>;
  if (route === 'ai-center') return <SettingsHub initialTab="ai" standalone/>;
  if (route === 'professional-suite') return <SettingsHub initialTab="professional" standalone/>;
  if (route === 'payroll-engine') return <SettingsHub initialTab="payroll-engine" standalone/>;
  if (route === 'hr-transaction-center') return <SettingsHub initialTab="hr-production" standalone/>;
  if (route === 'payroll-control') return <SettingsHub initialTab="payroll-control" standalone/>;
  if (route === 'payroll-indonesia') return <SettingsHub initialTab="payroll-indonesia" standalone/>;
  if (route === 'enterprise-v20') return <SettingsHub initialTab="enterprise" standalone/>;
  if (/^enterprise-v2[6-9]$|^enterprise-v3[0-5]$/.test(route)) {
    return <SettingsHub initialTab={route.replace('enterprise-', '')} standalone/>;
  }
  return <KaryawanHub onDataChange={onDataChange}/>;
}

export default function WebAdminFeatures({ route, name, role, onNavigate, onDataChange }: Props) {
  void name; void role; void onNavigate;
  return <div className="web-feature-page">
    <style>{`
      .web-feature-page,.web-feature-page *{box-sizing:border-box}
      .web-feature-page{width:100%;min-height:calc(100dvh - 78px);padding:10px 12px 34px;color:#eaf2fb;font:8px Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
      .web-feature-page button,.web-feature-page input,.web-feature-page select,.web-feature-page textarea{font:inherit}
      .web-feature-heading{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;padding:10px 0 9px}
      .web-feature-heading h1{margin:2px 0 3px;font-size:16px;color:#fff}
      .web-feature-heading p{margin:0;color:#8298b1;font-size:8px;line-height:1.45;max-width:760px}
      .web-feature-kicker{font-size:5px;letter-spacing:.16em;color:var(--w2-accent);font-weight:900}
      .web-feature-tabs{display:flex;gap:4px;overflow:auto;padding:3px 0 8px;margin-bottom:5px}
      .web-feature-tabs button{flex:0 0 auto;border:1px solid rgba(166,202,242,.16);border-radius:7px;padding:6px 8px;background:rgba(4,13,25,.60);color:#aebfd2;cursor:pointer}
      .web-feature-tabs button.active{color:#07111d;background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));border-color:transparent;font-weight:900}
      .web-feature-loading{padding:22px;text-align:center;color:#9db1c8}
      .web-f-panel{border:1px solid rgba(166,202,242,.15);border-radius:10px;background:rgba(3,11,22,.70);padding:10px;margin:6px 0}
      .web-f-panel-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
      .web-f-panel-head strong{font-size:9px}
      .web-f-table-panel{padding:0;overflow:hidden}
      .web-f-scroll{overflow:auto}
      .web-f-table{width:100%;min-width:700px;border-collapse:collapse}
      .web-f-table th,.web-f-table td{padding:7px 8px;border-bottom:1px solid rgba(157,195,236,.09);text-align:left;vertical-align:middle}
      .web-f-table th{font-size:6px;color:#7890aa;text-transform:uppercase;letter-spacing:.08em}
      .web-f-table td{font-size:7px;color:#d4dfec}
      .web-f-table td small{display:block;margin-top:2px;color:#71869d;font-size:5px}
      .web-f-empty{text-align:center;color:#72869e;padding:24px}
      .web-f-toolbar{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:5px 0 8px}
      .web-f-toolbar input,.web-f-toolbar select{flex:1 1 220px;min-height:28px}
      .web-f-toolbar span{color:#8196ae}
      .web-f-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
      .web-f-form-grid label{display:grid;gap:3px;color:#8aa0b7}
      .web-f-form-grid .web-f-wide{grid-column:1/-1}
      .web-f-form-actions{grid-column:1/-1;display:flex;justify-content:flex-end;gap:6px;margin-top:2px}
      .web-f-form-panel{padding:11px}
      .web-f-check{display:flex;align-items:center;gap:5px}
      .web-f-inline-actions{display:flex;gap:5px;justify-content:flex-end;align-items:center;flex-wrap:wrap}
      .web-f-alert{border:1px solid rgba(255,190,110,.18);border-radius:8px;padding:8px 10px;background:rgba(255,174,73,.06);color:#ffd59e;margin:7px 0}
      .web-f-primary,.web-f-secondary,.web-f-danger,.web-f-link{border-radius:7px;padding:6px 9px;cursor:pointer}
      .web-f-primary{border:1px solid rgba(255,255,255,.15);color:#07111e;background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));font-weight:900}
      .web-f-secondary{border:1px solid rgba(157,200,242,.18);color:#d4e1ef;background:rgba(255,255,255,.035)}
      .web-f-danger{border:1px solid rgba(255,113,140,.22);color:#ff9caf;background:rgba(255,70,105,.05)}
      .web-f-link{border:0;background:transparent;color:var(--w2-accent);padding:3px 4px}
      .web-f-primary:disabled,.web-f-secondary:disabled,.web-f-danger:disabled{opacity:.45;cursor:not-allowed}
      .web-f-status{display:inline-flex;align-items:center;padding:3px 5px;border-radius:999px;background:rgba(133,169,212,.08);border:1px solid rgba(133,169,212,.16);color:#bcd0e5;margin-right:4px;font-size:6px}
      .web-f-status.success{color:#9af3bc;border-color:rgba(112,235,158,.22);background:rgba(92,220,135,.08)}
      .web-f-status.warning{color:#ffd599;border-color:rgba(255,194,96,.22);background:rgba(255,178,63,.08)}
      .web-f-status.danger{color:#ff9dad;border-color:rgba(255,99,127,.22);background:rgba(255,72,103,.08)}
      .web-f-status.info{color:#a6d7ff;border-color:rgba(79,184,255,.22);background:rgba(73,169,255,.08)}
      .web-f-panel input,.web-f-panel select,.web-f-panel textarea,.web-f-toolbar input,.web-f-toolbar select{width:100%;border:1px solid rgba(164,202,239,.16);border-radius:7px;background:rgba(3,10,20,.72);color:#eaf3fd;padding:6px 7px;outline:none}
      .web-f-panel input:focus,.web-f-panel select:focus,.web-f-panel textarea:focus,.web-f-toolbar input:focus,.web-f-toolbar select:focus{border-color:var(--w2-accent);box-shadow:0 0 0 1px color-mix(in srgb,var(--w2-accent) 25%,transparent)}
      .web-f-list{display:grid;gap:6px}
      .web-f-notification,.web-f-announcement,.web-f-feedback{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;border:1px solid rgba(164,202,239,.13);border-radius:10px;background:rgba(4,13,25,.63);padding:9px}
      .web-f-notification.unread{border-color:color-mix(in srgb,var(--w2-accent) 35%,rgba(164,202,239,.13));box-shadow:0 0 0 1px color-mix(in srgb,var(--w2-accent) 10%,transparent)}
      .web-f-notification h3,.web-f-announcement h3,.web-f-feedback h3{margin:4px 0 3px;font-size:9px;color:#fff}
      .web-f-notification p,.web-f-announcement p,.web-f-feedback p{margin:0;color:#a0b2c7;line-height:1.45}
      .web-f-notification small,.web-f-announcement small,.web-f-feedback small{display:block;margin-top:5px;color:#6f849c;font-size:5px}
      .web-f-response{color:#92a8bf;font-size:6px}
      .web-f-kpis{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;margin:6px 0}
      .web-f-kpis>div{border:1px solid rgba(164,202,239,.13);border-radius:9px;background:rgba(4,13,25,.58);padding:9px}
      .web-f-kpis span{display:block;color:#8297ae;font-size:6px}.web-f-kpis strong{display:block;margin-top:3px;font-size:18px;color:#fff}
      .web-f-note{margin-top:8px;color:#6f849d;font-size:6px;text-align:center}
      .web-f-overlay{position:fixed;inset:0;z-index:70;display:flex;justify-content:flex-end;background:rgba(0,0,0,.42)}
      .web-f-drawer{width:min(620px,94vw);height:100%;padding:12px;border-left:1px solid rgba(168,205,244,.20);background:rgba(3,10,20,.97);overflow:auto}
      .web-f-drawer-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:10px}.web-f-drawer-head span{font-size:5px;letter-spacing:.12em;color:var(--w2-accent)}.web-f-drawer-head h2{margin:3px 0;font-size:14px}.web-f-drawer-head>button{border:0;background:transparent;color:#9bb0c7;font-size:17px;cursor:pointer}.web-f-drawer-foot{display:flex;justify-content:flex-end;gap:6px;margin-top:10px}
      .module-page,.professional-suite,.enterprise-analytics-group{background:transparent;border:0;padding:0;margin:0}
      .module-page .page-heading,.professional-suite .page-heading{background:transparent;border:0;box-shadow:none;padding:8px 0}
      .module-page .panel,.module-page .table-card,.professional-suite .panel,.professional-suite .stat-card,.module-page .stat-card,.module-page .compact-panel,.module-page .table-panel,.module-page .toolbar-panel,.module-page .content-grid,.professional-suite .branch-tabs,.module-page .branch-tabs{box-shadow:none}
      .module-page .panel,.module-page .table-card,.professional-suite .panel,.module-page .compact-panel,.module-page .table-panel,.module-page .toolbar-panel{background:rgba(3,11,22,.70);border:1px solid rgba(166,202,242,.14);border-radius:10px}
      .module-page .panel-head h2,.module-page .page-heading h1,.professional-suite h1{color:#fff}.module-page .panel-head p,.module-page .page-heading p,.professional-suite p{color:#8196ad}
      .module-page button,.professional-suite button{border-radius:7px}
      .module-page table,.professional-suite table{color:#d9e5f2}.module-page th,.professional-suite th{color:#70869f;font-size:6px}.module-page td,.professional-suite td{font-size:7px}
      .stat-grid,.mini-kpi-row,.ess-kpis{gap:6px}.stat-card,.ess-kpi{background:rgba(5,14,28,.68);border:1px solid rgba(166,202,242,.13);border-radius:9px;box-shadow:none}.stat-card strong,.ess-kpi strong{color:#fff}
      .branch-nav,.branch-tabs{display:flex;gap:4px;flex-wrap:wrap}.branch-nav button,.branch-tabs button{border:1px solid rgba(166,202,242,.15);background:rgba(4,13,25,.62);color:#aebfd1;padding:6px 8px}.branch-nav button.active,.branch-tabs button.active{background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));color:#07111d}
      .kanban-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.kanban-col{background:rgba(3,11,22,.55);border:1px solid rgba(166,202,242,.11);border-radius:9px;padding:7px}.kanban-card{margin-top:5px;padding:7px;border:1px solid rgba(166,202,242,.10);border-radius:8px;background:rgba(255,255,255,.025)}.kanban-card small{display:block;color:#72879e;margin:2px 0 5px}
      .role-builder{display:grid;grid-template-columns:240px minmax(0,1fr);gap:7px}.permission-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px}.permission-item{padding:5px;border:1px solid rgba(164,202,239,.10);border-radius:7px;background:rgba(255,255,255,.02)}
      @media(max-width:900px){.web-f-form-grid{grid-template-columns:1fr}.role-builder{grid-template-columns:1fr}.kanban-grid{grid-template-columns:1fr}.web-f-notification,.web-f-announcement,.web-f-feedback{flex-direction:column}.web-feature-heading{flex-direction:column}}
    `}</style>

    <Suspense fallback={<LoadingFeature />}>
      <FeatureBody route={route} onDataChange={onDataChange}/>
    </Suspense>
  </div>;
}
