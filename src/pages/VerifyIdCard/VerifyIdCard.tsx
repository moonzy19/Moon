import { useEffect, useState } from 'react';
import moonLogo from '../../assets/moon-logo.svg';
import { supabase } from '../../lib/supabase/client';
import { useTranslation } from '../../locales/LanguageContext';

type VerificationData = {
  found: boolean;
  id_karyawan: string;
  nama: string;
  jabatan: string;
  departemen: string;
  status_aktif: boolean;
  status_karyawan: string;
  tanggal_keluar?: string | null;
  alasan_keluar?: string | null;
  company_name: string;
};

type Props = {
  token: string;
  onHome: () => void;
};

const copy = {
  id: {
    title: 'Verifikasi ID Card', subtitle: 'Pemeriksaan identitas resmi Project by Tirta', checking: 'Memeriksa kartu…',
    verified: 'ID TERVERIFIKASI', inactive: 'ID TIDAK AKTIF', notFound: 'ID TIDAK DITEMUKAN',
    name: 'Nama lengkap', id: 'ID karyawan', role: 'Jabatan', department: 'Departemen', status: 'Status',
    exitDate: 'Tanggal keluar', inactiveReason: 'Alasan tidak aktif', noReason: 'Tidak ada alasan yang dicatat.',
    active: 'AKTIF', inactiveStatus: 'NONAKTIF', checked: 'Diperiksa', secure: 'Halaman ini hanya menampilkan data verifikasi yang aman. Tidak ada gaji, rekening, NIK, alamat, atau password yang ditampilkan.',
    back: 'Kembali ke Project by Tirta', source: 'Sumber verifikasi resmi', error: 'Verifikasi belum dapat dilakukan. Pastikan server dan Supabase dapat diakses.',
  },
  en: {
    title: 'ID Card Verification', subtitle: 'Official Project by Tirta identity check', checking: 'Checking card…',
    verified: 'ID VERIFIED', inactive: 'ID NOT ACTIVE', notFound: 'ID NOT FOUND',
    name: 'Full name', id: 'Employee ID', role: 'Position', department: 'Department', status: 'Status',
    exitDate: 'Exit date', inactiveReason: 'Reason for inactivity', noReason: 'No reason recorded.',
    active: 'ACTIVE', inactiveStatus: 'INACTIVE', checked: 'Checked', secure: 'This page only shows safe verification data. Salary, bank account, national ID, address, and password data are never displayed.',
    back: 'Back to Project by Tirta', source: 'Official verification source', error: 'Verification could not be completed. Please check the server and Supabase connection.',
  },
  ja: {
    title: 'IDカード認証', subtitle: 'Project by Tirta 正式本人確認', checking: 'カードを確認しています…',
    verified: 'ID確認済み', inactive: 'IDは無効です', notFound: 'IDが見つかりません',
    name: '氏名', id: '社員ID', role: '役職', department: '部署', status: '状態',
    exitDate: '退職日', inactiveReason: '無効の理由', noReason: '理由は記録されていません。', active: '有効', inactiveStatus: '無効', checked: '確認日時',
    secure: 'このページには安全な確認情報のみ表示されます。給与、口座、身分証番号、住所、パスワードは表示されません。', back: 'Project by Tirtaへ戻る', source: '正式な認証元', error: '認証を完了できませんでした。サーバーとSupabase接続を確認してください。',
  },
  ko: {
    title: 'ID 카드 확인', subtitle: 'Project by Tirta 공식 신원 확인', checking: '카드를 확인하는 중…',
    verified: 'ID 확인됨', inactive: 'ID 비활성', notFound: 'ID를 찾을 수 없음',
    name: '이름', id: '직원 ID', role: '직책', department: '부서', status: '상태',
    exitDate: '퇴사일', inactiveReason: '비활성 사유', noReason: '기록된 사유가 없습니다.', active: '활성', inactiveStatus: '비활성', checked: '확인 시간',
    secure: '이 페이지에는 안전한 확인 정보만 표시됩니다. 급여, 계좌, 주민등록 정보, 주소, 비밀번호는 표시되지 않습니다.', back: 'Project by Tirta로 돌아가기', source: '공식 확인 출처', error: '확인을 완료할 수 없습니다. 서버와 Supabase 연결을 확인해 주세요.',
  },
  zh: {
    title: '员工卡验证', subtitle: 'Project by Tirta 官方身份验证', checking: '正在验证卡片…',
    verified: 'ID 已验证', inactive: 'ID 已失效', notFound: '未找到 ID',
    name: '姓名', id: '员工 ID', role: '职位', department: '部门', status: '状态',
    exitDate: '离职日期', inactiveReason: '无效原因', noReason: '未记录原因。', active: '有效', inactiveStatus: '无效', checked: '验证时间',
    secure: '本页面只显示安全的验证信息。不会显示工资、银行账户、身份证号码、地址或密码。', back: '返回 Project by Tirta', source: '官方验证来源', error: '无法完成验证，请检查服务器和 Supabase 连接。',
  },
} as const;

