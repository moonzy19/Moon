import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../../../lib/supabase/client';
import { CardArtwork } from '../../admin/employee/IDCardModule';
import moonLogo from '../../../assets/moon-logo.svg';

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
  foto_url?:string|null;
  foto?:string|null;
  photo_url?:string|null;
};
type Orientation='vertical'|'horizontal';
type Side='front'|'back';

const DESIGN:any={
  theme:'moon',
  companyName:'Project by Tirta',
  logoDataUrl:'',
  showQr:true,
  showBarcode:true,
};

const toDataUrl=async(blob:Blob)=>await new Promise<string>((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=()=>reject(new Error('Gagal membaca file'));r.readAsDataURL(blob);});
export default function AndroidEmployeeIdCard({employee}:{employee:Employee}){
  const [orientation,setOrientation]=useState<Orientation>(()=>{
    try{return localStorage.getItem('project-tirta-id-card-orientation-v1')==='horizontal'?'horizontal':'vertical'}catch{return 'vertical'}
  });
  const [side,setSide]=useState<Side>('front');
  const [photo,setPhoto]=useState('');
  const [token,setToken]=useState('');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  useEffect(()=>{
    let active=true;
    const raw=String(employee.foto_url||employee.foto||employee.photo_url||'').trim();
    setPhoto('');

    const candidates=[
      raw,
      employee.id?`${employee.id}/avatar.jpg`:'',
      employee.id_karyawan?`${employee.id_karyawan}/avatar.jpg`:''
    ].map(v=>String(v||'').trim()).filter(Boolean);

    const normalizePath=(value:string)=>{
      const m=value.match(/\/storage\/v1\/object\/(?:public|sign|authenticated)\/profile-photos\/(.+)$/i);
      if(m)return decodeURIComponent(m[1].split('?')[0]);
      return value.replace(/^profile-photos\//,'').split('?')[0];
    };

    const load=async()=>{
      try{
        for(const candidate of candidates){
          if(!active)break;

          if(/^data:image\//i.test(candidate)){
            setPhoto(candidate);
            return;
          }

          if(/^https?:\/\//i.test(candidate)){
            try{
              const r=await fetch(candidate);
              if(r.ok){
                const blob=await r.blob();
                setPhoto(await toDataUrl(blob));
                return;
              }
            }catch{}
          }

          const path=normalizePath(candidate);

          try{
            const r=await supabase.storage.from('profile-photos').download(path);
            if(!r.error&&r.data){
              setPhoto(await toDataUrl(r.data));
              return;
            }
          }catch{}

          try{
            const signed=await supabase.storage
              .from('profile-photos')
              .createSignedUrl(path,900);

            if(!signed.error&&signed.data?.signedUrl){
              const r=await fetch(signed.data.signedUrl);
              if(r.ok){
                setPhoto(await toDataUrl(await r.blob()));
                return;
              }
            }
          }catch{}
        }
      }finally{
      }
    };

    void load();
    return()=>{active=false};
  },[employee.foto_url,employee.foto,employee.photo_url]);

  useEffect(()=>{
    let active=true;
    const loadToken=async()=>{
      setToken('');
      try{
        const own=await supabase.rpc('ensure_id_card_verification_token',{
          p_id_karyawan:employee.id_karyawan
        });
        if(active&&own.data){
          setToken(String(own.data));
          return;
        }
        const r=await supabase.from('hris_id_card_tokens')
          .select('token')
          .eq('id_karyawan',employee.id_karyawan)
          .is('revoked_at',null)
          .maybeSingle();
        if(active&&r.data?.token)setToken(String(r.data.token));
      }catch{}
    };
    void loadToken();
    return()=>{active=false};
  },[employee.id_karyawan]);

  const makeSvg=(which:Side)=>CardArtwork({
    employee:employee as any,
    side:which,
    design:{...DESIGN,showQr:true},
    logoUrl:moonLogo,
    photoOverride:photo,
    verificationToken:token,
    orientation,
  });

  const frontSvg=useMemo(()=>makeSvg('front'),[employee,orientation,photo,token]);
  const backSvg=useMemo(()=>makeSvg('back'),[employee,orientation,photo,token]);
  const svg=side==='front'?frontSvg:backSvg;
  const W=orientation==='vertical'?540:856;
  const H=orientation==='vertical'?856:540;


  const svgToDataUrl=(value:string)=>`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(value)))}`;

  
  const downloadDirectory=(Directory as any).Downloads||Directory.Documents;
  const downloadRoot=(Directory as any).Downloads
    ? "Project-by-Tirta/"
    : "Download/Project-by-Tirta/";

  const svgToJpeg=async(textSvg:string)=>{
    const img=new Image();
    await new Promise<void>((resolve,reject)=>{
      img.onload=()=>resolve();
      img.onerror=()=>reject(new Error('Render kartu gagal'));
      img.src=svgToDataUrl(textSvg);
    });
    const canvas=document.createElement('canvas');
    canvas.width=W*2;
    canvas.height=H*2;
    const ctx=canvas.getContext('2d');
    if(!ctx)throw new Error('Canvas tidak tersedia');
    ctx.fillStyle='#ffffff';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    return canvas.toDataURL('image/jpeg',0.95);
  };

  const saveDataUrl=async(dataUrl:string,filename:string)=>{
    const base64=dataUrl.split(',')[1]||'';
    await Filesystem.writeFile({
      path:`${downloadRoot}${filename}`,
      data:base64,
      directory:downloadDirectory,
      recursive:true
    });
  };

  const buildPdf=async()=>{
    const [{ jsPDF }] = await Promise.all([import('jspdf')]);
    const [frontJpeg,backJpeg]=await Promise.all([
      svgToJpeg(frontSvg),
      svgToJpeg(backSvg)
    ]);

    const mmW=orientation==='vertical'?54:85.6;
    const mmH=orientation==='vertical'?85.6:54;
    const pdf=new jsPDF({
      orientation:orientation==='vertical'?'portrait':'landscape',
      unit:'mm',
      format:[mmW,mmH],
      compress:true
    });

    pdf.addImage(frontJpeg,'JPEG',0,0,mmW,mmH,'FRONT','FAST');
    pdf.addPage([mmW,mmH],orientation==='vertical'?'portrait':'landscape');
    pdf.addImage(backJpeg,'JPEG',0,0,mmW,mmH,'BACK','FAST');

    const uri=pdf.output('datauristring');
    return uri.split(',')[1]||'';
  };

  const downloadPdf=async()=>{
    setBusy(true);
    setMessage('');
    try{
      const base64=await buildPdf();
      const filename=`ID-CARD-${employee.id_karyawan}-${orientation}.pdf`;
      await Filesystem.writeFile({
        path:`${downloadRoot}${filename}`,
        data:base64,
        directory:downloadDirectory,
        recursive:true
      });
      setMessage('ID Card PDF tersimpan di Download/Project-by-Tirta.');
    }catch(e){
      setMessage(e instanceof Error?e.message:'Gagal membuat PDF');
    }finally{
      setBusy(false);
    }
  };

  const sharePdf=async()=>{
    setBusy(true);
    setMessage('');
    try{
      const base64=await buildPdf();
      const filename=`ID-CARD-${employee.id_karyawan}-${orientation}.pdf`;

      await Filesystem.writeFile({
        path:filename,
        data:base64,
        directory:Directory.Cache,
        recursive:true
      });

      const uri=(await Filesystem.getUri({
        path:filename,
        directory:Directory.Cache
      })).uri;

      await Share.share({
        title:`ID Card ${employee.nama||''}`,
        files:[uri],
        dialogTitle:'Bagikan / Cetak ID Card'
      });

      setMessage('ID Card siap dibagikan atau dicetak.');
    }catch(e){
      setMessage(e instanceof Error?e.message:'Gagal membagikan ID Card');
    }finally{
      setBusy(false);
    }
  };

  const downloadPng=async(which:Side)=>{
    setBusy(true);
    setMessage('');
    try{
      const textSvg=which==='front'?frontSvg:backSvg;
      const jpeg=await svgToJpeg(textSvg);
      const pngCanvas=document.createElement('canvas');
      pngCanvas.width=W*2;
      pngCanvas.height=H*2;

      const img=new Image();
      await new Promise<void>((resolve,reject)=>{
        img.onload=()=>resolve();
        img.onerror=()=>reject(new Error('Render PNG gagal'));
        img.src=jpeg;
      });

      const ctx=pngCanvas.getContext('2d');
      if(!ctx)throw new Error('Canvas tidak tersedia');
      ctx.drawImage(img,0,0,pngCanvas.width,pngCanvas.height);

      const dataUrl=pngCanvas.toDataURL('image/png');
      await saveDataUrl(
        dataUrl,
        `ID-CARD-${employee.id_karyawan}-${orientation}-${which}.png`
      );
      setMessage('PNG berhasil disimpan.');
    }catch(e){
      setMessage(e instanceof Error?e.message:'Gagal membuat PNG');
    }finally{
      setBusy(false);
    }
  };



  return <section className="pt-idcard-page-v10">
    <style>{`.pt-idcard-page-v10{width:100%;min-width:0;color:#f8fafc}.pt-idcard-page-v10 *{box-sizing:border-box}.pt-idcard-shell-v10{background:transparent;border:0;border-radius:0;box-shadow:none;padding:0}.pt-idcard-head-v10{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px}.pt-idcard-title-v10{margin:0;color:#f8fafc;font-size:22px}.pt-idcard-sub-v10{margin:4px 0 0;color:#aeb7c5;font-size:10px}.pt-idcard-switch-v10{display:flex;gap:6px;flex-wrap:wrap}.pt-idcard-switch-v10 button,.pt-idcard-actions-v10 button{min-height:36px;padding:0 10px;border-radius:9px;border:1px solid #d6ae58;background:#172033;color:#f8fafc;font-size:10px;font-weight:800}.pt-idcard-switch-v10 button.active,.pt-idcard-actions-v10 button.primary{background:#d6ae58;color:#0b1222}.pt-idcard-meta-v10{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}.pt-idcard-meta-v10 span{padding:5px 8px;border-radius:999px;background:#172033;border:1px solid #31405a;color:#aeb7c5;font-size:8px}.pt-idcard-preview-v10{display:flex;justify-content:center;align-items:center;padding:10px 0;overflow:hidden}.pt-idcard-preview-v10 svg{display:block;width:${orientation==='vertical'?'min(100%,290px)':'100%'};max-width:100%;height:auto;filter:drop-shadow(0 12px 25px rgba(0,0,0,.34))}.pt-idcard-status-v10{text-align:center;color:${photo?'#79e1ba':'#ffb86b'};font-size:8px;margin:2px 0 8px}.pt-idcard-actions-v10{display:grid;grid-template-columns:1fr 1fr;gap:7px}.pt-idcard-note-v10{margin-top:7px;color:#aeb7c5;font-size:8px;line-height:1.45}@media(max-width:520px){.pt-idcard-head-v10{display:block}.pt-idcard-actions-v10{grid-template-columns:1fr 1fr}}`}</style>
    <div className="pt-idcard-head-v10">
      <div><span className="portal-eyebrow">ID CARD</span><h1 className="pt-idcard-title-v10">Kartu Identitas Karyawan</h1><p className="pt-idcard-sub-v10">{employee.nama} · {employee.id_karyawan}</p></div>
      <div className="pt-idcard-switch-v10"><button type="button" className={orientation==='vertical'?'active':''} onClick={()=>setOrientation('vertical')}>↕ Vertikal</button><button type="button" className={orientation==='horizontal'?'active':''} onClick={()=>setOrientation('horizontal')}>↔ Horizontal</button></div>
    </div>
    <div className="pt-idcard-shell-v10">
      <div className="pt-idcard-meta-v10">
        <span>{orientation==='vertical'?'54 × 85,6 mm':'85,6 × 54 mm'}</span>
      </div>
      <div className="pt-idcard-switch-v10" style={{margin:'8px 0'}}><button type="button" className={side==='front'?'active':''} onClick={()=>setSide('front')}>DEPAN</button><button type="button" className={side==='back'?'active':''} onClick={()=>setSide('back')}>BELAKANG</button></div>
      <div className="pt-idcard-preview-v10" dangerouslySetInnerHTML={{__html:svg}} />
      
      {message&&<div style={{margin:"10px 0",padding:"12px 14px",border:"1px solid rgba(214,174,88,.7)",borderRadius:"12px",background:"rgba(16,24,39,.97)",color:"#fff",fontSize:"11px",fontWeight:800,textAlign:"center",lineHeight:1.45,boxShadow:"0 6px 18px rgba(0,0,0,.18)"}}>{message}</div>}<div className="pt-idcard-actions-v10">
        <button type="button" className="primary" disabled={busy} onClick={()=>void downloadPdf()}>⬇ Download ID Card</button>
        <button type="button" className="primary" disabled={busy} onClick={()=>void sharePdf()}>↗ Bagikan / Cetak</button>
        <button type="button" disabled={busy} onClick={()=>void downloadPng('front')}>PNG Depan</button>
        <button type="button" disabled={busy} onClick={()=>void downloadPng('back')}>PNG Belakang</button>
      </div>
      {message&&<div className="pt-idcard-note-v10">{message}</div>}
    </div>
  </section>;
}
