import { useEffect, useState } from 'react';
import { useTranslation } from '../../../locales/LanguageContext';
import { supabase } from '../../../lib/supabase/client';

type Rule = { id:string; rule_code:string; rule_name:string; category:string; effective_from:string; employee_rate:number|null; employer_rate:number|null; cap_amount:number|null; active:boolean };

export default function PayrollIndonesiaV23() {
  const { t } = useTranslation();
  const [rules,setRules]=useState<Rule[]>([]);
  const [loading,setLoading]=useState(true);
  const [message,setMessage]=useState('');

  const load=async()=>{
    setLoading(true);
    const {data,error}=await supabase.from('hris_payroll_statutory_rules').select('*').order('category').order('rule_code');
    if(error) setMessage(error.message); else setRules((data||[]) as Rule[]);
    setLoading(false);
  };
  useEffect(()=>{load()},[]);

  const pct=(v:number|null)=>v==null?'—':`${(v*100).toFixed(2)}%`;
  return <section className="module-page">
    <div className="module-header">
      <div><div className="eyebrow">{t('payroll_indonesia_eyebrow')}</div><h1>{t('payroll_indonesia_title')}</h1><p>{t('payroll_statutory_registry_desc')}</p></div>
      <button className="btn-primary" onClick={load}>{t('payroll_reload')}</button>
    </div>
    {message && <div className="alert">{message}</div>}
    <div className="ess-kpis">
      <div className="ess-kpi"><span>{t('payroll_rules')}</span><strong>{rules.length}</strong></div>
      <div className="ess-kpi"><span>BPJS</span><strong>{rules.filter(r=>r.category==='BPJS').length}</strong></div>
      <div className="ess-kpi"><span>PPh 21</span><strong>{rules.filter(r=>r.category==='PPh21').length}</strong></div>
      <div className="ess-kpi"><span>THR</span><strong>{rules.filter(r=>r.category==='THR').length}</strong></div>
    </div>
    <div className="table-card">
      <div className="table-scroll"><table><thead><tr><th>{t('payroll_rule')}</th><th>{t('payroll_category')}</th><th>{t('payroll_effective_from')}</th><th>{t('payroll_employee_rate')}</th><th>{t('payroll_employer_rate')}</th><th>{t('payroll_cap')}</th><th>{t('payroll_status')}</th></tr></thead>
      <tbody>{loading?<tr><td colSpan={7}>{t('payroll_loading')}</td></tr>:rules.map(r=><tr key={r.id}><td><strong>{r.rule_code}</strong><div>{r.rule_name}</div></td><td>{r.category}</td><td>{r.effective_from}</td><td>{pct(r.employee_rate)}</td><td>{pct(r.employer_rate)}</td><td>{r.cap_amount==null?'—':new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(r.cap_amount)}</td><td><span className="status-badge">{r.active?t('payroll_active'):t('payroll_inactive')}</span></td></tr>)}</tbody>
      </table></div>
    </div>
    <div className="alert">{t('payroll_registry_warning')}</div>
  </section>;
}
