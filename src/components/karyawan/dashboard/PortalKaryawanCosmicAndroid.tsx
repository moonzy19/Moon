import '../../../styles/android-id-card.css';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../../../locales/LanguageContext';
import { supabase } from '../../../lib/supabase/client';
import { getEmployeePortalTheme, applyProjectTheme } from '../../../lib/userPreferences';
import { cacheAttendance, cacheEmployee, countOfflineAttendance, enqueueOfflineAttendance, getCachedAttendance, getCachedEmployee, syncOfflineAttendance } from '../../../lib/androidOfflineAttendance';

import moonLogo from '../../../assets/moon-logo.svg';
import AndroidCosmicBackground from './AndroidCosmicBackground';
import AndroidEmployeeIdCard from './AndroidEmployeeIdCard';
import SuggestionBox from '../../../features/employee-feedback/SuggestionBox';
import EmployeeAnnouncementCenter from '../../../features/announcements/EmployeeAnnouncementCenter';
import type { SuggestionDraft } from '../../../features/employee-feedback/types';

type Employee={
  id:string;
  id_karyawan:string;
  nama:string;
  email:string;
  jabatan?:string|null;
  departemen?:string|null;
  status_karyawan?:string|null;
  status_aktif?:boolean|null;
  tanggal_masuk?:string|null;
  tanggal_lahir?:string|null;
  foto_url?:string|null;
  bpjs_kesehatan?:string|null;
  bpjs_ketenagakerjaan?:string|null;
  bpjs_kesehatan_card_path?:string|null;
  bpjs_ketenagakerjaan_card_path?:string|null;
};
type Tab='home'|'announcements'|'attendance'|'leave'|'overtime'|'schedule'|'payslip'|'jobs'|'feedback'|'profile'|'bpjs'|'idcard'|'help';
type Geo={lat:number;lng:number;accuracy:number};
const money=(n:number,locale='id-ID')=>new Intl.NumberFormat(locale,{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n||0);
const jakartaNow=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
const today=()=>{const p=Object.fromEntries(jakartaNow().map(x=>[x.type,x.value]));return `${p.year}-${p.month}-${p.day}`};
const dateLabel=(v:string,locale='id-ID')=>v?new Intl.DateTimeFormat(locale,{dateStyle:'medium'}).format(new Date(`${v}T00:00:00`)):'-';
const parseClockSeconds=(value:string|undefined|null)=>{
  if(!value)return null;
  const [h,m,sec='0']=String(value).split(':').map(Number);
  if(!Number.isFinite(h)||!Number.isFinite(m))return null;
  return h*3600+m*60+(Number.isFinite(Number(sec))?Number(sec):0);
};
const jakartaClockSeconds=()=>{
  const p=Object.fromEntries(jakartaNow().map(x=>[x.type,x.value]));
  return Number(p.hour)*3600+Number(p.minute)*60+Number(p.second||0);
};
const formatWorkDuration=(seconds:number)=>{
  const total=Math.max(0,Math.floor(seconds));
  const h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};


export default function PortalKaryawan({onLogout}:{onLogout?:()=>void}){
  const { t, lang } = useTranslation();
 const locale=lang==='id'?'id-ID':lang==='ja'?'ja-JP':lang==='ko'?'ko-KR':'zh-CN';
 const [user,setUser]=useState<any>(null),[employee,setEmployee]=useState<Employee|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(''),[notice,setNotice]=useState(''),[tab,setTab]=useState<Tab>('home');

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

  const [jobOpenings,setJobOpenings]=useState<JobOpening[]>([]);
  const [jobsLoading,setJobsLoading]=useState(false);

  useEffect(()=>{
    if(tab!=='jobs') return;
    let active=true;

    const loadJobOpenings=async()=>{
      setJobsLoading(true);
      const {data}=await supabase
        .from('hris_recruitment_openings_v25')
        .select('*')
        .eq('status','Open')
        .order('created_at',{ascending:false});

      if(active){
        setJobOpenings((data||[]) as JobOpening[]);
        setJobsLoading(false);
      }
    };

    void loadJobOpenings();
    const timer=window.setInterval(()=>void loadJobOpenings(),30000);

    return ()=>{
      active=false;
      window.clearInterval(timer);
    };
  },[tab]);


 const [workNow,setWorkNow]=useState(0);
 useEffect(()=>{ if(tab!=='home') return; setWorkNow(jakartaClockSeconds()); const timer=window.setInterval(()=>setWorkNow(jakartaClockSeconds()),1000); return ()=>window.clearInterval(timer); },[tab]);
 const [attendance,setAttendance]=useState<any[]>([]),[leaves,setLeaves]=useState<any[]>([]),[balances,setBalances]=useState<any[]>([]),[payroll,setPayroll]=useState<any[]>([]),[lines,setLines]=useState<Record<string,any[]>>({}),[schedule,setSchedule]=useState<any[]>([]),[otRequests,setOtRequests]=useState<any[]>([]),[announcements,setAnnouncements]=useState<any[]>([]),[announcementReadIds,setAnnouncementReadIds]=useState<string[]>([]),[payslipReadIds,setPayslipReadIds]=useState<string[]>([]),[feedbackReadIds,setFeedbackReadIds]=useState<string[]>([]);
  // Employee Portal follows Super Admin's theme only.
  // Employee language remains independently controlled by its own account.
  useEffect(() => {
    let active = true;
    let requestSerial = 0;

    const applyEmployeeTheme = async () => {
      const serial = ++requestSerial;
      const next = await getEmployeePortalTheme();

      // Ignore responses from an older request.
      if (!active || serial !== requestSerial) return;

      const current =
        document.documentElement.dataset.cosmicTheme || '';

      // Reapply only when the server theme actually changed.
      if (current !== next) {
        applyProjectTheme(next, false);
      }
    };

    void applyEmployeeTheme();

    // Keep 5-second synchronization, but do not visually reapply
    // an unchanged theme.
    const timer = window.setInterval(() => {
      void applyEmployeeTheme();
    }, 5000);

    return () => {
      active = false;
      window.clearInterval(timer);
    };

  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const locked = tab === 'home';
    document.documentElement.classList.toggle('pt-android-home-lock', locked);
    document.body.classList.toggle('pt-android-home-lock', locked);
    return () => {
      document.documentElement.classList.remove('pt-android-home-lock');
      document.body.classList.remove('pt-android-home-lock');
    };
  }, [tab]);

 const [geo,setGeo]=useState<Geo|null>(null),[geoLoading,setGeoLoading]=useState(false),[cameraOn,setCameraOn]=useState(false),[cameraReady,setCameraReady]=useState(false),[cameraError,setCameraError]=useState(''),[selfie,setSelfie]=useState(''),[clockBusy,setClockBusy]=useState(false);
 const videoRef=useRef<HTMLVideoElement>(null),streamRef=useRef<MediaStream|null>(null);
 const [leaveForm,setLeaveForm]=useState({jenis:'Tahunan',tanggal_mulai:today(),tanggal_selesai:today(),alasan:''});
 const [profileForm,setProfileForm]=useState({field_name:'no_telp',new_value:'',reason:''});
 const [otForm,setOtForm]=useState({tanggal:today(),menit:'60',alasan:''});
 const [feedbacks,setFeedbacks]=useState<any[]>([]);
 const [detailPayroll,setDetailPayroll]=useState<string|null>(null);
 const [offlinePending,setOfflinePending]=useState(0);
 const [bpjsUrls,setBpjsUrls]=useState({kesehatan:'',ketenagakerjaan:''});
 const [bpjsLoading,setBpjsLoading]=useState(false);
 const [helpQuestion,setHelpQuestion]=useState('');
 const [helpAnswer,setHelpAnswer]=useState('');
 const [helpLoading,setHelpLoading]=useState(false);
 const [callCenter,setCallCenter]=useState('');

 const getGeo=()=>{setGeoLoading(true);setError('');if(!navigator.geolocation){setGeoLoading(false);setError(t('portal_browser_no_gps'));return}navigator.geolocation.getCurrentPosition(p=>{if(!Number.isFinite(p.coords.accuracy)||p.coords.accuracy>100){setGeo(null);setGeoLoading(false);setError(t('portal_gps_low_accuracy').replace('{meters}',String(Math.round(p.coords.accuracy||999))));return}setGeo({lat:p.coords.latitude,lng:p.coords.longitude,accuracy:p.coords.accuracy});setGeoLoading(false)},e=>{setGeoLoading(false);setError(e.message||t('portal_location_unavailable'))},{enableHighAccuracy:true,timeout:12000,maximumAge:30000})};
 const stopCamera=(resetState=true)=>{
  const stream=streamRef.current;
  streamRef.current=null;
  if(stream){stream.getTracks().forEach(track=>{try{track.stop()}catch{}})}
  const video=videoRef.current;
  if(video){
   video.pause();
   video.srcObject=null;
   video.removeAttribute('src');
  }
  setCameraReady(false);
  if(resetState)setCameraOn(false);
 };

 const startCamera=async()=>{
  setCameraError('');
  setError('');
  setCameraReady(false);

  const isLocalhost=typeof window!=='undefined' && ['localhost','127.0.0.1','[::1]'].includes(window.location.hostname);
  if(typeof window==='undefined'||(!window.isSecureContext&&!isLocalhost)){
   setCameraError(t('camera_https_required'));
   return;
  }
  if(!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia!=='function'){
   setCameraError(t('camera_browser_unsupported'));
   return;
  }

  stopCamera(false);

  try{
   let stream:MediaStream;
   try{
    stream=await navigator.mediaDevices.getUserMedia({
     audio:false,
     video:{
      facingMode:{ideal:'user'},
      width:{ideal:720,min:320},
      height:{ideal:720,min:240}
     }
    });
   }catch(firstError:any){
    // Fallback untuk webcam/driver yang tidak menerima constraint tertentu.
    if(['OverconstrainedError','NotFoundError'].includes(firstError?.name||'')){
     stream=await navigator.mediaDevices.getUserMedia({audio:false,video:true});
    }else throw firstError;
   }

   streamRef.current=stream;
   setCameraOn(true);
  }catch(e:any){
   const name=e?.name||'';
   const message=name==='NotAllowedError'||name==='PermissionDeniedError'
    ?'Izin kamera ditolak. Izinkan kamera untuk situs ini melalui ikon kamera di address bar, lalu klik Buka Kamera lagi.'
    :name==='NotFoundError'
    ?t('camera_not_found')
    :name==='NotReadableError'||name==='TrackStartError'
    ?t('camera_busy')
    :name==='SecurityError'
    ?t('camera_security_blocked')
    :e?.message||t('camera_open_failed');
   setCameraError(message);
   setCameraOn(false);
   setCameraReady(false);
  }
 };

 useEffect(()=>{
  if(!cameraOn)return;
  const video=videoRef.current;
  const stream=streamRef.current;
  if(!video||!stream)return;

  let cancelled=false;
  const markReady=()=>{
   if(!cancelled && video.videoWidth>1 && video.videoHeight>1)setCameraReady(true);
  };

  video.muted=true;
  video.playsInline=true;
  video.autoplay=true;
  video.srcObject=stream;
  video.addEventListener('loadedmetadata',markReady);
  video.addEventListener('canplay',markReady);
  video.addEventListener('playing',markReady);

  const startPlayback=async()=>{
   try{
    await video.play();
    markReady();
   }catch{
    setCameraError('Pratinjau kamera tidak dapat diputar. Klik Buka Kamera lagi setelah memastikan izin kamera sudah diizinkan.');
   }
  };
  void startPlayback();

  return()=>{
   cancelled=true;
   video.removeEventListener('loadedmetadata',markReady);
   video.removeEventListener('canplay',markReady);
   video.removeEventListener('playing',markReady);
  };
 },[cameraOn]);

 const takeSelfie=()=>{
  const video=videoRef.current;
  if(!video||!streamRef.current){
   setCameraError('Kamera belum aktif. Klik Buka Kamera terlebih dahulu.');
   return;
  }
  if(video.readyState<2||video.videoWidth<2||video.videoHeight<2){
   setCameraError('Pratinjau kamera belum siap. Tunggu sampai wajah terlihat di layar, lalu tekan Ambil Selfie.');
   return;
  }

  const sourceWidth=video.videoWidth;
  const sourceHeight=video.videoHeight;
  const side=Math.min(sourceWidth,sourceHeight);
  const sx=Math.floor((sourceWidth-side)/2);
  const sy=Math.floor((sourceHeight-side)/2);
  const canvas=document.createElement('canvas');
  canvas.width=720;
  canvas.height=720;
  const ctx=canvas.getContext('2d');
  if(!ctx){setCameraError('Perangkat tidak dapat membuat foto selfie.');return;}

  ctx.imageSmoothingEnabled=true;
  ctx.imageSmoothingQuality='high';
  ctx.drawImage(video,sx,sy,side,side,0,0,720,720);
  const image=canvas.toDataURL('image/jpeg',0.88);
  if(!image||image.length<100){
   setCameraError('Foto selfie gagal dibuat. Coba ulangi.');
   return;
  }
  setSelfie(image);
  setCameraError('');
  stopCamera();
 };

 useEffect(()=>()=>stopCamera(),[]);

 const syncPendingOffline=async(idKaryawan:string,authUserId:string)=>{
  if(typeof navigator!=='undefined'&&!navigator.onLine)return;
  try{
   await syncOfflineAttendance(authUserId, idKaryawan);
   setOfflinePending(await countOfflineAttendance(authUserId, idKaryawan));
  }catch(e:any){
   console.warn('Sinkronisasi absensi offline gagal:',e?.message||e);
  }
 };

 const load=async()=>{
  setLoading(true);setError('');
  const {data:sessionData}=await supabase.auth.getSession();
  const u=sessionData.session?.user||null;
  setUser(u);
  if(!u){setLoading(false);return;}

  const online=typeof navigator==='undefined'||navigator.onLine;
  const cached=await getCachedEmployee(u.id);

  if(!online){
   if(cached){
    setEmployee(cached as Employee);
    setAttendance(await getCachedAttendance(u.id));
    setOfflinePending(await countOfflineAttendance(u.id,cached.id_karyawan));
    setLoading(false);
    return;
   }
   setError('Koneksi internet diperlukan untuk login pertama dan verifikasi akun pada perangkat ini.');
   setLoading(false);
   return;
  }

  const {data:e,error:ee}=await supabase.from('karyawan')
   .select('id,id_karyawan,nama,email,jabatan,departemen,status_karyawan,status_aktif,tanggal_masuk,tanggal_lahir,foto_url,bpjs_kesehatan,bpjs_ketenagakerjaan,bpjs_kesehatan_card_path,bpjs_ketenagakerjaan_card_path')
   .eq('auth_user_id',u.id).maybeSingle();

  if(ee){
   if(cached){
    setEmployee(cached as Employee);
    setAttendance(await getCachedAttendance(u.id));
    setOfflinePending(await countOfflineAttendance(u.id,cached.id_karyawan));
   }else setError(ee.message);
   setLoading(false);
   return;
  }
  if(!e){setLoading(false);return;}

  setEmployee(e as Employee);
  await cacheEmployee(u.id,e as any);
  await syncPendingOffline(e.id_karyawan, u.id);

  const [a,l,b,p,j,o,ann]=await Promise.all([
   supabase.from('absensi').select('*').eq('id_karyawan',e.id_karyawan).order('tanggal',{ascending:false}).limit(90),
   supabase.from('hris_cuti').select('*').eq('id_karyawan',e.id_karyawan).order('created_at',{ascending:false}).limit(40),
   supabase.from('hris_saldo_cuti').select('*').eq('id_karyawan',e.id_karyawan).order('tahun',{ascending:false}),
   supabase.from('hris_payroll').select('*').eq('id_karyawan',e.id_karyawan).order('periode',{ascending:false}).limit(12),
   supabase.from('hris_jadwal').select('*,hris_shift(*)').eq('id_karyawan',e.id_karyawan).gte('tanggal',today()).order('tanggal').limit(45),
   supabase.from('hris_employee_overtime_requests').select('*').eq('id_karyawan',e.id_karyawan).order('tanggal',{ascending:false}).limit(30),
   supabase.from('hris_announcements').select('*').eq('status','published').order('pinned',{ascending:false}).order('published_at',{ascending:false}).limit(50)
  ]);
  setAttendance(a.data||[]);await cacheAttendance(u.id,a.data||[]);
  setLeaves(l.data||[]);setBalances(b.data||[]);setPayroll(p.data||[]);setSchedule(j.data||[]);setOtRequests(o.data||[]);setAnnouncements(ann.data||[]);
  setOfflinePending(await countOfflineAttendance(u.id,e.id_karyawan));

  const {data:announcementReads}=await supabase.from('hris_announcement_reads').select('announcement_id').eq('user_id',u.id);
  setAnnouncementReadIds((announcementReads||[]).map(x=>x.announcement_id));
  const {data:fb,error:fbError}=await supabase.from('hris_employee_feedback').select('id,kategori,judul,isi,status,tanggapan_hr,created_at,updated_at').eq('id_karyawan',e.id_karyawan).order('created_at',{ascending:false}).limit(30);
  if(!fbError)setFeedbacks(fb||[]);
  const ids=(p.data||[]).map(x=>x.id);
  if(ids.length){const {data:pl}=await supabase.from('hris_payroll_lines').select('*').in('payroll_id',ids);const grouped:any={};(pl||[]).forEach(x=>(grouped[x.payroll_id]??=[]).push(x));setLines(grouped)}else setLines({});
  setLoading(false);
 };

 useEffect(()=>{void load()},[]);
 useEffect(()=>{
  const onOnline=()=>{if(employee?.id_karyawan)void load()};
  window.addEventListener('online',onOnline);
  return()=>window.removeEventListener('online',onOnline);
 },[employee?.id_karyawan]);
 const logout=async()=>{stopCamera();await supabase.auth.signOut();setEmployee(null);setUser(null);onLogout?.()};
 const requireSecurity=()=>{if(!geo){setError(t('portal_gps_first'));getGeo();return false}if(!selfie){setError(t('portal_selfie_first'));return false}return true};
 const makeOfflineEventId=(action:'clock_in'|'clock_out')=>{
  const base=`${employee?.id_karyawan||'EMP'}-${action}-${today()}-${Date.now()}`;
  return typeof crypto!=='undefined'&&typeof crypto.randomUUID==='function'?`${crypto.randomUUID()}-${base}`:base;
 };
 const currentJakartaTime=()=>{const p=Object.fromEntries(jakartaNow().map(x=>[x.type,x.value]));return `${p.hour}:${p.minute}:${p.second}`};
 const queueAttendance=(action:'clock_in'|'clock_out')=>{
  if(!employee||!geo||!selfie)return;
  return enqueueOfflineAttendance({client_event_id:makeOfflineEventId(action),auth_user_id:user?.id||'',action,id_karyawan:employee.id_karyawan,tanggal:today(),jam:currentJakartaTime(),lat:geo.lat,long:geo.lng,accuracy:geo.accuracy,selfie,lokasi:'GPS ESS OFFLINE'});
 };
 const clockIn=async()=>{
  if(!employee||!requireSecurity())return;
  setClockBusy(true);setError('');
  const {error:e1}=await supabase.rpc('hris_ess_clock_in',{p_id_karyawan:employee.id_karyawan,p_tanggal:today(),p_jam:null,p_lat:geo?.lat,p_long:geo?.lng,p_accuracy:geo?.accuracy,p_selfie:selfie,p_lokasi:'GPS ESS'});
  if(e1&&typeof navigator!=='undefined'&&!navigator.onLine){
   try{await queueAttendance('clock_in');setNotice('Check In tersimpan di antrean offline dan akan disinkronkan saat internet kembali.');setOfflinePending(await countOfflineAttendance(user?.id||'',employee.id_karyawan));setSelfie('');setGeo(null);}
   catch(queueError:any){setError(queueError?.message||e1.message)}
  }else if(e1){setError(e1.message)}
  else{setNotice(t('portal_clockin_success'));setSelfie('');setGeo(null);await load()}
  setClockBusy(false);
 };
 const clockOut=async()=>{
  if(!employee||!requireSecurity())return;
  setClockBusy(true);setError('');
  const {error:e1}=await supabase.rpc('hris_ess_clock_out',{p_id_karyawan:employee.id_karyawan,p_tanggal:today(),p_jam:null,p_lat:geo?.lat,p_long:geo?.lng,p_accuracy:geo?.accuracy,p_selfie:selfie,p_lokasi:'GPS ESS'});
  if(e1&&typeof navigator!=='undefined'&&!navigator.onLine){
   try{await queueAttendance('clock_out');setNotice('Check Out tersimpan di antrean offline dan akan disinkronkan saat internet kembali.');setOfflinePending(await countOfflineAttendance(user?.id||'',employee.id_karyawan));setSelfie('');setGeo(null);}
   catch(queueError:any){setError(queueError?.message||e1.message)}
  }else if(e1){setError(e1.message)}
  else{setNotice(t('portal_clockout_success'));setSelfie('');setGeo(null);await load()}
  setClockBusy(false);
 };
 const todayDate=today();
const todayRows=attendance.filter(a=>a.tanggal===todayDate);

const todayAtt=
  todayRows.find(a=>a.jam_masuk&&!a.jam_pulang) ??
  todayRows.find(a=>!!a.jam_masuk) ??
  todayRows[0];

const canClockIn=!todayAtt?.jam_masuk;
const canClockOut=!!todayAtt?.jam_masuk&&!todayAtt?.jam_pulang;
 const submitLeave=async(e:React.FormEvent)=>{e.preventDefault();if(!employee)return;const start=new Date(`${leaveForm.tanggal_mulai}T00:00:00`),end=new Date(`${leaveForm.tanggal_selesai}T00:00:00`);if(end<start){setError(t('portal_leave_date_invalid'));return}const days=Math.floor((end.getTime()-start.getTime())/86400000)+1;const {error:e1}=await supabase.from('hris_employee_leave_requests').insert({...leaveForm,id_karyawan:employee.id_karyawan,jumlah_hari:days});if(e1)setError(e1.message);else{setNotice(t('portal_leave_success'));setLeaveForm({...leaveForm,tanggal_mulai:today(),tanggal_selesai:today(),alasan:''});await load()}};
 const submitOt=async(e:React.FormEvent)=>{e.preventDefault();if(!employee)return;const {error:e1}=await supabase.from('hris_employee_overtime_requests').insert({id_karyawan:employee.id_karyawan,tanggal:otForm.tanggal,menit:Number(otForm.menit),alasan:otForm.alasan});if(e1)setError(e1.message);else{setNotice(t('portal_overtime_success'));setOtForm({...otForm,menit:'60',alasan:''});await load()}};
 const submitProfile=async(e:React.FormEvent)=>{e.preventDefault();if(!employee)return;const {error:e1}=await supabase.from('hris_employee_profile_requests').insert({...profileForm,id_karyawan:employee.id_karyawan,old_value:profileForm.field_name==='email'?employee.email||'':''});if(e1)setError(e1.message);else{setNotice(t('portal_profile_success'));setProfileForm({...profileForm,new_value:'',reason:''})}}; const submitFeedback=async(draft:SuggestionDraft)=>{
   if(!employee) return;
   setError('');
   setNotice('');
   const payload={id_karyawan:employee.id_karyawan,kategori:draft.category,judul:draft.title.trim(),isi:draft.content.trim()};
   const {data,error:e1}=await supabase.from('hris_employee_feedback').insert(payload).select('id,kategori,judul,isi,status,tanggapan_hr,created_at,updated_at').single();
   if(e1) throw new Error(e1.message);
   if(data)setFeedbacks(x=>[data,...x]);
 };
 
 const printPayslip=(id:string)=>{setDetailPayroll(id);setTimeout(()=>window.print(),150)};
 const announcementUnread=announcements.filter(a=>!announcementReadIds.includes(a.id)).length;
 const leavePending=leaves.filter(x=>x.status==='Menunggu').length;
 const overtimePending=otRequests.filter(x=>x.status==='Menunggu').length;
 const payslipUnread=payroll.filter(x=>x.status==='Disetujui'&&!payslipReadIds.includes(String(x.id))).length;
 const feedbackUnread=feedbacks.filter(x=>x.status==='Baru'&&!feedbackReadIds.includes(String(x.id))).length;
 const todayShift=schedule.find(x=>x.tanggal===todayDate)?.hris_shift;
 const shiftStart=parseClockSeconds(todayShift?.jam_masuk)||8*3600;
 const shiftEnd=parseClockSeconds(todayShift?.jam_pulang)||17*3600;
 const plannedDuration=Math.max(3600,shiftEnd-shiftStart);
 const actualIn=parseClockSeconds(todayAtt?.jam_masuk);
 const actualOut=parseClockSeconds(todayAtt?.jam_pulang);
 const liveWorkSeconds=actualIn===null?0:Math.max(0,(actualOut??workNow)-actualIn);
 const workProgress=Math.max(0,Math.min(1,liveWorkSeconds/plannedDuration));
 type MenuTarget=Exclude<Tab,'home'>;
 const menuItems:{key:MenuTarget;icon:string;title:string;sub:string;badge?:number}[]=[
  {key:'payslip',icon:'▣',title:t('payroll'),sub:t('portal_salary_detail'),badge:payslipUnread},
  {key:'leave',icon:'☂',title:t('leave'),sub:t('leave_request'),badge:leavePending},
  {key:'overtime',icon:'↗',title:t('overtime'),sub:t('portal_overtime_history'),badge:overtimePending},
  {key:'announcements',icon:'◒',title:t('announcement_center'),sub:t('announcements'),badge:announcementUnread},
  {key:'schedule',icon:'◷',title:t('work_schedule'),sub:t('portal_upcoming_schedule')},
  {key:'feedback',icon:'▤',title:t('feedback_inbox'),sub:t('portal_my_feedback'),badge:feedbackUnread},
  {key:'bpjs',icon:'✚',title:'BPJS',sub:'Data & kartu BPJS'},
  {key:'idcard',icon:'▣',title:'ID Card',sub:'Kartu identitas karyawan'},
  {key:'help',icon:'?',title:'Bantuan',sub:'AI Assistant & Call Center'},
 ];
 const openMenuTarget=(key:MenuTarget)=>{setTab(key);window.scrollTo({top:0,behavior:'smooth'});};
 const menuGrid=(compact=false)=><div className={`pt-feature-grid${compact?' pt-feature-grid-home':''}`}>
  {menuItems.map(item=><button key={item.key} type="button" className="pt-feature-tile" onClick={()=>openMenuTarget(item.key)}>
   <span className={`pt-feature-icon pt-feature-${item.key}`}>{item.icon}</span>
   <b>{item.title}</b><small>{item.sub}</small>
   {item.badge? <em>{item.badge>9?'9+':item.badge}</em>:null}
  </button>)}
 </div>;
 if(loading&&!employee&&!user)return <PortalLoadingScreen/>;
 if(!employee)return <div className="employee-login"><div className="employee-login-card"><div className="employee-logo">M</div><div className="login-copy"><span className="portal-eyebrow">{t('portal_account_link')}</span><h2>{t('portal_account_unlinked')}</h2><p>{t('portal_account_unlinked_desc')}</p></div><button className="portal-secondary" onClick={logout}>{t('logout')}</button></div></div>;
 if(employee.status_aktif===false)return <div className="employee-login"><div className="employee-login-card"><div className="employee-logo">M</div><div className="login-copy"><span className="portal-eyebrow">{t('portal_account_status')}</span><h2>{t('portal_waiting_verification')}</h2><p>{t('portal_waiting_verification_desc')}</p></div><button className="portal-secondary" onClick={logout}>{t('logout')}</button></div></div>;
 return <div className={`employee-portal employee-portal-cosmic pt-cosmic-shell pt-android-cosmic-active${tab==='home'?' pt-home-active':''}`}>
  <AndroidCosmicBackground />
  <main className="employee-page">
   {notice&&<div className="portal-info pt-text-notice">{notice}<button className="portal-link" onClick={()=>setNotice('')}>{t('close')}</button></div>}
   {error&&<div className="portal-error pt-text-notice">{error}<button className="portal-link" onClick={()=>setError('')}>{t('close')}</button></div>}

   {tab==='home'&&<>
<section className="pt-home-intro">
     <span className="portal-eyebrow">{t('welcome')}</span>
     <h1>{employee.nama}</h1>
     <p>{employee.jabatan||t('employee')} · {employee.departemen||t('department')}</p>
    </section>
    <section className="portal-card pt-attendance-main pt-safe-attendance-card">
     <div className="pt-attendance-top"><div><span className="card-kicker">{t('attendance_today')}</span><h2>{t('portal_work_duration')}</h2><p>{new Intl.DateTimeFormat(locale,{dateStyle:'full'}).format(new Date())}</p></div></div>
     <div className="pt-work-duration"><strong>{formatWorkDuration(liveWorkSeconds)}</strong><div className="pt-work-progress" aria-label={t('portal_work_duration')}><span style={{width:`${Math.round(workProgress*100)}%`}}/></div><div className="pt-work-duration-meta"><span>{todayAtt?.jam_masuk||'--:--'} → {todayAtt?.jam_pulang||'--:--'}</span><b>{Math.round(workProgress*100)}%</b></div></div>
     <div className="pt-security-line"><span>{geo?t('portal_location_ready'):t('portal_location_missing')}</span><span>{selfie?t('portal_selfie_ready'):t('portal_selfie_missing')}</span></div>
     {cameraOn&&<div className="camera-frame pt-camera-frame"><video ref={videoRef} autoPlay playsInline muted/><div className="camera-overlay">{cameraReady?t('portal_center_face'):t('portal_camera_preview')}</div></div>}
     {cameraError&&<div className="portal-error compact">{cameraError}</div>}
     {selfie&&<div className="selfie-preview"><img src={selfie} alt={t('portal_take_selfie')}/><button className="portal-link" type="button" onClick={()=>setSelfie('')}>{t('portal_retake')}</button></div>}
     <div className="attendance-actions pt-home-attendance-actions"><button className="portal-secondary" type="button" onClick={()=>cameraOn?takeSelfie():startCamera()} disabled={cameraOn&&!cameraReady}>{cameraOn?(cameraReady?t('portal_take_selfie'):t('portal_camera_prepare')):t('portal_open_camera')}</button><button className="portal-secondary" type="button" onClick={getGeo} disabled={geoLoading}>{geoLoading?t('portal_getting_gps'):geo?t('portal_gps_accuracy').replace('{meters}',String(Math.round(geo.accuracy))):t('portal_get_gps')}</button></div>
     <div className="attendance-actions pt-home-attendance-actions"><button className="portal-primary" disabled={clockBusy||!canClockIn} onClick={clockIn}>{clockBusy?t('portal_processing'):t('check_in')}</button><button className="portal-primary" disabled={clockBusy||!canClockOut} onClick={clockOut}>{clockBusy?t('portal_processing'):t('check_out')}</button></div>
    </section>
    <section className="pt-feature-section pt-home-menu-section"><div className="pt-section-heading pt-heading-plain"><div><h2>{t('portal_my_services')}</h2>{offlinePending>0&&<small className="pt-offline-pending">{offlinePending} absensi menunggu sinkronisasi</small>}</div></div>{menuGrid(true)}</section>

   </>}

   {tab==='announcements'&&<EmployeeAnnouncementCenter announcements={announcements} onRead={async(id)=>{const {data:{user:u}}=await supabase.auth.getUser();if(!u)return;const {error:e1}=await supabase.from('hris_announcement_reads').upsert({announcement_id:id,user_id:u.id,read_at:new Date().toISOString()},{onConflict:'announcement_id,user_id'});if(e1){setError(e1.message);return}setAnnouncements(x=>x.map(a=>a.id===id?{...a,isRead:true}:a));setAnnouncementReadIds(x=>x.includes(id)?x:[...x,id])}}/>}

   {tab==='attendance'&&<section className="pt-attendance-history-page"><div className="pt-page-heading pt-heading-plain"><span className="portal-eyebrow">{t('attendance')}</span><h1>{t('portal_attendance_history')}</h1><p>{t('source')}</p></div><div className="pt-attendance-history-list">{attendance.map((a,i)=><article className="pt-attendance-history-row" key={a.id||i}><div className="pt-attendance-history-date"><b>{dateLabel(a.tanggal,locale)}</b><span>{a.status||t('portal_recorded')}</span></div><div className="pt-attendance-history-times"><div><small>{t('check_in')}</small><b>{a.jam_masuk||'--:--'}</b></div><div><small>{t('check_out')}</small><b>{a.jam_pulang||'--:--'}</b></div><div><small>GPS</small><b>{a.latitude&&a.longitude?t('portal_saved'):'-'}</b></div></div><small className="pt-attendance-history-source">{a.sumber||'Manual'}</small></article>)}{!attendance.length&&<div className="pt-attendance-history-empty">{t('portal_no_attendance')}</div>}</div></section>}

   {tab==='leave'&&<section className="portal-grid pt-page-grid"><div className="portal-card info-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('leave')}</span><h2>{t('leave_request')}</h2></div></div><form className="employee-form" onSubmit={submitLeave}><label>{t('type')}<select value={leaveForm.jenis} onChange={e=>setLeaveForm({...leaveForm,jenis:e.target.value})}><option>Tahunan</option><option>Sakit</option><option>Khusus</option><option>Izin</option></select></label><div className="form-two"><label>{t('date')} — {t('start_date')}<input type="date" value={leaveForm.tanggal_mulai} onChange={e=>setLeaveForm({...leaveForm,tanggal_mulai:e.target.value})}/></label><label>{t('date')} — {t('end_date')}<input type="date" value={leaveForm.tanggal_selesai} onChange={e=>setLeaveForm({...leaveForm,tanggal_selesai:e.target.value})}/></label></div><label>{t('reason')}<textarea value={leaveForm.alasan} onChange={e=>setLeaveForm({...leaveForm,alasan:e.target.value})} required/></label><button className="portal-primary">{t('portal_send_request')}</button></form></div><div className="portal-card info-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('portal_balance_title')}</span><h2>{t('portal_leave_balance')}</h2></div></div><div className="balance-list">{balances.slice(0,6).map(b=><div key={b.id}><span>{b.jenis}</span><b>{Math.max(0,Number(b.saldo||0)-Number(b.terpakai||0))} hari</b></div>)}{!balances.length&&<p className="muted">{t('portal_balance_unavailable')}</p>}</div><div className="request-list">{leaves.map(x=><div key={x.id}><div><b>{x.jenis}</b><small>{dateLabel(x.tanggal_mulai,locale)} — {dateLabel(x.tanggal_selesai,locale)}</small></div><span className="status-badge">{x.status}</span></div>)}</div></div></section>}

   {tab==='overtime'&&<section className="portal-grid pt-page-grid"><div className="portal-card info-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('overtime')}</span><h2>{t('overtime')}</h2></div></div><form className="employee-form" onSubmit={submitOt}><label>{t('date')}<input type="date" value={otForm.tanggal} onChange={e=>setOtForm({...otForm,tanggal:e.target.value})}/></label><label>{t('portal_duration_minutes')}<input type="number" min="1" max="1440" value={otForm.menit} onChange={e=>setOtForm({...otForm,menit:e.target.value})} required/></label><label>{t('reason')}<textarea value={otForm.alasan} onChange={e=>setOtForm({...otForm,alasan:e.target.value})} required/></label><button className="portal-primary">{t('portal_send_request')}</button></form></div><div className="portal-card info-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('portal_overtime_history')}</span><h2>{t('portal_overtime_status')}</h2></div></div><div className="request-list">{otRequests.map(x=><div key={x.id}><div><b>{dateLabel(x.tanggal,locale)}</b><small>{x.menit} menit · {x.alasan}</small></div><span className="status-badge">{x.status}</span></div>)}{!otRequests.length&&<p className="muted">{t('portal_no_overtime')}</p>}</div></div></section>}

   {tab==='schedule'&&<section className="portal-card table-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('work_schedule')}</span><h2>{t('portal_upcoming_schedule')}</h2></div></div><div className="schedule-grid">{schedule.map(s=><div className="schedule-item" key={s.id}><small>{dateLabel(s.tanggal,locale)}</small><b>{s.hris_shift?.nama||t('portal_shift_undefined')}</b><span>{s.hris_shift?.jam_masuk||'--:--'} — {s.hris_shift?.jam_pulang||'--:--'}</span><em>{s.status}</em></div>)}{!schedule.length&&<div className="empty-state"><h2>{t('portal_no_schedule')}</h2><p>{t('portal_schedule_unpublished')}</p></div>}</div></section>}


   {tab==='jobs'&&<section className="pt-jobs-page">
    <div className="pt-jobs-toolbar">
     <button type="button" className="pt-jobs-back" onClick={()=>setTab('home')}>Kembali</button>
     <div>
      <strong>Lowongan Kerja</strong>
      <span>Kesempatan kerja yang sedang dibuka oleh HR</span>
     </div>
    </div>

    {jobsLoading ?
      <div className="pt-jobs-empty">Memuat lowongan...</div>
    :
      jobOpenings.length===0 ?
      <div className="pt-jobs-empty">
       <strong>Belum ada lowongan aktif</strong>
       <span>Lowongan yang dibuka HR akan muncul di sini.</span>
      </div>
    :
      <div className="pt-jobs-list">
       {jobOpenings.map(job=>{
        const money=(v:number|null|undefined)=>
          typeof v==='number' && v>0
            ? new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(v)
            : '-';

        return <article className="pt-job-card" key={job.id}>
         <div className="pt-job-card-top">
          <div>
           <span className="pt-job-badge">OPEN</span>
           <h3>{job.posisi||'Posisi tersedia'}</h3>
          </div>
          <span className="pt-job-code">{job.opening_no||''}</span>
         </div>

         <div className="pt-job-meta">
          <span>Departemen: {job.departemen||'Umum'}</span>
          <span>Lokasi: {job.lokasi||'-'}</span>
          <span>Tipe: {job.employment_type||'-'}</span>
          <span>Posisi: {job.headcount||1}</span>
         </div>

         <div className="pt-job-salary">
          {money(job.salary_min)} - {money(job.salary_max)}
         </div>

         {job.description ? <p>{job.description}</p> : null}

         {job.requirements ?
          <div className="pt-job-requirements">
           <strong>Persyaratan</strong>
           <div>{job.requirements}</div>
          </div>
         : null}
        </article>;
       })}
      </div>
    }
   </section>}

   {tab==='payslip'&&<section className="payslip-grid pt-page-grid"><PayslipReadTracker payroll={payroll} onRead={setPayslipReadIds}/>{payroll.map(p=><div className="portal-card payslip-card pt-page-card" key={p.id}><div className="card-title"><div><span className="card-kicker">{t('portal_salary_slip')}</span><h2>{t('period')} {p.periode}</h2></div><span className="status-badge">{p.status}</span></div><div className="salary-value">{money(Number(p.gaji_bersih||0),locale)}</div><p>{t('portal_net_salary')}</p><div className="salary-lines">{(lines[p.id]||[]).map(x=><div key={x.id}><span>{x.nama}</span><b>{money(Number(x.amount||0),locale)}</b></div>)}</div><button className="portal-secondary full" onClick={()=>printPayslip(p.id)}>{t('portal_print_pdf')}</button></div>)}{!payroll.length&&<div className="portal-card empty-state pt-page-card"><div className="empty-icon">P</div><h2>{t('portal_no_payslip')}</h2><p>{t('portal_payslip_desc')}</p></div>}{detailPayroll&&<div className="print-slip" id="print-slip">{(()=>{const p=payroll.find(x=>x.id===detailPayroll);return p?<><div className="print-head"><b>Project by Tirta</b><span>{t('portal_salary_slip')} · {t('employee')}</span></div><h2>{t('payroll_payslip')} · {p.periode}</h2><p>{employee.nama} · {employee.id_karyawan}</p><hr/><div className="print-lines">{(lines[p.id]||[]).map(x=><div key={x.id}><span>{x.nama}</span><b>{money(Number(x.amount||0),locale)}</b></div>)}<div className="total"><span>{t('portal_net_salary')}</span><b>{money(Number(p.gaji_bersih||0),locale)}</b></div></div></>:null})()}</div>}</section>}

   {tab==='idcard'&&<AndroidEmployeeIdCard employee={employee}/>}

   {tab==='feedback'&&<><FeedbackReadTracker feedbacks={feedbacks} onRead={setFeedbackReadIds}/><section className="portal-grid pt-page-grid"><SuggestionBox onSubmit={submitFeedback}/><div className="portal-card info-card pt-page-card"><div className="card-title"><div><span className="card-kicker">{t('feedback_inbox')}</span><h2>{t('portal_my_feedback')}</h2></div></div><div className="request-list">{feedbacks.map(x=><div key={x.id}><div><b>{x.judul}</b><small>{x.kategori} · {new Date(x.created_at).toLocaleDateString(locale)}</small>{x.tanggapan_hr&&<small><strong>{t('portal_hr_response')}</strong> {x.tanggapan_hr}</small>}</div><span className="status-badge">{x.status}</span></div>)}{!feedbacks.length&&<p className="muted">{t('portal_no_feedback')}</p>}</div></div></section></>}

   {tab==='bpjs'&&<BpjsEmployeePage employee={employee} urls={bpjsUrls} setUrls={setBpjsUrls} loading={bpjsLoading} setLoading={setBpjsLoading} />}


   {tab==='help'&&<EmployeeHelpPage question={helpQuestion} setQuestion={setHelpQuestion} answer={helpAnswer} setAnswer={setHelpAnswer} loading={helpLoading} setLoading={setHelpLoading} callCenter={callCenter} setCallCenter={setCallCenter} />}

   {tab==='profile'&&<section className="portal-grid pt-page-grid"><div className="portal-card info-card pt-page-card pt-profile-flat"><div className="portal-profile"><div className="portal-avatar">{employee.nama.charAt(0).toUpperCase()}</div><div><h3>{employee.nama}</h3><p>{employee.jabatan||t('employee')} · {employee.departemen||'-'}</p></div></div><div className="info-list"><div><small>{t('email')}</small><b>{employee.email||'-'}</b></div><div><small>{t('employee_id')}</small><b>{employee.id_karyawan}</b></div><div><small>Status</small><b>{employee.status_karyawan||t('active')}</b></div></div><button type="button" className="portal-secondary pt-profile-logout" onClick={logout}>{t('logout')}</button></div><div className="portal-card info-card pt-page-card pt-profile-flat"><div className="card-title"><div><span className="card-kicker">{t('portal_profile_change')}</span><h2>{t('request_data_change')}</h2></div></div><form className="employee-form" onSubmit={submitProfile}><label>{t('data_to_change')}<select value={profileForm.field_name} onChange={e=>setProfileForm({...profileForm,field_name:e.target.value})}><option value="no_telp">{t('phone_number')}</option><option value="alamat_rumah">{t('home_address')}</option><option value="email">Email</option></select></label><label>{t('new_value')}<input value={profileForm.new_value} onChange={e=>setProfileForm({...profileForm,new_value:e.target.value})} required/></label><label>{t('reason')}<textarea value={profileForm.reason} onChange={e=>setProfileForm({...profileForm,reason:e.target.value})}/></label><button className="portal-primary">{t('send_request')}</button></form></div></section>}
  </main>
  <nav className="pt-bottom-nav" aria-label="Primary">
   <button type="button" className={tab==='home'?'active':''} onClick={()=>setTab('home')}><span className="pt-nav-home-icon"><img src={moonLogo} alt="" /></span><small>{t('home')}</small></button>
   <button type="button" className={tab==='attendance'?'active':''} onClick={()=>setTab('attendance')}><span>◉</span><small>{t('attendance')}</small></button>
   <button type="button" className={tab==='jobs'?'active':''} onClick={()=>setTab('jobs')}><span className="pt-nav-jobs-icon" aria-hidden="true">⌂</span><small>Lowongan</small></button>
   <button type="button" className={tab==='profile'?'active':''} onClick={()=>setTab('profile')}><span>♙</span><small>{t('profile')}</small></button>
  </nav>
 </div>;
}

