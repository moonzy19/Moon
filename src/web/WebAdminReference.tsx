import "../styles/web-reference.css";
import { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '../lib/supabase/client';
import moonLogo from '../assets/moon-logo.png';
import { SUPPORTED_LANGUAGES, useTranslation } from '../locales/LanguageContext';
import { wt } from './webI18n';
import WebAdminFeatures from './WebAdminFeatures';

type ThemeId =
  | 'matahari'
  | 'bulan'
  | 'galaksi'
  | 'blackhole'
  | 'nebula';

type Theme = {
  label: string;
  lang: string;
  image: string;
  accent: string;
  accent2: string;
};

const THEMES: Record<ThemeId, Theme> = {
  matahari: {
    label: 'Matahari',
    lang: 'Indonesia',
    image: '/cosmic-web/sun.webp',
    accent: '#ffc94f',
    accent2: '#ff8d32',
  },
  bulan: {
    label: 'Bulan',
    lang: 'Inggris',
    image: '/cosmic-web/moon.webp',
    accent: '#8ecbff',
    accent2: '#5e8fff',
  },
  galaksi: {
    label: 'Galaksi',
    lang: 'Arab',
    image: '/cosmic-web/galaxy.webp',
    accent: '#d395ff',
    accent2: '#6d8cff',
  },
  blackhole: {
    label: 'Blackhole',
    lang: 'China',
    image: '/cosmic-web/blackhole.webp',
    accent: '#d9ba68',
    accent2: '#57d8ff',
  },
  nebula: {
    label: 'Nebula',
    lang: 'Jepang',
    image: '/cosmic-web/nebula.webp',
    accent: '#ffb7e8',
    accent2: '#6fd6ff',
  },
};

type WebMenuItem = readonly [string, string, string];
type WebMenuGroup = { title: string; items: WebMenuItem[] };

const menuGroups: WebMenuGroup[] = [
  { title: 'group_main', items: [['dashboard','⌂','dashboard']] },
  { title: 'group_people', items: [
    ['karyawan','♙','employee'],['registrasi','＋','registration'],['approval','✓','approval'],
    ['enterprise-v26','▤','documents_compliance'],['enterprise-v30','♙','ess_enterprise'],['enterprise-v33','⌂','multi_company']
  ] },
  { title: 'group_hr', items: [
    ['ai-center','✦','ai'],['professional-suite','◆','professional'],['hr-transaction-center','◫','transactions'],
    ['enterprise-v20','▦','hr_control_center'],['enterprise-v32','⚙','production_optimization']
  ] },
  { title: 'group_payroll', items: [
    ['payroll-engine','▣','payroll_engine'],['payroll-control','◈','payroll_control'],['payroll-indonesia','◎','payroll_indonesia_compliance']
  ] },
  { title: 'group_comm', items: [
    ['pengumuman','◈','announcements'],['feedback','◌','feedback'],['notifications','●','notifications'],['enterprise-v29','●','hr_inbox']
  ] },
  { title: 'group_reports', items: [
    ['laporan','▤','reports'],['enterprise-v27','⌁','performance_review'],['enterprise-v28','◫','hr_analytics']
  ] },
  { title: 'group_admin', items: [
    ['pengaturan','⚙','settings'],['roles','♜','roles'],['security','⛨','security'],
    ['enterprise-v31','✓','qa_testing'],['enterprise-v34','⇄','api_integrations'],['enterprise-v35','✦','ai_hr_automation']
  ] },
];

function getSavedTheme(): ThemeId {
  const saved = localStorage.getItem('project-tirta-web-theme');

  return saved && saved in THEMES
    ? (saved as ThemeId)
    : 'matahari';
}

function Icon({ children }: { children: string }) {
  return <span className="w2-icon" aria-hidden="true">{children}</span>;
}

export default function WebAdminReference() {
  const [themeId, setThemeId] = useState<ThemeId>(() => getSavedTheme());
  const { lang, setLang } = useTranslation();
  const [name, setName] = useState('Sari Dewi');
  const [role, setRole] = useState('HR Manager');
  const [email, setEmail] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<'sidebar' | 'topbar' | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [draftName, setDraftName] = useState('');
  const [profileSaving, setProfileSaving] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const topProfileMenuRef = useRef<HTMLDivElement | null>(null);
  const [employees, setEmployees] = useState(0);
  const [activeEmployees, setActiveEmployees] = useState(0);
  const [approvalCount, setApprovalCount] = useState(0);
  const [announcementCount, setAnnouncementCount] = useState(0);
  const [dashboardAnnouncements, setDashboardAnnouncements] = useState<Array<{ id: string; title: string; created_at?: string | null; priority?: string | null }>>([]);
  const [supabaseError, setSupabaseError] = useState('');
  const [activeKey, setActiveKey] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('project-tirta-web-sidebar-groups');
      if (saved) return JSON.parse(saved) as Record<string, boolean>;
    } catch {}
    return { group_main: true, group_people: true };
  });

  useEffect(() => {
    localStorage.setItem('project-tirta-web-sidebar-groups', JSON.stringify(expandedGroups));
  }, [expandedGroups]);

  const toggleGroup = (title: string) => {
    setExpandedGroups((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  const theme = THEMES[themeId];

  useEffect(() => {
    localStorage.setItem('project-tirta-web-theme', themeId);
  }, [themeId]);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setSupabaseError('');

      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError) {
        if (active) setSupabaseError(`Session Supabase: ${userError.message}`);
        return;
      }

      if (!userData.user) {
        if (active) setSupabaseError('Session Supabase belum tersedia. Silakan login ulang.');
        return;
      }

      const userEmail = userData.user.email?.trim().toLowerCase() || '';
      if (active) setEmail(userEmail);

      const [profileQuery, totalQuery, activeQuery, announcementsQuery] = await Promise.all([
        supabase
          .from('hris_users')
          .select('nama, role')
          .ilike('email', userEmail)
          .maybeSingle(),
        supabase
          .from('karyawan')
          .select('id', { count: 'exact', head: true }),
        supabase
          .from('karyawan')
          .select('id', { count: 'exact', head: true })
          .eq('status_aktif', true),
        supabase
          .from('hris_announcements')
          .select('id,title,created_at,priority', { count: 'exact' })
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(4),
      ]);

      if (!active) return;

      if (profileQuery.error) {
        setSupabaseError(`Profil Supabase: ${profileQuery.error.message}`);
        return;
      }

      if (totalQuery.error) {
        setSupabaseError(`Data karyawan: ${totalQuery.error.message}`);
        return;
      }

      if (activeQuery.error) {
        setSupabaseError(`Data karyawan aktif: ${activeQuery.error.message}`);
        return;
      }

      if (announcementsQuery.error) {
        setSupabaseError(`Pengumuman: ${announcementsQuery.error.message}`);
      }

      if (profileQuery.data?.nama) {
        setName(profileQuery.data.nama);
        setDraftName(profileQuery.data.nama);
      } else {
        setDraftName(name);
      }

      if (profileQuery.data?.role) setRole(profileQuery.data.role);

      setEmployees(typeof totalQuery.count === 'number' ? totalQuery.count : 0);
      setActiveEmployees(typeof activeQuery.count === 'number' ? activeQuery.count : 0);
      setAnnouncementCount(typeof announcementsQuery.count === 'number' ? announcementsQuery.count : 0);
      setDashboardAnnouncements((announcementsQuery.data || []));

      setApprovalCount(0);
    };

    void load();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (
        event === 'SIGNED_IN' ||
        event === 'TOKEN_REFRESHED' ||
        event === 'USER_UPDATED'
      ) {
        window.setTimeout(() => {
          void load();
        }, 0);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      const insideSidebar = profileMenuRef.current?.contains(target) ?? false;
      const insideTopbar = topProfileMenuRef.current?.contains(target) ?? false;
      if (!insideSidebar && !insideTopbar) {
        setProfileOpen(false);
        setLanguageOpen(false);
        setProfileMenuAnchor(null);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const openEditProfile = () => {
    setDraftName(name);
    setEditProfileOpen(true);
    setProfileOpen(false);
    setLanguageOpen(false);
  };

  const saveProfile = async () => {
    const nextName = draftName.trim();
    if (!nextName || !email) return;
    setProfileSaving(true);
    try {
      const { error } = await supabase
        .from('hris_users')
        .update({ nama: nextName })
        .ilike('email', email);
      if (error) throw error;
      setName(nextName);
      setEditProfileOpen(false);
    } catch (error) {
      console.warn('Unable to save profile:', error);
    } finally {
      setProfileSaving(false);
    }
  };

  const dateText = useMemo(
    () =>
      new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta',
      }).format(new Date()),
    []
  );

  const timeText = useMemo(
    () =>
      new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Jakarta',
      }).format(new Date()),
    []
  );

  const cycleTheme = () => {
    const ids = Object.keys(THEMES) as ThemeId[];
    const index = ids.indexOf(themeId);
    setThemeId(ids[(index + 1) % ids.length]);
  };

  return (
    <div
      className="w2"
      style={{
        '--w2-image': `url("${theme.image}")`,
        '--w2-accent': theme.accent,
        '--w2-accent2': theme.accent2,
      } as React.CSSProperties}
    >
      <style>{`
        .w2,
        .w2 * {
          box-sizing:border-box;
        }

        .w2 {
          --panel:rgba(5,14,28,.76);
          --panel2:rgba(7,20,39,.64);
          --border:rgba(174,211,255,.24);
          --text:#f5f8ff;
          --muted:#91a6bf;
          width:100%;
          min-height:100dvh;
          color:var(--text);
          position:relative;
          isolation:isolate;
          overflow-x:hidden;
          background:#020611;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
        }

        .w2::before {
          content:"";
          position:fixed;
          inset:0;
          z-index:-3;
          background:var(--w2-image) center/cover no-repeat;
          transform:scale(1.03);
          pointer-events:none;
        }

        .w2::after {
          content:"";
          position:fixed;
          inset:0;
          z-index:-2;
          background:
            linear-gradient(180deg,rgba(1,5,13,.12),rgba(1,5,13,.68)),
            radial-gradient(circle at 55% 18%,rgba(255,255,255,.05),transparent 34%);
          pointer-events:none;
        }

        .w2-layout {
          min-height:100dvh;
          display:grid;
          grid-template-columns:184px minmax(0,1fr);
          align-items:start;
          max-width:1540px;
          margin:0 auto;
          border-left:1px solid rgba(255,255,255,.08);
          border-right:1px solid rgba(255,255,255,.08);
          background:rgba(0,4,11,.16);
        }

        .w2-sidebar {
          min-height:0;
          height:auto;
          padding:12px 10px;
          display:flex;
          flex-direction:column;
          border-right:1px solid var(--border);
          background:linear-gradient(180deg,rgba(2,8,18,.92),rgba(2,7,16,.78));
          backdrop-filter:blur(10px);
        }

        .w2-layout.sidebar-collapsed {
          grid-template-columns:58px minmax(0,1fr);
        }

        .w2-sidebar-toggle {
          width:100%;
          min-height:30px;
          margin-bottom:8px;
          display:flex;
          align-items:center;
          justify-content:center;
          border:1px solid rgba(174,211,255,.18);
          border-radius:9px;
          background:rgba(255,255,255,.04);
          color:#c7d4e5;
          cursor:pointer;
          font-size:13px;
        }

        .w2-layout.sidebar-collapsed .w2-brand-copy,
        .w2-layout.sidebar-collapsed .w2-nav-group-title,
        .w2-layout.sidebar-collapsed .w2-nav b,
        .w2-layout.sidebar-collapsed .w2-theme-btn b,
        .w2-layout.sidebar-collapsed .w2-theme-btn i,
        .w2-layout.sidebar-collapsed .w2-user-copy {
          display:none;
        }

        .w2-layout.sidebar-collapsed .w2-brand {
          justify-content:center;
        }

        .w2-layout.sidebar-collapsed .w2-nav {
          overflow:visible;
        }

        .w2-layout.sidebar-collapsed .w2-nav-group {
          gap:3px;
        }

        .w2-layout.sidebar-collapsed .w2-nav-group-items {
          display:grid;
          gap:3px;
        }

        .w2-layout.sidebar-collapsed .w2-nav button {
          justify-content:center;
          padding:7px 4px;
        }

        .w2-nav-group-title {
          color:#f0cc68;
          font-weight:900;
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:6px;
          border:0;
          background:transparent;
          cursor:pointer;
          text-align:left;
        }

        .w2-nav-group-title:hover {
          color:#f0cc68;
        }

        .w2-group-chevron {
          font-size:9px;
          color:#8ca7c4;
          transition:transform .18s ease;
        }

        .w2-group-chevron.open {
          transform:rotate(90deg);
        }

        .w2-nav-group-items {
          display:grid;
          gap:3px;
          overflow:hidden;
          max-height:800px;
          opacity:1;
          transition:max-height .2s ease, opacity .15s ease;
        }

        .w2-nav-group-items.closed {
          max-height:0;
          opacity:0;
          pointer-events:none;
        }

        .w2-brand {
          display:flex;
          gap:9px;
          align-items:center;
          padding:4px 4px 12px;
        }

        .w2-brand-mark {
          width:34px;
          height:34px;
          flex:0 0 34px;
          display:grid;
          place-items:center;
          border:1px solid rgba(255,255,255,.22);
          border-radius:12px;
          color:var(--w2-accent);
          background:rgba(255,255,255,.05);
          font-size:20px;
        }

        .w2-brand-logo {
          width:24px;
          height:24px;
          object-fit:contain;
          filter:drop-shadow(0 0 6px rgba(246,211,101,.22));
        }

        .w2-brand strong {
          display:block;
          font-size:10px;
          color:#fff;
        }

        .w2-brand small {
          display:block;
          margin-top:2px;
          color:#8096b0;
          font-size:6px;
          line-height:1.25;
        }

        .w2-nav {
          display:grid;
          gap:10px;
          margin-top:5px;
          overflow:auto;
          padding-right:2px;
        }

        .w2-nav-group {
          display:grid;
          gap:3px;
        }

        .w2-nav-group-title {
          color:#f6d365 ;
          font-weight:950 ;
          padding:4px 8px 5px;
          font-size:7px;
          letter-spacing:.14em;
          line-height:1.2;
          text-shadow:0 0 7px rgba(246,211,101,.22);
        }

        .w2-nav-group-title,
        .w2-nav-group-title span,
        .w2-nav-group-title b {
          color:#f6d365 ;
          font-weight:950 ;
        }

        .w2-nav button {
          width:100%;
          min-height:34px;
          display:flex;
          align-items:center;
          gap:8px;
          border:1px solid transparent;
          border-radius:9px;
          background:transparent;
          color:#c7d4e5;
          cursor:pointer;
          padding:7px 9px;
          text-align:left;
        }

        .w2-nav button.active {
          background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));
          color:#0a1220;
          border-color:rgba(255,255,255,.18);
          box-shadow:0 8px 24px color-mix(in srgb,var(--w2-accent) 16%,transparent);
        }

        .w2-nav .w2-icon {
          width:16px;
          flex:0 0 16px;
          font-size:13px;
          text-align:center;
        }

        .w2-nav b {
          font-size:8px;
          font-weight:750;
        }

        .w2-sidebar-bottom {
          margin-top:10px;
          display:grid;
          gap:7px;
        }

        .w2-theme-btn,
        .w2-user-btn {
          width:100%;
          display:flex;
          align-items:center;
          gap:7px;
          min-height:40px;
          padding:7px 8px;
          border:1px solid rgba(168,203,242,.18);
          border-radius:10px;
          background:rgba(255,255,255,.035);
          color:#dbe8f6;
          cursor:pointer;
          text-align:left;
        }

        .w2-theme-btn b,
        .w2-user-btn strong {
          font-size:7px;
        }

        .w2-theme-btn i,
        .w2-user-btn i {
          margin-left:auto;
          color:#8197af;
          font-style:normal;
        }

        .w2-user-avatar {
          width:28px;
          height:28px;
          display:grid;
          place-items:center;
          flex:0 0 28px;
          border-radius:50%;
          color:#0c1525;
          background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));
          font-size:9px;
          font-weight:900;
        }

        .w2-user-btn small {
          display:block;
          margin-top:2px;
          color:#8197af;
          font-size:6px;
        }

        .w2-profile-wrap { position:relative; }
        .w2-profile-trigger { border:0; background:transparent; color:inherit; padding:0; cursor:pointer; display:flex; align-items:center; }
        .w2-profile-menu { position:absolute; top:calc(100% + 8px); right:0; z-index:40; min-width:190px; padding:6px; border:1px solid rgba(174,211,255,.18); border-radius:12px; background:rgba(2,9,20,.96); box-shadow:0 16px 42px rgba(0,0,0,.42); backdrop-filter:blur(14px); }
        .w2-profile-menu button { width:100%; border:0; background:transparent; color:#dbe7f4; padding:9px 10px; border-radius:8px; display:flex; align-items:center; gap:8px; cursor:pointer; text-align:left; font-size:8px; }
        .w2-profile-menu button:hover { background:rgba(255,255,255,.06); }
        .w2-profile-menu .gold { color:#f6d365; font-weight:900; }
        .w2-language-list { display:grid; gap:2px; padding:4px 0 2px 14px; }
        .w2-language-list button { font-size:7px; padding:7px 8px; }
        .w2-language-list button.active { color:#f6d365; font-weight:900; }
        .w2-profile-divider { height:1px; background:rgba(174,211,255,.10); margin:4px 0; }
        .w2-profile-modal-backdrop { position:fixed; inset:0; z-index:100; display:flex; align-items:center; justify-content:center; padding:16px; background:rgba(0,0,0,.52); backdrop-filter:blur(6px); }
        .w2-profile-modal { width:min(420px,100%); border:1px solid rgba(174,211,255,.18); border-radius:14px; background:rgba(3,11,22,.98); padding:14px; box-shadow:0 22px 60px rgba(0,0,0,.45); }
        .w2-profile-modal h3 { margin:0 0 10px; font-size:12px; color:#fff; }
        .w2-profile-field { display:grid; gap:4px; margin:7px 0; }
        .w2-profile-field label { font-size:7px; color:#8196ad; }
        .w2-profile-field input { width:100%; border:1px solid rgba(164,202,239,.16); border-radius:8px; background:rgba(3,10,20,.72); color:#eaf3fd; padding:8px; outline:none; font-size:8px; }
        .w2-profile-actions { display:flex; justify-content:flex-end; gap:6px; margin-top:10px; }
        .w2-profile-actions button { border:1px solid rgba(164,202,239,.16); border-radius:8px; padding:7px 10px; cursor:pointer; background:rgba(255,255,255,.04); color:#d7e4f2; }
        .w2-profile-actions .primary { color:#07111d; background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2)); font-weight:900; }

        .w2-main {
          min-width:0;
          display:flex;
          flex-direction:column;
        }

        .w2-topbar {
          min-height:58px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          padding:9px 14px;
          background:rgba(2,7,17,.62);
          border-bottom:1px solid rgba(171,206,244,.17);
          backdrop-filter:blur(12px);
        }

        .w2-search {
          width:min(430px,62%);
          height:32px;
          display:flex;
          align-items:center;
          gap:7px;
          padding:0 10px;
          border:1px solid rgba(171,206,244,.23);
          border-radius:999px;
          background:rgba(5,16,31,.65);
        }

        .w2-search input {
          min-width:0;
          width:100%;
          border:0;
          outline:0;
          color:#fff;
          background:transparent;
          font-size:8px;
        }

        .w2-search kbd {
          color:#7388a2;
          font-size:6px;
          white-space:nowrap;
        }

        .w2-actions {
          display:flex;
          align-items:center;
          gap:7px;
        }

        .w2-profile {
          display:flex;
          align-items:center;
          gap:7px;
        }

        .w2-profile strong {
          display:block;
          font-size:8px;
        }

        .w2-profile small {
          display:block;
          margin-top:2px;
          color:#8196af;
          font-size:6px;
        }

        .w2-content {
          width:100%;
          padding:12px;
        }

        .w2-dashboard {
          display:grid;
          gap:8px;
          max-width:1320px;
          margin:0 auto;
        }

        .w2-welcome {
          min-height:116px;
          padding:15px 17px;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:15px;
          border:1px solid rgba(188,217,252,.28);
          border-radius:15px;
          overflow:hidden;
          background:
            linear-gradient(90deg,rgba(2,7,16,.90),rgba(2,7,16,.47),rgba(2,7,16,.18)),
            var(--w2-image) center/cover;
          box-shadow:0 14px 42px rgba(0,0,0,.24);
        }

        .w2-kicker {
          color:var(--w2-accent);
          font-size:6px;
          font-weight:900;
          letter-spacing:.16em;
          text-transform:uppercase;
        }

        .w2-welcome h1 {
          margin:4px 0 0;
          color:#fff;
          font-size:23px;
          line-height:1.05;
          letter-spacing:-.55px;
        }

        .w2-welcome p {
          margin:4px 0 0;
          color:#9cb0c8;
          font-size:8px;
        }

        .w2-clock {
          text-align:right;
        }

        .w2-clock span {
          display:block;
          color:#91a6be;
          font-size:7px;
        }

        .w2-clock strong {
          display:block;
          margin-top:3px;
          color:#fff;
          font-size:18px;
        }

        .w2-stats {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:7px;
        }

        .w2-stat {
          min-height:78px;
          padding:10px;
          display:flex;
          gap:8px;
          align-items:flex-start;
          border:1px solid rgba(167,204,245,.18);
          border-radius:12px;
          background:linear-gradient(145deg,rgba(10,28,49,.83),rgba(3,11,22,.86));
        }

        .w2-stat-icon {
          width:28px;
          height:28px;
          flex:0 0 28px;
          display:grid;
          place-items:center;
          border-radius:9px;
          color:var(--w2-accent);
          border:1px solid color-mix(in srgb,var(--w2-accent) 34%,transparent);
          background:rgba(255,255,255,.045);
          font-size:12px;
        }

        .w2-stat small {
          color:#9db0c7;
          font-size:7px;
        }

        .w2-stat strong {
          display:block;
          margin-top:3px;
          color:#fff;
          font-size:19px;
          line-height:1;
        }

        .w2-stat span {
          display:block;
          margin-top:4px;
          color:#71d2ab;
          font-size:6px;
        }

        .w2-grid {
          display:grid;
          grid-template-columns:minmax(0,1.35fr) minmax(240px,.77fr) minmax(210px,.63fr);
          gap:7px;
        }

        .w2-panel {
          min-width:0;
          padding:11px;
          border:1px solid rgba(167,204,245,.19);
          border-radius:12px;
          background:linear-gradient(145deg,rgba(9,24,44,.84),rgba(3,10,20,.88));
          box-shadow:0 10px 25px rgba(0,0,0,.16);
        }

        .w2-panel-head {
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:8px;
          margin-bottom:8px;
        }

        .w2-panel-head h2 {
          margin:3px 0 0;
          color:#f3f7fe;
          font-size:11px;
        }

        .w2-chip,
        .w2-link {
          border:1px solid rgba(166,202,243,.16);
          border-radius:8px;
          padding:5px 7px;
          color:#9eb2ca;
          background:rgba(255,255,255,.03);
          font-size:6px;
          cursor:pointer;
        }

        .w2-chart-empty {
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:220px;
          text-align:center;
        }

        .w2-chart-empty > div {
          display:flex;
          flex-direction:column;
          gap:6px;
          max-width:360px;
        }

        .w2-chart-empty strong {
          color:#f0cc68;
          font-weight:900;
        }

        .w2-chart-empty span {
          color:#8ea4bd;
          font-size:12px;
        }

        .w2-chart {
          height:168px;
          position:relative;
        }

        .w2-chart svg {
          width:100%;
          height:100%;
          display:block;
        }

        .w2-chart-legend {
          display:flex;
          gap:10px;
          margin-top:5px;
          color:#8297b0;
          font-size:6px;
        }

        .w2-chart-legend i {
          display:inline-block;
          width:5px;
          height:5px;
          margin-right:3px;
          border-radius:50%;
          background:var(--w2-accent);
        }

        .w2-announcements {
          display:grid;
          gap:5px;
        }

        .w2-announcement {
          display:grid;
          grid-template-columns:25px minmax(0,1fr) auto;
          gap:6px;
          align-items:center;
          padding:7px;
          border:1px solid rgba(164,201,243,.10);
          border-radius:8px;
          background:rgba(255,255,255,.022);
        }

        .w2-announcement > b {
          width:24px;
          height:24px;
          display:grid;
          place-items:center;
          border-radius:8px;
          color:var(--w2-accent);
          background:rgba(255,255,255,.045);
        }

        .w2-announcement strong {
          display:block;
          color:#e6eef8;
          font-size:7px;
        }

        .w2-announcement small {
          display:block;
          margin-top:2px;
          color:#7287a0;
          font-size:5px;
        }

        .w2-pill {
          border-radius:999px;
          padding:3px 5px;
          color:#07111e;
          background:var(--w2-accent);
          font-size:5px;
          font-weight:900;
        }

        .w2-ring {
          width:116px;
          height:116px;
          margin:5px auto 11px;
          display:grid;
          place-items:center;
          border-radius:50%;
          background:
            radial-gradient(circle at center,rgba(4,14,27,.96) 54%,transparent 55%),
            conic-gradient(var(--w2-accent) 0 281deg,rgba(255,255,255,.07) 281deg 360deg);
        }

        .w2-ring div {
          text-align:center;
        }

        .w2-ring strong {
          display:block;
          font-size:20px;
        }

        .w2-ring span {
          color:#8195ad;
          font-size:6px;
        }

        .w2-attendance-list {
          display:grid;
          gap:4px;
        }

        .w2-attendance-list span {
          color:#899db5;
          font-size:6px;
        }

        .w2-dot {
          display:inline-block;
          width:5px;
          height:5px;
          margin-right:4px;
          border-radius:50%;
          background:var(--w2-accent);
        }

        .w2-banner {
          min-height:72px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          padding:11px 14px;
          border:1px solid rgba(168,204,243,.19);
          border-radius:12px;
          background:
            linear-gradient(90deg,rgba(2,7,15,.90),rgba(2,7,15,.42)),
            var(--w2-image) center/cover;
        }

        .w2-banner h2 {
          margin:3px 0 0;
          font-size:13px;
        }

        .w2-banner p {
          margin:3px 0 0;
          color:#8aa0b8;
          font-size:6px;
        }

        .w2-banner button {
          border:1px solid rgba(255,255,255,.16);
          border-radius:8px;
          padding:7px 10px;
          color:#0d1622;
          background:linear-gradient(135deg,var(--w2-accent),var(--w2-accent2));
          font-size:6px;
          font-weight:900;
          cursor:pointer;
        }

        .w2-bottom {
          display:grid;
          grid-template-columns:minmax(0,1.35fr) minmax(220px,.65fr);
          gap:7px;
        }

        .w2-quick-grid {
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:5px;
        }

        .w2-quick-grid button {
          min-height:53px;
          display:grid;
          place-items:center;
          gap:4px;
          border:1px solid rgba(164,200,241,.10);
          border-radius:9px;
          color:#d9e5f3;
          background:rgba(255,255,255,.025);
          cursor:pointer;
          font-size:6px;
        }

        .w2-quick-grid span {
          color:var(--w2-accent);
          font-size:13px;
        }

        .w2-theme-strip {
          display:flex;
          gap:7px;
          overflow:auto;
          padding-bottom:2px;
        }

        .w2-theme-card {
          min-width:118px;
          padding:6px;
          border:1px solid rgba(171,207,246,.14);
          border-radius:9px;
          background:rgba(3,10,21,.72);
          cursor:pointer;
        }

        .w2-theme-card.active {
          border-color:var(--w2-accent);
          box-shadow:0 0 0 1px color-mix(in srgb,var(--w2-accent) 32%,transparent);
        }

        .w2-theme-card img {
          display:block;
          width:100%;
          height:48px;
          object-fit:cover;
          border-radius:6px;
        }

        .w2-theme-card strong {
          display:block;
          margin-top:5px;
          color:#fff;
          font-size:6px;
        }

        .w2-theme-card small {
          display:block;
          margin-top:2px;
          color:#7489a2;
          font-size:5px;
        }

        @media (max-width:1100px) {
          .w2-layout {
            grid-template-columns:170px minmax(0,1fr);
          }

          .w2-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }

          .w2-panel:first-child {
            grid-column:1/-1;
          }
        }

        @media (max-width:760px) {
          .w2-layout {
            grid-template-columns:1fr;
          }

          .w2-sidebar {
            position:static;
            min-height:auto;
          }

          .w2-nav {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }

          .w2-topbar {
            flex-wrap:wrap;
          }

          .w2-search {
            width:100%;
          }

          .w2-stats,
          .w2-grid,
          .w2-bottom {
            grid-template-columns:1fr;
          }

          .w2-panel:first-child {
            grid-column:auto;
          }

          .w2-quick-grid {
            grid-template-columns:repeat(2,minmax(0,1fr));
          }
        }
      `}</style>

      <div className={`w2-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>

        <aside className="w2-sidebar">
          <button
            type="button"
            className="w2-sidebar-toggle"
            aria-label={wt(lang, sidebarOpen ? 'close_sidebar' : 'open_sidebar')}
            title={wt(lang, sidebarOpen ? 'close_sidebar' : 'open_sidebar')}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            {sidebarOpen ? '‹' : '☰'}
          </button>

          <div className="w2-brand">
            <div className="w2-brand-mark"><img className="w2-brand-logo" src={moonLogo} alt="Project by Tirta" /></div>
            <div className="w2-brand-copy">
              <strong>Project by Tirta</strong>
              <small>
                Human Resource<br />
                Information System
              </small>
            </div>
          </div>

          <nav className="w2-nav" aria-label={wt(lang, 'group_main')}>
            {menuGroups.map((group) => {
              const isOpen = expandedGroups[group.title] ?? false;
              return (
                <section className="w2-nav-group" key={group.title}>
                  <button
                    type="button"
                    className="w2-nav-group-title"
                    aria-expanded={isOpen}
                    onClick={() => toggleGroup(group.title)}
                    title={wt(lang, group.title)}
                  >
                    <span>{wt(lang, group.title)}</span>
                    <span className={`w2-group-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">›</span>
                  </button>
                  <div className={`w2-nav-group-items ${isOpen ? '' : 'closed'}`}>
                    {group.items.map(([key, icon, label]) => (
                      <button
                        key={key}
                        type="button"
                        className={activeKey === key ? 'active' : ''}
                        onClick={() => {
                          setActiveKey(key);
                          setExpandedGroups((current) => ({ ...current, [group.title]: true }));
                        }}
                        title={wt(lang, label)}
                      >
                        <Icon>{icon}</Icon>
                        <b>{wt(lang, label)}</b>
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </nav>

          <div className="w2-sidebar-bottom">
            <button
              type="button"
              className="w2-theme-btn"
              onClick={cycleTheme}
            >
              <span style={{ color: 'var(--w2-accent)' }}>☼</span>
              <b>{wt(lang, 'theme')}: {theme.label}</b>
              <i>›</i>
            </button>

            <div ref={profileMenuRef} className="w2-profile-wrap">
              <button
                type="button"
                className="w2-user-btn"
                aria-expanded={profileOpen}
                onClick={() => { setProfileOpen((open) => !open); setProfileMenuAnchor(profileOpen ? null : 'sidebar'); setLanguageOpen(false); }}
              >
                <span className="w2-user-avatar">{name.slice(0, 1).toUpperCase()}</span>
                <span className="w2-user-copy"><strong>{name}</strong><small>{role}</small></span>
                <i>{profileOpen ? '⌃' : '›'}</i>
              </button>
              {profileOpen && profileMenuAnchor === 'sidebar' ? (
                <div className="w2-profile-menu">
                  <button type="button" className="gold" onClick={() => setLanguageOpen((open) => !open)}>🌐 {wt(lang, 'language')} <span style={{ marginLeft:'auto' }}>›</span></button>
                  {languageOpen ? (
                    <div className="w2-language-list">
                      {SUPPORTED_LANGUAGES.map((item) => (
                        <button key={item.code} type="button" className={lang === item.code ? 'active' : ''} onClick={() => { void setLang(item.code); setLanguageOpen(false); setProfileOpen(false); }}>
                          {item.nativeName} · {item.name}
                        </button>
                      ))}
                    </div>
                  ) : null}
                  <div className="w2-profile-divider" />
                  <button type="button" onClick={() => { setActiveKey('pengaturan'); setProfileOpen(false); }}>⚙️ {wt(lang, 'settings')}</button>
                  <button type="button" onClick={openEditProfile}>✎ {wt(lang, 'edit')}</button>
                  <div className="w2-profile-divider" />
                  <button type="button" onClick={() => { void supabase.auth.signOut(); }}>↪ {wt(lang, 'logout')}</button>
                </div>
              ) : null}
            </div>
          </div>
        </aside>

        <main className="w2-main">
          {supabaseError ? (
            <div style={{
              margin: '10px 16px',
              padding: '10px 12px',
              border: '1px solid rgba(255,100,100,.35)',
              borderRadius: '10px',
              background: 'rgba(120,20,20,.22)',
              color: '#ffd6d6',
              fontSize: '12px',
              lineHeight: 1.5
            }}>
              <strong>Supabase:</strong> {supabaseError}
            </div>
          ) : (
            <div style={{
              margin: '10px 16px',
              padding: '8px 12px',
              border: '1px solid rgba(246,211,101,.22)',
              borderRadius: '10px',
              background: 'rgba(246,211,101,.05)',
              color: '#f6d365',
              fontSize: '11px'
            }}>
              Supabase aktif · {email || 'session belum terbaca'} · {role || 'role belum terbaca'} · {employees} karyawan
            </div>
          )}

          <header className="w2-topbar">
            <div className="w2-search">
              <span>⌕</span>
              <input
                placeholder={wt(lang, 'search')}
              />
              <kbd>Ctrl + K</kbd>
            </div>

            <div className="w2-actions">
              <div className="w2-profile-wrap" ref={topProfileMenuRef}>
                <button type="button" className="w2-profile-trigger" aria-expanded={profileOpen} onClick={() => { setProfileOpen((open) => !open); setProfileMenuAnchor(profileOpen ? null : 'topbar'); setLanguageOpen(false); }}>
                  <span className="w2-profile">
                    <span className="w2-user-avatar">{name.slice(0, 1).toUpperCase()}</span>
                    <span><strong>{name}</strong><small>{role}</small></span>
                  </span>
                </button>
                {profileOpen && profileMenuAnchor === 'topbar' ? (
                  <div className="w2-profile-menu">
                    <button type="button" className="gold" onClick={() => setLanguageOpen((open) => !open)}>🌐 {wt(lang, 'language')} <span style={{ marginLeft:'auto' }}>›</span></button>
                    {languageOpen ? <div className="w2-language-list">{SUPPORTED_LANGUAGES.map((item) => <button key={item.code} type="button" className={lang===item.code?'active':''} onClick={() => { void setLang(item.code); setLanguageOpen(false); setProfileOpen(false); }}>{item.nativeName} · {item.name}</button>)}</div> : null}
                    <div className="w2-profile-divider" />
                    <button type="button" onClick={() => { setActiveKey('pengaturan'); setProfileOpen(false); }}>⚙️ {wt(lang, 'settings')}</button>
                    <button type="button" onClick={openEditProfile}>✎ {wt(lang, 'edit')}</button>
                    <div className="w2-profile-divider" />
                    <button type="button" onClick={() => { void supabase.auth.signOut(); }}>↪ {wt(lang, 'logout')}</button>
                  </div>
                ) : null}
              </div>
            </div>
          </header>

          {editProfileOpen ? (
            <div className="w2-profile-modal-backdrop" role="dialog" aria-modal="true">
              <div className="w2-profile-modal">
                <h3>{wt(lang, 'edit')}</h3>
                <div className="w2-profile-field"><label>{wt(lang, 'name')}</label><input value={draftName} onChange={(e) => setDraftName(e.target.value)} /></div>
                <div className="w2-profile-field"><label>{wt(lang, 'email')}</label><input value={email} readOnly /></div>
                <div className="w2-profile-field"><label>{wt(lang, 'role')}</label><input value={role} readOnly /></div>
                <div className="w2-profile-actions">
                  <button type="button" onClick={() => setEditProfileOpen(false)}>{wt(lang, 'cancel')}</button>
                  <button type="button" className="primary" disabled={profileSaving || !draftName.trim()} onClick={() => void saveProfile()}>{profileSaving ? wt(lang, 'saving') : wt(lang, 'save')}</button>
                </div>
              </div>
            </div>
          ) : null}

          <div className="w2-content">
            {activeKey === 'dashboard' ? (
            <div className="w2-dashboard">

              <section className="w2-welcome">
                <div>
                  <div className="w2-kicker">PROJECT BY TIRTA</div>
                  <h1>{wt(lang, 'welcome')}, {name} 👋</h1>
                  <p>
                    {wt(lang, 'welcome_desc')}
                  </p>
                </div>

                <div className="w2-clock">
                  <span>{dateText}</span>
                  <strong>{timeText}</strong>
                </div>
              </section>

              <section className="w2-stats">
                <article className="w2-stat">
                  <span className="w2-stat-icon">♙</span>
                  <div>
                    <small>{wt(lang, 'employee')}</small>
                    <strong>{employees}</strong>
                    <span>{employees ? wt(lang, 'actual') : wt(lang, 'no_data')}</span>
                  </div>
                </article>

                <article className="w2-stat">
                  <span className="w2-stat-icon">♙</span>
                  <div>
                    <small>{wt(lang, 'employee')} Aktif</small>
                    <strong>{activeEmployees}</strong>
                    <span>{activeEmployees ? wt(lang, 'active_data') : wt(lang, 'no_active')}</span>
                  </div>
                </article>

                <article className="w2-stat">
                  <span className="w2-stat-icon">◷</span>
                  <div>
                    <small>{wt(lang, 'approval')}</small>
                    <strong>{approvalCount}</strong>
                    <span>{approvalCount ? wt(lang, 'pending') : wt(lang, 'pending')}</span>
                  </div>
                </article>

                <article className="w2-stat">
                  <span className="w2-stat-icon">◈</span>
                  <div>
                    <small>{wt(lang, 'announcements')}</small>
                    <strong>{announcementCount}</strong>
                    <span>{announcementCount ? wt(lang, 'published') : wt(lang, 'no_announcements')}</span>
                  </div>
                </article>
              </section>

              <section className="w2-grid">

                <article className="w2-panel">
                  <div className="w2-panel-head">
                    <div>
                      <div className="w2-kicker">ANALYTICS</div>
                      <h2>{wt(lang, 'stats')}</h2>
                    </div>
                    <button type="button" className="w2-chip">
                      {wt(lang, 'last6')}
                    </button>
                  </div>

                  <div className="w2-chart w2-chart-empty">
                    <div>
                      <strong>{employees ? wt(lang, 'no_history') : 'Belum ada data karyawan'}</strong>
                      <span>Grafik akan tampil setelah data historis tersedia.</span>
                    </div>
                  </div>
                  <div className="w2-chart-legend">
                    <span>{employees ? wt(lang, 'waiting_history') : 'Belum ada data'}</span>
                  </div>
                </article>

                <article className="w2-panel">
                  <div className="w2-panel-head">
                    <div>
                      <div className="w2-kicker">UPDATES</div>
                      <h2>{wt(lang, 'announcements')}</h2>
                    </div>
                    <button type="button" className="w2-link">
                      {wt(lang, 'view_all')}
                    </button>
                  </div>

                  <div className="w2-announcements">
                    {dashboardAnnouncements.length ? dashboardAnnouncements.map((item) => (
                      <div className="w2-announcement" key={item.id}>
                        <b>◈</b>
                        <section>
                          <strong>{item.title}</strong>
                          <small>{item.created_at ? new Date(item.created_at).toLocaleDateString('id-ID') : '—'}</small>
                        </section>
                        <span className="w2-pill">{item.priority || 'Normal'}</span>
                      </div>
                    )) : (
                      <div className="w2-announcement" style={{ justifyContent: 'center' }}>
                        <section style={{ textAlign: 'center' }}>
                          <strong>Belum ada pengumuman</strong>
                          <small>Pengumuman yang dipublikasikan akan tampil di sini.</small>
                        </section>
                      </div>
                    )}
                  </div>
                </article>

                <article className="w2-panel">
                  <div className="w2-panel-head">
                    <div>
                      <div className="w2-kicker">ATTENDANCE</div>
                      <h2>{wt(lang, 'attendance')}</h2>
                    </div>
                  </div>

                  <div className="w2-ring" style={{ background: 'conic-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08))' }}>
                    <div>
                      <strong>0%</strong>
                      <span>Belum ada data</span>
                    </div>
                  </div>

                  <div className="w2-attendance-list">
                    <span>{wt(lang, 'attendance_missing')}</span>
                  </div>
                </article>

              </section>

              <section className="w2-banner">
                <div>
                  <div className="w2-kicker">PROJECT BY TIRTA</div>
                  <h2>{wt(lang, 'banner')}</h2>
                  <p>{wt(lang, 'banner_desc')}</p>
                </div>

                <button type="button">
                  {wt(lang, 'guide')}
                </button>
              </section>

              <section className="w2-bottom">

                <article className="w2-panel">
                  <div className="w2-panel-head">
                    <div>
                      <div className="w2-kicker">QUICK ACCESS</div>
                      <h2>{wt(lang, 'quick')}</h2>
                    </div>
                  </div>

                  <div className="w2-quick-grid">
                    <button type="button" onClick={() => setActiveKey('karyawan')}>
                      <span>♙</span>
                      Karyawan
                    </button>
                    <button type="button" onClick={() => setActiveKey('approval')}>
                      <span>✓</span>
                      Approval
                    </button>
                    <button type="button" onClick={() => setActiveKey('laporan')}>
                      <span>◷</span>
                      Absensi
                    </button>
                    <button type="button" onClick={() => setActiveKey('laporan')}>
                      <span>▤</span>
                      Laporan
                    </button>
                  </div>
                </article>

                <article className="w2-panel">
                  <div className="w2-panel-head">
                    <div>
                      <div className="w2-kicker">THEME</div>
                      <h2>{theme.label}</h2>
                    </div>
                  </div>

                  <div className="w2-theme-strip">
                    {(Object.keys(THEMES) as ThemeId[]).map((id) => (
                      <button
                        type="button"
                        key={id}
                        className={`w2-theme-card${id === themeId ? ' active' : ''}`}
                        onClick={() => setThemeId(id)}
                      >
                        <img src={THEMES[id].image} alt={THEMES[id].label} />
                        <strong>{THEMES[id].label}</strong>
                        <small>{THEMES[id].lang}</small>
                      </button>
                    ))}
                  </div>
                </article>

              </section>

            </div>
            ) : (
              <WebAdminFeatures
                route={activeKey}
                name={name}
                role={role}
                onNavigate={setActiveKey}
              />
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
