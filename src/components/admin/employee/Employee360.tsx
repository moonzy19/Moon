import { useTranslation } from '../../../locales/LanguageContext';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../../../lib/supabase/client';

type Employee = {
  id: string;
  id_karyawan?: string;
  nama: string;
  departemen?: string;
  jabatan?: string;
  email?: string;
  no_telp?: string;
  alamat_rumah?: string;
  gaji_pokok?: number;
  status_aktif?: boolean;
  tanggal_masuk?: string;
  status_karyawan?: string;
  tipe_karyawan?: string;
  lokasi_kerja?: string;
  level_jabatan?: string;
};

type Row = Record<string, any>;

const money = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number(n) || 0);

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="stat-card employee360-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

const tabs: Array<[string, string]> = [
  ['overview', 'Ringkasan'],
  ['attendance', 'Absensi'],
  ['leave', 'Cuti'],
  ['overtime', 'Lembur'],
  ['payroll', 'Payroll'],
  ['documents', 'Dokumen'],
  ['history', 'Riwayat'],
];

export default function Employee360({
  employees,
  initialEmployeeId,
}: {
  employees: Employee[];
  initialEmployeeId?: string;
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(initialEmployeeId || employees[0]?.id_karyawan || '');
  const [attendance, setAttendance] = useState<Row[]>([]);
  const [leave, setLeave] = useState<Row[]>([]);
  const [overtime, setOvertime] = useState<Row[]>([]);
  const [payroll, setPayroll] = useState<Row[]>([]);
  const [history, setHistory] = useState<Row[]>([]);
  const [docs, setDocs] = useState<Row[]>([]);
  const [tab, setTab] = useState('overview');

  const emp = useMemo(
    () => employees.find(x => x.id_karyawan === selected),
    [employees, selected],
  );

  useEffect(() => {
    if (!selected) return;
    void (async () => {
      const [a, l, o, p, h, d] = await Promise.all([
        supabase.from('absensi').select('*').eq('id_karyawan', selected).order('tanggal', { ascending: false }).limit(100),
        supabase.from('hris_cuti').select('*').eq('id_karyawan', selected).order('tanggal_mulai', { ascending: false }).limit(50),
        supabase.from('hris_lembur').select('*').eq('id_karyawan', selected).order('tanggal', { ascending: false }).limit(50),
        supabase.from('hris_payroll').select('*').eq('id_karyawan', selected).order('periode', { ascending: false }).limit(24),
        supabase.from('hris_employee_history').select('*').eq('id_karyawan', selected).order('created_at', { ascending: false }).limit(50),
        supabase.from('hris_employee_documents').select('*').eq('id_karyawan', selected).order('created_at', { ascending: false }).limit(50),
      ]);
      setAttendance(a.data || []);
      setLeave(l.data || []);
      setOvertime(o.data || []);
      setPayroll(p.data || []);
      setHistory(h.data || []);
      setDocs(d.data || []);
    })();
  }, [selected]);

  if (!employees.length) {
    return (
      <div className="employee360-empty-state">
        <h3>{t('no_employees')}</h3>
        <p>{t('add_employee_first_360')}</p>
      </div>
    );
  }

  return (
    <div className="employee360-page-content">
      <div className="page-heading">
        <div>
          <span className="group-title">{t('people_360')}</span>
          <h1>{t('employee_360')}</h1>
          <p>{t('employee_360_desc')}</p>
        </div>
        <select className="employee-picker" value={selected} onChange={e => setSelected(e.target.value)}>
          {employees.map(x => (
            <option key={x.id} value={x.id_karyawan}>
              {x.nama} — {x.id_karyawan}
            </option>
          ))}
        </select>
      </div>

      {emp && (
        <section className="employee-hero" aria-label={t('employee_360')}>
          <div className="employee-avatar">{emp.nama.slice(0, 2).toUpperCase()}</div>
          <div className="employee-hero-copy">
            <h2>{emp.nama}</h2>
            <p>{emp.jabatan || '—'} · {emp.departemen || '—'}</p>
            <small>{emp.email || 'Email belum diisi'} · {emp.no_telp || 'Telepon belum diisi'}</small>
          </div>
          <div className="employee-hero-meta">
            <b>{emp.status_aktif === false ? 'Nonaktif' : 'Aktif'}</b>
            <span>{emp.tipe_karyawan || emp.status_karyawan || 'Karyawan'}</span>
            <span>{emp.lokasi_kerja || 'Lokasi belum diisi'}</span>
          </div>
        </section>
      )}

      <div className="mini-kpi-row employee360-kpis">
        <Stat label={t('attendance')} value={attendance.length} />
        <Stat label={t('leave')} value={leave.length} />
        <Stat label={t('overtime')} value={overtime.length} />
        <Stat label={t('payroll')} value={payroll.length} />
        <Stat label={t('documents')} value={docs.length} />
      </div>

      <nav className="branch-nav employee360-tabs" aria-label={t('employee_360')}>
        {tabs.map(([key, label]) => (
          <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>
            {label}
            {key === 'overview' ? '' : ''}
          </button>
        ))}
      </nav>

      {tab === 'overview' ? (
        <section className="employee360-overview" aria-label="Ringkasan">
          <div className="employee360-info-group">
            <div className="employee360-section-head">
              <span className="card-kicker">{t('profile')}</span>
              <h3>{t('profile')}</h3>
            </div>
            <dl className="employee360-profile-grid">
              <div><dt>{t('employee_id')}</dt><dd>{emp?.id_karyawan || '—'}</dd></div>
              <div><dt>{t('position')}</dt><dd>{emp?.jabatan || '—'}</dd></div>
              <div><dt>{t('level')}</dt><dd>{emp?.level_jabatan || '—'}</dd></div>
              <div><dt>{t('department')}</dt><dd>{emp?.departemen || '—'}</dd></div>
              <div><dt>{t('join_date')}</dt><dd>{emp?.tanggal_masuk || '—'}</dd></div>
              <div><dt>{t('basic_salary')}</dt><dd>{money(Number(emp?.gaji_pokok || 0))}</dd></div>
            </dl>
          </div>

          <div className="employee360-info-group">
            <div className="employee360-section-head">
              <span className="card-kicker">{t('latest_payroll')}</span>
              <h3>{t('latest_payroll')}</h3>
            </div>
            {payroll[0] ? (
              <>
                <b className="big-money">{money(payroll[0].gaji_bersih)}</b>
                <p>{t('period')} {payroll[0].periode} · {payroll[0].status}</p>
              </>
            ) : (
              <p>{t('no_payroll')}</p>
            )}
            <div className="employee360-subsection-head">{t('recent_activity')}</div>
            <div className="employee360-history-list">
              {history.slice(0, 4).map(x => (
                <div key={x.id} className="employee360-history-row">
                  <b>{x.jenis}</b>
                  <span>{x.ke_nilai || '—'}</span>
                  <small>{String(x.created_at || '').slice(0, 10)}</small>
                </div>
              ))}
              {!history.length && <span className="muted">{t('no_data')}</span>}
            </div>
          </div>
        </section>
      ) : (
        <section className="panel table-panel employee360-table-surface" aria-label={tab}>
          {tab === 'attendance' && <Simple rows={attendance} cols={['tanggal', 'jam_masuk', 'jam_pulang', 'status', 'keterlambatan_menit', 'lembur_menit']} />}
          {tab === 'leave' && <Simple rows={leave} cols={['jenis', 'tanggal_mulai', 'tanggal_selesai', 'jumlah_hari', 'status']} />}
          {tab === 'overtime' && <Simple rows={overtime} cols={['tanggal', 'menit', 'nominal', 'status']} />}
          {tab === 'payroll' && <Simple rows={payroll} cols={['periode', 'gaji_pokok', 'lembur', 'total_pendapatan', 'total_potongan', 'gaji_bersih', 'status']} />}
          {tab === 'documents' && <Simple rows={docs} cols={['jenis', 'nama_file', 'nomor_dokumen', 'tanggal_terbit', 'tanggal_expired', 'status']} />}
          {tab === 'history' && <Simple rows={history} cols={['created_at', 'jenis', 'dari_nilai', 'ke_nilai', 'efektif_mulai', 'alasan', 'actor_email']} />}
        </section>
      )}
    </div>
  );
}

function Simple({ rows, cols }: { rows: Row[]; cols: string[] }) {
  const { t } = useTranslation();
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{cols.map(c => <th key={c}>{c.replaceAll('_', ' ')}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length ? rows.map((r, i) => (
            <tr key={r.id || i}>{cols.map(c => <td key={c}>{String(r[c] ?? '—')}</td>)}</tr>
          )) : (
            <tr><td colSpan={cols.length} className="empty-cell">{t('no_data')}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
