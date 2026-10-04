import type { ReactNode } from 'react';

type Karyawan = {
  id: string;
  id_karyawan?: string;
  nama: string;
  jabatan?: string;
  email?: string;
  no_telp?: string;
  alamat_rumah?: string;
  gaji_pokok?: number;
  nik_ktp?: string;
  departemen?: string;
  status_aktif?: boolean;
  tanggal_masuk?: string;
  status_karyawan?: string;
  role?: string;
};

type Absensi = {
  id: string;
  karyawan_id?: string;
  id_karyawan?: string;
  nama?: string;
  jabatan?: string;
  tanggal?: string;
  jam_masuk?: string;
  jam_pulang?: string;
  total_jam?: string;
  status?: string;
  lokasi?: string;
  foto?: string;
  selfie_masuk?: string;
  keterlambatan_menit?: number;
  lembur_menit?: number;
  lokasi_masuk?: string;
};

type DashboardRole = 'Super Admin' | 'Admin' | 'HRD' | string;

interface RoleDashboardProps {
  role: DashboardRole;
  employees: Karyawan[];
  attendance: Absensi[];
  present: number;
  late: number;
  payroll: number;
  onNavigate: (menu: string) => void;
}

interface StatCardProps {
  label: string;
  value: string | number;
  description: string;
  icon: string;
}

function StatCard({ label, value, description, icon }: StatCardProps) {
  return (
    <article className="role-stat-card">
      <div className="role-stat-icon" aria-hidden="true">{icon}</div>
      <div className="role-stat-copy">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{description}</small>
      </div>
    </article>
  );
}

interface QuickActionProps {
  label: string;
  description: string;
  icon: string;
  onClick: () => void;
}

function QuickAction({ label, description, icon, onClick }: QuickActionProps) {
  return (
    <button type="button" onClick={onClick} className="role-quick-action">
      <span className="role-quick-icon" aria-hidden="true">{icon}</span>
      <span className="role-quick-copy">
        <strong>{label}</strong>
        <small>{description}</small>
      </span>
      <span className="role-quick-arrow" aria-hidden="true">→</span>
    </button>
  );
}

function DashboardHeader({ title, description, role }: { title: string; description: string; role: string }) {
  return (
    <header className="role-dashboard-heading">
      <div>
        <span className="eyebrow">PROJECT BY TIRTA · HR COMMAND CENTER</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="role-badge">{role}</span>
    </header>
  );
}

function WorkforceOverview({
  employees,
  attendance,
  present,
  late,
}: {
  employees: Karyawan[];
  attendance: Absensi[];
  present: number;
  late: number;
}) {
  const totalEmployees = employees.length;
  const attendanceRate = totalEmployees > 0 ? Math.min(100, Math.round((present / totalEmployees) * 100)) : 0;

  return (
    <section className="role-workforce-section" aria-labelledby="role-workforce-title">
      <div className="role-section-heading">
        <div>
          <span className="eyebrow">WORKFORCE</span>
          <h2 id="role-workforce-title">Ringkasan Tenaga Kerja</h2>
          <p>Kondisi workforce dan kehadiran hari ini.</p>
        </div>
      </div>

      <div className="role-workforce-grid">
        <article className="role-metric-card">
          <span>Total Karyawan</span>
          <strong>{totalEmployees}</strong>
          <small>Seluruh workforce</small>
        </article>
        <article className="role-metric-card">
          <span>Hadir</span>
          <strong className="is-green">{present}</strong>
          <small>Hari ini</small>
        </article>
        <article className="role-metric-card">
          <span>Terlambat</span>
          <strong className="is-gold">{late}</strong>
          <small>Perlu monitoring</small>
        </article>
        <article className="role-metric-card">
          <span>Tingkat Kehadiran</span>
          <strong className="is-blue">{attendanceRate}%</strong>
          <small>Dari total karyawan</small>
        </article>
      </div>

      <div className="role-section-meta">Total data absensi: <strong>{attendance.length}</strong></div>
    </section>
  );
}

function RestrictedDashboard({ role }: { role: string }) {
  return (
    <section className="role-restricted-state" aria-labelledby="restricted-title">
      <div className="role-restricted-icon" aria-hidden="true">🔒</div>
      <span className="eyebrow">AKSES DASHBOARD</span>
      <h2 id="restricted-title">Dashboard Terbatas</h2>
      <p>Role <strong>{role}</strong> belum memiliki konfigurasi dashboard khusus.</p>
    </section>
  );
}