function PortalLoadingScreen(){
 const { t } = useTranslation();
 return <main className="employee-loading-screen" role="status" aria-live="polite">
  <section className="employee-loading-card">
   <div className="employee-loading-logo"><img src={moonLogo} alt="Project by Tirta"/></div>
   <div className="employee-loading-copy">
    <strong>Project by Tirta</strong>
    <span>{t('portal_login_setup')}</span>
   </div>
   <div className="employee-loading-bar" aria-hidden="true"><i/></div>
   <div className="employee-loading-skeletons" aria-hidden="true"><i/><i/><i/></div>
  </section>
 </main>
}




function PayslipReadTracker({
  payroll,
  onRead,
}: {
  payroll: Array<{ id: string }>;
  onRead: (ids: string[]) => void;
}) {
  useEffect(() => {
    onRead((payroll || []).map(x => String(x.id)));
  }, [payroll, onRead]);

  return null;
}

function FeedbackReadTracker({
  feedbacks,
  onRead,
}: {
  feedbacks: Array<{ id: string }>;
  onRead: (ids: string[]) => void;
}) {
  useEffect(() => {
    onRead((feedbacks || []).map(x => String(x.id)));
  }, [feedbacks, onRead]);

  return null;
}


function BpjsEmployeePage({employee,urls,setUrls,loading,setLoading}:{employee:Employee;urls:{kesehatan:string;ketenagakerjaan:string};setUrls:(v:{kesehatan:string;ketenagakerjaan:string})=>void;loading:boolean;setLoading:(v:boolean)=>void}){
 const [center,setCenter]=useState('');
 useEffect(()=>{
  let active=true;
  const run=async()=>{
   setLoading(true);
   const next={kesehatan:'',ketenagakerjaan:''};
   for(const [key,path] of [['kesehatan',employee.bpjs_kesehatan_card_path],['ketenagakerjaan',employee.bpjs_ketenagakerjaan_card_path]] as const){
    if(!path)continue;
    const {data,error}=await supabase.storage.from('bpjs-cards').createSignedUrl(path,900);
    if(!error&&data?.signedUrl) next[key]=data.signedUrl;
   }
   if(active)setUrls(next);
   const {data}=await supabase.from('hris_company_settings').select('bpjs_call_center').eq('id',1).maybeSingle();
   if(active)setCenter(String(data?.bpjs_call_center||''));
   if(active)setLoading(false);
  };
  void run();
  return()=>{active=false};
 },[employee.bpjs_kesehatan_card_path,employee.bpjs_ketenagakerjaan_card_path,setLoading,setUrls]);
 const download=(url:string,name:string)=>{if(!url)return;const a=document.createElement('a');a.href=url;a.download=name;a.target='_blank';a.rel='noopener';a.click()};
 return <section className="pt-page-card pt-bpjs-page">
  <div className="pt-page-heading pt-heading-plain"><span className="portal-eyebrow">BPJS</span><h1>Kartu & Data BPJS</h1><p>Data hanya untuk akun karyawan yang sedang masuk.</p></div>
  <div className="pt-bpjs-identity"><div><small>Nama</small><b>{employee.nama||'-'}</b></div><div><small>Tanggal Lahir</small><b>{employee.tanggal_lahir||'-'}</b></div><div><small>ID Karyawan</small><b>{employee.id_karyawan||'-'}</b></div></div>
  <div className="pt-bpjs-list">
   <article className="pt-bpjs-item"><div><span>Kesehatan</span><b>{employee.bpjs_kesehatan||'Belum diisi'}</b></div>{urls.kesehatan?<><img src={urls.kesehatan} alt="Kartu BPJS Kesehatan" className="pt-bpjs-preview"/><button type="button" className="portal-primary" onClick={()=>download(urls.kesehatan,`BPJS-Kesehatan-${employee.id_karyawan}`)}>Download Kartu</button></>:<small>{loading?'Memuat kartu...':'Kartu belum diunggah HR.'}</small>}</article>
   <article className="pt-bpjs-item"><div><span>Ketenagakerjaan</span><b>{employee.bpjs_ketenagakerjaan||'Belum diisi'}</b></div>{urls.ketenagakerjaan?<><img src={urls.ketenagakerjaan} alt="Kartu BPJS Ketenagakerjaan" className="pt-bpjs-preview"/><button type="button" className="portal-primary" onClick={()=>download(urls.ketenagakerjaan,`BPJS-Ketenagakerjaan-${employee.id_karyawan}`)}>Download Kartu</button></>:<small>{loading?'Memuat kartu...':'Kartu belum diunggah HR.'}</small>}</article>
  </div>
  {center&&<p className="pt-bpjs-help">Call Center: <a href={`tel:${center}`}>{center}</a></p>}
 </section>;
}

