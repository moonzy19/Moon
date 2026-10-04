import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../../../lib/supabase/client';
import { CardArtwork } from '../../admin/employee/IDCardModule';
import moonLogo from '../../../assets/moon-logo.svg';

type Employee = {
  id: string;
  id_karyawan: string;
  nama: string;
  email: string;
  jabatan?: string | null;
  departemen?: string | null;
  status_karyawan?: string | null;
  status_aktif?: boolean | null;
  tanggal_masuk?: string | null;
  tanggal_lahir?: string | null;
  foto_url?: string | null;
  foto?: string | null;
  photo_url?: string | null;
  bpjs_kesehatan?: string | null;
  bpjs_ketenagakerjaan?: string | null;
  bpjs_kesehatan_card_path?: string | null;
  bpjs_ketenagakerjaan_card_path?: string | null;
};

type ServiceKind = 'jobs' | 'bpjs' | 'idcard' | 'help';
type Orientation = 'vertical' | 'horizontal';
type Side = 'front' | 'back';

const CARD_DESIGN = {
  theme: 'moon',
  companyName: 'Project by Tirta',
  logoDataUrl: '',
  showQr: true,
  showBarcode: true,
};

const blobToDataUrl = (blob: Blob) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result || ''));
  reader.onerror = () => reject(new Error('Gagal membaca file gambar'));
  reader.readAsDataURL(blob);
});

function JobsPage() {
  type JobOpening = {
    id: string;
    opening_no?: string | null;
    posisi?: string | null;
    departemen?: string | null;
    lokasi?: string | null;
    employment_type?: string | null;
    headcount?: number | null;
    salary_min?: number | null;
    salary_max?: number | null;
    description?: string | null;
    requirements?: string | null;
    status?: string | null;
    created_at?: string | null;
  };

  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      setError('');
      const { data, error: queryError } = await supabase
        .from('hris_recruitment_openings_v25')
        .select('*')
        .eq('status', 'Open')
        .order('created_at', { ascending: false });
      if (!active) return;
      if (queryError) setError(queryError.message);
      setJobs((data || []) as JobOpening[]);
      setLoading(false);
    };
    void load();
    const timer = window.setInterval(() => void load(), 30000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  const money = (value: number | null | undefined) => typeof value === 'number' && value > 0
    ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
    : '-';

  return <section className="portal-service-page portal-service-jobs">
    <div className="portal-service-heading"><div><span className="portal-eyebrow">LOWONGAN KERJA</span><h1>Lowongan Kerja</h1><p>Kesempatan kerja yang sedang dibuka oleh HR untuk internal perusahaan.</p></div><span className="status-badge">{jobs.length} aktif</span></div>
    {error && <div className="portal-error">{error}</div>}
    {loading ? <div className="portal-card portal-service-empty"><strong>Memuat lowongan...</strong><span>Data lowongan sedang diambil dari HR.</span></div> : jobs.length === 0 ? <div className="portal-card portal-service-empty"><strong>Belum ada lowongan aktif</strong><span>Lowongan yang dibuka HR akan muncul otomatis di sini.</span></div> : <div className="portal-service-list">
      {jobs.map(job => <article className="portal-card portal-job-card" key={job.id}>
        <div className="portal-service-card-head"><div><span className="portal-service-badge">OPEN</span><h2>{job.posisi || 'Posisi tersedia'}</h2></div><span className="portal-job-code">{job.opening_no || ''}</span></div>
        <div className="portal-job-meta"><span>Departemen: {job.departemen || 'Umum'}</span><span>Lokasi: {job.lokasi || '-'}</span><span>Tipe: {job.employment_type || '-'}</span><span>Headcount: {job.headcount || 1}</span></div>
        <div className="portal-job-salary">{money(job.salary_min)} — {money(job.salary_max)}</div>
        {job.description ? <p>{job.description}</p> : null}
        {job.requirements ? <div className="portal-job-requirements"><strong>Persyaratan</strong><div>{job.requirements}</div></div> : null}
      </article>)}
    </div>}
  </section>;
}

