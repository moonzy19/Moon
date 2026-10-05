import PayrollIndonesiaV23 from '../payroll/PayrollIndonesiaV23';
import { useEffect, useMemo, useState, useRef, type FormEvent, type ReactNode, type CSSProperties } from 'react';
import { isSupabaseConfigured, supabase } from '../../../lib/supabase/client';
import { signIn, signOut } from '../../../lib/auth';
import { rupiah as money } from '../../../lib/hris';
import { canDelete, canWrite, hasPermission } from '../../../lib/security';

import MasterData from '../employee/MasterData';
import { PayrollEnterprise, RecruitmentEnterprise, RoleEditorEnterprise, ApprovalCenter } from '../enterprise/EnterpriseModules';
import { PayrollEngineV9 } from '../payroll/PayrollEngineV9';
import Employee360 from '../employee/Employee360';
import HRISCore from '../core/HRISCore';
import ProductionHR from '../payroll/ProductionHR';
import EnterpriseV20 from '../enterprise/EnterpriseV20';
import SecurityCenterV21 from '../security/SecurityCenterV21';
import PayrollProductionV22 from '../payroll/PayrollProductionV22';
import RecruitmentATSv25 from '../recruitment/RecruitmentATSv25';
import EnterpriseRoadmapV26V35 from '../enterprise/EnterpriseRoadmapV26V35';
import ProfessionalSuite from '../enterprise/ProfessionalSuite';
import moonLogo from '../../../assets/moon-logo.png';
import IDCardModule from '../employee/IDCardModule';
import SiDebarFloatingNavigator from '../../common/SiDebarFloatingNavigator';

import { SUPPORTED_LANGUAGES, useTranslation } from '../../../locales/LanguageContext';
import { appAlert, appConfirm, appPrompt } from '../../../lib/app-dialog';
import AdminAnnouncementManager from '../../../features/announcements/AdminAnnouncementManager';
import type { Announcement } from '../../../features/announcements/types';
import AttendanceUnified from './AttendanceUnified';
import { getCosmicTheme, COSMIC_THEMES, type CosmicThemeId } from '../../../theme/professionalTheme';
import AICenter from './AICenter';
import {
  saveUserThemePreference,
  getPublicAppTheme,
  applyProjectTheme,
  setEmployeePortalTheme,
  setPublicAppTheme,
  saveCustomThemeCache
} from '../../../lib/userPreferences';

type Karyawan = {
  id: string;
  id_karyawan?: string;
  nama: string;
  jabatan?: string;
  departemen?: string;
  email?: string;
  no_telp?: string;
  alamat_rumah?: string;
  nik_ktp?: string;
  tempat_lahir?: string;
  bank_name?: string;
  bank_account?: string;
  nama_ibu_kandung?: string;
  jenis_kelamin?: string;
  status_pernikahan?: string;
  gaji_pokok?: number;
  tanggal_lahir?: string;
  tanggal_masuk?: string;
  status_aktif?: boolean;
  status_karyawan?: string;
  role?: string;
  auth_user_id?: string | null;
  email_terverifikasi?: boolean;
  foto_url?: string | null;
  bpjs_kesehatan?: string | null;
  bpjs_ketenagakerjaan?: string | null;
  bpjs_kesehatan_card_path?: string | null;
  bpjs_ketenagakerjaan_card_path?: string | null;
  created_at?: string;
};

interface Absensi {
  id?: string | number;
  id_karyawan?: string;
  nama?: string;
  tanggal?: string;
  jam_masuk?: string;
  jam_pulang?: string;
  total_jam?: string;
  status?: string;
  lokasi?: string;
  lokasi_masuk?: string;
  latitude?: number | string | null;
  longitude?: number | string | null;
  accuracy?: number | string | null;
  akurasi_masuk?: number | string | null;
  akurasi_pulang?: number | string | null;
  latitude_masuk?: number | string | null;
  longitude_masuk?: number | string | null;
  accuracy_masuk?: number | string | null;
  keterlambatan_menit?: number | string;
  lembur_menit?: number | string;
  foto?: string;
  selfie_masuk?: string;
  keterangan?: string | null;
}

type SidebarSection = {
  key: string;
  title: string;
  items: Array<[MenuKey, string, string]>;
};

type MenuKey =
  | 'overview' | 'employees' | 'employee-new' | 'employee-inactive' | 'employee-360' | 'employee-add' | 'id-card' | 'organization' | 'hr-operations'
  | 'attendance' | 'attendance-today' | 'late' | 'leave' | 'overtime' | 'selfie' | 'gps'
  | 'schedule' | 'shift' | 'holiday' | 'leave-request' | 'leave-balance' | 'approvals'
  | 'payroll' | 'production-hr' | 'payroll-engine' | 'payroll-production-v22' | 'payroll-components' | 'payroll-overtime' | 'payslip'
  | 'performance' | 'kpi' | 'recruitment-v25' | 'recruitment' | 'candidates'
  | 'reports' | 'settings' | 'roles' | 'audit' | 'notifications' | 'feedback' | 'announcements' | 'system-health'
  | 'professional-suite' | 'ai-center' | 'enterprise-v20' | 'security-v21' | 'payroll-indonesia-v23'
  | `enterprise-v${26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35}`;

const isoToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(new Date());

const REPORT_SUBPAGE_KEYS: MenuKey[] = ['attendance','schedule','shift','holiday','payroll','payroll-components','payroll-overtime','payslip','performance','kpi','recruitment-v25','recruitment','candidates'];

const rolePermissions: Record<string, string[]> = {
  'Super Admin': ['*'],
  'Admin': ['people', 'attendance', 'schedule', 'leave', 'payroll', 'talent', 'reports', 'system'],
  'HRD': ['people', 'attendance', 'schedule', 'leave', 'talent', 'reports'],
  'Payroll': ['people.read', 'attendance.read', 'payroll', 'reports.payroll'],
  'Supervisor': ['people.read', 'attendance.read', 'schedule.read', 'leave.read', 'leave.approve', 'reports.attendance'],
  'Karyawan': []
};

const menuGroup = (key: MenuKey) =>
  ['professional-suite', 'ai-center', 'enterprise-v35'].includes(key) ? 'system' :
  ['employees', 'employee-new', 'employee-inactive', 'id-card', 'employee-360', 'employee-add', 'organization', 'enterprise-v26', 'enterprise-v30', 'enterprise-v33'].includes(key) ? 'people' :
  ['attendance', 'attendance-today', 'late', 'leave', 'overtime', 'selfie'].includes(key) ? 'attendance' :
  ['schedule', 'shift', 'holiday'].includes(key) ? 'schedule' :
  ['leave-request', 'leave-balance', 'approvals', 'enterprise-v20', 'enterprise-v32'].includes(key) ? 'leave' :
  ['payroll', 'payroll-components', 'payroll-overtime', 'payslip', 'production-hr', 'payroll-engine', 'payroll-production-v22', 'payroll-indonesia-v23'].includes(key) ? 'payroll' :
  ['performance', 'kpi', 'enterprise-v27'].includes(key) ? 'talent' :
  ['recruitment', 'candidates', 'recruitment-v25'].includes(key) ? 'recruitment' :
  ['enterprise-v28'].includes(key) ? 'reports' :
  ['enterprise-v29'].includes(key) ? 'notifications' :
  ['enterprise-v31', 'enterprise-v34', 'security-v21'].includes(key) ? 'system' :
  key === 'reports' ? 'reports' :
  key === 'settings' ? 'settings' :
  key === 'roles' ? 'roles' :
  key === 'audit' ? 'audit' :
  key === 'notifications' ? 'notifications' :
  key === 'system-health' ? 'system' : 'overview';

const requiredPermission = (key: MenuKey) => {
  if (key === 'ai-center') return 'ai_hr_center';
  if (key === 'professional-suite') return 'system.health';
  if (key === 'hr-operations') return 'people.read';
  if (key === 'production-hr' || key === 'payroll-engine' || key === 'payroll-production-v22') return 'payroll.read';
  
  const g = menuGroup(key); 
  if (key === 'employee-add') return 'people.write'; 
  if (key === 'roles') return 'roles.read'; 
  if (key === 'settings') return 'settings.write'; 
  if (key === 'audit') return 'audit.read'; 
  if (key === 'approvals') return 'approval.read'; 
  if (key === 'notifications') return 'notifications.read'; 
  if (key === 'system-health') return 'system.health';
  if (key === 'enterprise-v20') return 'people.read';
  if (key === 'enterprise-v26') return 'people.read';
  if (key === 'enterprise-v27') return 'talent.read';
  if (key === 'enterprise-v28') return 'reports.read';
  if (key === 'enterprise-v29') return 'notifications.read';
  if (key === 'enterprise-v30') return 'people.read';
  if (key === 'enterprise-v32') return 'system.health';
  if (key === 'enterprise-v33') return 'people.read';
  if (key === 'enterprise-v31' || key === 'enterprise-v34' || key === 'enterprise-v35') return 'system.health';
  if (key === 'payroll-indonesia-v23') return 'payroll.read';
  if (key === 'security-v21') return 'security.read'; 
  if (key === 'overtime') return 'overtime.read'; 
  if (key === 'reports') return 'reports.read'; 
  if (g === 'recruitment') return 'recruitment.read'; 
  if (g === 'talent') return 'talent.read'; 
  return g === 'overview' ? '' : `${g}.read`;
};

const menuPermissionForRole = (key: MenuKey, role: string, dbPerms: string[] = []) => {
  if (key === 'feedback') {
    return role === 'Super Admin'
      || dbPerms.includes('feedback.read')
      || hasPermission(dbPerms, 'feedback.read', role)
      || hasPermission(rolePermissions[role] || [], 'feedback.read', role);
  }
  if (key === 'announcements') {
    return role === 'Super Admin'
      || dbPerms.includes('announcements.read')
      || hasPermission(dbPerms, 'announcements.read', role)
      || hasPermission(rolePermissions[role] || [], 'announcements.read', role);
  }
  if (role === 'Super Admin' || requiredPermission(key) === '' || dbPerms.includes('*')) return true;
  const req = requiredPermission(key);
  if (key === 'approvals') return ['approval.read', 'leave.approve', 'overtime.approve', 'payroll.approve', 'recruitment.approve'].some(p => hasPermission(dbPerms, p, role) || hasPermission(rolePermissions[role] || [], p, role));
  return hasPermission(dbPerms, req, role) || hasPermission(dbPerms, menuGroup(key), role) || hasPermission(rolePermissions[role] || [], req, role) || hasPermission(rolePermissions[role] || [], menuGroup(key), role);
};

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    chevronDown: 'M6 9l6 6 6-6', chevronRight: 'M9 6l6 6-6 6', logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9', menu: 'M4 6h16M4 12h16M4 18h16', refresh: 'M20 11a8 8 0 1 0 1 4m-1-4v-5m0 5h-5', search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16m10 2-4.3-4.3', home: 'M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z', users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6-3a4 4 0 0 1 4 4m-1-8a3 3 0 0 1 0 6', person: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-7 9a7 7 0 0 1 14 0', message: 'M4 5h16v12H9l-5 4V5z', plus: 'M12 5v14M5 12h14', org: 'M4 4h16v16H4zM8 8h3v3H8zm5 0h3v3h-3zM8 13h3v3H8zm5 0h3v3h-3z', clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0', check: 'm5 12 4 4L19 6', alert: 'M12 9v4m0 4h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0', leave: 'M7 3h10v18H7zM10 12h7m0 0-3-3m3 3-3 3', arrow: 'M5 12h14m-6-6 6 6-6 6', camera: 'M4 7h3l2-2h6l2 2h3v12H4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8', calendar: 'M4 5h16v16H4zM8 3v4m8-4v4M4 10h16', shift: 'M6 4h12v16H6zM9 8h6M9 12h6M9 16h4', holiday: 'M12 2l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6-5.8-3.5-5.8 3.5 1.6-6.6-5.2-4.4 6.8-.5z', request: 'M6 3h12v18H6zM9 8h6M9 12h6M9 16h4', balance: 'M5 4h14v16H5zM9 8h6M9 12h3', payroll: 'M5 4h14v16H5zM8 8h8M8 12h8M8 16h5', components: 'M5 5h14M5 12h14M5 19h14', kpi: 'M5 20V10m7 10V4m7 16v-7', recruitment: 'M4 6h16v12H4zM8 10h8M8 14h5', report: 'M5 4h14v16H5zM8 9h8M8 13h8M8 17h5', settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0-6v3m0 14v3m10-10h-3M5 12H2m17.1-7.1-2.1 2.1M7 17l-2.1 2.1m12.2 0L15 17M7 7 4.9 4.9', bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 13h6', health: 'M20 12h-4l-2 7-4-14-2 7H4', card: 'M5 4h14v16H5zM8 8h8M8 12h5M8 16h8', dashboard: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z'
  };
  const d = paths[name] || paths.home; 
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}/></svg>;
}

type FeedbackAdminRow = {
  id: string;
  id_karyawan: string;
  kategori: 'Saran' | 'Keluhan' | 'Masukan';
  judul: string;
  isi: string;
  status: 'Baru' | 'Diproses' | 'Selesai';
  tanggapan_hr?: string | null;
  created_at: string;
  updated_at: string;
};

