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

type Props = { token: string; onHome: () => void };

const copy = {
  id: {
    title:'Verifikasi ID Card', subtitle:'Pemeriksaan identitas resmi Project by Tirta', checking:'Memverifikasi kartu…',
    verified:'IDENTITAS TERVERIFIKASI', inactive:'IDENTITAS TIDAK AKTIF', notFound:'IDENTITAS TIDAK DITEMUKAN',
    verifiedHint:'Kartu karyawan tercatat dan terverifikasi pada sistem resmi.', inactiveHint:'Data kartu ditemukan, tetapi status karyawan saat ini tidak aktif.',
    notFoundHint:'QR atau token verifikasi tidak dikenali oleh sistem resmi.',
    name:'Nama lengkap', id:'ID karyawan', role:'Jabatan', department:'Departemen', status:'Status',
    exitDate:'Tanggal keluar', inactiveReason:'Alasan tidak aktif', noReason:'Tidak ada alasan yang dicatat.',
    active:'AKTIF', inactiveStatus:'NONAKTIF', checked:'Waktu pemeriksaan',
    source:'Sumber verifikasi resmi',
    secure:'Data yang ditampilkan hanya data verifikasi yang aman. Gaji, rekening, NIK, alamat, password, dan data sensitif lainnya tidak ditampilkan.',
    back:'Kembali ke Project by Tirta', error:'Verifikasi belum dapat dilakukan. Pastikan server dan Supabase dapat diakses.',
    footer:'Project by Tirta • Verifikasi ID Card', validLabel:'Status identitas',
  },
  en: {
    title:'ID Card Verification', subtitle:'Official Project by Tirta identity check', checking:'Verifying card…',
    verified:'IDENTITY VERIFIED', inactive:'IDENTITY INACTIVE', notFound:'IDENTITY NOT FOUND',
    verifiedHint:'This employee card is registered and verified by the official system.', inactiveHint:'The card data was found, but the employee is currently inactive.',
    notFoundHint:'The QR code or verification token was not recognized by the official system.',
    name:'Full name', id:'Employee ID', role:'Position', department:'Department', status:'Status',
    exitDate:'Exit date', inactiveReason:'Reason for inactivity', noReason:'No reason recorded.',
    active:'ACTIVE', inactiveStatus:'INACTIVE', checked:'Checked at', source:'Official verification source',
    secure:'Only safe verification data is shown. Salary, bank account, national ID, address, password, and other sensitive data are never displayed.',
    back:'Back to Project by Tirta', error:'Verification could not be completed. Please check the server and Supabase connection.',
    footer:'Project by Tirta • ID Card Verification', validLabel:'Identity status',
  },
  ja: {
    title:'IDカード認証', subtitle:'Project by Tirta 正式本人確認', checking:'カードを確認しています…',
    verified:'本人確認済み', inactive:'IDは無効です', notFound:'IDが見つかりません',
    verifiedHint:'この社員証は正式なシステムに登録され、確認されています。', inactiveHint:'カード情報は確認できましたが、現在の社員ステータスは無効です。',
    notFoundHint:'QRコードまたは確認トークンを認識できませんでした。',
    name:'氏名', id:'社員ID', role:'役職', department:'部署', status:'状態',
    exitDate:'退職日', inactiveReason:'無効の理由', noReason:'理由は記録されていません。',
    active:'有効', inactiveStatus:'無効', checked:'確認日時', source:'正式な認証元',
    secure:'安全な確認情報のみ表示します。給与、口座、身分証番号、住所、パスワードは表示されません。',
    back:'Project by Tirtaへ戻る', error:'認証を完了できませんでした。サーバーとSupabase接続を確認してください。',
    footer:'Project by Tirta • ID Card Verification', validLabel:'本人確認状態',
  },
  ko: {
    title:'ID 카드 확인', subtitle:'Project by Tirta 공식 신원 확인', checking:'카드를 확인하는 중…',
    verified:'신원 확인 완료', inactive:'ID 비활성', notFound:'ID를 찾을 수 없음',
    verifiedHint:'이 직원 카드는 공식 시스템에 등록되어 확인되었습니다.', inactiveHint:'카드 정보는 확인되었지만 현재 직원 상태가 비활성입니다.',
    notFoundHint:'QR 코드 또는 확인 토큰을 공식 시스템에서 인식하지 못했습니다.',
    name:'이름', id:'직원 ID', role:'직책', department:'부서', status:'상태',
    exitDate:'퇴사일', inactiveReason:'비활성 사유', noReason:'기록된 사유가 없습니다.',
    active:'활성', inactiveStatus:'비활성', checked:'확인 시간', source:'공식 확인 출처',
    secure:'안전한 확인 정보만 표시됩니다. 급여, 계좌, 주민등록 정보, 주소, 비밀번호는 표시되지 않습니다.',
    back:'Project by Tirta로 돌아가기', error:'확인을 완료할 수 없습니다. 서버와 Supabase 연결을 확인해 주세요.',
    footer:'Project by Tirta • ID Card Verification', validLabel:'신원 상태',
  },
  zh: {
    title:'员工卡验证', subtitle:'Project by Tirta 官方身份验证', checking:'正在验证卡片…',
    verified:'身份已验证', inactive:'身份已失效', notFound:'未找到身份',
    verifiedHint:'此员工卡已登记，并通过官方系统验证。', inactiveHint:'已找到卡片信息，但员工当前处于非激活状态。',
    notFoundHint:'官方系统未识别此二维码或验证令牌。',
    name:'姓名', id:'员工 ID', role:'职位', department:'部门', status:'状态',
    exitDate:'离职日期', inactiveReason:'无效原因', noReason:'未记录原因。',
    active:'有效', inactiveStatus:'无效', checked:'验证时间', source:'官方验证来源',
    secure:'本页面只显示安全的验证信息。不会显示工资、银行账户、身份证号码、地址或密码。',
    back:'返回 Project by Tirta', error:'无法完成验证，请检查服务器和 Supabase 连接。',
    footer:'Project by Tirta • ID Card Verification', validLabel:'身份状态',
  },
} as const;