function RoleDashboardLayout({
  header,
  stats,
  workforce,
  quickTitle,
  quickActions,
}: {
  header: ReactNode;
  stats: StatCardProps[];
  workforce: { employees: Karyawan[]; attendance: Absensi[]; present: number; late: number };
  quickTitle: string;
  quickActions: QuickActionProps[];
}) {
  return (
    <div className="role-dashboard">
      {header}
      <section className="role-stat-grid" aria-label="Ringkasan KPI">
        {stats.map((card) => <StatCard key={card.label} {...card} />)}
      </section>
      <section className="role-main-grid">
        <WorkforceOverview {...workforce} />
        <aside className="role-quick-section">
          <div className="role-section-heading compact">
            <div>
              <span className="eyebrow">AKSES CEPAT</span>
              <h2>{quickTitle}</h2>
            </div>
          </div>
          <div className="role-quick-list">
            {quickActions.map((action) => <QuickAction key={action.label} {...action} />)}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default function RoleDashboard({ role, employees, attendance, present, late, payroll, onNavigate }: RoleDashboardProps) {
  const normalizedRole = String(role || '').trim();
  const workforce = { employees, attendance, present, late };

  if (normalizedRole === 'Super Admin') {
    return (
      <RoleDashboardLayout
        header={<DashboardHeader title="Super Admin Dashboard" description="Kontrol penuh terhadap sistem HRIS, pengguna, data, keamanan, dan konfigurasi." role="Super Admin" />}
        stats={[
          { label: 'Total Karyawan', value: employees.length, description: 'Seluruh workforce', icon: '👥' },
          { label: 'Hadir Hari Ini', value: present, description: 'Attendance aktif', icon: '✓' },
          { label: 'Terlambat', value: late, description: 'Perlu monitoring', icon: '◷' },
          { label: 'Payroll', value: payroll, description: 'Data payroll', icon: 'Rp' },
        ]}
        workforce={workforce}
        quickTitle="Akses Cepat"
        quickActions={[
          { label: 'Kelola Karyawan', description: 'Master data workforce', icon: '👥', onClick: () => onNavigate('employees') },
          { label: 'Log Audit', description: 'Aktivitas sistem', icon: '◉', onClick: () => onNavigate('audit') },
          { label: 'Settings', description: 'Konfigurasi sistem', icon: '⚙', onClick: () => onNavigate('settings') },
        ]}
      />
    );
  }

  if (normalizedRole === 'Admin') {
    return (
      <RoleDashboardLayout
        header={<DashboardHeader title="Admin Dashboard" description="Kelola operasional HR, karyawan, absensi, jadwal, dan laporan." role="Admin" />}
        stats={[
          { label: 'Karyawan', value: employees.length, description: 'Data aktif', icon: '👥' },
          { label: 'Hadir', value: present, description: 'Hari ini', icon: '✓' },
          { label: 'Terlambat', value: late, description: 'Hari ini', icon: '◷' },
          { label: 'Payroll', value: payroll, description: 'Data payroll', icon: 'Rp' },
        ]}
        workforce={workforce}
        quickTitle="Operasional"
        quickActions={[
          { label: 'Karyawan', description: 'Kelola data karyawan', icon: '👥', onClick: () => onNavigate('employees') },
          { label: 'Absensi', description: 'Monitoring kehadiran', icon: '✓', onClick: () => onNavigate('attendance') },
          { label: 'Jadwal', description: 'Kelola jadwal kerja', icon: '▦', onClick: () => onNavigate('schedule') },
          { label: 'Laporan', description: 'Lihat laporan HR', icon: '▤', onClick: () => onNavigate('reports') },
        ]}
      />
    );
  }

  if (normalizedRole === 'HRD') {
    return (
      <RoleDashboardLayout
        header={<DashboardHeader title="HRD Dashboard" description="Monitoring workforce, absensi, cuti, talent management, dan kebutuhan HR." role="HRD" />}
        stats={[
          { label: 'Total Karyawan', value: employees.length, description: 'Workforce', icon: '👥' },
          { label: 'Hadir', value: present, description: 'Hari ini', icon: '✓' },
          { label: 'Terlambat', value: late, description: 'Perlu tindak lanjut', icon: '◷' },
          { label: 'Payroll', value: payroll, description: 'Informasi payroll', icon: 'Rp' },
        ]}
        workforce={workforce}
        quickTitle="Manajemen HR"
        quickActions={[
          { label: 'Employee Master', description: 'Kelola data karyawan', icon: '👥', onClick: () => onNavigate('employees') },
          { label: 'Attendance', description: 'Monitoring kehadiran', icon: '✓', onClick: () => onNavigate('attendance') },
          { label: 'Leave', description: 'Kelola cuti dan approval', icon: '▣', onClick: () => onNavigate('leave') },
          { label: 'Talent', description: 'Talent management', icon: '★', onClick: () => onNavigate('talent') },
        ]}
      />
    );
  }

  return <RestrictedDashboard role={normalizedRole || 'Unknown'} />;
}