function BpjsPage({ employee }: { employee: Employee }) {
  const [urls, setUrls] = useState({ kesehatan: '', ketenagakerjaan: '' });
  const [callCenter, setCallCenter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      const next = { kesehatan: '', ketenagakerjaan: '' };
      for (const [key, path] of [['kesehatan', employee.bpjs_kesehatan_card_path], ['ketenagakerjaan', employee.bpjs_ketenagakerjaan_card_path]] as const) {
        if (!path) continue;
        const { data, error } = await supabase.storage.from('bpjs-cards').createSignedUrl(path, 900);
        if (!error && data?.signedUrl) next[key] = data.signedUrl;
      }
      const { data: settings } = await supabase.from('hris_company_settings').select('bpjs_call_center').eq('id', 1).maybeSingle();
      if (!active) return;
      setUrls(next);
      setCallCenter(String(settings?.bpjs_call_center || ''));
      setLoading(false);
    };
    void load();
    return () => { active = false; };
  }, [employee.bpjs_kesehatan_card_path, employee.bpjs_ketenagakerjaan_card_path]);

  const download = (url: string, filename: string) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const item = (title: string, number: string | null | undefined, url: string, filename: string) => <article className="portal-card portal-bpjs-card">
    <div className="portal-service-card-head"><div><span className="portal-service-badge">BPJS</span><h2>{title}</h2></div><span className="status-badge">{number ? 'Terdaftar' : 'Belum diisi'}</span></div>
    <div className="portal-bpjs-number">{number || 'Nomor BPJS belum diisi HR.'}</div>
    {url ? <><img className="portal-bpjs-preview" src={url} alt={'Kartu ' + title} /><button type="button" className="portal-primary" onClick={() => download(url, filename)}>Download Kartu</button></> : <div className="portal-service-empty compact"><span>{loading ? 'Memuat kartu...' : 'Kartu belum diunggah HR.'}</span></div>}
  </article>;

  return <section className="portal-service-page">
    <div className="portal-service-heading"><div><span className="portal-eyebrow">BPJS</span><h1>Kartu &amp; Data BPJS</h1><p>Data hanya ditampilkan untuk akun karyawan yang sedang masuk.</p></div></div>
    <div className="portal-service-identity"><div><small>Nama</small><strong>{employee.nama || '-'}</strong></div><div><small>Tanggal Lahir</small><strong>{employee.tanggal_lahir || '-'}</strong></div><div><small>ID Karyawan</small><strong>{employee.id_karyawan || '-'}</strong></div></div>
    <div className="portal-service-list portal-bpjs-list">
      {item('BPJS Kesehatan', employee.bpjs_kesehatan, urls.kesehatan, 'BPJS-Kesehatan-' + employee.id_karyawan)}
      {item('BPJS Ketenagakerjaan', employee.bpjs_ketenagakerjaan, urls.ketenagakerjaan, 'BPJS-Ketenagakerjaan-' + employee.id_karyawan)}
    </div>
    {callCenter ? <div className="portal-card portal-service-callout"><div><small>Call Center BPJS</small><strong>{callCenter}</strong></div><a className="portal-secondary" href={'tel:' + callCenter}>Hubungi Call Center</a></div> : null}
  </section>;
}

