import React, { type RefObject } from 'react';
import { useTranslation } from '../../../locales/LanguageContext';

type Employee = { id:string; id_karyawan:string; nama:string; email:string; jabatan?:string|null; departemen?:string|null };
type Tab='home'|'announcements'|'attendance'|'leave'|'overtime'|'schedule'|'payslip'|'feedback'|'profile';


function Icon({name,size=20,strokeWidth=1.8}:{name:string;size?:number;strokeWidth?:number}){
  const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,'aria-hidden':true};
  const paths:Record<string,React.ReactNode>={
    attendance:<><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></>,
    profile:<><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c.8-3.2 3.1-4.8 6.5-4.8s5.7 1.6 6.5 4.8"/></>,
    payroll:<><rect x="4" y="5" width="16" height="14" rx="2.2"/><path d="M8 9h8M8 13h4M15 13h1M8 16h7"/></>,
    report:<><path d="M5 19V9M12 19V5M19 19v-7"/><path d="M3.5 19.5h17"/></>,
    leave:<><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 8v4l2.5 2"/></>,
    overtime:<><path d="M7 3.8h10M7 20.2h10"/><path d="M8.2 5.2c0 3.1 3.8 4.1 3.8 6.8s-3.8 3.7-3.8 6.8M15.8 5.2c0 3.1-3.8 4.1-3.8 6.8s3.8 3.7 3.8 6.8"/></>,
    schedule:<><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></>,
    feedback:<><path d="M5 6.5h14v9H9l-4 3v-12Z"/><path d="M8.5 10.5h7M8.5 13h4"/></>,
    location:<><path d="M20 10.5c0 4.2-8 10-8 10s-8-5.8-8-10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.5" r="2.5"/></>,
    clock:<><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.2 1.8"/></>,
    camera:<><rect x="4" y="7" width="16" height="12" rx="2.5"/><path d="M8 7l1.3-2h5.4L16 7"/><circle cx="12" cy="13" r="3"/></>,
    check:<><circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.3 2.3 4.8-5"/></>,
    spark:<><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/><path d="m18.5 16 .6 2.1L21 19l-1.9.6L18.5 22l-.6-2.4L16 19l1.9-.9.6-2.1Z"/></>,
    home:<><path d="m4 11 8-7 8 7"/><path d="M6.5 10v9h11v-9M10 19v-5h4v5"/></>,
    activity:<><path d="M4 12h3l2-5 4 10 2-5h5"/></>,
    menu:<><path d="M6 6h4v4H6zM14 6h4v4h-4zM6 14h4v4H6zM14 14h4v4h-4z"/></>,
  };
  return <svg {...common}>{paths[name] ?? paths.spark}</svg>;
}

type Props={
  employee:Employee;
  stats:{hadir:number;cuti:number;latest:any};
  todayAtt:any;
  geo:any; selfie:string; cameraOn:boolean; cameraReady:boolean; cameraError:string;
  videoRef:RefObject<HTMLVideoElement|null>; geoLoading:boolean; clockBusy:boolean;
  canClockIn:boolean; canClockOut:boolean;
  getGeo:()=>void; startCamera:()=>Promise<void>; takeSelfie:()=>void;
  clockIn:()=>void; clockOut:()=>void; onClearCameraError:()=>void;
  setTab:React.Dispatch<React.SetStateAction<Tab>>;
};

