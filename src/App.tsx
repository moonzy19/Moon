import { useEffect, useState, type FormEvent } from 'react';
import { Capacitor } from '@capacitor/core';
import { isSupabaseConfigured, supabase } from './lib/supabase/client';
import { signIn } from './lib/auth';
import { checkForAppUpdate } from './lib/app-update';
import { useTranslation } from './locales/LanguageContext';
import {
  getPublicAppTheme,
  applyProjectTheme,
  type PublicAppTheme
} from './lib/userPreferences';

import moonLogo from './assets/moon-logo.svg';
import AndroidCosmicBackground from './components/karyawan/dashboard/AndroidCosmicBackground';

import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import EmployeeRegister from './pages/EmployeeRegister/EmployeeRegister';
import EmployeePortal from './pages/EmployeePortal/EmployeePortal';
import Home from './pages/Home/Home';
import VerifyIdCard from './pages/VerifyIdCard/VerifyIdCard';

import ErrorBoundary from './components/common/ErrorBoundary';

const IS_ANDROID_APP = Capacitor.getPlatform() === 'android';

const applyPublicAppTheme = (theme: PublicAppTheme) => {
  applyProjectTheme(theme, false);
};


type View = 'home' | 'login' | 'admin' | 'employee' | 'register' | 'reset-password' | 'verify';

type HrRole =
  | 'Super Admin'
  | 'Admin'
  | 'HRD'
  | 'Payroll'
  | 'Supervisor';

const HR_ROLES: HrRole[] = [
  'Super Admin',
  'Admin',
  'HRD',
  'Payroll',
  'Supervisor',
];