function WebIdCardPage({ employee }: { employee: Employee }) {
  const [orientation, setOrientation] = useState<Orientation>(() => {
    try { return localStorage.getItem('project-tirta-id-card-orientation-v1') === 'horizontal' ? 'horizontal' : 'vertical'; } catch { return 'vertical'; }
  });
  const [side, setSide] = useState<Side>('front');
  const [photo, setPhoto] = useState('');
  const [token, setToken] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let active = true;
    const candidates = [String(employee.foto_url || '').trim(), String(employee.foto || '').trim(), String(employee.photo_url || '').trim(), employee.id ? employee.id + '/avatar.jpg' : '', employee.id_karyawan ? employee.id_karyawan + '/avatar.jpg' : ''].filter(Boolean);
    const normalizePath = (value: string) => {
      const match = value.match(/\/storage\/v1\/object\/(?:public|sign|authenticated)\/profile-photos\/(.+)$/i);
      if (match) return decodeURIComponent(match[1].split('?')[0]);
      return value.replace(/^profile-photos\//, '').split('?')[0];
    };
    const load = async () => {
      for (const candidate of candidates) {
        if (!active) return;
        try {
          if (/^data:image\//i.test(candidate)) { setPhoto(candidate); return; }
          if (/^https?:\/\//i.test(candidate)) {
            const response = await fetch(candidate);
            if (response.ok) { setPhoto(await blobToDataUrl(await response.blob())); return; }
          }
          const path = normalizePath(candidate);
          const downloaded = await supabase.storage.from('profile-photos').download(path);
          if (!downloaded.error && downloaded.data) { setPhoto(await blobToDataUrl(downloaded.data)); return; }
          const signed = await supabase.storage.from('profile-photos').createSignedUrl(path, 900);
          if (!signed.error && signed.data?.signedUrl) {
            const response = await fetch(signed.data.signedUrl);
            if (response.ok) { setPhoto(await blobToDataUrl(await response.blob())); return; }
          }
        } catch {
          // Try the next candidate.
        }
      }
    };
    void load();
    return () => { active = false; };
  }, [employee.foto_url, employee.foto, employee.photo_url, employee.id, employee.id_karyawan]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const { data } = await supabase.from('hris_id_card_tokens').select('token').eq('id_karyawan', employee.id_karyawan).is('revoked_at', null).maybeSingle();
        if (active) setToken(String(data?.token || ''));
      } catch { setToken(''); }
    };
    void load();
    return () => { active = false; };
  }, [employee.id_karyawan]);

  const frontSvg = useMemo(() => CardArtwork({ employee: employee as any, side: 'front', design: CARD_DESIGN as any, logoUrl: moonLogo, photoOverride: photo, verificationToken: token, orientation }), [employee, orientation, photo, token]);
  const backSvg = useMemo(() => CardArtwork({ employee: employee as any, side: 'back', design: CARD_DESIGN as any, logoUrl: moonLogo, photoOverride: photo, verificationToken: token, orientation }), [employee, orientation, photo, token]);
  const svg = side === 'front' ? frontSvg : backSvg;
  const width = orientation === 'vertical' ? 540 : 856;
  const height = orientation === 'vertical' ? 856 : 540;

  const svgToUrl = (value: string) => URL.createObjectURL(new Blob([value], { type: 'image/svg+xml;charset=utf-8' }));
  const svgToPng = async (value: string) => {
    const image = new Image();
    const url = svgToUrl(value);
    try {
      await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error('Render kartu gagal')); image.src = url; });
      const canvas = document.createElement('canvas');
      canvas.width = width * 2;
      canvas.height = height * 2;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas tidak tersedia');
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    } finally { URL.revokeObjectURL(url); }
  };

  const buildPdf = async () => {
    const [{ jsPDF }] = await Promise.all([import('jspdf')]);
    const [frontPng, backPng] = await Promise.all([svgToPng(frontSvg), svgToPng(backSvg)]);
    const mmW = orientation === 'vertical' ? 54 : 85.6;
    const mmH = orientation === 'vertical' ? 85.6 : 54;
    const pdf = new jsPDF({ orientation: orientation === 'vertical' ? 'portrait' : 'landscape', unit: 'mm', format: [mmW, mmH], compress: true });
    pdf.addImage(frontPng, 'PNG', 0, 0, mmW, mmH, 'FRONT', 'FAST');
    pdf.addPage([mmW, mmH], orientation === 'vertical' ? 'portrait' : 'landscape');
    pdf.addImage(backPng, 'PNG', 0, 0, mmW, mmH, 'BACK', 'FAST');
    pdf.save('ID-CARD-' + employee.id_karyawan + '-' + orientation + '.pdf');
  };

  const printCard = () => {
    const url = svgToUrl(svg);
    const popup = window.open('', '_blank', 'noopener,noreferrer,width=900,height=900');
    if (!popup) { setMessage('Popup diblokir browser. Izinkan popup untuk mencetak ID Card.'); URL.revokeObjectURL(url); return; }
    popup.document.write('<!doctype html><html><head><title>ID Card</title><style>body{margin:0;background:#fff;display:grid;place-items:center;min-height:100vh}img{max-width:92vw;max-height:92vh}</style></head><body><img src="' + url + '" alt="ID Card"/></body></html>');
    popup.document.close();
    popup.focus();
    popup.onload = () => { popup.print(); window.setTimeout(() => popup.close(), 600); URL.revokeObjectURL(url); };
  };

  const downloadPng = async (which: Side) => {
    setBusy(true); setMessage('');
    try {
      const png = await svgToPng(which === 'front' ? frontSvg : backSvg);
      const link = document.createElement('a');
      link.href = png; link.download = 'ID-CARD-' + employee.id_karyawan + '-' + orientation + '-' + which + '.png';
      document.body.appendChild(link); link.click(); link.remove();
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Gagal membuat PNG'); }
    finally { setBusy(false); }
  };

  return <section className="portal-service-page portal-id-card-page">
    <div className="portal-service-heading"><div><span className="portal-eyebrow">ID CARD</span><h1>Kartu Identitas Karyawan</h1><p>{employee.nama} · {employee.id_karyawan}</p></div><div className="portal-service-switch"><button type="button" className={orientation === 'vertical' ? 'active' : ''} onClick={() => { setOrientation('vertical'); localStorage.setItem('project-tirta-id-card-orientation-v1', 'vertical'); }}>↕ Vertikal</button><button type="button" className={orientation === 'horizontal' ? 'active' : ''} onClick={() => { setOrientation('horizontal'); localStorage.setItem('project-tirta-id-card-orientation-v1', 'horizontal'); }}>↔ Horizontal</button></div></div>
    <div className="portal-card portal-id-card-shell">
      <div className="portal-service-meta"><span>{orientation === 'vertical' ? '54 × 85,6 mm' : '85,6 × 54 mm'}</span><span>{photo ? 'Foto siap' : 'Tanpa foto'}</span><span>{token ? 'QR verifikasi aktif' : 'QR verifikasi menunggu token'}</span></div>
      <div className="portal-service-switch portal-id-card-side-switch"><button type="button" className={side === 'front' ? 'active' : ''} onClick={() => setSide('front')}>DEPAN</button><button type="button" className={side === 'back' ? 'active' : ''} onClick={() => setSide('back')}>BELAKANG</button></div>
      <div className={orientation === 'vertical' ? 'portal-id-card-preview vertical' : 'portal-id-card-preview'}><div dangerouslySetInnerHTML={{ __html: svg }} /></div>
      {message && <div className="portal-info">{message}</div>}
      <div className="portal-id-card-actions"><button type="button" className="portal-primary" disabled={busy} onClick={() => void buildPdf()}>Download ID Card</button><button type="button" className="portal-secondary" onClick={printCard}>Bagikan / Cetak</button><button type="button" className="portal-secondary" disabled={busy} onClick={() => void downloadPng('front')}>PNG Depan</button><button type="button" className="portal-secondary" disabled={busy} onClick={() => void downloadPng('back')}>PNG Belakang</button></div>
    </div>
  </section>;
}

function HelpPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [callCenter, setCallCenter] = useState('');

  useEffect(() => {
    let active = true;
    void supabase.from('hris_company_settings').select('bpjs_call_center').eq('id', 1).maybeSingle().then(({ data }) => { if (active) setCallCenter(String(data?.bpjs_call_center || '')); });
    return () => { active = false; };
  }, []);

  const ask = async () => {
    const text = question.trim();
    if (!text) return;
    setLoading(true); setAnswer('');
    const { data, error } = await supabase.functions.invoke('employee-ai', { body: { message: text } });
    if (error || !data?.answer) { setAnswer(error?.message || data?.error || 'Asisten AI belum dapat merespons.'); setLoading(false); return; }
    setAnswer(String(data.answer));
    if (data.call_center) setCallCenter(String(data.call_center));
    setLoading(false);
  };

  return <section className="portal-service-page portal-help-page">
    <div className="portal-service-heading"><div><span className="portal-eyebrow">BANTUAN</span><h1>AI Assistant</h1><p>Tanyakan cara menggunakan fitur HRIS, termasuk cuti, absensi, jadwal, dan slip gaji.</p></div></div>
    <div className="portal-grid">
      <div className="portal-card info-card portal-help-card"><label className="portal-service-field"><span>Pertanyaan</span><textarea value={question} maxLength={3000} placeholder="Contoh: bagaimana cara mengajukan cuti?" onChange={event => setQuestion(event.target.value)} /></label><div className="portal-service-field-meta"><span>{question.length}/3000</span></div><button type="button" className="portal-primary" disabled={loading || !question.trim()} onClick={() => void ask()}>{loading ? 'Memproses...' : 'Tanyakan AI'}</button></div>
      <div className="portal-card info-card"><div className="card-title"><div><span className="card-kicker">AI ASSISTANT</span><h2>Jawaban</h2></div></div>{answer ? <div className="portal-help-answer"><strong>Jawaban AI</strong><p>{answer}</p></div> : <div className="portal-service-empty compact"><span>Jawaban AI akan muncul di sini setelah Anda mengirim pertanyaan.</span></div>}</div>
    </div>
    <div className="portal-card portal-service-callout"><div><small>Bantuan manusia</small><strong>Butuh bantuan HR?</strong><span>Untuk kebutuhan yang memerlukan Call Center.</span></div>{callCenter ? <a className="portal-secondary" href={'tel:' + callCenter}>☎ Hubungi Call Center</a> : <small>Nomor Call Center belum diatur HR.</small>}</div>
  </section>;
}

export default function EmployeeWebServices({ kind, employee }: { kind: ServiceKind; employee: Employee }) {
  if (kind === 'jobs') return <JobsPage />;
  if (kind === 'bpjs') return <BpjsPage employee={employee} />;
  if (kind === 'idcard') return <WebIdCardPage employee={employee} />;
  return <HelpPage />;
}