const money=(n:number,locale='id-ID')=>new Intl.NumberFormat(locale,{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n||0);

export default function ProjectTirtaHome({
  employee,stats,todayAtt,geo,selfie,cameraOn,cameraReady,cameraError,videoRef,geoLoading,
  getGeo,startCamera,takeSelfie,onClearCameraError,setTab,
}:Props){
  const {t,lang}=useTranslation();
  const locale=lang==='id'?'id-ID':lang==='ja'?'ja-JP':lang==='ko'?'ko-KR':'zh-CN';
  const tr=(key:string,fallback:string)=>{const v=t(key);return v===key?fallback:v};
  const menu=[
    {key:'attendance',icon:'attendance',title:tr('attendance','Absensi'),sub:'GPS & Selfie',action:()=>setTab('attendance')},
    {key:'profile',icon:'profile',title:tr('employee','Profil'),sub:'Data & Profil',action:()=>setTab('profile')},
    {key:'payslip',icon:'payroll',title:tr('payroll_payslip','Payroll'),sub:'Gaji & Slip',action:()=>setTab('payslip')},
    {key:'history',icon:'report',title:'Laporan',sub:'Riwayat Absensi',action:()=>setTab('attendance')},
    {key:'leave',icon:'leave',title:tr('leave','Cuti'),sub:'Izin & Sakit',action:()=>setTab('leave')},
    {key:'overtime',icon:'overtime',title:tr('overtime','Lembur'),sub:'Pengajuan',action:()=>setTab('overtime')},
    {key:'schedule',icon:'schedule',title:tr('work_schedule','Jadwal'),sub:'Shift Kerja',action:()=>setTab('schedule')},
    {key:'feedback',icon:'feedback',title:tr('feedback_inbox','Feedback'),sub:'Kotak Saran',action:()=>setTab('feedback')},
  ];
  const goMenu=()=>document.getElementById('project-tirta-feature-grid')?.scrollIntoView({behavior:'smooth',block:'start'});
  const goActivity=()=>setTab('attendance');
  return <>
    <section className="pt-home-hero">
      <div className="pt-home-hero-copy">
        <span className="pt-home-eyebrow">LAYANAN KARYAWAN · V12</span>
        <h1>{tr('welcome','Selamat pagi')}, {employee.nama}</h1>
        <p>{tr('portal_services_desc','Absensi aman, layanan HR, payroll, dan pengajuan dalam satu portal.')}</p>
        <div className="pt-home-date">{new Intl.DateTimeFormat(locale,{dateStyle:'full'}).format(new Date())}</div>
      </div>
      <div className="pt-home-orbit" aria-hidden="true"><span className="pt-planet pt-planet-a"/><span className="pt-planet pt-planet-b"/><span className="pt-ring"/></div>
    </section>

    <section className="pt-attendance-summary">
      <div className="pt-summary-card"><div className="pt-summary-icon"><Icon name="location" size={21}/></div><div><span>{tr('attendance_today','Absensi Hari Ini')}</span><strong>{todayAtt?.jam_masuk||'--:--'}</strong><small>{todayAtt?.status||'Belum tercatat'}</small></div></div>
      <div className="pt-summary-card"><div className="pt-summary-icon clock"><Icon name="clock" size={21}/></div><div><span>Jam Kerja</span><strong>08:00 — 17:00</strong><small>{stats.hadir} rekaman</small></div></div>
    </section>

    <section id="project-tirta-feature-grid" className="pt-feature-section">
      <div className="pt-section-heading"><div><span>MENU UTAMA</span><h2>Akses cepat</h2></div><button onClick={goMenu}>Lihat Semua →</button></div>
      <div className="pt-feature-grid">{menu.map(item=><button className="pt-feature-card" key={item.key} onClick={item.action}><span className="pt-feature-icon"><Icon name={item.icon}/></span><b>{item.title}</b><small>{item.sub}</small></button>)}</div>
    </section>

    <section className="pt-selfie-banner">
      <div className="pt-selfie-copy"><span>FITUR UNGGULAN</span><h2>{t('selfie_monitoring')}</h2><p>Pastikan kehadiran Anda dengan selfie dan lokasi yang valid.</p><div className="pt-selfie-actions"><button className="pt-gold-button" onClick={cameraOn?takeSelfie:startCamera}>{cameraOn?(cameraReady?'Ambil Selfie':'Menyiapkan Kamera'):selfie?'Buka Kamera Lagi':'Mulai Sekarang'} →</button><button className="pt-outline-button" onClick={getGeo} disabled={geoLoading}>{geoLoading?'Mencari lokasi…':geo?'GPS siap':'Aktifkan GPS'}</button></div>{cameraError&&<div className="pt-inline-error">{cameraError}<button onClick={onClearCameraError}>×</button></div>}</div>
      <div className="pt-selfie-art" aria-hidden="true"><div className="pt-camera-orbit"><span className="pt-orbit-dot"/><span className="pt-camera-glyph"><Icon name="camera" size={30}/></span></div></div>
      {cameraOn&&<div className="pt-camera-panel"><video ref={videoRef} autoPlay playsInline muted /><div>{cameraReady?'Posisikan wajah di tengah':'Mempersiapkan kamera…'}</div></div>}
    </section>

    <section className="pt-activity-section">
      <div className="pt-section-heading"><div><span>AKTIVITAS TERBARU</span><h2>Ringkasan Anda</h2></div><button onClick={goActivity}>Lihat Semua →</button></div>
      <div className="pt-activity-list">
        <button className="pt-activity-row" onClick={()=>setTab('attendance')}><span className="pt-activity-icon success"><Icon name="check" size={17}/></span><span><b>{todayAtt?.jam_masuk?'Absensi Berhasil':'Belum Absen'}</b><small>{geo?`Lokasi terdeteksi: ${Math.round(geo.accuracy)} m`:'Lokasi belum diaktifkan'}</small></span><time>{todayAtt?.jam_masuk||'—'}</time><em>›</em></button>
        <button className="pt-activity-row" onClick={()=>setTab('leave')}><span className="pt-activity-icon gold"><Icon name="leave" size={17}/></span><span><b>{tr('portal_leave_approved','Cuti Disetujui')}</b><small>{stats.cuti||0} {tr('days','hari')}</small></span><time>›</time><em>›</em></button>
        <button className="pt-activity-row" onClick={()=>setTab('payslip')}><span className="pt-activity-icon purple"><Icon name="payroll" size={17}/></span><span><b>{tr('portal_latest_payslip','Slip Terbaru')}</b><small>{stats.latest?money(Number(stats.latest.gaji_bersih),locale):'Belum tersedia'}</small></span><time>{stats.latest?.periode||'—'}</time><em>›</em></button>
      </div>
    </section>

    <section className="pt-mobile-bottom-nav" aria-label="Navigasi bawah">
      <button className="active" onClick={()=>setTab('home')}><span><Icon name="home" size={18}/></span>Beranda</button>
      <button onClick={goActivity}><span><Icon name="activity" size={18}/></span>Aktivitas</button>
      <button onClick={goMenu}><span><Icon name="menu" size={18}/></span>Menu</button>
      <button onClick={()=>setTab('profile')}><span><Icon name="profile" size={18}/></span>Profil</button>
    </section>
  </>;
}