function getVerifyTokenFromLocation(): string | null {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash.toLowerCase().startsWith('verify/')) return null;
  const token = hash.slice('verify/'.length).split(/[?#/]/, 1)[0];
  if (!token) return null;
  try {
    return decodeURIComponent(token);
  } catch {
    return null;
  }
}

/* =========================================================
   RESOLVE ACCOUNT
   Menentukan halaman berdasarkan email + role
   ========================================================= */

async function resolveAccount(): Promise<{
  view: View;
  role: string;
  employeeLinked: boolean;
}> {
  const { data } = await supabase.auth.getUser();

  const user = data.user;

  if (!user?.email) {
    return {
      view: 'login',
      role: '',
      employeeLinked: false,
    };
  }

  const email = user.email.trim().toLowerCase();

  /* =======================================================
     1. CEK AKUN HR / ADMIN
     ======================================================= */

  const { data: authProfile } = await supabase
    .from('hris_users')
    .select('role,status')
    .eq('auth_user_id', user.id)
    .maybeSingle();

  const profile = authProfile || (await supabase
    .from('hris_users')
    .select('role,status')
    .eq('email', email)
    .maybeSingle()).data;

  if (
    profile?.status === 'Aktif' &&
    HR_ROLES.includes(profile.role as HrRole)
  ) {
    return {
      view: 'admin',
      role: profile.role,
      employeeLinked: true,
    };
  }

  /* =======================================================
     2. CEK AKUN KARYAWAN
     ======================================================= */

  // Employee linking is performed in a SECURITY DEFINER RPC so the browser
  // never receives permission to rewrite identity fields directly.
  await supabase.rpc('hris_claim_employee_account');

  const { data: employee } = await supabase
    .from('karyawan')
    .select(
      'id,id_karyawan,nama,email,auth_user_id,status_aktif,status_karyawan'
    )
    .eq('auth_user_id', user.id)
    .maybeSingle();

  if (employee) {
    return {
      view: 'employee',
      role: 'Karyawan',
      employeeLinked: true,
    };
  }

  /*
   * Akun Supabase ada tetapi belum ditemukan
   * pada master karyawan.
   */

  return {
    view: 'employee',
    role: 'Karyawan',
    employeeLinked: false,
  };
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
const { t } = useTranslation();

  const [view, setView] = useState<View>('home');

  /* =======================================================
     GLOBAL THEME AUTHORITY
     The Super Admin selected theme is applied to every route
     (web + Android + admin + employee + public pages).
     Supabase remains the source of truth; localStorage is only
     the short-term fallback handled by getPublicAppTheme().
     ======================================================= */
  useEffect(() => {
    let active = true;

    const refreshGlobalTheme = async () => {
      const next = await getPublicAppTheme();
      if (!active) return;
      applyPublicAppTheme(next);
    };

    const onTheme = (event: Event) => {
      const next = (event as CustomEvent<string>).detail;
      if (next === 'professional' || next === 'sun' || next === 'moon' || next === 'galaxy' || next === 'blackhole' || next === 'nebula' || next === 'aurora') {
        applyPublicAppTheme(next as PublicAppTheme);
      }
    };

    void refreshGlobalTheme();
    window.addEventListener('project-tirta-public-theme-change', onTheme);

    const timer = window.setInterval(() => {
      void refreshGlobalTheme();
    }, 5000);

    return () => {
      active = false;
      window.clearInterval(timer);
      window.removeEventListener('project-tirta-public-theme-change', onTheme);
    };
  }, []);


  const [loginOpen, setLoginOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checking, setChecking] = useState(true);
  useEffect(() => {
    if (!checking) {
      document.getElementById('pt-startup-screen')?.remove();
    }
  }, [checking]);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /* =======================================================
     NAVIGATION
     ======================================================= */

  const go = (next: View) => {
    setError('');
    setView(next);

    window.location.hash = `/${next}`;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* =======================================================
     INITIAL SESSION CHECK
     ======================================================= */

  useEffect(() => {
    void checkForAppUpdate().catch((error) => {
      console.warn('App update check failed:', error);
    });

    let active = true;
    let bootExpired = false;
    const BOOT_TIMEOUT_MS = 12000;

    const bootTimeout = window.setTimeout(() => {
      if (!active) return;
      bootExpired = true;
      setView(IS_ANDROID_APP ? 'login' : 'home');
      setLoginOpen(IS_ANDROID_APP);
      setChecking(false);
      setError('Sesi awal membutuhkan waktu terlalu lama. Silakan masuk kembali.');
      window.location.hash = IS_ANDROID_APP ? '/login' : '/';
    }, BOOT_TIMEOUT_MS);

    const boot = async () => {
      setChecking(true);

      /* ---------------------------------------------------
         VERIFIKASI ID CARD PUBLIK
         QR membuka route ini tanpa memerlukan login.
         --------------------------------------------------- */

      const verifyToken = getVerifyTokenFromLocation();
      if (verifyToken) {
        if (active) {
          setView('verify');
          setLoginOpen(false);
          setChecking(false);
        }
        window.clearTimeout(bootTimeout);
        return;
      }

      /* ---------------------------------------------------
         SUPABASE BELUM DIKONFIGURASI
         --------------------------------------------------- */

      if (!isSupabaseConfigured) {
        if (active) {
          setView(IS_ANDROID_APP ? 'login' : 'home');
          setLoginOpen(IS_ANDROID_APP);
          setChecking(false);
          window.location.hash = IS_ANDROID_APP ? '/login' : '/';
        }

        window.clearTimeout(bootTimeout);
        return;
      }

      /* ---------------------------------------------------
         CEK SESSION
         --------------------------------------------------- */

      const { data } = await supabase.auth.getSession();

      if (!active || bootExpired) return;

      /* ---------------------------------------------------
         TIDAK ADA SESSION → LOGIN
         --------------------------------------------------- */

      if (window.location.pathname === '/reset-password' || window.location.hash === '#/reset-password') {
        setView('reset-password');
        window.clearTimeout(bootTimeout);
        setChecking(false);
        return;
      }

      if (!data.session) {
        if (IS_ANDROID_APP) {
          setView('login');
          setLoginOpen(true);
          window.location.hash = '/login';
        } else {
          setView('home');
          window.location.hash = '/';
        }

        window.clearTimeout(bootTimeout);
        setChecking(false);
        return;
      }

      /* ---------------------------------------------------
         ADA SESSION → TENTUKAN ROLE
         --------------------------------------------------- */

      const account = await resolveAccount();

      if (!active || bootExpired) return;

      setView(account.view);

      window.location.hash = `/${account.view}`;

      window.clearTimeout(bootTimeout);
      setChecking(false);
    };

    void boot().catch((error) => {
      console.error('APP_BOOT_ERROR:', error);

      if (!active || bootExpired) return;

      window.clearTimeout(bootTimeout);

      setView(IS_ANDROID_APP ? 'login' : 'home');
      setLoginOpen(IS_ANDROID_APP);
      setChecking(false);
      setError('Sesi awal tidak dapat diperiksa. Silakan coba lagi.');

      window.location.hash = IS_ANDROID_APP ? '/login' : '/';
    });

    /* =====================================================
       AUTH STATE LISTENER
       ===================================================== */

    const { data: listener } =
      supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (!active) return;

          /* -----------------------------------------------
             VERIFIKASI ID CARD PUBLIK
             ----------------------------------------------- */
          const verifyToken = getVerifyTokenFromLocation();
          if (verifyToken) {
            setView('verify');
            setLoginOpen(false);
            setChecking(false);
            return;
          }

          /* -----------------------------------------------
             LOGOUT
             ----------------------------------------------- */

          if (event === 'SIGNED_OUT' || !session) {
            if (IS_ANDROID_APP) {
              setView('login');
              setLoginOpen(true);
            } else {
              setView('home');
              setLoginOpen(false);
            }

            setEmail('');
            setPassword('');
            setError('');
            setChecking(false);

            window.location.hash = IS_ANDROID_APP ? '/login' : '/';
            return;
          }

          /* -----------------------------------------------
             LOGIN BERHASIL
             ----------------------------------------------- */

          if (event === 'SIGNED_IN') {
            const account = await resolveAccount();

            if (!active) return;

            setView(account.view);

            setPassword('');
            setError('');
            setChecking(false);

            window.location.hash = `/${account.view}`;
          }
        }
      );

    return () => {
      active = false;
      window.clearTimeout(bootTimeout);
      listener.subscription.unsubscribe();
    };
  }, []);

  /* =======================================================
     LOGIN
     ======================================================= */

  const login = async (event: FormEvent) => {
    event.preventDefault();

    setError('');

    if (!isSupabaseConfigured) {
      setError(t('supabase_not_configured'));

      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError(t('email_password_required'));

      return;
    }

    setLoading(true);

    const { data, error: loginError } =
      await signIn(cleanEmail, password);

    if (loginError || !data.user) {
      setLoading(false);

      setError(
        loginError?.message ||
          t('invalid_credentials')
      );

      return;
    }

    /* ---------------------------------------------------
       SETELAH LOGIN → BACA ROLE
       --------------------------------------------------- */

    const account = await resolveAccount();

    setView(account.view);

    setLoading(false);
    setPassword('');
    setError('');

    window.location.hash = `/${account.view}`;
  };

  /* =======================================================
     LOADING / SESSION CHECK
     ======================================================= */

  if (checking) {
    return (
      <AppLoadingScreen
        message={t('checking_security_session')}
        android={IS_ANDROID_APP}
      />
    );
  }

  /* =======================================================
     RENDER APPLICATION
     ======================================================= */

  return (
    <ErrorBoundary>

      <div
        className="app-root"
      >

        {/* Employee Portal follows the Super Admin portal theme and has no personal theme selector. */}

        {/* =================================================
            LOGIN
            ================================================= */}

        {view === 'home' && (
          <div className="home-with-inline-login">
            <Home
              onMasuk={() => {
                setError('');
                setLoginOpen(true);
                window.setTimeout(() => {
                  document.getElementById('home-login')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 0);
              }}
              onRegister={() => go('register')}
            />
          </div>
        )}

        {view === 'verify' && (
          <VerifyIdCard
            token={getVerifyTokenFromLocation() || ''}
            onHome={() => { setView('home'); setChecking(false); window.location.hash = '/'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {(
          (view === 'home' && !IS_ANDROID_APP) ||
          (loginOpen && (view === 'home' || view === 'login') && IS_ANDROID_APP)
        ) && (
          <section
            id={!IS_ANDROID_APP && view === 'home' ? 'home-login' : undefined}
            className={!IS_ANDROID_APP && view === 'home' ? 'home-inline-login-slot' : undefined}
          >
          <LoginScreen
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={login}
            onRegister={() => { setLoginOpen(false); go('register'); }}
            onClose={() => {
              if (IS_ANDROID_APP) {
                setView('login');
                setLoginOpen(true);
                window.location.hash = '/login';
                return;
              }
              setError('');
            }}
            loading={loading}
            error={error}
          />
          </section>
        )}

        {view === 'reset-password' && (
          <ResetPasswordScreen
            onDone={() => {
            setView(IS_ANDROID_APP ? 'login' : 'home');
            setLoginOpen(true);
            window.history.replaceState({}, '', IS_ANDROID_APP ? '/login' : '/');
            window.location.hash = IS_ANDROID_APP ? '/login' : '/';
          }}
          />
        )}

        {/* =================================================
            REGISTRASI KARYAWAN
            ================================================= */}

        {view === 'register' && (
          <div className="public-page">

            <EmployeeRegister
              onBack={() => {
                setView(IS_ANDROID_APP ? 'login' : 'home');
                setLoginOpen(true);
                window.location.hash = IS_ANDROID_APP ? '/login' : '/';
              }}
            />

          </div>
        )}

        {/* =================================================
            DASHBOARD HR
            ================================================= */}

        {view === 'admin' && (
          <AdminDashboard />
        )}

        {/* =================================================
            PORTAL KARYAWAN
            ================================================= */}

        {view === 'employee' && (
          <EmployeePortal />
        )}

      </div>

    </ErrorBoundary>
  );
}


function AppLoadingScreen({
  message,
  android = false,
}: {
  message: string;
  android?: boolean;
}) {
  return (
    <main
      className={`app-loading-screen${android ? ' pt-cosmic-auth' : ''}`}
      aria-label={message || 'Loading'}
      role="status"
    >
      <div className="pt-loading-brand">
        <img src={moonLogo} alt="Project by Tirta" />
        <strong>Project by Tirta</strong>
        <span>Human Resources Information System</span>
      </div>
    </main>
  );
}

/* =========================================================
   RESET PASSWORD
   ========================================================= */
function ResetPasswordScreen({ onDone }: { onDone: () => void }) {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');
    if (password.length < 8) {
      setError(t('password_min_error_short'));
      return;
    }
    if (password !== confirmation) {
      setError(t('password_mismatch_short'));
      return;
    }
    setSaving(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSaving(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setMessage(t('password_updated'));
  };

  return (
    <main className="unified-login-page">
      <section className="unified-login-card login-modal-card" aria-labelledby="reset-title">
        <div className="unified-brand">
          <div className="unified-logo"><img src={moonLogo} alt="Project by Tirta" className="moon-logo" /></div>
          <div><strong>Project by Tirta</strong><small>{t('human_resources_information_system')}</small></div>
        </div>
        <div className="unified-login-heading">
          <span>{t('reset_password')}</span>
          <h1 id="reset-title">{t('new_password')}</h1>
          <p>{t('new_password_hint')}</p>
        </div>
        {error && <div className="unified-login-error" role="alert">{error}</div>}
        {message && <div className="unified-login-success" role="status">{message}</div>}
        {!message && <form onSubmit={submit} className="unified-login-form">
          <label><span>{t('new_password')}</span><input type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={8} autoComplete="new-password" required /></label>
          <label><span>{t('confirm_password_label')}</span><input type="password" value={confirmation} onChange={e => setConfirmation(e.target.value)} minLength={8} autoComplete="new-password" required /></label>
          <button type="submit" className="unified-login-button" disabled={saving}>{saving ? t('saving') : t('save_password')}</button>
        </form>}
        {message && <button type="button" className="unified-login-button" onClick={onDone}>{t('back_to_login')}</button>}
      </section>
    </main>
  );
}

/* =========================================================
   LOGIN SCREEN
   ========================================================= */

function LoginScreen({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  onRegister,
  loading,
  error,
  onClose,
}: {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  onRegister: () => void;
  onClose: () => void;
  loading: boolean;
  error: string;
}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState(email);
  const [forgotMessage, setForgotMessage] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [remember, setRemember] = useState(() => localStorage.getItem('project-tirta-remember') === '1');

  const sendReset = async () => {
    const target = forgotEmail.trim().toLowerCase();
    if (!target) { setForgotMessage(t('email_required_short')); return; }
    setForgotLoading(true); setForgotMessage('');
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(target, { redirectTo: `${window.location.origin}/reset-password` });
    setForgotLoading(false);
    setForgotMessage(resetError ? resetError.message : t('reset_email_sent'));
  };

  return (
    <main
      className={`unified-login-page${IS_ANDROID_APP ? ' pt-cosmic-auth' : ' pt-web-cosmic-auth modal-overlay home-inline-login-page'}`}
      onMouseDown={e =>
{ if (e.target === e.currentTarget) onClose(); }}
    >
      {IS_ANDROID_APP && <AndroidCosmicBackground />}
      <section className={`unified-login-card login-modal-card${IS_ANDROID_APP ? ' pt-auth-card' : ''}`}>
        <button type="button" className="login-modal-close" onClick={onClose} aria-label={t('close')}>×</button>

        {/* =================================================
            BRAND
            ================================================= */}

        <div className="unified-brand">

          <div className="unified-logo">
  <img
    src={moonLogo}
    alt="Project by Tirta"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    }}
  />
</div>
          <div>

            <strong>
              Project by Tirta
            </strong>

            <small>
              {t('human_resources_information_system')}</small>

          </div>

        </div>

        {/* =================================================
            HEADING
            ================================================= */}

        <div className="unified-login-heading">

          <span>{t('secure_access')}</span>

          <h1>
             {t('legacy_masuk_ke_akun_anda')}
          </h1>

          <p>{t('login_description')}</p>

        </div>

        {/* =================================================
            ERROR
            ================================================= */}

        {error && (
          <div className="unified-login-error">
            {error}
          </div>
        )}

        {/* =================================================
            FORM
            ================================================= */}

        <form
          onSubmit={onSubmit}
          className="unified-login-form"
        >

          <label>

            <span>
              {t('email')}
            </span>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="nama@email.com"
              autoComplete="username"
              disabled={loading}
            />

          </label>

          <label>

            <span>
              {t('password')}
            </span>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder={t('password_placeholder')}
              autoComplete="current-password"
              disabled={loading}
            />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? t('hide_password') : t('show_password')}>{showPassword ? t('hide_password') : t('show_password')}</button>

          </label>

          <div className="login-options">
            <label className="remember-option"><input type="checkbox" checked={remember} onChange={e => { setRemember(e.target.checked); localStorage.setItem('project-tirta-remember', e.target.checked ? '1' : '0'); }} /> <span>{t('remember_me')}</span></label>
            <button type="button" onClick={() => { setForgot(true); setForgotEmail(email); }}>{t('forgot_password')}</button>
          </div>

          {forgot && (
            <div className="forgot-panel">
              <strong>{t('reset_password')}</strong>
              <p>{t('reset_email_instruction')}</p>
              <input type="email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} placeholder="nama@email.com" />
              {forgotMessage && <small>{forgotMessage}</small>}
              <div><button type="button" className="secondary" onClick={() => setForgot(false)}>{t('cancel')}</button><button type="button" className="primary" disabled={forgotLoading} onClick={sendReset}>{forgotLoading ? t('saving') : t('send_link')}</button></div>
            </div>
          )}

          <button
            type="submit"
            className="unified-login-button"
            disabled={loading}
          >
            {loading ? (
              <span className="login-loading-content">
                <img src={moonLogo} alt="" className="login-loading-logo" />
                <span>{t('verifying')}</span>
              </span>
            ) : (
              t('system_login')
            )}
          </button>

        </form>

        {/* =================================================
            REGISTER
            ================================================= */}

        <div className="unified-login-register">

          <span>
            {t('employee_account_missing')}
          </span>

          <button
            type="button"
            onClick={onRegister}
            disabled={loading}
          >
            {t('register_employee')}
          </button>

        </div>

        {/* =================================================
            SECURITY
            ================================================= */}

        <div className="unified-login-security">

          <span>
            🔒
          </span>

          <div>

            <strong>
              {t('secure_hr_access')}
            </strong>

            <small>
              
            </small>

          </div>

        </div>

      </section>

    </main>
  );
}
