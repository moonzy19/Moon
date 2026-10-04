import moonLogo from './assets/moon-logo.svg';

const STYLE_ID = 'tirta-canonical-loading-v58';

const LOADING_CSS = `
:root {
  --tirta-loading-bg: #030710;
}

html:has(.app-loading-screen),
body:has(.app-loading-screen),
#root:has(.app-loading-screen),
html:has(.employee-loading-screen),
body:has(.employee-loading-screen),
#root:has(.employee-loading-screen),
html:has(.login-wrap:has(.loading)),
body:has(.login-wrap:has(.loading)),
#root:has(.login-wrap:has(.loading)) {
  background: var(--tirta-loading-bg) ;
}

.app-loading-screen,
.employee-loading-screen,
.login-wrap:has(.loading) {
  position: fixed ;
  inset: 0 ;
  z-index: 2147483647 ;
  width: 100vw ;
  height: 100dvh ;
  min-height: 100dvh ;
  margin: 0 ;
  padding: 0 ;
  display: grid ;
  place-items: center ;
  overflow: hidden ;
  box-sizing: border-box ;
  background:
    radial-gradient(circle at 50% 45%, rgba(214,174,88,.09), transparent 28%),
    linear-gradient(180deg, #071126 0%, var(--tirta-loading-bg) 100%) ;
}

.app-loading-card,
.employee-loading-card,
.login-wrap:has(.loading) .login-card {
  width: auto ;
  max-width: none ;
  min-width: 0 ;
  min-height: 0 ;
  margin: 0 ;
  padding: 0 ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  background: transparent ;
  border: 0 ;
  border-radius: 0 ;
  box-shadow: none ;
  backdrop-filter: none ;
}

.app-loading-logo,
.app-loading-brand img,
.employee-loading-logo img,
.employee-loading-logo-only,
.app-loading-logo-only {
  width: 72px ;
  height: 72px ;
  max-width: 72px ;
  max-height: 72px ;
  min-width: 72px ;
  min-height: 72px ;
  display: block ;
  margin: 0 ;
  padding: 0 ;
  object-fit: contain ;
  background: transparent ;
  border: 0 ;
  border-radius: 0 ;
  box-shadow: none ;
  filter: drop-shadow(0 0 14px rgba(214,174,88,.34)) ;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite ;
}

.app-loading-brand,
.employee-loading-logo {
  display: contents ;
}

.app-loading-copy,
.employee-loading-copy,
.app-loading-indicator,
.employee-loading-bar,
.employee-loading-skeletons,
.app-loading-indicator i,
.employee-loading-bar i,
.employee-loading-skeletons i {
  display: none ;
}

.login-wrap:has(.loading) .login-card .loading {
  position: fixed ;
  left: 50% ;
  top: 50% ;
  transform: translate(-50%, -50%) ;
  width: 72px ;
  height: 72px ;
  min-width: 72px ;
  min-height: 72px ;
  margin: 0 ;
  padding: 0 ;
  display: block ;
  color: transparent ;
  font-size: 0 ;
  background: transparent ;
  border: 0 ;
  box-shadow: none ;
}

.login-wrap:has(.loading) .login-card .loading::before {
  content: "" ;
  display: block ;
  width: 72px ;
  height: 72px ;
  margin: 0 ;
  background: url("${moonLogo}") center / contain no-repeat ;
  filter: drop-shadow(0 0 14px rgba(214,174,88,.34)) ;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite ;
}

.login-loading-content {
  display: inline-flex ;
  align-items: center ;
  justify-content: center ;
  gap: 8px ;
}

.login-loading-logo {
  width: 22px ;
  height: 22px ;
  object-fit: contain ;
  display: block ;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite ;
  filter: drop-shadow(0 0 7px rgba(214,174,88,.30)) ;
}

.verify-id-loading {
  min-height: 72px ;
  display: grid ;
  place-items: center ;
}

.verify-id-loading span {
  display: none ;
}

.verify-id-loading::before {
  content: "" ;
  width: 56px ;
  height: 56px ;
  display: block ;
  background: url("${moonLogo}") center / contain no-repeat ;
  filter: drop-shadow(0 0 10px rgba(214,174,88,.30)) ;
  animation: tirta-loading-pulse 1.6s ease-in-out infinite ;
}

@keyframes tirta-loading-pulse {
  0%, 100% {
    transform: scale(.94);
    opacity: .74;
  }
  50% {
    transform: scale(1.06);
    opacity: 1;
  }
}

.unified-login-button:disabled {
  transform: none ;
}

@media (prefers-reduced-motion: reduce) {
  .app-loading-logo,
  .app-loading-brand img,
  .employee-loading-logo img,
  .employee-loading-logo-only,
  .app-loading-logo-only,
  .login-wrap:has(.loading) .login-card .loading::before,
  .login-loading-logo,
  .verify-id-loading::before {
    animation: none ;
  }
}
`;

export function installLoadingStyles(): void {
  if (typeof document === 'undefined') return;
  // Web loading visuals are owned by web-reference.css.
  // Keep the existing runtime stylesheet unchanged for Android only.
  if (document.documentElement.dataset.platform === 'web') return;
  const existing = document.getElementById(STYLE_ID);
  if (existing) existing.remove();
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = LOADING_CSS;
  document.head.appendChild(style);
}
