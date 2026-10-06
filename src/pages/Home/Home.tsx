import moonLogo from '../../assets/moon-logo.png';
import { useTranslation } from '../../locales/LanguageContext';
import '../../styles/web-reference.css';

import type { ReactNode } from 'react';

export default function Home({ children }: { children?: ReactNode }) {
  const { t } = useTranslation();
  return (
    <main className="public-home">
      <header className="public-header">
        <div className="public-brand">
          <img src={moonLogo} alt="Project by Tirta" />
          <div><strong>Project by Tirta</strong><span>{t('home_employee_platform')}</span></div>
        </div>

      </header>

      <section className="public-hero">
        <div className="public-hero-copy">
          <span className="public-eyebrow">{t('home_eyebrow')}</span>
          <h1>{t('home_title')}<br /><em>{t('home_title_emphasis')}</em></h1>
          <p>{t('home_description')}</p>
          <div className="public-trust"><span>●</span> {t('home_secure_access')} <i /> {t('home_role_platform')} <i /> {t('home_workforce_data')}</div>
        </div>

        <div className="moon-hero-visual" aria-hidden="true">
          <div className="moon-orbit orbit-one" />
          <div className="moon-orbit orbit-two" />
          <div className="moon-glow" />
          <img src={moonLogo} alt="" />
          <div className="moon-caption"><b>PROJECT BY TIRTA</b><span>{t('home_employee_platform')}</span></div>
        </div>

        {children && (
          <section className="public-home-login" aria-label="Login">
            {children}
          </section>
        )}
      </section>

      <section id="features" className="public-features">
        {[
          ['♙', t('employee'), t('employee_360')],
          ['◷', t('attendance'), t('attendance_desc')],
          ['Rp', t('payroll'), t('payroll_desc')],
          ['◇', t('talent'), t('performance') + ' & ' + t('recruitment')],
        ].map(([icon, title, desc]) => (
          <article key={title}><span>{icon}</span><div><b>{title}</b><small>{desc}</small></div></article>
        ))}
      </section>
    </main>
  );
}