export default function VerifyIdCard({ token, onHome }: Props) {
  const { lang } = useTranslation();
  const text = copy[lang] || copy.id;
  const [data, setData] = useState<VerificationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [checkedAt, setCheckedAt] = useState('');

  useEffect(() => {
    let active = true;
    const verify = async () => {
      setLoading(true);
      setError('');
      setCheckedAt(new Date().toLocaleString());
      const cleanToken = decodeURIComponent(token || '').trim();
      if (!cleanToken) {
        if (active) {
          setData(null);
          setLoading(false);
        }
        return;
      }
      try {
        const { data: result, error: rpcError } = await supabase.rpc('verify_employee_id_card', { p_token: cleanToken });
        if (rpcError) throw rpcError;
        if (active) {
          setData((result || null) as VerificationData | null);
          setLoading(false);
        }
      } catch (cause) {
        console.error('ID Card verification failed:', cause);
        if (active) {
          setData(null);
          setError(text.error);
          setLoading(false);
        }
      }
    };
    void verify();
    return () => { active = false; };
  }, [token, text.error]);

  const found = Boolean(data?.found);
  const activeEmployee = found && Boolean(data?.status_aktif);

  return (
    <main className="verify-id-page">
      <style>{`
        .verify-id-inactive-details{
          display:grid;
          gap:10px;
          margin-top:14px;
          padding:12px 14px;
          border:1px solid rgba(214,174,88,.45);
          border-radius:14px;
          background:rgba(25,18,8,.35);
        }
        .verify-id-inactive-details > div{
          display:flex;
          flex-direction:column;
          gap:3px;
        }
        .verify-id-inactive-details small{
          opacity:.72;
          font-size:11px;
        }
        .verify-id-inactive-details strong{
          color:#f7f9fc;
          font-size:13px;
          line-height:1.4;
          overflow-wrap:anywhere;
        }
      `}</style>
      <div className="verify-id-ambient verify-id-ambient-one" aria-hidden="true" />
      <div className="verify-id-ambient verify-id-ambient-two" aria-hidden="true" />
      <section className="verify-id-shell">
        <header className="verify-id-brand">
          <img src={moonLogo} alt="Project by Tirta" />
          <div><strong>{data?.company_name || 'Project by Tirta'}</strong><span>{text.subtitle}</span></div>
        </header>

        <div className="verify-id-card">
          <div className={`verify-id-status ${loading ? 'loading' : activeEmployee ? 'active' : found ? 'inactive' : 'not-found'}`}>
            <span className="verify-id-status-icon" aria-hidden="true">{loading ? '…' : activeEmployee ? '✓' : found ? '!' : '×'}</span>
            <div><small>{text.title}</small><h1>{loading ? text.checking : activeEmployee ? text.verified : found ? text.inactive : text.notFound}</h1></div>
          </div>

          {loading && <div className="verify-id-loading" aria-live="polite"><span /><span /><span /></div>}

          {!loading && error && <div className="verify-id-error" role="alert">{error}</div>}

          {!loading && !error && found && data && (
            <>
              <div className="verify-id-safe-badge"><span>✓</span>{text.source}</div>
              <div className="verify-id-details">
                <div><small>{text.name}</small><strong>{data.nama || '-'}</strong></div>
                <div><small>{text.id}</small><strong>{data.id_karyawan || '-'}</strong></div>
                <div><small>{text.role}</small><strong>{data.jabatan || '-'}</strong></div>
                <div><small>{text.department}</small><strong>{data.departemen || '-'}</strong></div>
                <div><small>{text.status}</small><strong className={data.status_aktif ? 'status-active' : 'status-inactive'}>{data.status_aktif ? text.active : text.inactiveStatus}</strong></div>
              </div>
              {!activeEmployee && (
                <div className="verify-id-inactive-details" role="status">
                  <div>
                    <small>{text.exitDate}</small>
                    <strong>{data.tanggal_keluar || '-'}</strong>
                  </div>
                  <div>
                    <small>{text.inactiveReason}</small>
                    <strong>{data.alasan_keluar || text.noReason}</strong>
                  </div>
                </div>
              )}
              <div className="verify-id-checked"><span>{text.checked}</span><strong>{checkedAt}</strong></div>
              <div className="verify-id-security">🔒 {text.secure}</div>
            </>
          )}

          {!loading && !error && !found && (
            <div className="verify-id-notfound-copy">
              <p>{text.notFound}</p>
              <small>{text.secure}</small>
            </div>
          )}

          <button type="button" className="verify-id-home-button" onClick={onHome}>{text.back}</button>
        </div>

        <footer className="verify-id-footer">Project by Tirta • ID Card Verification</footer>
      </section>
    </main>
  );
}