function EmployeeHelpPage({question,setQuestion,answer,setAnswer,loading,setLoading,callCenter,setCallCenter}:{question:string;setQuestion:(v:string)=>void;answer:string;setAnswer:(v:string)=>void;loading:boolean;setLoading:(v:boolean)=>void;callCenter:string;setCallCenter:(v:string)=>void}){
 useEffect(()=>{void supabase.from('hris_company_settings').select('bpjs_call_center').eq('id',1).maybeSingle().then(({data})=>setCallCenter(String(data?.bpjs_call_center||'')))},[setCallCenter]);
 const ask=async()=>{
  const text=question.trim();if(!text)return;
  setLoading(true);setAnswer('');
  const {data,error}=await supabase.functions.invoke('employee-ai',{body:{message:text}});
  if(error||!data?.answer){setAnswer(error?.message||data?.error||'Asisten AI belum dapat merespons.');setLoading(false);return;}
  setAnswer(String(data.answer));
  if(data.call_center)setCallCenter(String(data.call_center));
  setLoading(false);
 };
 return <section className="pt-page-card pt-help-page"><div className="pt-page-heading pt-heading-plain"><span className="portal-eyebrow">BANTUAN</span><h1>AI Assistant</h1><p>Tanyakan cara menggunakan fitur HRIS, termasuk cuti dan absensi.</p></div><label className="pt-help-input"><span>Pertanyaan</span><textarea value={question} maxLength={3000} placeholder="Contoh: bagaimana cara mengajukan cuti?" onChange={e=>setQuestion(e.target.value)}/></label><button type="button" className="portal-primary" disabled={loading||!question.trim()} onClick={()=>void ask()}>{loading?'Memproses...':'Tanyakan AI'}</button>{answer&&<div className="pt-help-answer"><strong>Jawaban AI</strong><p>{answer}</p></div>}<div className="pt-human-help"><div><strong>Bantuan manusia</strong><span>Untuk kebutuhan yang memerlukan Call Center.</span></div>{callCenter?<a className="portal-secondary" href={`tel:${callCenter}`}>☎ Hubungi Call Center</a>:<small>Nomor Call Center belum diatur HR.</small>}</div></section>;
}