function formatCheckedAt(date: Date, lang: keyof typeof copy) {
  const locale = lang === 'id' ? 'id-ID' : lang === 'ja' ? 'ja-JP' : lang === 'ko' ? 'ko-KR' : lang === 'zh' ? 'zh-CN' : 'en-US';
  try {
    return new Intl.DateTimeFormat(locale, { dateStyle:'medium', timeStyle:'short', timeZone:'Asia/Jakarta' }).format(date);
  } catch {
    return date.toLocaleString();
  }
}

export default function VerifyIdCard({ token, onHome }: Props) {
  const { lang } = useTranslation();
  const currentLang = (lang in copy ? lang : 'id') as keyof typeof copy;
  const text = copy[currentLang];
  const [data, setData] = useState<VerificationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [checkedAt, setCheckedAt] = useState('');

  useEffect(() => {
    let active = true;
    const verify = async () => {
      setLoading(true);
      setError('');
      setCheckedAt(formatCheckedAt(new Date(), currentLang));
      const cleanToken = decodeURIComponent(token || '').trim();
      if (!cleanToken) {
        if (active) { setData(null); setLoading(false); }
        return;
      }
      try {
        const { data: result, error: rpcError } = await supabase.rpc('verify_employee_id_card', { p_token: cleanToken });
        if (rpcError) throw rpcError;
        if (active) { setData((result || null) as VerificationData | null); setLoading(false); }
      } catch (cause) {
        console.error('ID Card verification failed:', cause);
        if (active) { setData(null); setError(text.error); setLoading(false); }
      }
    };
    void verify();
    return () => { active = false; };
  }, [token, currentLang, text.error]);

  const found = Boolean(data?.found);
  const activeEmployee = found && Boolean(data?.status_aktif);
  const state = loading ? 'loading' : activeEmployee ? 'active' : found ? 'inactive' : 'not-found';

  return (
    <main className="verify-id-page">
      <style>{`
        .verify-id-page{min-height:100vh;display:flex;justify-content:center;padding:28px 18px 34px;box-sizing:border-box;color:#17181b;background:radial-gradient(circle at 8% 0%,rgba(190,28,35,.12),transparent 27%),radial-gradient(circle at 96% 8%,rgba(17,17,17,.08),transparent 25%),#f6f7f9;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        .verify-id-page *{box-sizing:border-box}
        .verify-id-wrap{width:min(100%,760px);margin:auto}
        .verify-id-brandbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}
        .verify-id-brand{display:flex;align-items:center;gap:12px;min-width:0}
        .verify-id-brand img{width:42px;height:42px;object-fit:contain;flex:none}
        .verify-id-brand-copy strong{display:block;font-size:15px;line-height:1.2;letter-spacing:.01em}
        .verify-id-brand-copy span{display:block;margin-top:4px;color:#6f737b;font-size:12px;line-height:1.35}
        .verify-id-official{display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #e1e4e8;border-radius:999px;background:rgba(255,255,255,.82);color:#4c5058;font-size:11px;font-weight:800;white-space:nowrap}
        .verify-id-official i{width:7px;height:7px;border-radius:50%;background:#17181b;display:inline-block}
        .verify-id-main{overflow:hidden;border:1px solid #e0e3e7;border-radius:26px;background:rgba(255,255,255,.96);box-shadow:0 22px 60px rgba(24,28,35,.10)}
        .verify-id-hero{padding:28px 28px 24px;border-bottom:1px solid #eceef1}
        .verify-id-state{display:flex;align-items:flex-start;gap:16px}
        .verify-id-state-icon{width:54px;height:54px;border-radius:16px;display:grid;place-items:center;flex:none;font-size:24px;font-weight:800;border:1px solid transparent}
        .verify-id-state.active .verify-id-state-icon{color:#087a45;background:#eaf8f0;border-color:#c6ebd5}
        .verify-id-state.inactive .verify-id-state-icon{color:#9a5a00;background:#fff5df;border-color:#f1ddb0}
        .verify-id-state.not-found .verify-id-state-icon{color:#a01f26;background:#fff0f1;border-color:#f1cbd0}
        .verify-id-state.loading .verify-id-state-icon{color:#444950;background:#f0f2f4;border-color:#e1e4e7}
        .verify-id-eyebrow{margin:0 0 6px;color:#747982;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
        .verify-id-state.active .verify-id-title{color:#111827 !important}
        .verify-id-title{margin:0;font-size:clamp(24px,4vw,34px);line-height:1.05;letter-spacing:-.025em;color:#111827 !important}
        .verify-id-subtitle{margin:10px 0 0;color:#5e636b;font-size:14px;line-height:1.55}
        .verify-id-pill{display:inline-flex;align-items:center;gap:7px;margin-top:16px;padding:8px 11px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:.03em}
        .verify-id-pill.active{color:#087a45;background:#eaf8f0}.verify-id-pill.inactive{color:#8a5300;background:#fff5df}.verify-id-pill.not-found{color:#a01f26;background:#fff0f1}.verify-id-pill.loading{color:#4e535b;background:#f0f2f4}
        .verify-id-content{padding:24px 28px 26px}
        .verify-id-safe{display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid #e4e7ea;border-radius:14px;background:#fafbfc;color:#41454c;font-size:12px;font-weight:700}
        .verify-id-safe-mark{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#15171a;color:#fff;font-size:12px;flex:none}
        .verify-id-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;margin-top:18px;overflow:hidden;border:1px solid #e8eaed;border-radius:18px;background:#e8eaed}
        .verify-id-field{min-width:0;padding:16px;background:#fff}.verify-id-field small{display:block;color:#7b8088;font-size:11px;line-height:1.3;margin-bottom:6px}.verify-id-field strong{display:block;color:#15171a;font-size:14px;line-height:1.45;overflow-wrap:anywhere}.verify-id-field strong.active{color:#087a45}.verify-id-field strong.inactive{color:#9a5a00}
        .verify-id-inactive{margin-top:18px;padding:16px;border:1px solid #f0d9a2;border-radius:18px;background:#fffaf0}.verify-id-inactive-title{display:flex;align-items:center;gap:9px;color:#855200;font-size:12px;font-weight:800;letter-spacing:.03em;text-transform:uppercase}.verify-id-inactive-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:14px}
        .verify-id-check{display:flex;justify-content:space-between;gap:16px;padding:15px 0 0;margin-top:17px;border-top:1px solid #eceef1;font-size:12px}.verify-id-check span{color:#777c84}.verify-id-check strong{color:#22252a;text-align:right}
        .verify-id-security{margin-top:15px;color:#6c7179;font-size:11px;line-height:1.55}
        .verify-id-error,.verify-id-empty{margin-top:18px;padding:18px;border:1px solid #efd0d4;border-radius:18px;background:#fff4f5;color:#7d232a}.verify-id-empty strong{display:block;margin-bottom:5px;color:#651b21;font-size:14px}.verify-id-empty p{margin:0;color:#7c6266;font-size:13px;line-height:1.55}
        .verify-id-loading{display:grid;gap:10px;margin-top:18px}.verify-id-loading i{display:block;height:15px;border-radius:10px;background:linear-gradient(90deg,#eef0f2 25%,#f8f9fa 50%,#eef0f2 75%);background-size:220% 100%;animation:verify-id-shimmer 1.3s ease-in-out infinite}.verify-id-loading i:nth-child(2){width:82%}.verify-id-loading i:nth-child(3){width:65%}
        @keyframes verify-id-shimmer{0%{background-position:200% 0}100%{background-position:-20% 0}}
        .verify-id-actions{padding:0 28px 28px}.verify-id-home{width:100%;min-height:48px;border:0;border-radius:14px;background:#15171a;color:#fff;font:inherit;font-size:13px;font-weight:800;cursor:pointer;transition:transform .16s ease,opacity .16s ease}.verify-id-home:hover{transform:translateY(-1px)}.verify-id-home:active{transform:translateY(0)}
        .verify-id-footer{padding:16px 4px 0;text-align:center;color:#858a92;font-size:11px}
        @media (max-width:640px){.verify-id-page{padding:16px 12px 24px}.verify-id-brandbar{align-items:flex-start}.verify-id-official{display:none}.verify-id-main{border-radius:20px}.verify-id-hero{padding:22px 18px 20px}.verify-id-content{padding:18px}.verify-id-actions{padding:0 18px 20px}.verify-id-grid,.verify-id-inactive-grid{grid-template-columns:1fr}.verify-id-field{padding:14px}.verify-id-check{flex-direction:column;gap:5px}.verify-id-check strong{text-align:left}}
        @media (prefers-reduced-motion:reduce){.verify-id-loading i{animation:none}.verify-id-home{transition:none}}
      `}</style>

      <div className="verify-id-wrap">
        <header className="verify-id-brandbar">
          <div className="verify-id-brand">
            <img src={moonLogo} alt="Project by Tirta" />
            <div className="verify-id-brand-copy">
              <strong>{data?.company_name || 'Project by Tirta'}</strong>
              <span>{text.subtitle}</span>
            </div>
          </div>
          <div className="verify-id-official"><i aria-hidden="true" />{text.source}</div>
        </header>

        <section className="verify-id-main">
          <div className={`verify-id-hero verify-id-state ${state}`}>
            <div className="verify-id-state-icon" aria-hidden="true">{loading ? '…' : activeEmployee ? '✓' : found ? '!' : '×'}</div>
            <div>
              <p className="verify-id-eyebrow">{text.title}</p>
              <h1 className="verify-id-title">{loading ? text.checking : activeEmployee ? text.verified : found ? text.inactive : text.notFound}</h1>
              <p className="verify-id-subtitle">{loading ? text.checking : activeEmployee ? text.verifiedHint : found ? text.inactiveHint : text.notFoundHint}</p>
              <span className={`verify-id-pill ${state}`}>{loading ? '…' : activeEmployee ? '✓' : found ? '!' : '×'} {loading ? text.checked : activeEmployee ? text.active : found ? text.inactiveStatus : text.notFound}</span>
            </div>
          </div>

          <div className="verify-id-content">
            {loading && <div className="verify-id-loading" aria-live="polite"><i/><i/><i/></div>}

            {!loading && error && <div className="verify-id-error" role="alert"><strong>{text.error}</strong></div>}

            {!loading && !error && found && data && (
              <>
                <div className="verify-id-safe"><span className="verify-id-safe-mark">✓</span><span>{text.source}</span></div>

                <div className="verify-id-grid">
                  <div className="verify-id-field"><small>{text.name}</small><strong>{data.nama || '-'}</strong></div>
                  <div className="verify-id-field"><small>{text.id}</small><strong>{data.id_karyawan || '-'}</strong></div>
                  <div className="verify-id-field"><small>{text.role}</small><strong>{data.jabatan || '-'}</strong></div>
                  <div className="verify-id-field"><small>{text.department}</small><strong>{data.departemen || '-'}</strong></div>
                  <div className="verify-id-field"><small>{text.status}</small><strong className={data.status_aktif ? 'active' : 'inactive'}>{data.status_aktif ? text.active : text.inactiveStatus}</strong></div>
                  <div className="verify-id-field"><small>{text.validLabel}</small><strong>{data.status_karyawan || (data.status_aktif ? text.active : text.inactiveStatus)}</strong></div>
                </div>

                {!activeEmployee && (
                  <div className="verify-id-inactive" role="status">
                    <div className="verify-id-inactive-title"><span aria-hidden="true">!</span>{text.inactive}</div>
                    <div className="verify-id-inactive-grid">
                      <div className="verify-id-field"><small>{text.exitDate}</small><strong>{data.tanggal_keluar || '-'}</strong></div>
                      <div className="verify-id-field"><small>{text.inactiveReason}</small><strong>{data.alasan_keluar || text.noReason}</strong></div>
                    </div>
                  </div>
                )}

                <div className="verify-id-check"><span>{text.checked}</span><strong>{checkedAt}</strong></div>
                <div className="verify-id-security">🔒 {text.secure}</div>
              </>
            )}

            {!loading && !error && !found && <div className="verify-id-empty"><strong>{text.notFound}</strong><p>{text.notFoundHint}</p></div>}
          </div>

          <div className="verify-id-actions"><button type="button" className="verify-id-home" onClick={onHome}>{text.back}</button></div>
        </section>

        <footer className="verify-id-footer">{text.footer}</footer>
      </div>
    </main>
  );
}