function FeedbackAdmin({ employees }: { employees: Karyawan[] }) {
  const { t } = useTranslation();
  const [rows, setRows] = useState<FeedbackAdminRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<FeedbackAdminRow | null>(null);
  const [reply, setReply] = useState('');

  const loadFeedback = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('hris_employee_feedback')
      .select('id,id_karyawan,kategori,judul,isi,status,tanggapan_hr,created_at,updated_at')
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) {
      console.error(error);
      setRows([]);
    } else {
      setRows((data || []) as FeedbackAdminRow[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const employeeName = (id: string) => {
    const emp = employees.find(x => x.id_karyawan === id);
    return emp?.nama || id;
  };

  const filtered = rows.filter(x => {
    const q = search.trim().toLowerCase();

    const matchesSearch =
      !q ||
      x.judul.toLowerCase().includes(q) ||
      x.isi.toLowerCase().includes(q) ||
      employeeName(x.id_karyawan).toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === 'Semua' || x.status === statusFilter;

    const matchesCategory =
      categoryFilter === 'Semua' || x.kategori === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const openFeedback = (row: FeedbackAdminRow) => {
    setSelected(row);
    setReply(row.tanggapan_hr || '');
  };

  const updateFeedback = async (
    id: string,
    status: FeedbackAdminRow['status'],
    tanggapan_hr: string
  ) => {
    setSaving(id);

    const { data, error } = await supabase
      .from('hris_employee_feedback')
      .update({
        status,
        tanggapan_hr: tanggapan_hr.trim() || null,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select('id,id_karyawan,kategori,judul,isi,status,tanggapan_hr,created_at,updated_at')
      .single();

    if (error) {
      await appAlert(`Gagal menyimpan: ${error.message}`);
      setSaving('');
      return;
    }

    const updated = data as FeedbackAdminRow;

    setRows(prev => prev.map(x => x.id === id ? updated : x));
    setSelected(updated);
    setReply(updated.tanggapan_hr || '');
    setSaving('');
  };

  return (
    <div className="feedback-module">
      <section className="feedback-list-surface">
        <div className="card-title feedback-card-title">
          <div>
            <span className="card-kicker">{t("feedback_inbox")}</span>
            <h2>{t("employee_feedback")}</h2>
          </div>
          <button
            type="button"
            className="portal-secondary"
            onClick={loadFeedback}
            disabled={loading}
          >
            {loading ? t('loading') : t('reload')}
          </button>
        </div>

        <div className="feedback-filter-bar">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t("search_feedback")}
          />

          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option>{t('all')}</option>
            <option>{t('new')}</option>
            <option>{t('processing')}</option>
            <option>{t('completed')}</option>
          </select>

          <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
            <option>{t('all')}</option>
            <option>{t('suggestion')}</option>
            <option>{t('complaint')}</option>
            <option>{t('feedback')}</option>
          </select>
        </div>

        {loading ? (
          <div className="loading">{t("loading_feedback")}</div>
        ) : filtered.length === 0 ? (
          <div className="muted">{t("no_feedback_match")}</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>{t('employee')}</th>
                  <th>{t('category')}</th>
                  <th>{t('title')}</th>
                  <th>{t('status')}</th>
                  <th>{t('date')}</th>
                  <th>{t('actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(row => (
                  <tr key={row.id}>
                    <td>
                      <strong>{employeeName(row.id_karyawan)}</strong>
                      <div className="muted">{row.id_karyawan}</div>
                    </td>
                    <td>{row.kategori}</td>
                    <td>{row.judul}</td>
                    <td>
                      <span className="status-badge">{row.status}</span>
                    </td>
                    <td>
                      {new Date(row.created_at).toLocaleDateString('id-ID')}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="portal-secondary"
                        onClick={() => openFeedback(row)}
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {selected && (
        <section className="card feedback-detail-card">
          <div className="card-title feedback-card-title">
            <div>
              <span className="card-kicker">{selected.kategori.toUpperCase()}</span>
              <h2>{selected.judul}</h2>
              <div className="muted">
                {t('from')}: {employeeName(selected.id_karyawan)} ·{' '}
                {new Date(selected.created_at).toLocaleString('id-ID')}
              </div>
            </div>

            <button
              type="button"
              className="portal-secondary"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </div>

          <div
            className="feedback-message"
          >
            {selected.isi}
          </div>

          <div className="feedback-form">
            <label className="feedback-field">
              <strong>Status</strong>
              <select className="feedback-control"
                value={selected.status}
                onChange={e =>
                  setSelected({
                    ...selected,
                    status: e.target.value as FeedbackAdminRow['status']
                  })
                }
              >
                <option>{t('new')}</option>
                <option>{t('processing')}</option>
                <option>{t('completed')}</option>
              </select>
            </label>

            <label className="feedback-field">
              <strong>{t('reply')}</strong>
              <textarea className="feedback-control feedback-textarea"
                rows={5}
                value={reply}
                onChange={e => setReply(e.target.value)}
                placeholder={t("feedback_response_placeholder")}
                maxLength={5000}
              />
            </label>

            <div className="feedback-actions">
              <button
                type="button"
                className="portal-primary"
                disabled={saving === selected.id}
                onClick={() =>
                  updateFeedback(selected.id, selected.status, reply)
                }
              >
                {saving === selected.id ? t('saving') : t('save_response')}
              </button>

              <button
                type="button"
                className="portal-secondary"
                disabled={saving === selected.id}
                onClick={() =>
                  updateFeedback(selected.id, 'Diproses', reply)
                }
              >
                {t('mark_processing')}
              </button>

              <button
                type="button"
                className="portal-secondary"
                disabled={saving === selected.id}
                onClick={() =>
                  updateFeedback(selected.id, 'Selesai', reply)
                }
              >
                {t('mark_completed')}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

async function hasActiveSupabaseSession(): Promise<boolean> {
  try {
    const { data } = await supabase.auth.getSession();
    return Boolean(data.session?.user);
  } catch {
    return false;
  }
}

function watchSupabaseAuth(load: () => void | Promise<void>) {
  let active = true;

  const run = async () => {
    if (!active) return;
    if (await hasActiveSupabaseSession()) {
      await load();
    }
  };

  void run();

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      if (active && session) {
        void load();
      }
    }
  );

  return () => {
    active = false;
    authListener.subscription.unsubscribe();
  };
}

export default function DashboardAdmin() {
  const { t, lang, setLang } = useTranslation();
  const isWebReferenceSidebar = typeof document !== 'undefined' && document.documentElement.dataset.platform === 'web';

  // 1. Deklarasi State diletakkan paling atas di dalam komponen
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [menu, setMenu] = useState<MenuKey>('overview');
  const [sidebar, setSidebar] = useState(() => window.innerWidth >= 900);
  const [employees, setEmployees] = useState<Karyawan[]>([]);
  const [pendingRegistrationIds, setPendingRegistrationIds] = useState<Set<string>>(new Set());

  // Karyawan Baru = hanya registrasi yang benar-benar masih menunggu approval.
  // Karyawan Tidak Aktif = sudah pernah menjadi karyawan, lalu dinonaktifkan.
  const pendingEmployees = useMemo(() => employees.filter(k => {
    const id = String(k.id_karyawan || '').trim();
    const status = String(k.status_karyawan || '').trim().toLowerCase();
    const isPendingStatus =
      status === 'menunggu verifikasi' ||
      status === 'menunggu' ||
      status === 'pending';

    return k.status_aktif === false
      && String(k.role || 'karyawan').toLowerCase() === 'karyawan'
      && status !== 'ditolak'
      && (isPendingStatus || pendingRegistrationIds.has(id));
  }), [employees, pendingRegistrationIds]);

  const inactiveEmployees = useMemo(() => employees.filter(k => {
    const id = String(k.id_karyawan || '').trim();
    return k.status_aktif === false
      && String(k.status_karyawan || '').toLowerCase() !== 'ditolak'
      && !pendingRegistrationIds.has(id);
  }), [employees, pendingRegistrationIds]);

  // FLOATING_NOTIFICATION_GROUP_START
  const [notificationUnread, setNotificationUnread] = useState(0);
  const [feedbackUnread, setFeedbackUnread] = useState(0);
  const notificationGroupRef = useRef<HTMLDivElement | null>(null);
  const notificationGenerationAtRef = useRef(0);

  const loadNotificationCounts = async () => {
    if (!logged || !isSupabaseConfigured) return;

    if (email && Date.now() - notificationGenerationAtRef.current >= 60000) {
      notificationGenerationAtRef.current = Date.now();
      try {
        await supabase.rpc('hris_generate_admin_notifications');
      } catch {
        // Notification generation is best-effort and must not block the dashboard.
      }
    }

    const [
      { count: notificationCount },
      { count: feedbackCount }
    ] = await Promise.all([
      supabase
        .from('hris_notifications')
        .select('*', { count: 'exact', head: true })
        .ilike('recipient_email', email)
        .eq('is_read', false)
        .neq('type', 'employee').neq('type', 'feedback'),

      supabase
        .from('hris_employee_feedback')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'Baru')
    ]);

    setNotificationUnread(notificationCount || 0);
    setFeedbackUnread(feedbackCount || 0);
  };

  useEffect(() => {
    if (!logged || !isSupabaseConfigured) return;
    void loadNotificationCounts();
    const timer = window.setInterval(loadNotificationCounts, 15000);
    return () => window.clearInterval(timer);
  }, [logged, email]);
  // FLOATING_NOTIFICATION_GROUP_END

  const [attendance, setAttendance] = useState<Absensi[]>([]);

  // NOTIFICATION_DROPDOWN_STATE_START
  type AdminNotificationPanel = 'employee' | 'feedback' | 'notifications' | null;
  const [notificationPanel, setNotificationPanel] = useState<AdminNotificationPanel>(null);
  const [feedbackPreview, setFeedbackPreview] = useState<any[]>([]);
  const [notificationPreview, setNotificationPreview] = useState<any[]>([]);

  useEffect(() => {
    if (!notificationPanel) return;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (target && notificationGroupRef.current && !notificationGroupRef.current.contains(target)) {
        setNotificationPanel(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNotificationPanel(null);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [notificationPanel]);

  const openNotificationPanel = async (panel: Exclude<AdminNotificationPanel, null>) => {
    setNotificationPanel(prev => prev === panel ? null : panel);

    if (panel === 'feedback') {
      const { data } = await supabase
        .from('hris_employee_feedback')
        .select('*')
        .eq('status', 'Baru')
        .order('created_at', { ascending: false })
        .limit(6);

      setFeedbackPreview(data || []);
    }

    if (panel === 'notifications') {
      const { data } = await supabase
        .from('hris_notifications')
        .select('*')
        .ilike('recipient_email', email)
        .neq('type', 'employee').neq('type', 'feedback')
        .order('created_at', { ascending: false })
        .limit(6);

      setNotificationPreview(data || []);
    }
  };

  const interpolateNotification = (template: string, metadata: Record<string, unknown> = {}) => {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
      const value = metadata[key];
      return value === null || value === undefined || value === '' ? '—' : String(value);
    });
  };

  const getNotificationPresentation = (row: any) => {
    const metadata = (row?.metadata && typeof row.metadata === 'object') ? row.metadata as Record<string, unknown> : {};
    const byCode: Record<string, { title: string; message: string; type: string; icon: string }> = {
      EMPLOYEE_REGISTRATION_NEW: { title: t('notification_employee_title'), message: t('notification_employee_message'), type: t('notification_type_employee'), icon: 'person' },
      FEEDBACK_NEW: { title: t('notification_feedback_title'), message: t('notification_feedback_message'), type: t('notification_type_feedback'), icon: 'message' },
      LEAVE_REQUEST_NEW: { title: t('notification_leave_title'), message: t('notification_leave_message'), type: t('notification_type_leave'), icon: 'leave' },
      PROFILE_CHANGE_REQUEST_NEW: { title: t('notification_profile_title'), message: t('notification_profile_message'), type: t('notification_type_profile'), icon: 'person' },
      ATTENDANCE_REQUEST_NEW: { title: t('notification_attendance_title'), message: t('notification_attendance_message'), type: t('notification_type_attendance'), icon: 'clock' },
      OVERTIME_REQUEST_NEW: { title: t('notification_overtime_title'), message: t('notification_overtime_message'), type: t('notification_type_overtime'), icon: 'clock' },
      CONTRACT_EXPIRING_SOON: { title: t('notification_contract_title'), message: t('notification_contract_message'), type: t('notification_type_contract'), icon: 'calendar' },
      RECRUITMENT_APPLICATION_NEW: { title: t('notification_recruitment_title'), message: t('notification_recruitment_message'), type: t('notification_type_recruitment'), icon: 'recruitment' },
    };

    const config = row?.event_code ? byCode[String(row.event_code)] : undefined;
    return {
      title: config ? config.title : (row?.title || t('notification_generic_title')),
      message: config ? interpolateNotification(config.message, metadata) : (row?.message || ''),
      type: config ? config.type : (row?.type || t('notification_type_system')),
      icon: config ? config.icon : (row?.type === 'contract' ? 'calendar' : row?.type === 'recruitment' ? 'recruitment' : row?.type === 'profile' ? 'person' : row?.type === 'attendance' ? 'clock' : row?.type === 'leave' ? 'leave' : 'bell'),
    };
  };

  const markAllNotificationsRead = async () => {
    if (!email) return;
    const { error: markError } = await supabase
      .from('hris_notifications')
      .update({ is_read: true })
      .eq('recipient_email', email)
      .eq('is_read', false)
      .neq('type', 'employee')
      .neq('type', 'feedback');
    if (!markError) setNotificationUnread(0);
  };

  const openAdminNotification = async (row: any) => {
    if (row?.id) {
      const { error: markError } = await supabase
        .from('hris_notifications')
        .update({ is_read: true })
        .eq('id', row.id)
        .eq('recipient_email', email);
      if (!markError) setNotificationUnread(prev => Math.max(0, prev - (row?.is_read ? 0 : 1)));
    }

    setNotificationPanel(null);

    const eventCode = String(row?.event_code || '');
    const exactRoutes: Record<string, MenuKey> = {
      EMPLOYEE_REGISTRATION_NEW: 'employee-new',
      FEEDBACK_NEW: 'feedback',
      LEAVE_REQUEST_NEW: 'approvals',
      PROFILE_CHANGE_REQUEST_NEW: 'approvals',
      ATTENDANCE_REQUEST_NEW: 'approvals',
      OVERTIME_REQUEST_NEW: 'approvals',
      CONTRACT_EXPIRING_SOON: 'enterprise-v26',
      RECRUITMENT_APPLICATION_NEW: 'recruitment-v25',
    };
    if (exactRoutes[eventCode]) {
      setMenu(exactRoutes[eventCode]);
      return;
    }

    const text = `${row?.type || ''} ${row?.title || ''} ${row?.message || ''} ${row?.link || ''}`.toLowerCase();

    if (text.includes('feedback') || text.includes('saran') || text.includes('kotak')) {
      setMenu('feedback');
      return;
    }

    if (text.includes('karyawan') || text.includes('employee') || text.includes('menunggu verifikasi')) {
      setMenu('employee-new');
      return;
    }

    if (text.includes('cuti') || text.includes('sakit') || text.includes('leave') || text.includes('permintaan perubahan data')) {
      setMenu('approvals');
      return;
    }

    if (text.includes('lembur') || text.includes('overtime') || text.includes('absensi') || text.includes('terlambat') || text.includes('attendance') || text.includes('absen')) {
      setMenu('approvals');
      return;
    }

    if (text.includes('kontrak') || text.includes('contract')) {
      setMenu('enterprise-v26');
      return;
    }

    if (text.includes('kandidat') || text.includes('candidate') || text.includes('lamaran') || text.includes('recruitment')) {
      setMenu('recruitment-v25');
      return;
    }

    setMenu('notifications');
  };
  // NOTIFICATION_DROPDOWN_STATE_END

  // Live notification refresh: Supabase Realtime updates badges without waiting
  // for the 15-second fallback polling interval.
  useEffect(() => {
    if (!logged || !email || !isSupabaseConfigured) return;

    const safeEmail = email.replace(/[^a-zA-Z0-9_.@+-]/g, '_');
    const notificationsChannel = supabase
      .channel(`admin-notifications-${safeEmail}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'hris_notifications',
        filter: `recipient_email=eq.${email}`,
      }, () => {
        void loadNotificationCounts();
      })
      .subscribe();

    const employeeChannel = supabase
      .channel(`admin-employee-feed-${safeEmail}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'karyawan',
      }, () => {
        void refresh();
        void loadNotificationCounts();
      })
      .subscribe();

    const feedbackChannel = supabase
      .channel(`admin-feedback-feed-${safeEmail}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'hris_employee_feedback',
      }, () => {
        void loadNotificationCounts();
        if (notificationPanel === 'feedback') {
          void openNotificationPanel('feedback');
        }
      })
      .subscribe();

    return () => {
      void notificationsChannel.unsubscribe();
      void employeeChannel.unsubscribe();
      void feedbackChannel.unsubscribe();
    };
  }, [logged, email, isSupabaseConfigured]);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [editing, setEditing] = useState<Karyawan | null>(null);
  const [userRole, setUserRole] = useState('');
  const [profileOpen, setProfileOpen] = useState(false); const [languageOpen, setLanguageOpen] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profilePanelOpen, setProfilePanelOpen] = useState(false);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
  const [dbPerms, setDbPerms] = useState<string[]>([]);
  const [sessionChecking, setSessionChecking] = useState(true);

  // The Super Admin selected public theme is the visual authority for this dashboard.
  useEffect(() => {
    let active = true;
    const loadTheme = async () => {
      const next = await getPublicAppTheme();
      if (active) applyProjectTheme(next, false);
    };
    void loadTheme();
    const onTheme = (event: Event) => {
      const next = (event as CustomEvent<string>).detail;
      if (next === 'professional' || next in COSMIC_THEMES) {
        applyProjectTheme(next as import('../../../lib/userPreferences').PublicAppTheme, false);
      }
    };
    window.addEventListener('project-tirta-public-theme-change', onTheme);
    return () => {
      active = false;
      window.removeEventListener('project-tirta-public-theme-change', onTheme);
    };
  }, []);

  const [roleOpen, setRoleOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({
    group_main: false,
    group_people: false,
    group_hr: false,
    group_payroll: false,
    group_talent: false,
    group_comm: false,
    group_reports: false,
    group_admin: false,
  });
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [, setAnnouncementsLoading] = useState(false);

  const loadAnnouncements = async () => {
    if (!isSupabaseConfigured) return;

    setAnnouncementsLoading(true);

    const { data, error } = await supabase
      .from('hris_announcements')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Gagal memuat pengumuman:', error);
      setAnnouncementsLoading(false);
      return;
    }

    setAnnouncements((data || []).map((a: any) => ({
      id: a.id,
      title: a.title,
      body: a.body,
      category: a.category,
      priority: a.priority,
      status: a.status,
      audience: a.audience || { type: 'all' },
      pinned: !!a.pinned,
      publishedAt: a.published_at || undefined,
      expiresAt: a.expires_at || undefined,
      attachmentCount: Number(a.attachment_count || 0),
      imageUrl: a.image_url || undefined,
      createdBy: a.created_by || undefined,
      createdAt: a.created_at,
      updatedAt: a.updated_at || undefined,
    })));

    setAnnouncementsLoading(false);
  };

  useEffect(() => {
    void loadAnnouncements();
  }, []);

  // Legacy navigation tree is retained for Android so the Android UI and
  // interaction model remain unchanged. The new eight-item navigation is web-only.
  const menuGroups = useMemo(() => [
    {
      title: t('main'),
      items: [
        ['overview', t('home'), 'home'] as [MenuKey, string, string],
        ['ai-center', t('ai_hr_center'), 'kpi'] as [MenuKey, string, string],
        ['professional-suite', t('professional_operations'), 'kpi'] as [MenuKey, string, string],
        ['attendance', t('attendance'), 'clock'] as [MenuKey, string, string],
        ['reports', t('reports'), 'report'] as [MenuKey, string, string],
        ['feedback', t('feedback_inbox'), 'request'] as [MenuKey, string, string],
        ['announcements', t('announcements'), 'bell'] as [MenuKey, string, string],
      ],
    },
    {
      title: t('people'),
      items: [
        ['employees', t('all_employees'), 'users'] as [MenuKey, string, string],
        ['employee-new', `${t('admin_new_employee')}${pendingEmployees.length ? ` (${pendingEmployees.length})` : ''}`, 'users'] as [MenuKey, string, string],
        ['employee-inactive', `${t('inactive_employees')}${inactiveEmployees.length ? ` (${inactiveEmployees.length})` : ''}`, 'users'] as [MenuKey, string, string],
        ['id-card', t('id_card'), 'card'] as [MenuKey, string, string],
        ['employee-360', t('employee_360'), 'users'] as [MenuKey, string, string],
        ['organization', t('organization'), 'org'] as [MenuKey, string, string],
        ['hr-operations', t('hr_operations'), 'settings'] as [MenuKey, string, string],
      ],
    },
    {
      title: t('payroll') || 'PAYROLL',
      items: [
        ['payroll', t('monthly_payroll'), 'payroll'] as [MenuKey, string, string],
        ['production-hr', t('hr_transaction_center'), 'settings'] as [MenuKey, string, string],
        ['payroll-production-v22', t('payroll_control'), 'payroll'] as [MenuKey, string, string],
        ['payroll-components', t('salary_components'), 'components'] as [MenuKey, string, string],
        ['payroll-overtime', t('overtime_payroll'), 'arrow'] as [MenuKey, string, string],
        ['payslip', t('payslip'), 'calendar'] as [MenuKey, string, string],
      ],
    },
    {
      title: t('group_talent'),
      items: [
        ['performance', t('performance'), 'arrow'] as [MenuKey, string, string],
        ['kpi', t('kpi_target'), 'kpi'] as [MenuKey, string, string],
        ['recruitment-v25', t('recruitment_ats') || 'Rekrutmen', 'recruitment'] as [MenuKey, string, string],
        ['candidates', t('candidates'), 'users'] as [MenuKey, string, string],
      ],
    },
    {
      title: t('system'),
      items: [
        ['approvals', t('approvals'), 'check'] as [MenuKey, string, string],
        ['notifications', t('notifications'), 'bell'] as [MenuKey, string, string],
        ['system-health', t('system_health'), 'health'] as [MenuKey, string, string],
        ['settings', t('settings'), 'settings'] as [MenuKey, string, string],
        ['roles', t('roles_permissions'), 'users'] as [MenuKey, string, string],
        ['audit', t('audit_log'), 'request'] as [MenuKey, string, string],
      ],
    },
  ], [t, pendingEmployees.length, inactiveEmployees.length]);

  const visibleMenuGroups = useMemo(() =>
    menuGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          menuPermissionForRole(item[0], userRole, dbPerms)
        ),
      }))
      .filter((group) => group.items.length > 0),
    [menuGroups, userRole, dbPerms]
  );

  // Web/admin sidebar groups modules by business function.
  // Internal enterprise-vXX route keys remain stable for compatibility,
  // while user-facing labels describe the actual HR capability.
  // The web/admin sidebar is grouped by business function rather than internal
  // roadmap version names. Internal enterprise-vXX keys are retained only for
  // routing/permission compatibility; users see meaningful HR labels.
  const sidebarSections = useMemo<SidebarSection[]>(() => [
    {
      key: 'group_main',
      title: t('group_main'),
      items: [
        ['overview', t('dashboard'), 'home'],
      ],
    },
    {
      key: 'group_people',
      title: t('group_people'),
      items: [
        ['employees', t('all_employees'), 'users'],
        ['employee-new', `${t('admin_new_employee')}${pendingEmployees.length ? ` (${pendingEmployees.length})` : ''}`, 'users'],
        ['employee-inactive', `${t('inactive_employees')}${inactiveEmployees.length ? ` (${inactiveEmployees.length})` : ''}`, 'users'],
        ['employee-add', t('add_employee'), 'plus'],
        ['id-card', t('id_card'), 'card'],
        ['employee-360', t('employee_360'), 'users'],
        ['organization', t('organization'), 'org'],
        ['enterprise-v26', t('documents_compliance'), 'card'],
        ['enterprise-v30', t('ess_enterprise'), 'users'],
        ['enterprise-v33', t('multi_company'), 'org'],
      ],
    },
    {
      key: 'group_hr',
      title: t('group_hr'),
      items: [
        ['hr-operations', t('hr_operations'), 'settings'],
        ['enterprise-v20', t('hr_control_center'), 'kpi'],
        ['attendance', t('attendance'), 'clock'],
        ['schedule', t('schedule'), 'calendar'],
        ['shift', t('shift'), 'shift'],
        ['holiday', t('holiday'), 'holiday'],
        ['approvals', t('approval_center'), 'check'],
        ['leave-request', `${t('leave')} / ${t('permission')}`, 'leave'],
        ['leave-balance', t('leave_balance'), 'balance'],
        ['production-hr', t('hr_transaction_center'), 'settings'],
        ['enterprise-v32', t('production_optimization'), 'settings'],
        ['professional-suite', t('professional_operations'), 'kpi'],
        ['ai-center', t('ai_hr_center'), 'kpi'],
      ],
    },
    {
      key: 'group_payroll',
      title: t('group_payroll'),
      items: [
        ['payroll', t('monthly_payroll'), 'payroll'],
        ['payroll-engine', t('payroll_engine'), 'payroll'],
        ['payroll-production-v22', t('payroll_control'), 'payroll'],
        ['payroll-indonesia-v23', t('payroll_indonesia_compliance'), 'payroll'],
        ['payroll-components', t('salary_components'), 'components'],
        ['payroll-overtime', t('overtime_payroll'), 'arrow'],
        ['payslip', t('payslip'), 'calendar'],
      ],
    },
    {
      key: 'group_talent',
      title: t('group_talent'),
      items: [
        ['performance', t('performance'), 'arrow'],
        ['kpi', t('kpi_target'), 'kpi'],
        ['enterprise-v27', t('performance_review'), 'kpi'],
        ['recruitment-v25', t('recruitment_ats'), 'recruitment'],
        ['recruitment', t('recruitment'), 'recruitment'],
        ['candidates', t('candidates'), 'users'],
      ],
    },
    {
      key: 'group_comm',
      title: t('group_comm'),
      items: [
        ['announcements', t('announcements'), 'bell'],
        ['feedback', t('feedback_inbox'), 'request'],
        ['notifications', t('notifications'), 'bell'],
        ['enterprise-v29', t('hr_inbox'), 'bell'],
      ],
    },
    {
      key: 'group_reports',
      title: t('group_reports'),
      items: [
        ['reports', t('reports'), 'report'],
        ['enterprise-v28', t('hr_analytics'), 'report'],
      ],
    },
    {
      key: 'group_admin',
      title: t('group_admin'),
      items: [
        ['settings', t('settings'), 'settings'],
        ['roles', t('roles_permissions'), 'users'],
        ['audit', t('audit_log'), 'request'],
        ['system-health', t('system_health'), 'health'],
        ['security-v21', t('security_center'), 'health'],
        ['enterprise-v31', t('qa_testing'), 'health'],
        ['enterprise-v34', t('api_integrations'), 'arrow'],
        ['enterprise-v35', t('ai_hr_automation'), 'kpi'],
      ],
    },
  ], [t, pendingEmployees.length, inactiveEmployees.length]);

  const flatSidebarKeys = useMemo(() =>
    sidebarSections.flatMap((section) => section.items.map((item) => item[0])),
    [sidebarSections]
  );

  useEffect(() => {
    let active = true;
    const loadSession = async () => {
      setSessionChecking(true);
      if (!isSupabaseConfigured) { setError('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY pada environment deployment.'); setSessionChecking(false); return; }
      const { data } = await supabase.auth.getUser();
      if (!active) return;
      if (data.user?.email) {
        const { data: p } = await supabase.from('hris_users').select('nama,role,status').eq('email', data.user.email).maybeSingle();
        if (
          active &&
          p?.status === 'Aktif' &&
          ['Super Admin', 'Admin', 'HRD', 'Payroll', 'Supervisor'].includes(p.role || '')
        ) {
          setUserRole(p.role || '');
          setProfileName(p.nama || '');
          const { data: rp } = await supabase.from('hris_role_permissions').select('permission_code').eq('role_name', p.role);
          loadProfilePhoto();
          if (active) {
            setDbPerms((rp || []).map(x => x.permission_code));
            setEmail(data.user.email);
            setLogged(true);
          }
        } else if (active) {
          await supabase.auth.signOut();
          setLogged(false);
          setUserRole('');
          setProfileName('');
          setDbPerms([]);
          setError('Akun ini bukan akun Dashboard HR.');
        }
      }
      if (active) setSessionChecking(false);
    };
    loadSession();
    if (!isSupabaseConfigured) return () => { active = false };
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) { setLogged(false); setUserRole(''); setProfileName(''); setDbPerms([]); setSessionChecking(false); }
    });
    return () => { active = false; listener.subscription.unsubscribe() };
  }, []);

  useEffect(() => { if (logged) refresh() }, [logged]);
  const [employee360Id, setEmployee360Id] = useState('');

  useEffect(() => {
    const read = () => {
      const raw = location.hash.replace(/^#\//, '');
      const parts = raw.split('/').filter(Boolean);
      const candidate = parts[0] as MenuKey;
      const employeeId = candidate === 'employee-360' ? (parts[1] || '') : '';

      setEmployee360Id(employeeId);

      const validKeys = isWebReferenceSidebar
        ? flatSidebarKeys
        : menuGroups.flatMap((group) => group.items.map((item) => item[0]));

      if (
        candidate &&
        validKeys.includes(candidate) &&
        menuPermissionForRole(candidate, userRole, dbPerms)
      ) {
        setMenu(candidate);
      }
    };

    read();
    window.addEventListener('hashchange', read);

    return () => window.removeEventListener('hashchange', read);
  }, [userRole, dbPerms, flatSidebarKeys, menuGroups, isWebReferenceSidebar]);
  
  const navigate = (next: MenuKey) => { setMenu(next); location.hash = `/${next}`; if (window.innerWidth < 900) setSidebar(false) };


  async function refresh() {
    const authenticated = await hasActiveSupabaseSession();
    if (!authenticated) {
      setLoading(false);
      return;
    }

    setLoading(true); setError('');
    const [k, a, ar] = await Promise.all([
      supabase.from('karyawan').select('*').order('nama'),
      supabase.from('absensi').select('*').order('created_at', { ascending: false }).limit(2000),
      supabase.from('hris_approval_requests').select('record_id').eq('modul', 'employee_registration').eq('status', 'Menunggu').limit(500)
    ]);
    if (k.error) setError(`Karyawan: ${k.error.message}`); else setEmployees(k.data || []);
    if (a.error) setError(v => v ? `${v}\nAbsensi: ${a.error.message}` : `Absensi: ${a.error.message}`); else setAttendance(a.data || []);
    if (ar.error) {
      console.error('Gagal memuat approval registrasi:', ar.error);
      setPendingRegistrationIds(new Set());
    } else {
      setPendingRegistrationIds(new Set((ar.data || []).map((row: any) => String(row.record_id || '').trim()).filter(Boolean)));
    }
    setLoading(false);
  }

  async function loadProfilePhoto() {
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData.user?.id;
    if (!uid) return;
    const { data } = await supabase.storage.from("profile-photos").createSignedUrl(`${uid}/avatar.jpg`, 3600);
    if (data?.signedUrl) setProfilePhotoUrl(`${data.signedUrl}&v=${Date.now()}`);
  }

  async function uploadProfilePhoto(file: File) {
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData.user?.id;
    if (!uid) { setError("Sesi login tidak ditemukan."); return; }
    if (!file.type.startsWith("image/")) { setError("File harus berupa gambar."); return; }
    if (file.size > 2 * 1024 * 1024) { setError("Ukuran foto maksimal 2 MB."); return; }
    const path = `${uid}/avatar.jpg`;
    const { error: uploadError } = await supabase.storage.from("profile-photos").upload(path, file, { upsert: true, contentType: file.type });
    if (uploadError) { setError("Gagal mengunggah foto: " + uploadError.message); return; }
    await loadProfilePhoto(); setToast(t("profile_photo_updated"));
  }

  async function saveProfileName() {
    const nextName = profileName.trim();
    if (nextName.length === 0) { setError("Nama profil wajib diisi."); return; }
    const { data: userData } = await supabase.auth.getUser();
    const userEmail = userData.user?.email;
    if (!userEmail) { setError("Sesi login tidak ditemukan."); return; }
    const { error: profileError } = await supabase.from("hris_users").update({ nama: nextName }).eq("email", userEmail);
    if (profileError) { setError("Gagal menyimpan nama profil: " + profileError.message); return; }
    setProfileName(nextName);
    setProfilePanelOpen(false);
    setToast(t("profile_name_updated"));
  }

  async function login(e: FormEvent) {
    e.preventDefault(); setError('');
    if (!isSupabaseConfigured) { setError('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY pada environment deployment.'); return }
    setLoading(true);
    const { data, error: e2 } = await signIn(email, pin);
    setLoading(false);
    if (e2 || !data.user) { setError(e2?.message || 'Email atau password tidak valid.'); return; }
    const { data: profile, error: pe } = await supabase.from('hris_users').select('nama,role,status').ilike('email', data.user.email || '').maybeSingle();
    if (pe) { await signOut(); setError('Profil akses HR tidak dapat diverifikasi. Coba lagi atau hubungi administrator.'); return; }
    if (
      !profile ||
      profile.status !== 'Aktif' ||
      !['Super Admin', 'Admin', 'HRD', 'Payroll', 'Supervisor'].includes(profile.role || '')
    ) {
      await signOut();
      setError('Akun ini adalah akun Karyawan dan harus menggunakan Portal Karyawan.');
      return;
    }
    setUserRole(profile.role);
    setProfileName(profile.nama || '');
    const { data: rp } = await supabase.from('hris_role_permissions').select('permission_code').eq('role_name', profile.role);
    setDbPerms((rp || []).map(x => x.permission_code));
    setLogged(true);
  }

  async function removeEmployee(k: Karyawan) {
    if (!menuPermissionForRole('employees', userRole, dbPerms) || !canDelete(dbPerms, 'people', userRole)) { setError('Anda tidak memiliki permission people.delete.'); return }
    if (!await appConfirm(`Hapus ${k.nama}?`)) return;
    const { error: e } = await supabase.from('karyawan').delete().eq('id', k.id);
    if (e) setError(e.message); else { setToast(t("employee_deleted")); refresh() }
  }

  async function saveEdit(payload: Record<string, unknown>): Promise<boolean> {
    if (!canWrite(dbPerms, 'people', userRole)) {
      setError('Anda tidak memiliki permission people.write.');
      return false;
    }

    if (!editing) return false;

    if (payload.id_karyawan !== undefined) {
      const nextId = String(payload.id_karyawan || '').trim().toUpperCase();

      if (!nextId) {
        setError('ID Karyawan wajib diisi.');
        return false;
      }

      const { data: duplicate } = await supabase
        .from('karyawan')
        .select('id')
        .eq('id_karyawan', nextId)
        .neq('id', editing.id)
        .maybeSingle();

      if (duplicate) {
        setError(`ID Karyawan ${nextId} sudah digunakan.`);
        return false;
      }

      payload.id_karyawan = nextId;
    }

    // Kolom DATE PostgreSQL tidak menerima string kosong.
    // Field tanggal yang dikosongkan dari form dikirim sebagai NULL.
    for (const key of ['tanggal_lahir', 'tanggal_masuk']) {
      if (payload[key] === '') payload[key] = null;
    }

    if (
      payload.role !== undefined &&
      String(payload.role || '') !== String(editing.role || '') &&
      userRole !== 'Super Admin'
    ) {
      setError('Perubahan Role hanya dapat dilakukan oleh Super Admin.');
      return false;
    }

    const { error: e } = await supabase
      .from('karyawan')
      .update(payload)
      .eq('id', editing.id);

    if (e) {
      setError(e.message);
      return false;
    }

    if (
      payload.role !== undefined &&
      String(payload.role || '') !== String(editing.role || '') &&
      editing.auth_user_id &&
      userRole === 'Super Admin'
    ) {
      const { error: roleError } = await supabase
        .from('hris_users')
        .update({ role: String(payload.role) })
        .eq('id', editing.auth_user_id);

      if (roleError) {
        setError(`Data karyawan tersimpan, tetapi Role login gagal diperbarui: ${roleError.message}`);
        return false;
      }
    }

    setEditing(null);
    setToast(t("employee_saved"));
    refresh();
    return true;
  }

  async function activateEmployee(k: Karyawan) {
    if (!canWrite(dbPerms, 'people', userRole)) {
      setError('Anda tidak memiliki permission people.write.');
      return;
    }
    if (!await appConfirm(`Aktifkan kembali ${k.nama}?`)) return;
    const { error: e } = await supabase
      .from('karyawan')
      .update({
        status_aktif: true,
        status_karyawan: String(k.status_karyawan || '').toLowerCase() === 'ditolak' ? 'Tetap' : (k.status_karyawan || 'Tetap')
      })
      .eq('id', k.id);
    if (e) setError(e.message);
    else { setToast(`${k.nama} ${t('employee_reactivated')}`); refresh(); }
  }

  const payroll = employees.reduce((s, k) => s + Number(k.gaji_pokok || 0), 0);

  const menuLabel = isWebReferenceSidebar
    ? sidebarSections.flatMap((section) => section.items).find((item) => item[0] === menu)?.[1]
    : menuGroups.flatMap((group) => group.items).find((item) => item[0] === menu)?.[1];

  // The rendered page is controlled by `menu`. A stale hash must never
  // overwrite the visible header label after an in-app navigation action.
  const activeLabel = menuLabel || t('dashboard');
  
  const exportCsv = (rows: Record<string, unknown>[], filename: string, columns?: string[]) => {
    if (!rows.length) { setToast(t("no_data_export")); return; }
    const keys = columns?.length ? columns : Object.keys(rows[0]);
    const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [keys.join(';'), ...rows.map(r => keys.map(k => esc(r[k])).join(';'))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }));
    a.download = filename;
    a.click(); URL.revokeObjectURL(a.href);
    setToast(`Export ${keys.length} kolom berhasil dibuat.`);
  };

  const exportExcel = (rows: Record<string, unknown>[], filename: string, columns: string[]) => {
    if (!rows.length) { setToast(t("no_data_export")); return; }
    const escHtml = (v: unknown) => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    const html = `<html><head><meta charset="utf-8"></head><body><table><thead><tr>${columns.map(k=>`<th>${escHtml(fieldLabel(k))}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${columns.map(k=>`<td>${escHtml(r[k])}</td>`).join('')}</tr>`).join('')}</tbody></table></body></html>`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([html], { type: 'application/vnd.ms-excel' }));
    a.download = filename; a.click(); URL.revokeObjectURL(a.href);
    setToast(t("excel_created"));
  };

  if (sessionChecking) return <div className="login-wrap"><div className="login-card"><div className="loading">Memeriksa sesi keamanan...</div></div></div>;
  if (!logged) return <Login email={email} pin={pin} setEmail={setEmail} setPin={setPin} onSubmit={login} loading={loading} error={error}/>;
  return (
   <div className="talenta-shell">





    <aside className={`sidebar ${sidebar ? "open" : "collapsed"}`}>
      <div className="sidebar-head">
        <div className="brand">
          <div className="brand-mark"><img src={moonLogo} alt="Project by Tirta" /></div>
          {sidebar && <div><b>Project by Tirta</b><small>People Platform</small></div>}
        </div>
      </div>

      {isWebReferenceSidebar ? (
        <nav className="sidebar-nav sidebar-nav-reference" aria-label={t('group_main')}>
          {sidebarSections.map((section) => {
            const visibleItems = section.items.filter((item) => menuPermissionForRole(item[0], userRole, dbPerms));
            if (!visibleItems.length) return null;
            const isOpen = !collapsedGroups[section.key];
            const sectionActive = visibleItems.some(([key]) => menu === key);

            return (
              <section className={`nav-group sidebar-nav-section ${sectionActive ? 'has-active-child' : ''}`} key={section.key}>
                {sidebar && (
                  <button
                    type="button"
                    className="nav-title sidebar-section-title"
                    onClick={() => setCollapsedGroups((prev) => ({ ...prev, [section.key]: !prev[section.key] }))}
                    aria-expanded={isOpen}
                  >
                    <span>{section.title}</span>
                    <Icon name={isOpen ? 'chevronDown' : 'chevronRight'} />
                  </button>
                )}
                {(!sidebar || isOpen) && (
                  <div className="nav-group-items nav-section-items">
                    {visibleItems.map(([key, label, icon]) => (
                      <button
                        key={key}
                        type="button"
                        className={`nav-item ${menu === key ? 'active' : ''}`}
                        onClick={() => navigate(key)}
                        title={!sidebar ? label : undefined}
                      >
                        <Icon name={icon} />
                        {sidebar && <span>{label}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </nav>
      ) : (
        <nav className="sidebar-nav" aria-label="Menu utama">
          {visibleMenuGroups.map((group) => {
            const visibleItems = group.items;
            if (!visibleItems.length) return null;
            return (
              <div className="nav-group" key={group.title}>
                {sidebar && (
                  <button
                    type="button"
                    className="nav-title"
                    onClick={() =>
                      setCollapsedGroups((prev) => ({
                        ...prev,
                        [group.title]: !prev[group.title],
                      }))
                    }
                    aria-expanded={!collapsedGroups[group.title]}
                  >
                    <span>{group.title}</span>
                    <Icon name={collapsedGroups[group.title] ? 'chevronRight' : 'chevronDown'} />
                  </button>
                )}

                {!collapsedGroups[group.title] && (
                  <div className="nav-group-items">
                    {visibleItems.map(([key, label, icon]) => (
                      <button
                        key={key}
                        className={`nav-item ${menu === key ? 'active' : ''}`}
                        onClick={() => navigate(key)}
                        title={!sidebar ? label : undefined}
                        type="button"
                      >
                        <Icon name={icon} />
                        {sidebar && <span>{label}</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
      {/* ===== BAGIAN BAWAH SIDEBAR ===== */}
      <div className="sidebar-bottom">
        <button className="logout" onClick={async () => {
          await signOut();
          setLogged(false);
          setUserRole("");
          setDbPerms([]);
          setMenu("overview");
          location.hash = "/home";
        }}>
          <Icon name="logout"/>{sidebar && "Keluar"}
        </button>
      </div>
      {/* ======================================================== */}
    </aside>
    {!isWebReferenceSidebar && <button
      type="button"
      aria-label="Tutup menu"
      className={`android-sidebar-scrim ${sidebar ? 'visible' : ''}`}
      onClick={() => setSidebar(false)}
    />}
    <SiDebarFloatingNavigator />
   <main className="talenta-main"><header className="topbar">
<div className="topbar-left"><button className="icon-btn" aria-label="Buka menu" onClick={()=>setSidebar(v=>!v)}><Icon name="menu"/></button>
<div className="crumb"><img src={moonLogo} alt="" aria-hidden="true" style={{width:26,height:26,objectFit:'contain',display:'block'}} /><span>Project by Tirta</span><b>/</b>{activeLabel}</div>
</div>
  {roleOpen && <div className="role-menu"><small>ROLE AKTIF</small>{['Super Admin','Admin','HRD','Payroll','Supervisor','Karyawan'].map(r=><button type="button" key={r} className={r===userRole?'selected':''} onClick={()=>{setRoleOpen(false); if(r!==userRole)setToast(`Role ${r} hanya dapat diubah melalui Peran & Hak Akses.`)}}>{r===userRole?'✓':' '} {r}</button>)}</div>}
<div className="search-global"><span><Icon name="search"/></span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t('search_data')}/></div><div className="top-actions">
    {/* FLOATING_NOTIFICATION_GROUP_START */}
    <div ref={notificationGroupRef} className="admin-floating-notification-group" aria-label={t('notification_center')}>
      <button
        type="button"
        className={`admin-floating-action ${notificationPanel === 'employee' ? 'active' : ''}`}
        onClick={() => openNotificationPanel('employee')}
        aria-label={t('admin_new_employee')}
        title={t('admin_new_employee')}
      >
        <span className="admin-floating-action-icon"><Icon name="person" /></span>
        {pendingEmployees.length > 0 && (
          <span className="admin-floating-action-badge">
            {pendingEmployees.length > 99 ? '99+' : pendingEmployees.length}
          </span>
        )}
      </button>

      <button
        type="button"
        className={`admin-floating-action ${notificationPanel === 'feedback' ? 'active' : ''}`}
        onClick={() => openNotificationPanel('feedback')}
        aria-label={t('feedback_inbox')}
        title={t('feedback_inbox')}
      >
        <span className="admin-floating-action-icon"><Icon name="message" /></span>
        {feedbackUnread > 0 && (
          <span className="admin-floating-action-badge">
            {feedbackUnread > 99 ? '99+' : feedbackUnread}
          </span>
        )}
      </button>

      <button
        type="button"
        className={`admin-floating-action ${notificationPanel === 'notifications' ? 'active' : ''}`}
        onClick={() => openNotificationPanel('notifications')}
        aria-label={t('all_notifications')}
        title={t('all_notifications')}
      >
        <span className="admin-floating-action-icon"><Icon name="bell" /></span>
        {notificationUnread > 0 && (
          <span className="admin-floating-action-badge">
            {notificationUnread > 99 ? '99+' : notificationUnread}
          </span>
        )}
      </button>

      {notificationPanel === 'employee' && (
        <div className="admin-notification-dropdown admin-notification-dropdown-employee">
          <div className="admin-notification-dropdown-head">
            <strong>{t('admin_new_employee')}</strong>
            <span>{pendingEmployees.length} {t('pending_verification')}</span>
          </div>

          <div className="admin-notification-dropdown-list">
            {pendingEmployees.slice(0, 6).map((row: any) => (
              <button
                key={row.id}
                type="button"
                className="admin-notification-dropdown-item"
                onClick={() => {
                  setNotificationPanel(null);
                  setMenu('employee-new');
                }}
              >
                <span className="admin-notification-dropdown-avatar"><Icon name="person" /></span>
                <span className="admin-notification-dropdown-copy">
                  <strong>{row.nama || row.email || row.id_karyawan}</strong>
                  <small>{row.id_karyawan || t('admin_new_employee')} · {t('pending_verification')}</small>
                </span>
              </button>
            ))}

            {pendingEmployees.length === 0 && (
              <div className="admin-notification-empty">{t('admin_no_new_employee')}</div>
            )}
          </div>

          <button
            type="button"
            className="admin-notification-dropdown-all"
            onClick={() => {
              setNotificationPanel(null);
              setMenu('employee-new');
            }}
          >
            {t('admin_view_all_new_employee')}
          </button>
        </div>
      )}

      {notificationPanel === 'feedback' && (
        <div className="admin-notification-dropdown admin-notification-dropdown-feedback">
          <div className="admin-notification-dropdown-head">
            <strong>{t('feedback_inbox')}</strong>
            <span>{feedbackUnread} {t('new').toLowerCase()}</span>
          </div>

          <div className="admin-notification-dropdown-list">
            {feedbackPreview.map((row: any) => (
              <button
                key={row.id}
                type="button"
                className={`admin-notification-dropdown-item ${row.status === 'Baru' ? 'unread' : ''}`}
                onClick={() => {
                  setNotificationPanel(null);
                  setMenu('feedback');
                }}
              >
                <span className="admin-notification-dropdown-avatar"><Icon name="message" /></span>
                <span className="admin-notification-dropdown-copy">
                  <strong>{row.judul || t('notification_feedback_short')}</strong>
                  <small>{row.kategori || t('feedback')} · {row.status || t('new')}</small>
                  <span>{row.isi || ''}</span>
                </span>
              </button>
            ))}

            {feedbackPreview.length === 0 && (
              <div className="admin-notification-empty">{t('admin_no_suggestions')}</div>
            )}
          </div>

          <button
            type="button"
            className="admin-notification-dropdown-all"
            onClick={() => {
              setNotificationPanel(null);
              setMenu('feedback');
            }}
          >
            {t('admin_view_all_suggestions')}
          </button>
        </div>
      )}

      {notificationPanel === 'notifications' && (
        <div className="admin-notification-dropdown admin-notification-dropdown-notifications">
          <div className="admin-notification-dropdown-head admin-notification-dropdown-head-actions">
            <div><strong>{t('notifications')}</strong><span>{notificationUnread} {t('unread').toLowerCase()}</span></div>
            {notificationUnread > 0 && <button type="button" className="admin-notification-mark-read" onClick={markAllNotificationsRead}>{t('notification_mark_all_read')}</button>}
          </div>

          <div className="admin-notification-dropdown-list">
            {notificationPreview.map((row: any) => (
              <button
                key={row.id}
                type="button"
                className={`admin-notification-dropdown-item ${row.is_read ? '' : 'unread'}`}
                onClick={() => openAdminNotification(row)}
              >
                <span className="admin-notification-dropdown-avatar">
                  <Icon name={getNotificationPresentation(row).icon} />
                </span>
                <span className="admin-notification-dropdown-copy">
                  {(() => { const view = getNotificationPresentation(row); return <><strong>{view.title}</strong><small>{view.type}</small><span>{view.message}</span></>; })()}
                </span>
              </button>
            ))}

            {notificationPreview.length === 0 && (
              <div className="admin-notification-empty">{t('admin_no_notifications')}</div>
            )}
          </div>

          <button
            type="button"
            className="admin-notification-dropdown-all"
            onClick={() => {
              setNotificationPanel(null);
              setMenu('notifications');
            }}
          >
            {t('admin_view_all_notifications')}
          </button>
        </div>
      )}
    </div>
    {/* FLOATING_NOTIFICATION_GROUP_END */}
<ThemeControl userRole={userRole} /><button className="icon-btn" aria-label="Muat ulang" onClick={()=>refresh()}><Icon name="refresh"/></button><div className="profile-trigger-wrap"><button type="button" className="avatar avatar-button" aria-label={t('open_profile')} aria-expanded={profileOpen} onClick={()=>setProfileOpen(v=>!v)}>{profilePhotoUrl ? <img src={profilePhotoUrl} alt={t('profile')} /> : (profileName || "HR").split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase()}</button>{profileOpen && <div className="profile-menu"><div className="profile-menu-header"><div className="profile-avatar-large">{profilePhotoUrl ? <img src={profilePhotoUrl} alt={t('profile')} /> : (profileName || "HR").split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase()}</div><div><strong>{profileName || email || "Pengguna"}</strong><small>{userRole || "Pengguna"}</small></div></div><div className="profile-menu-divider"/><button type="button" onClick={()=>{setProfileOpen(false);setProfilePanelOpen(true)}}><span>👤</span>{t('profile')}</button><button type="button" onClick={()=>{setProfileOpen(false);navigate("settings")}}><span>🎨</span>Tema & Tampilan</button><button type="button" onClick={()=>{setProfileOpen(false);navigate("roles")}}><span>🛡️</span>{t('role')}</button><div className="profile-language">
  <button type="button" onClick={()=>setLanguageOpen(v=>!v)}><span>🌐</span>{t('language')} <small>{lang.toUpperCase()} ▾</small></button>
  {languageOpen && <div className="profile-language-options">
    {SUPPORTED_LANGUAGES.map(({ code, nativeName })=>
      <button type="button" key={code} className={lang===code?'selected':''} onClick={()=>{void setLang(code);setLanguageOpen(false);setProfileOpen(false)}}>
        {lang===code?'✓':' '} {nativeName}
      </button>
    )}
  </div>}
</div><button type="button" onClick={()=>{setProfileOpen(false);navigate("settings")}}><span>⚙️</span>{t('settings_menu')}</button><div className="profile-menu-divider"/><button type="button" className="profile-logout" onClick={async()=>{setProfileOpen(false);await signOut();setLogged(false);setEmail("");setUserRole("");setProfileName("");setDbPerms([])}}><span>🚪</span>{t('logout')}</button></div>}</div></div></header>
              {profilePanelOpen && <div className="profile-panel-overlay" onClick={()=>setProfilePanelOpen(false)}>
                <div className="profile-panel" onClick={e=>e.stopPropagation()}>
                  <div className="profile-panel-head">
                    <div>
                      <h3>{t('profile_title')}</h3>
                      <p>{t('profile_desc')}</p>
                    </div>
                    <button type="button" className="profile-panel-close" onClick={()=>setProfilePanelOpen(false)}>×</button>
                  </div>
                  <div className="profile-panel-body">
                    <div className="profile-photo-area">
                      <div className="profile-photo-placeholder">{profilePhotoUrl ? <img src={profilePhotoUrl} alt={t('profile')} /> : (profileName || "HR").split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase()}</div>
                      <input id="profile-photo-input" type="file" accept="image/png,image/jpeg,image/webp" style={{display:"none"}} onChange={e=>{const file=e.target.files?.[0]; if(file) uploadProfilePhoto(file)}} /><button type="button" className="profile-photo-button" onClick={()=>document.getElementById("profile-photo-input")?.click()}>Ganti Foto</button>
                    </div>
                    <label className="profile-field">
                      <span>{t("name")}</span>
                      <input value={profileName} onChange={e=>setProfileName(e.target.value)} placeholder="Masukkan nama" />
                    </label>
                    <label className="profile-field">
                      <span>{t("email")}</span>
                      <input value={email} readOnly />
                    </label>
                    <label className="profile-field">
                      <span>{t("role")}</span>
                      <input value={userRole || "Pengguna"} readOnly />
                    </label>
                  </div>
                  <div className="profile-panel-footer">
                    <button type="button" className="profile-btn-secondary" onClick={()=>setProfilePanelOpen(false)}>{t("cancel")}</button>
                    <button type="button" className="profile-btn-primary" onClick={saveProfileName}>Simpan</button>
                  </div>
                </div>
              </div>}

    <section className={`page admin-page-frame${menu === 'reports' ? ' reports-page' : REPORT_SUBPAGE_KEYS.includes(menu) ? ' reports-subpage' : ''}${menu === 'employee-360' ? ' employee360-page' : ''}${menu === 'feedback' ? ' feedback-page' : ''}${menu === 'announcements' ? ' announcements-page' : ''}${menu === 'id-card' ? ' id-card-page' : ''}`}>{loading&&<div className="loading">Memuat data…</div>}{error&&<div className="alert">{error}</div>}
    {menu==='overview'&&<Overview employees={employees} attendance={attendance} payroll={payroll} onNavigate={navigate} profileName={profileName} email={email} announcements={announcements}/>}
    {menu==='ai-center'&&<AICenter dbPerms={dbPerms} userRole={userRole}/>}
    {menu==='professional-suite'&&<ProfessionalSuite employees={employees} attendance={attendance} onNavigate={navigate}/>}
    {menu==='id-card'&&<IDCardModule employees={employees} companyName="Project by Tirta" logoUrl={moonLogo}/> }
    {menu==='employees'&&<Employees data={employees.filter(k => k.status_aktif !== false)} onDelete={removeEmployee} onEdit={setEditing} onExport={(columns, format)=>format==='excel' ? exportExcel(employees.filter(k => k.status_aktif !== false) as any,'database-karyawan.xls',columns) : exportCsv(employees.filter(k => k.status_aktif !== false) as any,'database-karyawan.csv',columns)} onAdd={()=>navigate('employee-add')} />}
    {menu==='employee-new'&&<NewEmployees data={pendingEmployees} onRefresh={refresh} />}
    {menu==='employee-inactive'&&<InactiveEmployees data={inactiveEmployees} onEdit={setEditing} onActivate={activateEmployee} />}
    {menu==='employee-360'&&<Employee360 employees={employees} initialEmployeeId={employee360Id}/>}
    {menu==='employee-add'&&<AddEmployee refresh={refresh} onDone={()=>navigate('employees')}/>} {menu==='hr-operations'&&<HRISCore employees={employees}/>} {menu==='production-hr'&&<ProductionHR employees={employees}/>} 
    {menu==='organization'&&<MasterData initialTab="cabang"/>}
    {menu==='attendance'&&<AttendanceUnified />}
    {menu==='schedule'&&<MasterData initialTab="jadwal"/>}{menu==='shift'&&<MasterData initialTab="shift"/>}
    {menu==='holiday'&&<HolidayModule/>}
    {['leave-request','leave-balance'].includes(menu)&&<LeaveModule initial={menu}/>}
    {menu==='payroll'&&<PayrollEnterprise employees={employees} view="payroll"/>}
    {menu==='payroll-components'&&<PayrollEnterprise employees={employees} view="components"/>}
    {menu==='payroll-overtime'&&<PayrollEnterprise employees={employees} view="overtime"/>}
    {menu==='payslip'&&<PayrollEnterprise employees={employees} view="payslip"/>}
    {menu==='payroll-engine'&&<PayrollEngineV9/>}{menu==='payroll-production-v22'&&<PayrollProductionV22/>}{menu==='payroll-indonesia-v23'&&<PayrollIndonesiaV23/>}
    {['performance','kpi'].includes(menu)&&<TalentModule key={menu} initial={menu} employees={employees}/>} {menu==='recruitment-v25'&&<RecruitmentATSv25/>} {menu.startsWith('enterprise-v')&&menu!=='enterprise-v20'&&<EnterpriseRoadmapV26V35 version={menu.replace('enterprise-','') as any}/>} {['recruitment','candidates'].includes(menu)&&<RecruitmentEnterprise/>}

    {menu==='reports'&&<Reports employees={employees} attendance={attendance} onExport={exportCsv}/>}
    {menu==='settings'&&<Settings canManageThemes={userRole.trim().toLowerCase()==='super admin'}/>} {menu==='roles'&&<RoleEditorEnterprise userRole={userRole}/>} {menu==='audit'&&<Audit/>}{menu==='approvals'&&<ApprovalCenter/>}{menu==='notifications'&&<Notifications/>}
{menu==='feedback'&&<FeedbackAdmin employees={employees}/>}
{menu==='announcements'&&<AdminAnnouncementManager
      announcements={announcements}
      onCreate={async (draft) => {
        if (!isSupabaseConfigured) {
          appAlert('Supabase belum dikonfigurasi.');
          return;
        }

        const { data: authData } = await supabase.auth.getUser();

        const { data, error } = await supabase
          .from('hris_announcements')
          .insert({
            title: draft.title.trim(),
            body: draft.body.trim(),
            category: draft.category,
            priority: draft.priority,
            audience: draft.audience,
            pinned: draft.pinned,
            expires_at: draft.expiresAt || null,
            attachment_count: 0,
            created_by: authData.user?.id || null,
            status: 'draft',
          })
          .select('*')
          .single();

        if (error) {
          appAlert(`Gagal menyimpan draft: ${error.message}`);
          return;
        }

        if (data) {
          setAnnouncements((prev) => [{
            id: data.id,
            title: data.title,
            body: data.body,
            category: data.category,
            priority: data.priority,
            status: data.status,
            audience: data.audience || { type: 'all' },
            pinned: !!data.pinned,
            publishedAt: data.published_at || undefined,
            expiresAt: data.expires_at || undefined,
            attachmentCount: Number(data.attachment_count || 0),
            imageUrl: data.image_url || undefined,
            createdBy: data.created_by || undefined,
            createdAt: data.created_at,
            updatedAt: data.updated_at || undefined,
          }, ...prev]);
        }
      }}
      onTerbitkan={async (id) => {
        const { data, error } = await supabase
          .rpc('hris_announcement_publish', { p_id: id });

        if (error) {
          appAlert(`Gagal menerbitkan pengumuman: ${error.message}`);
          return;
        }

        if (data) {
          const row = Array.isArray(data) ? data[0] : data;
          if (row) {
            setAnnouncements((prev) => prev.map((a) =>
              a.id === id
                ? {
                    ...a,
                    status: 'published',
                    publishedAt: row.published_at || new Date().toISOString(),
                    updatedAt: row.updated_at || new Date().toISOString(),
                  }
                : a
            ));
          }
        } else {
          await loadAnnouncements();
        }
      }}
      onArchive={async (id) => {
        const { data, error } = await supabase
          .rpc('hris_announcement_archive', { p_id: id });

        if (error) {
          appAlert(`Gagal mengarsipkan pengumuman: ${error.message}`);
          return;
        }

        if (data) {
          const row = Array.isArray(data) ? data[0] : data;
          if (row) {
            setAnnouncements((prev) => prev.map((a) =>
              a.id === id
                ? {
                    ...a,
                    status: 'archived',
                    updatedAt: row.updated_at || new Date().toISOString(),
                  }
                : a
            ));
          }
        } else {
          await loadAnnouncements();
        }
      }}
    />}
    {menu==='system-health'&&<SystemHealth/>}
    {menu==='enterprise-v20'&&<EnterpriseV20 employees={employees}/>}
    {menu==='security-v21'&&<SecurityCenterV21/>}  
    {editing&&<EmployeeEditor employee={editing} userRole={userRole} onClose={()=>setEditing(null)} onSave={saveEdit}/>}
    {toast&&<button className="toast" onClick={()=>setToast('')}>{toast} ×</button>}
      </section>
    </main>
   </div>
  );
};

function Login(p:{email:string;pin:string;setEmail:(v:string)=>void;setPin:(v:string)=>void;onSubmit:(e:FormEvent)=>void;error:string;loading:boolean}){
  const { t } = useTranslation();
 return <div className="login-wrap"><div className="login-card"><div className="brand center"><div className="brand-mark"><img src={moonLogo} alt="Project by Tirta" /></div><div><b>Project by Tirta</b><small>People Platform</small></div></div><h1>{t('welcome_back')}</h1><p>{t('login_to_dashboard')}</p><form onSubmit={p.onSubmit}><label>Email<input value={p.email} onChange={e=>p.setEmail(e.target.value)} required/></label><label>Password<input type="password" value={p.pin} onChange={e=>p.setPin(e.target.value)} required/></label>{p.error&&<div className="form-error">{p.error}</div>}<button className="primary full" disabled={p.loading}>{p.loading ? t('checking') : t('login_to_dashboard_button')}</button></form><small className="security-note">{t('security_note')}</small></div></div>
}

function Heading({
  title,
  desc,
  action,
  onAction,
}: {
  title: string;
  desc: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="page-heading">
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      {action && (
        <button className="primary" onClick={onAction}>
          {action}
        </button>
      )}
    </div>
  );
}

function Overview({
  employees,
  attendance,
  payroll,
  onNavigate,
  profileName,
  email,
  announcements,
}: {
  employees: Karyawan[];
  attendance: Absensi[];
  payroll: number;
  onNavigate: (m: MenuKey) => void;
  profileName: string;
  email: string;
  announcements: Announcement[];
}) {
  const { t, lang } = useTranslation();
  const locale = lang === 'id' ? 'id-ID' : lang === 'ja' ? 'ja-JP' : lang === 'ko' ? 'ko-KR' : lang === 'zh' ? 'zh-CN' : 'en-US';
  const active = employees.filter((k) => k.status_aktif !== false).length;
  const pending = employees.filter(
    (k) =>
      k.status_aktif === false &&
      String(k.role || 'karyawan').toLowerCase() === 'karyawan' &&
      String(k.status_karyawan || '').toLowerCase() !== 'ditolak',
  ).length;

  const publishedAnnouncements = announcements.filter((a) => a.status === 'published');
  const publishedCount = publishedAnnouncements.length;

  const today = isoToday();
  const todayRows = attendance.filter((a) => a.tanggal === today);
  const uniqueToday = new Map<string, Absensi>();
  todayRows.forEach((row) => {
    const key = String(row.id_karyawan || row.nama || row.id || '');
    if (!uniqueToday.has(key)) uniqueToday.set(key, row);
  });

  const presentCount = [...uniqueToday.values()].filter((row) => {
    const status = String(row.status || '').toLowerCase();
    return status.includes('hadir') || status.includes('tepat');
  }).length;
  const lateCount = [...uniqueToday.values()].filter((row) => {
    const status = String(row.status || '').toLowerCase();
    return status.includes('terlambat') || Number(row.keterlambatan_menit || 0) > 0;
  }).length;
  const attendanceRate = active
    ? Math.min(100, Math.round(((presentCount + lateCount) / active) * 100))
    : 0;
  const absentCount = Math.max(0, active - presentCount - lateCount);

  const sixMonths = Array.from({ length: 6 }, (_, index) => {
    const d = new Date();
    d.setMonth(d.getMonth() - (5 - index), 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const label = new Intl.DateTimeFormat(locale, { month: 'short' }).format(d);
    const value = attendance.filter((a) => String(a.tanggal || '').startsWith(key)).length;
    return { key, label, value };
  });
  const maxMonth = Math.max(1, ...sixMonths.map((item) => item.value));

  const chartWidth = 620;
  const chartHeight = 180;
  const chartPoints = sixMonths
    .map((item, index) => {
      const x = 24 + (index * (chartWidth - 48)) / Math.max(1, sixMonths.length - 1);
      const y = 138 - (item.value / maxMonth) * 100;
      return `${x},${y}`;
    })
    .join(' ');
  const areaPoints = `24,138 ${chartPoints} ${chartWidth - 24},138`;

  const welcomeLabel = t('welcome').trim();
  const rawProfileName = profileName.replace(/\s+/g, ' ').trim();
  const lowerProfileName = rawProfileName.toLocaleLowerCase(locale);
  const lowerWelcomeLabel = welcomeLabel.toLocaleLowerCase(locale);
  const repeatedWelcomeCount = lowerWelcomeLabel
    ? Math.max(0, lowerProfileName.split(lowerWelcomeLabel).length - 1)
    : 0;
  const emailFallback = email
    .split('@')[0]
    .replace(/[._-]+/g, ' ')
    .replace(/\d+$/g, '')
    .trim();
  const safeProfileName = rawProfileName && repeatedWelcomeCount === 0 && lowerProfileName !== lowerWelcomeLabel
    ? rawProfileName
    : (emailFallback || 'Admin');

  const statCards = [
    {
      title: t('total_employees'),
      value: String(employees.length),
      note: `${active} ${t('active').toLowerCase()}`,
      icon: 'users',
      tone: 'gold',
    },
    {
      title: t('active_employees'),
      value: String(active),
      note: `${employees.length ? Math.round((active / employees.length) * 100) : 0}% ${t('from_active_employee_master').toLowerCase()}`,
      icon: 'check',
      tone: 'green',
    },
    {
      title: t('pending_approval'),
      value: String(pending),
      note: pending ? t('attendance_review_needed') : t('no_exceptions_today'),
      icon: 'alert',
      tone: 'red',
    },
    {
      title: t('latest_announcements'),
      value: String(publishedCount),
      note: t('view_all'),
      icon: 'bell',
      tone: 'blue',
    },
  ];

  return (
    <div className="reference-dashboard">
      <section className="reference-welcome">
        <div>
          <span className="eyebrow">{t('hr_control_center')}</span>
          <h1>
            {`${welcomeLabel}, ${safeProfileName || 'Admin'}`} <span aria-hidden="true">👋</span>
          </h1>
          <p>{t('dashboard_energy_desc')}</p>
        </div>
        <div className="reference-clock">
          <span>{new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(new Date())}</span>
          <strong>{new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(new Date())}</strong>
        </div>
      </section>

      <section className="reference-stats">
        {statCards.map((card) => (
          <article className={`reference-stat ${card.tone}`} key={card.title}>
            <div className="reference-stat-icon"><Icon name={card.icon} /></div>
            <div>
              <span>{card.title}</span>
              <strong>{card.value}</strong>
              <small>{card.note}</small>
            </div>
          </article>
        ))}
      </section>

      <section className="reference-main-grid">
        <article className="reference-card reference-chart-card">
          <div className="reference-card-head">
            <div>
              <span className="eyebrow">{t('last_six_months')}</span>
              <h2>{t('employee_analytics')}</h2>
            </div>
            <button type="button" className="reference-chip">{t('last_six_months')} ×</button>
          </div>
          <svg className="reference-chart" viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img" aria-label={t('last_six_months')}>
            <defs>
              <linearGradient id="referenceChartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--web-accent-2)" stopOpacity=".38" />
                <stop offset="100%" stopColor="var(--web-accent-2)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((line) => {
              const y = 38 + line * 33;
              return <line key={line} x1="24" x2={chartWidth - 24} y1={y} y2={y} stroke="rgba(165,198,238,.10)" />;
            })}
            <polygon points={areaPoints} fill="url(#referenceChartFill)" />
            <polyline points={chartPoints} fill="none" stroke="var(--web-accent-2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {sixMonths.map((item, index) => {
              const x = 24 + (index * (chartWidth - 48)) / Math.max(1, sixMonths.length - 1);
              const y = 138 - (item.value / maxMonth) * 100;
              return (
                <g key={item.key}>
                  <circle cx={x} cy={y} r="4" fill="var(--web-accent-2)" stroke="#fff" strokeWidth="1.5" />
                  <text x={x} y="166" textAnchor="middle" fill="#91a6bf" fontSize="9">{item.label}</text>
                </g>
              );
            })}
          </svg>
          <div className="reference-chart-legend">
            <span><i className="dot present" />{t('active')}</span>
            <span><i className="dot absent" />{t('inactive')}</span>
            <button type="button" className="link-btn" onClick={() => onNavigate('employees')}>{t('open_master')} →</button>
          </div>
        </article>

        <article className="reference-card reference-announcement-card">
          <div className="reference-card-head">
            <div>
              <span className="eyebrow">{t('recent_activity')}</span>
              <h2>{t('latest_announcements')}</h2>
            </div>
            <button type="button" className="link-btn" onClick={() => onNavigate('announcements')}>{t('view_all')} →</button>
          </div>
          <div className="reference-announcement-list">
            {publishedAnnouncements.slice(0, 4).map((item, index) => (
              <button key={item.id} type="button" onClick={() => onNavigate('announcements')}>
                <span className={`reference-news-icon news-${index % 4}`}>{['⌂', '◷', '▣', '✦'][index]}</span>
                <span className="reference-news-copy">
                  <strong>{item.title}</strong>
                  <small>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString(locale) : t('new')}</small>
                </span>
                <em>{item.priority === 'urgent' ? 'Penting' : item.priority === 'important' ? 'Tinggi' : 'Normal'}</em>
              </button>
            ))}
            {!publishedAnnouncements.length && (
              <div className="reference-empty">{t('announcement_none')}</div>
            )}
          </div>
        </article>

        <article className="reference-card reference-attendance-card">
          <div className="reference-card-head">
            <div>
              <span className="eyebrow">{t('today')}</span>
              <h2>{t('attendance_rate')}</h2>
            </div>
          </div>
          <div className="reference-attendance-ring" style={{ '--rate': `${attendanceRate * 3.6}deg` } as CSSProperties}>
            <div><strong>{attendanceRate}%</strong><small>{t('present')}</small></div>
          </div>
          <div className="reference-attendance-list">
            <div><span><i className="dot present" />{t('present')}</span><b>{presentCount}</b></div>
            <div><span><i className="dot late" />{t('permission')} / {t('late_data')}</span><b>{lateCount}</b></div>
            <div><span><i className="dot absent" />{t('not_recorded')}</span><b>{absentCount}</b></div>
          </div>
        </article>
      </section>

      <section className="reference-banner">
        <div>
          <span>PROJECT BY TIRTA</span>
          <strong>{t('build_better_work_environment')}</strong>
        </div>
        <button type="button" onClick={() => onNavigate('professional-suite')}>{t('view_guide')} →</button>
      </section>

      <section className="reference-bottom-grid">
        <article className="reference-card">
          <div className="reference-card-head">
            <div><span className="eyebrow">{t('recent_activity')}</span><h2>{t('attendance_activity')}</h2></div>
            <button type="button" className="link-btn" onClick={() => onNavigate('attendance')}>{t('view_all')} →</button>
          </div>
          <AttendanceMini rows={attendance.slice(0, 4)} />
        </article>
        <article className="reference-card reference-quick-card">
          <div className="reference-card-head">
            <div><span className="eyebrow">{t('quick_access')}</span><h2>{t('favorite_menu')}</h2></div>
          </div>
          <div className="reference-quick-grid">
            <Quick label={t('add_employee')} icon="users" onClick={() => onNavigate('employee-add')} />
            <Quick label={t('work_schedule')} icon="calendar" onClick={() => onNavigate('schedule')} />
            <Quick label={t('payroll')} icon="payroll" onClick={() => onNavigate('payroll')} />
            <Quick label={t('leave_request')} icon="request" onClick={() => onNavigate('leave-request')} />
          </div>
          <div className="reference-footnote">{t('payroll')} · {t('master_employees')}: {money(payroll)}</div>
        </article>
      </section>

    </div>
  );
}
function Quick({label,icon,onClick}:{label:string;icon:string;onClick:()=>void}){return <button className="quick-action" onClick={onClick}><span className="quick-icon"><Icon name={icon}/></span>{label}<span aria-hidden="true">›</span></button>}
function AttendanceMini({rows}:{rows:Absensi[]}){const { t } = useTranslation(); return <div className="table-wrap"><table><thead><tr><th>{t('employee')}</th><th>{t('date')}</th><th>{t('check_in')}</th><th>{t('check_out')}</th><th>{t('status')}</th></tr></thead><tbody>{rows.length?rows.map((a,i)=><tr key={a.id||i}><td><b>{a.nama||'-'}</b><small>{a.id_karyawan||''}</small></td><td>{a.tanggal||'-'}</td><td className="green">{a.jam_masuk||'-'}</td><td>{a.jam_pulang||'-'}</td><td><Status value={a.status||'Hadir'}/></td></tr>):<Empty cols={5}/>}</tbody></table></div>}

function Employees({data,onDelete,onEdit,onExport,onAdd}:{data:Karyawan[];onDelete:(k:Karyawan)=>void;onEdit:(k:Karyawan)=>void;onExport:(columns:string[],format:'csv'|'excel')=>void;onAdd:()=>void}){
  const { t } = useTranslation();
 const [open,setOpen]=useState(false);
  const [detail,setDetail]=useState<Karyawan|null>(null);
 const available=[
  ["id_karyawan","ID Karyawan"],
  ["nama","Nama"],
  ["nik_ktp","NIK KTP"],
  ["tempat_lahir","Tempat Lahir"],
  ["tanggal_lahir","Tanggal Lahir"],
  ["jenis_kelamin","Jenis Kelamin"],
  ["status_pernikahan","Status Pernikahan"],
["bank_name","Bank"],
  ["bank_account","No. Rekening"],
  ["nama_ibu_kandung","Nama Ibu Kandung"],
  ["jabatan","Jabatan"],
  ["departemen","Departemen"],
  ["email","Email"],
  ["no_telp","No. Telp"],
  ["alamat_rumah","Alamat Rumah"],
  ["tanggal_masuk","Tanggal Masuk"],
  ["status_karyawan","Status Karyawan"],
  ["status_aktif","Status Aktif"],
  ["gaji_pokok","Gaji Pokok"],
  ["role","Role"],
  ["bpjs_kesehatan","BPJS Kesehatan"],
  ["bpjs_ketenagakerjaan","BPJS Ketenagakerjaan"],
  ["bpjs_kesehatan_card_path","Kartu BPJS Kesehatan"],
  ["bpjs_ketenagakerjaan_card_path","Kartu BPJS Ketenagakerjaan"],
  ["email_terverifikasi","Email Terverifikasi"]
 ] as const;
 const [selected,setSelected]=useState<string[]>(available.slice(0,9).map(x=>x[0]));
 const toggle=(key:string)=>setSelected(v=>v.includes(key)?v.filter(x=>x!==key):[...v,key]);
 return <><Heading title={t('employees')} desc={t("employees_desc")} action={t("add_employee")} onAction={onAdd}/>
 <div className="toolbar"><b>{data.length} {t("employees").toLowerCase()}</b><button className="secondary" onClick={()=>setOpen(true)}>{t("export_data")}</button></div>
 {open&&<div className="export-backdrop" onMouseDown={e=>{if(e.currentTarget===e.target)setOpen(false)}}>
   <div className="export-card">
    <div className="export-head"><div><span>{t("people_export")}</span><h2>{t("export_employee_database")}</h2><p>{t("select_columns_for_file")}</p></div><button className="icon-btn" onClick={()=>setOpen(false)}>×</button></div>
    <div className="export-actions-top"><button type="button" className="link-btn" onClick={()=>setSelected(available.map(x=>x[0]))}>{t("select_all")}</button><button type="button" className="link-btn" onClick={()=>setSelected([])}>{t("clear_all")}</button><strong>{selected.length} {t("columns")}</strong></div>
    <div className="export-columns">{available.map(([key,label])=><label key={key} className="export-check"><input type="checkbox" checked={selected.includes(key)} onChange={()=>toggle(key)}/><span>{label}</span></label>)}</div>
    <div className="export-foot"><button className="secondary" onClick={()=>setOpen(false)}>{t("cancel")}</button><button className="secondary" disabled={!selected.length} onClick={()=>{onExport(selected,'csv');setOpen(false)}}>{t("download_csv")}</button><button className="primary" disabled={!selected.length} onClick={()=>{onExport(selected,'excel');setOpen(false)}}>{t("download_excel")}</button></div>
   </div>
 </div>}
   {detail&&(
  <div className="export-backdrop" onMouseDown={e=>{if(e.currentTarget===e.target)setDetail(null)}}>
    <div className="export-card employee-detail-card">
      <div className="export-head">
        <div>
          <span>{t("people_detail")}</span>
          <h2>{t("employee_detail")}</h2>
          <p>{t("employee_detail_desc")}</p>
        </div>
        <button className="icon-btn" onClick={()=>setDetail(null)}>×</button>
      </div>

      <div className="employee-detail-grid">

        <div className="detail-section">
          <h3>{t("identity")}</h3>
          <div className="detail-item"><span>{t("employee_id")}</span><b>{detail.id_karyawan||'—'}</b></div>
          <div className="detail-item"><span>Nama</span><b>{detail.nama||'—'}</b></div>
          <div className="detail-item"><span>{t("national_id")}</span><b>{detail.nik_ktp||'—'}</b></div>
          <div className="detail-item"><span>{t("birth_place")}</span><b>{detail.tempat_lahir||'—'}</b></div>
          <div className="detail-item"><span>{t("birth_date")}</span><b>{detail.tanggal_lahir||'—'}</b></div>
          <div className="detail-item"><span>{t("gender")}</span><b>{detail.jenis_kelamin||'—'}</b></div>
          <div className="detail-item"><span>{t("marital_status")}</span><b>{detail.status_pernikahan||'—'}</b></div>
          <div className="detail-item"><span>{t("mother_name")}</span><b>{detail.nama_ibu_kandung||'—'}</b></div>
        </div>

        <div className="detail-section">
          <h3>{t("employment")}</h3>
          <div className="detail-item"><span>{t("position")}</span><b>{detail.jabatan||'—'}</b></div>
          <div className="detail-item"><span>{t("department")}</span><b>{detail.departemen||'—'}</b></div>
          <div className="detail-item"><span>{t("join_date")}</span><b>{detail.tanggal_masuk||'—'}</b></div>
          <div className="detail-item"><span>{t("employee_status")}</span><b>{detail.status_karyawan||'—'}</b></div>
          <div className="detail-item"><span>{t("active_status")}</span><b>{detail.status_aktif===true?t('active'):detail.status_aktif===false?t('inactive'):'—'}</b></div>
          <div className="detail-item"><span>Role</span><b>{detail.role||'—'}</b></div>
        </div>

        <div className="detail-section">
          <h3>{t("contact")}</h3>
          <div className="detail-item"><span>Email</span><b>{detail.email||'—'}</b></div>
          <div className="detail-item"><span>{t("email_verified")}</span><b>{detail.email_terverifikasi===true?t('verified'):detail.email_terverifikasi===false?t('not_verified'):'—'}</b></div>
          <div className="detail-item"><span>{t("phone")}</span><b>{detail.no_telp||'—'}</b></div>
          <div className="detail-item"><span>{t("home_address")}</span><b>{detail.alamat_rumah||'—'}</b></div>
        </div>

        <div className="detail-section">
          <h3>{t("bank_payroll")}</h3>
          <div className="detail-item"><span>{t("bank")}</span><b>{detail.bank_name||'—'}</b></div>
          <div className="detail-item"><span>{t("bank_account")}</span><b>{detail.bank_account||'—'}</b></div>
          <div className="detail-item"><span>{t("basic_salary")}</span><b>{detail.gaji_pokok!=null?money(Number(detail.gaji_pokok)):'—'}</b></div>
        </div>

      </div>

      <div className="export-foot">
        <button className="secondary" onClick={()=>setDetail(null)}>{t("close")}</button>
        <button className="primary" onClick={()=>{onEdit(detail);setDetail(null)}}>{t("edit_data")}</button>
      </div>
    </div>
  </div>
)}
 <div className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>{t("name")}</th><th>{t("id")}</th><th>{t("position")}</th><th>{t("department")}</th><th>{t("status")}</th><th>{t("basic_salary")}</th><th>{t("actions")}</th></tr></thead><tbody>{data.length?data.map(k=><tr key={k.id}><td><div className="person"><div className="mini-avatar">{k.nama?.[0]||'K'}</div><b>{k.nama}</b></div></td><td>{k.id_karyawan||'-'}</td><td>{k.jabatan||'-'}</td><td>{k.departemen||'-'}</td><td><Status value={k.status_aktif===false?t('inactive'):t('active')}/></td><td>{money(Number(k.gaji_pokok||0))}</td><td>
  <div className="row-actions">
  <button className="link-btn" onClick={()=>setDetail(k)}>
    Detail
  </button>
  <button className="link-btn" onClick={()=>onEdit(k)}>
    Edit
  </button>

    <button className="danger-text" onClick={()=>onDelete(k)}>{t("delete")}</button>
  </div>
</td></tr>):<Empty cols={7}/>}</tbody></table></div></div></>
}
function NewEmployees({data,onRefresh}:{data:Karyawan[];onRefresh:()=>void}) {
  const { t } = useTranslation();
  const [selected,setSelected]=useState<Karyawan|null>(null);
  const [photoUrl,setPhotoUrl]=useState('');
  const [busy,setBusy]=useState(false);

  useEffect(()=>{
    let active=true;
    const load=async()=>{
      setPhotoUrl('');
      const path=selected?.foto_url;
      if(!path) return;

      try {
        const { data, error } = await supabase.storage
          .from('profile-photos')
          .createSignedUrl(path, 900);
        if(active && !error && data?.signedUrl) {
          setPhotoUrl(data.signedUrl);
        }
      } catch {
        if (active) setPhotoUrl('');
      }
    };

    load();
    return()=>{active=false};
  },[selected?.id,selected?.foto_url]);

  const decide=async(decision:'Terima'|'Tolak')=>{
    if(!selected) return;
    setBusy(true);

    let catatan: string | null = null;
    if(decision === 'Tolak'){
      catatan = (await appPrompt(t('rejection_reason_prompt'), '') || '').trim() || null;
      if(!catatan){
        setBusy(false);
        return;
      }
    }

    const { data: decisionResult, error: decisionError } =
      await supabase.functions.invoke('approve-employee-registration', {
        body: {
          employee_id: String(selected.id_karyawan || '').trim(),
          decision,
          catatan,
        },
      });

    if(decisionError || !decisionResult?.ok){
      await appAlert(
        decisionResult?.error ||
        decisionError?.message ||
        'Gagal memproses persetujuan registrasi.'
      );
      setBusy(false);
      return;
    }

    setSelected(null);
    setBusy(false);
    onRefresh();
  };  return <>
    <Heading title={t('admin_new_employee')} desc={t('admin_new_employee_desc')} />
    <div className="toolbar"><b>{data.length} {t('admin_pending_registrations')}</b></div>
    <div className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>{t('photo')}</th><th>{t('name')}</th><th>{t('employee_id')}</th><th>{t('department')}</th><th>{t('position')}</th><th>{t('registration_date')}</th><th>{t('actions')}</th></tr></thead><tbody>
      {data.length ? data.map(k=><tr key={k.id}>
        <td><div className="mini-avatar">{k.nama?.[0]||'K'}</div></td>
        <td><b>{k.nama||'—'}</b><small>{k.email||'—'}</small></td>
        <td>{k.id_karyawan||'—'}</td><td>{k.departemen||'—'}</td><td>{k.jabatan||'—'}</td><td>{k.created_at ? new Date(k.created_at).toLocaleDateString('id-ID') : '—'}</td>
        <td><button className="link-btn" onClick={()=>setSelected(k)}>{t('detail')}</button></td>
      </tr>) : <Empty cols={7}/>}</tbody></table></div></div>
    {selected&&<div className="profile-panel-overlay" onClick={()=>!busy&&setSelected(null)}><div className="export-card employee-detail-card" onClick={e=>e.stopPropagation()}>
      <div className="export-head"><div><span className="eyebrow">{t('new_registration')}</span><h2>{selected.nama||t('admin_new_employee')}</h2><p>{t('admin_review_registration')}</p></div><button className="icon-btn" onClick={()=>!busy&&setSelected(null)}>×</button></div>
      <div style={{display:'flex',gap:24,alignItems:'flex-start',flexWrap:'wrap',marginBottom:20}}>
        <div style={{width:150,height:190,borderRadius:14,overflow:'hidden',background:'#eef2f7',display:'flex',alignItems:'center',justifyContent:'center'}}>{photoUrl?<img src={photoUrl} alt={t('applicant_photo_alt')} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:<span style={{fontSize:48,color:'#98a2b3'}}>{selected.nama?.[0]||'K'}</span>}</div>
        <div className="employee-detail-grid" style={{flex:1,minWidth:280}}>{[
          ['NIK KTP',selected.nik_ktp],['ID Karyawan',selected.id_karyawan],['Nama',selected.nama],['Tempat Lahir',selected.tempat_lahir],['Tanggal Lahir',selected.tanggal_lahir],['Jenis Kelamin',selected.jenis_kelamin],['Alamat Rumah',selected.alamat_rumah],['No. Telepon',selected.no_telp],['Email',selected.email],['Status Pernikahan',selected.status_pernikahan],['Nama Ibu Kandung',selected.nama_ibu_kandung],['Departemen',selected.departemen],['Jabatan',selected.jabatan],['Status Karyawan',selected.status_karyawan],['Tanggal Masuk',selected.tanggal_masuk],['Gaji Pokok',selected.gaji_pokok!=null?money(Number(selected.gaji_pokok)):null],['Nama Bank',selected.bank_name],['Nomor Rekening',selected.bank_account]
        ].map(([label,value])=><div className="detail-item" key={label}><span>{label}</span><b>{value||'—'}</b></div>)}</div>
      </div>
      <div className="export-foot"><button className="secondary" disabled={busy} onClick={()=>setSelected(null)}>{t('close')}</button><button className="danger-text" disabled={busy} onClick={()=>decide('Tolak')}>{t('reject')}</button><button className="primary" disabled={busy} onClick={()=>decide('Terima')}>{busy?t('processing'):t('accept')}</button></div>
    </div></div>}
  </>;
}

function InactiveEmployees({data,onEdit,onActivate}:{data:Karyawan[];onEdit:(k:Karyawan)=>void;onActivate:(k:Karyawan)=>void}) {
  const { t } = useTranslation();
  return <>
    <Heading title={t('inactive_employees')} desc={t('inactive_employees_desc')} />
    <div className="toolbar"><b>{data.length} {t('inactive_employees').toLowerCase()}</b></div>
    <div className="panel table-panel inactive-employee-panel">
      <div className="table-wrap"><table><thead><tr>
        <th>{t('name')}</th><th>{t('employee_id')}</th><th>{t('position')}</th><th>{t('department')}</th><th>{t('employee_status')}</th><th>{t('actions')}</th>
      </tr></thead><tbody>
        {data.length ? data.map(k => <tr key={k.id}>
          <td><div className="person"><div className="mini-avatar inactive-avatar">{k.nama?.[0]||'K'}</div><div><b>{k.nama||'—'}</b><small>{k.email||'—'}</small></div></div></td>
          <td>{k.id_karyawan||'—'}</td>
          <td>{k.jabatan||'—'}</td>
          <td>{k.departemen||'—'}</td>
          <td><span className="status status-red-inactive">{t('inactive')}</span></td>
          <td><div className="row-actions inactive-actions">
            <button className="link-btn" type="button" onClick={()=>onEdit(k)}>{t('edit_data')}</button>
            <button className="secondary activate-btn" type="button" onClick={()=>onActivate(k)}>{t('activate_employee')}</button>
          </div></td>
        </tr>) : <Empty cols={6}/>}</tbody></table></div>
    </div>
  </>;
}

function AddEmployee({onDone,refresh}:{onDone:()=>void;refresh:()=>void}) {
  const { t } = useTranslation();
  const [f,setF]=useState({
    nik_ktp:'',
    id_karyawan:'',
    nama:'',
    tempat_lahir:'',
    tanggal_lahir:'',
    alamat_rumah:'',
    no_telp:'',
    email:'',
    nama_ibu_kandung:'',
    departemen:'',
    jabatan:'',
    status_karyawan:'Tetap',
    tanggal_masuk:'',
    gaji_pokok:'',
    bank_name:'',
    bank_account:''
  }),[saving,setSaving]=useState(false),[msg,setMsg]=useState('');

  async function save(e:FormEvent){
    e.preventDefault();
    setSaving(true);
    setMsg('');

    const payload={
      ...f,
      tanggal_lahir: f.tanggal_lahir || null,
      tanggal_masuk: f.tanggal_masuk || null,
      gaji_pokok:Number(f.gaji_pokok||0),
      status_aktif:true
    };

    const {error:e2}=await supabase.from('karyawan').insert(payload);

    setSaving(false);

    if(e2)setMsg(e2.message);
    else{
      refresh();
      onDone();
    }
  }

  const labels:Record<string,string>={
    nik_ktp:t("national_id"),
    id_karyawan:t("employee_id"),
    nama:t("name"),
    tempat_lahir:t("birth_place"),
    tanggal_lahir:t("birth_date"),
    alamat_rumah:t("home_address"),
    no_telp:t("phone"),
    email:t("email"),
    nama_ibu_kandung:t("mother_name"),
    departemen:t("department"),
    jabatan:t("position"),
    status_karyawan:t("employee_status"),
    tanggal_masuk:t("join_date"),
    gaji_pokok:t("basic_salary"),
    bank_name:t("bank"),
    bank_account:t("bank_account")
  };

  return <><Heading title={t("add_employee")} desc={t("add_employee_desc")}/>
    <div className="panel form-panel">
      <form className="form-grid" onSubmit={save}>
        {Object.entries(f).map(([k,v])=>
          <label key={k}>{labels[k]||fieldLabel(k)}
            {k==='status_karyawan' ? (
              <select value={String(v??'')} onChange={e=>setF({...f,[k]:e.target.value})}>
                <option value="Tetap">Tetap</option>
                <option value="Kontrak">Kontrak</option>
                <option value="Harian">Harian</option>
                <option value="Probation">Probation</option>
              </select>
            ) : (
              <input
                required={['id_karyawan','nama'].includes(k)}
                type={k==='gaji_pokok'?'number':(['tanggal_lahir','tanggal_masuk'].includes(k)?'date':k==='email'?'email':'text')}
                value={String(v??'')}
                onChange={e=>setF({...f,[k]:e.target.value})}
              />
            )}
          </label>
        )}
        {msg&&<div className="form-error full-span">{msg}</div>}
        <div className="full-span form-actions">
          <button type="button" className="secondary" onClick={onDone}>Batal</button>
          <button className="primary" disabled={saving}>
            {saving ? t('saving') : t('save_employee')}
          </button>
        </div>
      </form>
    </div>
  </>
}

function EmployeeEditor({
  employee,
  userRole,
  onClose,
  onSave,
}: {
  employee: Karyawan;
  userRole: string;
  onClose: () => void;
  onSave: (p: Record<string, unknown>) => Promise<boolean> | boolean;
}) {
  const { t } = useTranslation();
  const isSuperAdmin = userRole.trim().toLowerCase() === 'super admin';

  const [f, setF] = useState({
    nik_ktp: employee.nik_ktp || '',
    id_karyawan: employee.id_karyawan || '',
    nama: employee.nama || '',
    tempat_lahir: employee.tempat_lahir || '',
    tanggal_lahir: employee.tanggal_lahir || '',
    jenis_kelamin: employee.jenis_kelamin || '',
    alamat_rumah: employee.alamat_rumah || '',
    no_telp: employee.no_telp || '',
    email: employee.email || '',
    status_pernikahan: employee.status_pernikahan || '',
    nama_ibu_kandung: employee.nama_ibu_kandung || '',
    departemen: employee.departemen || '',
    jabatan: employee.jabatan || '',
    status_karyawan: employee.status_karyawan || 'Tetap',
    tanggal_masuk: employee.tanggal_masuk || '',
    gaji_pokok: String(employee.gaji_pokok || 0),
    bank_name: employee.bank_name || '',
    bank_account: employee.bank_account || '',
    role: employee.role || 'Karyawan',
    bpjs_kesehatan: employee.bpjs_kesehatan || '',
    bpjs_ketenagakerjaan: employee.bpjs_ketenagakerjaan || '',
    status_aktif: employee.status_aktif !== false,
  });

  const [roles, setRoles] = useState<string[]>([
    'Karyawan', 'Supervisor', 'Payroll', 'HRD', 'Admin', 'Super Admin'
  ]);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState('');
  const [bpjsKesehatanFile, setBpjsKesehatanFile] = useState<File | null>(null);
  const [bpjsKetenagakerjaanFile, setBpjsKetenagakerjaanFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const setField = (key: string, value: string | boolean) => {
    setF(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let cancelled = false;
    void supabase
      .from('hris_roles')
      .select('nama')
      .eq('status', 'Aktif')
      .order('nama')
      .then(({ data }) => {
        if (cancelled) return;
        const next = Array.from(new Set([
          ...roles,
          ...((data || []).map((row: any) => String(row.nama || '').trim()).filter(Boolean))
        ]));
        setRoles(next);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadCurrentPhoto = async () => {
      const photo = employee.foto_url || '';
      if (!photo) {
        setPhotoPreview('');
        return;
      }
      if (/^https?:\/\//i.test(photo) || /^data:image\//i.test(photo) || /^blob:/i.test(photo) || /^\//.test(photo)) {
        setPhotoPreview(photo);
        return;
      }
      try {
        const { data, error } = await supabase.storage.from('profile-photos').createSignedUrl(photo, 900);
        if (!cancelled) setPhotoPreview(error || !data?.signedUrl ? '' : data.signedUrl);
      } catch {
        if (!cancelled) setPhotoPreview('');
      }
    };
    void loadCurrentPhoto();
    return () => { cancelled = true; };
  }, [employee.id, employee.foto_url]);

  useEffect(() => () => {
    if (photoPreview.startsWith('blob:')) URL.revokeObjectURL(photoPreview);
  }, [photoPreview]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      void appAlert('File foto harus berupa gambar.');
      e.target.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      void appAlert('Ukuran foto maksimal 2 MB.');
      e.target.value = '';
      return;
    }
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const validateBpjsFile = async (file: File | null, label: string) => {
    if (!file) return true;
    if (!file.type.startsWith('image/')) {
      await appAlert(`${label} harus berupa file gambar.`);
      return false;
    }
    if (file.size > 4 * 1024 * 1024) {
      await appAlert(`${label} maksimal 4 MB.`);
      return false;
    }
    return true;
  };

  const isStoragePath = (value: string) =>
    Boolean(value) &&
    !/^https?:\/\//i.test(value) &&
    !/^data:image\//i.test(value) &&
    !/^blob:/i.test(value) &&
    !/^\//.test(value);

  const uploadBpjsCard = async (
    file: File,
    kind: 'kesehatan' | 'ketenagakerjaan'
  ) => {
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const id = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const path = `cards/${f.id_karyawan.trim().toUpperCase()}/bpjs-${kind}-${id}.${ext}`;

    const { data: signed, error: signedError } = await supabase.storage
      .from('bpjs-cards')
      .createSignedUploadUrl(path, { upsert: false });
    if (signedError) throw signedError;

    const { error: uploadError } = await supabase.storage
      .from('bpjs-cards')
      .uploadToSignedUrl(path, signed.token, file);
    if (uploadError) throw uploadError;

    return path;
  };

  const save = async () => {
    if (!f.id_karyawan.trim()) {
      await appAlert(t('employee_id_required'));
      return;
    }

    if (!isSuperAdmin && f.role !== (employee.role || 'Karyawan')) {
      await appAlert('Perubahan Role hanya dapat dilakukan oleh Super Admin.');
      return;
    }

    if (!(await validateBpjsFile(bpjsKesehatanFile, 'Kartu BPJS Kesehatan'))) return;
    if (!(await validateBpjsFile(bpjsKetenagakerjaanFile, 'Kartu BPJS Ketenagakerjaan'))) return;

    setSaving(true);

    let uploadedPhotoPath = '';
    let uploadedBpjsKesehatanPath = '';
    let uploadedBpjsKetenagakerjaanPath = '';

    try {
      const payload: Record<string, unknown> = {
        ...f,
        id_karyawan: f.id_karyawan.trim().toUpperCase(),
        gaji_pokok: Number(f.gaji_pokok || 0),
      };

      for (const key of ['tanggal_lahir', 'tanggal_masuk']) {
        if (payload[key] === '') payload[key] = null;
      }

      const oldPhotoPath = employee.foto_url || '';
      const oldBpjsKesehatanPath = employee.bpjs_kesehatan_card_path || '';
      const oldBpjsKetenagakerjaanPath = employee.bpjs_ketenagakerjaan_card_path || '';

      if (photoFile) {
        const ext = photoFile.name.split('.').pop()?.toLowerCase() || 'jpg';
        const safeUuid = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        uploadedPhotoPath = `avatars/employee-${safeUuid}.${ext}`;

        const { data: signedUpload, error: signedUploadError } = await supabase.storage
          .from('profile-photos')
          .createSignedUploadUrl(uploadedPhotoPath, { upsert: false });
        if (signedUploadError) throw signedUploadError;

        const { error: uploadError } = await supabase.storage
          .from('profile-photos')
          .uploadToSignedUrl(uploadedPhotoPath, signedUpload.token, photoFile);
        if (uploadError) throw uploadError;

        payload.foto_url = uploadedPhotoPath;
      }

      if (bpjsKesehatanFile) {
        uploadedBpjsKesehatanPath = await uploadBpjsCard(bpjsKesehatanFile, 'kesehatan');
        payload.bpjs_kesehatan_card_path = uploadedBpjsKesehatanPath;
      }

      if (bpjsKetenagakerjaanFile) {
        uploadedBpjsKetenagakerjaanPath = await uploadBpjsCard(bpjsKetenagakerjaanFile, 'ketenagakerjaan');
        payload.bpjs_ketenagakerjaan_card_path = uploadedBpjsKetenagakerjaanPath;
      }

      const saved = await onSave(payload);
      if (!saved) {
        if (uploadedPhotoPath) await supabase.storage.from('profile-photos').remove([uploadedPhotoPath]).catch(() => undefined);
        if (uploadedBpjsKesehatanPath) await supabase.storage.from('bpjs-cards').remove([uploadedBpjsKesehatanPath]).catch(() => undefined);
        if (uploadedBpjsKetenagakerjaanPath) await supabase.storage.from('bpjs-cards').remove([uploadedBpjsKetenagakerjaanPath]).catch(() => undefined);
        return;
      }

      if (uploadedPhotoPath && oldPhotoPath && oldPhotoPath !== uploadedPhotoPath && isStoragePath(oldPhotoPath)) {
        await supabase.storage.from('profile-photos').remove([oldPhotoPath]).catch(error => {
          console.warn('Foto lama tidak berhasil dihapus:', error);
        });
      }

      for (const [oldPath, newPath] of [
        [oldBpjsKesehatanPath, uploadedBpjsKesehatanPath],
        [oldBpjsKetenagakerjaanPath, uploadedBpjsKetenagakerjaanPath],
      ]) {
        if (oldPath && newPath && oldPath !== newPath && isStoragePath(oldPath)) {
          await supabase.storage.from('bpjs-cards').remove([oldPath]).catch(error => {
            console.warn('Kartu BPJS lama tidak berhasil dihapus:', error);
          });
        }
      }
    } catch (error: any) {
      if (uploadedPhotoPath) await supabase.storage.from('profile-photos').remove([uploadedPhotoPath]).catch(() => undefined);
      if (uploadedBpjsKesehatanPath) await supabase.storage.from('bpjs-cards').remove([uploadedBpjsKesehatanPath]).catch(() => undefined);
      if (uploadedBpjsKetenagakerjaanPath) await supabase.storage.from('bpjs-cards').remove([uploadedBpjsKetenagakerjaanPath]).catch(() => undefined);

      await appAlert(`Gagal menyimpan data karyawan:\n${error?.message || 'Terjadi kesalahan.'}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="drawer-backdrop" onMouseDown={e => {
      if (e.currentTarget === e.target && !saving) onClose();
    }}>
      <aside className="edit-drawer">
        <div className="drawer-head">
          <div>
            <span>{t('employee_profile')}</span>
            <h2>{t('edit_employee')}</h2>
          </div>
          <button className="icon-btn" onClick={onClose} type="button" disabled={saving}>×</button>
        </div>

        <div className="drawer-body">
          <div style={{marginBottom:20,padding:14,border:'1px solid #d0d5dd',borderRadius:14}}>
            <div style={{display:'flex',alignItems:'center',gap:16}}>
              <div style={{width:110,height:135,flexShrink:0,borderRadius:12,overflow:'hidden',background:'#eef2f7',border:'2px solid #d6ae58',display:'flex',alignItems:'center',justifyContent:'center'}}>
                {photoPreview ? (
                  <img src={photoPreview} alt={`Foto ${employee.nama}`} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                ) : (
                  <span style={{fontSize:38,fontWeight:700,color:'#667085'}}>{employee.nama?.[0] || 'K'}</span>
                )}
              </div>
              <div>
                <strong style={{display:'block',marginBottom:6}}>Foto Karyawan</strong>
                <small style={{display:'block',color:'#667085',marginBottom:10}}>JPG, PNG, atau WebP · maksimal 2 MB</small>
                <input id={`employee-photo-${employee.id}`} type="file" accept="image/jpeg,image/png,image/webp" onChange={handlePhotoChange} disabled={saving} style={{display:'none'}} />
                <label htmlFor={`employee-photo-${employee.id}`} className="secondary" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'9px 13px',cursor:saving?'not-allowed':'pointer'}}>
                  {photoFile ? 'Ganti Foto Lagi' : 'Ganti Foto'}
                </label>
                {photoFile && <div style={{marginTop:8,fontSize:12,color:'#475467'}}>Foto baru: {photoFile.name}</div>}
              </div>
            </div>
          </div>

          <label>NIK KTP<input value={f.nik_ktp} onChange={e=>setField('nik_ktp',e.target.value)} disabled={saving}/></label>
          <label>ID Karyawan<input value={f.id_karyawan} onChange={e=>setField('id_karyawan',e.target.value)} disabled={saving}/></label>
          <label>Nama<input value={f.nama} onChange={e=>setField('nama',e.target.value)} disabled={saving}/></label>
          <label>Tempat Lahir<input value={f.tempat_lahir} onChange={e=>setField('tempat_lahir',e.target.value)} disabled={saving}/></label>
          <label>Tanggal Lahir<input type="date" value={f.tanggal_lahir} onChange={e=>setField('tanggal_lahir',e.target.value)} disabled={saving}/></label>

          <label>Jenis Kelamin
            <select value={f.jenis_kelamin} onChange={e=>setField('jenis_kelamin',e.target.value)} disabled={saving}>
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </label>

          <label>Alamat<input value={f.alamat_rumah} onChange={e=>setField('alamat_rumah',e.target.value)} disabled={saving}/></label>
          <label>No. Telepon<input value={f.no_telp} onChange={e=>setField('no_telp',e.target.value)} disabled={saving}/></label>
          <label>Email<input type="email" value={f.email} onChange={e=>setField('email',e.target.value)} disabled={saving}/></label>

          <label>Status Pernikahan
            <select value={f.status_pernikahan} onChange={e=>setField('status_pernikahan',e.target.value)} disabled={saving}>
              <option value="">Pilih Status Pernikahan</option>
              <option value="Belum Menikah">Belum Menikah</option>
              <option value="Menikah">Menikah</option>
              <option value="Cerai">Cerai</option>
            </select>
          </label>

          <label>Nama Ibu Kandung<input value={f.nama_ibu_kandung} onChange={e=>setField('nama_ibu_kandung',e.target.value)} disabled={saving}/></label>
          <label>Departemen<input value={f.departemen} onChange={e=>setField('departemen',e.target.value)} disabled={saving}/></label>
          <label>Jabatan<input value={f.jabatan} onChange={e=>setField('jabatan',e.target.value)} disabled={saving}/></label>

          <label>Status Karyawan
            <select value={f.status_karyawan} onChange={e=>setField('status_karyawan',e.target.value)} disabled={saving}>
              <option value="Tetap">Tetap</option>
              <option value="Kontrak">Kontrak</option>
              <option value="Harian">Harian</option>
              <option value="Probation">Probation</option>
            </select>
          </label>

          <label>Tanggal Masuk<input type="date" value={f.tanggal_masuk} onChange={e=>setField('tanggal_masuk',e.target.value)} disabled={saving}/></label>
          <label>Gaji Pokok<input type="number" value={f.gaji_pokok} onChange={e=>setField('gaji_pokok',e.target.value)} disabled={saving}/></label>
          <label>Nama Bank<input value={f.bank_name} onChange={e=>setField('bank_name',e.target.value)} disabled={saving}/></label>
          <label>Nomor Rekening<input value={f.bank_account} onChange={e=>setField('bank_account',e.target.value)} disabled={saving}/></label>

          <label>
            Role
            <select value={f.role} onChange={e=>setField('role',e.target.value)} disabled={saving || !isSuperAdmin}>
              {!roles.includes(f.role) && <option value={f.role}>{f.role}</option>}
              {roles.map(role => <option key={role} value={role}>{role}</option>)}
            </select>
            {!isSuperAdmin && <small style={{display:'block',marginTop:4,color:'#667085'}}>Hanya Super Admin yang dapat mengubah Role.</small>}
          </label>

          <div style={{marginTop:6,padding:14,border:'1px solid #d0d5dd',borderRadius:14}}>
            <strong style={{display:'block',marginBottom:12}}>BPJS Karyawan</strong>

            <label>
              BPJS Kesehatan
              <input value={f.bpjs_kesehatan} onChange={e=>setField('bpjs_kesehatan',e.target.value)} disabled={saving} placeholder="Nomor BPJS Kesehatan" />
            </label>

            <label style={{marginTop:12}}>
              Kartu BPJS Kesehatan
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={e=>setBpjsKesehatanFile(e.target.files?.[0] || null)} disabled={saving}/>
              <small style={{display:'block',marginTop:5,color:'#667085'}}>JPG, PNG, WebP · maksimal 4 MB{bpjsKesehatanFile ? ` · ${bpjsKesehatanFile.name}` : ''}</small>
            </label>

            <label style={{marginTop:12}}>
              BPJS Ketenagakerjaan
              <input value={f.bpjs_ketenagakerjaan} onChange={e=>setField('bpjs_ketenagakerjaan',e.target.value)} disabled={saving} placeholder="Nomor BPJS Ketenagakerjaan" />
            </label>

            <label style={{marginTop:12}}>
              Kartu BPJS Ketenagakerjaan
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={e=>setBpjsKetenagakerjaanFile(e.target.files?.[0] || null)} disabled={saving}/>
              <small style={{display:'block',marginTop:5,color:'#667085'}}>JPG, PNG, WebP · maksimal 4 MB{bpjsKetenagakerjaanFile ? ` · ${bpjsKetenagakerjaanFile.name}` : ''}</small>
            </label>
          </div>

          <label className="switch-row">
            <span>{t('active_status')}</span>
            <input type="checkbox" checked={f.status_aktif} onChange={e=>setField('status_aktif',e.target.checked)} disabled={saving}/>
          </label>
        </div>

        <div className="drawer-foot">
          <button type="button" className="secondary" onClick={onClose} disabled={saving}>Batal</button>
          <button type="button" className="primary" onClick={()=>void save()} disabled={saving}>
            {saving ? 'Mengupload & Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </aside>
    </div>
  );
}
function Branch({title,desc,items,tab,setTab,action,onAction,children}:{title:string;desc:string;items:{key:string;label:string;icon:string}[];tab:string;setTab:(v:string)=>void;action?:string;onAction?:()=>void;children:ReactNode}){return <><Heading title={title} desc={desc} action={action} onAction={onAction}/><div className="branch-nav">{items.map(i=><button key={i.key} className={tab===i.key?'active':''} onClick={()=>setTab(i.key)}><span>{i.icon}</span>{i.label}</button>)}</div>{children}</>}

function HolidayModule(){const {t}=useTranslation();
 const [rows,setRows]=useState<any[]>([]),[modal,setModal]=useState(false),[f,setF]=useState({tanggal:isoToday(),nama:'',tipe:'Nasional'}),[msg,setMsg]=useState('');
 const load=async()=>{if(!(await hasActiveSupabaseSession()))return;const {data,error}=await supabase.from('hris_hari_libur').select('*').order('tanggal');if(error)setMsg(error.message);else setRows(data||[])};useEffect(()=>watchSupabaseAuth(load),[]);
 const save=async(e:FormEvent)=>{e.preventDefault();const {error}=await supabase.from('hris_hari_libur').insert(f);if(error)setMsg(error.message);else{setModal(false);setF({tanggal:isoToday(),nama:'',tipe:'Nasional'});load()}};
 const del=async(id:string)=>{if(await appConfirm(t('delete_holiday_confirm'))){const {error}=await supabase.from('hris_hari_libur').delete().eq('id',id);if(error)setMsg(error.message);else load()}};
 return <><Heading title={t('holidays')} desc={t('holidays_desc')} action={t('add_holiday')} onAction={()=>setModal(true)}/>{msg&&<div className="alert">{msg}</div>}<div className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>{t('date')}</th><th>{t('name')}</th><th>{t('type')}</th><th>{t('actions')}</th></tr></thead><tbody>{rows.length?rows.map(r=><tr key={r.id}><td>{r.tanggal}</td><td><b>{r.nama}</b></td><td><Status value={r.tipe}/></td><td><button className="danger-text" onClick={()=>del(r.id)}>{t('delete')}</button></td></tr>):<Empty cols={4}/>}</tbody></table></div></div>{modal&&<SimpleModal title={t('add_holiday')} onClose={()=>setModal(false)} onSave={save}><label>{t('date')}<input type="date" value={f.tanggal} onChange={e=>setF({...f,tanggal:e.target.value})}/></label><label>{t('holiday_name')}<input required value={f.nama} onChange={e=>setF({...f,nama:e.target.value})}/></label><label>{t('type')}<select value={f.tipe} onChange={e=>setF({...f,tipe:e.target.value})}><option>Nasional</option><option>Perusahaan</option></select></label></SimpleModal>}</>
}

function LeaveModule({initial}:{initial:MenuKey}){const {t}=useTranslation();
 const [tab,setTab]=useState(initial==='leave-balance'?'balance':'requests'),[rows,setRows]=useState<any[]>([]),[balances,setBalances]=useState<any[]>([]),[modal,setModal]=useState(false),[employees,setEmployees]=useState<Karyawan[]>([]);
 const [f,setF]=useState({id_karyawan:'',jenis:'Tahunan',tanggal_mulai:isoToday(),tanggal_selesai:isoToday(),jumlah_hari:'1',alasan:'',status:'Menunggu'});
 const load=async()=>{if(!(await hasActiveSupabaseSession()))return; const [a,b,c]=await Promise.all([supabase.from('hris_cuti').select('*').order('created_at',{ascending:false}),supabase.from('hris_saldo_cuti').select('*').eq('tahun',new Date().getFullYear()),supabase.from('karyawan').select('*').order('nama')]);if(!a.error)setRows(a.data||[]);if(!b.error)setBalances(b.data||[]);if(!c.error)setEmployees(c.data||[])};useEffect(()=>watchSupabaseAuth(load),[]);
 const save=async(e:FormEvent)=>{e.preventDefault();const {data,error}=await supabase.from('hris_cuti').insert({...f,jumlah_hari:Number(f.jumlah_hari)}).select('id').single();if(error){await appAlert(error.message);return}if(data){const a=await supabase.rpc('hris_submit_approval',{p_modul:'leave',p_record_id:String(data.id)});if(a.error){await supabase.from('hris_cuti').delete().eq('id',data.id);await appAlert(a.error.message);return}}setModal(false);load()};
 const update=async(id:string,status:string)=>{const {data:req,error:e1}=await supabase.from('hris_approval_requests').select('id').eq('modul','leave').eq('record_id',id).eq('status','Menunggu').maybeSingle();if(e1||!req){await appAlert(e1?.message||t('approval_workflow_not_found'));return}const {error}=await supabase.rpc('hris_decide_approval',{p_id:req.id,p_status:status,p_catatan:status==='Ditolak'?(await appPrompt(t('rejection_reason_prompt'),'')||null):null});if(error)await appAlert(error.message);else load()};
 const ensureBalance=async(k:string)=>{const found=balances.find(x=>x.id_karyawan===k);if(found)return found;const {data,error}=await supabase.from('hris_saldo_cuti').insert({id_karyawan:k,tahun:new Date().getFullYear(),jenis:'Tahunan',saldo:12,terpakai:0}).select().single();if(error) return null;return data};
 const items=[['inbox',t('approval_inbox'),'request'],['requests',t('new_request'),'＋'],['history',t('history'),'calendar'],['balance',t('leave_balance'),'balance']].map(([key,label,icon])=>({key,label,icon}));
 return <Branch title={t('leave')} desc={t('leave_desc')} items={items} tab={tab} setTab={setTab} action={tab==='requests'?'＋ Buat Pengajuan':undefined} onAction={()=>setModal(true)}>{tab==='balance'?<div className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>{t('employee')}</th><th>{t('type')}</th><th>{t('quota')}</th><th>{t('used')}</th><th>{t('remaining')}</th><th>{t('actions')}</th></tr></thead><tbody>{employees.map(k=>{const b=balances.find(x=>x.id_karyawan===k.id_karyawan);const quota=Number((b?.saldo??12))+Number(b?.terpakai??0);const used=Number(b?.terpakai??0);return <tr key={k.id}><td><b>{k.nama}</b><small>{k.id_karyawan}</small></td><td>Tahunan</td><td>{quota}</td><td>{used}</td><td><Status value={String(Math.max(0,quota-used))}/></td><td><button className="link-btn" onClick={()=>k.id_karyawan && ensureBalance(k.id_karyawan).then(load)}>{t('initialize')}</button></td></tr>})}</tbody></table></div></div>:<div className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>{t('employee')}</th><th>{t('type')}</th><th>{t('date')}</th><th>{t('reason')}</th><th>{t('status')}</th><th>{t('actions')}</th></tr></thead><tbody>{rows.length?rows.map(r=><tr key={r.id}><td>{r.id_karyawan}</td><td>{r.jenis}</td><td>{r.tanggal_mulai} s/d {r.tanggal_selesai}</td><td>{r.alasan||'-'}</td><td><Status value={r.status}/></td><td>{r.status==='Menunggu'&&<><button className="link-btn" onClick={()=>update(r.id,'Disetujui')}>{t('approve')}</button> <button className="danger-text" onClick={()=>update(r.id,'Ditolak')}>{t('reject')}</button></>}</td></tr>):<Empty cols={6}/>}</tbody></table></div></div>}{modal&&<SimpleModal title={t('leave_request')} onClose={()=>setModal(false)} onSave={save}><label>{t('employee')}<select required value={f.id_karyawan} onChange={e=>setF({...f,id_karyawan:e.target.value})}><option value="">{t('select_employee')}</option>{employees.map(k=><option key={k.id_karyawan} value={k.id_karyawan}>{k.nama} — {k.id_karyawan}</option>)}</select></label><label>{t('type')}<select value={f.jenis} onChange={e=>setF({...f,jenis:e.target.value})}><option>Tahunan</option><option>Sakit</option><option>Khusus</option></select></label><label>{t('start_date')}<input type="date" value={f.tanggal_mulai} onChange={e=>setF({...f,tanggal_mulai:e.target.value})}/></label><label>{t('end_date')}<input type="date" value={f.tanggal_selesai} onChange={e=>setF({...f,tanggal_selesai:e.target.value})}/></label><label>{t('days')}<input type="number" min="0.5" step="0.5" value={f.jumlah_hari} onChange={e=>setF({...f,jumlah_hari:e.target.value})}/></label><label>{t('reason')}<textarea value={f.alasan} onChange={e=>setF({...f,alasan:e.target.value})}/></label></SimpleModal>}</Branch>
}

function TalentModule({initial,employees}:{initial:MenuKey;employees:Karyawan[]}){const {t}=useTranslation();
 const [tab,setTab]=useState(initial==='kpi'?'kpi':initial==='recruitment'?'vacancies':initial==='candidates'?'candidates':'performance'),[rows,setRows]=useState<any[]>([]),[modal,setModal]=useState(false);
 const load=async()=>{if(!(await hasActiveSupabaseSession()))return; const table=tab==='kpi'?'hris_kpi':tab==='vacancies'?'hris_lowongan':tab==='candidates'?'hris_kandidat':tab==='interviews'?'hris_interview':'hris_performance';const {data,error}=await supabase.from(table).select('*').order('created_at',{ascending:false});if(!error)setRows(data||[]);else setRows([])};useEffect(()=>watchSupabaseAuth(load),[tab]);
 const items=[
  ['performance',t('performance'),'arrow'],
  ['kpi',t('kpi_target'),'kpi'],
  ['vacancies',t('vacancies'),'recruitment'],
  ['candidates',t('candidates'),'users'],
  ['interviews',t('interviews'),'calendar']
].map(([key,label,icon])=>({key,label,icon}));
 return <Branch title={t('talent')} desc={t('talent_desc')} items={items} tab={tab} setTab={setTab} action={`＋ ${t('add')}`} onAction={()=>setModal(true)}>{<TalentTable tab={tab} rows={rows}/>} {modal&&<TalentForm tab={tab} employees={employees} onClose={()=>setModal(false)} onSaved={()=>{setModal(false);load()}}/>}</Branch>

}
function TalentTable({tab,rows}:{tab:string;rows:any[]}){const { t } = useTranslation();let cols:string[]=[];if(tab==='kpi')cols=['id_karyawan','periode','indikator','target','realisasi','skor','status'];else if(tab==='vacancies')cols=['posisi','departemen','jumlah_kebutuhan','status','tanggal_buka','tanggal_tutup'];else if(tab==='candidates')cols=['nama','email','no_telp','posisi','tahap','status'];else if(tab==='interviews')cols=['kandidat','tanggal','jam','interviewer','hasil','status'];else cols=['id_karyawan','periode','nilai','catatan','status'];return <div className="panel table-panel"><div className="table-wrap"><table><thead><tr>{cols.map(c=><th key={c}>{fieldLabel(c,t)}</th>)}</tr></thead><tbody>{rows.length?rows.map(r=><tr key={r.id}>{cols.map(c=><td key={c}>{c==='status'?<Status value={String(r[c]??'-')}/>:String(r[c]??'-')}</td>)}</tr>):<Empty cols={cols.length}/>}</tbody></table></div></div>}
function TalentForm({tab,employees,onClose,onSaved}:{tab:string;employees:Karyawan[];onClose:()=>void;onSaved:()=>void}){const {t}=useTranslation();
 const [f,setF]=useState<any>(tab==='kpi'?{id_karyawan:'',periode:new Date().toISOString().slice(0,7),indikator:'',target:'',realisasi:'',bobot:'0',skor:'0',status:'Draft'}:tab==='vacancies'?{posisi:'',departemen:'',jumlah_kebutuhan:'1',status:'Open',tanggal_buka:isoToday(),tanggal_tutup:'',deskripsi:''}:tab==='candidates'?{nama:'',email:'',no_telp:'',posisi:'',sumber:'',tahap:'Screening',status:'Aktif',catatan:''}:tab==='interviews'?{kandidat:'',tanggal:isoToday(),jam:'09:00',interviewer:'',hasil:'',status:'Terjadwal'}:{id_karyawan:'',periode:new Date().toISOString().slice(0,7),nilai:'0',catatan:'',status:'Draft'});
 const table=tab==='kpi'?'hris_kpi':tab==='vacancies'?'hris_lowongan':tab==='candidates'?'hris_kandidat':tab==='interviews'?'hris_interview':'hris_performance';
 const save=async(e:FormEvent)=>{e.preventDefault();const numeric=['target','realisasi','bobot','skor','jumlah_kebutuhan','nilai'];const payload={...f};numeric.forEach(k=>{if(k in payload)payload[k]=Number(payload[k]||0)});const {error}=await supabase.from(table).insert(payload);if(error)await appAlert(error.message);else onSaved()};
 return <SimpleModal title={`${t('add')} ${tab==='kpi'?t('kpi'):tab==='vacancies'?t('vacancies'):tab==='candidates'?t('candidates'):tab==='interviews'?t('interviews'):t('performance')}`} onClose={onClose} onSave={save}>{Object.entries(f).map(([k,v])=><label key={k}>{fieldLabel(k,t)}{k==='id_karyawan'?<select required value={String(v)} onChange={e=>setF({...f,[k]:e.target.value})}><option value="">{t('select_employee')}</option>{employees.map(x=><option key={x.id_karyawan} value={x.id_karyawan}>{x.nama} — {x.id_karyawan}</option>)}</select>:<input required={['nama','posisi','indikator','kandidat'].includes(k)} type={['target','realisasi','bobot','skor','jumlah_kebutuhan','nilai'].includes(k)?'number':k==='tanggal'||k.includes('tanggal')?'date':k==='jam'?'time':'text'} value={String(v??'')} onChange={e=>setF({...f,[k]:e.target.value})}/>}</label>)}</SimpleModal>
}
function Reports({ employees, attendance, onExport }: { employees: Karyawan[]; attendance: Absensi[]; onExport: (r: any[], f: string) => void }) {
  const { t } = useTranslation();
  const [tab, setTab] = useState('overview');
  const [payroll, setPayroll] = useState<any[]>([]);

  useEffect(() => {
    if (tab !== 'payroll') return;
    return watchSupabaseAuth(async () => {
      const { data } = await supabase
        .from('hris_payroll')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(2000);
      setPayroll(data || []);
    });
  }, [tab]);

  const items = [
    ['overview', t('analytics'), 'report'],
    ['attendance', t('attendance_report'), 'clock'],
    ['payroll', t('payroll_report'), 'payroll'],
    ['people', t('employee_report'), 'users'],
  ].map(([key, label, icon]) => ({ key, label, icon }));

  return (
    <div className="reports-page-content">
      <Heading title={t('reports')} desc={t('reports_desc')} />
      <nav className="branch-nav reports-nav" aria-label={t('reports')}>
        {items.map(item => (
          <button key={item.key} className={tab === item.key ? 'active' : ''} onClick={() => setTab(item.key)}>
            <Icon name={item.icon} />{item.label}
          </button>
        ))}
      </nav>

      {tab === 'overview' ? (
        <div className="report-grid reports-card-grid">
          <ReportCard name={t('master_employees')} count={employees.length} icon="users" onClick={() => onExport(employees, 'laporan-karyawan.csv')} />
          <ReportCard name={t('attendance')} count={attendance.length} icon="clock" onClick={() => onExport(attendance, 'laporan-absensi.csv')} />
          <ReportCard name={t('payroll')} count={payroll.length} icon="payroll" onClick={() => onExport(payroll, 'laporan-payroll.csv')} />
        </div>
      ) : tab === 'attendance' ? (
        <div className="reports-single-card"><ReportCard name={t('attendance_report')} count={attendance.length} icon="clock" onClick={() => onExport(attendance, 'laporan-absensi.csv')} /></div>
      ) : tab === 'people' ? (
        <div className="reports-single-card"><ReportCard name={t('employee_report')} count={employees.length} icon="users" onClick={() => onExport(employees, 'laporan-karyawan.csv')} /></div>
      ) : (
        <div className="reports-single-card"><ReportCard name={t('payroll_report')} count={payroll.length} icon="payroll" onClick={() => onExport(payroll, 'laporan-payroll.csv')} /></div>
      )}
    </div>
  );
}

function ReportCard({ name, count, icon, onClick }: { name: string; count: number; icon: string; onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <article className="report-card">
      <div className="report-card-icon" aria-hidden="true"><Icon name={icon} /></div>
      <div className="report-card-copy">
        <span>{t('reports') || 'LAPORAN'}</span>
        <h3>{name}</h3>
        <strong>{count.toLocaleString()}</strong>
        <p>{t('data_available') || 'data tersedia'}</p>
      </div>
      <button className="primary report-card-action" onClick={onClick}>{t('export_csv') || 'Export CSV'}</button>
    </article>
  );
}

function ThemeControl({ userRole }: { userRole: string }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<import('../../../lib/userPreferences').PublicAppTheme>('professional');

  useEffect(() => {
    let active = true;
    const load = async () => {
      const next = await getPublicAppTheme();
      if (!active) return;
      setTheme(next);
      applyProjectTheme(next, false);
    };
    void load();
    const onTheme = (event: Event) => {
      const next = (event as CustomEvent<string>).detail;
      if (next === 'professional' || next in COSMIC_THEMES) setTheme(next as import('../../../lib/userPreferences').PublicAppTheme);
    };
    window.addEventListener('project-tirta-public-theme-change', onTheme);
    window.addEventListener('project-tirta-theme-change', onTheme);
    return () => {
      active = false;
      window.removeEventListener('project-tirta-public-theme-change', onTheme);
      window.removeEventListener('project-tirta-theme-change', onTheme);
    };
  }, []);

  const isSuperAdmin = userRole.trim().toLowerCase() === 'super admin';

  const chooseTheme = async (next: import('../../../lib/userPreferences').PublicAppTheme) => {
    if (!isSuperAdmin) return;
    setTheme(next);
    applyProjectTheme(next, true);

    const { data: session } = await supabase.auth.getSession();
    const userId = session.session?.user?.id;

    if (userId) {
      await saveUserThemePreference(userId, next);

      if (userRole.trim().toLowerCase() === 'super admin') {
        const employeeSync = await setEmployeePortalTheme(next);
        const publicSync = await setPublicAppTheme(next);
        if (!employeeSync || !publicSync) {
          console.warn('ThemeControl sync incomplete:', {
            employeeSync,
            publicSync,
            theme: next,
          });
        }
      }
    }

    setOpen(false);
  };

  const options = [
    { id:'professional' as const, name:'Professional' },
    ...(['sun','moon','galaxy','blackhole','nebula','aurora'] as CosmicThemeId[])
      .map(id => ({ id, name:COSMIC_THEMES[id].name })),
  ];

  return (
    <div className="theme-control">
      <button type="button" className="icon-btn theme-control-button" aria-label="Pilih tema" aria-expanded={open} title="Tema" onClick={() => setOpen(value => !value)} disabled={!isSuperAdmin}>◫</button>
      {open && (
        <div className="theme-control-menu" role="menu" aria-label="Pilih tema">
          {options.map(item => (
            <button
              key={item.id}
              type="button"
              className={`theme-control-option ${theme === item.id ? 'active' : ''}`}
              role="menuitemradio"
              aria-checked={theme === item.id}
              onClick={() => void chooseTheme(item.id)} disabled={!isSuperAdmin}
            >
              <span className={`theme-control-dot ${item.id === 'professional' ? 'theme-professional' : `cosmic-theme-${item.id}`}`} aria-hidden="true" />
              <span>{item.name}</span>
              {theme === item.id && <b>✓</b>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Settings({
  canManageThemes = false
}: {
  canManageThemes?: boolean
}){
  const { t } = useTranslation();
  const [f,setF]=useState<any>({
    company_name:'Project by Tirta',
    work_start:'07:00',
    work_end:'16:00',
    break_minutes:60,
    payday_day:'Jumat',
    currency:'IDR',
    timezone:'Asia/Jakarta',
    overtime_multiplier:2,
    late_tolerance_minutes:10,
    attendance_radius_meters:100,
    attendance_latitude:'',
    attendance_longitude:'',
    attendance_max_accuracy_meters:100,
    auto_approve_attendance:false,
    notify_late:true,
    notify_leave:true,
    maintenance_mode:false
  });

  const [tab,setTab]=useState('Perusahaan');
  const [msg,setMsg]=useState('');

  type ThemeDefinition = {
    id:string;
    name:string;
    description:string;
    primary:string;
    accent:string;
    background:string;
    surface:string;
    text:string;
    border:string;
    sidebar:string;
    sidebarText:string;
    sidebarMuted:string;
    sidebarActive:string;
    sidebarActiveText:string;
  };

  const DEFAULT_THEME: ThemeDefinition = {
    id:'professional', name:'Professional', description:'Energi hangat dan aksen emas futuristik.',
    primary:'#101a33', accent:'#c9a227', background:'#f6f7fb', surface:'#ffffff', text:'#172033', border:'#dfe5ee',
    sidebar:'#0b1736', sidebarText:'#ffffff', sidebarMuted:'#aeb7c5', sidebarActive:'#d6ae58', sidebarActiveText:'#0b1222'
  };

  const [customTheme,setCustomTheme]=useState({
    primary:DEFAULT_THEME.primary, accent:DEFAULT_THEME.accent, background:DEFAULT_THEME.background, surface:DEFAULT_THEME.surface, text:DEFAULT_THEME.text, border:DEFAULT_THEME.border,
    sidebar:DEFAULT_THEME.sidebar, sidebarText:DEFAULT_THEME.sidebarText, sidebarMuted:DEFAULT_THEME.sidebarMuted, sidebarActive:DEFAULT_THEME.sidebarActive, sidebarActiveText:DEFAULT_THEME.sidebarActiveText
  });
  const [activeThemeId,setActiveThemeId]=useState<string>(()=>getCosmicTheme());

  const themes:ThemeDefinition[]=[
    {id:'professional',name:'Professional',description:'Tampilan HR profesional tanpa latar cosmic.',primary:'#101a33',accent:'#c9a227',background:'#f6f7fb',surface:'#ffffff',text:'#172033',border:'#dfe5ee',sidebar:'#0b1736',sidebarText:'#ffffff',sidebarMuted:'#aeb7c5',sidebarActive:'#d6ae58',sidebarActiveText:'#0b1222'},
    {id:'sun',name:'Matahari',description:'Solar flare, gold energy, dan warm cosmic glow.',primary:'#0a111f',accent:'#f6c767',background:'#0a111f',surface:'#101a2c',text:'#f8fafc',border:'#f6c767',sidebar:'#050c18',sidebarText:'#ffffff',sidebarMuted:'#b7c2d2',sidebarActive:'#f6c767',sidebarActiveText:'#07111f'},
    {id:'moon',name:'Bulan',description:'Moonlight silver, midnight blue, dan calm glow.',primary:'#071222',accent:'#e4d1a0',background:'#071222',surface:'#101d31',text:'#f8fafc',border:'#e4d1a0',sidebar:'#040b17',sidebarText:'#ffffff',sidebarMuted:'#aab8cc',sidebarActive:'#e4d1a0',sidebarActiveText:'#07111f'},
    {id:'galaxy',name:'Galaksi',description:'Deep violet, nebula haze, dan electric blue.',primary:'#0d0820',accent:'#d7adff',background:'#0d0820',surface:'#17102e',text:'#f8fafc',border:'#d7adff',sidebar:'#070314',sidebarText:'#ffffff',sidebarMuted:'#c8bae0',sidebarActive:'#d7adff',sidebarActiveText:'#160b27'},
    {id:'blackhole',name:'Blackhole',description:'Singularity black, cyan ring, dan gravitational glow.',primary:'#06070a',accent:'#e8c36f',background:'#06070a',surface:'#10151b',text:'#f8fafc',border:'#e8c36f',sidebar:'#020305',sidebarText:'#ffffff',sidebarMuted:'#a8b6c0',sidebarActive:'#e8c36f',sidebarActiveText:'#07111f'},
    {id:'nebula',name:'Nebula',description:'Cosmic pink, blue haze, dan deep-space ambience.',primary:'#100614',accent:'#ffbfe8',background:'#100614',surface:'#1b0d22',text:'#f8fafc',border:'#ffbfe8',sidebar:'#07030c',sidebarText:'#ffffff',sidebarMuted:'#cbb7ca',sidebarActive:'#ffbfe8',sidebarActiveText:'#1a0d16'},
    {id:'aurora',name:'Aurora',description:'Aurora hijau-biru dengan ambient glow futuristik.',primary:'#07131b',accent:'#7cffb2',background:'#07131b',surface:'#0b2428',text:'#f3fffb',border:'#7cffb2',sidebar:'#061019',sidebarText:'#f3fffb',sidebarMuted:'#9fc1bb',sidebarActive:'#7cffb2',sidebarActiveText:'#062016'}
  ];

  const isHexColor=(value:string)=>/^#[0-9a-f]{6}$/i.test(value);
  const normalizeTheme=(theme:Partial<ThemeDefinition>|null|undefined):ThemeDefinition=>{
    const values={...DEFAULT_THEME,...(theme||{})};
    return {
      id: typeof values.id==='string' ? values.id : DEFAULT_THEME.id,
      name: typeof values.name==='string' ? values.name : DEFAULT_THEME.name,
      description: typeof values.description==='string' ? values.description : DEFAULT_THEME.description,
      primary:isHexColor(values.primary)?values.primary:DEFAULT_THEME.primary,
      accent:isHexColor(values.accent)?values.accent:DEFAULT_THEME.accent,
      background:isHexColor(values.background)?values.background:DEFAULT_THEME.background,
      surface:isHexColor(values.surface)?values.surface:DEFAULT_THEME.surface,
      text:isHexColor(values.text)?values.text:DEFAULT_THEME.text,
      border:isHexColor(values.border)?values.border:DEFAULT_THEME.border,
      sidebar:isHexColor(values.sidebar)?values.sidebar:DEFAULT_THEME.sidebar,
      sidebarText:isHexColor(values.sidebarText)?values.sidebarText:DEFAULT_THEME.sidebarText,
      sidebarMuted:isHexColor(values.sidebarMuted)?values.sidebarMuted:DEFAULT_THEME.sidebarMuted,
      sidebarActive:isHexColor(values.sidebarActive)?values.sidebarActive:DEFAULT_THEME.sidebarActive,
      sidebarActiveText:isHexColor(values.sidebarActiveText)?values.sidebarActiveText:DEFAULT_THEME.sidebarActiveText
    };
  };

  const hexToRgb=(hex:string)=>{
    const h=hex.replace('#','').trim();
    if(h.length!==6) return null;
    const n=parseInt(h,16);
    if(Number.isNaN(n)) return null;
    return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
  };

  const relativeLuminance=(hex:string)=>{
    const rgb=hexToRgb(hex);
    if(!rgb) return 1;
    const channel=(v:number)=>{
      const c=v/255;
      return c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4);
    };
    return 0.2126*channel(rgb.r)+0.7152*channel(rgb.g)+0.0722*channel(rgb.b);
  };

  const contrastRatio=(foreground:string,background:string)=>{
    const a=relativeLuminance(foreground);
    const b=relativeLuminance(background);
    const light=Math.max(a,b);
    const dark=Math.min(a,b);
    return (light+0.05)/(dark+0.05);
  };

  const getReadableText=(background:string,preferred:string)=>{
    const white='#ffffff';
    const black='#111827';
    if(contrastRatio(preferred,background)>=4.5) return preferred;
    return contrastRatio(black,background)>=contrastRatio(white,background)
      ? black
      : white;
  };

  useEffect(() => {
    const handleTheme = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (id === 'professional' || id in COSMIC_THEMES) setActiveThemeId(id);
    };
    window.addEventListener('project-tirta-theme-change', handleTheme);
    window.addEventListener('project-tirta-public-theme-change', handleTheme);
    void getPublicAppTheme().then(next => {
      setActiveThemeId(next);
      applyProjectTheme(next, false);
    });
    return () => {
      window.removeEventListener('project-tirta-theme-change', handleTheme);
      window.removeEventListener('project-tirta-public-theme-change', handleTheme);
    };
  }, []);

  const applyTheme=async(input:Partial<ThemeDefinition>,persist=true)=>{
    const theme=normalizeTheme(input);
    const isProfessional = theme.id === 'professional';
    const isCosmic = theme.id in COSMIC_THEMES;
    const root=document.documentElement;

    if (isProfessional) {
      applyProjectTheme('professional', true);
      setActiveThemeId('professional');
    } else if (isCosmic) {
      applyProjectTheme(theme.id as CosmicThemeId, true);
      setActiveThemeId(theme.id);
    }

    const pageText = getReadableText(theme.background, '#172033');
    const vars:Record<string,string>={
      '--mx-primary':'#0b1222',
      '--mx-primary-contrast':'#f8fafc',
      '--mx-accent':theme.accent,
      '--mx-background':theme.background,
      '--mx-surface':isProfessional ? '#ffffff' : '#101827',
      '--mx-surface-alt':isProfessional ? '#eef2f7' : '#172033',
      '--mx-text':isProfessional ? '#172033' : '#e2e5ea',
      '--mx-text-secondary':isProfessional ? '#475467' : '#c7ccd5',
      '--mx-text-muted':isProfessional ? '#667085' : '#9ba6b6',
      '--mx-page-text':pageText,
      '--mx-control-bg':isProfessional ? '#ffffff' : '#111b33',
      '--mx-control-text':isProfessional ? '#172033' : '#eef1f5',
      '--mx-control-border':isProfessional ? '#dfe5ee' : theme.border,
      '--mx-sidebar':isProfessional ? '#0b1736' : '#070f20',
      '--mx-sidebar-text':'#eef1f5',
      '--mx-sidebar-muted':'#aeb7c5',
      '--mx-sidebar-active':'#d6ae58',
      '--mx-sidebar-active-text':'#0b1222',
      '--mx-border':theme.border,
      '--mx-border-strong':theme.border,
      '--mx-focus':theme.accent,
      '--mx-blue':'#0b1222',
      '--mx-blue-soft':'rgba(214,174,88,.10)',
      '--mx-success':'#44c58a',
      '--mx-warning':'#e0ad57',
      '--mx-danger':'#ff7d7d',
      '--mx-info':'#78a9ff',
      '--blue':'#0b1222',
      '--blue2':'#172033',
      '--blue-soft':'rgba(214,174,88,.10)',
      '--ink':isProfessional ? '#172033' : '#e2e5ea',
      '--line':theme.border,
      '--surface':isProfessional ? '#ffffff' : '#101827',
      '--bg':theme.background,
      '--app-primary':'#0b1222',
      '--app-primary-contrast':'#f8fafc',
      '--app-accent':theme.accent,
      '--app-bg':theme.background,
      '--app-surface':isProfessional ? '#ffffff' : '#101827',
      '--app-surface-alt':isProfessional ? '#eef2f7' : '#172033',
      '--app-text':isProfessional ? '#172033' : '#e2e5ea',
      '--app-muted':isProfessional ? '#667085' : '#9ba6b6',
      '--app-border':theme.border
    };

    Object.entries(vars).forEach(([key,value])=>root.style.setProperty(key,value));

    setCustomTheme({
      primary:theme.primary,
      accent:theme.accent,
      background:theme.background,
      surface:theme.surface,
      text:theme.text,
      border:theme.border,
      sidebar:theme.sidebar,
      sidebarText:theme.sidebarText,
      sidebarMuted:theme.sidebarMuted,
      sidebarActive:theme.sidebarActive,
      sidebarActiveText:theme.sidebarActiveText
    });
    setActiveThemeId(theme.id);

    if(persist){
      const { data: session } = await supabase.auth.getSession();
      const userId = session.session?.user?.id;
      if (userId && (isProfessional || isCosmic)) {
        await saveUserThemePreference(userId, theme.id as import('../../../lib/userPreferences').PublicAppTheme);

        if (canManageThemes) {
          const employeeSync = await setEmployeePortalTheme(theme.id as import('../../../lib/userPreferences').PublicAppTheme);
          const publicSync = await setPublicAppTheme(theme.id as import('../../../lib/userPreferences').PublicAppTheme);
          if (!employeeSync || !publicSync) {
            console.warn('Theme sync incomplete:', { employeeSync, publicSync, theme: theme.id });
          }
        }
      } else if (userId) {
        saveCustomThemeCache(userId, theme);
      }
      setMsg(`Tema "${theme.name || 'Tema Kustom'}" berhasil diterapkan.`);
    }
  };
  const updateCustomColor=(key:keyof typeof customTheme,value:string)=>{
    if(!isHexColor(value)) return;
    setCustomTheme(prev=>({...prev,[key]:value}));
    void applyTheme({id:'custom',name:'Tema Kustom',description:'Tema kustom Project by Tirta',...customTheme,[key]:value},false);
    setActiveThemeId('custom');
  };

  useEffect(()=>{
    supabase.from('hris_company_settings').select('*').eq('id',1).maybeSingle().then(({data})=>{if(data)setF(data);});
    const loadTheme = async () => {
      const next = await getPublicAppTheme();
      applyProjectTheme(next, false);
      setActiveThemeId(next);
    };
    void loadTheme();
  },[canManageThemes]);
  const save=async()=>{
    const normalizeCoordinate = (value: unknown) =>
      String(value ?? '')
        .normalize('NFKC')
        .replace(/[−–—]/g, '-')
        .replace(/[，٫]/g, '.')
        .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u2069\uFEFF]/g, '')
        .trim();

    const parseCoordinate = (
      value: unknown,
      label: 'Latitude' | 'Longitude',
      min: number,
      max: number,
    ) => {
      const raw = normalizeCoordinate(value);

      // Empty/incomplete values while typing are handled without resetting.
      if (raw === '' || raw === '-' || raw === '.' || raw === '-.') {
        return { value: null as number | null, incomplete: true };
      }

      // Only a normal decimal coordinate is accepted.
      if (!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw)) {
        return {
          error: `${label} tidak valid: "${raw}". Gunakan angka desimal.`,
        };
      }

      const numeric = Number(raw);

      if (!Number.isFinite(numeric) || numeric < min || numeric > max) {
        return {
          error: `${label} tidak valid: "${raw}". Gunakan angka antara ${min} dan ${max}.`,
        };
      }

      return { value: numeric, incomplete: false };
    };

    const latitudeResult = parseCoordinate(
      f.attendance_latitude,
      'Latitude',
      -90,
      90,
    );

    if (latitudeResult.error) {
      setMsg(latitudeResult.error);
      return;
    }

    const longitudeResult = parseCoordinate(
      f.attendance_longitude,
      'Longitude',
      -180,
      180,
    );

    if (longitudeResult.error) {
      setMsg(longitudeResult.error);
      return;
    }

    const latitude = latitudeResult.value;
    const longitude = longitudeResult.value;

    const payload = {
      ...f,
      id: 1,
      attendance_latitude: latitude,
      attendance_longitude: longitude,
    };

    const {error}=await supabase
      .from('hris_company_settings')
      .upsert(payload);

    setMsg(error ? error.message : 'Pengaturan berhasil disimpan.');
  };

  const saveCustomTheme=()=>{
    void applyTheme({id:'custom',name:'Tema Kustom',description:'Tema kustom Project by Tirta',...customTheme},true);
    setMsg('Tema kustom berhasil disimpan dan diterapkan.');
  };

  const groups:any={
    'Perusahaan':[
      'company_name',
      'currency',
      'timezone'
    ],
    'Jam Kerja':[
      'work_start',
      'work_end',
      'break_minutes',
      'late_tolerance_minutes'
    ],
    'Payroll':[
      'payday_day',
      'overtime_multiplier'
    ],
    'Absensi':[
      'attendance_radius_meters',
      'attendance_latitude',
      'attendance_longitude',
      'attendance_max_accuracy_meters',
      'auto_approve_attendance'
    ],
    'Notifikasi':[
      'notify_late',
      'notify_leave'
    ],
    'Keamanan':[
      'maintenance_mode'
    ]
  };

  const labels:any={
    company_name:'Nama Perusahaan',
    currency:'Mata Uang',
    timezone:'Zona Waktu',
    work_start:'Jam Masuk',
    work_end:'Jam Pulang',
    break_minutes:'Istirahat (menit)',
    late_tolerance_minutes:'Toleransi Terlambat (menit)',
    payday_day:'Hari Gajian',
    overtime_multiplier:'Pengali Lembur',
    attendance_radius_meters:'Radius Absensi (meter)',
    attendance_latitude:'Latitude Lokasi Absensi',
    attendance_longitude:'Longitude Lokasi Absensi',
    attendance_max_accuracy_meters:'Maksimal Akurasi GPS (meter)',
    auto_approve_attendance:'Auto Approve Absensi',
    notify_late:'Notifikasi Keterlambatan',
    notify_leave:'Notifikasi Cuti',
    maintenance_mode:'Mode Maintenance'
  };

  return (
    <>
      <Heading
        title="Pengaturan"
        desc="Kelola konfigurasi perusahaan, operasional, payroll, absensi, keamanan, dan tampilan sistem."
        action="Simpan Perubahan"
        onAction={save}
      />

      {msg&&(
        <div className="theme-message">
          {msg}
        </div>
      )}

      <div className="settings-tabs">
        {Object.keys(groups).map(x=>(
          <button
            key={x}
            type="button"
            className={tab===x?'active':''}
            onClick={()=>setTab(x)}
          >
            {x}
          </button>
        ))}

        {canManageThemes && (
          <button
            type="button"
            className={tab==='Tampilan & Tema'?'active':''}
            onClick={()=>setTab('Tampilan & Tema')}
          >
            🎨 Tampilan & Tema
          </button>
        )}
      </div>

      {tab==='Tampilan & Tema' && canManageThemes ? (
        <div className="theme-manager">

          <div className="theme-manager-header">
            <div>
              <h2>{t('appearance_theme')}</h2>
              <p>
                Pilih tampilan visual yang digunakan oleh HRIS Project by Tirta.
              </p>
            </div>
          </div>

          <div className="theme-grid">
            {themes.map(theme=>(
              <button
                type="button"
                key={theme.id}
                className={`theme-card ${activeThemeId===theme.id?'active':''}`}
                aria-pressed={activeThemeId===theme.id}
                onClick={()=>void applyTheme(theme,true)}
              >
                <div
                  className="theme-preview"
                  style={{
                    background:theme.background
                  }}
                >
                  <div
                    className="theme-preview-sidebar"
                    style={{
                      background:'#070f20'
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="theme-preview-content">

                    <div
                      className="theme-preview-top"
                      style={{
                        borderColor:'#d6ae58'
                      }}
                    ></div>

                    <div className="theme-preview-cards">
                      <i
                        style={{
                          background:'#d6ae58'
                        }}
                      ></i>

                      <i
                        style={{
                          background:'#070f20'
                        }}
                      ></i>

                      <i
                        style={{
                          background:'#d6ae58'
                        }}
                      ></i>
                    </div>

                    <div
                      className="theme-preview-line"
                      style={{
                        background:'#d6ae58'
                      }}
                    ></div>

                  </div>
                </div>

                <div className="theme-card-body">
                  <div>
                    <strong>
                      {theme.name}
                    </strong>

                    <small>
                      {theme.description}
                    </small>
                  </div>

                  {activeThemeId===theme.id && (
                    <span className="theme-active-badge">✓ Aktif</span>
                  )}

                  <span
                    className="theme-color-dot"
                    style={{
                      background:'#d6ae58'
                    }}
                  ></span>
                </div>
              </button>
            ))}
          </div>

          <div className="custom-theme-panel">

            <div>
              <h3>{t('custom_theme')}</h3>
              <p>{t('theme_background_only_desc')}</p>
            </div>

            <div className="custom-theme-controls">
              <label>
                {t('theme_background')}
                <input
                  type="color"
                  value={customTheme.background}
                  onChange={e=>updateCustomColor('background', e.target.value)}
                />
              </label>
              <div className="theme-frame-note">{t('theme_frame_fixed_note')}</div>
            </div>

            <div className="custom-theme-actions">
              <button
                type="button"
                className="primary theme-save-button"
                onClick={saveCustomTheme}
              >
                Simpan Tema Kustom
              </button>
            </div>

          </div>

        </div>
      ) : (

        <div className="panel form-panel settings-content">

          <div className="form-grid">

            {groups[tab].map((k:string)=>{

              const v=f[k];

              const bool=[
                'auto_approve_attendance',
                'notify_late',
                'notify_leave',
                'maintenance_mode'
              ].includes(k);

              return (
                <label key={k}>

                  {labels[k]}

                  {bool ? (

                    <input
                      type="checkbox"
                      checked={!!v}
                      onChange={e=>
                        setF({
                          ...f,
                          [k]:e.target.checked
                        })
                      }
                    />

                  ) : (

                    <input
                      type={
                        ['attendance_latitude', 'attendance_longitude'].includes(k)
                          ? 'text'
                          : [
                              'break_minutes',
                              'late_tolerance_minutes',
                              'attendance_radius_meters',
                              'attendance_max_accuracy_meters'
                            ].includes(k)
                              ? 'number'
                              : k.includes('start')||k.includes('end')
                                ? 'time'
                                : 'text'
                      }
                      inputMode={
                        ['attendance_latitude', 'attendance_longitude'].includes(k)
                          ? 'decimal'
                          : undefined
                      }
                      placeholder={
                        k === 'attendance_latitude'
                          ? '-6.200000'
                          : k === 'attendance_longitude'
                            ? '106.816666'
                            : undefined
                      }
                      value={String(v??'')}
                      onChange={e=>{
                        setF({
                          ...f,
                          [k]: e.target.value
                        });
                        if (['attendance_latitude','attendance_longitude'].includes(k)) {
                          setMsg('');
                        }
                      }}
                    />

                  )}

                </label>
              );
            })}

          </div>

        </div>
      )}

    </>
  );
}
function Audit() {
  const { t } = useTranslation();
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('ALL');
  const [moduleFilter, setModuleFilter] = useState('ALL');
  const [selected, setSelected] = useState<any | null>(null);
  useEffect(() => {
    let mounted = true;

    const loadAudit = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('hris_audit_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(500);

      if (mounted) {
        setRows(error ? [] : data || []);
        setLoading(false);
      }
    };

    loadAudit();

    return () => {
      mounted = false;
    };
  }, []);

  const normalize = (value: any) => {
    if (value === null || value === undefined) return '-';

    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }

    return String(value);
  };

  const getChangedFields = (row: any) => {
    const oldValue =
      row?.old ??
      row?.old_data ??
      row?.old_values ??
      row?.metadata?.old ??
      {};

    const newValue =
      row?.new ??
      row?.new_data ??
      row?.new_values ??
      row?.metadata?.new ??
      {};

    const oldObj =
      oldValue && typeof oldValue === 'object' ? oldValue : {};

    const newObj =
      newValue && typeof newValue === 'object' ? newValue : {};

    const keys = Array.from(
      new Set([...Object.keys(oldObj), ...Object.keys(newObj)])
    );

    return keys
      .filter(
        (key) =>
          JSON.stringify(oldObj[key]) !== JSON.stringify(newObj[key])
      )
      .map((key) => ({
        field: key,
        oldValue: oldObj[key],
        newValue: newObj[key],
      }));
  };

  const formatDate = (value: any) => {
    if (!value) return '-';

    try {
      return new Date(value).toLocaleString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return String(value);
    }
  };

  const actionLabel = (action: any) => {
    const value = String(action || '-').toUpperCase();

    if (value === 'INSERT' || value === 'CREATE') return 'CREATE';
    if (value === 'UPDATE') return 'UPDATE';
    if (value === 'DELETE') return 'DELETE';

    return value;
  };

  const actionClass = (action: any) => {
    const value = actionLabel(action);

    if (value === 'CREATE') return 'audit-badge audit-create';
    if (value === 'UPDATE') return 'audit-badge audit-update';
    if (value === 'DELETE') return 'audit-badge audit-delete';

    return 'audit-badge';
  };

  const filteredRows = rows.filter((row) => {
    const action = actionLabel(row.action);
    const module = String(row.module || '-');

    const keyword = search.trim().toLowerCase();

    const searchable = [
      row.actor_email,
      row.actor_name,
      row.action,
      row.module,
      row.description,
      row.entity_id,
      row.entity_type,
      JSON.stringify(row.details || {}),
      JSON.stringify(row.old || {}),
      JSON.stringify(row.new || {}),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    const matchesSearch =
      !keyword || searchable.includes(keyword);

    const matchesAction =
      actionFilter === 'ALL' || action === actionFilter;

    const matchesModule =
      moduleFilter === 'ALL' || module === moduleFilter;

    return matchesSearch && matchesAction && matchesModule;
  });

  const modules = Array.from(
    new Set(
      rows
        .map((row) => String(row.module || '-'))
        .filter(Boolean)
    )
  );

  return (
    <>
      <Heading
        title="Log Audit"
        desc="Riwayat aktivitas dan perubahan data yang tercatat di database."
      />

      <div className="audit-filter-bar">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'minmax(220px, 1fr) 180px 180px auto',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari actor, action, module, ID..."
            style={{
              width: '100%',
              padding: '11px 13px',
              borderRadius: 10,
              border: '1px solid #d9dee8',
              outline: 'none',
            }}
          />

          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            style={{
              padding: '11px 13px',
              borderRadius: 10,
              border: '1px solid #d9dee8',
              background: '#fff',
            }}
          >
            <option value="ALL">Semua Aksi</option>
            <option value="CREATE">CREATE</option>
            <option value="UPDATE">UPDATE</option>
            <option value="DELETE">DELETE</option>
          </select>

          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            style={{
              padding: '11px 13px',
              borderRadius: 10,
              border: '1px solid #d9dee8',
              background: '#fff',
            }}
          >
            <option value="ALL">Semua Module</option>
            {modules.map((module) => (
              <option key={module} value={module}>
                {module}
              </option>
            ))}
          </select>

          <div
            style={{
              fontSize: 13,
              color: '#667085',
              whiteSpace: 'nowrap',
            }}
          >
            {filteredRows.length} aktivitas
          </div>
        </div>
      </div>

      <div className="panel table-panel">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t('time')}</th>
                <th>{t('actor')}</th>
                <th>{t('actions')}</th>
                <th>{t('module')}</th>
                <th>{t('entity')}</th>
                <th>{t('change')}</th>
                <th style={{ textAlign: 'center' }}>Detail</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={7}
                    style={{
                      textAlign: 'center',
                      padding: 30,
                    }}
                  >
                    Memuat Log Audit...
                  </td>
                </tr>
              ) : filteredRows.length ? (
                filteredRows.map((row) => {
                  const changes = getChangedFields(row);

                  return (
                    <tr key={row.id}>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        {formatDate(row.created_at)}
                      </td>

                      <td>
                        <div
                          style={{
                            fontWeight: 600,
                            color: '#101828',
                          }}
                        >
                          {row.actor_email ||
                            row.actor_name ||
                            '-'}
                        </div>
                      </td>

                      <td>
                        <span className={actionClass(row.action)}>
                          {actionLabel(row.action)}
                        </span>
                      </td>

                      <td>
                        {row.module || '-'}
                      </td>

                      <td>
                        <div>
                          <strong>
                            {row.entity_type || '-'}
                          </strong>
                        </div>

                        {row.entity_id && (
                          <small
                            style={{
                              color: '#667085',
                              wordBreak: 'break-all',
                            }}
                          >
                            {row.entity_id}
                          </small>
                        )}
                      </td>

                      <td>
                        {changes.length ? (
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 4,
                            }}
                          >
                            {changes
                              .slice(0, 3)
                              .map((change) => (
                                <div
                                  key={change.field}
                                  style={{
                                    fontSize: 12,
                                  }}
                                >
                                  <strong>
                                    {change.field}
                                  </strong>
                                  :{' '}
                                  <span
                                    style={{
                                      color: '#b42318',
                                    }}
                                  >
                                    {normalize(
                                      change.oldValue
                                    )}
                                  </span>
                                  {' → '}
                                  <span
                                    style={{
                                      color: '#027a48',
                                    }}
                                  >
                                    {normalize(
                                      change.newValue
                                    )}
                                  </span>
                                </div>
                              ))}

                            {changes.length > 3 && (
                              <small
                                style={{
                                  color: '#667085',
                                }}
                              >
                                +{changes.length - 3} perubahan
                                lainnya
                              </small>
                            )}
                          </div>
                        ) : (
                          <span
                            style={{
                              color: '#98a2b3',
                            }}
                          >
                            Tidak ada perubahan field
                          </span>
                        )}
                      </td>

                      <td style={{ textAlign: 'center' }}>
                        <button
                          type="button"
                          onClick={() => setSelected(row)}
                          style={{
                            border: '1px solid #d0d5dd',
                            background: '#fff',
                            borderRadius: 8,
                            padding: '7px 11px',
                            cursor: 'pointer',
                            fontWeight: 600,
                          }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <Empty cols={7} />
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            zIndex: 9999,
          }}
        >
          <div className="audit-detail-modal" onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(1000px, 100%)',
              maxHeight: '85vh',
              overflow: 'auto',
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 20px 60px rgba(0,0,0,.2)',
              padding: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 20,
                  }}
                >
                  {t('audit_detail')}
                </h2>

                <div
                  style={{
                    marginTop: 5,
                    color: '#667085',
                    fontSize: 13,
                  }}
                >
                  {formatDate(selected.created_at)}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{
                  border: 'none',
                  background: '#f2f4f7',
                  borderRadius: 8,
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                {t('close')}
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(4, minmax(0, 1fr))',
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div>
                <small>{t('actor')}</small>
                <div style={{ fontWeight: 600 }}>
                  {selected.actor_email ||
                    selected.actor_name ||
                    '-'}
                </div>
              </div>

              <div>
                <small>{t('action')}</small>
                <div style={{ marginTop: 5 }}>
                  <span
                    className={actionClass(selected.action)}
                  >
                    {actionLabel(selected.action)}
                  </span>
                </div>
              </div>

              <div>
                <small>{t('module')}</small>
                <div style={{ fontWeight: 600 }}>
                  {selected.module || '-'}
                </div>
              </div>

              <div>
                <small>{t('entity')}</small>
                <div style={{ fontWeight: 600 }}>
                  {selected.entity_type || '-'}
                </div>
              </div>
            </div>

            <h3
              style={{
                margin: '0 0 12px',
                fontSize: 16,
              }}
            >
              {t('data_changes')}
            </h3>

            <div
              style={{
                border: '1px solid #eaecf0',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <table>
                <thead>
                  <tr>
                    <th>{t('field')}</th>
                    <th>{t('old_value')}</th>
                    <th>{t('new_value')}</th>
                  </tr>
                </thead>

                <tbody>
                  {getChangedFields(selected).length ? (
                    getChangedFields(selected).map(
                      (change) => (
                        <tr key={change.field}>
                          <td>
                            <strong>
                              {change.field}
                            </strong>
                          </td>

                          <td>
                            <span
                              style={{
                                color: '#b42318',
                                wordBreak: 'break-word',
                              }}
                            >
                              {normalize(
                                change.oldValue
                              )}
                            </span>
                          </td>

                          <td>
                            <span
                              style={{
                                color: '#027a48',
                                wordBreak: 'break-word',
                              }}
                            >
                              {normalize(
                                change.newValue
                              )}
                            </span>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td
                        colSpan={3}
                        style={{
                          textAlign: 'center',
                          padding: 20,
                        }}
                      >
                        Tidak ada perubahan field.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {selected.details && (
              <details style={{ marginTop: 20 }}>
                <summary
                  style={{
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Raw Details
                </summary>

                <pre
                  style={{
                    marginTop: 10,
                    background: '#101828',
                    color: '#f8fafc',
                    padding: 15,
                    borderRadius: 10,
                    overflow: 'auto',
                    fontSize: 12,
                  }}
                >
                  {JSON.stringify(
                    selected.details,
                    null,
                    2
                  )}
                </pre>
              </details>
            )}
          </div>
        </div>
      )}
    </>
  );
}
function Notifications(){const { t } = useTranslation(); const [rows,setRows]=useState<any[]>([]),[loading,setLoading]=useState(true),[email,setEmail]=useState('');const load=async()=>{setLoading(true);if(!(await hasActiveSupabaseSession())){setRows([]);setLoading(false);return;}const {data:userData}=await supabase.auth.getUser();const currentEmail=userData.user?.email||'';setEmail(currentEmail);if(!currentEmail){setRows([]);setLoading(false);return;}const {data}=await supabase.from('hris_notifications').select('*').eq('recipient_email',currentEmail).order('created_at',{ascending:false}).limit(100);setRows(data||[]);setLoading(false)};useEffect(()=>watchSupabaseAuth(load),[]);const mark=async(id:string)=>{if(!email)return;await supabase.from('hris_notifications').update({is_read:true}).eq('id',id).eq('recipient_email',email);load()};return <><Heading title={t('notifications')} desc={t('notifications_center_desc')} /><div className="panel table-panel"><div className="panel-head"><div><h2>{t('hr_inbox')}</h2><p>{rows.filter(r=>!r.is_read).length} {t('unread')}</p></div><button className="secondary" onClick={load}>{t('reload')}</button></div><div className="notification-list">{loading?<div className="loading">{t('loading')}</div>:rows.length?rows.map(r=><button key={r.id} className={`notification-item ${r.is_read?'read':''}`} onClick={()=>mark(r.id)}><span className="notification-dot"/><span><b>{r.title}</b><small>{r.message}</small><em>{r.created_at?.replace('T',' ').slice(0,19)}</em></span></button>):<div className="empty-module"><h3>{t('no_notifications')}</h3><p>{t('notifications_appear_here')}</p></div>}</div></div></>}
function SystemHealth(){const { t } = useTranslation(); const [h,setH]=useState<any>(null),[err,setErr]=useState('');const load=async()=>{if(!(await hasActiveSupabaseSession()))return;const {data,error}=await supabase.from('hris_system_health').select('*').maybeSingle();if(error)setErr(error.message);else setH(data)};useEffect(()=>watchSupabaseAuth(load),[]);const cards=[['active_employees',t('active_employees')],['pending_leave',t('pending_leave')],['pending_overtime',t('pending_overtime')],['pending_payroll',t('pending_payroll')],['pending_approvals',t('pending_approvals')],['unread_notifications',t('unread_notifications')]];return <><Heading title={t('system_health')} desc={t('system_health_desc')} action={t('reload')} onAction={load}/>{err&&<div className="alert">{err}</div>}<div className="mini-kpi-row">{cards.map(([k,l])=><div className="stat-card" key={k}><span>{l}</span><strong>{h?.[k]??'—'}</strong></div>)}</div><div className="panel"><h3>{t('service_status')}</h3><p>{t('database')}: <b>{h?t('operational'):t('checking')}</b></p><p>{t('last_checked')}: {h?.checked_at?.replace('T',' ').slice(0,19)||'—'}</p></div></>}

function SimpleModal({title,onClose,onSave,children}:{title:string;onClose:()=>void;onSave:(e:FormEvent)=>void;children:ReactNode}){return <div className="drawer-backdrop"><aside className="edit-drawer"><div className="drawer-head"><h2>{title}</h2><button className="icon-btn" onClick={onClose}>×</button></div><form className="drawer-body" onSubmit={onSave}>{children}<div className="drawer-foot"><button type="button" className="secondary" onClick={onClose}>Batal</button><button className="primary">Simpan</button></div></form></aside></div>}
function Status({value}:{value:string}){const v=value.toLowerCase();const cls=v.includes('non')||v.includes('tolak')||v.includes('sakit')?'red':v.includes('terlambat')||v.includes('draft')||v.includes('menunggu')?'orange':v.includes('izin')?'blue':'green';return <span className={`status ${cls}`}>{value}</span>}
function Empty({cols}:{cols:number}){return <tr><td colSpan={cols} className="empty-cell">Belum ada data.</td></tr>}
const FIELD_LABEL_KEYS: Record<string, string> = {
  id_karyawan: 'employee_id', nama: 'name', jabatan: 'position', email: 'email', no_telp: 'phone', departemen: 'department', tanggal_masuk: 'join_date', gaji_pokok: 'basic_salary', periode: 'period', indikator: 'indicator', target: 'target', realisasi: 'actual', bobot: 'weight', skor: 'score', jumlah_kebutuhan: 'requirement_count', tanggal_buka: 'open_date', tanggal_tutup: 'close_date', deskripsi: 'description', posisi: 'position', sumber: 'source', tahap: 'stage', catatan: 'notes', nilai: 'value', kandidat: 'candidate', jam: 'time', interviewer: 'interviewer', hasil: 'result', company_name: 'company_name', work_start: 'work_start', work_end: 'work_end', break_minutes: 'break_minutes', payday_day: 'payday_day', currency: 'currency', timezone: 'timezone'
};

const FIELD_LABEL_FALLBACKS: Record<string, string> = {
  id_karyawan: 'ID Karyawan', nama: 'Nama Lengkap', jabatan: 'Jabatan', email: 'Email', no_telp: 'No. Telepon', departemen: 'Departemen', tanggal_masuk: 'Tanggal Masuk', gaji_pokok: 'Gaji Pokok', periode: 'Periode', indikator: 'Indikator', target: 'Target', realisasi: 'Realisasi', bobot: 'Bobot', skor: 'Skor', jumlah_kebutuhan: 'Jumlah Kebutuhan', tanggal_buka: 'Tanggal Buka', tanggal_tutup: 'Tanggal Tutup', deskripsi: 'Deskripsi', posisi: 'Posisi', sumber: 'Sumber', tahap: 'Tahap', catatan: 'Keterangan', nilai: 'Nilai', kandidat: 'Kandidat', jam: 'Jam', interviewer: 'Pewawancara', hasil: 'Hasil', company_name: 'Nama Perusahaan', work_start: 'Jam Masuk', work_end: 'Jam Pulang', break_minutes: 'Istirahat (menit)', payday_day: 'Hari Gajian', currency: 'Mata Uang', timezone: 'Zona Waktu'
};

function fieldLabel(k: string, t?: (key: string) => string) {
  const translationKey = FIELD_LABEL_KEYS[k];
  if (t && translationKey) {
    const translated = t(translationKey);
    if (translated !== translationKey) return translated;
  }
  return FIELD_LABEL_FALLBACKS[k] || k;
}
