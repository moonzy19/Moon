/* Generated runtime stylesheet for Project by Tirta. */

const LEGACY_STYLES = "/* =========================================================\n   PROJECT BY TIRTA - GLOBAL\n   ========================================================= */\n\n* {\n  box-sizing: border-box;\n}\n\n:root {\n  --app-primary: #101a33;\n  --app-primary-contrast: #ffffff;\n  --app-accent: #d6ae58;\n  --app-bg: #f6f7fb;\n  --app-surface: #ffffff;\n  --app-surface-alt: #eef2f7;\n  --app-text: #172033;\n  --app-muted: #667085;\n  --app-border: #dfe5ee;\n  --app-success: #16845a;\n  --app-warning: #b7791f;\n  --app-danger: #b42318;\n}\n\nhtml,\nbody,\n#root {\n  width: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    sans-serif;\n  background: var(--app-bg);\n}\n\nbody {\n  min-height: 100vh;\n  color: var(--app-text);\n  background: var(--app-bg);\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n\n/* =========================================================\n   APP\n   ========================================================= */\n\n.app-root {\n  min-height: 100vh;\n}\n\n/* =========================================================\n   LOGIN PAGE\n   ========================================================= */\n\n.unified-login-page {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    radial-gradient(\n      circle at 15% 15%,\n      rgba(31, 75, 150, 0.08),\n      transparent 32%\n    ),\n    radial-gradient(\n      circle at 85% 85%,\n      rgba(31, 75, 150, 0.07),\n      transparent 30%\n    ),\n    #f4f7fb;\n}\n\n/* =========================================================\n   LOGIN CARD\n   ========================================================= */\n\n.unified-login-card {\n  width: 380px;\n  max-width: calc(100% - 32px);\n  padding: 28px;\n  box-sizing: border-box;\n  box-shadow:\n    0 24px 60px rgba(15, 35, 65, 0.10),\n    0 4px 16px rgba(15, 35, 65, 0.04);\n}\n\n.unified-login-card.compact {\n  width: min(100%, 420px);\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n/* =========================================================\n   BRAND\n   ========================================================= */\n\n.unified-brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 42px;\n}\n\n.unified-logo {\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background: #071a3d;\n  border: 1px solid #dcae21;\n  color: #e5b82d;\n  font-size: 19px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  box-shadow: 0 5px 16px rgba(7, 26, 61, 0.15);\n}\n\n.unified-brand strong {\n  display: block;\n  color: #071a3d;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1.2;\n}\n\n.unified-brand small {\n  display: block;\n  margin-top: 4px;\n  color: #7a879b;\n  font-size: 11px;\n  line-height: 1.4;\n}\n\n/* =========================================================\n   HEADING\n   ========================================================= */\n\n.unified-login-heading {\n  margin-bottom: 28px;\n}\n\n.unified-login-heading > span {\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #b88910;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n}\n\n.unified-login-heading h1 {\n  margin: 0 0 10px;\n  color: #071a3d;\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1.18;\n  letter-spacing: -0.8px;\n}\n\n.unified-login-heading p {\n  margin: 0;\n  color: #68758a;\n  font-size: 14px;\n  line-height: 1.65;\n}\n\n/* =========================================================\n   ERROR\n   ========================================================= */\n\n.unified-login-error {\n  margin-bottom: 20px;\n  padding: 13px 15px;\n  border: 1px solid #f0c7c7;\n  border-radius: 10px;\n  background: #fff5f5;\n  color: #b42318;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n/* =========================================================\n   LOGIN FORM\n   ========================================================= */\n\n.unified-login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n}\n\n.unified-login-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.unified-login-form label > span {\n  color: #172b4d;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.unified-login-form input {\n  width: 100%;\n  height: 48px;\n  padding: 0 14px;\n  border: 1px solid #d8e0eb;\n  border-radius: 10px;\n  outline: none;\n  background: #ffffff;\n  color: #10213f;\n  font-size: 14px;\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n\n.unified-login-form input::placeholder {\n  color: #a1acbb;\n}\n\n.unified-login-form input:hover {\n  border-color: #b9c5d5;\n}\n\n.unified-login-form input:focus {\n  border-color: #183b73;\n  box-shadow: 0 0 0 3px rgba(24, 59, 115, 0.10);\n}\n\n/* =========================================================\n   LOGIN BUTTON\n   ========================================================= */\n\n.unified-login-button {\n  width: 100%;\n  height: 50px;\n  margin-top: 5px;\n  border: 0;\n  border-radius: 10px;\n  background: #071a3d;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 750;\n  transition:\n    transform 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease;\n}\n\n.unified-login-button:hover:not(:disabled) {\n  background: #102d5e;\n  box-shadow: 0 8px 22px rgba(7, 26, 61, 0.18);\n  transform: translateY(-1px);\n}\n\n.unified-login-button:active:not(:disabled) {\n  transform: translateY(0);\n}\n\n/* =========================================================\n   REGISTER\n   ========================================================= */\n\n.unified-login-register {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 24px;\n  color: #718096;\n  font-size: 13px;\n  text-align: center;\n}\n\n.unified-login-register button {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #17458a;\n  font-weight: 750;\n}\n\n.unified-login-register button:hover {\n  text-decoration: underline;\n}\n\n/* =========================================================\n   SECURITY\n   ========================================================= */\n\n.unified-login-security {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin-top: 28px;\n  padding: 13px 14px;\n  border: 1px solid #e8edf4;\n  border-radius: 12px;\n  background: #f8fafc;\n}\n\n.unified-login-security > span {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  background: #edf2f8;\n  font-size: 14px;\n}\n\n.unified-login-security strong {\n  display: block;\n  margin-bottom: 2px;\n  color: #263957;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.unified-login-security small {\n  display: block;\n  color: #8490a2;\n  font-size: 11px;\n  line-height: 1.45;\n}\n\n/* =========================================================\n   LOADING\n   ========================================================= */\n\n.unified-loading {\n  color: #53647c;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n/* =========================================================\n   REGISTER PAGE\n   ========================================================= */\n\n.public-page {\n  min-height: 100vh;\n  background: #f4f7fb;\n}\n\n/* =========================================================\n   RESPONSIVE\n   ========================================================= */\n\n@media (max-width: 600px) {\n  .unified-login-page {\n    align-items: flex-start;\n    padding: 22px 14px;\n  }\n\n  .unified-login-card {\n    width: 100%;\n    padding: 28px 22px;\n    border-radius: 18px;\n  }\n\n  .unified-brand {\n    margin-bottom: 34px;\n  }\n\n  .unified-login-heading h1 {\n    font-size: 26px;\n  }\n}\n\n@media (max-width: 380px) {\n  .unified-login-card {\n    padding: 24px 18px;\n  }\n\n  .unified-login-heading h1 {\n    font-size: 23px;\n  }\n\n  .unified-brand small {\n    font-size: 10px;\n  }\n}\n.unified-logo {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.moon-logo {\n  width: 56px;\n  height: 56px;\n  object-fit: contain;\n  display: block;\n}\n\n/* Project by Tirta unified public/login modal */\n.modal-overlay{position:fixed;inset:0;z-index:200;background:rgba(7,16,36,.48);backdrop-filter:blur(7px);padding:20px}\n.login-modal-card{position:relative}\n.login-modal-close{position:absolute;right:14px;top:12px;width:32px;height:32px;border:0;border-radius:50%;background:#F7F9FC;color:#64748B;font-size:20px;line-height:1}\n.unified-login-card.login-modal-card{border:1px solid #E5EAF2;border-radius:20px;background:#fff}\n.password-toggle{align-self:flex-end;margin-top:-4px;border:0;background:transparent;color:#8A6B0B;font-size:10px;font-weight:800;padding:0}\n.login-options{display:flex;align-items:center;justify-content:space-between;margin-top:-8px}\n.remember-option{display:flex;flex-direction:row;align-items:center;gap:7px;font-size:11px;font-weight:600;color:#64748B}\n.remember-option input{width:auto;height:auto;accent-color:#0B1736}\n.login-options>button{border:0;background:transparent;color:#A67C22;font-size:11px;font-weight:800}\n.forgot-panel{border:1px solid #E7ECF2;background:#F8FAFC;border-radius:12px;padding:13px;margin-top:-6px}\n.forgot-panel strong{font-size:12px;color:#0B1736}.forgot-panel p{font-size:11px;color:#64748B;margin:5px 0 9px}\n.forgot-panel input{height:40px}.forgot-panel small{display:block;margin-top:7px;color:#64748B;font-size:10px}.forgot-panel>div{display:flex;justify-content:flex-end;gap:7px;margin-top:10px}\n.forgot-panel .primary,.forgot-panel .secondary{height:34px;padding:0 12px;border-radius:8px;border:0;font-size:10px;font-weight:800}\n.forgot-panel .primary{background:#0B1736;color:#fff}.forgot-panel .secondary{background:#fff;border:1px solid #D9E0EA;color:#475569}\n\n/* =========================================================\n   PROJECT BY TIRTA — HR DASHBOARD THEME OVERRIDE\n   Public / Home / Login / Loading\n   ========================================================= */\n\n:root{\n  --hr-navy:#0b1736;\n  --hr-navy-2:#17284a;\n  --hr-gold:#c5a15b;\n  --hr-gold-soft:#f6f0e3;\n  --hr-silver:#e5eaf2;\n  --hr-bg:#f4f7fb;\n  --hr-text:#172033;\n  --hr-muted:#718096;\n}\n\n/* ---------- PUBLIC / HOME BACKGROUND ---------- */\n\n.unified-login-page{\n  background:\n    radial-gradient(circle at 12% 10%,rgba(197,161,91,.10),transparent 28%),\n    radial-gradient(circle at 88% 90%,rgba(23,40,74,.10),transparent 32%),\n    linear-gradient(135deg,#f7f9fc 0%,#eef2f7 100%);\n  position:relative;\n  overflow:hidden;\n}\n\n.unified-login-page::before{\n  content:\"\";\n  position:absolute;\n  width:420px;\n  height:420px;\n  border-radius:50%;\n  border:1px solid rgba(197,161,91,.10);\n  right:-180px;\n  top:-180px;\n  pointer-events:none;\n}\n\n.unified-login-page::after{\n  content:\"\";\n  position:absolute;\n  width:300px;\n  height:300px;\n  border-radius:50%;\n  border:1px solid rgba(11,23,54,.06);\n  left:-150px;\n  bottom:-150px;\n  pointer-events:none;\n}\n\n/* ---------- LOGIN CARD ---------- */\n\n.unified-login-card{\n  position:relative;\n  z-index:1;\n  border:1px solid var(--hr-silver);\n  border-radius:16px;\n  background:rgba(255,255,255,.98);\n  box-shadow:\n    0 18px 45px rgba(16,24,40,.09),\n    0 3px 10px rgba(16,24,40,.04);\n}\n\n.unified-login-card.compact{\n  border-radius:14px;\n}\n\n/* ---------- BRAND ---------- */\n\n.unified-logo{\n  background:linear-gradient(135deg,var(--hr-navy),var(--hr-navy-2));\n  border:1px solid var(--hr-gold);\n  color:#e2bd72;\n  box-shadow:0 5px 16px rgba(11,23,54,.15);\n}\n\n.unified-brand{\n  gap:11px;\n  margin-bottom:32px;\n}\n\n.unified-brand strong{\n  color:var(--hr-navy);\n  font-size:15px;\n  letter-spacing:-.15px;\n}\n\n.unified-brand small{\n  color:#8994a7;\n  font-size:10px;\n}\n\n/* ---------- HEADING ---------- */\n\n.unified-login-heading{\n  margin-bottom:23px;\n}\n\n.unified-login-heading>span{\n  margin-bottom:7px;\n  color:#a67c22;\n  font-size:9px;\n  letter-spacing:1.4px;\n}\n\n.unified-login-heading h1{\n  color:var(--hr-navy);\n  font-size:26px;\n  line-height:1.2;\n  letter-spacing:-.55px;\n}\n\n.unified-login-heading p{\n  color:#718096;\n  font-size:12px;\n  line-height:1.55;\n}\n\n/* ---------- FORM ---------- */\n\n.unified-login-form{\n  gap:15px;\n}\n\n.unified-login-form label{\n  gap:6px;\n}\n\n.unified-login-form label>span{\n  color:#344054;\n  font-size:11px;\n  font-weight:750;\n}\n\n.unified-login-form input{\n  height:43px;\n  border-color:#d9dee8;\n  border-radius:8px;\n  font-size:12px;\n  color:#172033;\n}\n\n.unified-login-form input:focus{\n  border-color:#294b7d;\n  box-shadow:0 0 0 3px rgba(41,75,125,.09);\n}\n\n/* ---------- PRIMARY BUTTON ---------- */\n\n.unified-login-button{\n  height:44px;\n  margin-top:3px;\n  border-radius:8px;\n  background:linear-gradient(135deg,var(--hr-navy),var(--hr-navy-2));\n  border:1px solid var(--hr-navy);\n  font-size:12px;\n  font-weight:750;\n  box-shadow:0 4px 12px rgba(11,23,54,.14);\n}\n\n.unified-login-button:hover:not(:disabled){\n  background:linear-gradient(135deg,#17284a,#243b69);\n  box-shadow:0 7px 18px rgba(11,23,54,.18);\n  transform:translateY(-1px);\n}\n\n/* ---------- REGISTER ---------- */\n\n.unified-login-register{\n  margin-top:19px;\n  color:#7b8799;\n  font-size:11px;\n}\n\n.unified-login-register button{\n  color:#a67c22;\n  font-size:11px;\n}\n\n/* ---------- SECURITY ---------- */\n\n.unified-login-security{\n  margin-top:21px;\n  padding:10px 12px;\n  border-color:#e5eaf2;\n  border-radius:9px;\n  background:#f8fafc;\n  gap:9px;\n}\n\n.unified-login-security>span{\n  width:28px;\n  height:28px;\n  border-radius:7px;\n  background:#eef2f7;\n  font-size:12px;\n}\n\n.unified-login-security strong{\n  color:#344054;\n  font-size:10px;\n}\n\n.unified-login-security small{\n  color:#8490a2;\n  font-size:9px;\n}\n\n/* =========================================================\n   HR STYLE LOADING\n   ========================================================= */\n\n.unified-loading{\n  position:relative;\n  z-index:1;\n  width:min(360px,calc(100% - 40px));\n  min-height:112px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  gap:11px;\n  padding:22px;\n  border:1px solid #dfe5ee;\n  border-radius:14px;\n  background:rgba(255,255,255,.97);\n  color:#53647c;\n  font-size:11px;\n  font-weight:650;\n  box-shadow:\n    0 16px 40px rgba(16,24,40,.09),\n    0 2px 8px rgba(16,24,40,.04);\n}\n\n.unified-loading::before{\n  content:\"\";\n  width:29px;\n  height:29px;\n  border-radius:50%;\n  border:3px solid #e5eaf2;\n  border-top-color:var(--hr-gold);\n  border-right-color:var(--hr-navy);\n  animation:hr-loading-spin .85s linear infinite;\n}\n\n.unified-loading::after{\n  content:\"HR COMMAND CENTER\";\n  position:absolute;\n  top:9px;\n  left:0;\n  right:0;\n  text-align:center;\n  color:#98a2b3;\n  font-size:7px;\n  font-weight:800;\n  letter-spacing:1.5px;\n}\n\n@keyframes hr-loading-spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n/* =========================================================\n   LOGIN MODAL\n   ========================================================= */\n\n.modal-overlay{\n  background:rgba(7,16,36,.56);\n  backdrop-filter:blur(8px);\n}\n\n.unified-login-card.login-modal-card{\n  border-color:#dfe5ee;\n  border-radius:16px;\n  box-shadow:\n    0 25px 70px rgba(0,0,0,.25),\n    0 5px 18px rgba(0,0,0,.08);\n}\n\n.login-modal-close{\n  width:29px;\n  height:29px;\n  right:11px;\n  top:11px;\n  background:#f5f7fa;\n  color:#64748b;\n  font-size:18px;\n}\n\n.login-modal-close:hover{\n  background:#edf1f6;\n  color:#172033;\n}\n\n/* =========================================================\n   MENU / CARD TEXT — SYMMETRY\n   ========================================================= */\n\n/* Semua tombol/menu yang berada di area public */\n.unified-login-page button{\n  line-height:1.2;\n}\n\n/* Hindari text menempel/bergeser ketika bahasa berubah */\n.unified-login-page button,\n.unified-login-page label,\n.unified-login-page small,\n.unified-login-page strong{\n  overflow-wrap:anywhere;\n}\n\n/* =========================================================\n   RESPONSIVE — MOBILE\n   ========================================================= */\n\n@media(max-width:600px){\n\n  .unified-login-page{\n    padding:18px 12px;\n  }\n\n  .unified-login-card{\n    width:100%;\n    max-width:420px;\n    padding:23px 19px;\n    border-radius:14px;\n  }\n\n  .unified-brand{\n    margin-bottom:27px;\n  }\n\n  .unified-logo,\n  .moon-logo{\n    width:48px;\n    height:48px;\n  }\n\n  .unified-login-heading h1{\n    font-size:23px;\n  }\n\n  .unified-login-heading p{\n    font-size:11px;\n  }\n\n  .unified-login-form input{\n    height:42px;\n  }\n\n  .unified-login-button{\n    height:43px;\n  }\n\n  .unified-loading{\n    width:calc(100% - 28px);\n    min-height:105px;\n  }\n}\n\n@media(max-width:380px){\n\n  .unified-login-card{\n    padding:21px 16px;\n  }\n\n  .unified-brand strong{\n    font-size:14px;\n  }\n\n  .unified-login-heading h1{\n    font-size:21px;\n  }\n}\n\n\n/* Final UX accessibility and responsive polish */\n.unified-login-success{margin-bottom:20px;padding:13px 15px;border:1px solid #bfe3cb;border-radius:10px;background:#f1fbf5;color:#17663a;font-size:13px;line-height:1.5}\nbutton:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,a:focus-visible{outline:3px solid rgba(202,167,94,.38);outline-offset:2px}\n@media (max-width: 480px){\n  .unified-login-page{padding:18px 12px;align-items:flex-start;padding-top:32px}\n  .unified-login-card{width:100%;max-width:100%;padding:22px 18px}\n  .unified-login-heading h1{font-size:25px}\n  .unified-brand{margin-bottom:28px}\n}\n\n/* =========================================================\n   PROFESSIONAL APP LOADING\n   ========================================================= */\n.app-loading-screen,\n.employee-loading-screen{\n  min-height:100vh;\n  display:grid;\n  place-items:center;\n  padding:24px;\n  background:\n    radial-gradient(circle at 15% 15%,rgba(197,161,91,.10),transparent 28%),\n    radial-gradient(circle at 85% 80%,rgba(24,59,115,.08),transparent 30%),\n    #f6f8fb;\n}\n.app-loading-card{\n  width:min(420px,100%);\n  display:grid;\n  grid-template-columns:52px 1fr;\n  gap:14px;\n  align-items:center;\n  padding:20px;\n  border:1px solid #e3e8f0;\n  border-radius:18px;\n  background:rgba(255,255,255,.92);\n  box-shadow:0 22px 60px rgba(15,23,42,.09);\n  backdrop-filter:blur(10px);\n}\n.app-loading-brand{\n  width:52px;height:52px;display:grid;place-items:center;border-radius:15px;\n  background:#0b1736;border:1px solid #c5a15b;box-shadow:0 10px 24px rgba(11,23,54,.14);\n}\n.app-loading-brand img{width:35px;height:35px;object-fit:contain}\n.app-loading-copy{display:flex;flex-direction:column;gap:4px;min-width:0}\n.app-loading-copy strong{font-size:13px;color:#172033}\n.app-loading-copy span{font-size:10px;color:#7b8799}\n.app-loading-indicator{grid-column:1/-1;display:flex;gap:6px;justify-content:center;padding-top:2px}\n.app-loading-indicator i{width:6px;height:6px;border-radius:50%;background:#c5a15b;animation:loadingDot 1.1s ease-in-out infinite}\n.app-loading-indicator i:nth-child(2){animation-delay:.14s}.app-loading-indicator i:nth-child(3){animation-delay:.28s}\n@keyframes loadingDot{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-4px);opacity:1}}\n\n@media(prefers-reduced-motion:reduce){\n  .app-loading-indicator i{animation:none;opacity:.75}\n}\n\n/* =========================================================\n   ACCESSIBILITY / MOTION SAFETY\n   ========================================================= */\n\n:focus-visible {\n  outline: 3px solid rgba(197, 161, 91, 0.45);\n  outline-offset: 3px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms ;\n    animation-iteration-count: 1 ;\n    scroll-behavior: auto ;\n    transition-duration: 0.01ms ;\n  }\n}\n\n/* =========================================================\n   APP DIALOGS — mobile-safe replacement for browser dialogs\n   ========================================================= */\n.app-dialog { width: min(92vw, 480px); padding: 0; border: 0; border-radius: 20px; background: transparent; color: inherit; box-shadow: 0 28px 80px rgba(7,26,61,.28); }\n.app-dialog::backdrop { background: rgba(7,26,61,.46); backdrop-filter: blur(3px); }\n.app-dialog-card { overflow: hidden; background: #fff; border: 1px solid #e5eaf1; border-radius: 20px; }\n.app-dialog-head { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:20px 22px 12px; }\n.app-dialog-head h2 { margin:0; color:#071a3d; font-size:19px; line-height:1.25; }\n.app-dialog-close { width:36px; height:36px; border:0; border-radius:10px; background:#f3f5f8; color:#56657a; font-size:22px; }\n.app-dialog-body { padding:4px 22px 20px; }\n.app-dialog-body p { margin:0; color:#5d6b7f; white-space:pre-line; line-height:1.6; font-size:14px; }\n.app-dialog-field { display:grid; gap:7px; margin-top:16px; color:#34445c; font-size:13px; font-weight:700; }\n.app-dialog-field input { width:100%; min-height:46px; padding:11px 13px; border:1px solid #d7deea; border-radius:12px; outline:none; }\n.app-dialog-field input:focus { border-color:#b88910; box-shadow:0 0 0 3px rgba(184,137,16,.13); }\n.app-dialog-foot { display:flex; justify-content:flex-end; gap:10px; padding:14px 22px 20px; border-top:1px solid #edf0f4; }\n@media (max-width:600px) { .app-dialog { width:calc(100vw - 24px); max-width:none; margin:12px; } .app-dialog-foot { flex-direction:column-reverse; } .app-dialog-foot button { width:100%; min-height:46px; } }\n\n\n/* Project by Tirta V37 application reset. Enterprise styling lives in component styles. */\n\n\n/* =========================================================\n   PROJECT BY TIRTA — PUBLIC HOME\n   Consolidated, responsive and motion-safe presentation layer.\n   ========================================================= */\n\n.public-home {\n  --home-bg: #f7f9fc;\n  --home-surface: #ffffff;\n  --home-ink: #172033;\n  --home-navy: #0b1736;\n  --home-muted: #667085;\n  --home-subtle: #98a2b3;\n  --home-line: #e1e6ee;\n  --home-gold: #c5a15b;\n  --home-gold-soft: #f7f1e4;\n  min-height: 100vh;\n  overflow: hidden;\n  position: relative;\n  isolation: isolate;\n  color: var(--home-ink);\n  background:\n    radial-gradient(circle at 90% 10%, rgba(197,161,91,.08), transparent 25%),\n    linear-gradient(180deg, var(--home-bg) 0%, #f1f4f8 100%);\n}\n\n.public-home::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: -1;\n  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,.55) 48%, transparent 72%);\n  transform: translateX(-100%);\n  animation: homeSheen 14s ease-in-out infinite;\n}\n\n.public-header {\n  position: relative;\n  z-index: 10;\n  height: 64px;\n  max-width: 1500px;\n  margin: 0 auto;\n  padding: 0 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(225,230,238,.92);\n  background: rgba(255,255,255,.92);\n  box-shadow: 0 1px 5px rgba(16,24,40,.03);\n  backdrop-filter: blur(10px);\n}\n\n.public-brand { display:flex; align-items:center; gap:9px; }\n.public-brand img {\n  width:36px; height:36px; object-fit:contain; padding:5px;\n  border-radius:10px; background:var(--home-navy); border:1px solid var(--home-gold);\n  transition:transform .25s ease, box-shadow .25s ease;\n}\n.public-brand:hover img { transform:rotate(-3deg) scale(1.03); box-shadow:0 8px 20px rgba(11,23,54,.12); }\n.public-brand strong { display:block; color:var(--home-ink); font-size:14px; line-height:1.2; }\n.public-brand span { display:block; color:var(--home-subtle); font-size:9px; line-height:1.2; margin-top:2px; }\n\n.public-header nav { display:flex; align-items:center; gap:17px; }\n.public-header nav a {\n  color:var(--home-muted); text-decoration:none; font-size:10px; font-weight:700;\n  transition:color .15s ease;\n}\n.public-header nav a:hover { color:var(--home-ink); }\n.public-login-link {\n  border:0; background:transparent; color:#344054; font-size:10px; font-weight:800;\n}\n.public-cta,.public-primary,.public-secondary {\n  height:41px; padding:0 16px; border-radius:8px; font-size:10px; font-weight:800;\n  cursor:pointer; transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;\n}\n.public-cta,.public-primary { color:#fff; background:linear-gradient(135deg,var(--home-navy),#17284a); border:1px solid var(--home-gold); }\n.public-cta { height:34px; padding:0 14px; box-shadow:0 3px 9px rgba(11,23,54,.12); }\n.public-cta:hover,.public-primary:hover { transform:translateY(-1px); box-shadow:0 9px 21px rgba(11,23,54,.16); }\n.public-secondary { color:#344054; background:#fff; border:1px solid #d9dee8; }\n.public-secondary:hover { border-color:var(--home-gold); background:#fffdf8; }\n\n.public-hero {\n  max-width:1500px; min-height:500px; margin:0 auto; padding:55px 55px 42px;\n  display:grid; grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr); align-items:center; gap:35px;\n}\n.public-hero-copy { max-width:620px; animation:homeFadeUp .55s ease both; }\n.public-eyebrow { color:#a67c22; font-size:8px; letter-spacing:1.6px; font-weight:850; }\n.public-hero h1 { margin:15px 0 18px; color:var(--home-navy); font-size:clamp(38px,4.8vw,62px); line-height:1.04; letter-spacing:-3px; }\n.public-hero h1 em { color:var(--home-muted); font-style:normal; }\n.public-hero p { max-width:560px; margin:0 0 23px; color:var(--home-muted); font-size:12px; line-height:1.65; }\n.public-actions { display:flex; gap:8px; flex-wrap:wrap; }\n.public-primary { box-shadow:0 7px 18px rgba(11,23,54,.14); }\n.public-trust { display:flex; align-items:center; flex-wrap:wrap; gap:7px; margin-top:18px; color:var(--home-subtle); font-size:8px; line-height:1.4; }\n.public-trust span { color:#22a06b; }\n.public-trust i { width:1px; height:9px; background:#d9dee8; }\n\n.moon-hero-visual {\n  position:relative; min-height:390px; display:grid; place-items:center;\n  animation:homeVisualIn .8s .08s ease both;\n}\n.moon-hero-visual img { position:relative; z-index:3; width:205px; height:205px; object-fit:contain; filter:drop-shadow(0 18px 35px rgba(11,23,54,.15)); }\n.moon-glow {\n  position:absolute; width:310px; height:310px; border-radius:50%; filter:blur(8px);\n  background:radial-gradient(circle,rgba(197,161,91,.20),rgba(197,161,91,0) 68%);\n  animation:moonPulse 5s ease-in-out infinite;\n}\n.moon-orbit { position:absolute; border:1px solid rgba(197,161,91,.27); border-radius:50%; }\n.orbit-one { width:350px; height:175px; transform:rotate(-20deg); animation:orbitFloat 9s ease-in-out infinite; }\n.orbit-two { width:395px; height:225px; transform:rotate(24deg); animation:orbitFloatTwo 11s .5s ease-in-out infinite; }\n.moon-caption { position:absolute; z-index:4; bottom:12px; display:flex; flex-direction:column; gap:3px; text-align:center; }\n.moon-caption b { color:var(--home-ink); font-size:8px; letter-spacing:1.7px; }\n.moon-caption span { color:var(--home-subtle); font-size:9px; }\n\n.public-features {\n  max-width:1220px; margin:0 auto; padding:0 25px 45px;\n  display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:10px;\n}\n.public-features article {\n  min-width:0; min-height:76px; padding:13px; border:1px solid var(--home-line); border-radius:11px;\n  background:var(--home-surface); display:grid; grid-template-columns:32px minmax(0,1fr); align-items:center; column-gap:9px;\n  box-shadow:0 3px 12px rgba(16,24,40,.035); transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease;\n  animation:homeFadeUp .5s ease both;\n}\n.public-features article:hover { transform:translateY(-2px); border-color:#d4c08e; box-shadow:0 7px 18px rgba(16,24,40,.07); }\n.public-features article > span { width:32px; height:32px; border-radius:8px; background:var(--home-gold-soft); color:#a67c22; display:grid; place-items:center; font-size:10px; font-weight:850; border:1px solid #eee2c8; }\n.public-features article > div { min-width:0; display:flex; flex-direction:column; justify-content:center; min-height:40px; }\n.public-features b { display:block; color:var(--home-ink); font-size:10px; font-weight:800; line-height:1.25; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }\n.public-features small { display:-webkit-box; margin-top:3px; color:var(--home-subtle); font-size:8px; line-height:1.35; min-height:21px; overflow:hidden; -webkit-line-clamp:2; -webkit-box-orient:vertical; }\n.public-features article:nth-child(2){animation-delay:.06s}.public-features article:nth-child(3){animation-delay:.12s}.public-features article:nth-child(4){animation-delay:.18s}.public-features article:nth-child(5){animation-delay:.24s}\n\n.public-primary:focus-visible,.public-secondary:focus-visible,.public-login-link:focus-visible,.public-cta:focus-visible,.public-header nav a:focus-visible { outline:3px solid rgba(197,161,91,.32); outline-offset:2px; }\n\n@keyframes homeFadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }\n@keyframes homeVisualIn { from { opacity:0; transform:scale(.96) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }\n@keyframes moonPulse { 0%,100% { transform:scale(.98); opacity:.7; } 50% { transform:scale(1.03); opacity:1; } }\n@keyframes orbitFloat { 0%,100% { transform:rotate(-20deg) translateY(0); } 50% { transform:rotate(-18deg) translateY(-4px); } }\n@keyframes orbitFloatTwo { 0%,100% { transform:rotate(24deg) translateY(0); } 50% { transform:rotate(26deg) translateY(-4px); } }\n@keyframes homeSheen { 0%,35% { transform:translateX(-100%); } 60%,100% { transform:translateX(100%); } }\n\n@media (max-width:1000px) {\n  .public-hero { grid-template-columns:1fr .8fr; padding:48px 35px 38px; gap:20px; }\n  .public-hero h1 { font-size:clamp(36px,5vw,52px); }\n  .moon-hero-visual { min-height:330px; }\n  .moon-hero-visual img { width:175px; height:175px; }\n  .orbit-one { width:300px; height:150px; }\n  .orbit-two { width:340px; height:195px; }\n  .public-features { grid-template-columns:repeat(3,1fr); }\n}\n\n@media (max-width:700px) {\n  .public-header { height:60px; padding:0 15px; }\n  .public-brand img { width:33px; height:33px; }\n  .public-brand strong { font-size:12px; }\n  .public-brand span { font-size:8px; }\n  .public-header nav { gap:10px; }\n  .public-header nav a { display:none; }\n  .public-login-link { font-size:9px; }\n  .public-cta { display:block; height:31px; padding:0 11px; font-size:9px; }\n  .public-hero { min-height:auto; padding:38px 19px 25px; grid-template-columns:1fr; gap:5px; }\n  .public-hero h1 { font-size:38px; letter-spacing:-2px; line-height:1.05; margin:13px 0 15px; }\n  .public-hero p { font-size:11px; line-height:1.6; margin-bottom:19px; }\n  .public-primary,.public-secondary { height:39px; padding:0 14px; font-size:9px; }\n  .public-trust { font-size:7px; margin-top:15px; }\n  .moon-hero-visual { min-height:275px; }\n  .moon-hero-visual img { width:155px; height:155px; }\n  .moon-glow { width:240px; height:240px; }\n  .orbit-one { width:270px; height:135px; }\n  .orbit-two { width:300px; height:170px; }\n  .moon-caption { bottom:0; }\n  .public-features { grid-template-columns:1fr 1fr; gap:8px; padding:0 15px 30px; }\n  .public-features article { min-height:72px; padding:11px; grid-template-columns:29px minmax(0,1fr); column-gap:7px; }\n  .public-features article > span { width:29px; height:29px; font-size:9px; }\n  .public-features b { font-size:9px; }\n  .public-features small { font-size:7px; }\n}\n\n@media (max-width:400px) {\n  .public-header { padding:0 12px; }\n  .public-brand strong { font-size:11px; }\n  .public-login-link { display:inline-flex ; align-items:center; justify-content:center; min-height:32px; padding:0 9px; border:1px solid #d6ae58; border-radius:8px; background:rgba(214,174,88,.08); color:#d6ae58 ; font-size:9px; font-weight:800; cursor:pointer; }\n  .public-hero { padding:32px 15px 20px; }\n  .public-hero h1 { font-size:34px; }\n  .public-actions { width:100%; }\n  .public-primary,.public-secondary { flex:1; min-width:0; padding:0 9px; }\n  .public-features { grid-template-columns:1fr; }\n  .public-features article { min-height:68px; }\n}\n\n@media (prefers-reduced-motion:reduce) {\n  .public-home::before,.public-hero-copy,.moon-hero-visual,.moon-glow,.orbit-one,.orbit-two,.public-features article { animation:none ; }\n  .public-primary,.public-secondary,.public-cta,.public-brand img { transition:none; }\n}\n\n/* Public feature cards share the same framed identity. */\n.public-features article {\n  background: #101827 ;\n  color: #e2e5ea ;\n  border: 2px solid #d6ae58 ;\n  box-shadow: 0 12px 30px rgba(0,0,0,.16) ;\n}\n.public-features article > span { background: #0b132b ; color: #d6ae58 ; border-color: #d6ae58 ; }\n.public-features b { color: #e2e5ea ; }\n.public-features p { color: #aeb7c5 ; }\n\n\n.registration-page{min-height:calc(100vh - 136px);display:grid;place-items:center;padding:30px 10px}.registration-card{width:min(920px,100%);background:#fff;border:1px solid #e3e7ee;border-radius:20px;box-shadow:0 20px 60px rgba(15,23,42,.08);padding:34px}.registration-brand{display:flex;align-items:center;gap:10px;padding-bottom:24px;border-bottom:1px solid #edf0f4}.registration-logo{width:40px;height:40px;border-radius:12px;background:linear-gradient(145deg,#0b1222,#172747);border:1px solid #c9a227;color:#e4ca70;display:grid;place-items:center;font-weight:900}.registration-brand strong{display:block;color:#0b1222;font-size:17px}.registration-brand small{display:block;color:#98a2b3;font-size:9px;margin-top:2px}.registration-copy{padding:27px 0 20px}.registration-copy>span{font-size:8px;letter-spacing:1.5px;color:#8a6b0b;font-weight:900}.registration-copy h1{margin:7px 0 7px;color:#0b1222;font-size:30px;letter-spacing:-1px}.registration-copy p{margin:0;color:#667085;font-size:12px;line-height:1.6}.registration-form{border-top:1px solid #edf0f4;padding-top:22px}.registration-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.registration-grid label{display:flex;flex-direction:column;gap:7px;color:#475467;font-size:10px;font-weight:800}.registration-grid label.full{grid-column:1/-1}.registration-grid input{height:44px;border:1px solid #d8dee8;border-radius:9px;background:#fff;padding:0 12px;color:#172033;font:inherit;font-weight:500;outline:none;transition:.18s}.registration-grid input:focus{border-color:#c9a227;box-shadow:0 0 0 3px rgba(201,162,39,.10)}.registration-grid input::placeholder{color:#b0b7c3}.registration-error,.registration-success{margin-top:17px;padding:12px 14px;border-radius:9px;font-size:10px;line-height:1.5}.registration-error{background:#fff4f2;border:1px solid #fecdca;color:#b42318}.registration-success{background:#effaf3;border:1px solid #b7e4c7;color:#16784b}.registration-actions{display:flex;justify-content:space-between;gap:10px;margin-top:20px}.registration-primary,.registration-secondary{height:44px;border-radius:9px;padding:0 17px;font-size:10px;font-weight:800;cursor:pointer}.registration-primary{background:linear-gradient(135deg,#0b1222,#172747);border:1px solid #c9a227;color:#e4ca70}.registration-secondary{background:#fff;border:1px solid #d8dee8;color:#475467}.registration-primary:disabled{opacity:.55;cursor:not-allowed}.registration-note{margin:19px 0 0;padding-top:17px;border-top:1px solid #edf0f4;color:#98a2b3;font-size:9px;line-height:1.6;text-align:center}.registration-note b{color:#8a6b0b}@media(max-width:650px){.registration-card{padding:22px 18px;border-radius:15px}.registration-grid{grid-template-columns:1fr}.registration-grid label.full{grid-column:auto}.registration-actions{flex-direction:column-reverse}.registration-primary,.registration-secondary{width:100%}.registration-copy h1{font-size:25px}}\n\n/* Registration uses the same framed visual identity as the employee portal. */\n.registration-page { background: var(--app-bg, #f6f7fb); }\n.registration-card {\n  background: #101827 ;\n  color: #e2e5ea ;\n  border: 2px solid #d6ae58 ;\n  box-shadow: 0 18px 44px rgba(0,0,0,.20) ;\n}\n.registration-brand strong,\n.registration-copy h1,\n.registration-copy p,\n.registration-grid label,\n.registration-note,\n.registration-brand small { color: #e2e5ea ; }\n.registration-brand small,\n.registration-copy p,\n.registration-note { color: #aeb7c5 ; }\n.registration-grid input,\n.registration-grid select,\n.registration-grid textarea {\n  background: #111b33 ;\n  color: #eef1f5 ;\n  border-color: #d6ae58 ;\n}\n.registration-primary {\n  background: #d6ae58 ;\n  color: #0b1222 ;\n  border: 2px solid #f0d68c ;\n}\n.registration-secondary {\n  background: #0b132b ;\n  color: #e2e5ea ;\n  border: 2px solid #d6ae58 ;\n}\n\n\n/* =========================================================\n   PROJECT BY TIRTA\n   EMPLOYEE SELF SERVICE / PORTAL KARYAWAN\n   ========================================================= */\n\n.employee-login,\n.employee-portal {\n  --navy: var(--app-primary, #0B1736);\n  --navy-2: color-mix(in srgb, var(--app-primary, #0B1736) 82%, #ffffff);\n  --gold: var(--app-accent, #D6B56A);\n  --gold-light: color-mix(in srgb, var(--app-accent, #D6B56A) 55%, #ffffff);\n  --gold-soft: color-mix(in srgb, var(--app-accent, #D6B56A) 12%, #ffffff);\n  --ink: var(--app-text, #0B1736);\n  --muted: var(--app-muted, #64748B);\n  --line: var(--app-border, #E5EAF2);\n  --bg: var(--app-bg, #F7F9FC);\n\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    sans-serif;\n}\n\n/* =========================================================\n   EMPLOYEE LOGIN / ACCOUNT LINK\n   ========================================================= */\n\n.employee-login {\n  min-height: 100vh;\n  width: 100%;\n  display: grid;\n  place-items: center;\n  padding: 32px 20px;\n  background:\n    radial-gradient(\n      circle at 10% 10%,\n      #edf2ff 0,\n      #f7f8fb 38%,\n      #ffffff 100%\n    );\n}\n\n.employee-login-card {\n  width: min(480px, 100%);\n  background: #ffffff;\n  border: 1px solid var(--line);\n  border-radius: 24px;\n  padding: 36px;\n  box-shadow:\n    0 25px 70px rgba(15, 23, 42, 0.12),\n    0 5px 18px rgba(15, 23, 42, 0.04);\n}\n\n.employee-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.employee-brand strong {\n  display: block;\n  color: var(--navy);\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.employee-brand small {\n  display: block;\n  color: #98a2b3;\n  font-size: 9px;\n  margin-top: 3px;\n}\n\n.employee-logo {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: linear-gradient(\n    135deg,\n    var(--navy),\n    var(--navy-2)\n  );\n  color: var(--gold-light);\n  font-weight: 900;\n  font-size: 17px;\n  border: 1px solid #d8bd59;\n}\n\n/* =========================================================\n   LOGIN COPY\n   ========================================================= */\n\n.login-copy {\n  margin: 38px 0 26px;\n}\n\n.portal-eyebrow,\n.card-kicker {\n  display: inline-block;\n  font-size: 9px;\n  font-weight: 850;\n  letter-spacing: 1.5px;\n  color: #9a7a13;\n}\n\n.login-copy h2 {\n  margin: 10px 0 8px;\n  color: var(--navy);\n  font-size: 30px;\n  line-height: 1.2;\n  letter-spacing: -0.8px;\n}\n\n.login-copy p,\n.employee-heading p {\n  margin: 0;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n/* =========================================================\n   FORM\n   ========================================================= */\n\n.employee-form {\n  display: grid;\n  gap: 15px;\n}\n\n.employee-form label {\n  display: block;\n  color: #344054;\n  font-size: 10px;\n  font-weight: 750;\n}\n\n.employee-form input,\n.employee-form select,\n.attendance-card select {\n  width: 100%;\n  height: 43px;\n  margin-top: 7px;\n  padding: 0 12px;\n\n  border: 1px solid #d9dee8;\n  border-radius: 10px;\n\n  background: #ffffff;\n  color: var(--ink);\n\n  font: inherit;\n  font-size: 12px;\n  outline: none;\n\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease;\n}\n\n.employee-form textarea {\n  width: 100%;\n  min-height: 82px;\n  margin-top: 7px;\n\n  padding: 11px 12px;\n\n  border: 1px solid #d9dee8;\n  border-radius: 10px;\n\n  background: #ffffff;\n  color: var(--ink);\n\n  font: inherit;\n  font-size: 12px;\n\n  resize: vertical;\n  outline: none;\n}\n\n.employee-form input:focus,\n.employee-form select:focus,\n.employee-form textarea:focus,\n.attendance-card select:focus {\n  border-color: #9a7a13;\n  box-shadow:\n    0 0 0 3px rgba(201, 162, 39, 0.12);\n}\n\n/* =========================================================\n   BUTTONS\n   ========================================================= */\n\n.portal-primary,\n.portal-secondary,\n.portal-link,\n.portal-logout {\n  font: inherit;\n  cursor: pointer;\n}\n\n.portal-primary {\n  border: 1px solid var(--gold);\n  background:\n    linear-gradient(\n      135deg,\n      var(--navy),\n      var(--navy-2)\n    );\n  color: var(--gold-light);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-weight: 800;\n\n  box-shadow:\n    0 8px 18px rgba(15, 23, 42, 0.15);\n\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease;\n}\n\n.portal-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow:\n    0 11px 24px rgba(15, 23, 42, 0.18);\n}\n\n.portal-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.portal-secondary {\n  border: 1px solid #d8dee8;\n  background: #ffffff;\n  color: var(--navy);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font-weight: 750;\n\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease;\n}\n\n.portal-secondary:hover {\n  border-color: var(--gold);\n  background: var(--gold-soft);\n}\n\n.portal-link {\n  border: 0;\n  background: transparent;\n  color: #8a6b0b;\n  text-align: left;\n  padding: 0;\n  font-size: 11px;\n}\n\n.portal-logout {\n  border: 1px solid var(--line);\n  background: #ffffff;\n  color: #475467;\n  border-radius: 8px;\n  padding: 8px 11px;\n  font-size: 10px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n/* =========================================================\n   ALERT\n   ========================================================= */\n\n.portal-error,\n.portal-info {\n  padding: 11px 12px;\n  border-radius: 10px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n\n.portal-error {\n  background: #fff2f2;\n  color: #b42318;\n  border: 1px solid #fecdca;\n}\n\n.portal-info {\n  background: var(--gold-soft);\n  color: #6e5707;\n  border: 1px solid #eadb9a;\n  margin-bottom: 15px;\n}\n\n.compact {\n  margin-top: 10px;\n}\n\n.portal-info .portal-link,\n.portal-error .portal-link {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n/* =========================================================\n   LOGIN FOOTNOTE\n   ========================================================= */\n\n.login-footnote {\n  color: #98a2b3;\n  font-size: 10px;\n  line-height: 1.6;\n  margin: 22px 0 0;\n}\n\n/* =========================================================\n   MAIN PORTAL\n   ========================================================= */\n\n.employee-portal {\n  min-height: 100vh;\n  background: var(--bg);\n  color: var(--ink);\n}\n\n/* =========================================================\n   TOP BAR\n   ========================================================= */\n\n.employee-topbar {\n  min-height: 72px;\n  background: #ffffff;\n  border-bottom: 1px solid var(--line);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  padding: 0 clamp(18px, 5vw, 64px);\n}\n\n.employee-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.employee-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n\n  display: grid;\n  place-items: center;\n\n  background: var(--navy);\n  color: var(--gold);\n\n  font-weight: 800;\n}\n\n.employee-user b,\n.employee-user small {\n  display: block;\n}\n\n.employee-user b {\n  color: var(--navy);\n  font-size: 11px;\n}\n\n.employee-user small {\n  color: #98a2b3;\n  font-size: 9px;\n  margin-top: 2px;\n}\n\n/* =========================================================\n   PAGE\n   ========================================================= */\n\n.employee-page {\n  width: 100%;\n  max-width: 1180px;\n  margin: 0 auto;\n\n  padding: 35px 22px 55px;\n}\n\n.employee-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  gap: 20px;\n  margin-bottom: 22px;\n}\n\n.employee-heading h1 {\n  margin: 8px 0 4px;\n\n  color: var(--navy);\n  font-size: 32px;\n  font-weight: 800;\n\n  line-height: 1.15;\n  letter-spacing: -1px;\n}\n\n.date-chip {\n  padding: 9px 12px;\n\n  border: 1px solid var(--line);\n  background: #ffffff;\n\n  border-radius: 9px;\n\n  color: #667085;\n  font-size: 10px;\n  white-space: nowrap;\n}\n\n/* =========================================================\n   TABS\n   ========================================================= */\n\n.employee-tabs {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  border-bottom: 1px solid var(--line);\n\n  margin-bottom: 22px;\n\n  overflow-x: auto;\n}\n\n.employee-tabs button {\n  flex: 0 0 auto;\n\n  border: 0;\n  border-bottom: 2px solid transparent;\n\n  background: transparent;\n\n  color: #667085;\n\n  padding: 10px 15px;\n\n  font-size: 11px;\n  font-weight: 750;\n\n  cursor: pointer;\n\n  transition:\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n\n.employee-tabs button:hover {\n  color: var(--navy);\n}\n\n.employee-tabs button.active {\n  color: var(--navy);\n  border-color: var(--gold);\n}\n\n.employee-tabs em {\n  font-style: normal;\n\n  margin-left: 5px;\n\n  background: var(--gold);\n  color: #ffffff;\n\n  border-radius: 99px;\n\n  padding: 2px 5px;\n\n  font-size: 8px;\n}\n\n/* =========================================================\n   KPI SUMMARY\n   ========================================================= */\n\n.ess-kpis {\n  display: grid;\n\n  grid-template-columns:\n    repeat(4, minmax(0, 1fr));\n\n  gap: 14px;\n\n  margin-bottom: 18px;\n}\n\n.ess-kpi {\n  min-width: 0;\n\n  padding: 20px;\n\n  background: #ffffff;\n\n  border: 1px solid var(--line);\n  border-radius: 17px;\n\n  box-shadow:\n    0 8px 30px rgba(15, 23, 42, 0.045);\n}\n\n.ess-kpi small {\n  display: block;\n\n  color: #9a7a13;\n\n  font-size: 9px;\n  font-weight: 850;\n\n  letter-spacing: 1.5px;\n}\n\n.ess-kpi strong {\n  display: block;\n\n  margin: 9px 0 4px;\n\n  color: var(--navy);\n\n  font-size: 25px;\n  line-height: 1.2;\n\n  font-weight: 900;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ess-kpi span {\n  display: block;\n\n  color: #98a2b3;\n\n  font-size: 9px;\n\n  line-height: 1.5;\n}\n\n/* =========================================================\n   GENERIC CARD\n   ========================================================= */\n\n.portal-card {\n  background: #ffffff;\n\n  border: 1px solid var(--line);\n\n  border-radius: 17px;\n\n  box-shadow:\n    0 8px 30px rgba(15, 23, 42, 0.045);\n}\n\n/* =========================================================\n   GRID\n   ========================================================= */\n\n.portal-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n\n  gap: 18px;\n\n  margin-top: 18px;\n}\n\n/* =========================================================\n   ATTENDANCE\n   ========================================================= */\n\n.attendance-grid {\n  display: grid;\n\n  grid-template-columns:\n    minmax(0, 1.6fr)\n    minmax(280px, 0.8fr);\n\n  gap: 18px;\n}\n\n.attendance-card {\n  padding: 22px;\n}\n\n.card-title {\n  display: flex;\n\n  justify-content: space-between;\n  align-items: flex-start;\n\n  gap: 15px;\n}\n\n.card-title h2,\n.info-card h2,\n.payslip-card h2,\n.empty-state h2 {\n  margin: 6px 0 0;\n\n  color: var(--navy);\n\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  white-space: nowrap;\n\n  font-size: 9px;\n\n  color: #157347;\n\n  background: #eefbf3;\n\n  border: 1px solid #b7ebc9;\n\n  padding: 6px 9px;\n\n  border-radius: 99px;\n}\n\n/* =========================================================\n   ATTENDANCE META\n   ========================================================= */\n\n.attendance-meta {\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n\n  gap: 10px;\n\n  margin: 18px 0 12px;\n}\n\n.attendance-meta > div {\n  background: #f8f9fb;\n\n  border: 1px solid var(--line);\n\n  padding: 10px;\n\n  border-radius: 10px;\n}\n\n.attendance-meta small,\n.attendance-meta b,\n.info-list small,\n.info-list b {\n  display: block;\n}\n\n.attendance-meta small,\n.info-list small {\n  color: #98a2b3;\n\n  font-size: 8px;\n\n  margin-bottom: 4px;\n}\n\n.attendance-meta b {\n  color: #344054;\n\n  font-size: 10px;\n}\n\n/* =========================================================\n   SECURITY BOX\n   ========================================================= */\n\n.security-box {\n  margin-top: 18px;\n\n  background: var(--gold-soft);\n\n  border: 1px solid #eadb9a;\n\n  border-radius: 12px;\n\n  padding: 13px;\n}\n\n.security-box b {\n  color: #6e5707;\n\n  font-size: 10px;\n}\n\n.security-box p {\n  margin: 5px 0 0;\n\n  color: #7a6a31;\n\n  font-size: 9px;\n\n  line-height: 1.6;\n}\n\n/* =========================================================\n   ATTENDANCE ACTIONS\n   ========================================================= */\n\n.attendance-actions {\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n\n  gap: 10px;\n\n  margin-top: 12px;\n}\n\n/* =========================================================\n   CAMERA\n   ========================================================= */\n\n.camera-frame {\n  position: relative;\n\n  margin-top: 12px;\n\n  border-radius: 13px;\n\n  overflow: hidden;\n\n  background: #0b1020;\n\n  min-height: 300px;\n\n  display: grid;\n  place-items: center;\n}\n\n.camera-frame video {\n  width: 100%;\n  height: 360px;\n\n  object-fit: cover;\n\n  display: block;\n}\n\n.camera-overlay {\n  position: absolute;\n\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  padding: 14px;\n\n  color: #ffffff;\n\n  font-size: 10px;\n\n  text-align: center;\n\n  background:\n    linear-gradient(\n      transparent,\n      rgba(0, 0, 0, 0.65)\n    );\n}\n\n/* =========================================================\n   SELFIE\n   ========================================================= */\n\n.selfie-preview {\n  display: flex;\n\n  align-items: center;\n\n  gap: 12px;\n\n  margin-top: 12px;\n\n  padding: 10px;\n\n  background: #f8f9fb;\n\n  border: 1px solid var(--line);\n\n  border-radius: 12px;\n}\n\n.selfie-preview img {\n  width: 72px;\n  height: 72px;\n\n  border-radius: 10px;\n\n  object-fit: cover;\n}\n\n/* =========================================================\n   INFO CARD\n   ========================================================= */\n\n.info-card {\n  padding: 22px;\n}\n\n.info-list {\n  margin-top: 18px;\n}\n\n.info-list > div {\n  padding: 14px 0;\n\n  border-bottom: 1px solid var(--line);\n}\n\n.info-list b {\n  color: #344054;\n\n  font-size: 12px;\n}\n\n/* =========================================================\n   QUICK ACTION\n   ========================================================= */\n\n.quick-list {\n  display: grid;\n\n  gap: 7px;\n\n  margin-top: 14px;\n}\n\n.quick-list button {\n  width: 100%;\n\n  border: 1px solid var(--line);\n\n  background: #fbfcfd;\n\n  border-radius: 11px;\n\n  padding: 12px;\n\n  text-align: left;\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  gap: 12px;\n\n  cursor: pointer;\n\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease;\n}\n\n.quick-list button:hover {\n  background: #ffffff;\n  border-color: #d3b95c;\n}\n\n.quick-list b {\n  color: #344054;\n\n  font-size: 10px;\n}\n\n.quick-list span {\n  color: #98a2b3;\n\n  font-size: 9px;\n\n  text-align: right;\n}\n\n/* =========================================================\n   NOTIFICATION\n   ========================================================= */\n\n.notification-dot {\n  min-width: 22px;\n  height: 22px;\n\n  padding: 0 6px;\n\n  border-radius: 99px;\n\n  background: #f4f6f8;\n\n  color: #475467;\n\n  display: grid;\n  place-items: center;\n\n  font-size: 9px;\n  font-weight: 800;\n}\n\n.notification-list {\n  margin-top: 10px;\n}\n\n.notification-list button {\n  width: 100%;\n\n  border: 0;\n\n  border-bottom: 1px solid var(--line);\n\n  background: #ffffff;\n\n  padding: 12px 0;\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: flex-start;\n\n  gap: 15px;\n\n  text-align: left;\n\n  cursor: pointer;\n}\n\n.notification-list button.unread {\n  background: #fffdf4;\n}\n\n.notification-list b,\n.notification-list small {\n  display: block;\n}\n\n.notification-list b {\n  color: #344054;\n\n  font-size: 10px;\n}\n\n.notification-list small {\n  color: #667085;\n\n  font-size: 9px;\n\n  margin-top: 4px;\n\n  line-height: 1.45;\n}\n\n.notification-list time {\n  color: #98a2b3;\n\n  font-size: 8px;\n\n  white-space: nowrap;\n}\n\n/* =========================================================\n   TABLE\n   ========================================================= */\n\n.table-card {\n  padding: 22px;\n}\n\n.table-scroll {\n  overflow-x: auto;\n\n  margin-top: 18px;\n}\n\n.table-scroll table {\n  width: 100%;\n\n  min-width: 650px;\n\n  border-collapse: collapse;\n}\n\n.table-scroll th,\n.table-scroll td {\n  padding: 11px 10px;\n\n  text-align: left;\n\n  border-bottom: 1px solid #eef0f4;\n\n  font-size: 10px;\n}\n\n.table-scroll th {\n  color: #98a2b3;\n\n  font-size: 9px;\n\n  text-transform: uppercase;\n\n  letter-spacing: 0.6px;\n}\n\n.table-scroll td {\n  color: #344054;\n}\n\n/* =========================================================\n   LEAVE\n   ========================================================= */\n\n.form-two {\n  display: grid;\n\n  grid-template-columns: 1fr 1fr;\n\n  gap: 12px;\n}\n\n.balance-list {\n  margin-top: 15px;\n}\n\n.balance-list > div,\n.request-list > div,\n.salary-lines > div {\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-between;\n\n  gap: 12px;\n\n  padding: 13px 0;\n\n  border-bottom: 1px solid var(--line);\n\n  font-size: 11px;\n}\n\n.balance-list b,\n.salary-lines b {\n  color: var(--ink);\n}\n\n.request-list {\n  margin-top: 12px;\n}\n\n.request-list small {\n  display: block;\n\n  color: #98a2b3;\n\n  font-size: 9px;\n\n  margin-top: 4px;\n}\n\n/* =========================================================\n   PAYROLL\n   ========================================================= */\n\n.payslip-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(2, minmax(0, 1fr));\n\n  gap: 16px;\n}\n\n.payslip-card {\n  padding: 22px;\n}\n\n.salary-value {\n  margin: 22px 0 8px;\n\n  color: var(--navy);\n\n  font-size: 27px;\n\n  font-weight: 900;\n}\n\n.payslip-card p {\n  color: #667085;\n\n  font-size: 10px;\n\n  margin-bottom: 18px;\n}\n\n.salary-lines {\n  margin: 15px 0;\n}\n\n/* =========================================================\n   FULL BUTTON\n   ========================================================= */\n\n.full {\n  width: 100%;\n\n  margin-top: 8px;\n}\n\n/* =========================================================\n   SCHEDULE\n   ========================================================= */\n\n.schedule-grid {\n  display: grid;\n\n  grid-template-columns:\n    repeat(3, minmax(0, 1fr));\n\n  gap: 12px;\n\n  padding: 20px;\n}\n\n.schedule-item {\n  border: 1px solid var(--line);\n\n  border-radius: 12px;\n\n  padding: 14px;\n\n  background: #fbfcfd;\n}\n\n.schedule-item small,\n.schedule-item b,\n.schedule-item span {\n  display: block;\n}\n\n.schedule-item small {\n  color: #98a2b3;\n\n  font-size: 9px;\n}\n\n.schedule-item b {\n  color: var(--navy);\n\n  font-size: 12px;\n\n  margin: 6px 0;\n}\n\n.schedule-item span {\n  color: #667085;\n\n  font-size: 10px;\n}\n\n.schedule-item em {\n  display: inline-block;\n\n  margin-top: 10px;\n\n  color: #157347;\n\n  background: #eefbf3;\n\n  padding: 5px 7px;\n\n  border-radius: 99px;\n\n  font-size: 8px;\n\n  font-style: normal;\n}\n\n/* =========================================================\n   PROFILE\n   ========================================================= */\n\n.portal-profile {\n  display: flex;\n\n  align-items: center;\n\n  gap: 14px;\n\n  margin-bottom: 20px;\n}\n\n.portal-avatar {\n  width: 48px;\n  height: 48px;\n\n  min-width: 48px;\n\n  display: grid;\n  place-items: center;\n\n  border-radius: 14px;\n\n  background:\n    linear-gradient(\n      135deg,\n      var(--navy),\n      var(--navy-2)\n    );\n\n  color: var(--gold-light);\n\n  font-size: 18px;\n\n  font-weight: 900;\n}\n\n.portal-profile h3 {\n  margin: 0;\n\n  color: var(--navy);\n\n  font-size: 16px;\n}\n\n.portal-profile p {\n  margin: 4px 0 0;\n\n  color: #667085;\n\n  font-size: 10px;\n}\n\n/* =========================================================\n   EMPTY STATE\n   ========================================================= */\n\n.empty-state {\n  text-align: center;\n\n  padding: 55px 25px;\n}\n\n.empty-state p {\n  color: #667085;\n\n  font-size: 10px;\n\n  line-height: 1.6;\n}\n\n.empty-icon {\n  width: 45px;\n  height: 45px;\n\n  margin: auto;\n\n  border-radius: 13px;\n\n  background: var(--gold-soft);\n\n  display: grid;\n  place-items: center;\n\n  color: #8a6b0b;\n\n  font-weight: 900;\n}\n\n/* =========================================================\n   PRINT\n   ========================================================= */\n\n.print-slip {\n  display: none;\n}\n\n.print-head {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.print-lines > div {\n  display: flex;\n\n  justify-content: space-between;\n\n  padding: 8px 0;\n\n  border-bottom: 1px solid #ddd;\n}\n\n.print-lines .total {\n  font-weight: 800;\n\n  border-top: 2px solid #222;\n\n  margin-top: 12px;\n\n  padding-top: 12px;\n}\n\n/* =========================================================\n   MUTED / SUCCESS\n   ========================================================= */\n\n.muted {\n  color: #98a2b3;\n\n  font-size: 10px;\n}\n\n.text-success {\n  color: #157347 ;\n}\n\n/* =========================================================\n   RESPONSIVE\n   ========================================================= */\n\n@media (max-width: 1000px) {\n  .ess-kpis {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n\n  .attendance-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 800px) {\n  .portal-grid,\n  .payslip-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .employee-heading {\n    align-items: flex-start;\n\n    flex-direction: column;\n  }\n\n  .employee-topbar {\n    padding: 0 16px;\n  }\n\n  .schedule-grid {\n    grid-template-columns:\n      repeat(2, minmax(0, 1fr));\n  }\n\n  .form-two {\n    grid-template-columns: 1fr;\n  }\n\n  .employee-user > div:nth-child(2) {\n    display: none;\n  }\n}\n\n@media (max-width: 600px) {\n  .employee-login {\n    padding: 22px 14px;\n  }\n\n  .employee-login-card {\n    padding: 26px 20px;\n\n    border-radius: 18px;\n  }\n\n  .employee-page {\n    padding: 26px 14px 40px;\n  }\n\n  .employee-heading h1 {\n    font-size: 27px;\n  }\n\n  .ess-kpis {\n    grid-template-columns: 1fr;\n  }\n\n  .attendance-actions {\n    grid-template-columns: 1fr;\n  }\n\n  .camera-frame video {\n    height: 260px;\n  }\n\n  .schedule-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .notification-list time {\n    display: none;\n  }\n\n  .employee-user .portal-logout {\n    margin-left: 2px;\n  }\n}\n\n@media (max-width: 420px) {\n  .employee-brand strong {\n    font-size: 16px;\n  }\n\n  .employee-login-card {\n    padding: 23px 17px;\n  }\n\n  .employee-tabs button {\n    padding: 10px 11px;\n  }\n\n  .ess-kpi {\n    padding: 17px;\n  }\n}\n\n/* =========================================================\n   PRINT PAYSLIP\n   ========================================================= */\n\n@media print {\n  body * {\n    visibility: hidden ;\n  }\n\n  .print-slip,\n  .print-slip * {\n    visibility: visible ;\n  }\n\n  .print-slip {\n    display: block ;\n\n    position: absolute;\n\n    inset: 0;\n\n    padding: 35px;\n\n    background: #ffffff;\n\n    color: #111111;\n\n    font-family: Arial, sans-serif;\n  }\n\n  .employee-topbar,\n  .employee-page {\n    display: none ;\n  }\n}\n\n.employee-logo img{width:100%;height:100%;object-fit:contain;padding:5px;display:block}\n\n/* =========================================================\n   V7 EMPLOYEE PORTAL POLISH + PROFESSIONAL MOTION\n   ========================================================= */\n.employee-login,.employee-portal{position:relative;overflow:hidden}\n.employee-login::before,.employee-portal::before{content:\"\";position:fixed;inset:-30%;pointer-events:none;background:radial-gradient(circle at 12% 10%,rgba(214,181,106,.09),transparent 22%),radial-gradient(circle at 88% 78%,rgba(11,23,54,.06),transparent 25%);z-index:0}\n.employee-login-card,.employee-topbar,.employee-page{position:relative;z-index:1}\n.employee-login-card{animation:portalCardIn .5s ease both}\n.employee-topbar{backdrop-filter:blur(10px);background:rgba(255,255,255,.92)}\n.employee-heading{animation:portalFadeUp .45s ease both}\n.portal-card,.ess-kpi{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}\n.portal-card:hover,.ess-kpi:hover{transform:translateY(-1px);box-shadow:0 12px 34px rgba(15,23,42,.07)}\n.employee-tabs button:focus-visible,.portal-primary:focus-visible,.portal-secondary:focus-visible,.portal-link:focus-visible,.portal-logout:focus-visible{outline:3px solid rgba(197,161,91,.25);outline-offset:2px}\n.employee-loading-card{width:min(430px,100%);padding:24px;border:1px solid #e3e8f0;border-radius:20px;background:rgba(255,255,255,.94);box-shadow:0 22px 60px rgba(15,23,42,.09);backdrop-filter:blur(10px);animation:portalCardIn .45s ease both}\n.employee-loading-logo{width:50px;height:50px;display:grid;place-items:center;border-radius:15px;background:linear-gradient(135deg,var(--navy),var(--navy-2));border:1px solid var(--gold);margin-bottom:14px;box-shadow:0 10px 24px rgba(11,23,54,.14)}\n.employee-loading-logo img{width:33px;height:33px}\n.employee-loading-copy{display:flex;flex-direction:column;gap:4px}.employee-loading-copy strong{font-size:14px;color:var(--navy)}.employee-loading-copy span{font-size:10px;color:#7b8799}\n.employee-loading-bar{height:5px;border-radius:99px;background:#eef1f5;overflow:hidden;margin-top:18px}.employee-loading-bar i{display:block;width:38%;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--gold),var(--gold-light));animation:loadingBar 1.4s ease-in-out infinite}\n.employee-loading-skeletons{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}.employee-loading-skeletons i{height:42px;border-radius:10px;background:linear-gradient(90deg,#f1f3f6 25%,#fafbfc 50%,#f1f3f6 75%);background-size:200% 100%;animation:skeletonShimmer 1.5s ease-in-out infinite}.employee-loading-skeletons i:nth-child(2){animation-delay:.15s}.employee-loading-skeletons i:nth-child(3){animation-delay:.3s}\n@keyframes portalCardIn{from{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}\n@keyframes portalFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\n@keyframes loadingBar{0%{transform:translateX(-110%)}50%{transform:translateX(120%)}100%{transform:translateX(280%)}}\n@keyframes skeletonShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}\n@media(max-width:700px){.employee-login{padding:18px 14px}.employee-login-card{padding:24px 20px;border-radius:20px}.employee-topbar{min-height:64px;padding:0 14px}.employee-page{padding:25px 14px 40px}.employee-heading{align-items:flex-start;flex-direction:column;gap:12px}.employee-heading h1{font-size:27px}.ess-kpis{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ess-kpi{padding:15px}.employee-loading-card{padding:20px}}\n@media(prefers-reduced-motion:reduce){.employee-login-card,.employee-heading,.portal-card,.ess-kpi,.employee-loading-card,.employee-loading-bar i,.employee-loading-skeletons i{animation:none;transition:none}.employee-loading-bar i{transform:none;width:100%;opacity:.6}}\n\n/* =========================================================\n   MOBILE SAFE AREA / TOUCH TARGET HARDENING\n   ========================================================= */\n.employee-topbar {\n  padding-top: max(0px, env(safe-area-inset-top));\n}\n.employee-page {\n  padding-bottom: max(40px, calc(40px + env(safe-area-inset-bottom)));\n}\n.employee-topbar button,\n.employee-topbar a,\n.portal-primary,\n.portal-secondary,\n.employee-form button,\n.notification-list button {\n  min-height: 40px;\n}\n\n@media (max-width:700px) {\n  .employee-topbar {\n    padding-left: max(14px, env(safe-area-inset-left));\n    padding-right: max(14px, env(safe-area-inset-right));\n  }\n  .employee-page {\n    padding-left: max(14px, env(safe-area-inset-left));\n    padding-right: max(14px, env(safe-area-inset-right));\n  }\n}\n\n/* Unified Kotak Saran pilot component */\n.suggestion-box{min-width:0}\n.suggestion-header{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding-bottom:18px;border-bottom:1px solid var(--line,#e5e7eb)}\n.suggestion-header h2{margin:.28rem 0 .35rem;font-size:clamp(1.2rem,2vw,1.55rem)}\n.suggestion-header p{margin:0;max-width:680px}\n.suggestion-security{display:inline-flex;align-items:center;white-space:nowrap;padding:7px 10px;border:1px solid var(--line,#e5e7eb);border-radius:999px;font-size:.75rem;font-weight:700;color:var(--text-muted,#64748b);background:var(--panel-soft,#f8fafc)}\n.suggestion-form-grid{margin-top:18px}\n.suggestion-box .employee-form{gap:14px}\n.suggestion-box label small{display:block;margin-top:5px;color:var(--text-muted,#64748b);font-size:.76rem}\n.suggestion-check{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1px solid var(--line,#e5e7eb);border-radius:12px;background:var(--panel-soft,#f8fafc);cursor:pointer}\n.suggestion-check input{margin-top:3px;accent-color:var(--accent,#c9a227)}\n.suggestion-check span{display:grid;gap:2px}\n.suggestion-footer{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:2px;padding-top:14px;border-top:1px solid var(--line,#e5e7eb)}\n.suggestion-footer>small{color:var(--text-muted,#64748b);line-height:1.45}\n.suggestion-success{display:grid;place-items:start;align-content:center;min-height:360px;text-align:left}\n.suggestion-success-icon{display:grid;place-items:center;width:52px;height:52px;margin-bottom:14px;border-radius:50%;background:rgba(34,197,94,.12);color:#15803d;font-size:1.5rem;font-weight:800}\n.suggestion-success h2{margin:.35rem 0 .4rem}\n.suggestion-success p{max-width:520px;margin:0 0 18px;color:var(--text-muted,#64748b);line-height:1.6}\n@media(max-width:700px){.suggestion-header{display:grid}.suggestion-security{justify-self:start}.suggestion-footer{align-items:stretch;flex-direction:column}.suggestion-footer .portal-primary{width:100%}}\n\n\n/* Shared Project by Tirta theme contract. */\n.employee-login,\n.employee-portal { color: var(--app-text, #172033); background: var(--app-bg, #f6f7fb); }\n.employee-login-card { background: var(--app-surface, #fff); border-color: var(--app-border, #dfe5ee); }\n\n/* =========================================================\n   PROJECT BY TIRTA — FIXED NAVY/SILVER/GOLD CARDS\n   Cards stay identical across themes; main page background may vary.\n   ========================================================= */\n.employee-portal,\n.employee-login {\n  --fixed-card-bg: #101827;\n  --fixed-card-bg-2: #0b132b;\n  --fixed-card-text: #e2e5ea;\n  --fixed-card-muted: #aeb7c5;\n  --fixed-gold: #d6ae58;\n  --fixed-sidebar: #070f20;\n}\n\n.employee-portal {\n  background: var(--bg) ;\n  color: var(--fixed-card-text) ;\n}\n\n.employee-topbar {\n  background: var(--fixed-card-bg) ;\n  color: var(--fixed-card-text) ;\n  border-bottom: 2px solid var(--fixed-gold) ;\n}\n\n.portal-card,\n.ess-kpi,\n.attendance-card,\n.info-card,\n.payslip-card,\n.table-card,\n.employee-loading-card,\n.security-box,\n.card,\n.action-card,\n.attendance-meta > div,\n.quick-list button,\n.schedule-item,\n.info-list > div,\n.request-list > div,\n.salary-lines > div {\n  background: var(--fixed-card-bg) ;\n  color: var(--fixed-card-text) ;\n  border: 2px solid var(--fixed-gold) ;\n  box-shadow: 0 12px 30px rgba(0,0,0,.16) ;\n}\n\n.employee-login-card,\n.employee-loading-card {\n  background: var(--fixed-card-bg) ;\n  color: var(--fixed-card-text) ;\n  border: 2px solid var(--fixed-gold) ;\n}\n\n.card-title h2,\n.info-card h2,\n.payslip-card h2,\n.empty-state h2,\n.employee-heading h1,\n.login-copy h2,\n.ess-kpi strong,\n.portal-card h1,\n.portal-card h2,\n.portal-card h3,\n.portal-card h4,\n.payslip-card h3,\n.attendance-card h3,\n.info-card h3,\n.employee-login-card h1,\n.employee-brand strong,\n.employee-user b {\n  color: var(--fixed-card-text) ;\n}\n\n.portal-card p,\n.portal-card small,\n.portal-card span,\n.ess-kpi span,\n.employee-heading p,\n.login-copy p,\n.employee-user small,\n.info-list small,\n.request-list small,\n.payslip-card p,\n.schedule-item small,\n.schedule-item span,\n.attendance-meta small,\n.login-footnote,\n.employee-brand small,\n.employee-loading-copy span {\n  color: var(--fixed-card-muted) ;\n}\n\n.employee-form input,\n.employee-form select,\n.employee-form textarea,\n.attendance-card select,\n.employee-login-card input {\n  background: #111b33 ;\n  color: #eef1f5 ;\n  border: 1px solid var(--fixed-gold) ;\n}\n\n.portal-secondary,\n.portal-logout {\n  background: var(--fixed-card-bg-2) ;\n  color: var(--fixed-card-text) ;\n  border: 2px solid var(--fixed-gold) ;\n}\n\n.portal-primary {\n  background: var(--fixed-gold) ;\n  color: #0b1222 ;\n  border: 2px solid #f0d68c ;\n}\n\n.quick-list button:hover,\n.schedule-item:hover {\n  background: #172033 ;\n  border-color: #f0d68c ;\n}\n\n.status-badge,\n.employee-tabs button.active {\n  border-color: var(--fixed-gold) ;\n}\n\n@media (max-width:700px) {\n  .portal-card,\n  .ess-kpi,\n  .attendance-card,\n  .info-card,\n  .payslip-card,\n  .table-card,\n  .employee-loading-card { border-width: 1.5px ; }\n}\n\n\n.registration-page {\n  min-height: calc(100vh - 74px);\n  display: grid;\n  place-items: center;\n  padding: 42px 20px;\n  background: #f5f7fb;\n}\n\n.registration-shell {\n  width: min(760px, 100%);\n}\n\n.registration-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n\n.registration-logo {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  background: #0d1b35;\n  color: #d6ae58;\n  font-weight: 800;\n}\n\n.registration-brand div strong {\n  display: block;\n  color: #0d1b35;\n  font-size: 18px;\n}\n\n.registration-brand div span {\n  display: block;\n  color: #718096;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.registration-card {\n  background: #fff;\n  border: 1px solid #e5eaf2;\n  border-radius: 24px;\n  padding: 34px;\n  box-shadow: 0 20px 55px rgba(15, 23, 42, .08);\n}\n\n.registration-heading {\n  margin-bottom: 22px;\n}\n\n.registration-eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .14em;\n  color: #b18432;\n  text-transform: uppercase;\n}\n\n.registration-heading h1 {\n  margin: 7px 0 6px;\n  color: #0d1b35;\n  font-size: 26px;\n}\n\n.registration-heading p {\n  margin: 0;\n  color: #667085;\n  font-size: 14px;\n}\n\n.registration-section {\n  margin-top: 24px;\n}\n\n.registration-section h3 {\n  font-size: 15px;\n  color: #0d1b35;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #e5eaf2;\n  padding-bottom: 6px;\n}\n\n.registration-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n  color: #344054;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.registration-field input,\n.registration-field textarea {\n  height: 44px;\n  border: 1px solid #d9e0ea;\n  border-radius: 11px;\n  padding: 10px 13px;\n  font: inherit;\n  font-weight: 500;\n  color: #101828;\n  outline: none;\n  background: #fff;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.registration-field textarea {\n  height: auto;\n  resize: none;\n}\n\n.registration-field input:focus,\n.registration-field textarea:focus {\n  border-color: #b18432;\n  box-shadow: 0 0 0 3px rgba(177, 132, 50, .12);\n}\n\n.registration-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n\n.registration-role-note {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px;\n  margin: 20px 0;\n  font-size: 13px;\n  color: #475569;\n}\n\n.registration-role-note strong {\n  color: #0d1b35;\n}\n\n.registration-role-note p {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.registration-error, \n.registration-success {\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n\n.registration-error {\n  background: #fff1f1;\n  color: #b42318;\n  border: 1px solid #fecdca;\n}\n\n.registration-success {\n  background: #ecfdf3;\n  color: #067647;\n  border: 1px solid #abefc6;\n  text-align: center;\n  padding: 30px;\n}\n\n.registration-success h1 {\n  color: #0d1b35;\n  margin: 14px 0 8px;\n}\n\n.registration-success p {\n  color: #667085;\n  margin-bottom: 16px;\n}\n\n.registration-success-box {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px;\n  margin: 16px 0;\n  text-align: left;\n}\n\n.registration-success-box strong {\n  display: block;\n  color: #0d1b35;\n  font-size: 14px;\n}\n\n.registration-success-box span {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.registration-button {\n  width: 100%;\n  height: 46px;\n  border-radius: 11px;\n  border: 0;\n  background: #0d1b35;\n  color: #fff;\n  font-weight: 800;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background 0.2s;\n}\n\n.registration-button:hover {\n  background: #162a4f;\n}\n\n.registration-button:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n\n.registration-back {\n  width: 100%;\n  height: 44px;\n  border-radius: 11px;\n  border: 1px solid #d9e0ea;\n  background: #fff;\n  color: #344054;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.registration-back:hover {\n  background: #f8fafc;\n}\n\n@media(max-width: 650px) {\n  .registration-card {\n    padding: 24px;\n  }\n  .registration-row {\n    grid-template-columns: 1fr;\n  }\n}\n.registration-logo {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 14px;\n  overflow: hidden;\n  display: grid;\n  place-items: center;\n  background: #101a33;\n  border: 1px solid #d6ae58;\n  box-shadow: 0 8px 24px rgba(16, 26, 51, .14);\n}\n\n.registration-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.field-optional{font-size:11px;color:#94A3B8;font-weight:600}\n.field-help{font-size:11px;color:#64748B;font-weight:500;line-height:1.45}\n.registration-logo img{width:100%;height:100%;object-fit:contain;padding:6px}\n\n\n/* Shared Project by Tirta theme contract: keep text/surfaces readable and consistent. */\n.registration-page { background: var(--app-bg, #f6f7fb); color: var(--app-text, #172033); }\n.registration-card { background: var(--app-surface, #fff); border-color: var(--app-border, #dfe5ee); color: var(--app-text, #172033); }\n.registration-brand div strong,\n.registration-heading h1,\n.registration-section h3,\n.registration-success h1,\n.registration-success-box strong { color: var(--app-text, #172033); }\n.registration-brand div span,\n.registration-heading p,\n.registration-field,\n.registration-role-note,\n.registration-role-note p,\n.registration-success p,\n.registration-success-box span { color: var(--app-muted, #667085); }\n.registration-field input,\n.registration-field textarea,\n.registration-back { background: var(--app-surface, #fff); color: var(--app-text, #172033); border-color: var(--app-border, #dfe5ee); }\n.registration-field input::placeholder,\n.registration-field textarea::placeholder { color: var(--app-muted, #667085); }\n.registration-button { background: var(--app-primary, #101a33); color: var(--app-primary-contrast, #fff); }\n.registration-button:hover { background: color-mix(in srgb, var(--app-primary, #101a33) 88%, #000); }\n\n\n:root {\n  --blue: #0b1736;\n  --blue2: #12244d;\n  --blue-soft: #fbf5e7;\n  --ink: #0b1736;\n  --muted: #64748b;\n  --line: #e5eaf2;\n  --surface: #fff;\n  --bg: #f7f9fc;\n  --green: #22a06b;\n  --red: #d9534f;\n  --orange: #b7791f;\n  --purple: #a67c22;\n  --mx-text-secondary: #64748b;\n  --mx-text-muted: #94a3b8;\n}\n* {\n  box-sizing: border-box;\n}\n.talenta-shell {\n  min-height: 100vh;\n  background: var(--bg);\n  color: var(--ink);\n  display: flex;\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    \"Segoe UI\",\n    sans-serif;\n}\n.talenta-sidebar {\n  width: 268px;\n  background: #fff;\n  border-right: 1px solid var(--line);\n  padding: 18px 13px;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex: none;\n  overflow: auto;\n}\n.talenta-sidebar.collapsed {\n  width: 76px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 8px 20px;\n}\n.brand.center {\n  justify-content: center;\n}\n.brand-mark {\n  width: 37px;\n  height: 37px;\n  border-radius: 11px;\n  background: linear-gradient(135deg, #2563eb, #7c3aed);\n  color: white;\n  display: grid;\n  place-items: center;\n  font-weight: 850;\n}\n.brand b {\n  display: block;\n  font-size: 16px;\n}\n.brand small {\n  display: block;\n  color: #8a93a3;\n  font-size: 10px;\n  margin-top: 1px;\n}\n.workspace {\n  border: 1px solid var(--line);\n  border-radius: 11px;\n  padding: 11px;\n  margin-bottom: 15px;\n  color: #8a93a3;\n  font-size: 9px;\n}\n.workspace b {\n  display: block;\n  color: #344054;\n  font-size: 12px;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.workspace small {\n  display: block;\n  margin-top: 3px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.nav-group {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.group-title {\n  border: 0;\n  background: transparent;\n  color: #98a2b3;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.8px;\n  padding: 7px 10px 4px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.nav-item {\n  border: 0;\n  background: transparent;\n  color: #667085;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 9px 10px;\n  cursor: pointer;\n  text-align: left;\n  font-size: 12px;\n  min-height: 37px;\n}\n.nav-item:hover {\n  background: #f5f7fa;\n  color: #172033;\n}\n.nav-item.active {\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-weight: 750;\n}\n.nav-icon {\n  width: 20px;\n  text-align: center;\n  font-size: 13px;\n}\n.nav-item em {\n  margin-left: auto;\n  background: #edf1f7;\n  border-radius: 99px;\n  padding: 2px 7px;\n  font-style: normal;\n  font-size: 9px;\n}\n.sidebar-bottom {\n  margin-top: auto;\n  padding-top: 12px;\n}\n.admin-mini {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  border-top: 1px solid var(--line);\n  padding: 13px 7px 8px;\n}\n.admin-mini b {\n  font-size: 11px;\n  display: block;\n}\n.admin-mini small {\n  font-size: 9px;\n  color: #98a2b3;\n}\n.avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #dbeafe;\n  color: #1d4ed8;\n  display: grid;\n  place-items: center;\n  font-size: 10px;\n  font-weight: 800;\n}\n.logout {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #9a3a3a;\n  padding: 9px;\n  text-align: left;\n  cursor: pointer;\n  border-radius: 9px;\n}\n.logout:hover {\n  background: #fff1f2;\n}\n.talenta-main {\n  min-width: 0;\n  flex: 1;\n}\n.topbar {\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--line);\n  display: flex;\n  align-items: center;\n  padding: 0 28px;\n  gap: 18px;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n}\n.icon-btn {\n  border: 0;\n  background: transparent;\n  color: #667085;\n  font-size: 18px;\n  cursor: pointer;\n}\n.crumb {\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.crumb span {\n  color: #98a2b3;\n}\n.crumb b {\n  color: #d0d5dd;\n}\n.top-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 13px;\n}\n.search-global {\n  height: 38px;\n  width: min(330px, 35vw);\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  padding: 0 11px;\n  gap: 8px;\n  background: #fbfcfe;\n}\n.search-global input {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  width: 100%;\n  font-size: 12px;\n}\n.page {\n  padding: 27px;\n  max-width: 1600px;\n  margin: auto;\n}\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-start;\n  margin-bottom: 21px;\n}\n.page-heading h1 {\n  font-size: 25px;\n  margin: 4px 0 5px;\n  color: #172033;\n  font-weight: 780;\n  letter-spacing: -0.5px;\n}\n.page-heading p,\n.panel-head p {\n  margin: 0;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.5;\n}\n.eyebrow {\n  font-size: 9px;\n  color: var(--blue);\n  font-weight: 850;\n  letter-spacing: 1.4px;\n}\n.primary,\n.secondary {\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-weight: 700;\n  font-size: 11px;\n  cursor: pointer;\n}\n.primary {\n  background: var(--blue);\n  color: #fff;\n  border: 1px solid var(--blue);\n  box-shadow: 0 2px 5px #2563eb25;\n}\n.primary:hover {\n  background: #1d4ed8;\n}\n.secondary {\n  background: #fff;\n  border: 1px solid #d9dee8;\n  color: #344054;\n}\n.full {\n  width: 100%;\n}\n.stat-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 13px;\n  margin-bottom: 15px;\n}\n.stat-grid.three {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.stat-card {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 17px;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  box-shadow: 0 1px 2px #10182808;\n}\n.stat-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: #eff6ff;\n  color: #2563eb;\n  display: grid;\n  place-items: center;\n  font-size: 13px;\n  font-weight: 800;\n  flex: none;\n}\n.stat-card span,\n.stat-card small {\n  display: block;\n  color: #667085;\n  font-size: 10px;\n}\n.stat-card strong {\n  display: block;\n  color: #172033;\n  font-size: 19px;\n  margin: 4px 0 2px;\n  line-height: 1.1;\n}\n.mini-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin-bottom: 17px;\n}\n.mini-kpi {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 13px;\n  position: relative;\n}\n.mini-kpi span {\n  font-size: 9px;\n  color: #98a2b3;\n  display: block;\n}\n.mini-kpi b {\n  font-size: 15px;\n  display: block;\n  margin-top: 3px;\n}\n.mini-kpi i {\n  position: absolute;\n  right: 12px;\n  top: 15px;\n  font-style: normal;\n  color: var(--green);\n  font-size: 11px;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 285px;\n  gap: 16px;\n}\n.panel {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  box-shadow: 0 1px 2px #10182808;\n  overflow: hidden;\n}\n.panel-head {\n  padding: 17px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.panel-head h2,\n.quick h2,\n.settings h2 {\n  margin: 0 0 4px;\n  font-size: 14px;\n}\n.link-btn {\n  border: 0;\n  background: none;\n  color: var(--blue);\n  font-weight: 700;\n  font-size: 10px;\n  cursor: pointer;\n}\n.quick {\n  padding: 17px;\n}\n.quick p {\n  color: var(--muted);\n  font-size: 10px;\n  margin: 0 0 12px;\n}\n.quick-action {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 11px 0;\n  border: 0;\n  border-top: 1px solid var(--line);\n  background: transparent;\n  text-align: left;\n  font-size: 11px;\n  color: #344054;\n  cursor: pointer;\n}\n.quick-action > span:last-child {\n  margin-left: auto;\n  color: #98a2b3;\n}\n.quick-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 7px;\n  background: #f3f6fa;\n  display: grid;\n  place-items: center;\n  color: var(--blue);\n}\n.table-panel {\n  margin-top: 13px;\n}\n.table-wrap {\n  overflow: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10.5px;\n  min-width: 760px;\n}\nth {\n  background: #fafbfc;\n  color: #667085;\n  font-weight: 750;\n  text-align: left;\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--line);\n  white-space: nowrap;\n}\ntd {\n  padding: 11px 14px;\n  border-bottom: 1px solid #f0f2f5;\n  color: #344054;\n  vertical-align: middle;\n}\ntr:hover td {\n  background: #fbfcff;\n}\ntd b {\n  font-weight: 700;\n  color: #1d2939;\n}\ntd small {\n  display: block;\n  color: #98a2b3;\n  font-size: 9px;\n  margin-top: 2px;\n}\n.green {\n  color: var(--green) ;\n}\n.muted {\n  color: #98a2b3 ;\n}\n.status {\n  display: inline-block;\n  padding: 4px 7px;\n  border-radius: 99px;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status.green {\n  background: #ecfdf3;\n  color: #087443;\n}\n.status.red {\n  background: #fef2f2;\n  color: #b42318;\n}\n.status.orange {\n  background: #fff7ed;\n  color: #b45309;\n}\n.status.blue {\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.person {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mini-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: #eef2ff;\n  color: #4f46e5;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 10px;\n}\n.danger-text {\n  border: 0;\n  background: none;\n  color: #dc2626;\n  font-size: 10px;\n  cursor: pointer;\n}\n.selfie {\n  width: 35px;\n  height: 35px;\n  border-radius: 7px;\n  object-fit: cover;\n}\n.selfie.blank {\n  background: #f3f4f6;\n  display: grid;\n  place-items: center;\n  color: #98a2b3;\n}\n.toolbar,\n.filter-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.filter-row {\n  justify-content: flex-start;\n}\n.filter {\n  border: 1px solid var(--line);\n  background: #fff;\n  padding: 7px 10px;\n  border-radius: 7px;\n  font-size: 10px;\n  color: #667085;\n}\n.filter.active {\n  color: var(--blue);\n  background: var(--blue-soft);\n  border-color: #bfdbfe;\n}\n.loading {\n  position: fixed;\n  top: 72px;\n  right: 25px;\n  background: #172033;\n  color: #fff;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 10px;\n  z-index: 20;\n}\n.alert,\n.form-error {\n  background: #fef2f2;\n  color: #b42318;\n  border: 1px solid #fecaca;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 10px;\n  margin-bottom: 12px;\n}\n.empty-cell {\n  text-align: center ;\n  padding: 35px ;\n  color: #98a2b3 ;\n}\n.form-panel {\n  padding: 20px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n}\n.form-grid label,\n.login-card label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 10px;\n  color: #475467;\n  font-weight: 700;\n}\n.form-grid input,\n.login-card input {\n  height: 39px;\n  border: 1px solid #d8dee8;\n  border-radius: 8px;\n  padding: 0 11px;\n  outline: none;\n  font-size: 11px;\n  background: #fff;\n}\n.form-grid input:focus,\n.login-card input:focus {\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 3px #dbeafe;\n}\n.full-span {\n  grid-column: 1/-1;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 3px;\n}\n.org-grid,\n.calendar-grid,\n.feature-grid,\n.report-grid,\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 13px;\n}\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 17px;\n  box-shadow: 0 1px 2px #10182808;\n}\n.org-icon,\n.feature-icon,\n.setting-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  background: #eff6ff;\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n}\n.org-card h3,\n.calendar-card h3,\n.feature-card h3,\n.report-card h3,\n.setting-card h3 {\n  font-size: 13px;\n  margin: 13px 0 5px;\n}\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.setting-card p {\n  font-size: 10px;\n  color: var(--muted);\n  line-height: 1.5;\n  margin: 0 0 12px;\n}\n.progress {\n  height: 5px;\n  background: #eef2f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.progress span {\n  display: block;\n  height: 100%;\n  background: var(--blue);\n  border-radius: 99px;\n}\n.report-card span {\n  font-size: 8px;\n  color: #98a2b3;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.report-card > b {\n  font-size: 24px;\n  display: block;\n  margin-top: 12px;\n}\n.chart-placeholder {\n  height: 260px;\n  padding: 25px 30px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.bars {\n  height: 190px;\n  display: flex;\n  align-items: flex-end;\n  gap: 15px;\n  border-bottom: 1px solid var(--line);\n}\n.bars i {\n  flex: 1;\n  max-width: 55px;\n  background: linear-gradient(#60a5fa, #2563eb);\n  border-radius: 6px 6px 0 0;\n}\n.chart-labels {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 8px;\n  color: #98a2b3;\n  font-size: 9px;\n}\n.feature-grid,\n.settings-grid {\n  margin-bottom: 14px;\n}\n.empty-module {\n  padding: 55px 25px;\n  text-align: center;\n}\n.empty-icon {\n  margin: auto;\n  width: 48px;\n  height: 48px;\n  border-radius: 13px;\n  background: #eff6ff;\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n}\n.empty-module h3 {\n  font-size: 14px;\n  margin: 14px 0 5px;\n}\n.empty-module p {\n  max-width: 520px;\n  margin: auto;\n  color: var(--muted);\n  font-size: 11px;\n  line-height: 1.6;\n}\n.badge-soft {\n  background: #f2f4f7;\n  color: #667085;\n  border-radius: 99px;\n  padding: 5px 8px;\n  font-size: 9px;\n}\n.login-wrap {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #f8fbff, #eef2ff);\n  display: grid;\n  place-items: center;\n  padding: 20px;\n}\n.login-card {\n  width: min(420px, 100%);\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 32px;\n  box-shadow: 0 20px 60px #10182818;\n}\n.login-card h1 {\n  font-size: 25px;\n  margin: 28px 0 5px;\n}\n.login-card > p {\n  font-size: 11px;\n  color: var(--muted);\n  margin: 0 0 22px;\n}\n.login-card form {\n  display: grid;\n  gap: 14px;\n}\n.security-note {\n  display: block;\n  color: #98a2b3;\n  font-size: 9px;\n  line-height: 1.5;\n  margin-top: 16px;\n}\n.form-error {\n  margin: 0;\n}\n.center {\n  justify-content: center;\n}\n.center > div:last-child {\n  text-align: left;\n}\n@media (max-width: 1050px) {\n  .talenta-sidebar {\n    width: 220px;\n  }\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .mini-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .talenta-sidebar {\n    width: 76px;\n  }\n  .talenta-sidebar .brand > div:last-child,\n  .workspace,\n  .group-title,\n  .nav-item > span:nth-child(2),\n  .admin-mini > div:last-child,\n  .logout {\n    display: none;\n  }\n  .talenta-sidebar .nav-item {\n    justify-content: center;\n  }\n  .page {\n    padding: 17px;\n  }\n  .topbar {\n    padding: 0 14px;\n  }\n  .search-global {\n    width: 150px;\n  }\n  .page-heading {\n    flex-direction: column;\n  }\n  .stat-grid,\n  .stat-grid.three,\n  .mini-kpi-row,\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid,\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .top-actions .icon-btn {\n    display: none;\n  }\n}\n\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.drawer-backdrop {\n  position: fixed;\n  inset: 0;\n  background: #10182855;\n  z-index: 50;\n  display: flex;\n  justify-content: flex-end;\n}\n.edit-drawer {\n  width: min(500px, 100%);\n  height: 100%;\n  background: #fff;\n  box-shadow: -20px 0 60px #10182822;\n  display: flex;\n  flex-direction: column;\n}\n.drawer-head {\n  padding: 20px;\n  border-bottom: 1px solid var(--line);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.drawer-head span {\n  font-size: 8px;\n  color: var(--blue);\n  font-weight: 850;\n  letter-spacing: 1.2px;\n}\n.drawer-head h2 {\n  font-size: 20px;\n  margin: 5px 0 0;\n}\n.drawer-body {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  overflow: auto;\n}\n.drawer-body label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 10px;\n  color: #475467;\n  font-weight: 700;\n}\n.drawer-body input:not([type=\"checkbox\"]) {\n  height: 39px;\n  border: 1px solid #d8dee8;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 11px;\n}\n.switch-row {\n  grid-column: 1/-1;\n  flex-direction: row ;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid var(--line);\n  padding: 12px;\n  border-radius: 9px;\n}\n.drawer-foot {\n  border-top: 1px solid var(--line);\n  padding: 15px 20px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.toast {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n  z-index: 60;\n  border: 1px solid #bbf7d0;\n  background: #f0fdf4;\n  color: #166534;\n  border-radius: 10px;\n  padding: 11px 14px;\n  box-shadow: 0 12px 35px #10182818;\n  font-size: 11px;\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .drawer-body {\n    grid-template-columns: 1fr;\n  }\n}\n\n.branch-nav {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  margin: -7px 0 18px;\n  padding: 5px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 11px;\n  width: max-content;\n  max-width: 100%;\n  box-shadow: 0 1px 2px #10182808;\n}\n.branch-nav button {\n  border: 0;\n  background: transparent;\n  color: #667085;\n  padding: 9px 12px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.branch-nav button:hover {\n  background: #f5f7fa;\n  color: #172033;\n}\n.branch-nav button.active {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.branch-nav button span {\n  font-size: 12px;\n}\n.clickable {\n  transition: 0.15s;\n}\n.clickable:hover {\n  transform: translateY(-1px);\n  border-color: #bfdbfe;\n  box-shadow: 0 6px 20px #1018280c;\n}\n.split-module {\n  display: grid;\n  grid-template-columns: 300px minmax(0, 1fr);\n  gap: 14px;\n}\n.list-select {\n  display: flex;\n  width: 100%;\n  border: 0;\n  border-top: 1px solid var(--line);\n  background: #fff;\n  padding: 14px 17px;\n  justify-content: space-between;\n  align-items: center;\n  color: #344054;\n  font-size: 11px;\n  cursor: pointer;\n  text-align: left;\n}\n.list-select:hover,\n.list-select.active {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.detail-panel {\n  padding: 22px;\n}\n.detail-panel h2 {\n  font-size: 19px;\n  margin: 7px 0 4px;\n}\n.detail-panel > p {\n  font-size: 11px;\n  color: var(--muted);\n  margin: 0 0 20px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.info-box {\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  padding: 12px;\n  background: #fafbfc;\n}\n.info-box span {\n  display: block;\n  color: #98a2b3;\n  font-size: 9px;\n}\n.info-box b {\n  display: block;\n  margin-top: 5px;\n  font-size: 13px;\n}\n.detail-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 18px;\n}\n.assignment-list {\n  padding: 0 17px 17px;\n}\n.assignment-row {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 0;\n  border: 0;\n  border-top: 1px solid var(--line);\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  font-size: 11px;\n}\n.assignment-row span {\n  color: #98a2b3;\n}\n.assignment-row em {\n  margin-left: auto;\n  color: var(--blue);\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n}\n.assignment-row:hover b {\n  color: var(--blue);\n}\n@media (max-width: 700px) {\n  .branch-nav {\n    width: 100%;\n    overflow: auto;\n    flex-wrap: nowrap;\n  }\n  .branch-nav button {\n    white-space: nowrap;\n  }\n  .split-module {\n    grid-template-columns: 1fr;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/* MoonHR Enterprise visual layer: aligns admin modules with the public brand. */\n:root {\n  --blue: #0f172a;\n  --blue2: #172554;\n  --blue-soft: #f7f1dc;\n  --ink: #172033;\n  --muted: #667085;\n  --line: #e7eaf0;\n  --surface: #fff;\n  --bg: #f7f8fb;\n  --green: #157347;\n  --red: #b42318;\n  --orange: #9a6700;\n  --purple: #6d5bd0;\n}\n.talenta-shell {\n  background: var(--bg);\n}\n.talenta-sidebar {\n  background: linear-gradient(180deg, #0b1222 0%, #111b33 100%);\n  border-right: 1px solid #1e293b;\n}\n.talenta-sidebar .brand {\n  color: #fff;\n}\n.talenta-sidebar .brand-mark {\n  background: linear-gradient(135deg, #0f172a, #1e3a8a) ;\n  color: #d8bd59 ;\n  border: 1px solid #9a7a13 ;\n}\n.nav-item:hover {\n  background: #ffffff0d ;\n}\n.nav-item.active {\n  background: linear-gradient(90deg, #ffffff12, #ffffff08) ;\n  color: #f5df86 ;\n  border-left-color: #c9a227 ;\n}\n.group-title {\n  color: #94a3b8 ;\n}\n.topbar {\n  background: #fff;\n  border-bottom: 1px solid var(--line);\n}\n.primary {\n  background: linear-gradient(135deg, #0f172a, #172554) ;\n  border-color: #c9a227 ;\n  color: #f5df86 ;\n}\n.secondary {\n  background: #fff ;\n  border-color: #d8dee8 ;\n  color: #344054 ;\n}\n.secondary:hover {\n  background: #f7f1dc ;\n  border-color: #c9a227 ;\n}\n.stat-card,\n.panel,\n.login-card,\n.branch-nav,\n.info-box {\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.045) ;\n}\n.stat-icon {\n  background: #f7f1dc ;\n  color: #8a6b0b ;\n}\n.green {\n  color: #157347 ;\n}\n.link-btn {\n  color: #8a6b0b ;\n}\n.badge-soft {\n  background: #f7f1dc ;\n  color: #6e5707 ;\n}\n.login-wrap {\n  background: radial-gradient(\n    circle at 15% 10%,\n    #eef3ff 0,\n    #f7f8fb 42%,\n    #fff 100%\n  ) ;\n}\n.login-card {\n  border-radius: 20px;\n}\n.login-card .brand-mark {\n  background: linear-gradient(135deg, #0f172a, #172554) ;\n  color: #d8bd59 ;\n  border: 1px solid #c9a227 ;\n}\n.branch-nav button.active,\n.list-select:hover,\n.list-select.active {\n  background: #f7f1dc ;\n  color: #8a6b0b ;\n}\n.clickable:hover {\n  border-color: #d8bd59 ;\n}\n.drawer-head span {\n  color: #8a6b0b ;\n}\n.payroll-module .page-heading h1 {\n  margin-bottom: 4px;\n}\n.payroll-module .page-heading p {\n  color: var(--muted);\n  font-size: 11px;\n}\n.payroll-policy-list {\n  display: grid;\n  gap: 10px;\n}\n.payroll-policy-list > div {\n  padding: 14px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: #fafbfc;\n}\n.payroll-policy-list b,\n.payroll-policy-list span {\n  display: block;\n}\n.payroll-policy-list b {\n  font-size: 11px;\n}\n.payroll-policy-list span {\n  font-size: 10px;\n  color: var(--muted);\n  margin-top: 4px;\n  line-height: 1.5;\n}\n.payroll-steps {\n  display: grid;\n  gap: 10px;\n}\n.payroll-steps > div {\n  display: grid;\n  grid-template-columns: 35px 1fr;\n  column-gap: 10px;\n  padding: 12px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n}\n.payroll-steps strong {\n  grid-row: 1/3;\n  color: #9a7a13;\n}\n.payroll-steps b {\n  font-size: 11px;\n}\n.payroll-steps span {\n  font-size: 9px;\n  color: var(--muted);\n  margin-top: 3px;\n}\n.toolbar-panel {\n  display: flex;\n  gap: 18px;\n  align-items: end;\n  flex-wrap: wrap;\n  background: var(--panel, #fff);\n  border: 1px solid var(--line, #e7e9ef);\n  border-radius: 18px;\n  padding: 16px;\n  margin-bottom: 18px;\n}\n.toolbar-panel label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.toolbar-panel input,\n.toolbar-panel select,\n.toolbar-panel textarea,\n.inline-form input {\n  padding: 10px 12px;\n  border: 1px solid #dfe3ea;\n  border-radius: 10px;\n  background: #fff;\n}\n.stat-inline {\n  display: flex;\n  flex-direction: column;\n  min-width: 120px;\n}\n.stat-inline b {\n  font-size: 20px;\n}\n.stat-inline span {\n  font-size: 11px;\n  color: #6b7280;\n}\n.kanban-grid {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(180px, 1fr));\n  gap: 12px;\n  overflow: auto;\n}\n.kanban-col {\n  background: #f6f7f9;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 10px;\n  min-height: 380px;\n}\n.kanban-head {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 8px;\n}\n.kanban-head span {\n  background: #fff;\n  border-radius: 99px;\n  padding: 2px 7px;\n  font-size: 11px;\n}\n.kanban-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 12px;\n  margin: 8px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.kanban-card small {\n  color: #6b7280;\n}\n.kanban-card select {\n  font-size: 11px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 6px;\n}\n.role-builder {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 18px;\n}\n.role-list-item {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  text-align: left;\n  border: 0;\n  background: transparent;\n  padding: 12px;\n  border-radius: 10px;\n  margin-top: 4px;\n}\n.role-list-item.active {\n  background: #eef2ff;\n}\n.role-list-item small {\n  color: #6b7280;\n}\n.inline-form {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.permission-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(180px, 1fr));\n  gap: 8px;\n  margin: 18px 0;\n}\n.permission-item {\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 9px;\n  font-size: 12px;\n  background: #fafafa;\n}\n.permission-item input {\n  margin-right: 8px;\n}\n@media (max-width: 900px) {\n  .role-builder {\n    grid-template-columns: 1fr;\n  }\n  .permission-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .kanban-grid {\n    grid-template-columns: repeat(2, minmax(180px, 1fr));\n  }\n}\n@media (max-width: 600px) {\n  .permission-grid {\n    grid-template-columns: 1fr;\n  }\n  .kanban-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Enterprise UX v2: navigation, accessibility and responsive polish */\n.nav-item {\n  position: relative;\n  min-height: 42px;\n}\n.nav-item.active:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 0 3px 3px 0;\n}\n.group-title {\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.search-global input {\n  outline: none;\n}\n.search-global:focus-within {\n  border-color: #c9a227;\n  box-shadow: 0 0 0 3px #c9a22718;\n}\n.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.panel,\n.stat-card {\n  transition:\n    box-shadow 0.18s ease,\n    transform 0.18s ease;\n}\n.panel:hover {\n  box-shadow: 0 10px 34px rgba(15, 23, 42, 0.06) ;\n}\n.primary:focus-visible,\n.secondary:focus-visible,\n.nav-item:focus-visible,\n.group-title:focus-visible,\n.icon-btn:focus-visible {\n  outline: 3px solid #c9a22755;\n  outline-offset: 2px;\n}\n.status {\n  white-space: nowrap;\n}\n.table-wrap {\n  scrollbar-width: thin;\n}\n.page {\n  min-height: calc(100vh - 68px);\n}\n.mini-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.mini-kpi-row .stat-card {\n  min-height: 92px;\n}\n.mini-kpi-row .stat-card strong {\n  font-size: 25px;\n}\n.workspace {\n  border-radius: 12px;\n}\n.role-builder .panel {\n  min-height: 100%;\n}\n.permission-item {\n  transition: 0.15s ease;\n}\n.permission-item:has(input:checked) {\n  border-color: #c9a227;\n  background: #fffaf0;\n}\n.kanban-card select:focus,\n.toolbar-panel input:focus,\n.toolbar-panel select:focus,\n.drawer-body input:focus,\n.drawer-body select:focus,\n.drawer-body textarea:focus {\n  outline: none;\n  border-color: #c9a227;\n  box-shadow: 0 0 0 3px #c9a22718;\n}\n.drawer-body textarea {\n  min-height: 100px;\n  padding: 10px;\n  border: 1px solid #d8dee8;\n  border-radius: 8px;\n  resize: vertical;\n}\n@media (max-width: 900px) {\n  .mini-kpi-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 600px) {\n  .mini-kpi-row {\n    grid-template-columns: 1fr;\n  }\n  .topbar {\n    position: sticky;\n  }\n  .page {\n    padding-bottom: 80px;\n  }\n  .drawer-foot {\n    position: sticky;\n    bottom: 0;\n    background: #fff;\n  }\n}\n\n/* V3 visual system */\n.ui-icon {\n  width: 18px;\n  height: 18px;\n  display: block;\n  flex: 0 0 18px;\n}\n.nav-icon {\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  opacity: 0.86;\n}\n.nav-item.active .nav-icon {\n  opacity: 1;\n}\n.compact-input {\n  max-width: 240px;\n  padding: 10px 12px;\n  border: 1px solid var(--border, #dfe3ea);\n  border-radius: 10px;\n  background: var(--surface, #fff);\n}\n.permission-section {\n  margin: 18px 0 24px;\n}\n.permission-section h4 {\n  margin: 0 0 10px;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  opacity: 0.65;\n}\n.permission-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n}\n.permission-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 10px;\n  border: 1px solid var(--border, #e3e6eb);\n  border-radius: 9px;\n  font-size: 13px;\n  background: rgba(255, 255, 255, 0.02);\n}\n.permission-item input {\n  accent-color: #b78a2c;\n}\n.permission-item:has(input:checked) {\n  border-color: #b78a2c66;\n  background: #b78a2c0d;\n}\n@media (max-width: 700px) {\n  .compact-input {\n    max-width: none;\n    width: 100%;\n  }\n}\n\n.brand-mark img {\n  width: 26px;\n  height: 26px;\n  display: block;\n}\n.search-global > span {\n  display: grid;\n  place-items: center;\n}\n.search-global .ui-icon {\n  width: 16px;\n  height: 16px;\n}\n\n/* V5 enterprise surfaces */\n.employee-picker {\n  min-width: 260px;\n  max-width: 340px;\n  padding: 12px 14px;\n  border: 1px solid var(--line, #dfe5ee);\n  border-radius: 12px;\n  background: #fff;\n  font-weight: 700;\n}\n.employee-hero {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-bottom: 16px;\n}\n.employee-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #101b35, #c7a86b);\n  color: #fff;\n  font-weight: 800;\n  font-size: 20px;\n}\n.employee-hero-copy {\n  flex: 1;\n}\n.employee-hero-copy h2 {\n  margin: 0 0 5px;\n}\n.employee-hero-copy p {\n  margin: 0 0 4px;\n  font-weight: 700;\n}\n.employee-hero-copy small {\n  opacity: 0.7;\n}\n.employee-hero-meta {\n  display: grid;\n  gap: 4px;\n  text-align: right;\n}\n.employee-hero-meta b {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.employee-hero-meta span {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.employee-overview {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n.employee-overview dl {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  gap: 10px 18px;\n  margin: 16px 0;\n}\n.employee-overview dt {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  opacity: 0.6;\n}\n.employee-overview dd {\n  margin: 0;\n  font-weight: 700;\n}\n.big-money {\n  font-size: 28px;\n}\n.employee-overview h3 {\n  margin-top: 0;\n}\n.employee-overview h3:not(:first-child) {\n  margin-top: 26px;\n}\n@media (max-width: 800px) {\n  .employee-hero {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .employee-hero-meta {\n    text-align: left;\n  }\n  .employee-overview {\n    grid-template-columns: 1fr;\n  }\n  .employee-picker {\n    width: 100%;\n    max-width: none;\n  }\n}\n\n.notification-list {\n  display: flex;\n  flex-direction: column;\n}\n.notification-item {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  width: 100%;\n  padding: 16px;\n  border: 0;\n  border-bottom: 1px solid var(--line, #e5e7eb);\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n}\n.notification-item:hover {\n  background: rgba(15, 23, 42, 0.03);\n}\n.notification-item.read {\n  opacity: 0.62;\n}\n.notification-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  margin-top: 7px;\n  flex: 0 0 auto;\n}\n.notification-item span:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.notification-item small {\n  font-size: 13px;\n  line-height: 1.45;\n}\n.notification-item em {\n  font-size: 11px;\n  opacity: 0.65;\n  font-style: normal;\n}\n.loading {\n  padding: 16px;\n}\n\n/* V7 HR Operations */\n.branch-tabs {\n  display: flex;\n  gap: 7px;\n  overflow: auto;\n  padding: 4px;\n  margin-bottom: 14px;\n  border-bottom: 1px solid var(--line);\n}\n.branch-tabs button {\n  border: 0;\n  background: transparent;\n  padding: 10px 13px;\n  border-radius: 8px 8px 0 0;\n  color: #667085;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.branch-tabs button.active {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.compact-panel {\n  padding: 16px;\n  margin-bottom: 13px;\n  overflow: visible;\n}\n.compact-panel h3 {\n  font-size: 13px;\n  margin: 0 0 12px;\n}\n.compact-panel .form-grid {\n  align-items: end;\n}\n.compact-panel select,\n.compact-panel input {\n  height: 39px;\n  border: 1px solid #d8dee8;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 11px;\n  background: #fff;\n  min-width: 0;\n}\n.status-pill {\n  display: inline-flex;\n  padding: 4px 8px;\n  border-radius: 999px;\n  background: #eef2ff;\n  color: #334155;\n  font-size: 9px;\n  font-weight: 750;\n  white-space: nowrap;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.42);\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  z-index: 100;\n}\n.modal {\n  width: min(620px, 100%);\n  max-height: 90vh;\n  overflow: auto;\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid var(--line);\n  padding: 20px;\n  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);\n  display: grid;\n  gap: 12px;\n}\n.modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 3px;\n}\n.modal-head h3 {\n  margin: 0;\n  font-size: 15px;\n}\n.modal-head button {\n  border: 0;\n  background: #f3f4f6;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 18px;\n}\n.modal label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 10px;\n  color: #475467;\n  font-weight: 700;\n}\n.modal input,\n.modal select,\n.modal textarea {\n  border: 1px solid #d8dee8;\n  border-radius: 8px;\n  min-height: 39px;\n  padding: 9px 11px;\n  font-size: 11px;\n  background: #fff;\n}\n.modal textarea {\n  min-height: 80px;\n  resize: vertical;\n}\n@media (max-width: 700px) {\n  .branch-tabs {\n    margin-left: -4px;\n    margin-right: -4px;\n  }\n  .compact-panel .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal-backdrop {\n    padding: 10px;\n  }\n  .modal {\n    max-height: 94vh;\n  }\n}\n\n/* V8 Production HR */\n.module-page {\n  padding-bottom: 40px;\n}\n.module-page .page-heading {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 22px;\n}\n.module-page .eyebrow {\n  font-size: 11px;\n  letter-spacing: 0.14em;\n  font-weight: 800;\n  opacity: 0.65;\n}\n.module-page h1 {\n  margin: 6px 0;\n  font-size: 28px;\n}\n.module-page .page-heading p {\n  margin: 0;\n  color: var(--muted, #667085);\n}\n.branch-tabs {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  padding-bottom: 10px;\n}\n.branch-tabs button {\n  border: 0;\n  background: transparent;\n  padding: 10px 13px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.branch-tabs button.active {\n  background: rgba(37, 99, 235, 0.1);\n  font-weight: 800;\n}\n.compact-panel form {\n  margin-top: 10px;\n}\n.table-panel {\n  overflow: hidden;\n}\n.table-panel table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table-panel th,\n.table-panel td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.07);\n  text-align: left;\n}\n.table-panel th {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--muted, #667085);\n  background: rgba(15, 23, 42, 0.025);\n}\n@media (max-width: 700px) {\n  .module-page h1 {\n    font-size: 23px;\n  }\n  .branch-tabs {\n    overflow: auto;\n    flex-wrap: nowrap;\n  }\n  .branch-tabs button {\n    white-space: nowrap;\n  }\n  .table-panel {\n    overflow-x: auto;\n  }\n  .table-panel table {\n    min-width: 680px;\n  }\n}\n\n/* ================= V37 EXECUTIVE UI ================= */\n.executive-dashboard {\n  max-width: 1500px;\n  margin: 0 auto;\n}\n.command-strip {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 14px 17px;\n  margin: -4px 0 15px;\n  background: linear-gradient(135deg, #101b34, #17284a);\n  border: 1px solid #25365b;\n  border-radius: 14px;\n  color: #fff;\n  box-shadow: 0 8px 22px rgba(16, 27, 52, 0.12);\n}\n.command-strip strong {\n  display: block;\n  font-size: 13px;\n  margin: 3px 0;\n}\n.command-strip small {\n  display: block;\n  color: #b9c5da;\n  font-size: 9px;\n}\n.strip-meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #aebbd0;\n  font-size: 9px;\n}\n.executive-stats .stat-card {\n  min-height: 112px;\n  border-radius: 14px;\n  padding: 18px;\n  box-shadow: 0 5px 18px rgba(16, 24, 40, 0.05);\n}\n.executive-stats .stat-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n}\n.dashboard-grid-top {\n  display: grid;\n  grid-template-columns: minmax(0, 1.55fr) minmax(290px, 0.75fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.dashboard-grid-bottom {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 285px;\n  gap: 16px;\n}\n.executive-chart,\n.attendance-health {\n  min-height: 330px;\n}\n.eyebrow {\n  display: inline-block;\n  font-size: 8px;\n  letter-spacing: 1.5px;\n  font-weight: 850;\n  color: #7182a5;\n  margin-bottom: 2px;\n}\n.department-bars {\n  padding: 3px 20px 20px;\n}\n.dept-row {\n  margin: 18px 0;\n}\n.dept-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  color: #475467;\n  margin-bottom: 7px;\n}\n.dept-label b {\n  font-size: 11px;\n  color: #172033;\n}\n.dept-row .progress {\n  height: 7px;\n  background: #eef2f7;\n}\n.dept-row .progress span {\n  background: linear-gradient(90deg, #243b69, #c5a15b);\n}\n.health-ring {\n  width: 150px;\n  height: 150px;\n  margin: 13px auto 17px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: conic-gradient(#c5a15b var(--rate), #e9edf3 0deg);\n  position: relative;\n}\n.health-ring:before {\n  content: \"\";\n  position: absolute;\n  inset: 13px;\n  border-radius: 50%;\n  background: #fff;\n}\n.health-ring > div {\n  position: relative;\n  text-align: center;\n}\n.health-ring strong {\n  display: block;\n  font-size: 27px;\n  letter-spacing: -1px;\n  color: #172033;\n}\n.health-ring small {\n  font-size: 9px;\n  color: #98a2b3;\n}\n.health-legend {\n  padding: 0 20px 18px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.health-legend > div {\n  display: grid;\n  grid-template-columns: 9px 1fr;\n  column-gap: 6px;\n  align-items: center;\n}\n.health-legend .dot {\n  grid-row: span 2;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.health-legend .dot.present {\n  background: #159447;\n}\n.health-legend .dot.late {\n  background: #d97706;\n}\n.health-legend .dot.absent {\n  background: #98a2b3;\n}\n.health-legend span {\n  font-size: 8px;\n  color: #667085;\n}\n.health-legend b {\n  font-size: 12px;\n  color: #172033;\n}\n.executive-quick {\n  overflow: hidden;\n}\n.executive-quick .panel-head {\n  padding-bottom: 7px;\n}\n.executive-quick .quick-action {\n  padding: 12px 17px;\n}\n.executive-quick .quick-action:first-of-type {\n  border-top: 0;\n}\n.login-wrap {\n  background:\n    radial-gradient(circle at 75% 15%, #263a68 0, transparent 30%),\n    linear-gradient(135deg, #091226, #142344);\n}\n.login-card {\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.28);\n  border-color: #d9dee8;\n}\n.brand-mark {\n  background: #17284a ;\n  border: 1px solid #c5a15b;\n  box-shadow: 0 4px 16px rgba(197, 161, 91, 0.18);\n}\n@media (max-width: 1100px) {\n  .dashboard-grid-top {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-grid-bottom {\n    grid-template-columns: 1fr;\n  }\n  .attendance-health {\n    min-height: auto;\n  }\n}\n@media (max-width: 700px) {\n  .command-strip {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .strip-meta {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .executive-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .health-legend {\n    grid-template-columns: 1fr;\n  }\n  .page {\n    padding: 18px;\n  }\n  .topbar {\n    padding: 0 16px;\n  }\n  .search-global {\n    width: 170px;\n  }\n  .page-heading .primary {\n    width: 100%;\n  }\n}\n\n/* V38 ENTERPRISE DESIGN SYSTEM — consistent treatment across every HR module */\n:root {\n  --mx-navy: #0b1630;\n  --mx-navy-2: #122343;\n  --mx-gold: #caa75e;\n  --mx-gold-soft: #fbf6e9;\n  --mx-bg: #f4f6f9;\n  --mx-card: #fff;\n  --mx-line: #e4e8ef;\n  --mx-text: #172033;\n  --mx-muted: #667085;\n  --mx-text-secondary: #667085;\n  --mx-text-muted: #98a2b3;\n  --mx-control-bg: #ffffff;\n  --mx-control-text: #172033;\n  --mx-control-border: #d8dee8;\n  --mx-radius: 14px;\n  --mx-shadow: 0 4px 18px rgba(15, 23, 42, 0.045);\n}\n.talenta-shell {\n  background: var(--mx-bg);\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    \"Segoe UI\",\n    sans-serif;\n}\n.talenta-sidebar {\n  width: 276px;\n  background: linear-gradient(180deg, #0b1630 0%, #101d3b 100%);\n  border-right: 0;\n  padding: 18px 14px;\n  color: #fff;\n  box-shadow: 10px 0 30px rgba(15, 23, 42, 0.08);\n}\n.talenta-sidebar.collapsed {\n  width: 78px;\n}\n.talenta-sidebar .brand {\n  padding: 5px 8px 22px;\n}\n.talenta-sidebar .brand b {\n  color: #fff;\n  font-size: 15px;\n  letter-spacing: -0.2px;\n}\n.talenta-sidebar .brand small {\n  color: #aab6ca;\n}\n.talenta-sidebar .brand-mark {\n  background: linear-gradient(135deg, #caa75e, #f1d78e);\n  box-shadow: 0 5px 16px rgba(202, 167, 94, 0.2);\n}\n.workspace {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #91a0b8;\n}\n.workspace b {\n  color: #fff;\n}\n.workspace small {\n  color: #91a0b8;\n}\n.group-title {\n  color: #7f8da5;\n}\n.nav-item {\n  color: #b7c1d1;\n  border-radius: 10px;\n  min-height: 39px;\n}\n.nav-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #fff;\n}\n.nav-item.active {\n  background: linear-gradient(\n    90deg,\n    rgba(202, 167, 94, 0.2),\n    rgba(202, 167, 94, 0.08)\n  );\n  color: #f3d88f;\n  box-shadow: inset 3px 0 0 var(--mx-gold);\n}\n.nav-item em {\n  background: rgba(255, 255, 255, 0.08);\n  color: #c9d2df;\n}\n.nav-icon {\n  color: inherit;\n}\n.admin-mini {\n  border-top-color: rgba(255, 255, 255, 0.1);\n}\n.admin-mini b {\n  color: #fff;\n}\n.admin-mini small {\n  color: #8d9bb1;\n}\n.avatar {\n  background: #d8bf7e;\n  color: #172033;\n}\n.logout {\n  color: #f0a0a0;\n}\n.logout:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.topbar {\n  height: 68px;\n  padding: 0 30px;\n  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.02);\n  background: rgba(255, 255, 255, 0.97);\n  backdrop-filter: blur(10px);\n}\n.crumb {\n  font-size: 12px;\n}\n.top-actions {\n  gap: 10px;\n}\n.search-global {\n  height: 40px;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.page {\n  padding: 30px;\n  max-width: 1700px;\n}\n.page-heading {\n  margin-bottom: 23px;\n}\n.page-heading h1 {\n  font-size: 26px;\n  letter-spacing: -0.65px;\n}\n.page-heading p {\n  font-size: 12px;\n}\n.eyebrow {\n  color: #9a7a2c;\n  letter-spacing: 1.6px;\n}\n.primary,\n.secondary {\n  min-height: 38px;\n  border-radius: 9px;\n  padding: 9px 14px;\n  font-size: 11px;\n  transition: all 0.16s ease;\n}\n.primary {\n  background: #172b4d;\n  border-color: #172b4d;\n  box-shadow: 0 4px 10px rgba(23, 43, 77, 0.12);\n}\n.primary:hover {\n  background: #0f1f39;\n  border-color: #0f1f39;\n  transform: translateY(-1px);\n}\n.secondary {\n  border-color: #d5dbe5;\n}\n.secondary:hover {\n  background: #f8fafc;\n  border-color: #c4ccd8;\n}\n.stat-grid,\n.mini-kpi-row {\n  gap: 14px;\n}\n.stat-card,\n.mini-kpi,\n.panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card {\n  border-color: var(--mx-line);\n  border-radius: var(--mx-radius);\n  box-shadow: var(--mx-shadow);\n}\n.stat-card {\n  padding: 18px;\n}\n.stat-icon {\n  border-radius: 10px;\n  background: var(--mx-gold-soft);\n  color: #8c6b21;\n}\n.stat-card strong {\n  font-size: 21px;\n}\n.mini-kpi {\n  padding: 14px;\n}\n.mini-kpi b {\n  font-size: 16px;\n}\n.panel {\n  box-shadow: var(--mx-shadow);\n}\n.panel-head {\n  padding: 18px 20px;\n  border-bottom: 1px solid #eef1f5;\n}\n.panel-head h2,\n.quick h2,\n.settings h2 {\n  font-size: 14px;\n  letter-spacing: -0.1px;\n}\n.table-panel {\n  margin-top: 14px;\n}\ntable {\n  font-size: 11px;\n}\nth {\n  background: #f8fafc;\n  color: #667085;\n  padding: 12px 15px;\n  font-size: 9.5px;\n  letter-spacing: 0.35px;\n  text-transform: uppercase;\n}\ntd {\n  padding: 13px 15px;\n}\ntr:hover td {\n  background: #fbfcfe;\n}\n.status {\n  padding: 5px 8px;\n}\n.filter,\n.filter-row select,\n.toolbar input,\n.toolbar select,\n.toolbar-panel input,\n.compact-input {\n  border-color: #d8dee8;\n  border-radius: 9px;\n  background: #fff;\n  min-height: 38px;\n}\n.filter:focus,\n.toolbar input:focus,\n.toolbar select:focus,\n.toolbar-panel input:focus,\n.compact-input:focus {\n  outline: none;\n  border-color: #bca15f;\n  box-shadow: 0 0 0 3px rgba(202, 167, 94, 0.12);\n}\n.form-panel {\n  padding: 22px;\n}\n.form-grid {\n  gap: 17px;\n}\n.form-grid input,\n.form-grid select,\n.form-grid textarea,\n.login-card input {\n  border-radius: 9px;\n  border-color: #d8dee8;\n  min-height: 41px;\n}\n.form-grid label,\n.login-card label {\n  font-size: 10px;\n  color: #475467;\n}\n.form-grid input:focus,\n.login-card input:focus {\n  border-color: #bca15f;\n  box-shadow: 0 0 0 3px rgba(202, 167, 94, 0.12);\n}\n.branch-nav,\n.branch-tabs {\n  background: #eef2f6;\n  border: 1px solid #e1e6ed;\n  border-radius: 10px;\n  padding: 4px;\n  gap: 3px;\n}\n.branch-nav button,\n.branch-tabs button {\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: #667085;\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 750;\n}\n.branch-nav button:hover,\n.branch-tabs button:hover {\n  color: #172033;\n  background: #fff;\n}\n.branch-nav button.active,\n.branch-tabs button.active {\n  background: #fff;\n  color: #172b4d;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.08);\n}\n.kanban-grid {\n  gap: 12px;\n}\n.kanban-col {\n  background: #eef2f6;\n  border: 1px solid #e0e5ec;\n  border-radius: 12px;\n  padding: 9px;\n}\n.kanban-head {\n  padding: 6px 5px 10px;\n}\n.kanban-head b {\n  font-size: 11px;\n}\n.kanban-card {\n  background: #fff;\n  border: 1px solid #e1e6ed;\n  border-radius: 10px;\n  padding: 12px;\n  box-shadow: 0 2px 7px rgba(15, 23, 42, 0.04);\n  margin-bottom: 8px;\n}\n.kanban-card:hover {\n  border-color: #c9b071;\n  transform: translateY(-1px);\n}\n.role-builder {\n  gap: 15px;\n}\n.role-builder > .panel {\n  border-radius: 14px;\n}\n.role-list-item {\n  border-color: #e3e7ee;\n  background: #fff;\n  color: #344054;\n  border-radius: 9px;\n  padding: 11px 12px;\n}\n.role-list-item:hover {\n  background: #f8fafc;\n}\n.role-list-item.active {\n  background: #fbf6e9;\n  border-color: #dcc78f;\n  color: #6f541d;\n}\n.permission-section {\n  padding: 15px 18px;\n  border-top: 1px solid #eef1f5;\n}\n.permission-section h4 {\n  font-size: 9px;\n  letter-spacing: 1px;\n  color: #98a2b3;\n}\n.permission-grid {\n  gap: 8px;\n}\n.permission-item {\n  border: 1px solid #e1e6ed;\n  border-radius: 9px;\n  background: #fff;\n  padding: 9px 10px;\n  font-size: 10px;\n}\n.permission-item:hover {\n  border-color: #c9b071;\n  background: #fffcf5;\n}\n.toolbar-panel {\n  border: 1px solid var(--mx-line);\n  background: #fff;\n  border-radius: 12px;\n  padding: 13px 15px;\n  box-shadow: var(--mx-shadow);\n}\n.stat-inline {\n  background: #f8fafc;\n  border: 1px solid #e9edf2;\n  border-radius: 9px;\n  padding: 7px 12px;\n}\n.stat-inline b {\n  font-size: 15px;\n}\n.stat-inline span {\n  font-size: 9px;\n  color: #98a2b3;\n}\n.modal-backdrop,\n.overlay {\n  backdrop-filter: blur(4px);\n  background: rgba(8, 18, 38, 0.42);\n}\n.modal,\n.dialog,\n.simple-modal {\n  border: 1px solid #e1e6ed ;\n  border-radius: 16px ;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.2) ;\n}\n.modal-head,\n.dialog-head {\n  border-bottom: 1px solid #eef1f5;\n}\n.modal h2,\n.dialog h2 {\n  font-size: 16px;\n}\n.employee-hero {\n  border-radius: 16px ;\n  border: 1px solid var(--mx-line) ;\n  box-shadow: var(--mx-shadow) ;\n}\n.employee-hero .mini-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n}\n.profile-grid,\n.detail-grid {\n  gap: 14px;\n}\n.profile-card,\n.detail-card {\n  border: 1px solid var(--mx-line);\n  border-radius: 14px;\n  box-shadow: var(--mx-shadow);\n}\n.chart-placeholder {\n  border-top: 1px solid #eef1f5;\n}\n.bars i {\n  background: linear-gradient(#caa75e, #9b7a2f);\n}\n.login-wrap {\n  background: radial-gradient(\n    circle at 50% 0,\n    #172b4d 0,\n    #0b1630 45%,\n    #070f21 100%\n  );\n  min-height: 100vh;\n}\n.login-card {\n  border: 1px solid rgba(255, 255, 255, 0.12) ;\n  border-radius: 18px ;\n  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.28) ;\n}\n.login-card .brand-mark {\n  background: linear-gradient(135deg, #caa75e, #f0d995);\n}\n.login-card .primary {\n  background: #172b4d;\n}\n.security-note {\n  color: #98a2b3;\n}\n/* Normalize legacy icon/glyph surfaces so the application does not look like a template. */\n.nav-item,\n.quick-action,\n.link-btn,\n.danger-text,\n.primary,\n.secondary {\n  line-height: 1.2;\n}\n.icon-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n}\n.icon-btn:hover {\n  background: #f2f4f7;\n  color: #172033;\n}\n.quick-action > span:last-child {\n  font-size: 0;\n}\n.quick-action > span:last-child::after {\n  content: \"›\";\n  font-size: 16px;\n}\n.page button:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none ;\n}\n@media (max-width: 1100px) {\n  .talenta-sidebar {\n    width: 240px;\n  }\n  .page {\n    padding: 22px;\n  }\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 800px) {\n  .page-heading .primary,\n  .page-heading .secondary {\n    width: 100%;\n  }\n  .stat-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .full-span {\n    grid-column: auto;\n  }\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid {\n    grid-template-columns: 1fr;\n  }\n  .search-global {\n    display: none;\n  }\n}\n@media (max-width: 560px) {\n  .stat-grid,\n  .mini-kpi-row {\n    grid-template-columns: 1fr;\n  }\n  .topbar {\n    height: 60px;\n  }\n  .page-heading h1 {\n    font-size: 22px;\n  }\n  .panel-head {\n    padding: 15px;\n  }\n  .table-panel {\n    margin-top: 10px;\n  }\n  .branch-nav,\n  .branch-tabs {\n    overflow: auto;\n    white-space: nowrap;\n  }\n  .branch-nav button,\n  .branch-tabs button {\n    flex: none;\n  }\n}\n\n/* V-END final interaction polish */\n.permission-toggle {\n  min-height: 30px;\n  border: 1px solid #dfe4eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #98a2b3;\n  font-size: 9px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.permission-toggle:hover {\n  border-color: #c9b071;\n  background: #fffcf5;\n  color: #6f541d;\n}\n.permission-toggle.on {\n  background: #172b4d;\n  border-color: #172b4d;\n  color: #fff;\n}\n.permission-toggle:disabled {\n  cursor: default;\n  opacity: 0.7;\n}\n.logout {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.logout .ui-icon {\n  width: 15px;\n  height: 15px;\n}\n.alert.success {\n  border-color: #cde8d8;\n  background: #f1fbf5;\n  color: #17663a;\n}\n.ui-icon {\n  width: 17px;\n  height: 17px;\n  display: block;\n  flex: none;\n}\n/* =========================================================\n   PROJECT BY TIRTA — ENTERPRISE BUTTON SYSTEM\n   Global standard button: NAVY + GOLD BORDER\n   ========================================================= */\n\n/* ---------------------------------------------------------\n   1. SEMUA TOMBOL STANDAR DI AREA ADMIN\n   --------------------------------------------------------- */\n\n.talenta-main\n  button:not(.nav-item):not(.group-title):not(.icon-btn):not(.link-btn):not(\n    .quick-action\n  ):not(.danger-text):not(.toast) {\n  min-height: 38px ;\n  padding: 9px 15px ;\n\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 9px ;\n\n  font-family: inherit;\n  font-size: 11px;\n  font-weight: 700;\n\n  cursor: pointer;\n\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    color 0.18s ease,\n    box-shadow 0.18s ease,\n    transform 0.12s ease;\n}\n\n/* Hover */\n\n.talenta-main\n  button:not(.nav-item):not(.group-title):not(.icon-btn):not(.link-btn):not(\n    .quick-action\n  ):not(.danger-text):not(.toast):hover {\n  background: #182544 ;\n  color: #ffffff ;\n\n  border-color: #f0cf7a ;\n\n  box-shadow: 0 4px 12px rgba(16, 26, 51, 0.2);\n\n  transform: translateY(-1px);\n}\n\n/* Active / klik */\n\n.talenta-main\n  button:not(.nav-item):not(.group-title):not(.icon-btn):not(.link-btn):not(\n    .quick-action\n  ):not(.danger-text):not(.toast):active {\n  transform: translateY(0);\n}\n\n/* ---------------------------------------------------------\n   2. PRIMARY\n   --------------------------------------------------------- */\n\n.talenta-main button.primary,\n.talenta-main button.primary-btn,\n.talenta-main button.btn-primary {\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n\n  box-shadow: 0 3px 9px rgba(16, 26, 51, 0.18);\n}\n\n.talenta-main button.primary:hover,\n.talenta-main button.primary-btn:hover,\n.talenta-main button.btn-primary:hover {\n  background: #182544 ;\n  border-color: #f0cf7a ;\n}\n\n/* ---------------------------------------------------------\n   3. SECONDARY\n   --------------------------------------------------------- */\n\n.talenta-main button.secondary {\n  background: #ffffff ;\n  color: #e8edf5 ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n\n  box-shadow: none;\n}\n\n.talenta-main button.secondary:hover {\n  background: #faf6e9 ;\n  color: var(--mx-primary, #101a33) ;\n  border-color: #f0cf7a ;\n}\n\n/* ---------------------------------------------------------\n   4. FULL WIDTH\n   --------------------------------------------------------- */\n\n.talenta-main button.full {\n  width: 100%;\n}\n\n/* ---------------------------------------------------------\n   5. TAB / BRANCH TAB\n   --------------------------------------------------------- */\n\n.talenta-main .branch-tabs button,\n.talenta-main .branch-nav button {\n  min-height: 38px ;\n\n  background: #ffffff ;\n  color: #344054 ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 8px ;\n\n  padding: 8px 14px ;\n\n  font-weight: 700;\n\n  box-shadow: none;\n\n  transform: none ;\n}\n\n/* Tab hover */\n\n.talenta-main .branch-tabs button:hover,\n.talenta-main .branch-nav button:hover {\n  background: #faf6e9 ;\n  color: var(--mx-primary, #101a33) ;\n  border-color: #f0cf7a ;\n}\n\n/* Tab aktif */\n\n.talenta-main .branch-tabs button.active,\n.talenta-main .branch-nav button.active {\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n\n  box-shadow: 0 3px 9px rgba(16, 26, 51, 0.18);\n\n  font-weight: 800;\n}\n\n/* ---------------------------------------------------------\n   6. TAB SETTINGS / TAB YANG TIDAK MEMILIKI CLASS\n   --------------------------------------------------------- */\n\n/*\n   Digunakan untuk tab seperti:\n\n   Perusahaan\n   Jam Kerja\n   Payroll\n   Absensi\n   Notifikasi\n   Keamanan\n\n   terutama jika tombol dibuat langsung dengan inline style.\n*/\n\n.talenta-main .settings button:not(.primary):not(.secondary) {\n  min-height: 38px ;\n\n  background: #ffffff ;\n  color: var(--mx-primary, var(--mx-primary, #101a33)) ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 8px ;\n\n  padding: 8px 14px ;\n\n  font-weight: 700;\n\n  box-shadow: none;\n\n  transform: none ;\n}\n\n.talenta-main .settings button.active {\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n\n  border-color: var(--mx-accent, #d6ae58) ;\n\n  box-shadow: 0 3px 9px rgba(16, 26, 51, 0.18);\n}\n\n/* ---------------------------------------------------------\n   7. ICON BUTTON\n   --------------------------------------------------------- */\n\n.talenta-main button.icon-btn {\n  width: 36px ;\n  height: 36px ;\n\n  min-height: 36px ;\n  padding: 0 ;\n\n  display: grid;\n  place-items: center;\n\n  background: #ffffff ;\n  color: var(--mx-primary, #101a33) ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 9px ;\n\n  box-shadow: none;\n\n  transform: none ;\n}\n\n.talenta-main button.icon-btn:hover {\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n  border-color: #f0cf7a ;\n}\n\n/* ---------------------------------------------------------\n   8. LINK BUTTON\n   --------------------------------------------------------- */\n\n.talenta-main button.link-btn {\n  background: #ffffff ;\n  color: var(--mx-primary, #101a33) ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 7px ;\n\n  padding: 7px 11px ;\n\n  font-weight: 700;\n\n  transform: none ;\n}\n\n.talenta-main button.link-btn:hover {\n  background: var(--mx-primary, #101a33) ;\n  color: #ffffff ;\n  border-color: #f0cf7a ;\n}\n\n/* ---------------------------------------------------------\n   9. DANGER\n   Tetap merah untuk tombol hapus / tindakan berbahaya\n   --------------------------------------------------------- */\n\n.talenta-main button.danger-text {\n  background: #ffffff ;\n  color: #b42318 ;\n\n  border: 1px solid #e5a29c ;\n  border-radius: 7px ;\n\n  padding: 7px 11px ;\n\n  transform: none ;\n}\n\n.talenta-main button.danger-text:hover {\n  background: #b42318 ;\n  color: #ffffff ;\n\n  border-color: #b42318 ;\n}\n\n/* ---------------------------------------------------------\n   10. QUICK ACTION\n   Quick action tetap berbentuk baris,\n   tetapi diberi aksen bingkai gold.\n   --------------------------------------------------------- */\n\n.talenta-main button.quick-action {\n  background: #111b33 ;\n  color: var(--mx-primary, #101a33) ;\n\n  border: 1px solid var(--mx-accent, #d6ae58) ;\n  border-radius: 9px ;\n\n  padding: 10px 12px ;\n\n  margin-bottom: 7px;\n\n  transform: none ;\n}\n\n.talenta-main button.quick-action:hover {\n  background: #172744 ;\n  border-color: #f0cf7a ;\n}\n\n/* ---------------------------------------------------------\n   11. GROUP TITLE\n   Tidak dibuat seperti tombol aksi.\n   --------------------------------------------------------- */\n\n.talenta-sidebar button.group-title {\n  border: 0 ;\n  background: transparent ;\n  color: #98a2b3 ;\n\n  box-shadow: none ;\n  transform: none ;\n}\n\n/* ---------------------------------------------------------\n   12. SIDEBAR NAVIGATION\n   Tetap model menu, bukan tombol aksi.\n   --------------------------------------------------------- */\n\n.talenta-sidebar button.nav-item {\n  border: 1px solid transparent ;\n  background: transparent ;\n\n  color: #667085 ;\n\n  box-shadow: none ;\n  transform: none ;\n}\n\n.talenta-sidebar button.nav-item:hover {\n  background: #f8fafc ;\n  border-color: var(--mx-accent, #d6ae58) ;\n  color: var(--mx-primary, #101a33) ;\n}\n\n.talenta-sidebar button.nav-item.active {\n  background: #f7f1dc ;\n  border-color: var(--mx-accent, #d6ae58) ;\n  color: var(--mx-primary, #101a33) ;\n\n  box-shadow: none ;\n}\n\n/* ---------------------------------------------------------\n   13. LOGOUT\n   --------------------------------------------------------- */\n\n.talenta-sidebar button.logout {\n  background: transparent ;\n  color: #9a3a3a ;\n\n  border: 1px solid transparent ;\n\n  box-shadow: none ;\n  transform: none ;\n}\n\n.talenta-sidebar button.logout:hover {\n  background: #fff1f2 ;\n  border-color: #e5a29c ;\n}\n\n/* ---------------------------------------------------------\n   14. DISABLED\n   --------------------------------------------------------- */\n\n.talenta-main button:disabled {\n  opacity: 0.5 ;\n  cursor: not-allowed ;\n\n  transform: none ;\n\n  box-shadow: none ;\n}\n\n/* ---------------------------------------------------------\n   15. FOCUS\n   --------------------------------------------------------- */\n\n.talenta-main button:focus-visible {\n  outline: 2px solid var(--mx-accent, #d6ae58) ;\n  outline-offset: 2px;\n}\n\n/* ---------------------------------------------------------\n   16. MOBILE\n   --------------------------------------------------------- */\n\n@media (max-width: 700px) {\n  .talenta-main button.primary,\n  .talenta-main button.secondary {\n    min-height: 40px ;\n  }\n\n  .talenta-main .branch-tabs,\n  .talenta-main .branch-nav {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n\n  .talenta-main .branch-tabs button,\n  .talenta-main .branch-nav button {\n    flex-shrink: 0;\n    white-space: nowrap;\n  }\n}\n\n/* Theme message */\n\n.theme-message {\n  margin-bottom: 14px;\n  padding: 11px 14px;\n  border: 1px solid var(--mx-border);\n  border-left: 4px solid var(--mx-accent);\n  border-radius: 9px;\n  background: var(--mx-surface);\n  color: var(--mx-text);\n  font-size: 11px;\n  font-weight: 700;\n}\n\n/* Theme manager */\n\n.theme-manager {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.theme-manager-header {\n  background: var(--mx-surface);\n  border: 1px solid var(--mx-border);\n  border-radius: 13px;\n  padding: 20px;\n}\n\n.theme-manager-header h2 {\n  margin: 0 0 5px;\n  color: var(--mx-text);\n  font-size: 17px;\n  font-weight: 800;\n}\n\n.theme-manager-header p {\n  margin: 0;\n  color: #667085;\n  font-size: 11px;\n}\n\n/* Theme cards */\n\n.theme-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 15px;\n}\n\n.theme-card {\n  padding: 0;\n  overflow: hidden;\n  text-align: left;\n  cursor: pointer;\n  background: var(--mx-surface);\n  border: 1px solid var(--mx-border);\n  border-radius: 13px;\n  color: var(--mx-text);\n  transition:\n    transform 0.18s ease,\n    box-shadow 0.18s ease,\n    border-color 0.18s ease;\n}\n\n.theme-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(16, 24, 40, 0.1);\n  border-color: var(--mx-accent);\n}\n\n.theme-preview {\n  height: 145px;\n  display: flex;\n  overflow: hidden;\n  border-bottom: 1px solid var(--mx-border);\n}\n\n.theme-preview-sidebar {\n  width: 31%;\n  padding: 15px 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.theme-preview-sidebar span {\n  height: 7px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.theme-preview-sidebar span:first-child {\n  width: 70%;\n  background: rgba(255, 255, 255, 0.75);\n}\n\n.theme-preview-content {\n  flex: 1;\n  padding: 14px;\n}\n\n.theme-preview-top {\n  height: 20px;\n  border-bottom: 1px solid;\n  margin-bottom: 12px;\n}\n\n.theme-preview-cards {\n  display: flex;\n  gap: 7px;\n}\n\n.theme-preview-cards i {\n  display: block;\n  width: 30px;\n  height: 25px;\n  border-radius: 5px;\n  opacity: 0.9;\n}\n\n.theme-preview-line {\n  width: 75%;\n  height: 5px;\n  border-radius: 5px;\n  margin-top: 17px;\n  opacity: 0.8;\n}\n\n/* Theme card information */\n\n.theme-card-body {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 14px;\n}\n\n.theme-card-body strong {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--mx-text);\n}\n\n.theme-card-body small {\n  display: block;\n  margin-top: 4px;\n  color: #8a93a3;\n  font-size: 9px;\n  line-height: 1.4;\n}\n\n.theme-color-dot {\n  width: 18px;\n  height: 18px;\n  flex: none;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px var(--mx-border);\n}\n\n/* Custom theme */\n\n.custom-theme-panel {\n  background: var(--mx-surface);\n  border: 1px solid var(--mx-border);\n  border-radius: 13px;\n  padding: 20px;\n}\n\n.custom-theme-panel h3 {\n  margin: 0 0 5px;\n  font-size: 14px;\n  color: var(--mx-text);\n}\n\n.custom-theme-panel p {\n  margin: 0;\n  color: #667085;\n  font-size: 10px;\n}\n\n.custom-theme-controls {\n  display: flex;\n  gap: 15px;\n  margin-top: 18px;\n  margin-bottom: 17px;\n}\n\n.custom-theme-controls label {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #475467;\n  font-size: 10px;\n  font-weight: 800;\n}\n\n.custom-theme-controls input[type=\"color\"] {\n  width: 100px;\n  height: 42px;\n  padding: 3px;\n  cursor: pointer;\n  border: 1px solid var(--mx-border);\n  border-radius: 8px;\n  background: #fff;\n}\n\n.theme-save-button {\n  min-width: 190px;\n}\n\n/* Settings tabs */\n\n.settings-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 15px;\n}\n\n.settings-tabs button {\n  min-height: 36px;\n  padding: 8px 13px;\n  border: 1px solid var(--mx-border);\n  border-radius: 8px;\n  background: var(--mx-surface);\n  color: var(--mx-text);\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: 750;\n  transition: 0.18s ease;\n}\n\n.settings-tabs button:hover {\n  border-color: var(--mx-accent);\n  color: var(--mx-accent);\n}\n\n.settings-tabs button.active {\n  background: var(--mx-primary);\n  color: #fff;\n  border-color: var(--mx-accent);\n  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.12);\n}\n\n/* Theme-aware admin controls */\n\n.talenta-main .primary {\n  background: #101a33 ;\n  color: #ffffff ;\n  border: 1px solid #101a33 ;\n}\n.talenta-main .primary:hover {\n  background: #182442 ;\n  color: #ffffff ;\n}\n\n.talenta-main .secondary {\n  background: #ffffff ;\n  color: #344054 ;\n  border: 1px solid #cbd2dc ;\n}\n\n.talenta-main .secondary:hover {\n  background: #f8fafc ;\n  border-color: #98a2b3 ;\n}\n\n.talenta-shell {\n  background: var(--mx-background);\n  color: var(--mx-text);\n}\n\n.talenta-sidebar {\n  background: #0b1630 ;\n  color: #ffffff ;\n  border-right: 1px solid rgba(255, 255, 255, 0.12) ;\n}\n\n.topbar {\n  background: var(--mx-surface);\n  border-bottom-color: var(--mx-border);\n}\n\n.panel,\n.stat-card,\n.mini-kpi,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card {\n  background: var(--mx-surface);\n  border-color: var(--mx-border);\n}\n\n.page-heading h1,\n.panel-head h2,\n.quick h2,\n.settings h2 {\n  color: var(--mx-text);\n}\n\n/* Mobile */\n\n@media (max-width: 1050px) {\n  .theme-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 700px) {\n  .theme-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .theme-preview {\n    height: 130px;\n  }\n\n  .custom-theme-controls {\n    flex-direction: column;\n  }\n\n  .custom-theme-controls input[type=\"color\"] {\n    width: 100%;\n  }\n\n  .theme-save-button {\n    width: 100%;\n  }\n\n  .settings-tabs {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    padding-bottom: 4px;\n  }\n\n  .settings-tabs button {\n    white-space: nowrap;\n    flex: none;\n  }\n}\n\n/* Dashboard background */\n\n.talenta-main,\n.admin-main,\n.dashboard-main,\n.page-content,\n.content-area {\n  background: var(--mx-background) ;\n  color: var(--mx-text);\n}\n\n/* Panel */\n\n.panel,\n.card,\n.dashboard-card,\n.stat-card,\n.table-panel,\n.form-panel,\n.report-card {\n  background: #ffffff ;\n  color: #172033 ;\n  border: 1px solid #e2e7ee ;\n}\n/* Headings */\n\n.page-heading h1,\n.page-heading h2,\n.page-heading h3,\n.panel h1,\n.panel h2,\n.panel h3 {\n  color: var(--mx-text);\n}\n\n/* Main buttons */\n\nbutton.primary,\nbutton.hero-primary,\n.primary,\n.btn-primary {\n  background: linear-gradient(\n    135deg,\n    var(--mx-primary),\n    color-mix(in srgb, var(--mx-primary) 75%, black)\n  ) ;\n\n  color: var(--mx-accent) ;\n  border: 1px solid var(--mx-accent) ;\n}\n\n/* Secondary */\n\nbutton.secondary,\n.secondary,\n.btn-secondary {\n  background: var(--mx-surface) ;\n  color: var(--mx-primary) ;\n  border: 1px solid var(--mx-border) ;\n}\n\n/* Navigation */\n\n.talenta-sidebar {\n  background: var(--mx-primary) ;\n}\n\n.talenta-sidebar .nav-item {\n  color: #ffffff ;\n}\n\n.talenta-sidebar .nav-item:hover {\n  background: rgba(255, 255, 255, 0.08) ;\n  color: #ffffff ;\n}\n\n.talenta-sidebar .nav-item.active {\n  background: rgba(214, 174, 88, 0.16) ;\n  color: #ffffff ;\n  border-color: transparent ;\n}\n/* Tabs */\n\n.settings-tabs button,\n.branch-tabs button,\n.branch-nav button {\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n.settings-tabs button.active,\n.branch-tabs button.active,\n.branch-nav button.active {\n  background: var(--mx-primary) ;\n  color: var(--mx-accent) ;\n  border-color: var(--mx-accent) ;\n}\n\n/* Inputs */\n\ninput,\nselect,\ntextarea {\n  border-color: var(--mx-border) ;\n  color: var(--mx-text);\n  background: var(--mx-surface);\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: var(--mx-accent) ;\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--mx-accent) 18%, transparent) ;\n}\n\n/* Links */\n\na,\n.link-btn {\n  color: var(--mx-primary) ;\n}\n\n.link-btn:hover {\n  color: var(--mx-accent) ;\n}\n\n/* Borders */\n\n.table-panel,\n.panel,\n.card,\n.settings-tabs,\n.theme-card,\n.custom-theme-panel {\n  border-color: var(--mx-border) ;\n}\n\n/* Theme cards */\n\n.theme-card:hover {\n  border-color: var(--mx-accent) ;\n  box-shadow: 0 12px 35px color-mix(in srgb, var(--mx-primary) 14%, transparent) ;\n}\n\n/* Custom theme save */\n\n.theme-save-button {\n  background: var(--mx-primary) ;\n  color: var(--mx-accent) ;\n  border: 1px solid var(--mx-accent) ;\n}\n\n.theme-save-button:hover {\n  background: var(--mx-accent) ;\n  color: var(--mx-primary) ;\n}\n\n/* Toast */\n\n.toast {\n  background: var(--mx-primary) ;\n  color: var(--mx-accent) ;\n  border: 1px solid var(--mx-accent) ;\n}\n\n/* Table */\n\ntable thead th {\n  background: #f8fafc ;\n  color: #344054 ;\n  border-bottom: 1px solid #e2e7ee ;\n}\n\ntable td {\n  color: #344054 ;\n  border-bottom: 1px solid #e2e7ee ;\n}\n/* Status / accent */\n\n.status-badge,\n.theme-color-dot {\n  border-color: var(--mx-accent) ;\n}\n\n/* Scrollbar */\n\n::-webkit-scrollbar-thumb {\n  background: var(--mx-primary);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--mx-accent);\n}\n\n/* =========================================================\n   V53 PROFESSIONAL SUITE\n   ========================================================= */\n.professional-suite .heading-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.professional-suite .content-grid {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  gap: 16px;\n}\n.professional-suite .alert-list,\n.professional-suite .check-list {\n  display: grid;\n  gap: 0;\n}\n.professional-suite .alert-row,\n.professional-suite .check-list > div {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 12px;\n  align-items: center;\n  padding: 13px 15px;\n  border-bottom: 1px solid #eef1f5;\n}\n.professional-suite .alert-row:last-child,\n.professional-suite .check-list > div:last-child {\n  border-bottom: 0;\n}\n.professional-suite .alert-row small {\n  display: block;\n  color: #98a2b3;\n  margin-top: 3px;\n}\n.professional-suite .check-list > div {\n  grid-template-columns: 1fr auto;\n}\n.professional-suite .action-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  padding: 2px;\n}\n.professional-suite .action-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 7px;\n  text-align: left;\n  padding: 15px ;\n  border: 1px solid #e2e7ee ;\n  background: #fff ;\n  color: #172033 ;\n  border-radius: 12px ;\n  box-shadow: none ;\n  transform: none ;\n}\n.professional-suite .action-card:hover {\n  background: #fffcf5 ;\n  border-color: #d6ae58 ;\n  transform: translateY(-1px) ;\n}\n.professional-suite .action-card b {\n  font-size: 12px;\n}\n.professional-suite .action-card small {\n  font-size: 10px;\n  color: #667085;\n  line-height: 1.5;\n}\n.professional-suite .action-card em {\n  font-size: 9px;\n  font-style: normal;\n  color: #8b6a24;\n  font-weight: 800;\n  margin-top: 2px;\n}\n.professional-suite .roadmap-list {\n  margin: 0;\n  padding: 0 22px 20px 36px;\n  color: #475467;\n}\n.professional-suite .roadmap-list li {\n  padding: 7px 0;\n  font-size: 11px;\n}\n.professional-suite .status {\n  white-space: nowrap;\n}\n.professional-suite .heading-actions button {\n  width: auto ;\n}\n.professional-suite .branch-tabs {\n  margin-bottom: 16px;\n}\n@media (max-width: 800px) {\n  .professional-suite .content-grid,\n  .professional-suite .action-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .professional-suite .heading-actions {\n    width: 100%;\n  }\n  .professional-suite .heading-actions button {\n    flex: 1;\n  }\n}\n/* =========================================================\n   PERBAIKAN TAMPILAN EMPLOYEE 360° (AGAR SIMETRIS & RAPI)\n   ========================================================= */\n\n/* 1. Bagian Atas: Header Judul & Dropdown Pilihan Karyawan */\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; /* Membuat judul di kiri dan dropdown di kanan sejajar lurus secara vertikal */\n  gap: 20px;\n  margin-bottom: 21px;\n}\n\n.employee-picker {\n  min-width: 280px;\n  max-width: 360px;\n  padding: 11px 14px;\n  border: 1px solid var(--line, #d8dee8);\n  border-radius: 10px;\n  background: #fff;\n  font-weight: 700;\n  font-size: 12px;\n  color: #172033;\n  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);\n}\n\n/* 2. Kotak Profil Utama Karyawan (Employee Hero) */\n.employee-hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 22px 24px;\n  background: #fff;\n  border: 1px solid var(--line, #d8dee8);\n  border-radius: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);\n}\n\n.employee-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #101b35, #c7a86b);\n  color: #fff;\n  font-weight: 800;\n  font-size: 18px;\n  flex: none;\n}\n\n.employee-hero-copy {\n  flex: 1;\n  min-width: 0;\n}\n\n.employee-hero-copy h2 {\n  margin: 0 0 4px;\n  font-size: 18px;\n  font-weight: 780;\n  color: #172033;\n}\n\n.employee-hero-copy p {\n  margin: 0 0 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #475467;\n}\n\n.employee-hero-copy small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted, #667085);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.employee-hero-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  text-align: right;\n  flex: none;\n  padding-left: 16px;\n  border-left: 1px solid #eef1f5;\n}\n\n.employee-hero-meta b {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 3px 8px;\n  border-radius: 99px;\n  background: #ecfdf3;\n  color: #087443;\n}\n\n.employee-hero-meta span {\n  font-size: 11px;\n  color: var(--muted, #667085);\n}\n\n/* 3. Baris 5 Kotak Indikator (Attendance, Cuti, Lembur, Payroll, Dokumen) */\n.mini-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(\n    5,\n    minmax(0, 1fr)\n  ); /* Memaksa tepat 5 kolom berjajar rapi dalam satu baris horizontal */\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n.mini-kpi-row .stat-card {\n  min-height: 92px;\n  padding: 14px;\n}\n\n.mini-kpi-row .stat-card strong {\n  font-size: 20px;\n}\n\n/* Penyesuaian Otomatis (Responsif) untuk HP & Tablet */\n@media (max-width: 1100px) {\n  .mini-kpi-row {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 800px) {\n  .page-heading {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .employee-picker {\n    width: 100%;\n    max-width: none;\n  }\n  .employee-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .employee-hero-meta {\n    align-items: flex-start;\n    text-align: left;\n    border-left: none;\n    border-top: 1px solid #eef1f5;\n    padding-left: 0;\n    padding-top: 12px;\n    width: 100%;\n  }\n  .mini-kpi-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 560px) {\n  .mini-kpi-row {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Project by Tirta role badge + employee export */\n.floating-role-wrap {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 30;\n}\n.floating-role {\n  height: 38px;\n  padding: 0 12px 0 10px;\n  border: 1px solid #d6b56a;\n  border-radius: 999px;\n  background: #fff;\n  color: #0b1736;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 8px 22px rgba(11, 23, 54, 0.1);\n  font-size: 11px;\n}\n.floating-role .ui-icon {\n  width: 13px;\n  height: 13px;\n}\n.role-shield {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: #fbf5e7;\n  color: #a67c22;\n  font-size: 12px;\n}\n.role-menu {\n  position: absolute;\n  top: 46px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 210px;\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e4e9f1;\n  border-radius: 14px;\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.16);\n}\n.role-menu small {\n  display: block;\n  padding: 4px 10px 8px;\n  color: #94a3b8;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1.3px;\n}\n.role-menu button {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  border-radius: 9px;\n  padding: 9px 10px;\n  text-align: left;\n  color: #475569;\n  font-size: 12px;\n}\n.role-menu button:hover,\n.role-menu button.selected {\n  background: #fbf5e7;\n  color: #0b1736;\n  font-weight: 800;\n}\n.export-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 100;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(7, 16, 36, 0.48);\n  backdrop-filter: blur(5px);\n}\n.export-card {\n  width: min(720px, 100%);\n  max-height: min(760px, 90vh);\n  overflow: auto;\n  background: #fff;\n  border: 1px solid #e5eaf2;\n  border-radius: 20px;\n  box-shadow: 0 30px 80px rgba(7, 16, 36, 0.24);\n  padding: 22px;\n}\n.export-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  align-items: flex-start;\n  border-bottom: 1px solid #eef2f6;\n  padding-bottom: 15px;\n}\n.export-head span {\n  font-size: 9px;\n  letter-spacing: 1.5px;\n  color: #b18432;\n  font-weight: 900;\n}\n.export-head h2 {\n  margin: 5px 0;\n  color: #0b1736;\n  font-size: 20px;\n}\n.export-head p {\n  margin: 0;\n  color: #64748b;\n  font-size: 12px;\n}\n.export-actions-top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 0;\n}\n.export-actions-top strong {\n  margin-left: auto;\n  color: #64748b;\n  font-size: 11px;\n}\n.export-columns {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.export-check {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px;\n  border: 1px solid #e7ecf2;\n  border-radius: 10px;\n  color: #334155;\n  font-size: 12px;\n}\n.export-check:has(input:checked) {\n  border-color: #d6b56a;\n  background: #fffcf4;\n}\n.export-check input {\n  accent-color: #0b1736;\n}\n.export-foot {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 18px;\n  padding-top: 15px;\n  border-top: 1px solid #eef2f6;\n}\n@media (max-width: 900px) {\n  .floating-role-wrap {\n    position: fixed;\n    top: 10px;\n  }\n  .topbar {\n    position: relative;\n  }\n  .crumb {\n    max-width: 35%;\n  }\n}\n@media (max-width: 600px) {\n  .floating-role strong {\n    display: none;\n  }\n  .floating-role {\n    width: 42px;\n    justify-content: center;\n    padding: 0;\n  }\n  .role-menu {\n    right: 0;\n    left: auto;\n    transform: none;\n  }\n  .export-columns {\n    grid-template-columns: 1fr;\n  }\n  .export-foot {\n    flex-wrap: wrap;\n  }\n}\n\n/* =========================================================\n   PROJECT BY TIRTA — CLEAN FINAL THEME\n   Navy / Silver / Gold\n   Satu sumber override — tidak menimpa dengan tema putih\n   ========================================================= */\n\n:root {\n  --blue: #0b1736;\n  --blue2: #12244d;\n  --blue-soft: #172441;\n  --ink: #c0c0c0;\n  --muted: #9299a8;\n  --line: #d4af37;\n  --surface: #0b1222;\n  --bg: #071126;\n\n  --mx-primary: #0b1736;\n  --mx-accent: #d4af37;\n  --mx-background: #071126;\n  --mx-surface: #0b1222;\n  --mx-text: #c0c0c0;\n  --mx-text-secondary: #b8b8b8;\n  --mx-text-muted: #9299a8;\n  --mx-border: #d4af37;\n  --mx-border-strong: #f0cf69;\n}\n\nhtml,\nbody,\n#root {\n  background: #071126 ;\n  color: #c0c0c0 ;\n}\n\n.talenta-shell,\n.talenta-main,\n.admin-main,\n.dashboard-main,\n.page-content,\n.content-area,\n.page {\n  background: #071126 ;\n  color: #c0c0c0 ;\n}\n\n/* Sidebar: DashboardAdmin memakai .sidebar, komponen lama memakai .talenta-sidebar */\n.sidebar,\n.talenta-sidebar {\n  background: #080f20 ;\n  color: #c0c0c0 ;\n  border-right: 1px solid #d4af37 ;\n}\n\n.sidebar .brand b,\n.sidebar .brand small,\n.talenta-sidebar .brand b,\n.talenta-sidebar .brand small {\n  color: #c0c0c0 ;\n}\n\n.sidebar .brand small,\n.talenta-sidebar .brand small,\n.sidebar .group-title,\n.talenta-sidebar .group-title {\n  color: #9299a8 ;\n}\n\n.sidebar .workspace,\n.talenta-sidebar .workspace {\n  background: #0d1830 ;\n  color: #9299a8 ;\n  border: 1px solid #27334a ;\n}\n\n.sidebar .workspace b,\n.talenta-sidebar .workspace b {\n  color: #c0c0c0 ;\n}\n\n.sidebar .nav-item,\n.talenta-sidebar .nav-item {\n  background: transparent ;\n  color: #c0c0c0 ;\n  border: 1px solid transparent ;\n  border-radius: 10px ;\n  transition:\n    background 0.18s ease,\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    color 0.18s ease,\n    transform 0.18s ease ;\n}\n\n.sidebar .nav-item:hover,\n.talenta-sidebar .nav-item:hover {\n  background: #111d38 ;\n  color: #ffffff ;\n  border-color: #d4af37 ;\n  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2) ;\n  transform: translateX(2px) ;\n}\n\n.sidebar .nav-item.active,\n.talenta-sidebar .nav-item.active {\n  background: #172441 ;\n  color: #d4af37 ;\n  border-color: #d4af37 ;\n  box-shadow: 0 0 12px rgba(212, 175, 55, 0.18) ;\n  transform: none ;\n}\n\n.sidebar .nav-item span,\n.sidebar .nav-item svg,\n.talenta-sidebar .nav-item span,\n.talenta-sidebar .nav-item svg {\n  color: inherit ;\n  stroke: currentColor ;\n}\n\n.sidebar .nav-item.active span,\n.sidebar .nav-item.active svg,\n.talenta-sidebar .nav-item.active span,\n.talenta-sidebar .nav-item.active svg {\n  color: #d4af37 ;\n  stroke: currentColor ;\n}\n\n.sidebar .admin-mini,\n.talenta-sidebar .admin-mini {\n  border-top-color: #27334a ;\n}\n\n.sidebar .admin-mini b,\n.talenta-sidebar .admin-mini b {\n  color: #c0c0c0 ;\n}\n\n.sidebar .admin-mini small,\n.talenta-sidebar .admin-mini small {\n  color: #9299a8 ;\n}\n\n.sidebar .logout,\n.talenta-sidebar .logout {\n  color: #d6a7a7 ;\n}\n\n/* Topbar */\n.topbar,\n.talenta-main .topbar {\n  background: #080f20 ;\n  color: #c0c0c0 ;\n  border-bottom: 1px solid #d4af37 ;\n}\n\n.crumb,\n.crumb span,\n.crumb b,\n.icon-btn {\n  color: #c0c0c0 ;\n}\n\n.search-global {\n  background: #0d1830 ;\n  border: 1px solid #d4af37 ;\n}\n\n.search-global input {\n  background: transparent ;\n  color: #c0c0c0 ;\n}\n\n.search-global input::placeholder,\ninput::placeholder,\ntextarea::placeholder {\n  color: #737c90 ;\n}\n\n/* Cards / panels */\n.panel,\n.card,\n.dashboard-card,\n.stat-card,\n.table-panel,\n.form-panel,\n.report-card,\n.mini-kpi,\n.org-card,\n.calendar-card,\n.feature-card,\n.setting-card,\n.detail-panel,\n.info-box,\n.toolbar-panel,\n.branch-nav,\n.quick,\n.drawer-body,\n.theme-manager-header,\n.custom-theme-panel {\n  background: #0b1222 ;\n  color: #c0c0c0 ;\n  border-color: #d4af37 ;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3) ;\n}\n\n.page-heading h1,\n.page-heading h2,\n.page-heading h3,\n.panel h1,\n.panel h2,\n.panel h3,\n.panel-head h2,\n.stat-card strong,\n.mini-kpi b,\n.report-card b,\n.quick h2,\n.settings h2 {\n  color: #c0c0c0 ;\n}\n\n.page-heading p,\n.panel-head p,\n.panel p,\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.setting-card p,\n.quick p,\n.stat-card span,\n.stat-card small,\n.mini-kpi span {\n  color: #9299a8 ;\n}\n\n.stat-icon {\n  background: #172441 ;\n  color: #d4af37 ;\n  border: 1px solid #d4af37 ;\n}\n\n/* Table: scrollbar sengaja dipertahankan */\n.table-wrap {\n  max-height: calc(100vh - 270px) ;\n  overflow-y: scroll ;\n  overflow-x: auto ;\n  scrollbar-width: thin ;\n  scrollbar-color: #d4af37 #111a2d ;\n}\n\n.table-wrap::-webkit-scrollbar {\n  width: 10px ;\n  height: 10px ;\n}\n\n.table-wrap::-webkit-scrollbar-track {\n  background: #111a2d ;\n  border-left: 1px solid #26334e ;\n}\n\n.table-wrap::-webkit-scrollbar-thumb {\n  background: #d4af37 ;\n  border-radius: 10px ;\n  border: 2px solid #111a2d ;\n}\n\n.table-wrap::-webkit-scrollbar-thumb:hover {\n  background: #f0cf69 ;\n}\n\ntable {\n  color: #c0c0c0 ;\n}\n\ntable th,\nth {\n  background: #101a30 ;\n  color: #d4af37 ;\n  border-bottom: 1px solid #d4af37 ;\n}\n\ntable td,\ntd {\n  background: #0b1222 ;\n  color: #c0c0c0 ;\n  border-bottom: 1px solid #27334a ;\n}\n\ntd b,\ntd small {\n  color: #c0c0c0 ;\n}\n\ntd small {\n  color: #858da0 ;\n}\n\ntr:hover td {\n  background: #14213d ;\n  color: #ffffff ;\n}\n\n/* Form */\ninput,\nselect,\ntextarea,\n.filter,\n.toolbar input,\n.toolbar select,\n.toolbar-panel input,\n.toolbar-panel select,\n.compact-input,\n.form-grid input,\n.form-grid select,\n.form-grid textarea {\n  background: #0b1222 ;\n  color: #c0c0c0 ;\n  border: 1px solid #d4af37 ;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #f0cf69 ;\n  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.15) ;\n}\n\n/* Buttons */\n.primary,\n.secondary,\n.talenta-main button.primary,\n.talenta-main button.primary-btn,\n.talenta-main button.btn-primary,\n.talenta-main button.secondary {\n  background: #101a33 ;\n  color: #d4af37 ;\n  border: 1px solid #d4af37 ;\n}\n\n.primary:hover,\n.secondary:hover,\n.talenta-main button.primary:hover,\n.talenta-main button.secondary:hover {\n  background: #172441 ;\n  color: #f0cf69 ;\n  border-color: #f0cf69 ;\n}\n\n/* Professional Suite */\n.professional-suite,\n.professional-suite .panel,\n.professional-suite .stat-card,\n.professional-suite .branch-tabs,\n.professional-suite .action-card {\n  color: #c0c0c0 ;\n}\n\n.professional-suite .panel,\n.professional-suite .stat-card,\n.professional-suite .branch-tabs,\n.professional-suite .action-card {\n  background: #0b1222 ;\n  border-color: #d4af37 ;\n}\n\n.professional-suite .branch-tabs button {\n  background: transparent ;\n  color: #c0c0c0 ;\n  border: 1px solid transparent ;\n}\n\n.professional-suite .branch-tabs button:hover,\n.professional-suite .branch-tabs button.active {\n  background: #172441 ;\n  color: #d4af37 ;\n  border-color: #d4af37 ;\n}\n\n.professional-suite .action-card:hover {\n  background: #14213d ;\n  border-color: #f0cf69 ;\n}\n\n/* Mobile */\n@media (max-width: 800px) {\n  .table-wrap {\n    max-height: calc(100vh - 220px) ;\n    overflow-y: scroll ;\n    overflow-x: auto ;\n  }\n\n  .sidebar,\n  .talenta-sidebar {\n    overflow-y: auto ;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n/* =====================================================\n   CUSTOM SIDEBAR SCROLLBAR\n   ===================================================== */\n\n.sidebar {\n  position: relative ;\n  overflow-y: auto ;\n  overflow-x: hidden ;\n\n  scrollbar-width: none ;\n  padding-right: 10px ;\n}\n\n.sidebar::-webkit-scrollbar {\n  width: 0 ;\n  display: none ;\n}\n\n/* Jalur scrollbar */\n.custom-sidebar-scrollbar {\n  position: absolute ;\n  top: 5px ;\n  right: 2px ;\n\n  width: 5px ;\n  height: calc(100% - 10px) ;\n\n  background: rgba(255, 255, 255, 0.12) ;\n  border-radius: 10px ;\n\n  pointer-events: none ;\n  z-index: 9999 ;\n}\n\n/* Bagian yang bergerak */\n.custom-sidebar-scrollbar-thumb {\n  position: absolute ;\n  top: 0;\n  left: 0;\n\n  width: 5px ;\n  min-height: 35px ;\n\n  background: #d4af37 ;\n  border-radius: 10px ;\n\n  box-shadow: 0 0 6px rgba(212, 175, 55, 0.45);\n\n  transition: background 0.2s ease;\n}\n\n.custom-sidebar-scrollbar-thumb:hover {\n  background: #f5d76e ;\n}\n\n@media (min-width: 900px) {\n  html,\n  body,\n  #root {\n    min-height: 100vh ;\n    height: 100% ;\n    margin: 0 ;\n  }\n\n  .talenta-shell {\n    height: 100vh ;\n    min-height: 100vh ;\n    max-height: 100vh ;\n\n    overflow: hidden ;\n  }\n\n  .talenta-main {\n    height: 100vh ;\n    min-height: 0 ;\n\n    overflow-y: auto ;\n    overflow-x: hidden ;\n\n    box-sizing: border-box ;\n  }\n}\n/* =========================================================\n   DESKTOP SIDEBAR - SCROLLBAR YANG IKUT BERGERAK\n   ========================================================= */\n\n@media (min-width: 900px) {\n  .sidebar {\n    position: sticky ;\n    top: 0 ;\n\n    height: 100vh ;\n    max-height: 100vh ;\n\n    box-sizing: border-box ;\n\n    /* PENTING:\n       scrollbar selalu disediakan dan bisa bergerak */\n    overflow-y: scroll ;\n    overflow-x: hidden ;\n\n    /* Firefox */\n    scrollbar-width: thin ;\n    scrollbar-color: #c9a227 #eef1f5 ;\n  }\n\n  /* Chrome / Edge / Firefox desktop */\n  .sidebar::-webkit-scrollbar {\n    width: 8px ;\n  }\n\n  .sidebar::-webkit-scrollbar-track {\n    background: #eef1f5 ;\n  }\n\n  .sidebar::-webkit-scrollbar-thumb {\n    background: #c9a227 ;\n    border-radius: 8px ;\n    min-height: 40px ;\n  }\n\n  .sidebar::-webkit-scrollbar-thumb:hover {\n    background: #a98216 ;\n  }\n\n  /* =======================================================\n     SEMUA JUDUL GROUP MENU DIBUAT KONSISTEN\n     ======================================================= */\n\n  .sidebar .nav-group {\n    width: 100% ;\n    box-sizing: border-box ;\n  }\n\n  .sidebar .nav-title {\n    width: 100% ;\n    box-sizing: border-box ;\n\n    min-height: 48px ;\n    margin: 0 ;\n\n    display: flex ;\n    align-items: center ;\n    justify-content: space-between ;\n\n    padding: 0 14px ;\n  }\n}\n/* =========================================================\n   FONT JUDUL MENU SIDEBAR DESKTOP\n   ========================================================= */\n\n@media (min-width: 900px) {\n  .sidebar .nav-title {\n    font-family: inherit ;\n    font-size: 13px ;\n    font-weight: 600 ;\n    line-height: 1.2 ;\n    letter-spacing: 0.2px ;\n  }\n\n  .sidebar .nav-title span {\n    font-family: inherit ;\n    font-size: 13px ;\n    font-weight: 600 ;\n    line-height: 1.2 ;\n    letter-spacing: 0.2px ;\n  }\n}\n/* =========================================================\n   JUDUL SIDEBAR TANPA BINGKAI - GOLD\n   ========================================================= */\n\n@media (min-width: 900px) {\n  .sidebar .nav-title {\n    height: auto ;\n    min-height: 40px ;\n\n    background: transparent ;\n    border: none ;\n    box-shadow: none ;\n    outline: none ;\n\n    border-radius: 0 ;\n\n    padding: 8px 12px ;\n\n    color: #c9a227 ;\n\n    font-size: 13px ;\n    font-weight: 650 ;\n    letter-spacing: 0.2px ;\n  }\n\n  .sidebar .nav-title span {\n    color: #c9a227 ;\n\n    font-size: 13px ;\n    font-weight: 650 ;\n    letter-spacing: 0.2px ;\n  }\n\n  /* Panah tetap gold */\n  .sidebar .nav-title svg {\n    color: #c9a227 ;\n  }\n\n  /* Saat diarahkan mouse tetap tanpa bingkai */\n  .sidebar .nav-title:hover {\n    background: transparent ;\n    border: none ;\n    box-shadow: none ;\n  }\n}\n/* =========================================================\n   DETAIL KARYAWAN — PROFESSIONAL CARD\n   ========================================================= */\n\n.employee-detail-card {\n  width: min(980px, calc(100vw - 32px));\n  max-height: min(88vh, 900px);\n  overflow: hidden;\n  background: #ffffff;\n  color: #172033;\n  border: 1px solid #e5e7eb;\n  border-radius: 18px;\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);\n}\n\n.employee-detail-card .export-head {\n  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);\n  border-bottom: 1px solid #e5e7eb;\n  padding: 22px 24px;\n}\n\n.employee-detail-card .export-head span {\n  color: #b58a2a;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n\n.employee-detail-card .export-head h2 {\n  margin: 5px 0 4px;\n  color: #172033;\n  font-size: 22px;\n  font-weight: 800;\n}\n\n.employee-detail-card .export-head p {\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n}\n\n.employee-detail-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  padding: 20px 24px;\n  max-height: calc(88vh - 180px);\n  overflow-y: auto;\n  background: #f8fafc;\n}\n\n.detail-section {\n  background: #ffffff;\n  border: 1px solid #e6e9ef;\n  border-radius: 14px;\n  padding: 16px;\n}\n\n.detail-section h3 {\n  margin: 0 0 13px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #edf0f4;\n  color: #172033;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n\n.detail-item {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 9px 0;\n  border-bottom: 1px solid #f1f3f6;\n}\n\n.detail-item:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n\n.detail-item span {\n  flex: 0 0 42%;\n  color: #64748b;\n  font-size: 12px;\n}\n\n.detail-item b {\n  flex: 1;\n  min-width: 0;\n  color: #172033;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: right;\n  overflow-wrap: anywhere;\n}\n\n.employee-detail-card .export-foot {\n  background: #ffffff;\n  border-top: 1px solid #e5e7eb;\n  padding: 14px 24px;\n}\n\n@media (max-width: 700px) {\n  .employee-detail-card {\n    width: calc(100vw - 20px);\n    max-height: 92vh;\n    border-radius: 15px;\n  }\n\n  .employee-detail-grid {\n    grid-template-columns: 1fr;\n    padding: 14px;\n    max-height: calc(92vh - 170px);\n  }\n\n  .employee-detail-card .export-head {\n    padding: 18px;\n  }\n\n  .employee-detail-card .export-foot {\n    padding: 12px 14px;\n  }\n}\n\n.profile-dropdown-wrap {\n  position: relative;\n  z-index: 50;\n}\n.profile-trigger {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: transparent;\n  padding: 2px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.profile-trigger:hover {\n  background: #f1f5f9;\n}\n.profile-trigger .avatar {\n  width: 38px;\n  height: 38px;\n  font-size: 11px;\n}\n.profile-chevron {\n  width: 18px;\n  height: 18px;\n  display: grid;\n  place-items: center;\n  border: 1px solid #dbe3ec;\n  border-radius: 50%;\n  background: #fff;\n}\n.profile-chevron .ui-icon {\n  width: 11px;\n  height: 11px;\n}\n.profile-menu {\n  position: absolute;\n  right: 0;\n  top: 48px;\n  width: 290px;\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e4e9f1;\n  border-radius: 16px;\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.16);\n  z-index: 100;\n}\n.profile-menu-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 8px 12px;\n}\n.profile-menu-avatar {\n  width: 42px;\n  height: 42px;\n  flex: none;\n}\n.profile-menu-header strong {\n  display: block;\n  color: #0b1736;\n  font-size: 13px;\n}\n.profile-menu-header small {\n  display: block;\n  margin-top: 3px;\n  color: #94a3b8;\n  font-size: 10px;\n}\n.profile-menu-divider {\n  height: 1px;\n  background: #edf1f5;\n  margin: 7px 0;\n}\n.profile-menu-label {\n  padding: 5px 10px 7px;\n  color: #94a3b8;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: 1.2px;\n}\n.profile-menu-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 0;\n  background: transparent;\n  border-radius: 9px;\n  padding: 9px 10px;\n  text-align: left;\n  color: #475569;\n  font-size: 12px;\n  cursor: pointer;\n}\n.profile-menu-item span:first-child {\n  width: 18px;\n  text-align: center;\n}\n.profile-menu-item:hover,\n.profile-menu-item.selected {\n  background: #fbf5e7;\n  color: #0b1736;\n  font-weight: 800;\n}\n.profile-language {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 7px 10px;\n  color: #475569;\n  font-size: 11px;\n}\n.profile-language select {\n  max-width: 125px;\n  border: 1px solid #dbe3ec;\n  border-radius: 8px;\n  padding: 6px 8px;\n  background: #fff;\n  color: #334155;\n  font-size: 11px;\n}\n.profile-logout {\n  color: #9a3a3a;\n}\n.profile-logout:hover {\n  background: #fff1f2;\n  color: #9a3a3a;\n}\n@media (max-width: 600px) {\n  .profile-menu {\n    right: 0;\n    width: min(290px, calc(100vw - 20px));\n  }\n  .profile-trigger .avatar {\n    width: 36px;\n    height: 36px;\n  }\n  .profile-chevron {\n    display: none;\n  }\n}\n\n/* =========================================================\n   PROFILE MENU - TOP RIGHT\n   ========================================================= */\n\n.profile-trigger-wrap {\n  position: relative;\n}\n\n.avatar-button {\n  border: 0;\n  cursor: pointer;\n  font: inherit;\n  padding: 0;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease;\n}\n\n.avatar-button:hover {\n  transform: translateY(-1px);\n}\n\n.avatar-button:focus-visible {\n  outline: 2px solid #d4af37;\n  outline-offset: 3px;\n}\n\n.profile-menu {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 270px;\n  background: #fff;\n  border: 1px solid #e5eaf2;\n  border-radius: 14px;\n  box-shadow: 0 14px 35px rgba(11, 23, 54, 0.16);\n  padding: 8px;\n  z-index: 9999;\n}\n\n.profile-menu-header {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 10px;\n}\n\n.profile-avatar-large {\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0b1736;\n  color: #d4af37;\n  font-size: 13px;\n  font-weight: 800;\n  border: 1px solid #d4af37;\n}\n\n.profile-menu-header strong {\n  display: block;\n  max-width: 185px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #0b1736;\n  font-size: 13px;\n}\n\n.profile-menu-header small {\n  display: block;\n  margin-top: 3px;\n  color: #64748b;\n  font-size: 11px;\n}\n\n.profile-menu-divider {\n  height: 1px;\n  background: #e5eaf2;\n  margin: 5px 2px;\n}\n\n.profile-menu > button {\n  width: 100%;\n  min-height: 38px;\n  border: 0;\n  background: transparent;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  color: #0b1736;\n  font-size: 12px;\n  text-align: left;\n  cursor: pointer;\n}\n\n.profile-menu > button:hover {\n  background: #f7f9fc;\n}\n\n.profile-menu > button span {\n  width: 20px;\n  text-align: center;\n  flex: 0 0 20px;\n}\n\n.profile-menu .profile-logout {\n  color: #b42318;\n}\n\n.profile-menu .profile-logout:hover {\n  background: #fff1f0;\n}\n\n/* =========================================================\n   PROFILE PANEL\n   ========================================================= */\n\n.profile-panel-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(11, 23, 54, 0.42);\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding: 72px 24px 24px;\n  z-index: 10000;\n}\n\n.profile-panel {\n  width: min(420px, calc(100vw - 32px));\n  max-height: calc(100vh - 96px);\n  overflow: auto;\n  background: #fff;\n  border: 1px solid #e5eaf2;\n  border-radius: 16px;\n  box-shadow: 0 20px 50px rgba(11, 23, 54, 0.22);\n}\n\n.profile-panel-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 20px;\n  border-bottom: 1px solid #e5eaf2;\n}\n\n.profile-panel-head h3 {\n  margin: 0;\n  color: #0b1736;\n  font-size: 17px;\n  font-weight: 800;\n}\n\n.profile-panel-head p {\n  margin: 4px 0 0;\n  color: #64748b;\n  font-size: 11px;\n}\n\n.profile-panel-close {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  border-radius: 8px;\n  background: #f7f9fc;\n  color: #64748b;\n  font-size: 20px;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.profile-panel-close:hover {\n  background: #eef2f7;\n  color: #0b1736;\n}\n\n.profile-panel-body {\n  padding: 20px;\n}\n\n.profile-photo-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 20px;\n}\n\n.profile-photo-placeholder {\n  width: 86px;\n  height: 86px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0b1736;\n  color: #d4af37;\n  border: 2px solid #d4af37;\n  font-size: 22px;\n  font-weight: 800;\n}\n\n.profile-photo-button {\n  border: 0;\n  background: transparent;\n  color: #0b1736;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.profile-photo-button:hover {\n  color: #a67c22;\n}\n\n.profile-field {\n  display: block;\n  margin-top: 14px;\n}\n\n.profile-field > span {\n  display: block;\n  margin-bottom: 6px;\n  color: #475569;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.profile-field input {\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 40px;\n  padding: 9px 11px;\n  border: 1px solid #d8dee8;\n  border-radius: 9px;\n  background: #fff;\n  color: #0b1736;\n  font: inherit;\n  font-size: 12px;\n  outline: none;\n}\n\n.profile-field input:focus {\n  border-color: #d4af37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.12);\n}\n\n.profile-field input[readonly] {\n  background: #f7f9fc;\n  color: #64748b;\n  cursor: not-allowed;\n}\n\n.profile-panel-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 14px 20px;\n  border-top: 1px solid #e5eaf2;\n  background: #fbfcfe;\n  border-radius: 0 0 16px 16px;\n}\n\n.profile-btn-secondary,\n.profile-btn-primary {\n  min-height: 36px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.profile-btn-secondary {\n  border: 1px solid #d8dee8;\n  background: #fff;\n  color: #475569;\n}\n\n.profile-btn-secondary:hover {\n  background: #f7f9fc;\n}\n\n.profile-btn-primary {\n  border: 1px solid #0b1736;\n  background: #0b1736;\n  color: #d4af37;\n}\n\n.profile-btn-primary:hover {\n  background: #12244d;\n}\n\n@media (max-width: 600px) {\n  .profile-panel-overlay {\n    align-items: flex-start;\n    justify-content: center;\n    padding: 64px 12px 12px;\n  }\n\n  .profile-panel {\n    width: 100%;\n    max-height: calc(100vh - 76px);\n  }\n}\n\n/* FOTO PROFIL DI AVATAR HEADER */\n.avatar-button img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.profile-avatar-large img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.profile-photo-placeholder img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.profile-language {\n  position: relative;\n}\n.profile-language > button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 0;\n  background: transparent;\n  padding: 9px 12px;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.profile-language > button small {\n  font-size: 9px;\n  opacity: 0.65;\n}\n.profile-language-options {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 0 8px 6px;\n  padding: 4px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.profile-language-options button {\n  border: 0;\n  background: transparent;\n  border-radius: 6px;\n  padding: 6px 8px;\n  color: #334155;\n  font-size: 11px;\n  text-align: left;\n  cursor: pointer;\n}\n.profile-language-options button:hover,\n.profile-language-options button.selected {\n  background: #e2e8f0;\n}\n\n/* =========================================================\n   THEME ENGINE V2 — AUTHORITATIVE ADMIN THEME LAYER\n   All visual surfaces in the Admin Dashboard consume these tokens.\n   Legacy selectors remain for compatibility but must not hard-code\n   the active theme's primary/surface/background/text/border values.\n   ========================================================= */\n\n:root {\n  --mx-primary: #101a33;\n  --mx-primary-contrast: #ffffff;\n  --mx-accent: #d6ae58;\n  --mx-background: #f6f7fb;\n  --mx-surface: #ffffff;\n  --mx-surface-alt: #f6f7fb;\n  --mx-text: #172033;\n  --mx-text-secondary: #475467;\n  --mx-text-muted: #667085;\n  --mx-border: #d6ae58;\n  --mx-border-strong: #d6ae58;\n  --mx-focus: #d6ae58;\n  --mx-success: #16845a;\n  --mx-warning: #b7791f;\n  --mx-danger: #b42318;\n  --mx-info: #2563eb;\n  --mx-blue: var(--mx-primary);\n  --mx-blue-soft: var(--mx-background);\n  --blue: var(--mx-primary);\n  --blue2: var(--mx-primary);\n  --blue-soft: var(--mx-background);\n  --ink: var(--mx-text);\n  --line: var(--mx-border);\n  --surface: var(--mx-surface);\n  --bg: var(--mx-background);\n}\n\nhtml,\nbody,\n#root {\n  background: var(--mx-background);\n  color: var(--mx-text);\n}\n\n.talenta-shell,\n.talenta-main,\n.admin-main,\n.dashboard-main,\n.page-content,\n.content-area,\n.page {\n  background: var(--mx-background) ;\n  color: var(--mx-text) ;\n}\n\n.talenta-sidebar {\n  background: var(--mx-primary) ;\n  color: var(--mx-primary-contrast) ;\n  border-right-color: color-mix(\n    in srgb,\n    var(--mx-border) 45%,\n    transparent\n  ) ;\n}\n\n.talenta-sidebar .brand,\n.talenta-sidebar .brand b,\n.talenta-sidebar .brand small,\n.talenta-sidebar .workspace,\n.talenta-sidebar .workspace b,\n.talenta-sidebar .workspace small,\n.talenta-sidebar .group-title,\n.talenta-sidebar .nav-item,\n.talenta-sidebar .admin-mini,\n.talenta-sidebar .admin-mini b,\n.talenta-sidebar .admin-mini small {\n  color: color-mix(\n    in srgb,\n    var(--mx-primary-contrast) 88%,\n    var(--mx-primary)\n  ) ;\n}\n\n.talenta-sidebar .workspace,\n.talenta-sidebar .admin-mini {\n  border-color: color-mix(\n    in srgb,\n    var(--mx-primary-contrast) 18%,\n    transparent\n  ) ;\n}\n\n.talenta-sidebar .nav-item:hover,\n.talenta-sidebar .nav-item.active {\n  background: color-mix(in srgb, var(--mx-accent) 18%, transparent) ;\n  color: var(--mx-primary-contrast) ;\n  border-color: color-mix(\n    in srgb,\n    var(--mx-accent) 55%,\n    transparent\n  ) ;\n}\n\n.talenta-sidebar .nav-item em {\n  background: color-mix(\n    in srgb,\n    var(--mx-primary-contrast) 12%,\n    transparent\n  ) ;\n  color: var(--mx-primary-contrast) ;\n}\n\n.talenta-sidebar .logout {\n  color: #fecaca ;\n}\n.talenta-sidebar .logout:hover {\n  background: color-mix(in srgb, #ef4444 18%, transparent) ;\n}\n\n.topbar {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-bottom-color: var(--mx-border) ;\n}\n\n.icon-btn,\n.crumb,\n.page-heading h1,\n.panel-head h2,\n.quick h2,\n.settings h2,\n.stat-card strong,\n.stat-card b,\n.panel h1,\n.panel h2,\n.panel h3,\n.card h1,\n.card h2,\n.card h3,\ntd b {\n  color: var(--mx-text) ;\n}\n\n.crumb span,\n.page-heading p,\n.panel-head p,\n.quick p,\n.stat-card span,\n.stat-card small,\n.mini-kpi span,\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.setting-card p,\n.brand small,\n.workspace small {\n  color: var(--mx-text-muted) ;\n}\n\n.search-global,\n.filter,\n.form-grid input,\n.form-grid select,\n.form-grid textarea,\n.login-card input,\ninput,\nselect,\ntextarea {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n.search-global input::placeholder,\ninput::placeholder,\ntextarea::placeholder {\n  color: var(--mx-text-muted) ;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\n.search-global:focus-within {\n  border-color: var(--mx-focus) ;\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--mx-focus) 18%, transparent) ;\n}\n\n.panel,\n.card,\n.dashboard-card,\n.stat-card,\n.mini-kpi,\n.table-panel,\n.form-panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.quick,\n.theme-card,\n.custom-theme-panel,\n.profile-panel {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\nth {\n  background: color-mix(\n    in srgb,\n    var(--mx-surface) 92%,\n    var(--mx-primary)\n  ) ;\n  color: var(--mx-text-secondary) ;\n  border-bottom-color: var(--mx-border) ;\n}\n\ntd {\n  color: var(--mx-text-secondary) ;\n  border-bottom-color: color-mix(\n    in srgb,\n    var(--mx-border) 55%,\n    transparent\n  ) ;\n}\ntr:hover td {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 7%,\n    var(--mx-surface)\n  ) ;\n}\n\n.primary,\nbutton.primary,\nbutton.hero-primary,\n.btn-primary,\n.theme-save-button {\n  background: var(--mx-primary) ;\n  color: var(--mx-primary-contrast) ;\n  border-color: var(--mx-primary) ;\n}\n.primary:hover,\nbutton.primary:hover,\nbutton.hero-primary:hover,\n.btn-primary:hover,\n.theme-save-button:hover {\n  background: var(--mx-accent) ;\n  color: var(--mx-primary) ;\n  border-color: var(--mx-accent) ;\n}\n\n.secondary,\nbutton.secondary,\n.btn-secondary {\n  background: var(--mx-surface) ;\n  color: var(--mx-primary) ;\n  border-color: var(--mx-border) ;\n}\n.secondary:hover,\nbutton.secondary:hover,\n.btn-secondary:hover {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 9%,\n    var(--mx-surface)\n  ) ;\n  border-color: var(--mx-accent) ;\n}\n\n.link-btn,\na {\n  color: var(--mx-primary) ;\n}\n.link-btn:hover,\na:hover {\n  color: var(--mx-accent) ;\n}\n\n.nav-item.active,\n.filter.active,\n.settings-tabs button.active,\n.branch-tabs button.active,\n.branch-nav button.active {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 14%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-primary) ;\n  border-color: var(--mx-accent) ;\n}\n\n.settings-tabs button,\n.branch-tabs button,\n.branch-nav button,\n.theme-card {\n  color: var(--mx-text-secondary) ;\n  border-color: var(--mx-border) ;\n  background: var(--mx-surface) ;\n}\n\n.settings-tabs button:hover,\n.branch-tabs button:hover,\n.branch-nav button:hover,\n.theme-card:hover,\n.theme-card.active {\n  border-color: var(--mx-accent) ;\n}\n\n.theme-card.active {\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--mx-accent) 25%, transparent) ;\n}\n\n.theme-active-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-right: 7px;\n  padding: 3px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--mx-accent) 15%, var(--mx-surface));\n  color: var(--mx-primary) ;\n  border: 1px solid var(--mx-accent);\n  font-size: 9px;\n  font-weight: 800;\n}\n\n.theme-color-dot,\n.progress span {\n  background: var(--mx-accent) ;\n}\n\n.quick-icon,\n.stat-icon,\n.org-icon,\n.feature-icon,\n.setting-icon,\n.mini-avatar {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 12%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-primary) ;\n}\n\n.progress {\n  background: color-mix(\n    in srgb,\n    var(--mx-border) 35%,\n    var(--mx-surface)\n  ) ;\n}\n\n.alert,\n.form-error {\n  background: color-mix(\n    in srgb,\n    var(--mx-danger) 9%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-danger) ;\n  border-color: color-mix(\n    in srgb,\n    var(--mx-danger) 30%,\n    var(--mx-border)\n  ) ;\n}\n\n.status.green {\n  background: color-mix(in srgb, var(--mx-success) 12%, var(--mx-surface));\n  color: var(--mx-success);\n}\n.status.red {\n  background: color-mix(in srgb, var(--mx-danger) 10%, var(--mx-surface));\n  color: var(--mx-danger);\n}\n.status.orange {\n  background: color-mix(in srgb, var(--mx-warning) 12%, var(--mx-surface));\n  color: var(--mx-warning);\n}\n.status.blue {\n  background: color-mix(in srgb, var(--mx-info) 10%, var(--mx-surface));\n  color: var(--mx-info);\n}\n\n.loading,\n.toast {\n  background: var(--mx-primary) ;\n  color: var(--mx-primary-contrast) ;\n  border-color: var(--mx-accent) ;\n}\n\n.profile-menu,\n.profile-panel {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n.profile-menu > button,\n.profile-panel-head h3,\n.profile-photo-button {\n  color: var(--mx-text) ;\n}\n.profile-menu > button:hover,\n.profile-panel-close:hover,\n.profile-btn-secondary:hover {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 9%,\n    var(--mx-surface)\n  ) ;\n}\n.profile-panel-head,\n.profile-panel-footer {\n  border-color: var(--mx-border) ;\n  background: color-mix(\n    in srgb,\n    var(--mx-surface) 96%,\n    var(--mx-primary)\n  ) ;\n}\n.profile-field input,\n.profile-btn-secondary {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n.profile-btn-primary {\n  background: var(--mx-primary) ;\n  color: var(--mx-primary-contrast) ;\n  border-color: var(--mx-primary) ;\n}\n.profile-photo-placeholder {\n  background: var(--mx-primary) ;\n  color: var(--mx-accent) ;\n  border-color: var(--mx-accent) ;\n}\n\n/* Theme preview text and controls */\n.custom-theme-controls label {\n  color: var(--mx-text-secondary) ;\n}\n.theme-manager-header p,\n.custom-theme-panel p,\n.theme-card-body small {\n  color: var(--mx-text-muted) ;\n}\n.theme-card-body strong,\n.custom-theme-panel h3,\n.theme-manager-header h2 {\n  color: var(--mx-text) ;\n}\n\n/* Keep semantic colors readable while allowing theme surfaces to change. */\n.green {\n  color: var(--mx-success) ;\n}\n.muted {\n  color: var(--mx-text-muted) ;\n}\n.danger-text {\n  color: var(--mx-danger) ;\n}\n\n/* Remove the old hard-coded theme lock from the Admin root. */\n.talenta-shell,\n.talenta-main,\n.page {\n  transition:\n    background-color 0.18s ease,\n    color 0.18s ease;\n}\n\n/* =========================================================\n   HR DASHBOARD - MOBILE SAMA SEPERTI DESKTOP\n   ========================================================= */\n@media (max-width: 700px) {\n  .talenta-sidebar {\n    width: 268px;\n  }\n\n  .talenta-sidebar .brand > div:last-child,\n  .workspace,\n  .group-title,\n  .nav-item > span:nth-child(2),\n  .admin-mini > div:last-child,\n  .logout {\n    display: block;\n  }\n\n  .talenta-sidebar .nav-item {\n    justify-content: flex-start;\n  }\n\n  .talenta-main {\n    min-width: 1100px;\n  }\n\n  .topbar {\n    min-width: 1100px;\n    height: 64px;\n    padding: 0 28px;\n  }\n\n  .top-actions .icon-btn {\n    display: flex;\n  }\n\n  .search-global {\n    display: flex;\n    width: 330px;\n  }\n\n  .page {\n    min-width: 1046px;\n    padding: 27px;\n  }\n\n  .page-heading {\n    flex-direction: row;\n  }\n\n  .page-heading .primary,\n  .page-heading .secondary {\n    width: auto;\n  }\n\n  .page-heading h1 {\n    font-size: 25px;\n  }\n\n  .stat-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .mini-kpi-row {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .content-grid {\n    grid-template-columns: minmax(0, 1fr) 285px;\n  }\n\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .form-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard-grid-top {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard-grid-bottom {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .executive-stats {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n/* FIX MOBILE DASHBOARD - SIDEBAR & CONTENT SPACE */\n@media (max-width: 700px) {\n  .talenta-sidebar {\n    width: 268px ;\n    min-width: 268px ;\n    flex: 0 0 268px ;\n  }\n\n  .talenta-sidebar .brand,\n  .talenta-sidebar .nav-item,\n  .talenta-sidebar .admin-mini,\n  .talenta-sidebar .logout {\n    white-space: nowrap ;\n  }\n\n  .talenta-main {\n    min-width: 1100px ;\n    width: 1100px ;\n  }\n\n  .page {\n    min-width: 1046px ;\n    width: 1046px ;\n    box-sizing: border-box;\n  }\n}\n\n/* FIX SIDEBAR MOBILE - DESKTOP LAYOUT */\n@media (max-width: 700px) {\n  .talenta-sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n    width: 268px ;\n    min-width: 268px ;\n    height: 100vh ;\n    transform: translateX(0) ;\n    display: flex ;\n    visibility: visible ;\n    opacity: 1 ;\n    z-index: 1000 ;\n  }\n\n  .talenta-main {\n    margin-left: 268px ;\n    min-width: 1100px ;\n    width: 1100px ;\n  }\n}\n\n/* =========================================================\n   FIX ADMIN / HR MOBILE SIDEBAR\n   ========================================================= */\n\n.sidebar {\n  width: 268px ;\n  min-width: 268px ;\n  flex: 0 0 268px ;\n  box-sizing: border-box ;\n  background: #080f20 ;\n  color: #c0c0c0 ;\n  border-right: 1px solid #d4af37 ;\n  display: flex ;\n  flex-direction: column ;\n  min-height: 100vh ;\n  height: 100vh ;\n  overflow-y: auto ;\n  overflow-x: hidden ;\n  position: sticky ;\n  top: 0 ;\n  z-index: 1000 ;\n}\n\n.sidebar.collapsed {\n  width: 76px ;\n  min-width: 76px ;\n  flex-basis: 76px ;\n}\n\n.talenta-shell {\n  width: 100% ;\n  min-width: 0 ;\n  display: flex ;\n}\n\n.talenta-main {\n  min-width: 0 ;\n  width: auto ;\n  flex: 1 1 auto ;\n}\n\n/* Android / HP */\n@media (max-width: 899px) {\n  .talenta-shell {\n    width: 100vw ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    overflow: hidden ;\n  }\n\n  .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n\n    width: min(290px, 82vw) ;\n    min-width: min(290px, 82vw) ;\n    max-width: 290px ;\n\n    height: 100dvh ;\n    min-height: 100dvh ;\n\n    flex: none ;\n\n    transform: translateX(-105%) ;\n    transition: transform 0.22s ease ;\n\n    box-shadow: 12px 0 30px rgba(0, 0, 0, 0.28) ;\n  }\n\n  .sidebar.open {\n    transform: translateX(0) ;\n  }\n\n  .sidebar.collapsed {\n    width: min(290px, 82vw) ;\n    min-width: min(290px, 82vw) ;\n    flex-basis: auto ;\n  }\n\n  .talenta-main {\n    width: 100% ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    flex: 1 1 100% ;\n    margin: 0 ;\n  }\n\n  .topbar {\n    width: 100% ;\n    max-width: 100vw ;\n    box-sizing: border-box ;\n  }\n\n  .page {\n    width: 100% ;\n    max-width: 100% ;\n    box-sizing: border-box ;\n    overflow-x: hidden ;\n  }\n\n  .page > * {\n    max-width: 100% ;\n  }\n}\n\n/* Layar kecil */\n@media (max-width: 560px) {\n  .topbar {\n    padding-left: 12px ;\n    padding-right: 12px ;\n    gap: 8px ;\n  }\n\n  .crumb {\n    min-width: 0 ;\n    max-width: calc(100vw - 70px) ;\n    overflow: hidden ;\n    white-space: nowrap ;\n    text-overflow: ellipsis ;\n  }\n\n  .page {\n    padding: 14px ;\n  }\n}\n\n/* =========================================================\n   MOBILE DASHBOARD SCROLL FIX\n   ========================================================= */\n\n@media (max-width: 899px) {\n  html,\n  body,\n  #root {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100% ;\n    height: 100% ;\n    margin: 0 ;\n  }\n\n  body {\n    overflow: auto ;\n    overflow-x: hidden ;\n    overflow-y: auto ;\n    -webkit-overflow-scrolling: touch ;\n  }\n\n  #root {\n    overflow: visible ;\n  }\n\n  .talenta-shell {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100vw ;\n    min-height: 100dvh ;\n    height: auto ;\n    display: block ;\n    overflow: visible ;\n    position: relative ;\n  }\n\n  .talenta-main {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100vw ;\n    min-height: 100dvh ;\n    height: auto ;\n    margin: 0 ;\n    flex: none ;\n    overflow-x: hidden ;\n    overflow-y: visible ;\n  }\n\n  .page {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    min-height: calc(100dvh - 64px) ;\n    height: auto ;\n    box-sizing: border-box ;\n    overflow: visible ;\n    padding: 18px 14px 100px ;\n  }\n\n  /* Sidebar tetap overlay */\n  .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n    z-index: 1000 ;\n\n    width: min(290px, 82vw) ;\n    min-width: min(290px, 82vw) ;\n    max-width: 290px ;\n    height: 100dvh ;\n\n    transform: translateX(-105%) ;\n    transition: transform 0.22s ease ;\n\n    overflow-y: auto ;\n    overflow-x: hidden ;\n    -webkit-overflow-scrolling: touch ;\n  }\n\n  .sidebar.is-open {\n    transform: translateX(0) ;\n  }\n\n  .sidebar.is-closed {\n    transform: translateX(-105%) ;\n  }\n}\n\n/* =========================================================\n   FINAL MOBILE DASHBOARD FIX\n   - halaman bisa scroll vertikal\n   - sidebar overlay\n   - konten full width\n   ========================================================= */\n\n@media (max-width: 899px) {\n  html,\n  body,\n  #root {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100% ;\n    margin: 0 ;\n  }\n\n  html,\n  body {\n    height: auto ;\n    min-height: 100% ;\n    overflow-x: hidden ;\n    overflow-y: auto ;\n  }\n\n  #root {\n    height: auto ;\n    min-height: 100dvh ;\n    overflow: visible ;\n  }\n\n  .talenta-shell {\n    display: block ;\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100vw ;\n    min-height: 100dvh ;\n    height: auto ;\n    overflow: visible ;\n    position: relative ;\n  }\n\n  .talenta-main {\n    display: block ;\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100vw ;\n    min-height: 100dvh ;\n    height: auto ;\n    margin: 0 ;\n    overflow: visible ;\n  }\n\n  .page {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    height: auto ;\n    min-height: calc(100dvh - 64px) ;\n    box-sizing: border-box ;\n    overflow: visible ;\n    padding: 18px 14px 120px ;\n  }\n\n  /* SIDEBAR MOBILE */\n  .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n\n    width: min(290px, 82vw) ;\n    min-width: min(290px, 82vw) ;\n    max-width: 290px ;\n    height: 100dvh ;\n\n    z-index: 9999 ;\n\n    transform: translateX(-105%) ;\n    transition: transform 0.22s ease ;\n\n    overflow-x: hidden ;\n    overflow-y: auto ;\n    -webkit-overflow-scrolling: touch ;\n  }\n\n  .sidebar.collapsed {\n    transform: translateX(-105%) ;\n  }\n\n  /* Jangan biarkan elemen desktop memaksa lebar layar */\n  .page-heading,\n  .card,\n  .panel,\n  .table-panel,\n  .dashboard-grid {\n    max-width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  /* Tabel boleh digeser horizontal */\n  .table-wrap,\n  .data-table-wrap {\n    width: 100% ;\n    max-width: 100% ;\n    overflow-x: auto ;\n    overflow-y: visible ;\n    -webkit-overflow-scrolling: touch ;\n  }\n}\n\n/* =========================================================\n   MOBILE DASHBOARD — SAMAKAN DENGAN DESKTOP\n   ========================================================= */\n\n@media (max-width: 899px) {\n  /* Dasar */\n  .page {\n    padding: 16px 14px 100px ;\n  }\n\n  .page-heading {\n    display: flex ;\n    align-items: flex-start ;\n    justify-content: space-between ;\n    gap: 12px ;\n    margin-bottom: 18px ;\n  }\n\n  .page-heading > div {\n    min-width: 0 ;\n    flex: 1 ;\n  }\n\n  .page-heading h1 {\n    margin: 0 ;\n    line-height: 1.2 ;\n    font-size: 24px ;\n  }\n\n  .page-heading p {\n    margin: 6px 0 0 ;\n    line-height: 1.45 ;\n  }\n\n  /* =======================================================\n     DASHBOARD UTAMA\n     ======================================================= */\n\n  .dashboard-grid-top,\n  .dashboard-grid-bottom {\n    display: flex ;\n    flex-direction: column ;\n    gap: 14px ;\n    width: 100% ;\n  }\n\n  .dashboard-grid-top > *,\n  .dashboard-grid-bottom > * {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  /* Panel mengikuti gaya desktop */\n  .panel {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .panel-head {\n    display: flex ;\n    align-items: flex-start ;\n    justify-content: space-between ;\n    gap: 12px ;\n  }\n\n  .panel-head > div {\n    min-width: 0 ;\n    flex: 1 ;\n  }\n\n  .panel-head h2 {\n    margin: 4px 0 4px ;\n    line-height: 1.25 ;\n  }\n\n  .panel-head p {\n    line-height: 1.45 ;\n  }\n\n  /* =======================================================\n     STATISTIK\n     ======================================================= */\n\n  .stat-card {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n\n    display: flex ;\n    align-items: center ;\n    gap: 12px ;\n  }\n\n  .stat-card > div:last-child {\n    min-width: 0 ;\n    flex: 1 ;\n  }\n\n  .stat-card span,\n  .stat-card strong,\n  .stat-card small {\n    display: block ;\n    line-height: 1.25 ;\n  }\n\n  .stat-card strong {\n    margin: 3px 0 ;\n  }\n\n  /* =======================================================\n     AKSES CEPAT\n     ======================================================= */\n\n  .executive-quick {\n    width: 100% ;\n  }\n\n  .executive-quick .quick {\n    width: 100% ;\n    box-sizing: border-box ;\n  }\n\n  /* =======================================================\n     PEOPLE / ABSENSI / MODUL\n     ======================================================= */\n\n  .table-panel,\n  .form-panel {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .table-wrap {\n    width: 100% ;\n    max-width: 100% ;\n    overflow-x: auto ;\n    overflow-y: visible ;\n    -webkit-overflow-scrolling: touch ;\n  }\n\n  /* Jangan paksa tabel mengecil sampai teks berantakan */\n  .table-wrap table {\n    min-width: 720px ;\n  }\n\n  /* =======================================================\n     HILANGKAN BINGKAI TEMPLATE PADA GRUP MENU\n     ======================================================= */\n\n  .branch,\n  .module-branch {\n    width: 100% ;\n    min-width: 0 ;\n  }\n\n  /* Heading dan navigasi modul */\n  .branch > .panel,\n  .module-branch > .panel {\n    box-shadow: none ;\n  }\n\n  /* Teks menu tidak terpotong */\n  .branch button,\n  .module-branch button {\n    white-space: nowrap ;\n  }\n\n  /* =======================================================\n     TEKS\n     ======================================================= */\n\n  h1,\n  h2,\n  h3,\n  p,\n  span,\n  small,\n  label,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  .eyebrow,\n  .card-kicker {\n    letter-spacing: 0.08em ;\n    line-height: 1.2 ;\n  }\n\n  /* =======================================================\n     CARD TEMPLATE\n     ======================================================= */\n\n  .card {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .card-title {\n    display: flex ;\n    align-items: flex-start ;\n    justify-content: space-between ;\n    gap: 10px ;\n  }\n\n  .card-title > div {\n    min-width: 0 ;\n  }\n}\n\n/* =========================================================\n   MOBILE — BRANCH NAV SELARAS DENGAN DASHBOARD DESKTOP\n   ========================================================= */\n\n@media (max-width: 899px) {\n  .branch-nav {\n    width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n\n    display: flex ;\n    align-items: center ;\n    gap: 6px ;\n\n    margin: 0 0 18px ;\n    padding: 4px ;\n\n    overflow-x: auto ;\n    overflow-y: hidden ;\n\n    background: transparent ;\n    border: 0 ;\n    border-radius: 0 ;\n    box-shadow: none ;\n\n    -webkit-overflow-scrolling: touch ;\n    scrollbar-width: none ;\n  }\n\n  .branch-nav::-webkit-scrollbar {\n    display: none ;\n  }\n\n  .branch-nav button {\n    flex: 0 0 auto ;\n\n    min-height: 40px ;\n    height: 40px ;\n\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n    gap: 7px ;\n\n    padding: 0 13px ;\n    margin: 0 ;\n\n    border: 0 ;\n    border-radius: 9px ;\n\n    background: transparent ;\n    box-shadow: none ;\n\n    font-size: 13px ;\n    font-weight: 600 ;\n    line-height: 1 ;\n\n    white-space: nowrap ;\n  }\n\n  .branch-nav button span {\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n\n    width: 18px ;\n    min-width: 18px ;\n    height: 18px ;\n\n    line-height: 1 ;\n  }\n\n  .branch-nav button.active {\n    box-shadow: none ;\n  }\n\n  /* Isi modul langsung mengikuti navigasi */\n  .branch-nav + .panel,\n  .branch-nav + .card,\n  .branch-nav + .table-panel,\n  .branch-nav + .form-panel {\n    margin-top: 0 ;\n  }\n\n  /* Jangan beri bingkai tambahan pada container kosong */\n  .branch-nav + .panel > .panel {\n    box-shadow: none ;\n  }\n}\n\n/* =========================================================\n   FINAL MOBILE OVERRIDE\n   UTAMA / PEOPLE / ABSENSI\n   ========================================================= */\n\n@media (max-width: 899px) {\n  .talenta-main .branch-nav {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n\n    display: flex ;\n    flex-wrap: nowrap ;\n    align-items: center ;\n\n    margin: 0 0 16px ;\n    padding: 3px ;\n    gap: 4px ;\n\n    overflow-x: auto ;\n    overflow-y: hidden ;\n\n    background: transparent ;\n    border: 0 ;\n    border-color: transparent ;\n    border-radius: 0 ;\n    box-shadow: none ;\n\n    scrollbar-width: none ;\n  }\n\n  .talenta-main .branch-nav::-webkit-scrollbar {\n    display: none ;\n  }\n\n  .talenta-main .branch-nav button {\n    flex: 0 0 auto ;\n\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n\n    width: auto ;\n    min-width: auto ;\n    min-height: 38px ;\n    height: 38px ;\n\n    margin: 0 ;\n    padding: 0 13px ;\n\n    border: 0 ;\n    border-color: transparent ;\n    border-radius: 8px ;\n\n    background: transparent ;\n    box-shadow: none ;\n\n    color: var(--mx-text, #667085) ;\n\n    font-size: 11px ;\n    font-weight: 700 ;\n    line-height: 1 ;\n\n    white-space: nowrap ;\n  }\n\n  .talenta-main .branch-nav button:hover {\n    background: rgba(255, 255, 255, 0.06) ;\n    box-shadow: none ;\n  }\n\n  .talenta-main .branch-nav button.active {\n    background: rgba(214, 174, 88, 0.14) ;\n    color: var(--mx-accent, #d6ae58) ;\n\n    border: 0 ;\n    box-shadow: none ;\n  }\n\n  .talenta-main .branch-nav button span {\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n\n    width: 17px ;\n    min-width: 17px ;\n    height: 17px ;\n\n    margin: 0 ;\n\n    font-size: 12px ;\n    line-height: 1 ;\n  }\n\n  /* Heading → menu → isi harus rapat dan konsisten */\n  .talenta-main .page-heading + .branch-nav {\n    margin-top: 0 ;\n  }\n\n  .talenta-main .branch-nav + .panel,\n  .talenta-main .branch-nav + .card,\n  .talenta-main .branch-nav + .table-panel,\n  .talenta-main .branch-nav + .form-panel {\n    margin-top: 0 ;\n  }\n\n  /* Hindari panel bersarang yang terlihat seperti card template */\n  .talenta-main .branch-nav + .panel > .panel {\n    box-shadow: none ;\n  }\n}\n\n/* =========================================================\n   FINAL SIDEBAR NAVIGATION\n   UTAMA / PEOPLE / ABSENSI\n   ========================================================= */\n\n.talenta-sidebar .sidebar-nav {\n  width: 100%;\n  padding: 8px 10px;\n  box-sizing: border-box;\n}\n\n.talenta-sidebar .nav-group {\n  width: 100%;\n  margin: 0 0 8px;\n  padding: 0;\n  background: transparent ;\n  border: 0 ;\n  box-shadow: none ;\n}\n\n.talenta-sidebar .nav-title {\n  width: 100%;\n  min-height: 32px;\n  padding: 7px 10px;\n  margin: 0 0 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  background: transparent ;\n  border: 0 ;\n  border-radius: 7px;\n\n  color: #94a3b8 ;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n\n  cursor: pointer;\n  box-shadow: none ;\n}\n\n.talenta-sidebar .nav-title:hover {\n  background: rgba(255, 255, 255, 0.05) ;\n  color: #cbd5e1 ;\n}\n\n.talenta-sidebar .nav-title .ui-icon {\n  width: 13px;\n  height: 13px;\n  opacity: 0.7;\n}\n\n.talenta-sidebar .nav-group-items {\n  width: 100%;\n  display: grid;\n  gap: 2px;\n  margin: 0;\n  padding: 0;\n}\n\n.talenta-sidebar .nav-group-items .nav-item {\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n\n  display: flex;\n  align-items: center;\n  gap: 11px;\n\n  padding: 9px 12px;\n  margin: 0;\n\n  background: transparent ;\n  border: 0 ;\n  border-left: 3px solid transparent ;\n  border-radius: 8px;\n\n  color: #cbd5e1 ;\n  font-size: 11px;\n  font-weight: 600;\n\n  text-align: left;\n  box-shadow: none ;\n  cursor: pointer;\n}\n\n.talenta-sidebar .nav-group-items .nav-item .ui-icon {\n  width: 17px;\n  height: 17px;\n  flex: 0 0 17px;\n  opacity: 0.82;\n}\n\n.talenta-sidebar .nav-group-items .nav-item:hover {\n  background: rgba(255, 255, 255, 0.06) ;\n  color: #ffffff ;\n  border-left-color: transparent ;\n}\n\n.talenta-sidebar .nav-group-items .nav-item.active {\n  background: rgba(214, 174, 88, 0.13) ;\n  color: #f0d995 ;\n  border-left-color: #d6ae58 ;\n  box-shadow: none ;\n}\n\n.talenta-sidebar .nav-group-items .nav-item.active .ui-icon {\n  color: #d6ae58 ;\n  opacity: 1;\n}\n\n/* Mobile sidebar */\n@media (max-width: 899px) {\n  .talenta-sidebar .sidebar-nav {\n    padding: 8px 9px;\n  }\n\n  .talenta-sidebar .nav-group {\n    margin-bottom: 7px;\n  }\n\n  .talenta-sidebar .nav-title {\n    min-height: 30px;\n    padding: 6px 9px;\n    font-size: 8px;\n  }\n\n  .talenta-sidebar .nav-group-items .nav-item {\n    min-height: 42px;\n    padding: 10px 11px;\n    font-size: 11px;\n  }\n}\n\n/* Saat sidebar diperkecil: group title tetap bersih */\n.talenta-sidebar:not(.sidebar-open) .nav-title {\n  justify-content: center;\n}\n\n.talenta-sidebar:not(.sidebar-open) .nav-title span {\n  display: none;\n}\n\n/* =========================================================\n   SIDEBAR GROUP STRUCTURE\n   UTAMA / PEOPLE / ABSENSI\n   ========================================================= */\n\n.talenta-sidebar .sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px 10px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.talenta-sidebar .nav-group {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: transparent ;\n  border: 0 ;\n  border-radius: 0 ;\n  box-shadow: none ;\n}\n\n/* Judul group: UTAMA / PEOPLE / ABSENSI */\n.talenta-sidebar .nav-title {\n  appearance: none;\n  width: 100%;\n  min-height: 30px;\n  margin: 4px 0 2px;\n  padding: 6px 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  background: transparent ;\n  border: 0 ;\n  border-radius: 7px;\n\n  color: #94a3b8 ;\n  font-size: 9px ;\n  font-weight: 800 ;\n  letter-spacing: 0.08em;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  cursor: pointer;\n  box-shadow: none ;\n}\n\n.talenta-sidebar .nav-title:hover {\n  background: rgba(255, 255, 255, 0.05) ;\n  color: #dbe4ef ;\n}\n\n.talenta-sidebar .nav-title .ui-icon {\n  width: 13px;\n  height: 13px;\n  flex: 0 0 13px;\n  opacity: 0.7;\n}\n\n/* Daftar menu dalam group */\n.talenta-sidebar .nav-group-items {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n/* Item menu */\n.talenta-sidebar .nav-group-items .nav-item {\n  appearance: none;\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n\n  display: flex;\n  align-items: center;\n  gap: 11px;\n\n  margin: 0;\n  padding: 9px 11px;\n\n  background: transparent ;\n  border: 0 ;\n  border-left: 3px solid transparent ;\n  border-radius: 8px;\n\n  color: #cbd5e1 ;\n  font-size: 11px ;\n  font-weight: 600 ;\n  line-height: 1.25;\n\n  text-align: left;\n  cursor: pointer;\n\n  box-shadow: none ;\n  transform: none ;\n}\n\n.talenta-sidebar .nav-group-items .nav-item .ui-icon {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n  flex: 0 0 17px;\n  opacity: 0.82;\n}\n\n/* Hover */\n.talenta-sidebar .nav-group-items .nav-item:hover {\n  background: rgba(255, 255, 255, 0.055) ;\n  color: #ffffff ;\n  border-left-color: transparent ;\n}\n\n/* Menu aktif */\n.talenta-sidebar .nav-group-items .nav-item.active {\n  background: rgba(214, 174, 88, 0.14) ;\n  color: #f0d995 ;\n  border-left-color: #d6ae58 ;\n  box-shadow: none ;\n}\n\n/* =========================================================\n   MOBILE\n   ========================================================= */\n\n@media (max-width: 899px) {\n  .talenta-sidebar .sidebar-nav {\n    padding: 8px 9px;\n    gap: 3px;\n  }\n\n  .talenta-sidebar .nav-group {\n    margin: 0;\n  }\n\n  .talenta-sidebar .nav-title {\n    min-height: 30px;\n    margin: 3px 0 2px;\n    padding: 6px 9px;\n    font-size: 8px ;\n  }\n\n  .talenta-sidebar .nav-group-items {\n    gap: 2px;\n  }\n\n  .talenta-sidebar .nav-group-items .nav-item {\n    min-height: 42px;\n    padding: 10px 11px;\n    font-size: 11px ;\n  }\n}\n\n/* Sidebar collapsed */\n.talenta-sidebar:not(.sidebar-open) .nav-title {\n  justify-content: center;\n}\n\n/* =========================================================\n   FINAL MOBILE LAYOUT - DESKTOP STYLE, MOBILE SIZE\n   ========================================================= */\n\n@media (max-width: 899px) {\n  /* ===== ROOT / PAGE ===== */\n  html,\n  body,\n  #root {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    overflow-x: hidden ;\n  }\n\n  .talenta-shell {\n    width: 100% ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    display: block ;\n    overflow: visible ;\n  }\n\n  .talenta-main {\n    width: 100% ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    margin: 0 ;\n    flex: none ;\n    overflow: visible ;\n  }\n\n  .page {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    overflow-x: hidden ;\n    box-sizing: border-box ;\n  }\n\n  /* =======================================================\n     SIDEBAR\n     ======================================================= */\n\n  .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n\n    width: min(290px, 82vw) ;\n    min-width: 0 ;\n    max-width: min(290px, 82vw) ;\n    flex: 0 0 auto ;\n\n    height: 100dvh ;\n    min-height: 100dvh ;\n\n    overflow-x: hidden ;\n    overflow-y: auto ;\n\n    z-index: 9999 ;\n\n    transform: translateX(-105%) ;\n    transition: transform 0.22s ease ;\n\n    box-sizing: border-box ;\n  }\n\n  .sidebar.open,\n  .sidebar.is-open {\n    transform: translateX(0) ;\n  }\n\n  .sidebar.collapsed,\n  .sidebar.is-closed {\n    width: min(290px, 82vw) ;\n    min-width: 0 ;\n    flex-basis: auto ;\n    transform: translateX(-105%) ;\n  }\n\n  /* ===== JANGAN BIARKAN ELEMEN SIDEBAR MEMAKSA 1046/1100px ===== */\n\n  .sidebar *,\n  .sidebar .nav-group,\n  .sidebar .nav-group-items,\n  .sidebar .nav-title,\n  .sidebar .nav-item,\n  .sidebar .brand,\n  .sidebar .workspace,\n  .sidebar .admin-mini,\n  .sidebar .logout {\n    min-width: 0 ;\n    max-width: 100% ;\n    box-sizing: border-box ;\n  }\n\n  .sidebar .nav-group,\n  .sidebar .nav-group-items {\n    width: 100% ;\n  }\n\n  /* =======================================================\n     JUDUL GROUP SIDEBAR\n     UTAMA / PEOPLE / ABSENSI / PAYROLL\n     ======================================================= */\n\n  .sidebar .nav-title {\n    width: 100% ;\n    min-width: 0 ;\n    height: 34px ;\n    min-height: 34px ;\n\n    display: flex ;\n    align-items: center ;\n    justify-content: space-between ;\n\n    padding: 0 12px ;\n    margin: 0 ;\n\n    background: transparent ;\n    border: 0 ;\n    outline: 0 ;\n    box-shadow: none ;\n    border-radius: 0 ;\n\n    color: #c9a227 ;\n\n    font-size: 11px ;\n    font-weight: 700 ;\n    line-height: 1 ;\n  }\n\n  .sidebar .nav-title span {\n    min-width: 0 ;\n    color: #c9a227 ;\n    font-size: 11px ;\n    font-weight: 700 ;\n    white-space: nowrap ;\n  }\n\n  .sidebar .nav-title svg {\n    flex: 0 0 auto ;\n    width: 14px ;\n    height: 14px ;\n    color: #c9a227 ;\n  }\n\n  .sidebar .nav-title:hover,\n  .sidebar .nav-title:focus {\n    background: transparent ;\n    border: 0 ;\n    box-shadow: none ;\n  }\n\n  /* =======================================================\n     MENU SIDEBAR\n     ======================================================= */\n\n  .sidebar .nav-item {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100% ;\n\n    min-height: 38px ;\n    height: 38px ;\n\n    display: flex ;\n    align-items: center ;\n\n    padding: 0 12px ;\n    margin: 2px 0 ;\n\n    gap: 9px ;\n\n    border: 0 ;\n    border-left: 3px solid transparent ;\n    border-radius: 6px ;\n\n    background: transparent ;\n    box-shadow: none ;\n    outline: none ;\n\n    color: #cbd5e1 ;\n\n    font-size: 12px ;\n    font-weight: 500 ;\n\n    white-space: nowrap ;\n    overflow: hidden ;\n  }\n\n  .sidebar .nav-item > span {\n    display: block ;\n\n    min-width: 0 ;\n    max-width: 100% ;\n\n    overflow: hidden ;\n    white-space: nowrap ;\n    text-overflow: ellipsis ;\n\n    font-size: 12px ;\n    line-height: 1.2 ;\n  }\n\n  .sidebar .nav-item > svg {\n    flex: 0 0 18px ;\n    width: 18px ;\n    height: 18px ;\n  }\n\n  .sidebar .nav-item.active {\n    background: rgba(201, 162, 39, 0.12) ;\n    border-left-color: #c9a227 ;\n    color: #f0d98a ;\n    box-shadow: none ;\n  }\n\n  .sidebar .nav-item:hover {\n    background: rgba(255, 255, 255, 0.05) ;\n    box-shadow: none ;\n  }\n\n  /* =======================================================\n     DASHBOARD - FULL WIDTH\n     ======================================================= */\n\n  .page-heading,\n  .executive-dashboard,\n  .command-strip,\n  .stat-grid,\n  .dashboard-grid,\n  .dashboard-grid-top,\n  .dashboard-grid-bottom,\n  .panel,\n  .card,\n  .table-panel {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .executive-dashboard {\n    overflow-x: hidden ;\n  }\n\n  /* ===== STAT CARDS ===== */\n\n  .stat-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) ;\n  }\n\n  .stat-card {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100% ;\n    box-sizing: border-box ;\n  }\n\n  .stat-card > div {\n    min-width: 0 ;\n    max-width: 100% ;\n  }\n\n  .stat-card span,\n  .stat-card strong,\n  .stat-card small {\n    max-width: 100% ;\n    min-width: 0 ;\n  }\n\n  /* ===== DASHBOARD PANELS ===== */\n\n  .dashboard-grid-top,\n  .dashboard-grid-bottom {\n    grid-template-columns: minmax(0, 1fr) ;\n  }\n\n  .dashboard-grid-top > *,\n  .dashboard-grid-bottom > * {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100% ;\n  }\n\n  .panel {\n    overflow-x: hidden ;\n  }\n\n  /* ===== TABLE TETAP BISA GESER HORIZONTAL ===== */\n\n  .table-wrap,\n  .data-table-wrap {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n\n    overflow-x: auto ;\n    overflow-y: visible ;\n\n    -webkit-overflow-scrolling: touch ;\n  }\n}\n\n/* =========================================================\n   HP SANGAT KECIL\n   ========================================================= */\n\n@media (max-width: 560px) {\n  .page {\n    padding: 14px 12px 100px ;\n  }\n\n  .stat-grid {\n    grid-template-columns: 1fr ;\n  }\n\n  .sidebar {\n    width: min(280px, 84vw) ;\n    max-width: min(280px, 84vw) ;\n  }\n\n  .sidebar .nav-item {\n    min-height: 37px ;\n    height: 37px ;\n    font-size: 11px ;\n  }\n\n  .sidebar .nav-item > span {\n    font-size: 11px ;\n  }\n}\n\n/* =========================================================\n   FIX MOBILE - DETAIL BUTTON DI TABEL KARYAWAN\n   Jangan pecah menjadi D E T A I L\n   ========================================================= */\n@media (max-width: 899px) {\n  .table-panel .link-btn,\n  .table-wrap .link-btn {\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n    width: auto ;\n    min-width: 52px ;\n    max-width: none ;\n    height: 32px ;\n    min-height: 32px ;\n    padding: 0 10px ;\n    margin: 0 ;\n    white-space: nowrap ;\n    word-break: normal ;\n    overflow-wrap: normal ;\n    text-wrap: nowrap ;\n    writing-mode: horizontal-tb ;\n    text-orientation: mixed ;\n    flex: 0 0 auto ;\n    line-height: 1 ;\n    font-size: 10px ;\n    font-weight: 700 ;\n  }\n\n  .table-panel td:last-child,\n  .table-wrap td:last-child {\n    white-space: nowrap ;\n    width: 1% ;\n    min-width: 72px ;\n  }\n}\n\n/* =========================================================\n   THEME CONTRAST OVERRIDES\n   Project by Tirta\n   ========================================================= */\n\n.page-heading h1,\n.stat-card strong,\ntd {\n  color: var(--mx-text, #172033);\n}\n\n.stat-card span,\n.stat-card small,\nth,\n.form-grid label,\n.login-card label {\n  color: var(--mx-text-secondary, #667085);\n}\n\n.form-grid input,\n.form-grid select,\n.form-grid textarea,\n.login-card input,\n.login-card select,\n.login-card textarea {\n  background: var(--mx-control-bg, #ffffff);\n  color: var(--mx-control-text, #172033);\n  border-color: var(--mx-control-border, #d8dee8);\n}\n\n.form-grid input::placeholder,\n.form-grid textarea::placeholder,\n.login-card input::placeholder,\n.login-card textarea::placeholder {\n  color: var(--mx-text-muted, #98a2b3);\n}\n\n.form-grid input:focus,\n.form-grid select:focus,\n.form-grid textarea:focus,\n.login-card input:focus,\n.login-card select:focus,\n.login-card textarea:focus {\n  color: var(--mx-control-text, #172033);\n  border-color: var(--mx-focus, #2563eb);\n}\n\n.table-panel,\n.stat-card,\n.panel,\n.toolbar-panel,\n.role-list-item,\n.permission-item {\n  color: var(--mx-text, #172033);\n}\n\n.secondary {\n  background: var(--mx-control-bg, #ffffff) ;\n  color: var(--mx-control-text, #172033) ;\n  border-color: var(--mx-control-border, #d8dee8) ;\n}\n\n/* =========================================================\n   FINAL FIX — ADMIN SIDEBAR / MAIN CONTENT LAYOUT\n   Pastikan konten selalu berada di sebelah kanan sidebar.\n   ========================================================= */\n\n.talenta-shell {\n  display: flex ;\n  width: 100% ;\n  min-width: 0 ;\n  align-items: stretch ;\n}\n\n.talenta-shell > .sidebar {\n  flex: 0 0 268px ;\n  width: 268px ;\n  min-width: 268px ;\n  position: sticky ;\n  left: auto ;\n  top: 0 ;\n}\n\n.talenta-shell > .sidebar.collapsed {\n  flex-basis: 76px ;\n  width: 76px ;\n  min-width: 76px ;\n}\n\n.talenta-shell > .talenta-main {\n  flex: 1 1 auto ;\n  width: auto ;\n  min-width: 0 ;\n  margin-left: 0 ;\n  position: relative ;\n}\n\n.talenta-shell > .talenta-main > .page {\n  width: 100% ;\n  max-width: 1700px ;\n  min-width: 0 ;\n  margin-left: auto ;\n  margin-right: auto ;\n  box-sizing: border-box ;\n}\n\n@media (max-width: 700px) {\n  .talenta-shell > .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n    z-index: 1000 ;\n  }\n\n  .talenta-shell > .talenta-main {\n    margin-left: 268px ;\n    width: calc(100% - 268px) ;\n    min-width: 0 ;\n  }\n}\n\n/* =========================================================\n   FINAL ANDROID MOBILE OVERRIDE — V38\n   The dashboard must use the full phone viewport.\n   The previous legacy rules forced a 268px sidebar margin and\n   a 1046px topbar, which caused the desktop layout to be\n   squeezed into a narrow strip on Android WebView.\n   ========================================================= */\n@media (max-width: 899px) {\n  html,\n  body,\n  #root {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    overflow-x: hidden ;\n  }\n\n  .talenta-shell {\n    display: block ;\n    width: 100vw ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    margin: 0 ;\n    overflow-x: hidden ;\n    position: relative ;\n  }\n\n  .talenta-shell > .talenta-main,\n  .talenta-main {\n    display: block ;\n    width: 100% ;\n    max-width: 100vw ;\n    min-width: 0 ;\n    margin: 0 ;\n    flex: none ;\n    overflow-x: hidden ;\n  }\n\n  .talenta-shell > .talenta-main > .topbar,\n  .talenta-main > .topbar,\n  .topbar,\n  .topbar.talenta-main {\n    width: 100% ;\n    min-width: 0 ;\n    max-width: 100vw ;\n    margin: 0 ;\n    padding-left: max(14px, env(safe-area-inset-left)) ;\n    padding-right: max(14px, env(safe-area-inset-right)) ;\n    box-sizing: border-box ;\n  }\n\n  .talenta-shell > .talenta-main > .page,\n  .talenta-main > .page,\n  .page {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    margin: 0 ;\n    padding: 18px max(14px, env(safe-area-inset-left))\n      calc(100px + env(safe-area-inset-bottom))\n      max(14px, env(safe-area-inset-right)) ;\n    box-sizing: border-box ;\n    overflow-x: hidden ;\n  }\n\n  /* Sidebar is an overlay, never part of the mobile content width. */\n  .talenta-shell > .sidebar,\n  .sidebar {\n    position: fixed ;\n    left: 0 ;\n    top: 0 ;\n    bottom: 0 ;\n    z-index: 9999 ;\n    width: min(290px, 82vw) ;\n    min-width: 0 ;\n    max-width: 290px ;\n    height: 100dvh ;\n    margin: 0 ;\n    flex: none ;\n    transform: translateX(-105%) ;\n    transition: transform 0.22s ease ;\n    overflow-x: hidden ;\n    overflow-y: auto ;\n  }\n\n  .talenta-shell > .sidebar.open,\n  .sidebar.open,\n  .sidebar.is-open {\n    transform: translateX(0) ;\n  }\n\n  .talenta-shell > .sidebar.collapsed,\n  .sidebar.collapsed,\n  .sidebar.is-closed {\n    width: min(290px, 82vw) ;\n    min-width: 0 ;\n    flex-basis: auto ;\n    transform: translateX(-105%) ;\n  }\n\n  /* Prevent long desktop headings/buttons from creating a horizontal layout. */\n  .page-heading {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    flex-direction: column ;\n    align-items: stretch ;\n    gap: 12px ;\n  }\n\n  .page-heading > * {\n    min-width: 0 ;\n    max-width: 100% ;\n  }\n\n  .page-heading .primary,\n  .page-heading .secondary {\n    width: auto ;\n    max-width: 100% ;\n    align-self: flex-start ;\n    white-space: nowrap ;\n  }\n\n  .content-grid,\n  .dashboard-grid,\n  .stat-grid,\n  .mini-kpi-row,\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid,\n  .form-grid {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n  }\n\n  .content-grid {\n    grid-template-columns: minmax(0, 1fr) ;\n  }\n\n  .stat-grid,\n  .stat-grid.three,\n  .mini-kpi-row,\n  .org-grid,\n  .calendar-grid,\n  .feature-grid,\n  .report-grid,\n  .settings-grid,\n  .form-grid {\n    grid-template-columns: 1fr ;\n  }\n\n  .panel,\n  .stat-card,\n  .table-panel,\n  .form-panel,\n  .toolbar,\n  .filter-row {\n    min-width: 0 ;\n    max-width: 100% ;\n  }\n\n  .table-wrap,\n  .data-table-wrap {\n    max-width: 100% ;\n    overflow-x: auto ;\n    -webkit-overflow-scrolling: touch ;\n  }\n\n  .search-global {\n    width: min(150px, 38vw) ;\n    max-width: 38vw ;\n  }\n}\n\n/* =========================================================\n   V58 — UNIFIED PREMIUM FRAME / FEEDBACK / ANNOUNCEMENTS\n   ========================================================= */\n.admin-page-frame {\n  width: 100% ;\n  max-width: none ;\n  min-height: calc(100vh - 64px) ;\n  margin: 0 ;\n  padding: 24px 28px 34px ;\n  border: 1px solid rgba(34, 199, 201, 0.72) ;\n  border-top-color: rgba(34, 199, 201, 0.9) ;\n  border-radius: 0 ;\n  background:\n    radial-gradient(circle at 88% 8%, rgba(46, 105, 220, 0.1), transparent 34%),\n    linear-gradient(180deg, #071a40 0%, #081b42 48%, #071936 100%) ;\n  color: #f7f9fc ;\n  box-shadow:\n    inset 0 0 0 1px rgba(255, 255, 255, 0.025),\n    0 10px 30px rgba(0, 0, 0, 0.1) ;\n}\n\n.admin-page-frame > .loading {\n  z-index: 30;\n}\n\n/* Feedback list/detail */\n.feedback-module {\n  display: grid;\n  gap: 18px;\n}\n.feedback-list-card,\n.feedback-detail-card {\n  background:\n    radial-gradient(circle at 88% 0%, rgba(37, 99, 235, 0.2), transparent 32%),\n    linear-gradient(145deg, #102b61 0%, #092250 58%, #071b42 100%) ;\n  color: #f7f9fc ;\n  border: 1px solid rgba(63, 143, 255, 0.75) ;\n  border-radius: 16px ;\n  box-shadow:\n    0 12px 30px rgba(2, 12, 35, 0.28),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04) ;\n  overflow: hidden;\n}\n.feedback-card-title {\n  padding: 22px 22px 16px ;\n}\n.feedback-card-title h2 {\n  color: #fff ;\n  font-size: 22px ;\n  margin: 5px 0 5px ;\n  letter-spacing: -0.3px;\n}\n.feedback-card-title .muted {\n  color: #a9c2eb ;\n}\n.feedback-list-card > div:not(.card-title) {\n  margin: 0 22px 20px ;\n}\n.feedback-list-card input,\n.feedback-list-card select,\n.feedback-detail-card select,\n.feedback-detail-card textarea {\n  color: #eef5ff ;\n  background: rgba(4, 20, 52, 0.78) ;\n  border: 1px solid rgba(94, 154, 226, 0.62) ;\n  border-radius: 10px ;\n  outline: none ;\n}\n.feedback-list-card input,\n.feedback-list-card select {\n  min-height: 40px;\n  padding: 0 12px;\n}\n.feedback-list-card input::placeholder,\n.feedback-detail-card textarea::placeholder {\n  color: #91a9ce ;\n}\n.feedback-list-card input:focus,\n.feedback-list-card select:focus,\n.feedback-detail-card select:focus,\n.feedback-detail-card textarea:focus {\n  border-color: #58b9ff ;\n  box-shadow: 0 0 0 3px rgba(52, 143, 255, 0.15) ;\n}\n.feedback-list-card .data-table {\n  color: #eaf2ff;\n}\n.feedback-list-card .data-table th {\n  background: rgba(2, 16, 45, 0.48) ;\n  color: #a9c2eb ;\n  border-bottom: 1px solid rgba(95, 143, 205, 0.28) ;\n}\n.feedback-list-card .data-table td {\n  color: #eaf2ff ;\n  border-bottom: 1px solid rgba(95, 143, 205, 0.18) ;\n}\n.feedback-list-card .data-table tr:hover td {\n  background: rgba(255, 255, 255, 0.035) ;\n}\n.feedback-list-card .data-table .muted {\n  color: #91a9ce ;\n}\n.feedback-detail-card {\n  padding-bottom: 22px;\n}\n.feedback-message {\n  margin: 0 22px 18px ;\n  padding: 18px ;\n  border-radius: 12px ;\n  background: rgba(2, 17, 48, 0.42) ;\n  border: 1px solid rgba(82, 145, 216, 0.34) ;\n  color: #edf5ff ;\n  white-space: pre-wrap;\n  line-height: 1.7;\n}\n.feedback-form {\n  display: grid;\n  gap: 13px;\n  margin: 0 22px;\n}\n.feedback-field {\n  display: grid;\n  gap: 7px;\n  color: #dceaff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.feedback-control {\n  width: 100%;\n  min-height: 42px;\n  padding: 10px 12px;\n  font: inherit;\n}\n.feedback-textarea {\n  min-height: 125px;\n  resize: vertical;\n  line-height: 1.55;\n}\n.feedback-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  padding-top: 2px;\n}\n.feedback-detail-card .portal-primary,\n.feedback-detail-card .portal-secondary,\n.feedback-list-card .portal-secondary {\n  border-radius: 10px ;\n  min-height: 40px;\n  padding: 9px 15px ;\n}\n.feedback-detail-card .portal-secondary,\n.feedback-list-card .portal-secondary {\n  background: rgba(7, 29, 68, 0.55) ;\n  color: #eaf2ff ;\n  border: 1px solid rgba(105, 160, 226, 0.68) ;\n}\n.feedback-detail-card .portal-primary {\n  background: linear-gradient(135deg, #d6b56a, #e8d39b) ;\n  color: #0b1736 ;\n  border: 1px solid #f0dca4 ;\n  font-weight: 800 ;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: rgba(34, 160, 107, 0.17);\n  color: #8df0c4;\n  border: 1px solid rgba(81, 214, 158, 0.3);\n  font-size: 10px;\n  font-weight: 800;\n}\n\n/* Announcement manager — same visual language as Feedback */\n.announcement-module {\n  display: grid;\n  gap: 18px;\n}\n.announcement-hero,\n.announcement-compose,\n.announcement-list-card {\n  background:\n    radial-gradient(circle at 88% 0%, rgba(37, 99, 235, 0.18), transparent 32%),\n    linear-gradient(145deg, #102b61 0%, #092250 58%, #071b42 100%) ;\n  border: 1px solid rgba(63, 143, 255, 0.72);\n  border-radius: 16px;\n  color: #f7f9fc;\n  box-shadow:\n    0 12px 30px rgba(2, 12, 35, 0.25),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.announcement-hero {\n  padding: 22px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n}\n.announcement-kicker {\n  display: block;\n  color: #e8d39b;\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 1.5px;\n  margin-bottom: 5px;\n}\n.announcement-hero h2 {\n  margin: 0 0 5px;\n  color: #fff ;\n  font-size: 23px;\n  letter-spacing: -0.3px;\n}\n.announcement-hero p {\n  margin: 0;\n  color: #a9c2eb;\n  font-size: 12px;\n}\n.announcement-hero-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: rgba(214, 181, 106, 0.13);\n  border: 1px solid rgba(232, 211, 155, 0.45);\n  font-size: 23px;\n  flex: none;\n}\n.announcement-success,\n.announcement-error {\n  border-radius: 11px;\n  padding: 11px 14px;\n  font-size: 11px;\n}\n.announcement-success {\n  background: rgba(34, 160, 107, 0.13);\n  color: #8df0c4;\n  border: 1px solid rgba(81, 214, 158, 0.3);\n}\n.announcement-error {\n  background: rgba(217, 83, 79, 0.12);\n  color: #ffc1bd;\n  border: 1px solid rgba(217, 83, 79, 0.34);\n}\n.announcement-error div {\n  margin-top: 3px;\n}\n.announcement-compose,\n.announcement-list-card {\n  padding: 22px 24px;\n}\n.announcement-section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 18px;\n}\n.announcement-section-head h3 {\n  margin: 0;\n  color: #fff;\n  font-size: 17px;\n}\n.announcement-audience,\n.announcement-count {\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(74, 137, 229, 0.13);\n  color: #a9c8f3;\n  border: 1px solid rgba(88, 151, 231, 0.3);\n  font-size: 10px;\n  font-weight: 750;\n  white-space: nowrap;\n}\n.announcement-form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n}\n.announcement-field {\n  display: grid;\n  gap: 7px;\n  color: #dceaff;\n  font-size: 11px;\n  font-weight: 750;\n}\n.announcement-field-wide {\n  grid-column: 1/-1;\n}\n.announcement-field input,\n.announcement-field select,\n.announcement-field textarea {\n  width: 100%;\n  color: #eef5ff;\n  background: rgba(4, 20, 52, 0.78);\n  border: 1px solid rgba(94, 154, 226, 0.62);\n  border-radius: 10px;\n  padding: 10px 12px;\n  outline: none;\n  font: inherit;\n}\n.announcement-field input,\n.announcement-field select {\n  height: 42px;\n}\n.announcement-field textarea {\n  min-height: 145px;\n  resize: vertical;\n  line-height: 1.55;\n}\n.announcement-field input::placeholder,\n.announcement-field textarea::placeholder {\n  color: #91a9ce;\n}\n.announcement-field input:focus,\n.announcement-field select:focus,\n.announcement-field textarea:focus {\n  border-color: #58b9ff;\n  box-shadow: 0 0 0 3px rgba(52, 143, 255, 0.15);\n}\n.announcement-compose-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  margin-top: 17px;\n  padding-top: 15px;\n  border-top: 1px solid rgba(95, 143, 205, 0.2);\n}\n.announcement-pin {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: #b9cceb;\n  font-size: 11px;\n  cursor: pointer;\n}\n.announcement-pin input {\n  width: 16px;\n  height: 16px;\n  accent-color: #d6b56a;\n}\n.announcement-primary,\n.announcement-secondary,\n.announcement-archive {\n  min-height: 40px;\n  border-radius: 10px;\n  padding: 9px 15px;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.announcement-primary {\n  background: linear-gradient(135deg, #d6b56a, #e8d39b);\n  color: #0b1736;\n  border: 1px solid #f0dca4;\n}\n.announcement-secondary {\n  background: rgba(7, 29, 68, 0.55);\n  color: #eaf2ff;\n  border: 1px solid rgba(105, 160, 226, 0.68);\n}\n.announcement-archive {\n  background: transparent;\n  color: #a9c2eb;\n  border: 1px solid rgba(105, 160, 226, 0.38);\n}\n.announcement-list {\n  display: grid;\n  gap: 10px;\n}\n.announcement-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 15px;\n  border-radius: 12px;\n  background: rgba(3, 17, 47, 0.38);\n  border: 1px solid rgba(82, 145, 216, 0.3);\n}\n.announcement-item:hover {\n  border-color: rgba(88, 185, 255, 0.55);\n  background: rgba(8, 28, 62, 0.6);\n}\n.announcement-item-main {\n  min-width: 0;\n}\n.announcement-item-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.announcement-item-title-row strong {\n  color: #fff;\n  font-size: 13px;\n}\n.announcement-pinned {\n  color: #e8d39b;\n  font-size: 9px;\n  font-weight: 800;\n}\n.announcement-meta {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  margin-top: 6px;\n  color: #91a9ce;\n  font-size: 9px;\n  text-transform: capitalize;\n}\n.announcement-status {\n  padding: 3px 7px;\n  border-radius: 999px;\n  font-weight: 800;\n}\n.announcement-status.status-draft {\n  color: #dceaff;\n  background: rgba(148, 163, 184, 0.14);\n}\n.announcement-status.status-published {\n  color: #8df0c4;\n  background: rgba(34, 160, 107, 0.14);\n}\n.announcement-status.status-archived {\n  color: #b9cceb;\n  background: rgba(100, 116, 139, 0.14);\n}\n.announcement-item-actions {\n  display: flex;\n  gap: 7px;\n  flex: none;\n}\n.announcement-empty {\n  padding: 30px 15px;\n  text-align: center;\n  color: #91a9ce;\n  border: 1px dashed rgba(105, 160, 226, 0.35);\n  border-radius: 12px;\n}\n\n@media (max-width: 899px) {\n  .admin-page-frame {\n    padding: 18px 14px 100px ;\n    border-left: 0 ;\n    border-right: 0 ;\n    border-radius: 0 ;\n  }\n  .announcement-form-grid {\n    grid-template-columns: 1fr;\n  }\n  .announcement-field-wide {\n    grid-column: auto;\n  }\n  .announcement-compose-footer {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .announcement-primary {\n    width: 100%;\n  }\n  .announcement-item {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .announcement-item-actions {\n    width: 100%;\n  }\n  .announcement-item-actions button {\n    flex: 1;\n  }\n  .feedback-card-title {\n    flex-direction: column;\n  }\n  .feedback-card-title .portal-secondary {\n    align-self: flex-start;\n  }\n}\n\n/* =========================================================\n   FINAL FIX — EMPLOYEE DETAIL MODAL\n   Pastikan Detail Karyawan selalu berada di atas sidebar,\n   tidak terpotong, dan tetap responsif pada layar sempit.\n   ========================================================= */\n\n.export-backdrop {\n  z-index: 20000 ;\n  width: 100vw ;\n  max-width: 100vw ;\n  box-sizing: border-box ;\n}\n\n.employee-detail-card {\n  position: relative ;\n  z-index: 20001 ;\n  width: min(980px, calc(100vw - 40px)) ;\n  max-width: calc(100vw - 40px) ;\n  max-height: calc(100dvh - 40px) ;\n  box-sizing: border-box ;\n  display: flex ;\n  flex-direction: column ;\n}\n\n.employee-detail-card .employee-detail-grid {\n  width: 100% ;\n  min-width: 0 ;\n  box-sizing: border-box ;\n  overflow-x: hidden ;\n  overflow-y: auto ;\n}\n\n.employee-detail-card .detail-section {\n  min-width: 0 ;\n  overflow: hidden ;\n}\n\n.employee-detail-card .detail-item b {\n  min-width: 0 ;\n  max-width: 58% ;\n  overflow-wrap: anywhere ;\n  word-break: break-word ;\n}\n\n@media (max-width: 1050px) {\n  .employee-detail-card {\n    width: min(940px, calc(100vw - 32px)) ;\n    max-width: calc(100vw - 32px) ;\n  }\n\n  .employee-detail-grid {\n    grid-template-columns: 1fr ;\n  }\n\n  .employee-detail-card .detail-item b {\n    max-width: 62% ;\n  }\n}\n\n@media (max-width: 700px) {\n  .export-backdrop {\n    padding: 10px ;\n  }\n\n  .employee-detail-card {\n    width: calc(100vw - 20px) ;\n    max-width: calc(100vw - 20px) ;\n    max-height: calc(100dvh - 20px) ;\n    border-radius: 15px ;\n  }\n\n  .employee-detail-grid {\n    grid-template-columns: 1fr ;\n    max-height: none ;\n  }\n\n  .employee-detail-card .detail-item {\n    gap: 10px ;\n  }\n\n  .employee-detail-card .detail-item span,\n  .employee-detail-card .detail-item b {\n    max-width: none ;\n  }\n}\n\n/* =========================================================\n   THEME-AWARE SIDEBAR — FINAL OVERRIDE\n   DashboardAdmin memakai .sidebar\n   Warna mengikuti tema yang dipilih secara manual.\n   ========================================================= */\n\n.sidebar {\n  background: var(--mx-sidebar) ;\n  color: var(--mx-sidebar-text) ;\n  border-right: 1px solid color-mix(in srgb, var(--mx-border) 55%, transparent) ;\n}\n\n.sidebar .sidebar-head,\n.sidebar .sidebar-head b,\n.sidebar .sidebar-head small,\n.sidebar .brand,\n.sidebar .brand b,\n.sidebar .brand small,\n.sidebar .group-title,\n.sidebar .workspace,\n.sidebar .workspace b,\n.sidebar .workspace small,\n.sidebar .admin-mini,\n.sidebar .admin-mini b,\n.sidebar .admin-mini small {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .sidebar-head small,\n.sidebar .brand small,\n.sidebar .group-title,\n.sidebar .workspace small,\n.sidebar .admin-mini small {\n  color: var(--mx-sidebar-muted) ;\n}\n\n.sidebar .workspace {\n  background: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 6%,\n    var(--mx-sidebar)\n  ) ;\n  border: 1px solid color-mix(in srgb, var(--mx-sidebar-text) 18%, transparent) ;\n}\n\n.sidebar .workspace b {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .nav-item {\n  background: transparent ;\n  color: var(--mx-sidebar-text) ;\n  border-color: transparent ;\n}\n\n.sidebar .nav-item span,\n.sidebar .nav-item svg {\n  color: inherit ;\n  stroke: currentColor ;\n}\n\n.sidebar .nav-item em {\n  background: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 12%,\n    transparent\n  ) ;\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .admin-mini {\n  border-top-color: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 14%,\n    transparent\n  ) ;\n}\n\n.sidebar .logout {\n  color: var(--mx-danger) ;\n}\n\n.sidebar .logout:hover {\n  background: color-mix(in srgb, var(--mx-danger) 14%, transparent) ;\n  color: var(--mx-sidebar-text) ;\n}\n\n/* Icon menu selalu mengikuti warna teks */\n.sidebar .nav-icon {\n  color: inherit ;\n}\n\n/* Tombol/menu ketika sidebar aktif */\n.sidebar .nav-item.active .nav-icon {\n  color: inherit ;\n}\n\n/* Header/topbar juga mengikuti tema */\n.topbar,\n.talenta-main .topbar {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-bottom-color: var(--mx-border) ;\n}\n\n.topbar .icon-btn {\n  color: var(--mx-text-secondary) ;\n}\n\n.topbar .icon-btn:hover {\n  background: color-mix(in srgb, var(--mx-text) 7%, transparent) ;\n  color: var(--mx-text) ;\n}\n\n/* Search mengikuti tema */\n.search-global {\n  background: var(--mx-control-bg) ;\n  border-color: var(--mx-control-border) ;\n  color: var(--mx-control-text) ;\n}\n\n.search-global input {\n  color: var(--mx-control-text) ;\n}\n\n.search-global input::placeholder {\n  color: var(--mx-text-muted) ;\n}\n\n/* =========================================================\n   AUTOMATIC THEME TEXT CONTRAST\n   Project by Tirta\n   ========================================================= */\n\n.talenta-shell,\n.talenta-main,\n.page,\n.page-content,\n.content-area {\n  color: var(--mx-text) ;\n}\n\n.page h1,\n.page h2,\n.page h3,\n.page h4,\n.page h5,\n.page h6 {\n  color: var(--mx-text) ;\n}\n\n.page p {\n  color: var(--mx-text-secondary) ;\n}\n\n.page label {\n  color: var(--mx-text-secondary) ;\n}\n\n.page th {\n  color: var(--mx-text-secondary) ;\n}\n\n.page td {\n  color: var(--mx-text-secondary) ;\n}\n\n.page td b,\n.page td strong {\n  color: var(--mx-text) ;\n}\n\n.stat-card,\n.mini-kpi,\n.panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card {\n  color: var(--mx-text) ;\n}\n\n.stat-card span,\n.stat-card small,\n.mini-kpi span,\n.report-card span {\n  color: var(--mx-text-muted) ;\n}\n\n.page input,\n.page textarea,\n.page select {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n.page input::placeholder,\n.page textarea::placeholder {\n  color: var(--mx-text-muted) ;\n}\n\n.secondary {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n.sidebar,\n.talenta-sidebar {\n  background: var(--mx-sidebar) ;\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .nav-item,\n.talenta-sidebar .nav-item {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .nav-item:hover,\n.talenta-sidebar .nav-item:hover {\n  color: var(--mx-sidebar-active-text) ;\n}\n\n.sidebar .nav-item.active,\n.talenta-sidebar .nav-item.active {\n  color: var(--mx-sidebar-active-text) ;\n}\n\n.sidebar .nav-item.active span,\n.sidebar .nav-item.active svg,\n.talenta-sidebar .nav-item.active span,\n.talenta-sidebar .nav-item.active svg {\n  color: var(--mx-sidebar-active-text) ;\n  stroke: currentColor ;\n}\n\n.topbar {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n}\n\n.topbar .icon-btn,\n.topbar .crumb,\n.topbar .crumb span {\n  color: var(--mx-text-secondary) ;\n}\n\n/* =========================================================\n   THEME OVERRIDE — DashboardAdmin\n   Warna sidebar dan teks mengikuti tema aktif\n   ========================================================= */\n\n.sidebar,\n.sidebar.collapsed {\n  background: var(--mx-sidebar) ;\n  color: var(--mx-sidebar-text) ;\n  border-right-color: var(--mx-border) ;\n}\n\n.sidebar .sidebar-head,\n.sidebar .sidebar-head *,\n.sidebar .brand,\n.sidebar .brand *,\n.sidebar .brand b,\n.sidebar .brand small {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .group-title,\n.sidebar .nav-title {\n  color: var(--mx-sidebar-muted) ;\n}\n\n.sidebar .nav-item *,\n.sidebar .nav-item svg {\n  color: inherit ;\n  stroke: currentColor ;\n}\n\n.sidebar .nav-item:hover {\n  background: color-mix(\n    in srgb,\n    var(--mx-sidebar-active) 18%,\n    transparent\n  ) ;\n  color: var(--mx-sidebar-text) ;\n  border-color: color-mix(\n    in srgb,\n    var(--mx-accent) 55%,\n    transparent\n  ) ;\n}\n\n.sidebar .nav-item.active {\n  background: var(--mx-sidebar-active) ;\n  color: var(--mx-sidebar-active-text) ;\n  border-color: var(--mx-accent) ;\n  box-shadow: 0 0 12px color-mix(in srgb, var(--mx-accent) 22%, transparent) ;\n}\n\n.sidebar .nav-item.active *,\n.sidebar .nav-item.active svg {\n  color: var(--mx-sidebar-active-text) ;\n  stroke: currentColor ;\n}\n\n.sidebar .workspace small {\n  color: var(--mx-sidebar-muted) ;\n}\n\n.sidebar .admin-mini b {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .admin-mini small {\n  color: var(--mx-sidebar-muted) ;\n}\n\n.sidebar .logout {\n  color: var(--mx-sidebar-text) ;\n}\n\n.sidebar .logout:hover {\n  background: color-mix(in srgb, #ef4444 18%, transparent) ;\n  color: #fecaca ;\n}\n\n/* Konten utama */\n.talenta-shell,\n.talenta-main {\n  color: var(--mx-text) ;\n}\n\n.page,\n.page-content,\n.content-area {\n  background: var(--mx-background) ;\n  color: var(--mx-text) ;\n}\n\n.page h1,\n.page h2,\n.page h3,\n.page h4,\n.page h5,\n.page h6,\n.page p,\n.page label,\n.page span,\n.page td,\n.page th {\n  color: var(--mx-text) ;\n}\n\n.page p,\n.page small,\n.page .muted,\n.page .panel-head p {\n  color: var(--mx-text-secondary) ;\n}\n\n.topbar *,\n.topbar .icon-btn {\n  color: var(--mx-text) ;\n}\n\n.search-global {\n  background: var(--mx-control-bg) ;\n  border-color: var(--mx-control-border) ;\n}\n\n.panel,\n.stat-card,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.form-panel {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n/* === FINAL THEME OVERRIDE - AUTO CONTRAST === */\n\n/* Main application */\n.talenta-shell,\n.talenta-main {\n  color: var(--mx-text) ;\n}\n\n/* Main text */\n.page h1,\n.page h2,\n.page h3,\n.page h4,\n.page h5,\n.page h6 {\n  color: var(--mx-text) ;\n}\n\n.page p,\n.page label,\n.page td,\n.page th {\n  color: var(--mx-text-secondary) ;\n}\n\n.page td b,\n.page td strong,\n.page .stat-card strong,\n.page .mini-kpi b {\n  color: var(--mx-text) ;\n}\n\n/* Cards */\n.panel,\n.stat-card,\n.mini-kpi,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.form-panel {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n/* Sidebar */\n.sidebar,\n.sidebar.collapsed {\n  background: var(--mx-sidebar) ;\n  color: var(--mx-sidebar-text) ;\n  border-right-color: var(--mx-border) ;\n}\n\n.sidebar .nav-item,\n.sidebar .nav-item *,\n.sidebar .nav-item svg {\n  color: inherit ;\n  stroke: currentColor ;\n}\n\n.sidebar .nav-item:hover {\n  background: color-mix(\n    in srgb,\n    var(--mx-sidebar-active) 18%,\n    transparent\n  ) ;\n\n  color: var(--mx-sidebar-text) ;\n\n  border-color: color-mix(\n    in srgb,\n    var(--mx-accent) 55%,\n    transparent\n  ) ;\n}\n\n.sidebar .nav-item.active {\n  background: var(--mx-sidebar-active) ;\n  color: var(--mx-sidebar-active-text) ;\n  border-color: var(--mx-accent) ;\n\n  box-shadow: 0 0 12px color-mix(in srgb, var(--mx-accent) 22%, transparent) ;\n}\n\n.sidebar .workspace {\n  background: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 7%,\n    var(--mx-sidebar)\n  ) ;\n\n  color: var(--mx-sidebar-muted) ;\n\n  border-color: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 18%,\n    transparent\n  ) ;\n}\n\n.sidebar .admin-mini {\n  border-top-color: color-mix(\n    in srgb,\n    var(--mx-sidebar-text) 16%,\n    transparent\n  ) ;\n}\n\n/* Topbar */\n.topbar {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-bottom-color: var(--mx-border) ;\n}\n\n/* Forms */\n.page input,\n.page textarea,\n.page select {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n/* Search */\n.search-global {\n  background: var(--mx-control-bg) ;\n  border-color: var(--mx-control-border) ;\n}\n\n/* === CARD TEXT AUTO-CONTRAST === */\n\n.panel,\n.stat-card,\n.mini-kpi,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.form-panel {\n  color: var(--mx-text) ;\n}\n\n.panel h1,\n.panel h2,\n.panel h3,\n.panel h4,\n.panel h5,\n.panel h6,\n.stat-card strong,\n.mini-kpi b,\n.org-card h3,\n.calendar-card h3,\n.feature-card h3,\n.report-card b,\n.setting-card h3 {\n  color: var(--mx-text) ;\n}\n\n.panel p,\n.panel small,\n.panel label,\n.stat-card span,\n.stat-card small,\n.mini-kpi span,\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.report-card span,\n.setting-card p {\n  color: var(--mx-text-secondary) ;\n}\n\n.panel td,\n.panel th,\n.stat-card,\n.mini-kpi,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card {\n  border-color: var(--mx-border) ;\n}\n\n.table-wrap th {\n  background: var(--mx-surface-alt) ;\n  color: var(--mx-text-secondary) ;\n}\n\n.table-wrap td {\n  background: var(--mx-surface) ;\n  color: var(--mx-text-secondary) ;\n}\n\n.table-wrap td b {\n  color: var(--mx-text) ;\n}\n\n/* Quick actions */\n.quick-action {\n  color: var(--mx-text) ;\n  border-top-color: var(--mx-border) ;\n}\n\n.quick-action > span:last-child {\n  color: var(--mx-text-muted) ;\n}\n\n.quick-icon {\n  background: color-mix(\n    in srgb,\n    var(--mx-primary) 10%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-primary) ;\n}\n\n/* Form/card controls */\n.setting-card input,\n.setting-card select,\n.setting-card textarea,\n.form-panel input,\n.form-panel select,\n.form-panel textarea {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n/* Jangan mengubah warna status semantik */\n.status.green {\n  color: #087443 ;\n}\n.status.red {\n  color: #b42318 ;\n}\n.status.orange {\n  color: #b45309 ;\n}\n.status.blue {\n  color: #1d4ed8 ;\n}\n\n/* =========================================================\n   FINAL CARD CONTRAST FIX\n   Semua teks card mengikuti tema aktif\n   ========================================================= */\n\n.page .panel,\n.page .stat-card,\n.page .mini-kpi,\n.page .org-card,\n.page .calendar-card,\n.page .feature-card,\n.page .report-card,\n.page .setting-card,\n.page .form-panel {\n  color: var(--mx-text) ;\n}\n\n/* Heading card */\n.page .panel h1,\n.page .panel h2,\n.page .panel h3,\n.page .panel h4,\n.page .panel h5,\n.page .panel h6,\n.page .stat-card strong,\n.page .mini-kpi b,\n.page .org-card h3,\n.page .calendar-card h3,\n.page .feature-card h3,\n.page .report-card b,\n.page .setting-card h3 {\n  color: var(--mx-text) ;\n}\n\n/* Isi card */\n.page .panel p,\n.page .panel span,\n.page .panel label,\n.page .panel div,\n.page .stat-card span,\n.page .stat-card small,\n.page .mini-kpi span,\n.page .org-card p,\n.page .calendar-card p,\n.page .feature-card p,\n.page .report-card p,\n.page .report-card span,\n.page .setting-card p {\n  color: var(--mx-text-secondary) ;\n}\n\n/* Angka utama */\n.page .stat-card strong,\n.page .mini-kpi b,\n.page .report-card > b {\n  color: var(--mx-text) ;\n}\n\n/* Judul/heading kecil */\n.page .eyebrow,\n.page .panel .eyebrow {\n  color: var(--mx-accent) ;\n}\n\n/* Progress / chart tetap menggunakan warna visualnya */\n.page .progress span,\n.page .bars i {\n  color: inherit ;\n}\n\n/* Status tetap semantik */\n.page .status.green {\n  background: #ecfdf3 ;\n  color: #087443 ;\n}\n\n.page .status.red {\n  background: #fef2f2 ;\n  color: #b42318 ;\n}\n\n.page .status.orange {\n  background: #fff7ed ;\n  color: #b45309 ;\n}\n\n.page .status.blue {\n  background: #eff6ff ;\n  color: #1d4ed8 ;\n}\n\n/* Badge */\n.page .badge-soft {\n  background: color-mix(\n    in srgb,\n    var(--mx-primary) 10%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-text-secondary) ;\n}\n\n/* Tombol di dalam card */\n.page .panel button:not(.primary):not(.secondary),\n.page .stat-card button:not(.primary):not(.secondary),\n.page .setting-card button:not(.primary):not(.secondary) {\n  color: var(--mx-text) ;\n}\n\n/* Input / select / textarea */\n.page .panel input,\n.page .panel select,\n.page .panel textarea,\n.page .form-panel input,\n.page .form-panel select,\n.page .form-panel textarea {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n/* ===== CANONICAL DARK ENTERPRISE CARD THEME =====\n   Single source of truth for dark cards.\n   Do not add hard-coded card colors below this section.\n*/\n\n:root {\n  --mx-background: #101827;\n  --mx-surface: #0b132b;\n  --mx-surface-alt: #172033;\n  --mx-text: #f8fafc;\n  --mx-text-secondary: #cbd5e1;\n  --mx-text-muted: #94a3b8;\n  --mx-border: #334155;\n  --mx-accent: #d6ae58;\n  --mx-control-bg: #172033;\n  --mx-control-text: #f8fafc;\n}\n\n/* Page */\nhtml,\nbody,\n#root,\n.talenta-shell,\n.talenta-main,\n.admin-main,\n.dashboard-main,\n.page-content,\n.content-area,\n.page {\n  background: var(--mx-background) ;\n  color: var(--mx-text) ;\n}\n\n/* CANONICAL DARK ENTERPRISE CARD THEME */\n\n/* Card surfaces */\n.panel,\n.stat-card,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.employee-detail-card,\n.profile-panel,\n.card,\n.theme-card,\n.branch-nav,\n.table-panel,\n.toolbar-panel,\n.form-panel,\n.quick,\n.mini-kpi {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n/* Main card headings */\n.panel h1,\n.panel h2,\n.panel h3,\n.panel h4,\n.panel h5,\n.panel h6,\n.panel-head h2,\n.quick h2,\n.settings h2,\n.stat-card strong,\n.stat-card b,\n.org-card h3,\n.calendar-card h3,\n.feature-card h3,\n.report-card b,\n.setting-card h3,\n.employee-detail-card h2,\n.employee-detail-card h3,\n.profile-panel h3,\n.card h1,\n.card h2,\n.card h3 {\n  color: var(--mx-text) ;\n}\n\n/* Secondary card text */\n.panel p,\n.panel small,\n.panel label,\n.panel span,\n.stat-card span,\n.stat-card small,\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.report-card span,\n.setting-card p,\n.employee-detail-card p,\n.profile-panel p,\n.card p,\n.card small,\n.card span {\n  color: var(--mx-text-secondary) ;\n}\n\n/* Muted text */\n.panel .muted,\n.panel .text-muted,\n.stat-card .muted,\n.stat-card .text-muted,\n.org-card .muted,\n.calendar-card .muted,\n.feature-card .muted,\n.report-card .muted,\n.setting-card .muted,\n.card .muted,\n.card .text-muted {\n  color: var(--mx-text-muted) ;\n}\n\n/* Card tables */\n.panel table,\n.panel td,\n.panel th,\n.stat-card table,\n.stat-card td,\n.stat-card th,\n.org-card table,\n.org-card td,\n.org-card th,\n.calendar-card table,\n.calendar-card td,\n.calendar-card th,\n.feature-card table,\n.feature-card td,\n.feature-card th,\n.report-card table,\n.report-card td,\n.report-card th,\n.setting-card table,\n.setting-card td,\n.setting-card th {\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n.panel th,\n.org-card th,\n.report-card th,\n.calendar-card th,\n.feature-card th,\n.setting-card th {\n  background: color-mix(\n    in srgb,\n    var(--mx-surface-alt) 88%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-text-secondary) ;\n}\n\n.panel tr:hover td,\n.org-card tr:hover td,\n.report-card tr:hover td,\n.calendar-card tr:hover td,\n.feature-card tr:hover td,\n.setting-card tr:hover td {\n  background: color-mix(\n    in srgb,\n    var(--mx-accent) 8%,\n    var(--mx-surface)\n  ) ;\n  color: var(--mx-text) ;\n}\n\n/* Card form controls */\n.panel input,\n.panel select,\n.panel textarea,\n.stat-card input,\n.stat-card select,\n.stat-card textarea,\n.org-card input,\n.org-card select,\n.org-card textarea,\n.calendar-card input,\n.calendar-card select,\n.calendar-card textarea,\n.feature-card input,\n.feature-card select,\n.feature-card textarea,\n.report-card input,\n.report-card select,\n.report-card textarea,\n.setting-card input,\n.setting-card select,\n.setting-card textarea,\n.card input,\n.card select,\n.card textarea {\n  background: var(--mx-control-bg) ;\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n.panel input::placeholder,\n.panel textarea::placeholder,\n.card input::placeholder,\n.card textarea::placeholder {\n  color: var(--mx-text-muted) ;\n}\n\n/* Card buttons */\n.panel button,\n.stat-card button,\n.org-card button,\n.calendar-card button,\n.feature-card button,\n.report-card button,\n.setting-card button,\n.card button {\n  color: var(--mx-control-text) ;\n  border-color: var(--mx-control-border) ;\n}\n\n/* Card links */\n.panel a,\n.stat-card a,\n.org-card a,\n.calendar-card a,\n.feature-card a,\n.report-card a,\n.setting-card a,\n.card a {\n  color: var(--mx-accent) ;\n}\n\n/* Preserve readable status colors */\n.card .status,\n.panel .status,\n.stat-card .status,\n.org-card .status,\n.report-card .status {\n  color: var(--mx-text) ;\n}\n\n/* END CANONICAL DARK ENTERPRISE CARD THEME */\n\n/* ================= V37 DASHBOARD LAYOUT FIX ================= */\n/* Keep the executive dashboard composition independent from\n   generic dashboard-grid rules used by other modules. */\n\n.executive-dashboard .dashboard-grid-top {\n  grid-template-columns: minmax(0, 1.55fr) minmax(290px, 0.75fr);\n}\n\n.executive-dashboard .dashboard-grid-bottom {\n  grid-template-columns: minmax(0, 1fr) 285px;\n}\n\n@media (max-width: 1100px) {\n  .executive-dashboard .dashboard-grid-top,\n  .executive-dashboard .dashboard-grid-bottom {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .executive-dashboard .dashboard-grid-top,\n  .executive-dashboard .dashboard-grid-bottom {\n    display: flex ;\n    flex-direction: column ;\n    gap: 14px ;\n  }\n\n  .executive-dashboard .executive-stats {\n    grid-template-columns: 1fr ;\n  }\n\n  .executive-dashboard .command-strip {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .executive-dashboard .strip-meta {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .executive-dashboard .health-legend {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* FLOATING_NOTIFICATION_GROUP_START */\n.admin-floating-notification-group {\n  position: fixed;\n  top: 14px;\n  right: 170px;\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  pointer-events: none;\n}\n\n.admin-floating-action {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  border: 1px solid var(--mx-border, #d6ae58);\n  border-radius: 50%;\n  background: var(--mx-surface, #fff);\n  color: var(--mx-text, #172033);\n  box-shadow: 0 7px 22px rgba(0, 0, 0, .20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  pointer-events: auto;\n  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;\n}\n\n.admin-floating-action:hover,\n.admin-floating-action.active {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 26px rgba(0, 0, 0, .25);\n}\n\n.admin-floating-action:active {\n  transform: translateY(0) scale(.98);\n}\n\n.admin-floating-action-icon {\n  font-size: 29px;\n  line-height: 1;\n}\n\n.admin-floating-action-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 23px;\n  height: 23px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: #e53935;\n  color: #fff;\n  border: 2px solid var(--mx-surface, #fff);\n  font-size: 11px;\n  font-weight: 800;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n.admin-notification-dropdown {\n  position: absolute;\n  top: 66px;\n  right: 0;\n  width: min(390px, calc(100vw - 24px));\n  max-height: 520px;\n  overflow: hidden;\n  border: 1px solid var(--mx-border, #d6ae58);\n  border-radius: 18px;\n  background: var(--mx-surface, #fff);\n  color: var(--mx-text, #172033);\n  box-shadow: 0 18px 50px rgba(0, 0, 0, .24);\n  pointer-events: auto;\n}\n\n.admin-notification-dropdown-head {\n  padding: 15px 17px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, .08);\n}\n\n.admin-notification-dropdown-head strong {\n  font-size: 15px;\n}\n\n.admin-notification-dropdown-head span {\n  font-size: 12px;\n  opacity: .7;\n}\n\n.admin-notification-dropdown-list {\n  max-height: 390px;\n  overflow-y: auto;\n}\n\n.admin-notification-dropdown-item {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  padding: 13px 15px;\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, .06);\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n\n.admin-notification-dropdown-item:hover,\n.admin-notification-dropdown-item.unread {\n  background: rgba(214, 174, 88, .10);\n}\n\n.admin-notification-dropdown-avatar {\n  flex: 0 0 38px;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(214, 174, 88, .14);\n  font-size: 21px;\n}\n\n.admin-notification-dropdown-copy {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.admin-notification-dropdown-copy strong {\n  font-size: 13px;\n  line-height: 1.3;\n}\n\n.admin-notification-dropdown-copy small {\n  font-size: 11px;\n  opacity: .62;\n}\n\n.admin-notification-dropdown-copy span {\n  font-size: 12px;\n  line-height: 1.45;\n  opacity: .84;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.admin-notification-empty {\n  padding: 28px 18px;\n  text-align: center;\n  opacity: .65;\n  font-size: 13px;\n}\n\n.admin-notification-dropdown-all {\n  width: 100%;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, .08);\n  background: transparent;\n  color: inherit;\n  font-weight: 700;\n  padding: 13px;\n  cursor: pointer;\n}\n\n@media (max-width: 1100px) {\n  .admin-floating-notification-group {\n    right: 110px;\n  }\n}\n\n@media (max-width: 700px) {\n  .admin-floating-notification-group {\n    top: 58px;\n    right: 10px;\n    gap: 7px;\n  }\n\n  .admin-floating-action {\n    width: 52px;\n    height: 52px;\n  }\n\n  .admin-floating-action-icon {\n    font-size: 27px;\n  }\n\n  .admin-notification-dropdown {\n    top: 60px;\n    right: -2px;\n    width: min(370px, calc(100vw - 20px));\n  }\n}\n/* FLOATING_NOTIFICATION_GROUP_END */\n\n\n\n/* ATTENDANCE_UNIFIED_START */\n.attendance-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 10px;\n  margin: 16px 0;\n}\n\n.attendance-summary-grid .stat-card {\n  min-width: 0;\n}\n\n.attendance-filter-grid {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.attendance-filter-grid label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.attendance-filter-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.attendance-media-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  margin-top: 18px;\n}\n\n.attendance-media-grid img {\n  display: block;\n  width: 100%;\n  max-height: 360px;\n  object-fit: contain;\n  border-radius: 14px;\n  margin-top: 8px;\n  background: #f5f5f5;\n}\n\n@media (max-width: 1100px) {\n  .attendance-summary-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .attendance-filter-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 700px) {\n  .attendance-summary-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .attendance-filter-grid,\n  .attendance-media-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/* ATTENDANCE_UNIFIED_END */\n\n\n/* =========================================================\n   PROJECT BY TIRTA — TOPBAR + GLOBAL READABILITY PATCH\n   ========================================================= */\n.topbar { gap: 18px; }\n\n.topbar-left {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.topbar > .search-global {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: min(420px, 40vw);\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\n.topbar > .search-global input { color: var(--mx-text) ; }\n\n.top-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  flex-shrink: 0;\n}\n\n.topbar,\n.page,\n.talenta-shell,\n.talenta-main,\n.admin-page-frame,\n.panel,\n.card,\n.stat-card,\n.mini-kpi,\n.quick,\n.table-panel,\n.form-panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.profile-panel,\n.profile-menu,\n.role-menu,\n.theme-card,\n.custom-theme-panel {\n  color: var(--mx-text) ;\n}\n\n.page,\n.talenta-shell,\n.talenta-main,\n.admin-page-frame { background: var(--mx-background) ; }\n\n.panel,\n.card,\n.stat-card,\n.mini-kpi,\n.quick,\n.table-panel,\n.form-panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.profile-panel,\n.profile-menu,\n.role-menu,\n.theme-card,\n.custom-theme-panel {\n  background: var(--mx-surface) ;\n  border-color: var(--mx-border) ;\n}\n\n.profile-menu,\n.role-menu,\n.export-card,\n.employee-detail-card,\n.admin-notification-dropdown {\n  color: var(--mx-text) ;\n  background: var(--mx-surface) ;\n  border-color: var(--mx-border) ;\n}\n\n.profile-menu button,\n.role-menu button,\n.admin-notification-dropdown-item,\n.admin-notification-dropdown-all { color: var(--mx-text-secondary) ; }\n\n.profile-menu button:hover,\n.role-menu button:hover,\n.role-menu button.selected,\n.admin-notification-dropdown-item:hover,\n.admin-notification-dropdown-item.unread,\n.admin-notification-dropdown-all:hover {\n  background: color-mix(in srgb, var(--mx-accent) 10%, var(--mx-surface)) ;\n  color: var(--mx-text) ;\n}\n\n.form-grid label,\n.profile-field,\n.detail-item span,\n.table-wrap th,\n.toolbar,\n.toolbar label,\n.filter,\n.search-box,\nlabel { color: var(--mx-text-secondary) ; }\n\ninput,\nselect,\ntextarea,\n.form-grid input,\n.form-grid select,\n.form-grid textarea,\n.search-global {\n  background: var(--mx-surface) ;\n  color: var(--mx-text) ;\n  border-color: var(--mx-border) ;\n}\n\ninput::placeholder,\ntextarea::placeholder,\n.search-global input::placeholder { color: var(--mx-text-muted) ; }\n\n@media (max-width: 900px) {\n  .topbar > .search-global { width: min(320px, 35vw); }\n  .topbar-left .crumb span,\n  .topbar-left .crumb b { display: none; }\n}\n\n@media (max-width: 700px) {\n  .topbar { padding: 0 12px; gap: 10px; }\n  .topbar-left { gap: 10px; }\n  .topbar > .search-global { width: min(280px, 43vw); }\n  .top-actions { gap: 8px; }\n}\n\n@media (max-width: 520px) {\n  .topbar { display: flex; }\n  .topbar > .search-global {\n    position: static;\n    order: 2;\n    transform: none;\n    flex: 1 1 auto;\n    width: auto;\n    min-width: 0;\n  }\n  .topbar-left { order: 1; flex: 0 0 auto; }\n  .top-actions { order: 3; }\n}\n\n/* =========================================================\n   PROJECT BY TIRTA — FIXED EXECUTIVE FRAME\n   Theme choice changes ONLY the main page background.\n   Cards/sidebar keep the Navy + Silver + Gold identity.\n   ========================================================= */\n:root {\n  --frame-card-bg: #101827;\n  --frame-card-bg-2: #0b132b;\n  --frame-card-text: #e2e5ea;\n  --frame-card-muted: #aeb7c5;\n  --frame-card-border: #d6ae58;\n  --frame-sidebar-bg: #070f20;\n  --frame-sidebar-text: #eef1f5;\n  --frame-sidebar-muted: #aeb7c5;\n  --frame-sidebar-active: #d6ae58;\n  --frame-sidebar-active-text: #0b1222;\n}\n\n.talenta-shell,\n.talenta-main,\n.page,\n.page-content,\n.content-area {\n  background: var(--mx-background) ;\n  color: var(--mx-page-text, #172033) ;\n}\n\n.topbar {\n  background: var(--frame-card-bg) ;\n  color: var(--frame-card-text) ;\n  border-bottom: 2px solid var(--frame-card-border) ;\n}\n\n.topbar .icon-btn,\n.topbar .crumb,\n.topbar .crumb span,\n.topbar .crumb b {\n  color: var(--frame-card-muted) ;\n}\n\n/* Every primary admin card uses the same dark/silver/gold frame. */\n.panel,\n.card,\n.stat-card,\n.mini-kpi,\n.quick,\n.table-panel,\n.toolbar-panel,\n.form-panel,\n.org-card,\n.calendar-card,\n.feature-card,\n.report-card,\n.setting-card,\n.employee-detail-card,\n.employee-loading-card,\n.export-card,\n.attendance-card,\n.info-card,\n.payslip-card,\n.table-card,\n.action-card,\n.info-box,\n.detail-section,\n.compact-panel,\n.kanban-card,\n.permission-section,\n.custom-theme-panel,\n.theme-card,\n.id-card-pratinjau-panel,\n.id-card-list,\n.security-box,\n.feedback-card-title,\n.feedback-detail-card,\n.feedback-list-card,\n.announcement-list-card,\n.announcement-module,\n.module-page,\n.runtime-error-card {\n  background: var(--frame-card-bg) ;\n  color: var(--frame-card-text) ;\n  border: 2px solid var(--frame-card-border) ;\n  box-shadow: 0 12px 32px rgba(0,0,0,.18) ;\n}\n\n/* Nested mini-panels stay dark, with a restrained gold frame. */\n.attendance-meta > div,\n.quick-list button,\n.schedule-item,\n.info-box,\n.detail-item,\n.permission-item,\n.role-list-item,\n.list-select,\n.assignment-row,\n.branch-nav,\n.action-card,\n.notification-item,\n.announcement-item,\n.feedback-list-card,\n.theme-preview-cards i {\n  background: var(--frame-card-bg-2) ;\n  color: var(--frame-card-text) ;\n  border-color: rgba(214,174,88,.70) ;\n}\n\n.panel h1,\n.panel h2,\n.panel h3,\n.panel h4,\n.panel h5,\n.panel h6,\n.card h1,\n.card h2,\n.card h3,\n.card h4,\n.card h5,\n.card h6,\n.stat-card strong,\n.stat-card b,\n.org-card h3,\n.calendar-card h3,\n.feature-card h3,\n.report-card b,\n.setting-card h3,\n.employee-detail-card h2,\n.employee-detail-card h3,\n.card-title h2,\n.info-card h2,\n.payslip-card h2,\n.card-title,\n.theme-card-body strong,\n.theme-manager-header h2,\n.custom-theme-panel h3 {\n  color: var(--frame-card-text) ;\n}\n\n.panel p,\n.panel small,\n.panel label,\n.panel span,\n.card p,\n.card small,\n.card label,\n.card span,\n.stat-card span,\n.stat-card small,\n.org-card p,\n.calendar-card p,\n.feature-card p,\n.report-card p,\n.setting-card p,\n.employee-detail-card p,\n.theme-card-body small,\n.custom-theme-panel p,\n.theme-manager-header p,\n.form-grid label,\n.detail-item span,\n.detail-item small,\n.info-list small,\n.request-list small,\n.schedule-item small,\n.schedule-item span {\n  color: var(--frame-card-muted) ;\n}\n\ninput,\nselect,\ntextarea,\n.page input,\n.page select,\n.page textarea,\n.panel input,\n.panel select,\n.panel textarea,\n.card input,\n.card select,\n.card textarea,\n.search-global {\n  background: #111b33 ;\n  color: #eef1f5 ;\n  border: 1px solid var(--frame-card-border) ;\n}\n\ninput::placeholder,\ntextarea::placeholder,\n.search-global input::placeholder {\n  color: #8f9bac ;\n}\n\n.primary,\n.theme-save-button {\n  background: var(--frame-sidebar-active) ;\n  color: var(--frame-sidebar-active-text) ;\n  border: 2px solid var(--frame-card-border) ;\n}\n\n.secondary,\n.btn-secondary {\n  background: var(--frame-card-bg-2) ;\n  color: var(--frame-card-text) ;\n  border: 2px solid var(--frame-card-border) ;\n}\n\n.status.green { background: rgba(68,197,138,.14) ; color: #78e0ad ; border-color: #44c58a ; }\n.status.red { background: rgba(255,125,125,.14) ; color: #ff9d9d ; border-color: #ff7d7d ; }\n.status.orange { background: rgba(224,173,87,.14) ; color: #efc77a ; border-color: #e0ad57 ; }\n.status.blue { background: rgba(120,169,255,.14) ; color: #a4c7ff ; border-color: #78a9ff ; }\n\n/* Thick framed sidebar, identical across all themes. */\n.sidebar,\n.talenta-sidebar {\n  background: linear-gradient(180deg, #070f20 0%, #0b132b 100%) ;\n  color: var(--frame-sidebar-text) ;\n  border-right: 3px solid var(--frame-card-border) ;\n  box-shadow: inset -1px 0 0 rgba(214,174,88,.45), 8px 0 26px rgba(0,0,0,.12) ;\n}\n\n.sidebar .sidebar-head,\n.sidebar .brand,\n.sidebar .brand b,\n.sidebar .brand small,\n.sidebar .nav-title,\n.sidebar .group-title,\n.sidebar .workspace,\n.sidebar .workspace b,\n.sidebar .workspace small,\n.sidebar .admin-mini,\n.sidebar .admin-mini b,\n.sidebar .admin-mini small {\n  color: var(--frame-sidebar-text) ;\n}\n\n.sidebar .brand small,\n.sidebar .group-title,\n.sidebar .nav-title,\n.sidebar .workspace small,\n.sidebar .admin-mini small {\n  color: var(--frame-sidebar-muted) ;\n}\n\n.sidebar .workspace {\n  background: #0d1830 ;\n  border: 1px solid rgba(214,174,88,.65) ;\n}\n\n.sidebar .nav-item {\n  background: transparent ;\n  color: var(--frame-sidebar-text) ;\n  border: 2px solid transparent ;\n  border-radius: 9px ;\n}\n\n.sidebar .nav-item:hover {\n  background: rgba(214,174,88,.10) ;\n  color: #ffffff ;\n  border-color: rgba(214,174,88,.70) ;\n}\n\n.sidebar .nav-item.active {\n  background: var(--frame-sidebar-active) ;\n  color: var(--frame-sidebar-active-text) ;\n  border: 2px solid #f0d68c ;\n  box-shadow: 0 0 18px rgba(214,174,88,.22) ;\n}\n\n.sidebar .nav-item.active *,\n.sidebar .nav-item.active svg {\n  color: var(--frame-sidebar-active-text) ;\n  stroke: currentColor ;\n}\n\n.sidebar .nav-item em {\n  background: rgba(214,174,88,.18) ;\n  color: #f0d68c ;\n  border: 1px solid rgba(214,174,88,.55) ;\n}\n\n.sidebar .logout {\n  color: #f2f5f9 ;\n  border: 1px solid rgba(214,174,88,.35) ;\n  background: transparent ;\n}\n\n.sidebar .logout:hover {\n  background: rgba(214,174,88,.10) ;\n  color: #ffffff ;\n  border-color: var(--frame-card-border) ;\n}\n\n/* Theme picker: show the real fixed frame and only vary page background. */\n.theme-preview {\n  border: 2px solid var(--frame-card-border) ;\n}\n.theme-preview-sidebar { background: #070f20 ; }\n.theme-preview-top { border-color: var(--frame-card-border) ; background: var(--frame-card-bg) ; }\n.theme-preview-cards i { background: var(--frame-card-bg-2) ; border: 1px solid var(--frame-card-border) ; }\n.theme-preview-line { background: var(--frame-card-border) ; }\n.theme-color-dot { background: var(--frame-card-border) ; }\n.theme-active-badge { background: var(--frame-card-border) ; color: var(--frame-sidebar-active-text) ; }\n.theme-frame-note { color: var(--frame-card-muted) ; font-size: 10px; line-height: 1.5; }\n\n/* Search stays centered while sharing the framed visual language. */\n.topbar > .search-global {\n  background: #101827 ;\n  border: 2px solid var(--frame-card-border) ;\n}\n.topbar > .search-global input { background: transparent ; border: 0 ; }\n\n@media (max-width: 700px) {\n  .sidebar,\n  .talenta-sidebar { border-right-width: 2px ; }\n  .panel,\n  .card,\n  .stat-card,\n  .mini-kpi,\n  .quick,\n  .table-panel,\n  .form-panel,\n  .org-card,\n  .calendar-card,\n  .feature-card,\n  .report-card,\n  .setting-card { border-width: 1.5px ; }\n}\n\n/* Additional card surfaces introduced by newer HR modules. */\n.dashboard-card,\n.detail-card,\n.profile-card,\n.announcement-hero,\n.announcement-compose,\n.announcement-list-card,\n.feedback-list-card,\n.feedback-detail-card,\n.export-card,\n.action-card,\n.compact-panel,\n.id-card-pratinjau-panel,\n.id-card-list {\n  background: var(--frame-card-bg) ;\n  color: var(--frame-card-text) ;\n  border: 2px solid var(--frame-card-border) ;\n  box-shadow: 0 12px 32px rgba(0,0,0,.18) ;\n}\n\n.dashboard-card h1,\n.dashboard-card h2,\n.dashboard-card h3,\n.detail-card h1,\n.detail-card h2,\n.detail-card h3,\n.profile-card h1,\n.profile-card h2,\n.profile-card h3,\n.announcement-hero h2,\n.announcement-compose h2,\n.announcement-compose h3,\n.announcement-list-card h2,\n.announcement-list-card h3,\n.feedback-list-card h2,\n.feedback-list-card h3,\n.feedback-detail-card h2,\n.feedback-detail-card h3,\n.export-card h2,\n.export-card h3,\n.action-card b,\n.compact-panel h3,\n.id-card-pratinjau-panel h2,\n.id-card-list h2 {\n  color: var(--frame-card-text) ;\n}\n\n.dashboard-card p,\n.detail-card p,\n.profile-card p,\n.announcement-hero p,\n.announcement-compose p,\n.announcement-list-card p,\n.feedback-list-card p,\n.feedback-detail-card p,\n.export-card p,\n.action-card small,\n.compact-panel p,\n.id-card-pratinjau-panel small,\n.id-card-list small {\n  color: var(--frame-card-muted) ;\n}\n\n/* =========================================================\n   FINAL UX — EMPLOYEE DETAIL + SIDEBAR + CENTER SEARCH\n   ========================================================= */\n\n/* ---------- EMPLOYEE DETAIL: UNIVERSAL READABLE FRAME ---------- */\n\n.employee-detail-card {\n  position: relative ;\n  display: flex ;\n  flex-direction: column ;\n\n  width: min(980px, calc(100vw - 32px)) ;\n  max-width: calc(100vw - 32px) ;\n  max-height: calc(100dvh - 24px) ;\n\n  overflow: hidden ;\n\n  background: #101827 ;\n  color: #f8fafc ;\n\n  border: 2px solid #d6ae58 ;\n  border-radius: 18px ;\n\n  box-shadow: 0 24px 70px rgba(0, 0, 0, .32) ;\n}\n\n/* Header detail */\n.employee-detail-card > .export-head {\n  flex: 0 0 auto ;\n\n  background: #101827 ;\n  color: #f8fafc ;\n\n  border-bottom: 2px solid #d6ae58 ;\n\n  padding: 18px 22px ;\n}\n\n.employee-detail-card > .export-head span,\n.employee-detail-card > .export-head .eyebrow {\n  color: #e1bd6b ;\n  font-weight: 800 ;\n}\n\n.employee-detail-card > .export-head h2 {\n  color: #ffffff ;\n  font-size: 21px ;\n  font-weight: 800 ;\n  line-height: 1.25 ;\n}\n\n.employee-detail-card > .export-head p {\n  color: #b8c0cc ;\n  font-size: 12px ;\n}\n\n/* Area data — berlaku untuk Detail Semua Karyawan\n   dan Detail Karyawan Baru */\n.employee-detail-card .employee-detail-grid {\n  flex: 1 1 auto ;\n  min-height: 0 ;\n\n  width: 100% ;\n  box-sizing: border-box ;\n\n  display: grid ;\n  grid-template-columns: repeat(2, minmax(0, 1fr)) ;\n\n  gap: 12px ;\n\n  padding: 18px 22px ;\n\n  overflow-y: auto ;\n  overflow-x: hidden ;\n\n  background: #0b132b ;\n}\n\n/* section data */\n.employee-detail-card .employee-detail-grid .detail-section {\n  min-width: 0 ;\n  overflow: hidden ;\n\n  padding: 14px ;\n\n  background: #101827 ;\n  color: #e2e5ea ;\n\n  border: 1px solid rgba(214,174,88,.72) ;\n  border-radius: 12px ;\n}\n\n.employee-detail-card .detail-section h3 {\n  color: #ffffff ;\n  font-size: 13px ;\n  font-weight: 800 ;\n\n  margin: 0 0 8px ;\n  padding-bottom: 8px ;\n\n  border-bottom: 1px solid rgba(214,174,88,.42) ;\n}\n\n/* item data */\n.employee-detail-card .detail-item {\n  display: flex ;\n  align-items: flex-start ;\n  justify-content: space-between ;\n\n  gap: 12px ;\n  min-width: 0 ;\n\n  margin: 0 0 7px ;\n  padding: 9px 10px ;\n\n  background: #172033 ;\n  color: #e2e5ea ;\n\n  border: 1px solid rgba(214,174,88,.55) ;\n  border-radius: 7px ;\n}\n\n.employee-detail-card .detail-item span {\n  flex: 0 0 42% ;\n  min-width: 0 ;\n\n  color: #aeb7c5 ;\n  font-size: 11px ;\n  font-weight: 600 ;\n\n  overflow-wrap: anywhere ;\n}\n\n.employee-detail-card .detail-item b {\n  flex: 1 1 auto ;\n  min-width: 0 ;\n  max-width: none ;\n\n  color: #ffffff ;\n  font-size: 12px ;\n  font-weight: 750 ;\n\n  text-align: right ;\n  overflow-wrap: anywhere ;\n  word-break: break-word ;\n}\n\n/* Footer tombol selalu terlihat */\n.employee-detail-card > .export-foot {\n  position: relative ;\n  z-index: 20 ;\n\n  flex: 0 0 auto ;\n\n  display: flex ;\n  align-items: center ;\n  justify-content: flex-end ;\n  flex-wrap: wrap ;\n\n  gap: 9px ;\n\n  margin: 0 ;\n  padding: 13px 22px ;\n\n  background: #101827 ;\n  border-top: 2px solid #d6ae58 ;\n}\n\n.employee-detail-card > .export-foot button {\n  min-height: 40px ;\n  padding: 9px 16px ;\n\n  border-radius: 8px ;\n\n  font-size: 12px ;\n  font-weight: 800 ;\n\n  white-space: nowrap ;\n}\n\n/* Tombol tutup */\n.employee-detail-card > .export-foot .secondary {\n  background: #172033 ;\n  color: #f8fafc ;\n  border: 2px solid #8f99a8 ;\n}\n\n/* Tombol Tolak */\n.employee-detail-card > .export-foot .danger-text {\n  background: #431a20 ;\n  color: #ffb8b8 ;\n  border: 2px solid #e05a5a ;\n}\n\n/* Tombol Terima/Konfirmasi */\n.employee-detail-card > .export-foot .primary {\n  background: #d6ae58 ;\n  color: #0b1222 ;\n  border: 2px solid #f0d68c ;\n}\n\n/* ---------- DETAIL KARYAWAN BARU YANG MEMAKAI BODY WRAPPER ---------- */\n\n.employee-detail-card .employee-detail-body {\n  flex: 1 1 auto ;\n  min-height: 0 ;\n\n  display: flex ;\n  gap: 20px ;\n  align-items: flex-start ;\n\n  padding: 18px 22px ;\n\n  overflow: hidden ;\n\n  background: #0b132b ;\n}\n\n.employee-detail-card .employee-detail-body > div:first-child {\n  flex: 0 0 150px ;\n\n  width: 150px ;\n  height: 190px ;\n\n  background: #172033 ;\n  border: 2px solid #d6ae58 ;\n  border-radius: 12px ;\n\n  color: #e2e5ea ;\n}\n\n.employee-detail-card .employee-detail-body .employee-detail-grid {\n  flex: 1 1 auto ;\n\n  height: 100% ;\n  min-height: 0 ;\n\n  padding: 0 ;\n\n  background: transparent ;\n}\n\n/* ---------- SIDEBAR DESKTOP: SEDIKIT LEBIH RAMPING ---------- */\n\n@media (min-width: 900px) {\n\n  .talenta-shell > .sidebar {\n    flex: 0 0 238px ;\n    width: 238px ;\n    min-width: 238px ;\n  }\n\n  .talenta-shell > .sidebar.collapsed {\n    flex: 0 0 68px ;\n    width: 68px ;\n    min-width: 68px ;\n  }\n\n  .sidebar {\n    padding-right: 7px ;\n  }\n\n  .sidebar .nav-item {\n    min-width: 0 ;\n  }\n\n  /* ---------- QUICK SEARCH BENAR-BENAR TENGAH ---------- */\n\n  .talenta-shell > .talenta-main > .topbar {\n    display: grid ;\n\n    grid-template-columns:\n      minmax(0, 1fr)\n      minmax(280px, 430px)\n      minmax(0, 1fr) ;\n\n    align-items: center ;\n    gap: 18px ;\n\n    padding-left: 16px ;\n    padding-right: 16px ;\n\n    box-sizing: border-box ;\n  }\n\n  .topbar > .topbar-left {\n    grid-column: 1 ;\n    justify-self: start ;\n\n    min-width: 0 ;\n  }\n\n  .topbar > .search-global {\n    grid-column: 2 ;\n    justify-self: center ;\n\n    width: min(430px, 100%) ;\n    min-width: 280px ;\n    max-width: 430px ;\n\n    margin: 0 auto ;\n\n    position: relative ;\n    left: auto ;\n    right: auto ;\n    transform: none ;\n\n    z-index: 2 ;\n\n    box-sizing: border-box ;\n  }\n\n  .topbar > .top-actions {\n    grid-column: 3 ;\n    justify-self: end ;\n\n    min-width: 0 ;\n    position: relative ;\n    z-index: 3 ;\n  }\n\n  .topbar > .search-global input {\n    min-width: 0 ;\n    width: 100% ;\n  }\n}\n\n/* ---------- DESKTOP YANG LEBIH SEMPIT ---------- */\n\n@media (min-width: 900px) and (max-width: 1180px) {\n\n  .talenta-shell > .sidebar {\n    flex-basis: 228px ;\n    width: 228px ;\n    min-width: 228px ;\n  }\n\n  .topbar > .search-global {\n    min-width: 230px ;\n    width: min(360px, 100%) ;\n    max-width: 360px ;\n  }\n\n  .talenta-shell > .talenta-main > .topbar {\n    grid-template-columns:\n      minmax(0, 1fr)\n      minmax(230px, 360px)\n      minmax(0, 1fr) ;\n    gap: 12px ;\n  }\n}\n\n/* ---------- TABLET / PHONE ---------- */\n\n@media (max-width: 700px) {\n\n  .employee-detail-card {\n    width: calc(100vw - 20px) ;\n    max-width: calc(100vw - 20px) ;\n    max-height: calc(100dvh - 10px) ;\n  }\n\n  .employee-detail-card .employee-detail-grid {\n    grid-template-columns: 1fr ;\n    padding: 14px ;\n  }\n\n  .employee-detail-card .employee-detail-body {\n    flex-direction: column ;\n    overflow-y: auto ;\n    padding: 14px ;\n  }\n\n  .employee-detail-card .employee-detail-body > div:first-child {\n    flex: 0 0 auto ;\n    width: 100% ;\n    height: 165px ;\n  }\n\n  .employee-detail-card .employee-detail-body .employee-detail-grid {\n    height: auto ;\n    overflow: visible ;\n  }\n\n  .employee-detail-card > .export-foot {\n    flex-direction: column ;\n    align-items: stretch ;\n    padding: 12px 14px ;\n  }\n\n  .employee-detail-card > .export-foot button {\n    width: 100% ;\n  }\n}\n\n\n/* =========================================================\n   TOPBAR — SAMAKAN 3 ICON DENGAN ICON PROFILE\n   ========================================================= */\n\n/* Tombol/icon aksi di area kanan topbar */\n\n/* Jangan ubah ukuran foto profil */\n.topbar .avatar-button,\n.topbar .avatar-button img {\n  width: 30px ;\n  height: 30px ;\n}\n\n\n/* =========================================================\n   FINAL — 3 NOTIFICATION ICONS SAMAKAN DENGAN PROFILE AVATAR\n   ========================================================= */\n\n.admin-floating-notification-group {\n  gap: 7px ;\n}\n\n.admin-floating-action {\n  width: 30px ;\n  height: 30px ;\n  min-width: 30px ;\n  min-height: 30px ;\n\n  padding: 0 ;\n  border-width: 1px ;\n\n  border-radius: 50% ;\n\n  display: flex ;\n  align-items: center ;\n  justify-content: center ;\n\n  box-shadow: 0 3px 10px rgba(0,0,0,.18) ;\n}\n\n.admin-floating-action-icon {\n  font-size: 15px ;\n  line-height: 1 ;\n}\n\n.admin-floating-action-badge {\n  min-width: 15px ;\n  width: 15px ;\n  height: 15px ;\n  padding: 0 ;\n\n  top: -4px ;\n  right: -4px ;\n\n  display: flex ;\n  align-items: center ;\n  justify-content: center ;\n\n  border: 1px solid #101827 ;\n  font-size: 8px ;\n  line-height: 1 ;\n}\n\n/* Jangan membesarkan icon saat disentuh */\n.admin-floating-action:hover,\n.admin-floating-action.active {\n  transform: none ;\n}\n\n@media (max-width: 700px) {\n  .admin-floating-notification-group {\n    gap: 5px ;\n  }\n\n  .admin-floating-action {\n    width: 27px ;\n    height: 27px ;\n    min-width: 27px ;\n    min-height: 27px ;\n  }\n\n  .admin-floating-action-icon {\n    font-size: 14px ;\n  }\n}\n\n\n/* UNIFIED FINAL UI FIX — DETAIL PROFILE TOPBAR */\n\n/* =========================================================\n   A. DETAIL KARYAWAN — UKURAN TERKONTROL\n   ========================================================= */\n\n.employee-detail-card {\n  width: min(920px, calc(100vw - 32px)) ;\n  max-width: calc(100vw - 32px) ;\n\n  height: min(700px, calc(100dvh - 32px)) ;\n  max-height: calc(100dvh - 32px) ;\n\n  min-height: 0 ;\n\n  display: flex ;\n  flex-direction: column ;\n\n  padding: 0 ;\n  margin: 0 ;\n\n  overflow: hidden ;\n\n  background: #101827 ;\n  color: #f8fafc ;\n\n  border: 2px solid #d6ae58 ;\n  border-radius: 16px ;\n\n  box-shadow: 0 24px 70px rgba(0,0,0,.35) ;\n}\n\n/* ---------- header detail ---------- */\n\n.employee-detail-card > .export-head {\n  flex: 0 0 auto ;\n\n  min-height: 68px ;\n\n  display: flex ;\n  align-items: center ;\n\n  box-sizing: border-box ;\n\n  padding: 13px 19px ;\n  margin: 0 ;\n\n  background: #101827 ;\n  color: #ffffff ;\n\n  border-bottom: 2px solid #d6ae58 ;\n}\n\n.employee-detail-card > .export-head h2 {\n  margin: 3px 0 ;\n\n  color: #ffffff ;\n\n  font-size: 19px ;\n  line-height: 1.2 ;\n  font-weight: 800 ;\n}\n\n.employee-detail-card > .export-head p {\n  margin: 0 ;\n\n  color: #aeb7c5 ;\n\n  font-size: 11px ;\n}\n\n.employee-detail-card > .export-head span,\n.employee-detail-card > .export-head .eyebrow {\n  color: #e1bd6b ;\n\n  font-size: 9px ;\n  font-weight: 800 ;\n  letter-spacing: 1.1px ;\n}\n\n/* =========================================================\n   B. DETAIL SEMUA KARYAWAN\n   ========================================================= */\n\n.employee-detail-card > .employee-detail-grid {\n  flex: 1 1 auto ;\n\n  width: 100% ;\n  min-width: 0 ;\n  min-height: 0 ;\n\n  height: auto ;\n\n  box-sizing: border-box ;\n\n  overflow-y: auto ;\n  overflow-x: hidden ;\n\n  padding: 13px 17px ;\n\n  background: #0b132b ;\n}\n\n.employee-detail-card > .employee-detail-grid .detail-section {\n  min-width: 0 ;\n  overflow: hidden ;\n\n  padding: 11px ;\n\n  background: #101827 ;\n\n  border: 1px solid rgba(214,174,88,.70) ;\n  border-radius: 10px ;\n}\n\n.employee-detail-card > .employee-detail-grid .detail-section h3 {\n  margin: 0 0 7px ;\n  padding-bottom: 7px ;\n\n  color: #ffffff ;\n\n  font-size: 12px ;\n  font-weight: 800 ;\n\n  border-bottom: 1px solid rgba(214,174,88,.42) ;\n}\n\n.employee-detail-card > .employee-detail-grid .detail-item {\n  display: flex ;\n  align-items: flex-start ;\n  justify-content: space-between ;\n\n  min-width: 0 ;\n\n  gap: 9px ;\n\n  padding: 7px 8px ;\n  margin-bottom: 5px ;\n\n  background: #172033 ;\n  color: #e2e5ea ;\n\n  border: 1px solid rgba(214,174,88,.48) ;\n  border-radius: 7px ;\n}\n\n.employee-detail-card > .employee-detail-grid .detail-item span {\n  flex: 0 0 39% ;\n  min-width: 0 ;\n\n  color: #b8c0cc ;\n\n  font-size: 10px ;\n  font-weight: 600 ;\n\n  overflow-wrap: anywhere ;\n}\n\n.employee-detail-card > .employee-detail-grid .detail-item b {\n  flex: 1 1 auto ;\n  min-width: 0 ;\n  max-width: none ;\n\n  color: #ffffff ;\n\n  font-size: 11px ;\n  font-weight: 750 ;\n\n  text-align: right ;\n\n  overflow-wrap: anywhere ;\n  word-break: break-word ;\n}\n\n/* =========================================================\n   C. DETAIL KARYAWAN BARU\n   Mendukung body versi lama maupun versi baru.\n   ========================================================= */\n\n.employee-detail-card > .employee-detail-body,\n.employee-detail-card > .export-head + div:not(.export-foot) {\n  flex: 1 1 auto ;\n\n  width: 100% ;\n  min-width: 0 ;\n  min-height: 0 ;\n\n  box-sizing: border-box ;\n\n  display: flex ;\n  align-items: flex-start ;\n\n  gap: 17px ;\n\n  margin: 0 ;\n  padding: 13px 17px ;\n\n  overflow: hidden ;\n\n  background: #0b132b ;\n}\n\n/* Foto pendaftar */\n.employee-detail-card > .employee-detail-body > div:first-child,\n.employee-detail-card > .export-head + div:not(.export-foot) > div:first-child {\n  flex: 0 0 120px ;\n\n  width: 120px ;\n  height: 155px ;\n\n  min-width: 120px ;\n\n  box-sizing: border-box ;\n\n  border-radius: 10px ;\n\n  background: #172033 ;\n  border: 2px solid #d6ae58 ;\n}\n\n/* Data pendaftar */\n.employee-detail-card > .employee-detail-body .employee-detail-grid,\n.employee-detail-card > .export-head + div:not(.export-foot) .employee-detail-grid {\n  flex: 1 1 auto ;\n\n  width: auto ;\n\n  height: 100% ;\n\n  min-width: 0 ;\n  min-height: 0 ;\n\n  padding: 0 ;\n\n  background: transparent ;\n\n  overflow-y: auto ;\n  overflow-x: hidden ;\n}\n\n/* =========================================================\n   D. FOOTER — SELALU TERLIHAT\n   ========================================================= */\n\n.employee-detail-card > .export-foot {\n  position: relative ;\n  z-index: 30 ;\n\n  flex: 0 0 auto ;\n\n  min-height: 60px ;\n\n  display: flex ;\n  align-items: center ;\n  justify-content: flex-end ;\n\n  flex-wrap: wrap ;\n\n  gap: 8px ;\n\n  margin: 0 ;\n  padding: 9px 17px ;\n\n  box-sizing: border-box ;\n\n  background: #101827 ;\n\n  border-top: 2px solid #d6ae58 ;\n}\n\n.employee-detail-card > .export-foot button {\n  width: auto ;\n\n  min-width: 88px ;\n\n  min-height: 38px ;\n  height: 38px ;\n\n  padding: 7px 14px ;\n\n  border-radius: 8px ;\n\n  font-size: 11px ;\n  font-weight: 800 ;\n\n  white-space: nowrap ;\n\n  opacity: 1 ;\n  visibility: visible ;\n}\n\n/* Tutup / Edit */\n.employee-detail-card > .export-foot .secondary {\n  background: #172033 ;\n  color: #f8fafc ;\n\n  border: 2px solid #9aa4b2 ;\n}\n\n/* Tolak */\n.employee-detail-card > .export-foot .danger-text {\n  background: #461a20 ;\n  color: #ffb8b8 ;\n\n  border: 2px solid #e05a5a ;\n}\n\n/* Terima / Konfirmasi */\n.employee-detail-card > .export-foot .primary {\n  background: #d6ae58 ;\n  color: #0b1222 ;\n\n  border: 2px solid #f0d68c ;\n}\n\n/* =========================================================\n   E. SIDEBAR — RAMPING\n   ========================================================= */\n\n@media (min-width: 900px) {\n\n  .talenta-shell > .sidebar {\n    flex: 0 0 238px ;\n    width: 238px ;\n    min-width: 238px ;\n  }\n\n  .talenta-shell > .sidebar.collapsed {\n    flex: 0 0 68px ;\n    width: 68px ;\n    min-width: 68px ;\n  }\n\n  .sidebar {\n    padding-right: 7px ;\n  }\n}\n\n/* =========================================================\n   F. TOPBAR — QUICK SEARCH TENGAH\n   ========================================================= */\n\n@media (min-width: 900px) {\n\n  .talenta-shell > .talenta-main > .topbar {\n    height: 58px ;\n    min-height: 58px ;\n\n    display: grid ;\n\n    grid-template-columns:\n      minmax(0, 1fr)\n      minmax(280px, 420px)\n      minmax(0, 1fr) ;\n\n    align-items: center ;\n\n    gap: 14px ;\n\n    padding: 0 16px ;\n\n    box-sizing: border-box ;\n  }\n\n  .topbar > .topbar-left {\n    grid-column: 1 ;\n\n    display: flex ;\n    align-items: center ;\n\n    height: 30px ;\n\n    min-width: 0 ;\n  }\n\n  .topbar > .search-global {\n    grid-column: 2 ;\n\n    justify-self: center ;\n    align-self: center ;\n\n    width: min(420px, 100%) ;\n    min-width: 280px ;\n    max-width: 420px ;\n\n    height: 34px ;\n    min-height: 34px ;\n\n    margin: 0 auto ;\n\n    position: relative ;\n\n    top: auto ;\n    left: auto ;\n    right: auto ;\n\n    transform: none ;\n\n    display: flex ;\n    align-items: center ;\n\n    box-sizing: border-box ;\n\n    z-index: 2 ;\n  }\n\n  .topbar > .search-global span {\n    display: flex ;\n\n    align-items: center ;\n    justify-content: center ;\n\n    width: 30px ;\n    min-width: 30px ;\n  }\n\n  .topbar > .search-global svg {\n    width: 15px ;\n    height: 15px ;\n  }\n\n  .topbar > .search-global input {\n    width: 100% ;\n    min-width: 0 ;\n\n    height: 30px ;\n    min-height: 30px ;\n\n    padding: 0 9px ;\n  }\n\n  .topbar > .top-actions {\n    grid-column: 3 ;\n\n    justify-self: end ;\n    align-self: center ;\n\n    height: 30px ;\n\n    display: flex ;\n    align-items: center ;\n\n    gap: 7px ;\n\n    min-width: 0 ;\n\n    position: relative ;\n\n    z-index: 5 ;\n  }\n\n  .topbar > .top-actions > .icon-btn {\n    width: 30px ;\n    height: 30px ;\n\n    min-width: 30px ;\n    min-height: 30px ;\n\n    padding: 0 ;\n\n    display: inline-flex ;\n    align-items: center ;\n    justify-content: center ;\n  }\n\n  .topbar > .top-actions > .icon-btn svg {\n    width: 15px ;\n    height: 15px ;\n  }\n\n  /* =======================================================\n     3 NOTIFICATION — SAMA DENGAN PROFILE\n     ======================================================= */\n\n  .admin-floating-notification-group {\n    position: fixed ;\n\n    top: 14px ;\n    right: 78px ;\n\n    height: 30px ;\n\n    display: flex ;\n    align-items: center ;\n\n    gap: 7px ;\n\n    z-index: 1200 ;\n\n    transform: none ;\n  }\n\n  .admin-floating-action {\n    width: 30px ;\n    height: 30px ;\n\n    min-width: 30px ;\n    min-height: 30px ;\n\n    padding: 0 ;\n\n    border-radius: 50% ;\n  }\n\n  .admin-floating-action-icon {\n    font-size: 15px ;\n    line-height: 1 ;\n  }\n\n  .admin-floating-action-badge {\n    min-width: 15px ;\n    width: 15px ;\n    height: 15px ;\n\n    top: -4px ;\n    right: -4px ;\n\n    padding: 0 ;\n\n    display: flex ;\n    align-items: center ;\n    justify-content: center ;\n\n    font-size: 8px ;\n  }\n\n  /* Avatar profile */\n  .topbar .profile-trigger-wrap {\n    width: 30px ;\n    height: 30px ;\n\n    display: flex ;\n    align-items: center ;\n    justify-content: center ;\n  }\n\n  .topbar .avatar-button {\n    width: 30px ;\n    height: 30px ;\n\n    min-width: 30px ;\n    min-height: 30px ;\n\n    padding: 0 ;\n\n    border-radius: 50% ;\n    overflow: hidden ;\n  }\n\n  .topbar .avatar-button img {\n    width: 100% ;\n    height: 100% ;\n\n    object-fit: cover ;\n    border-radius: 50% ;\n  }\n}\n\n/* =========================================================\n   G. PROFILE MENU — NORMAL, TIDAK KOTAK\n   ========================================================= */\n\n.topbar .profile-menu {\n  width: 255px ;\n  min-width: 255px ;\n\n  padding: 7px ;\n\n  box-sizing: border-box ;\n\n  background: #101827 ;\n  color: #f8fafc ;\n\n  border: 2px solid #d6ae58 ;\n  border-radius: 12px ;\n\n  box-shadow: 0 18px 45px rgba(0,0,0,.35) ;\n\n  overflow: visible ;\n}\n\n.topbar .profile-menu-header {\n  width: 100% ;\n\n  min-height: 48px ;\n\n  display: flex ;\n  align-items: center ;\n\n  gap: 9px ;\n\n  padding: 8px 9px ;\n\n  box-sizing: border-box ;\n}\n\n.topbar .profile-avatar-large {\n  width: 38px ;\n  height: 38px ;\n\n  min-width: 38px ;\n  min-height: 38px ;\n\n  border-radius: 50% ;\n\n  background: #172033 ;\n  color: #f0d68c ;\n\n  border: 1px solid #d6ae58 ;\n}\n\n.topbar .profile-menu-header strong {\n  color: #ffffff ;\n\n  font-size: 12px ;\n  font-weight: 800 ;\n\n  max-width: 175px ;\n\n  overflow: hidden ;\n  text-overflow: ellipsis ;\n  white-space: nowrap ;\n}\n\n.topbar .profile-menu-header small {\n  color: #aeb7c5 ;\n\n  font-size: 10px ;\n}\n\n/* Item menu utama */\n.topbar .profile-menu > button {\n  display: flex ;\n  align-items: center ;\n  justify-content: flex-start ;\n\n  width: 100% ;\n  min-width: 0 ;\n\n  height: 37px ;\n  min-height: 37px ;\n\n  margin: 0 ;\n  padding: 8px 10px ;\n\n  box-sizing: border-box ;\n\n  background: transparent ;\n\n  border: 0 ;\n  border-radius: 8px ;\n\n  color: #eef2f7 ;\n\n  font-family: inherit ;\n  font-size: 11px ;\n  font-weight: 650 ;\n  line-height: 1.2 ;\n\n  text-align: left ;\n\n  cursor: pointer ;\n\n  opacity: 1 ;\n  visibility: visible ;\n}\n\n.topbar .profile-menu > button:hover,\n.topbar .profile-menu > button:focus-visible {\n  background: rgba(214,174,88,.13) ;\n  color: #ffffff ;\n}\n\n.topbar .profile-menu > button > span {\n  display: inline-flex ;\n  align-items: center ;\n  justify-content: center ;\n\n  width: 22px ;\n  min-width: 22px ;\n  height: 22px ;\n\n  margin-right: 8px ;\n\n  flex: 0 0 22px ;\n\n  background: transparent ;\n  border: 0 ;\n\n  color: #d6ae58 ;\n\n  font-size: 14px ;\n}\n\n/* =========================================================\n   H. BAHASA\n   ========================================================= */\n\n.topbar .profile-language {\n  display: block ;\n\n  width: 100% ;\n\n  margin: 0 ;\n  padding: 0 ;\n\n  position: relative ;\n}\n\n.topbar .profile-language > button {\n  display: flex ;\n  align-items: center ;\n  justify-content: flex-start ;\n\n  width: 100% ;\n  height: 37px ;\n  min-height: 37px ;\n\n  padding: 8px 10px ;\n\n  box-sizing: border-box ;\n\n  background: transparent ;\n\n  border: 0 ;\n  border-radius: 8px ;\n\n  color: #eef2f7 ;\n\n  font-family: inherit ;\n  font-size: 11px ;\n  font-weight: 650 ;\n\n  cursor: pointer ;\n}\n\n.topbar .profile-language > button > span {\n  width: 22px ;\n  min-width: 22px ;\n\n  margin-right: 8px ;\n\n  color: #d6ae58 ;\n\n  text-align: center ;\n}\n\n.topbar .profile-language > button small {\n  margin-left: auto ;\n\n  color: #d6ae58 ;\n\n  font-size: 9px ;\n  font-weight: 800 ;\n}\n\n.topbar .profile-language-options {\n  position: absolute ;\n\n  top: calc(100% + 3px) ;\n  left: 4px ;\n  right: 4px ;\n\n  z-index: 10002 ;\n\n  display: grid ;\n\n  gap: 2px ;\n\n  padding: 5px ;\n\n  background: #0b132b ;\n\n  border: 1px solid #d6ae58 ;\n  border-radius: 9px ;\n\n  box-shadow: 0 12px 30px rgba(0,0,0,.38) ;\n}\n\n.topbar .profile-language-options button {\n  display: flex ;\n  align-items: center ;\n\n  width: 100% ;\n  height: 31px ;\n  min-height: 31px ;\n\n  padding: 6px 9px ;\n\n  box-sizing: border-box ;\n\n  border: 0 ;\n  border-radius: 7px ;\n\n  background: transparent ;\n\n  color: #e8edf3 ;\n\n  font-family: inherit ;\n  font-size: 10px ;\n  font-weight: 600 ;\n\n  text-align: left ;\n\n  cursor: pointer ;\n}\n\n.topbar .profile-language-options button:hover,\n.topbar .profile-language-options button.selected {\n  background: rgba(214,174,88,.14) ;\n  color: #f0d68c ;\n}\n\n/* Divider profile */\n.topbar .profile-menu-divider {\n  height: 1px ;\n\n  margin: 5px 3px ;\n\n  background: rgba(214,174,88,.35) ;\n}\n\n/* Logout */\n.topbar .profile-menu .profile-logout {\n  color: #ffb8b8 ;\n}\n\n.topbar .profile-menu .profile-logout:hover {\n  color: #ffffff ;\n  background: rgba(224,90,90,.14) ;\n}\n\n/* =========================================================\n   I. MOBILE\n   ========================================================= */\n\n@media (max-width: 899px) {\n\n  .employee-detail-card {\n    width: calc(100vw - 16px) ;\n    max-width: calc(100vw - 16px) ;\n\n    height: calc(100dvh - 16px) ;\n    max-height: calc(100dvh - 16px) ;\n  }\n\n  .employee-detail-card > .employee-detail-grid {\n    grid-template-columns: 1fr ;\n\n    padding: 11px ;\n  }\n\n  .employee-detail-card > .employee-detail-body,\n  .employee-detail-card > .export-head + div:not(.export-foot) {\n    flex-direction: column ;\n\n    overflow-y: auto ;\n    overflow-x: hidden ;\n\n    padding: 11px ;\n  }\n\n  .employee-detail-card > .employee-detail-body > div:first-child,\n  .employee-detail-card > .export-head + div:not(.export-foot) > div:first-child {\n    width: 100% ;\n    min-width: 0 ;\n    height: 140px ;\n  }\n\n  .employee-detail-card > .employee-detail-body .employee-detail-grid,\n  .employee-detail-card > .export-head + div:not(.export-foot) .employee-detail-grid {\n    width: 100% ;\n    height: auto ;\n\n    overflow: visible ;\n  }\n\n  .employee-detail-card > .export-foot {\n    flex-direction: column ;\n    align-items: stretch ;\n\n    min-height: auto ;\n\n    padding: 9px 11px ;\n  }\n\n  .employee-detail-card > .export-foot button {\n    width: 100% ;\n    min-width: 0 ;\n  }\n\n  .admin-floating-notification-group {\n    top: 14px ;\n    right: 72px ;\n\n    gap: 5px ;\n  }\n\n  .admin-floating-action {\n    width: 27px ;\n    height: 27px ;\n\n    min-width: 27px ;\n    min-height: 27px ;\n  }\n\n  .admin-floating-action-icon {\n    font-size: 14px ;\n  }\n\n  .topbar .profile-menu {\n    width: min(255px, calc(100vw - 20px)) ;\n    min-width: min(255px, calc(100vw - 20px)) ;\n  }\n}\n\n\n/* =========================================================\n   PROJECT BY TIRTA — FINAL COMPACT DETAIL + TOPBAR SPACING\n   ========================================================= */\n\n/* Modal detail lebih kecil dan tetap menjaga footer */\n.employee-detail-card {\n  width: min(780px, calc(100vw - 48px)) ;\n  max-width: calc(100vw - 48px) ;\n  height: min(580px, calc(100dvh - 56px)) ;\n  max-height: calc(100dvh - 56px) ;\n}\n\n.employee-detail-card > .export-head {\n  min-height: 58px ;\n  padding: 10px 16px ;\n}\n\n.employee-detail-card > .export-head h2 {\n  font-size: 17px ;\n}\n\n.employee-detail-card > .export-head p {\n  font-size: 10px ;\n}\n\n.employee-detail-card > .employee-detail-grid {\n  padding: 10px 14px ;\n}\n\n.employee-detail-card > .employee-detail-body,\n.employee-detail-card > .export-head + div:not(.export-foot) {\n  gap: 13px ;\n  padding: 10px 14px ;\n}\n\n.employee-detail-card > .employee-detail-body > div:first-child,\n.employee-detail-card > .export-head + div:not(.export-foot) > div:first-child {\n  flex-basis: 100px ;\n  width: 100px ;\n  min-width: 100px ;\n  height: 130px ;\n}\n\n.employee-detail-card > .export-foot {\n  min-height: 52px ;\n  padding: 7px 14px ;\n}\n\n.employee-detail-card > .export-foot button {\n  min-height: 34px ;\n  height: 34px ;\n  padding: 6px 12px ;\n}\n\n/* 3 notification floating buttons dipisahkan dari refresh */\n@media (min-width: 900px) {\n  .admin-floating-notification-group {\n    right: 104px ;\n    gap: 6px ;\n  }\n\n  .admin-floating-action {\n    width: 28px ;\n    height: 28px ;\n    min-width: 28px ;\n    min-height: 28px ;\n  }\n\n  .admin-floating-action-icon {\n    font-size: 14px ;\n  }\n}\n\n/* Mobile */\n@media (max-width: 899px) {\n  .employee-detail-card {\n    width: calc(100vw - 16px) ;\n    max-width: calc(100vw - 16px) ;\n    height: calc(100dvh - 24px) ;\n    max-height: calc(100dvh - 24px) ;\n  }\n\n  .admin-floating-notification-group {\n    right: 86px ;\n    gap: 5px ;\n  }\n}\n\n/* =========================================================\n   ROLE THEME ISOLATION\n   Admin / HRD tetap Dark Enterprise.\n   Tema yang dipilih Super Admin tidak diwariskan.\n   ========================================================= */\n\n.role-dark-enterprise-lock {\n  --mx-primary: #0b132b ;\n  --mx-accent: #d6ae58 ;\n  --mx-background: #071126 ;\n  --mx-surface: #101827 ;\n  --mx-text: #e2e5ea ;\n  --mx-border: #d6ae58 ;\n}\n\n/* Project by Tirta moon icon */\n.admin-moon-icon {\n  width: 18px ;\n  height: 18px ;\n  min-width: 18px ;\n  min-height: 18px ;\n  display: block ;\n  object-fit: contain ;\n  flex: 0 0 18px ;\n}\n\n/* =========================================================\n   FIX: CARD KARYAWAN BARU TIDAK BOLEH TURUN / TERPOTONG\n========================================================= */\n\n.profile-panel-overlay {\n  align-items: center ;\n  justify-content: center ;\n  padding: 12px ;\n  overflow-y: auto ;\n}\n\n.profile-panel-overlay .employee-detail-card {\n  width: min(680px, calc(100vw - 24px)) ;\n  max-width: 680px ;\n  max-height: calc(100dvh - 24px) ;\n  margin: 0 auto ;\n  overflow-y: auto ;\n  overflow-x: hidden ;\n  box-sizing: border-box ;\n}\n\n.profile-panel-overlay .employee-detail-card .export-head {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  background: inherit;\n}\n\n.profile-panel-overlay .employee-detail-card .export-foot {\n  position: sticky;\n  bottom: 0;\n  z-index: 3;\n  background: inherit;\n}\n\n@media (max-width: 700px) {\n  .profile-panel-overlay {\n    align-items: flex-start ;\n    padding: 8px ;\n  }\n\n  .profile-panel-overlay .employee-detail-card {\n    width: calc(100vw - 16px) ;\n    max-width: none ;\n    max-height: calc(100dvh - 16px) ;\n    border-radius: 14px ;\n  }\n}\n\n\n\n.id-card-module{display:flex;flex-direction:column;gap:18px}.id-card-toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.id-card-toolbar input,.id-card-toolbar select{min-height:42px;padding:0 13px;border:1px solid #d0d5dd;border-radius:10px;background:#fff}.id-card-toolbar input{min-width:280px;flex:1}.side-switch{display:flex;border:1px solid #d0d5dd;border-radius:10px;overflow:hidden}.side-switch button{border:0;background:#fff;padding:10px 15px;cursor:pointer}.side-switch button.active{background:#101a33;color:#fff}.id-card-layout{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(280px,.8fr);gap:18px}.id-card-preview-panel{padding:20px}.id-card-preview{width:100%;max-width:856px;margin:auto;aspect-ratio:856/540;display:flex;align-items:center;justify-content:center}.id-card-preview svg{width:100%;height:auto;display:block;filter:drop-shadow(0 14px 28px rgba(16,24,40,.12))}.id-card-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px}.id-card-note{display:block;text-align:center;color:#667085;margin-top:12px}.id-card-list{padding:18px}.id-list-head{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:12px}.id-list-head small,.id-employee-row small{display:block;color:#667085;margin-top:3px}.id-employee-row{display:flex;align-items:center;gap:10px;padding:11px 4px;border-top:1px solid #eaecf0;cursor:pointer}.id-employee-row input{width:17px;height:17px}.id-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#eef2f7;color:#101a33;font-weight:700;flex:0 0 auto}.id-employee-row b{font-size:14px}.id-employee-row span:last-child{min-width:0}.id-employee-row small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width:900px){.id-card-layout{grid-template-columns:1fr}.id-card-preview-panel{padding:12px}.id-card-toolbar input{min-width:100%}}@media print{body *{visibility:hidden}.id-card-preview,.id-card-preview *{visibility:visible}.id-card-preview{position:absolute;left:0;top:0;width:100%;max-width:none}}\n\n/* ANDROID MOBILE — ID CARD FIT TO SCREEN */\n@media (max-width: 899px) {\n  .id-card-module,\n  .id-card-layout,\n  .id-card-pratinjau-panel,\n  .id-card-pratinjau {\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .id-card-module {\n    overflow-x: hidden ;\n  }\n\n  .id-card-layout {\n    display: block ;\n    overflow: hidden ;\n  }\n\n  .id-card-pratinjau-panel {\n    display: block ;\n    padding: 10px ;\n    margin: 0 ;\n    overflow: hidden ;\n  }\n\n  .id-card-pratinjau {\n    display: block ;\n    width: 100% ;\n    max-width: 100% ;\n    height: auto ;\n    aspect-ratio: 856 / 540 ;\n    margin: 0 ;\n    padding: 0 ;\n    overflow: hidden ;\n  }\n\n  .id-card-pratinjau > svg,\n  .id-card-pratinjau svg {\n    display: block ;\n    width: 100% ;\n    max-width: 100% ;\n    min-width: 0 ;\n    height: auto ;\n    margin: 0 ;\n    padding: 0 ;\n    box-sizing: border-box ;\n  }\n\n  .id-card-actions {\n    width: 100% ;\n    max-width: 100% ;\n    box-sizing: border-box ;\n  }\n\n  .id-card-note {\n    max-width: 100% ;\n    box-sizing: border-box ;\n  }\n}\n\n/* Jangan mengubah ukuran asli saat cetak */\n@media print {\n  .id-card-pratinjau {\n    width: 856px ;\n    max-width: 856px ;\n  }\n\n  .id-card-pratinjau > svg,\n  .id-card-pratinjau svg {\n    width: 856px ;\n    max-width: 856px ;\n  }\n}\n\n\n\n/* =========================================================\n   FINAL ID CARD UX\n   - Tidak memotong kartu\n   - Tombol jelas tanpa hover\n   - Preview benar-benar fit\n   - Hanya karyawan aktif yang ditampilkan dari TS\n   ========================================================= */\n\n.id-card-module {\n  width: 100% ;\n  min-width: 0 ;\n  overflow-x: hidden ;\n}\n\n.id-card-layout {\n  width: 100% ;\n  min-width: 0 ;\n  grid-template-columns: minmax(0, 1fr) minmax(250px, 300px) ;\n}\n\n.id-card-pratinjau-panel {\n  min-width: 0 ;\n  overflow: visible ;\n}\n\n.id-card-pratinjau {\n  width: 100% ;\n  max-width: 856px ;\n  margin: 0 auto ;\n  min-width: 0 ;\n  aspect-ratio: 856 / 540 ;\n  overflow: visible ;\n  box-sizing: border-box ;\n}\n\n.id-card-pratinjau svg,\n.id-card-pratinjau > svg {\n  display: block ;\n  width: 100% ;\n  height: auto ;\n  max-width: 100% ;\n  min-width: 0 ;\n  margin: 0 auto ;\n}\n\n.id-card-actions {\n  display: flex ;\n  justify-content: center ;\n  align-items: stretch ;\n  flex-wrap: wrap ;\n  gap: 10px ;\n}\n\n.id-card-actions .primary,\n.id-card-actions button.primary {\n  background: #d6ae58 ;\n  color: #0b1222 ;\n  border: 2px solid #f0d68c ;\n  box-shadow: none ;\n  opacity: 1 ;\n  filter: none ;\n}\n\n.id-card-actions .secondary,\n.id-card-actions button.secondary {\n  background: #172033 ;\n  color: #f8fafc ;\n  border: 2px solid #d6ae58 ;\n  box-shadow: none ;\n  opacity: 1 ;\n  filter: none ;\n}\n\n.id-card-actions .primary:hover,\n.id-card-actions .secondary:hover {\n  opacity: 1 ;\n}\n\n.id-card-actions button:disabled {\n  opacity: .55 ;\n}\n\n.side-switch {\n  border: 2px solid #d6ae58 ;\n  background: #101827 ;\n}\n\n.side-switch button {\n  background: #172033 ;\n  color: #e2e5ea ;\n  border: 0 ;\n}\n\n.side-switch button.active {\n  background: #d6ae58 ;\n  color: #0b1222 ;\n  font-weight: 800 ;\n}\n\n.id-card-toolbar input,\n.id-card-toolbar select {\n  background: #111b33 ;\n  color: #f8fafc ;\n  border: 2px solid #d6ae58 ;\n}\n\n.id-card-toolbar input::placeholder {\n  color: #aeb7c5 ;\n}\n\n.id-card-list {\n  min-width: 0 ;\n  overflow: hidden ;\n}\n\n.id-employee-row {\n  min-width: 0 ;\n}\n\n.id-employee-row b {\n  color: #f8fafc ;\n}\n\n.id-employee-row small {\n  color: #aeb7c5 ;\n}\n\n.id-avatar {\n  background: #172033 ;\n  color: #f0d68c ;\n  border: 1px solid #d6ae58 ;\n}\n\n@media (max-width: 1100px) {\n  .id-card-layout {\n    grid-template-columns: minmax(0, 1fr) ;\n  }\n\n  .id-card-pratinjau {\n    max-width: 856px ;\n  }\n}\n\n@media (max-width: 700px) {\n  .id-card-actions {\n    flex-direction: column ;\n  }\n\n  .id-card-actions button {\n    width: 100% ;\n  }\n\n  .id-card-pratinjau {\n    width: 100% ;\n    max-width: 100% ;\n  }\n}\n\n\n.si-debar-floating-nav {\n  position: fixed;\n  left: 193px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n\n  width: 40px;\n  border: 1px solid #d0d5dd;\n  border-radius: 10px;\n  background: #ffffff;\n\n  box-shadow:\n    0 4px 12px rgba(16, 24, 40, 0.12),\n    0 1px 3px rgba(16, 24, 40, 0.08);\n}\n";
const FUTURE_STYLES = String.raw`/* =========================================================
   PROJECT BY TIRTA — COSMIC FUTURE UI
   ========================================================= */
:root {
  --pt-bg-base: #050a14;
  --pt-bg-deep: #02050c;
  --pt-surface: rgba(10, 20, 38, .68);
  --pt-surface-strong: rgba(10, 18, 32, .88);
  --pt-line: rgba(215, 177, 92, .68);
  --pt-line-soft: rgba(215, 177, 92, .28);
  --pt-text: #f5f7fb;
  --pt-muted: #9ba8bb;
  --pt-accent: #e2b75e;
  --pt-accent-2: #8bc7ff;
  --pt-success: #49d6a1;
  --pt-danger: #ff7187;
  --pt-radius-xl: 28px;
  --pt-radius-lg: 20px;
  --pt-radius-md: 16px;
  --pt-glow: 0 16px 60px rgba(0,0,0,.34), 0 0 0 1px rgba(255,255,255,.025) inset;
}
html, body, #root { background: var(--pt-bg-deep) ; color: var(--pt-text) ; }
body {
  min-width: 320px;
  overflow-x: hidden;
  background: radial-gradient(circle at 50% -10%, rgba(103,154,255,.10), transparent 35%), linear-gradient(180deg, var(--pt-bg-base) 0%, var(--pt-bg-deep) 100%) ;
}
body::before {
  content: ""; position: fixed; inset: -7%; z-index: -2; pointer-events: none; opacity: .96;
  background: radial-gradient(circle at 78% 13%, rgba(226,183,94,.24) 0 3%, rgba(226,183,94,.08) 5%, transparent 14%), radial-gradient(circle at 78% 13%, rgba(255,173,71,.14) 0 8%, transparent 20%), radial-gradient(circle at 14% 76%, rgba(48,122,255,.14), transparent 24%), radial-gradient(circle at 88% 82%, rgba(112,70,255,.12), transparent 25%), linear-gradient(180deg, transparent 0%, rgba(0,0,0,.18) 80%);
  filter: saturate(1.08);
  transform: translate3d(0,0,0) scale(1.04);
  animation: pt-cosmic-drift 28s ease-in-out infinite alternate;
  will-change: transform, opacity;
}
body::after {
  content: ""; position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: .36;
  background-image: radial-gradient(circle at 12% 14%, rgba(255,255,255,.9) 0 1px, transparent 1.5px), radial-gradient(circle at 27% 34%, rgba(255,255,255,.7) 0 1px, transparent 1.4px), radial-gradient(circle at 41% 12%, rgba(255,255,255,.75) 0 1px, transparent 1.4px), radial-gradient(circle at 61% 24%, rgba(255,255,255,.65) 0 1px, transparent 1.5px), radial-gradient(circle at 83% 37%, rgba(255,255,255,.72) 0 1px, transparent 1.4px), radial-gradient(circle at 72% 70%, rgba(255,255,255,.72) 0 1px, transparent 1.4px), radial-gradient(circle at 26% 84%, rgba(255,255,255,.6) 0 1px, transparent 1.3px), radial-gradient(circle at 91% 88%, rgba(255,255,255,.7) 0 1px, transparent 1.3px);
  animation: pt-stars 22s linear infinite alternate, pt-stars-twinkle 4.8s ease-in-out infinite;
  will-change: transform, opacity;
}
@keyframes pt-stars { from { transform: translate3d(0,0,0) scale(1); opacity: .28; } to { transform: translate3d(-8px,4px,0) scale(1.02); opacity: .44; } }
@keyframes pt-stars-twinkle { 0%, 100% { filter: brightness(.86); } 50% { filter: brightness(1.22); } }
@keyframes pt-cosmic-drift { from { transform: translate3d(-1.5%, -1%, 0) scale(1.04); opacity: .88; } to { transform: translate3d(1.5%, 1%, 0) scale(1.08); opacity: 1; } }
html[data-cosmic-theme="sun"] { --pt-bg-base:#0a111f; --pt-bg-deep:#030710; --pt-accent:#f6c767; --pt-accent-2:#ff985d; }
html[data-cosmic-theme="moon"] { --pt-bg-base:#071222; --pt-bg-deep:#020712; --pt-accent:#e4d1a0; --pt-accent-2:#83bdfb; }
html[data-cosmic-theme="galaxy"] { --pt-bg-base:#0d0820; --pt-bg-deep:#03020a; --pt-accent:#d7adff; --pt-accent-2:#7aa9ff; }
html[data-cosmic-theme="blackhole"] { --pt-bg-base:#06070a; --pt-bg-deep:#010204; --pt-accent:#e8c36f; --pt-accent-2:#63d7ff; }
html[data-cosmic-theme="nebula"] { --pt-bg-base:#100614; --pt-bg-deep:#03040b; --pt-accent:#ffbfe8; --pt-accent-2:#71d5ff; }
html[data-cosmic-theme="sun"] body::before { background: radial-gradient(circle at 77% 16%, rgba(255,247,194,.44) 0 2.6%, rgba(255,180,65,.30) 4%, rgba(255,132,52,.14) 8%, transparent 18%), radial-gradient(ellipse at 74% 18%, rgba(255,196,92,.16), transparent 24%), radial-gradient(ellipse at 22% 68%, rgba(255,127,59,.11), transparent 22%); animation: pt-sun-breathe 8s ease-in-out infinite alternate; }
html[data-cosmic-theme="moon"] body::before { background: radial-gradient(circle at 76% 14%, rgba(235,242,255,.28) 0 4.4%, rgba(149,187,255,.14) 9%, transparent 21%), radial-gradient(circle at 76% 14%, rgba(115,183,255,.12) 0 15%, transparent 27%), radial-gradient(circle at 14% 74%, rgba(63,133,255,.14), transparent 26%), radial-gradient(circle at 85% 78%, rgba(127,96,255,.10), transparent 25%); animation: pt-moon-drift 19s ease-in-out infinite alternate; }
html[data-cosmic-theme="galaxy"] body::before { background: radial-gradient(ellipse at 71% 18%, rgba(170,118,255,.38) 0 3%, rgba(112,62,233,.16) 9%, transparent 23%), radial-gradient(ellipse at 67% 28%, rgba(76,170,255,.20), transparent 29%), radial-gradient(ellipse at 34% 72%, rgba(208,75,255,.17), transparent 25%), radial-gradient(circle at 14% 72%, rgba(43,114,255,.14), transparent 28%); animation: pt-galaxy-rotate 34s linear infinite; }
html[data-cosmic-theme="blackhole"] body::before { background: radial-gradient(circle at 75% 16%, rgba(0,0,0,.98) 0 4.2%, transparent 4.4%), radial-gradient(ellipse at 75% 16%, transparent 0 5%, rgba(94,220,255,.40) 6.2%, rgba(227,150,63,.34) 9%, transparent 14%), conic-gradient(from 20deg at 75% 16%, transparent 0 17%, rgba(72,192,255,.22) 28%, transparent 41%, rgba(255,164,71,.15) 58%, transparent 76%), radial-gradient(ellipse at 64% 30%, rgba(0,158,255,.10), transparent 28%); animation: pt-blackhole-orbit 18s linear infinite; }
html[data-cosmic-theme="nebula"] body::before { background: radial-gradient(circle at 72% 17%, rgba(255,144,213,.30) 0 5%, transparent 20%), radial-gradient(ellipse at 48% 23%, rgba(92,162,255,.23), transparent 28%), radial-gradient(ellipse at 72% 72%, rgba(255,86,155,.16), transparent 24%), radial-gradient(ellipse at 26% 66%, rgba(104,81,255,.18), transparent 28%); animation: pt-nebula-flow 24s ease-in-out infinite alternate; }
@keyframes pt-sun-breathe { from { transform: scale(1.02); filter: saturate(1.02) brightness(.98); } to { transform: scale(1.07); filter: saturate(1.18) brightness(1.08); } }
@keyframes pt-moon-drift { from { transform: translate3d(-.5%, -.4%, 0) scale(1.03); opacity: .82; } to { transform: translate3d(.8%, .6%, 0) scale(1.08); opacity: 1; } }
@keyframes pt-galaxy-rotate { from { transform: rotate(-1.5deg) scale(1.05); } to { transform: rotate(1.5deg) scale(1.09); } }
@keyframes pt-blackhole-orbit { from { transform: rotate(0deg) scale(1.03); } to { transform: rotate(360deg) scale(1.03); } }
@keyframes pt-nebula-flow { 0% { transform: translate3d(-1.2%, 0, 0) scale(1.03); filter: hue-rotate(0deg) saturate(1.04); } 50% { transform: translate3d(.7%, -.8%, 0) scale(1.07); filter: hue-rotate(8deg) saturate(1.14); } 100% { transform: translate3d(1.2%, .4%, 0) scale(1.04); filter: hue-rotate(-6deg) saturate(1.08); } }
.app-root { min-height:100vh; position:relative; }
.talenta-shell, .employee-portal, .public-home, .public-page { position:relative; isolation:isolate; }
.talenta-shell::before, .employee-portal::before, .public-home::before { content:""; position:fixed; inset:0; z-index:-1; pointer-events:none; background:radial-gradient(circle at 50% 0%, rgba(127,170,255,.06), transparent 32%); }
.talenta-shell { min-height:100vh; display:flex ; background:transparent ; }
.sidebar, .talenta-sidebar { background:linear-gradient(180deg, rgba(6,14,27,.94), rgba(4,9,18,.95)) ; border-right:1px solid var(--pt-line) ; box-shadow:24px 0 80px rgba(0,0,0,.24), inset -1px 0 rgba(255,255,255,.03) ; backdrop-filter:blur(24px) saturate(145%); -webkit-backdrop-filter:blur(24px) saturate(145%); }
.sidebar-head, .brand { background:linear-gradient(180deg, rgba(255,255,255,.025), transparent) ; }
.brand-mark, .unified-logo, .employee-logo { background:radial-gradient(circle at 35% 25%, rgba(255,255,255,.12), rgba(8,18,34,.92)) ; border-color:var(--pt-accent) ; box-shadow:0 0 24px color-mix(in srgb, var(--pt-accent) 20%, transparent), 0 12px 28px rgba(0,0,0,.22) ; }
.brand b, .unified-brand strong, .employee-brand strong { color:var(--pt-text) ; }
.brand small, .unified-brand small, .employee-brand small { color:var(--pt-muted) ; }
.nav-group { margin-inline:10px; }
.nav-title { color:var(--pt-muted) ; letter-spacing:.08em; text-transform:uppercase; }
.nav-item { color:#c8d0de ; border:1px solid transparent ; border-radius:15px ; margin:3px 0 ; background:transparent ; transition:transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease, box-shadow .18s ease; }
.nav-item:hover { transform:translateX(3px); color:#fff ; background:rgba(255,255,255,.045) ; border-color:rgba(255,255,255,.06) ; }
.nav-item.active { color:#07111f ; background:linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 58%, #fff 42%)) ; border-color:var(--pt-accent) ; box-shadow:0 8px 24px color-mix(in srgb, var(--pt-accent) 20%, transparent), inset 0 1px rgba(255,255,255,.38) ; }
.sidebar-bottom { border-top-color:rgba(255,255,255,.08) ; }
.logout { color:#cbd5e1 ; background:rgba(255,255,255,.035) ; border:1px solid rgba(255,255,255,.06) ; border-radius:12px ; }
.talenta-main { flex:1; min-width:0; background:transparent ; }
.topbar { position:sticky ; top:0; z-index:20; padding:14px 24px ; background:linear-gradient(180deg, rgba(4,9,17,.90), rgba(4,9,17,.72)) ; border-bottom:1px solid rgba(255,255,255,.06) ; box-shadow:0 12px 44px rgba(0,0,0,.16) ; backdrop-filter:blur(24px) saturate(150%); -webkit-backdrop-filter:blur(24px) saturate(150%); }
.search-global { position:absolute ; left:50% ; top:50% ; transform:translate(-50%,-50%) ; width:min(440px,42vw) ; max-width:520px; background:rgba(11,24,44,.64) ; border:1px solid rgba(158,191,255,.18) ; box-shadow:inset 0 1px rgba(255,255,255,.05), 0 10px 35px rgba(0,0,0,.18) ; border-radius:999px ; backdrop-filter:blur(18px); }
.search-global input { color:#fff ; background:transparent ; }
.search-global input::placeholder { color:#8492a8 ; }
.icon-btn, .avatar-button { color:#dfe7f7 ; background:rgba(255,255,255,.035) ; border-color:rgba(255,255,255,.07) ; box-shadow:inset 0 1px rgba(255,255,255,.03) ; }
.avatar-button { border-color:var(--pt-accent) ; box-shadow:0 0 0 3px rgba(255,255,255,.03), 0 0 18px color-mix(in srgb, var(--pt-accent) 14%, transparent) ; }
.page { padding:26px 28px 44px ; max-width:1680px ; margin:0 auto ; animation:pt-page-arrive .65s ease both; }
@keyframes pt-page-arrive { from { opacity:.82; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
.page-heading, .employee-heading { margin-bottom:22px ; }
.page-heading h1, .employee-heading h1 { color:#fff ; font-size:clamp(28px,3vw,42px) ; letter-spacing:-.035em ; text-shadow:0 10px 30px rgba(0,0,0,.28); }
.page-heading p, .panel-head p, .employee-heading p { color:var(--pt-muted) ; }
.eyebrow, .portal-eyebrow, .card-kicker { color:var(--pt-accent) ; letter-spacing:.14em ; }
.stat-grid, .content-grid, .portal-grid, .attendance-grid, .ess-kpis, .payslip-grid { gap:16px ; }
.stat-card, .panel, .quick, .form-panel, .report-card, .org-card, .calendar-card, .feature-card, .setting-card, .info-box, .portal-card, .employee-login-card, .theme-card, .custom-theme-panel, .export-card, .detail-panel, .table-card { color:var(--pt-text) ; background:linear-gradient(145deg, rgba(14,27,48,.83), rgba(6,14,28,.72)) ; border:1px solid var(--pt-line) ; border-radius:var(--pt-radius-lg) ; box-shadow:var(--pt-glow) ; backdrop-filter:blur(20px) saturate(145%); -webkit-backdrop-filter:blur(20px) saturate(145%); }
.stat-card, .panel { overflow:hidden; position:relative; }
.stat-card::before, .panel::before, .portal-card::before, .export-card::before { content:""; position:absolute; inset:0; pointer-events:none; background:radial-gradient(circle at 90% 0%, color-mix(in srgb, var(--pt-accent) 13%, transparent), transparent 28%); animation:pt-card-glow 9s ease-in-out infinite alternate; }
@keyframes pt-card-glow { from { transform:translate3d(-2%,0,0) scale(1); opacity:.70; } to { transform:translate3d(2%,1%,0) scale(1.03); opacity:1; } }
.stat-card:hover, .panel:hover, .portal-card:hover, .report-card:hover, .feature-card:hover { transform:translateY(-2px); border-color:color-mix(in srgb, var(--pt-accent) 82%, #fff 18%) ; box-shadow:0 22px 70px rgba(0,0,0,.36), 0 0 26px color-mix(in srgb, var(--pt-accent) 10%, transparent) ; }
.stat-card strong, .mini-kpi b, .ess-kpi strong { color:#fff ; font-variant-numeric:tabular-nums; }
.stat-card span, .stat-card small, .mini-kpi span, .ess-kpi span { color:var(--pt-muted) ; }
.stat-icon, .quick-icon, .org-icon, .feature-icon, .setting-icon { background:rgba(255,255,255,.06) ; color:var(--pt-accent) ; border:1px solid var(--pt-line-soft) ; box-shadow:0 0 18px color-mix(in srgb, var(--pt-accent) 10%, transparent); }
.panel-head h2, .quick h2, .settings h2, .org-card h3, .calendar-card h3, .feature-card h3, .report-card h3, .setting-card h3, .card-title h2 { color:#fff ; }
.primary, .portal-primary, .unified-login-button, .public-primary, .public-cta { border-radius:13px ; border:1px solid color-mix(in srgb, var(--pt-accent) 72%, #fff 28%) ; background:linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 62%, #fff 38%)) ; color:#08111d ; box-shadow:0 10px 28px color-mix(in srgb, var(--pt-accent) 20%, transparent) ; }
.secondary, .portal-secondary, .public-secondary { border-radius:13px ; border:1px solid rgba(255,255,255,.11) ; background:rgba(255,255,255,.045) ; color:#eef3fb ; }
.link-btn { color:var(--pt-accent-2) ; }
.primary:hover, .secondary:hover, .portal-primary:hover, .portal-secondary:hover, .public-primary:hover, .public-secondary:hover { transform:translateY(-1px); filter:brightness(1.04); }
.table-wrap { border-radius:16px; overflow:auto; border:1px solid rgba(255,255,255,.06); }
table th { background:rgba(255,255,255,.035) ; color:#aebbd0 ; border-bottom-color:rgba(255,255,255,.08) ; font-size:11px ; letter-spacing:.06em; text-transform:uppercase; }
table td { color:#dfe6f1 ; border-bottom-color:rgba(255,255,255,.05) ; }
tbody tr:hover { background:rgba(255,255,255,.025) ; }
.form-grid input, .form-grid select, .form-grid textarea, .toolbar-panel input, .toolbar-panel select, .toolbar-panel textarea, .employee-form input, .employee-form select, .employee-form textarea, .unified-login-form input, .unified-login-form select { color:#eef4ff ; background:rgba(7,16,30,.72) ; border:1px solid rgba(141,171,226,.20) ; border-radius:13px ; box-shadow:inset 0 1px rgba(255,255,255,.03) ; }
.form-grid label, .login-card label, .employee-form label, .unified-login-form label { color:#cdd7e7 ; }
input:focus, select:focus, textarea:focus { border-color:var(--pt-accent) ; box-shadow:0 0 0 3px color-mix(in srgb, var(--pt-accent) 14%, transparent) ; }
.status, .status-badge, .badge-soft { border-radius:999px ; }
.green { color:var(--pt-success) ; }
.status.green { background:rgba(73,214,161,.12) ; border-color:rgba(73,214,161,.22) ; }
.status.orange { background:rgba(255,193,93,.12) ; border-color:rgba(255,193,93,.22) ; }
.status.blue { background:rgba(99,176,255,.12) ; border-color:rgba(99,176,255,.22) ; }
.status.red { background:rgba(255,113,135,.12) ; border-color:rgba(255,113,135,.22) ; }
.admin-floating-notification-group { filter:drop-shadow(0 16px 40px rgba(0,0,0,.32)); }
.admin-floating-action { background:rgba(7,16,30,.84) ; border:1px solid rgba(255,255,255,.08) ; color:#fff ; backdrop-filter:blur(16px); }
.admin-floating-action.active { border-color:var(--pt-accent) ; box-shadow:0 0 22px color-mix(in srgb, var(--pt-accent) 18%, transparent) ; }
.admin-notification-dropdown, .profile-menu, .role-menu, .profile-language-options { background:rgba(7,16,30,.92) ; color:#fff ; border:1px solid var(--pt-line) ; box-shadow:0 22px 70px rgba(0,0,0,.5) ; backdrop-filter:blur(26px) saturate(145%); }
.admin-notification-dropdown-item:hover, .profile-menu button:hover, .profile-language-options button:hover { background:rgba(255,255,255,.05) ; }
.employee-portal { min-height:100vh; background:transparent ; }
.employee-topbar { background:rgba(4,9,17,.78) ; border-bottom:1px solid rgba(255,255,255,.07) ; backdrop-filter:blur(22px) saturate(150%); }
.employee-page { padding-top:28px ; }
.employee-tabs { background:rgba(7,16,30,.64) ; border:1px solid rgba(255,255,255,.08) ; border-radius:999px ; padding:5px ; box-shadow:inset 0 1px rgba(255,255,255,.03) ; }
.employee-tabs button { color:#aeb8c9 ; border-radius:999px ; background:transparent ; }
.employee-tabs button.active { color:#07111f ; background:linear-gradient(135deg, var(--pt-accent), #fff0c7) ; box-shadow:0 8px 22px color-mix(in srgb, var(--pt-accent) 18%, transparent) ; }
.portal-info, .portal-error { border-radius:15px ; border-width:1px ; }
.public-home, .unified-login-page { background:transparent ; }
.public-header { background:rgba(3,8,16,.72) ; border-bottom:1px solid rgba(255,255,255,.06) ; backdrop-filter:blur(22px); }
.public-brand strong, .public-hero h1, .public-hero h2, .unified-login-heading h1 { color:#fff ; }
.public-hero p, .public-trust, .public-feature p, .unified-login-heading p { color:var(--pt-muted) ; }
.unified-login-card, .registration-card { background:linear-gradient(145deg, rgba(13,25,44,.86), rgba(5,12,24,.80)) ; border:1px solid var(--pt-line) ; box-shadow:0 24px 90px rgba(0,0,0,.38), 0 0 30px color-mix(in srgb, var(--pt-accent) 8%, transparent) ; backdrop-filter:blur(24px); }
.unified-login-card { border-radius:28px ; }
.unified-login-form input::placeholder { color:#78879b ; }
.unified-login-error { background:rgba(255,88,110,.10) ; border-color:rgba(255,113,135,.3) ; color:#ff9eae ; }
.unified-login-success { background:rgba(73,214,161,.10) ; border-color:rgba(73,214,161,.26) ; color:#79e1ba ; }
.cosmic-theme-dock { padding:10px 10px 12px; margin:8px 10px 10px; border:1px solid rgba(255,255,255,.07); border-radius:16px; background:rgba(255,255,255,.025); }
.cosmic-theme-dock-label { display:flex; align-items:center; justify-content:space-between; gap:8px; color:#8e9bb0; font-size:10px; text-transform:uppercase; letter-spacing:.12em; margin-bottom:8px; }
.cosmic-theme-dock-row { display:grid; grid-template-columns:repeat(5,1fr); gap:5px; }
.cosmic-theme-dock button { min-width:0; width:100%; height:32px; padding:0; display:flex; align-items:center; justify-content:center; color:#cbd5e1 ; background:rgba(255,255,255,.035) ; border:1px solid rgba(255,255,255,.06) ; border-radius:10px ; }
.cosmic-theme-dock button.active { border-color:var(--pt-accent) ; box-shadow:0 0 16px color-mix(in srgb, var(--pt-accent) 20%, transparent); }
.cosmic-theme-swatch { width:13px; height:13px; border-radius:50%; border:1px solid rgba(255,255,255,.22); }
.cosmic-theme-sun { background:radial-gradient(circle at 35% 35%, #fff7c4, #ffb23d 48%, #9f3e00); }
.cosmic-theme-moon { background:radial-gradient(circle at 35% 30%, #fff, #a7c9ef 52%, #2d4d76); }
.cosmic-theme-galaxy { background:radial-gradient(circle, #d9c0ff, #7e45d8 44%, #16112c); }
.cosmic-theme-blackhole { background:conic-gradient(#62dbff, #e8ae51, #071018, #62dbff); }
.cosmic-theme-nebula { background:radial-gradient(circle, #ffd4eb, #c862d7 46%, #22386e); }
.theme-grid { grid-template-columns:repeat(auto-fit,minmax(210px,1fr)) ; }
.theme-card { overflow:hidden; transition:transform .18s ease, border-color .18s ease, box-shadow .18s ease ; }
.theme-card:hover { transform:translateY(-3px); }
.theme-card.active { border-color:var(--pt-accent) ; box-shadow:0 20px 65px rgba(0,0,0,.35), 0 0 24px color-mix(in srgb, var(--pt-accent) 10%, transparent) ; }
.moon-hero-visual, .portal-quote, .hero-visual, .public-hero-visual { filter:saturate(1.12) contrast(1.05); }
@media (max-width:1180px) { .search-global { width:min(360px,38vw) ; } .page { padding-inline:20px ; } }
@media (max-width:920px) { .search-global { position:static ; transform:none ; width:100% ; max-width:none; order:3; margin-top:10px; } .topbar { flex-wrap:wrap ; } .topbar-left { flex:1; } .top-actions { margin-left:auto; } .stat-grid { grid-template-columns:repeat(2,minmax(0,1fr)) ; } }
@media (max-width:680px) { .page { padding:18px 14px 30px ; } .page-heading h1, .employee-heading h1 { font-size:27px ; } .stat-grid, .stat-grid.three, .ess-kpis { grid-template-columns:1fr ; } .employee-tabs { overflow:auto; justify-content:flex-start; } .employee-tabs button { flex:0 0 auto; } .cosmic-theme-dock { display:none; } }
.cosmic-theme-global-dock { position:fixed; left:50%; bottom:18px; transform:translateX(-50%); z-index:80; display:flex; align-items:center; gap:8px; padding:8px 10px; border:1px solid rgba(255,255,255,.10); border-radius:18px; background:rgba(4,10,20,.76); box-shadow:0 18px 55px rgba(0,0,0,.42), 0 0 30px color-mix(in srgb, var(--pt-accent) 7%, transparent); backdrop-filter:blur(22px) saturate(150%); -webkit-backdrop-filter:blur(22px) saturate(150%); }
.cosmic-theme-global-label { color:#98a6ba; font-size:10px; text-transform:uppercase; letter-spacing:.10em; padding:0 5px; white-space:nowrap; }
.cosmic-theme-global-dock button { width:34px; height:34px; border-radius:11px; border:1px solid rgba(255,255,255,.10); background:rgba(255,255,255,.045); display:grid; place-items:center; padding:0; }
.cosmic-theme-global-dock button.active { border-color:var(--pt-accent); box-shadow:0 0 18px color-mix(in srgb, var(--pt-accent) 18%, transparent), inset 0 1px rgba(255,255,255,.08); }
@media (max-width:680px) { .cosmic-theme-global-dock { left:auto; right:12px; transform:none; bottom:12px; padding:6px; } .cosmic-theme-global-label { display:none; } }

.page-heading, .employee-heading { position:relative; overflow:visible ; }
.page-heading::after, .employee-heading::after { content:""; position:absolute; right:-18px; top:-54px; width:260px; height:150px; pointer-events:none; opacity:.72; border-radius:50%; background:radial-gradient(circle at 65% 45%, color-mix(in srgb, var(--pt-accent-2) 26%, transparent) 0 8%, transparent 21%), radial-gradient(circle at 64% 44%, color-mix(in srgb, var(--pt-accent) 18%, transparent), transparent 38%); filter:blur(4px); animation:pt-heading-pulse 7s ease-in-out infinite alternate; }
@keyframes pt-heading-pulse { from { transform:translate3d(-4px, 2px, 0) scale(.96); opacity:.48; } to { transform:translate3d(5px, -3px, 0) scale(1.06); opacity:.82; } }

@media (prefers-reduced-motion:reduce) { *, *::before, *::after { animation-duration:.001ms ; animation-iteration-count:1 ; scroll-behavior:auto ; transition-duration:.001ms ; } }


/* Project by Tirta — FINAL DARK DRAWER / BUTTON OVERRIDE */

/* Drawer edit karyawan */
.edit-drawer {
  background: #0b1222 ;
  color: #e2e5ea ;
}

.edit-drawer .drawer-head,
.edit-drawer .drawer-foot {
  background: #0b1222 ;
  color: #e2e5ea ;
  border-color: #d6ae58 ;
}

.edit-drawer .drawer-head span,
.edit-drawer .drawer-head h2,
.edit-drawer .drawer-body label,
.edit-drawer .drawer-body strong,
.edit-drawer .drawer-body small,
.edit-drawer .switch-row span {
  color: #e2e5ea ;
}

/* Panel foto */
.edit-drawer .drawer-body > div {
  background: #101827 ;
  border-color: #8f99a8 ;
}

/* Input dan select */
.edit-drawer .drawer-body input:not([type="checkbox"]),
.edit-drawer .drawer-body select,
.edit-drawer .drawer-body textarea {
  background: #101827 ;
  color: #eef3fb ;
  border: 1px solid #8f99a8 ;
}

.edit-drawer .drawer-body input:not([type="checkbox"]):focus,
.edit-drawer .drawer-body select:focus,
.edit-drawer .drawer-body textarea:focus {
  background: #111d35 ;
  color: #ffffff ;
  border-color: #d6ae58 ;
  box-shadow: 0 0 0 3px rgba(214,174,88,.14) ;
}

.edit-drawer .drawer-body input::placeholder,
.edit-drawer .drawer-body textarea::placeholder {
  color: #7f8da3 ;
}

/* Tombol Ganti Foto / tombol secondary */
.edit-drawer button.secondary,
.edit-drawer label.secondary {
  background: #172033 ;
  color: #e2e5ea ;
  border: 1px solid #d6ae58 ;
  box-shadow: none ;
}

.edit-drawer button.secondary:hover,
.edit-drawer label.secondary:hover,
.edit-drawer button.secondary:focus-visible,
.edit-drawer label.secondary:focus-visible {
  background: #263453 ;
  color: #ffffff ;
  border-color: #f0d68c ;
  box-shadow: 0 6px 18px rgba(0,0,0,.30) ;
  filter: none ;
  transform: translateY(-1px);
}

/* Tombol utama */
.edit-drawer button.primary {
  background: linear-gradient(135deg, #d6ae58, #f0d68c) ;
  color: #0b1222 ;
  border: 1px solid #f0d68c ;
  box-shadow: 0 8px 22px rgba(214,174,88,.18) ;
}

.edit-drawer button.primary:hover,
.edit-drawer button.primary:focus-visible {
  background: linear-gradient(135deg, #f0d68c, #d6ae58) ;
  color: #07101f ;
  border-color: #ffe7a8 ;
  box-shadow: 0 10px 26px rgba(214,174,88,.24) ;
  filter: none ;
  transform: translateY(-1px);
}

/* Status aktif */
.edit-drawer .switch-row {
  background: #101827 ;
  border: 1px solid #d6ae58 ;
  color: #e2e5ea ;
}

/* Tombol tutup drawer */
.edit-drawer .icon-btn {
  background: #172033 ;
  color: #e2e5ea ;
  border: 1px solid #d6ae58 ;
}

.edit-drawer .icon-btn:hover {
  background: #263453 ;
  color: #ffffff ;
  border-color: #f0d68c ;
}

/* Drawer tetap gelap di mobile */
@media (max-width: 600px) {
  .edit-drawer,
  .edit-drawer .drawer-head,
  .edit-drawer .drawer-body,
  .edit-drawer .drawer-foot {
    background: #0b1222 ;
  }
}
/* =========================================================
   ID CARD DESIGNER + PUBLIC VERIFICATION
   ========================================================= */
.id-card-designer{padding:18px ;background:linear-gradient(145deg,rgba(13,25,44,.88),rgba(5,12,24,.82)) ;border:1px solid rgba(214,174,88,.38) ;box-shadow:0 18px 55px rgba(0,0,0,.25) }
.id-card-designer-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:16px}
.id-card-designer-head b{display:block;color:#f8fafc;font-size:15px}.id-card-designer-head small{display:block;margin-top:5px;color:#9aa8bb;line-height:1.5;max-width:760px}
.id-card-designer-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.id-card-designer-grid>label{display:flex;flex-direction:column;gap:7px;color:#dfe6f0;font-size:12px;font-weight:700}
.id-card-designer-grid>label input,.id-card-designer-grid>label select{width:100%;min-height:42px;padding:0 12px;border:1px solid #3b4a65;border-radius:10px;background:#0b1528 ;color:#f8fafc ;outline:none}
.id-card-designer-grid>label input[type=file]{padding:8px 10px;height:auto}.id-card-designer-grid>label input:focus,.id-card-designer-grid>label select:focus{border-color:var(--pt-accent) ;box-shadow:0 0 0 3px color-mix(in srgb,var(--pt-accent) 12%,transparent)}
.id-card-designer-toggles{display:flex;align-items:center;gap:16px;flex-wrap:wrap;align-self:end;min-height:42px}.id-card-designer-toggles label{display:flex;align-items:center;gap:7px;color:#dfe6f0;font-size:12px;font-weight:700}.id-card-designer-toggles input{accent-color:var(--pt-accent)}
.id-card-theme-pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:15px}.id-card-theme-pills button{display:flex;align-items:center;gap:7px;padding:8px 11px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:#101b31 ;color:#cbd5e1 }.id-card-theme-pills button span{width:11px;height:11px;border-radius:50%;border:1px solid rgba(255,255,255,.2)}.id-card-theme-pills button.active{border-color:var(--pt-accent) ;color:#fff ;box-shadow:0 0 18px color-mix(in srgb,var(--pt-accent) 10%,transparent)}
.id-card-design-meta{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:13px;padding-top:11px;border-top:1px solid rgba(255,255,255,.06);color:#8f9eb2;font-size:11px}.id-card-design-meta b{font-weight:800}.id-card-alert{padding:12px 14px;border:1px solid rgba(255,129,150,.28);border-radius:12px;background:rgba(255,82,110,.08);color:#ffb0bc;font-size:12px}
.verify-id-page{position:relative;isolation:isolate;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:28px 16px;overflow:hidden;background:radial-gradient(circle at 18% 12%,color-mix(in srgb,var(--pt-accent-2) 12%,transparent),transparent 30%),radial-gradient(circle at 84% 86%,color-mix(in srgb,var(--pt-accent) 10%,transparent),transparent 32%),linear-gradient(145deg,var(--pt-bg-base),var(--pt-bg-deep))}
.verify-id-ambient{position:absolute;inset:auto;pointer-events:none;border-radius:50%;filter:blur(2px);opacity:.5;z-index:-1}.verify-id-ambient-one{width:380px;height:380px;left:-150px;top:-120px;background:radial-gradient(circle,color-mix(in srgb,var(--pt-accent-2) 20%,transparent),transparent 68%);animation:pt-verify-drift-one 10s ease-in-out infinite alternate}.verify-id-ambient-two{width:460px;height:460px;right:-170px;bottom:-180px;background:radial-gradient(circle,color-mix(in srgb,var(--pt-accent) 18%,transparent),transparent 68%);animation:pt-verify-drift-two 13s ease-in-out infinite alternate}
@keyframes pt-verify-drift-one{from{transform:translate3d(0,0,0) scale(.95)}to{transform:translate3d(30px,20px,0) scale(1.08)}}@keyframes pt-verify-drift-two{from{transform:translate3d(0,0,0) scale(1)}to{transform:translate3d(-24px,-18px,0) scale(.92)}}
.verify-id-shell{width:min(700px,100%)}.verify-id-brand{display:flex;align-items:center;gap:13px;margin:0 0 16px 6px}.verify-id-brand img{width:48px;height:48px;object-fit:contain}.verify-id-brand strong{display:block;color:#fff;font-size:18px}.verify-id-brand span{display:block;margin-top:3px;color:#98a6ba;font-size:11px}
.verify-id-card{padding:26px;border:1px solid rgba(214,174,88,.34);border-radius:26px;background:linear-gradient(145deg,rgba(13,25,44,.91),rgba(5,12,24,.88));box-shadow:0 28px 90px rgba(0,0,0,.44),0 0 40px color-mix(in srgb,var(--pt-accent) 7%,transparent);backdrop-filter:blur(20px)}
.verify-id-status{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid rgba(255,255,255,.07);border-radius:17px;background:rgba(255,255,255,.025)}.verify-id-status-icon{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:#172033;border:1px solid var(--pt-accent);color:var(--pt-accent);font-size:22px;font-weight:900}.verify-id-status small{display:block;color:#91a0b4;text-transform:uppercase;letter-spacing:.12em;font-size:10px}.verify-id-status h1{margin:5px 0 0;color:#fff;font-size:22px}.verify-id-status.active .verify-id-status-icon{background:rgba(63,211,157,.09);border-color:rgba(91,232,184,.45);color:#7be4bf}.verify-id-status.inactive .verify-id-status-icon{background:rgba(255,184,76,.09);border-color:rgba(246,199,103,.45);color:#f6c767}.verify-id-status.not-found .verify-id-status-icon{background:rgba(255,88,110,.09);border-color:rgba(255,127,145,.45);color:#ff9eae}
.verify-id-loading{display:flex;justify-content:center;gap:6px;padding:28px 0}.verify-id-loading span{width:8px;height:8px;border-radius:50%;background:var(--pt-accent);animation:pt-verify-dot 1s ease-in-out infinite}.verify-id-loading span:nth-child(2){animation-delay:.12s}.verify-id-loading span:nth-child(3){animation-delay:.24s}@keyframes pt-verify-dot{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-7px);opacity:1}}
.verify-id-safe-badge{margin:18px 0 14px;padding:9px 11px;border:1px solid rgba(91,232,184,.18);border-radius:11px;background:rgba(63,211,157,.06);color:#91e9c8;font-size:11px}.verify-id-safe-badge span{display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;margin-right:7px;background:rgba(91,232,184,.15)}
.verify-id-details{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.verify-id-details>div{padding:13px;border-radius:14px;background:#0c172a;border:1px solid rgba(255,255,255,.06)}.verify-id-details small{display:block;color:#8190a5;font-size:10px;margin-bottom:5px}.verify-id-details strong{display:block;color:#f8fafc;font-size:14px;word-break:break-word}.verify-id-details .status-active{color:#7be4bf}.verify-id-details .status-inactive{color:#ffb3a5}
.verify-id-checked{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:13px;padding:12px 13px;border-radius:12px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.05);font-size:11px}.verify-id-checked span{color:#8593a8}.verify-id-checked strong{color:#dbe3ee}.verify-id-security{margin-top:13px;padding:12px 13px;border-radius:12px;background:rgba(214,174,88,.05);border:1px solid rgba(214,174,88,.15);color:#adb8c8;font-size:11px;line-height:1.6}.verify-id-error,.verify-id-notfound-copy{margin-top:18px;padding:17px;border:1px solid rgba(255,127,145,.2);border-radius:14px;background:rgba(255,88,110,.06);color:#ffb2bd;line-height:1.6}.verify-id-notfound-copy small{display:block;color:#a4afbd;margin-top:8px}.verify-id-home-button{width:100%;height:44px;margin-top:18px;border-radius:12px;border:2px solid var(--pt-accent);background:#172033;color:#f8fafc;font-weight:800}.verify-id-home-button:hover{background:#1d2a43}.verify-id-footer{margin-top:13px;text-align:center;color:#6f7e93;font-size:10px}
@media(max-width:760px){.id-card-designer-grid{grid-template-columns:1fr}.id-card-designer-head{align-items:flex-start;flex-direction:column}.verify-id-page{padding:18px 12px}.verify-id-card{padding:18px;border-radius:20px}.verify-id-details{grid-template-columns:1fr}.verify-id-status h1{font-size:18px}.verify-id-brand{margin-left:2px}}
@media(prefers-reduced-motion:reduce){.verify-id-ambient-one,.verify-id-ambient-two,.verify-id-loading span{animation:none }}


/* =========================================================
   PROJECT BY TIRTA — FINAL RESPONSIVE COSMIC CONSISTENCY
   One visual system for desktop + tablet + mobile.
   ========================================================= */

html,
body,
#root {
  min-height: 100%;
  background: var(--pt-bg-deep, #030710) ;
  color: var(--pt-text, #e8edf5) ;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.talenta-shell,
.talenta-main,
.employee-portal,
.public-page,
.public-home,
.unified-login-page,
.app-loading-screen,
.employee-loading-screen {
  background: transparent ;
  color: var(--pt-text, #e8edf5) ;
}

/* ---------- PUBLIC HOME ---------- */
.public-home {
  min-height: 100vh ;
  color: var(--pt-text, #e8edf5) ;
  background:
    radial-gradient(circle at 76% 12%, color-mix(in srgb, var(--pt-accent) 18%, transparent), transparent 19%),
    radial-gradient(circle at 14% 72%, color-mix(in srgb, var(--pt-accent-2) 12%, transparent), transparent 26%),
    linear-gradient(180deg, var(--pt-bg-base, #0a111f) 0%, var(--pt-bg-deep, #030710) 100%) ;
}

.public-home::before {
  z-index: 0 ;
  background: linear-gradient(120deg, transparent 18%, rgba(255,255,255,.045) 48%, transparent 72%) ;
  animation: pt-public-sheen 16s ease-in-out infinite ;
}

.public-home::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: .22;
  background-image:
    radial-gradient(circle at 9% 14%, rgba(255,255,255,.80) 0 1px, transparent 1.5px),
    radial-gradient(circle at 24% 31%, rgba(255,255,255,.60) 0 1px, transparent 1.5px),
    radial-gradient(circle at 39% 12%, rgba(255,255,255,.72) 0 1px, transparent 1.5px),
    radial-gradient(circle at 57% 25%, rgba(255,255,255,.58) 0 1px, transparent 1.5px),
    radial-gradient(circle at 79% 34%, rgba(255,255,255,.68) 0 1px, transparent 1.5px),
    radial-gradient(circle at 68% 69%, rgba(255,255,255,.62) 0 1px, transparent 1.5px),
    radial-gradient(circle at 28% 82%, rgba(255,255,255,.58) 0 1px, transparent 1.5px),
    radial-gradient(circle at 91% 88%, rgba(255,255,255,.66) 0 1px, transparent 1.5px);
  animation: pt-public-stars 24s ease-in-out infinite alternate ;
}

.public-header,
.public-hero,
.public-features,
.public-home footer {
  position: relative;
  z-index: 1;
}

.public-header {
  border-bottom: 1px solid rgba(214,174,88,.45) ;
  background: rgba(4,9,18,.82) ;
  box-shadow: 0 12px 40px rgba(0,0,0,.28) ;
  backdrop-filter: blur(22px) saturate(145%) ;
  -webkit-backdrop-filter: blur(22px) saturate(145%) ;
}

.public-brand strong,
.public-hero h1,
.public-hero h2,
.public-features b,
.moon-caption b {
  color: #f4f7fb ;
}

.public-brand span,
.public-hero p,
.public-trust,
.public-feature p,
.public-features small,
.moon-caption span {
  color: #aeb9c9 ;
}

.public-header nav a {
  color: #c6d0df ;
}

.public-header nav a:hover {
  color: #f0d68c ;
}

.public-login-link {
  display: inline-flex ;
  align-items: center;
  justify-content: center;
  min-height: 34px ;
  min-width: 72px ;
  padding: 0 12px ;
  border: 1px solid #d6ae58 ;
  border-radius: 10px ;
  background: rgba(214,174,88,.08) ;
  color: #f0d68c ;
  font-size: 10px ;
  font-weight: 850 ;
  line-height: 1 ;
  opacity: 1 ;
  visibility: visible ;
  text-decoration: none ;
}

.public-login-link:hover,
.public-login-link:focus-visible {
  background: rgba(214,174,88,.18) ;
  color: #fff4cc ;
  border-color: #f0d68c ;
  box-shadow: 0 8px 24px rgba(214,174,88,.14) ;
  transform: translateY(-1px);
}

.public-cta,
.public-primary {
  color: #08111d ;
}

.public-secondary {
  background: rgba(18,31,52,.78) ;
  color: #e7edf7 ;
  border: 1px solid rgba(214,174,88,.52) ;
}

.public-secondary:hover,
.public-secondary:focus-visible {
  background: rgba(31,50,81,.92) ;
  color: #fff ;
  border-color: #f0d68c ;
}

.public-features article {
  background: linear-gradient(145deg, rgba(14,27,48,.86), rgba(6,14,28,.78)) ;
  color: var(--pt-text, #e8edf5) ;
  border-color: var(--pt-line, rgba(151,179,224,.18)) ;
  box-shadow: 0 18px 50px rgba(0,0,0,.25) ;
}

.public-features article > span {
  background: rgba(214,174,88,.10) ;
  color: #f0d68c ;
  border: 1px solid rgba(214,174,88,.22) ;
}

/* ---------- LOGIN CARD / MODAL ---------- */
.unified-login-page {
  background:
    radial-gradient(circle at 77% 14%, color-mix(in srgb, var(--pt-accent) 16%, transparent), transparent 22%),
    radial-gradient(circle at 18% 76%, color-mix(in srgb, var(--pt-accent-2) 11%, transparent), transparent 25%),
    linear-gradient(180deg, var(--pt-bg-base, #0a111f), var(--pt-bg-deep, #030710)) ;
}

.unified-login-page::before,
.unified-login-page::after {
  border-color: color-mix(in srgb, var(--pt-accent) 16%, transparent) ;
}

.unified-login-card,
.registration-card {
  background: linear-gradient(145deg, rgba(13,25,44,.92), rgba(5,12,24,.88)) ;
  color: #eef3fb ;
  border: 1px solid var(--pt-line, rgba(151,179,224,.20)) ;
  box-shadow: 0 24px 90px rgba(0,0,0,.42), 0 0 35px color-mix(in srgb, var(--pt-accent) 8%, transparent) ;
}

.unified-login-heading h1,
.unified-login-card .unified-brand strong {
  color: #fff ;
}

.unified-login-heading p,
.unified-login-card .unified-brand small {
  color: #aeb9c9 ;
}

.unified-login-form label,
.unified-login-form label > span {
  color: #d5deea ;
}

.unified-login-form input,
.unified-login-form select,
.unified-login-form textarea {
  background: rgba(7,16,30,.82) ;
  color: #eef4ff ;
  border: 1px solid rgba(141,171,226,.24) ;
}

.unified-login-form input::placeholder,
.unified-login-form textarea::placeholder {
  color: #7f8da3 ;
}

.unified-login-security {
  background: rgba(11,24,44,.72) ;
  border-color: rgba(151,179,224,.18) ;
}

.unified-login-security strong {
  color: #eaf0f8 ;
}

.unified-login-security small,
.unified-login-register {
  color: #9eabbd ;
}

.unified-login-register button,
.password-toggle,
.login-options > button {
  color: #f0d68c ;
}

.login-modal-close {
  background: #172033 ;
  color: #e2e5ea ;
  border: 1px solid #d6ae58 ;
}

.forgot-panel {
  background: #101827 ;
  border-color: rgba(214,174,88,.28) ;
  color: #e8edf5 ;
}

.forgot-panel strong,
.forgot-panel p,
.forgot-panel small {
  color: #d5deea ;
}

.forgot-panel input {
  background: #0b1222 ;
  color: #eef4ff ;
  border-color: rgba(141,171,226,.22) ;
}

/* ---------- GLOBAL CONTROLS ---------- */
input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
select,
textarea {
  color-scheme: dark;
}

.form-grid input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
.form-grid select,
.form-grid textarea,
.toolbar-panel input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
.toolbar-panel select,
.toolbar-panel textarea,
.employee-form input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
.employee-form select,
.employee-form textarea,
.id-card-toolbar input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
.id-card-toolbar select {
  background: rgba(7,16,30,.82) ;
  color: #eef4ff ;
  border-color: rgba(151,179,224,.24) ;
}

.id-card-toolbar input::placeholder {
  color: #7f8da3 ;
}

.form-grid label,
.toolbar-panel label,
.employee-form label,
.login-card label {
  color: #d5deea ;
}

/* ---------- KNOWN LEGACY WHITE SURFACES ---------- */
.id-card-toolbar input,
.id-card-toolbar select,
.side-switch,
.side-switch button,
.id-avatar {
  background: #172033 ;
  color: #e8edf5 ;
}

.side-switch {
  border-color: #d6ae58 ;
}

.side-switch button.active {
  background: #d6ae58 ;
  color: #0b1222 ;
}

.id-card-preview-panel,
.id-card-list,
.id-card-module {
  background: linear-gradient(145deg, rgba(14,27,48,.83), rgba(6,14,28,.72)) ;
  color: #e8edf5 ;
  border-color: rgba(151,179,224,.18) ;
}

.id-employee-row {
  border-top-color: rgba(255,255,255,.08) ;
}

.id-card-note,
.id-list-head small,
.id-employee-row small {
  color: #9eabbd ;
}

/* ---------- GENERIC PANELS / TABLES ---------- */
.panel,
.form-panel,
.table-card,
.detail-panel,
.export-card,
.setting-card,
.theme-card,
.report-card,
.org-card,
.calendar-card,
.feature-card,
.info-box,
.quick,
.portal-card,
.custom-theme-panel {
  background: linear-gradient(145deg, rgba(14,27,48,.84), rgba(6,14,28,.74)) ;
  color: #e8edf5 ;
  border-color: var(--pt-line, rgba(151,179,224,.18)) ;
}

.table-wrap {
  background: rgba(6,14,28,.42) ;
  border-color: rgba(151,179,224,.14) ;
}

table th {
  background: rgba(255,255,255,.045) ;
  color: #b9c5d5 ;
}

table td {
  color: #e1e8f2 ;
}

.table-panel,
.dashboard-card,
.kpi-card,
.chart-card {
  background: transparent ;
  color: #e8edf5 ;
}

/* ---------- BUTTON CONSISTENCY ---------- */
.primary,
.portal-primary,
.public-primary,
.public-cta {
  background: linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 58%, #fff 42%)) ;
  color: #08111d ;
  border-color: color-mix(in srgb, var(--pt-accent) 78%, #fff 22%) ;
  opacity: 1 ;
}

.secondary,
.portal-secondary,
.public-secondary {
  background: rgba(23,32,51,.88) ;
  color: #edf3fb ;
  border: 1px solid rgba(214,174,88,.42) ;
  opacity: 1 ;
}

.primary:hover,
.portal-primary:hover,
.public-primary:hover,
.public-cta:hover,
.secondary:hover,
.portal-secondary:hover,
.public-secondary:hover {
  filter: none ;
  opacity: 1 ;
}

.secondary:hover,
.portal-secondary:hover,
.public-secondary:hover {
  background: #263453 ;
  color: #fff ;
  border-color: #f0d68c ;
}

/* ---------- DRAWERS / MODALS ---------- */
.drawer-backdrop,
.modal-overlay,
.profile-panel-overlay {
  background: rgba(2,7,16,.72) ;
  backdrop-filter: blur(8px) ;
  -webkit-backdrop-filter: blur(8px) ;
}

.drawer,
.edit-drawer,
.employee-detail-card,
.profile-panel,
.simple-modal,
.export-card {
  background: #0b1222 ;
  color: #e2e5ea ;
  border-color: rgba(214,174,88,.40) ;
}

.drawer-head,
.drawer-body,
.drawer-foot,
.export-head,
.export-foot {
  color: #e2e5ea ;
}

.drawer-body input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
.drawer-body select,
.drawer-body textarea {
  background: #101827 ;
  color: #eef3fb ;
  border-color: #8f99a8 ;
}

.drawer-body label,
.drawer-body strong,
.drawer-body small {
  color: #e2e5ea ;
}

.drawer-foot,
.export-foot {
  background: #0b1222 ;
  border-color: rgba(214,174,88,.40) ;
}

/* ---------- SIDEBAR / TOPBAR ---------- */
.sidebar,
.talenta-sidebar {
  background: linear-gradient(180deg, rgba(6,14,27,.96), rgba(4,9,18,.98)) ;
  border-right: 2px solid var(--pt-accent) ;
}

.nav-item {
  color: #cbd5e1 ;
}

.nav-item.active {
  background: linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 58%, #fff 42%)) ;
  color: #07111f ;
  border-color: var(--pt-accent) ;
}

.topbar {
  background: rgba(4,9,17,.88) ;
  border-bottom: 1px solid rgba(214,174,88,.35) ;
}

.search-global {
  background: rgba(11,24,44,.82) ;
  border-color: rgba(214,174,88,.32) ;
}

.search-global input::placeholder {
  color: #8492a8 ;
}

/* ---------- ANIMATION LAYERS ---------- */
.pt-cosmic-bg,
.pt-cosmic-stars {
  will-change: transform, opacity;
}

@keyframes pt-public-sheen {
  from { transform: translateX(-110%); opacity: .15; }
  to { transform: translateX(110%); opacity: .45; }
}

@keyframes pt-public-stars {
  from { transform: translate3d(-4px,0,0) scale(1); opacity: .16; }
  to { transform: translate3d(4px,3px,0) scale(1.02); opacity: .28; }
}

/* ---------- RESPONSIVE ---------- */
@media (min-width: 901px) {
  .public-login-link {
    min-width: 72px ;
  }
}

@media (max-width: 920px) {
  .public-header {
    height: auto ;
    min-height: 60px ;
  }

  .public-header nav {
    gap: 9px ;
  }

  .public-login-link {
    min-width: 64px ;
  }
}

@media (max-width: 680px) {
  .public-header {
    min-height: 58px ;
    padding: 0 12px ;
  }

  .public-login-link {
    min-height: 32px ;
    min-width: 58px ;
    padding: 0 9px ;
    font-size: 9px ;
  }

  .public-header nav {
    gap: 7px ;
  }
}

@media (max-width: 400px) {
  .public-login-link {
    display: inline-flex ;
    visibility: visible ;
    opacity: 1 ;
  }
}



/* Project by Tirta — FINAL EMPLOYEE / ACTION UI SYSTEM */

/* =========================================================
   GLOBAL LAYERING
   ========================================================= */
.app-root,
.talenta-shell,
.employee-portal-cosmic,
.employee-page {
  position: relative ;
  isolation: isolate ;
}

.talenta-shell,
.talenta-main,
.employee-portal-cosmic,
.employee-page {
  min-height: 100vh ;
  background: transparent ;
}

.talenta-shell::before,
.employee-portal-cosmic::before {
  content: "" ;
  position: fixed ;
  inset: 0 ;
  z-index: -2 ;
  pointer-events: none ;
  transition: opacity .35s ease, background .35s ease ;
}

.talenta-shell::after,
.employee-portal-cosmic::after {
  content: "" ;
  position: fixed ;
  inset: 0 ;
  z-index: -1 ;
  pointer-events: none ;
  opacity: .72 ;
}

/* =========================================================
   FIVE REAL COSMIC ATMOSPHERES — not just accent colors
   ========================================================= */
html[data-cosmic-theme="sun"] .talenta-shell::before,
html[data-cosmic-theme="sun"] .employee-portal-cosmic::before {
  background:
    radial-gradient(circle at 82% 11%, rgba(255,208,112,.24) 0 4%, rgba(255,145,54,.09) 10%, transparent 24%),
    radial-gradient(circle at 13% 72%, rgba(255,104,39,.15), transparent 24%),
    linear-gradient(180deg,#17100b 0%,#07101d 58%,#020509 100%) ;
}
html[data-cosmic-theme="sun"] .talenta-shell::after,
html[data-cosmic-theme="sun"] .employee-portal-cosmic::after {
  background:
    conic-gradient(from 125deg at 84% 12%, transparent 0 25%, rgba(255,198,91,.16) 31%, transparent 39% 100%),
    radial-gradient(circle at 24% 19%, rgba(255,255,255,.42) 0 1px, transparent 1.8px),
    radial-gradient(circle at 68% 37%, rgba(255,217,145,.35) 0 1px, transparent 1.8px),
    radial-gradient(circle at 86% 74%, rgba(255,166,85,.28) 0 1px, transparent 1.8px);
  animation: pt-sun-ambient 12s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="moon"] .talenta-shell::before,
html[data-cosmic-theme="moon"] .employee-portal-cosmic::before {
  background:
    radial-gradient(circle at 78% 14%, rgba(234,243,255,.18), transparent 17%),
    radial-gradient(circle at 17% 68%, rgba(92,145,220,.12), transparent 25%),
    linear-gradient(180deg,#061326 0%,#040a15 62%,#01040a 100%) ;
}
html[data-cosmic-theme="moon"] .talenta-shell::after,
html[data-cosmic-theme="moon"] .employee-portal-cosmic::after {
  background:
    radial-gradient(circle at 78% 14%, rgba(250,252,255,.48) 0 2%, rgba(182,214,249,.11) 4%, transparent 10%),
    radial-gradient(circle at 10% 19%, rgba(255,255,255,.42) 0 1px, transparent 1.8px),
    radial-gradient(circle at 29% 54%, rgba(255,255,255,.32) 0 1px, transparent 1.6px),
    radial-gradient(circle at 72% 72%, rgba(255,255,255,.30) 0 1px, transparent 1.7px);
  animation: pt-moon-ambient 17s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="galaxy"] .talenta-shell::before,
html[data-cosmic-theme="galaxy"] .employee-portal-cosmic::before {
  background:
    radial-gradient(ellipse at 68% 20%, rgba(175,111,255,.26), transparent 24%),
    radial-gradient(ellipse at 25% 70%, rgba(80,145,255,.20), transparent 28%),
    radial-gradient(ellipse at 52% 44%, rgba(244,107,255,.08), transparent 31%),
    linear-gradient(180deg,#110a26 0%,#050310 66%,#020107 100%) ;
}
html[data-cosmic-theme="galaxy"] .talenta-shell::after,
html[data-cosmic-theme="galaxy"] .employee-portal-cosmic::after {
  background:
    linear-gradient(150deg, transparent 33%, rgba(209,159,255,.10) 45%, transparent 57%),
    radial-gradient(circle at 10% 25%, rgba(255,255,255,.46) 0 1px, transparent 1.8px),
    radial-gradient(circle at 37% 16%, rgba(255,255,255,.42) 0 1px, transparent 1.7px),
    radial-gradient(circle at 77% 31%, rgba(255,255,255,.48) 0 1px, transparent 1.8px),
    radial-gradient(circle at 88% 78%, rgba(255,255,255,.36) 0 1px, transparent 1.7px);
  filter: blur(1px) ;
  animation: pt-galaxy-ambient 18s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="blackhole"] .talenta-shell::before,
html[data-cosmic-theme="blackhole"] .employee-portal-cosmic::before {
  background:
    radial-gradient(ellipse at 72% 20%, #000 0 5%, transparent 5.8% 11%, rgba(232,195,111,.19) 12% 13%, rgba(99,215,255,.16) 14% 15%, transparent 21%),
    radial-gradient(circle at 72% 20%, rgba(99,215,255,.12), transparent 19%),
    linear-gradient(180deg,#06080d 0%,#020306 68%,#010204 100%) ;
}
html[data-cosmic-theme="blackhole"] .talenta-shell::after,
html[data-cosmic-theme="blackhole"] .employee-portal-cosmic::after {
  background:
    conic-gradient(from 18deg at 72% 20%, transparent 0 25%, rgba(232,195,111,.14) 31%, rgba(99,215,255,.12) 38%, transparent 47% 100%),
    radial-gradient(circle at 16% 27%, rgba(255,255,255,.38) 0 1px, transparent 1.8px),
    radial-gradient(circle at 57% 13%, rgba(255,255,255,.32) 0 1px, transparent 1.6px),
    radial-gradient(circle at 86% 67%, rgba(255,255,255,.34) 0 1px, transparent 1.7px);
  animation: pt-blackhole-ambient 10s linear infinite ;
}

html[data-cosmic-theme="nebula"] .talenta-shell::before,
html[data-cosmic-theme="nebula"] .employee-portal-cosmic::before {
  background:
    radial-gradient(ellipse at 69% 19%, rgba(255,135,214,.24), transparent 23%),
    radial-gradient(ellipse at 24% 65%, rgba(92,195,255,.18), transparent 28%),
    radial-gradient(ellipse at 81% 72%, rgba(182,94,255,.14), transparent 25%),
    linear-gradient(180deg,#180918 0%,#060510 68%,#02040a 100%) ;
}
html[data-cosmic-theme="nebula"] .talenta-shell::after,
html[data-cosmic-theme="nebula"] .employee-portal-cosmic::after {
  background:
    radial-gradient(circle at 14% 25%, rgba(255,255,255,.40) 0 1px, transparent 1.7px),
    radial-gradient(circle at 33% 14%, rgba(255,255,255,.34) 0 1px, transparent 1.7px),
    radial-gradient(circle at 58% 36%, rgba(255,255,255,.38) 0 1px, transparent 1.8px),
    radial-gradient(circle at 87% 55%, rgba(255,255,255,.32) 0 1px, transparent 1.7px);
  filter: blur(1px) ;
  animation: pt-nebula-ambient 15s ease-in-out infinite alternate ;
}

@keyframes pt-sun-ambient { from { transform:scale(1) translate3d(-.3%,0,0); opacity:.55; } to { transform:scale(1.05) translate3d(.5%,-.8%,0); opacity:.9; } }
@keyframes pt-moon-ambient { from { transform:translate3d(-.5%,0,0); opacity:.45; } to { transform:translate3d(.8%,-1%,0); opacity:.9; } }
@keyframes pt-galaxy-ambient { from { transform:translate3d(-.8%,.5%,0) scale(1); } to { transform:translate3d(1%,-.8%,0) scale(1.05); } }
@keyframes pt-blackhole-ambient { to { transform:rotate(360deg) scale(1.015); } }
@keyframes pt-nebula-ambient { from { transform:translate3d(-.8%,.8%,0) scale(1); } to { transform:translate3d(1%,-1%,0) scale(1.06); } }

/* =========================================================
   ADMIN TABLE ACTION BUTTONS — no white pills
   ========================================================= */
.row-actions {
  align-items: center ;
  gap: 7px ;
  flex-wrap: wrap ;
}
.row-actions > button,
.row-actions > .link-btn,
.row-actions > .danger-text {
  min-height: 34px ;
  min-width: 60px ;
  padding: 0 11px ;
  border-radius: 10px ;
  border: 1px solid rgba(214,174,88,.52) ;
  background: rgba(7,16,30,.90) ;
  color: #edf3fb ;
  box-shadow: 0 8px 22px rgba(0,0,0,.24) ;
  text-decoration: none ;
  font-size: 10px ;
  font-weight: 800 ;
}
.row-actions > .link-btn:hover,
.row-actions > .link-btn:focus-visible {
  background: rgba(26,43,72,.98) ;
  color: #fff ;
  border-color: var(--pt-accent) ;
}
.row-actions > .danger-text {
  background: rgba(65,13,28,.90) ;
  color: #ffc1cc ;
  border-color: rgba(255,113,135,.46) ;
}
.row-actions > .danger-text:hover,
.row-actions > .danger-text:focus-visible {
  background: rgba(98,17,39,.98) ;
  color: #ffecef ;
  border-color: #ff7187 ;
}

/* =========================================================
   EMPLOYEE PORTAL — PROFESSIONAL HR EXPERIENCE
   ========================================================= */
.employee-topbar {
  min-height: 70px ;
  padding: 0 28px ;
  background: rgba(4,9,18,.88) ;
  border-bottom: 1px solid rgba(214,174,88,.22) ;
  box-shadow: 0 12px 40px rgba(0,0,0,.22) ;
  backdrop-filter: blur(24px) saturate(150%) ;
  -webkit-backdrop-filter: blur(24px) saturate(150%) ;
}
.employee-brand strong { color: #f7f9fc ; letter-spacing: -.02em ; }
.employee-brand small { color: #93a2b7 ; }
.employee-user b { color: #f3f7fb ; }
.employee-user small { color: #8f9eb2 ; }
.portal-logout {
  min-height: 34px ;
  padding: 0 12px ;
  border-radius: 10px ;
  background: rgba(255,255,255,.04) ;
  border: 1px solid rgba(214,174,88,.44) ;
  color: #eef3fb ;
}
.portal-logout:hover { background: rgba(214,174,88,.12) ; color: #fff6da ; }

.employee-page {
  width: min(1440px, calc(100% - 48px)) ;
  margin: 0 auto ;
  padding: 30px 0 72px ;
}
.employee-heading {
  margin-bottom: 18px ;
  padding: 8px 2px 4px ;
}
.employee-heading h1 {
  margin: 4px 0 8px ;
  font-size: clamp(28px, 4vw, 42px) ;
  color: #fff ;
  letter-spacing: -.04em ;
}
.employee-heading p { color: #9aa8bb ; max-width: 760px; line-height: 1.65 ; }
.date-chip {
  padding: 10px 13px ;
  border-radius: 12px ;
  background: rgba(7,16,30,.66) ;
  border: 1px solid rgba(255,255,255,.07) ;
  color: #bdc7d5 ;
}

.employee-tabs {
  display: flex ;
  gap: 5px ;
  padding: 6px ;
  margin-bottom: 16px ;
  border-radius: 16px ;
  background: rgba(5,12,24,.74) ;
  border: 1px solid rgba(255,255,255,.08) ;
  box-shadow: 0 14px 38px rgba(0,0,0,.18) ;
  overflow-x: auto ;
  scrollbar-width: thin;
}
.employee-tabs button {
  flex: 0 0 auto ;
  min-height: 38px ;
  padding: 0 13px ;
  border-radius: 11px ;
  background: transparent ;
  color: #9eabbd ;
  border: 1px solid transparent ;
  font-size: 11px ;
  font-weight: 750 ;
  white-space: nowrap ;
}
.employee-tabs button:hover { color: #fff ; background: rgba(255,255,255,.035) ; }
.employee-tabs button.active {
  color: #07111f ;
  background: linear-gradient(135deg,var(--pt-accent),#fff0c7) ;
  border-color: var(--pt-accent) ;
  box-shadow: 0 7px 22px color-mix(in srgb,var(--pt-accent) 18%,transparent) ;
}

/* KPI strip */
.ess-kpis {
  display: grid ;
  grid-template-columns: repeat(3,minmax(0,1fr)) ;
  gap: 14px ;
  margin-bottom: 14px ;
}
.ess-kpi {
  min-height: 126px ;
  padding: 19px ;
  border-radius: 18px ;
  background: linear-gradient(145deg,rgba(14,27,48,.90),rgba(5,12,24,.80)) ;
  border: 1px solid rgba(255,255,255,.07) ;
  box-shadow: 0 18px 55px rgba(0,0,0,.25) ;
  position: relative ;
  overflow: hidden ;
}
.ess-kpi::after {
  content:"";
  position:absolute;
  inset:auto -30px -55px auto;
  width:170px;height:170px;border-radius:50%;
  background:radial-gradient(circle,color-mix(in srgb,var(--pt-accent) 15%,transparent),transparent 68%);
  pointer-events:none;
}
.ess-kpi small,.ess-kpi span { color:#8796ab ; }
.ess-kpi strong { color:#fff ; font-size:28px ; letter-spacing:-.03em ; }

/* Shared portal card */
.employee-portal-cosmic .portal-card {
  position: relative ;
  overflow: hidden ;
  color: #e9eef6 ;
  background: linear-gradient(145deg,rgba(13,25,44,.91),rgba(5,12,24,.82)) ;
  border: 1px solid rgba(255,255,255,.075) ;
  border-radius: 20px ;
  box-shadow: 0 20px 65px rgba(0,0,0,.28), 0 0 26px color-mix(in srgb,var(--pt-accent) 5%,transparent) ;
  backdrop-filter: blur(20px) saturate(145%) ;
  -webkit-backdrop-filter: blur(20px) saturate(145%) ;
}
.employee-portal-cosmic .portal-card::before {
  content:""; position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(circle at 92% 0%,color-mix(in srgb,var(--pt-accent) 10%,transparent),transparent 26%);
}
.employee-portal-cosmic .card-title h2,
.employee-portal-cosmic .portal-card h2,
.employee-portal-cosmic .portal-card h3 { color:#f7f9fc ; }
.employee-portal-cosmic .card-title p,
.employee-portal-cosmic .muted { color:#8997ab ; }
.employee-portal-cosmic .card-kicker,.employee-portal-cosmic .portal-eyebrow { color:var(--pt-accent) ; }

/* Notices */
.employee-portal-cosmic .portal-info,
.employee-portal-cosmic .portal-error {
  margin: 12px 0 16px ;
  padding: 13px 15px ;
  border-radius: 14px ;
  background: rgba(7,16,30,.78) ;
  box-shadow: 0 14px 34px rgba(0,0,0,.2) ;
}
.employee-portal-cosmic .portal-info { border-color: rgba(91,232,184,.24) ; color:#a7edd4 ; }
.employee-portal-cosmic .portal-error { border-color: rgba(255,113,135,.26) ; color:#ffb8c2 ; }

/* Attendance section */
.attendance-grid { gap: 14px ; }
.attendance-card { padding: 20px ; }
.attendance-meta > div,
.security-box,
.info-list > div,
.balance-list > div,
.request-list > div,
.schedule-item,
.salary-lines > div {
  background: rgba(255,255,255,.025) ;
  border: 1px solid rgba(255,255,255,.055) ;
  border-radius: 13px ;
}
.attendance-meta > div { padding: 13px ; }
.security-box { padding: 13px ; color:#d9e2ee ; }
.security-box p { color:#8d9bb0 ; }
.portal-status-badge,
.status-badge {
  border-radius: 999px ;
  background: rgba(214,174,88,.08) ;
  border: 1px solid rgba(214,174,88,.22) ;
  color:#e7cc91 ;
  padding: 5px 9px ;
}

/* Shared controls */
.employee-portal-cosmic .employee-form input,
.employee-portal-cosmic .employee-form select,
.employee-portal-cosmic .employee-form textarea,
.employee-portal-cosmic .form-two input,
.employee-portal-cosmic input,
.employee-portal-cosmic select,
.employee-portal-cosmic textarea {
  background: rgba(6,14,27,.80) ;
  color:#eef4fd ;
  border:1px solid rgba(141,171,226,.18) ;
  border-radius: 12px ;
}
.employee-portal-cosmic input:focus,
.employee-portal-cosmic select:focus,
.employee-portal-cosmic textarea:focus {
  border-color:var(--pt-accent) ;
  box-shadow:0 0 0 3px color-mix(in srgb,var(--pt-accent) 12%,transparent) ;
}
.employee-portal-cosmic .portal-primary,
.employee-portal-cosmic .portal-secondary {
  min-height: 42px ;
  border-radius: 12px ;
  font-weight: 800 ;
}
.employee-portal-cosmic .portal-primary {
  background: linear-gradient(135deg,var(--pt-accent),#fff0c7) ;
  color:#08111d ;
  border:1px solid var(--pt-accent) ;
  box-shadow:0 9px 24px color-mix(in srgb,var(--pt-accent) 14%,transparent) ;
}
.employee-portal-cosmic .portal-secondary {
  background: rgba(255,255,255,.045) ;
  color:#edf3fb ;
  border:1px solid rgba(214,174,88,.34) ;
}
.employee-portal-cosmic .portal-secondary:hover { background:rgba(214,174,88,.10) ; border-color:var(--pt-accent) ; }

/* =========================================================
   ANNOUNCEMENTS — polished, hierarchy, unread state
   ========================================================= */
.employee-announcement-center {
  padding: 0 ;
}
.employee-announcement-head {
  display:flex ;
  align-items:flex-end ;
  justify-content:space-between ;
  gap:14px ;
  margin-bottom:14px ;
  padding:4px 2px 0 ;
}
.employee-announcement-title h2 {
  margin:5px 0 3px ;
  color:#fff ;
  font-size:26px ;
  letter-spacing:-.03em ;
}
.employee-announcement-head p { margin:0 ; color:#8f9db1 ; }
.employee-announcement-list {
  display:grid ;
  grid-template-columns:repeat(2,minmax(0,1fr)) ;
  gap:14px ;
}
.employee-announcement-item {
  position:relative ;
  overflow:hidden ;
  padding:18px ;
  min-height:200px ;
  display:flex ;
  flex-direction:column ;
  background:linear-gradient(145deg,rgba(13,25,44,.93),rgba(5,12,24,.83)) ;
  border:1px solid rgba(255,255,255,.07) ;
  border-radius:18px ;
  box-shadow:0 18px 55px rgba(0,0,0,.24) ;
}
.employee-announcement-item.is-unread {
  border-color:color-mix(in srgb,var(--pt-accent) 44%,rgba(255,255,255,.10)) ;
  box-shadow:0 18px 58px rgba(0,0,0,.27),0 0 24px color-mix(in srgb,var(--pt-accent) 7%,transparent) ;
}
.employee-announcement-item.is-unread::before {
  content:""; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:linear-gradient(180deg,var(--pt-accent),transparent) ;
}
.employee-announcement-item-title {
  display:flex ;
  align-items:flex-start ;
  justify-content:space-between ;
  gap:10px ;
}
.employee-announcement-item-title strong:last-child {
  flex:1 ;
  color:#f5f8fc ;
  font-size:16px ;
  line-height:1.35 ;
}
.employee-announcement-meta {
  display:block ;
  margin-top:9px ;
  color:#8492a7 ;
  font-size:10px ;
  text-transform:uppercase ;
  letter-spacing:.06em ;
}
.employee-announcement-body {
  margin:14px 0 16px ;
  color:#bac5d4 ;
  line-height:1.7 ;
  flex:1 ;
  white-space:pre-line ;
}
.employee-announcement-read {
  align-self:flex-start ;
  min-height:34px ;
  padding:0 11px ;
  border-radius:10px ;
  background:rgba(255,255,255,.04) ;
  border:1px solid rgba(214,174,88,.34) ;
  color:#e7cc91 ;
  font-size:10px ;
  font-weight:800 ;
}
.employee-announcement-read:hover:not(:disabled) {
  background:rgba(214,174,88,.10) ;
  border-color:var(--pt-accent) ;
  color:#fff3c7 ;
}
.employee-announcement-read:disabled {
  opacity:.72 ;
  cursor:default ;
}

/* =========================================================
   SUGGESTION BOX — professional HR case intake
   ========================================================= */
.suggestion-box {
  padding:20px ;
}
.suggestion-header {
  display:flex ;
  justify-content:space-between ;
  align-items:flex-start ;
  gap:14px ;
  padding-bottom:14px ;
  margin-bottom:4px ;
  border-bottom:1px solid rgba(255,255,255,.055) ;
}
.suggestion-header h2 { margin:5px 0 5px ; color:#fff ; }
.suggestion-header p { color:#929fb2 ; line-height:1.6 ; }
.suggestion-security {
  flex:0 0 auto ;
  padding:6px 9px ;
  border-radius:999px ;
  background:rgba(73,214,161,.06) ;
  border:1px solid rgba(73,214,161,.20) ;
  color:#9be7c9 ;
  font-size:10px ;
  font-weight:800 ;
}
.suggestion-form-grid { gap:12px ; }
.suggestion-footer {
  display:flex ;
  align-items:center ;
  justify-content:space-between ;
  gap:12px ;
  margin-top:10px ;
  padding-top:14px ;
  border-top:1px solid rgba(255,255,255,.055) ;
}
.suggestion-footer small { color:#7f8da2 ; line-height:1.5 ; max-width:70%; }
.suggestion-success { min-height:300px ; display:flex ; flex-direction:column ; justify-content:center ; }
.suggestion-success-icon {
  width:52px;height:52px;display:grid;place-items:center;border-radius:16px;
  background:rgba(73,214,161,.08) ;
  border:1px solid rgba(73,214,161,.24) ;
  color:#78e3bc ;
  font-size:24px ;
  margin-bottom:12px;
}

/* Feedback history */
.request-list > div,
.request-list > div > div { min-width:0 ; }
.request-list > div { padding:12px ; margin-bottom:7px ; }
.request-list > div b { color:#f3f7fb ; }
.request-list > div small { color:#8998ad ; }

/* Empty states */
.empty-state,
.employee-portal-cosmic .empty-state {
  min-height:180px ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  text-align:center ;
  color:#9aa7ba ;
}
.empty-state h2 { color:#eef3f9 ; }
.empty-state p { color:#8190a5 ; max-width:560px; line-height:1.6 ; }

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width: 980px) {
  .employee-page { width: min(100% - 28px, 900px) ; }
  .ess-kpis { grid-template-columns:1fr ; }
  .employee-announcement-list { grid-template-columns:1fr ; }
}
@media (max-width: 680px) {
  .employee-topbar { min-height:62px ; padding:0 12px ; }
  .employee-page { width:calc(100% - 22px) ; padding:20px 0 80px ; }
  .employee-heading { align-items:flex-start ; flex-direction:column ; }
  .employee-heading h1 { font-size:28px ; }
  .employee-tabs { border-radius:14px ; }
  .attendance-grid,.portal-grid,.payslip-grid { gap:11px ; }
  .employee-announcement-item { min-height:0 ; padding:16px ; }
  .suggestion-header,.suggestion-footer { flex-direction:column ; align-items:flex-start ; }
  .suggestion-footer small { max-width:100% ; }
  .suggestion-footer .portal-primary { width:100% ; }
  .row-actions > button,
  .row-actions > .link-btn,
  .row-actions > .danger-text { min-width:52px ; min-height:30px ; padding-inline:8px ; font-size:9px ; }
}

@media (prefers-reduced-motion: reduce) {
  .talenta-shell::after,
  .employee-portal-cosmic::after,
  .ess-kpi::after { animation:none ; }
}



/* Project by Tirta — FINAL INACTIVE EMPLOYEE + EMPLOYEE PORTAL UI */

/* =========================================================
   HARD OVERRIDE: NO WHITE TABLE ACTION BUTTONS
   ========================================================= */
html[data-cosmic-theme] .row-actions > button,
html[data-cosmic-theme] .table-panel .row-actions > button,
html[data-cosmic-theme] button.link-btn,
html[data-cosmic-theme] button.danger-text {
  appearance:none ;
  -webkit-appearance:none ;
  background:rgba(8,17,31,.96) ;
  color:#edf3fb ;
  border:1px solid rgba(214,174,88,.62) ;
  border-radius:10px ;
  min-height:32px ;
  padding:0 11px ;
  box-shadow:0 7px 20px rgba(0,0,0,.28), inset 0 1px rgba(255,255,255,.03) ;
  opacity:1 ;
  text-decoration:none ;
}

html[data-cosmic-theme] .row-actions > button:hover,
html[data-cosmic-theme] button.link-btn:hover {
  background:rgba(24,42,71,.98) ;
  color:#fff ;
  border-color:var(--pt-accent) ;
  box-shadow:0 10px 26px rgba(0,0,0,.36), 0 0 18px color-mix(in srgb,var(--pt-accent) 12%,transparent) ;
  transform:translateY(-1px) ;
}

html[data-cosmic-theme] .row-actions > .danger-text,
html[data-cosmic-theme] button.danger-text {
  background:rgba(69,12,27,.94) ;
  color:#ffd2da ;
  border-color:rgba(255,113,135,.48) ;
}

html[data-cosmic-theme] .row-actions > .danger-text:hover,
html[data-cosmic-theme] button.danger-text:hover {
  background:rgba(105,17,41,.98) ;
  color:#fff ;
  border-color:#ff7187 ;
}

html[data-cosmic-theme] .inactive-actions .activate-btn {
  background:linear-gradient(135deg,var(--pt-accent),color-mix(in srgb,var(--pt-accent) 56%,#fff 44%)) ;
  color:#08111d ;
  border-color:var(--pt-accent) ;
}

html[data-cosmic-theme] .inactive-actions .activate-btn:hover {
  color:#07111f ;
  filter:brightness(1.06) ;
}

.inactive-avatar {
  background:rgba(255,113,135,.10) ;
  color:#ffb2be ;
  border-color:rgba(255,113,135,.28) ;
}
.status-red-inactive {
  display:inline-flex ;
  align-items:center ;
  padding:6px 10px ;
  border-radius:999px ;
  background:rgba(255,113,135,.10) ;
  border:1px solid rgba(255,113,135,.24) ;
  color:#ffb3bf ;
}

/* =========================================================
   EMPLOYEE PORTAL — PROFESSIONAL HR COMMAND CENTER
   ========================================================= */
html[data-cosmic-theme] .employee-portal {
  min-height:100vh ;
  position:relative ;
  isolation:isolate ;
  background:linear-gradient(180deg,var(--pt-bg-base),var(--pt-bg-deep)) ;
}

html[data-cosmic-theme] .employee-portal::after {
  content:"" ;
  position:fixed ;
  inset:0 ;
  z-index:-1 ;
  pointer-events:none ;
  opacity:.9 ;
  background:radial-gradient(circle at 80% 8%,color-mix(in srgb,var(--pt-accent) 11%,transparent),transparent 22%),radial-gradient(circle at 12% 88%,color-mix(in srgb,var(--pt-accent-2) 9%,transparent),transparent 25%);
}

html[data-cosmic-theme] .employee-page {
  max-width:1480px ;
  margin:0 auto ;
  padding:30px 28px 90px ;
}

html[data-cosmic-theme] .employee-topbar {
  position:sticky ;
  top:0 ;
  z-index:50 ;
  background:rgba(3,8,16,.88) ;
  border-bottom:1px solid rgba(214,174,88,.32) ;
  box-shadow:0 12px 38px rgba(0,0,0,.34) ;
}

html[data-cosmic-theme] .employee-heading {
  padding:4px 2px 0 ;
  margin-bottom:18px ;
}
html[data-cosmic-theme] .employee-heading h1 { font-size:clamp(28px,3vw,42px) ; }
html[data-cosmic-theme] .date-chip {
  background:rgba(8,17,31,.78) ;
  color:#c8d4e5 ;
  border:1px solid rgba(214,174,88,.34) ;
}

html[data-cosmic-theme] .employee-tabs {
  width:100% ;
  margin-bottom:20px ;
  overflow:auto ;
  scrollbar-width:none ;
  background:rgba(5,12,23,.78) ;
  border:1px solid rgba(214,174,88,.24) ;
  box-shadow:0 12px 34px rgba(0,0,0,.24) ;
}
html[data-cosmic-theme] .employee-tabs::-webkit-scrollbar { display:none; }
html[data-cosmic-theme] .employee-tabs button {
  white-space:nowrap ;
  min-height:39px ;
  color:#aeb9ca ;
  background:transparent ;
}
html[data-cosmic-theme] .employee-tabs button.active {
  background:linear-gradient(135deg,var(--pt-accent),color-mix(in srgb,var(--pt-accent) 50%,#fff 50%)) ;
  color:#07111f ;
}

html[data-cosmic-theme] .ess-kpis { grid-template-columns:repeat(3,minmax(0,1fr)) ; }
html[data-cosmic-theme] .ess-kpi {
  min-height:140px ;
  padding:21px ;
  overflow:hidden ;
  position:relative ;
}
html[data-cosmic-theme] .ess-kpi::after {
  content:"" ;
  position:absolute ;
  right:-45px ;
  bottom:-55px ;
  width:150px ;
  height:150px ;
  border-radius:50% ;
  border:1px solid color-mix(in srgb,var(--pt-accent) 18%,transparent) ;
  box-shadow:0 0 40px color-mix(in srgb,var(--pt-accent) 9%,transparent) ;
  animation:pt-employee-orbit 8s ease-in-out infinite alternate ;
}
@keyframes pt-employee-orbit { from{transform:translate(0,0) rotate(-8deg)} to{transform:translate(-10px,-8px) rotate(8deg)} }

html[data-cosmic-theme] .attendance-grid,
html[data-cosmic-theme] .portal-grid,
html[data-cosmic-theme] .payslip-grid { align-items:stretch ; }
html[data-cosmic-theme] .portal-card {
  overflow:hidden ;
  position:relative ;
  background:linear-gradient(145deg,rgba(13,25,44,.90),rgba(5,12,24,.82)) ;
  border:1px solid rgba(214,174,88,.34) ;
}
html[data-cosmic-theme] .portal-card::after {
  content:"" ;
  position:absolute ;
  inset:0 ;
  pointer-events:none ;
  background:linear-gradient(115deg,transparent 0 55%,color-mix(in srgb,var(--pt-accent-2) 5%,transparent) 70%,transparent 84%) ;
  transform:translateX(-35%) ;
  animation:pt-portal-sheen 15s ease-in-out infinite alternate ;
}
@keyframes pt-portal-sheen { from{transform:translateX(-35%)} to{transform:translateX(20%)} }

html[data-cosmic-theme] .card-title,
html[data-cosmic-theme] .suggestion-header { position:relative ; z-index:2 ; }
html[data-cosmic-theme] .card-title h2 { color:#fff ; }
html[data-cosmic-theme] .portal-card p,
html[data-cosmic-theme] .portal-card .muted { color:#9eabbd ; }

html[data-cosmic-theme] .security-box,
html[data-cosmic-theme] .balance-list,
html[data-cosmic-theme] .quick-list,
html[data-cosmic-theme] .request-list,
html[data-cosmic-theme] .schedule-grid {
  position:relative ;
  z-index:2 ;
}

/* ---------- ANNOUNCEMENTS ---------- */
html[data-cosmic-theme] .employee-announcement-center {
  display:block ;
}
html[data-cosmic-theme] .announcement-center-header {
  margin-bottom:16px ;
  padding:20px 22px ;
  border:1px solid rgba(214,174,88,.30) ;
  border-radius:20px ;
  background:linear-gradient(145deg,rgba(13,25,44,.92),rgba(5,12,24,.80)) ;
  box-shadow:0 20px 60px rgba(0,0,0,.30) ;
}
html[data-cosmic-theme] .announcement-center-header h2 { margin:0 0 6px ; color:#fff ; font-size:22px ; }
html[data-cosmic-theme] .announcement-center-header p { margin:0 ; color:#98a6ba ; font-size:12px ; }
html[data-cosmic-theme] .announcement-list { display:grid ; gap:14px ; }
html[data-cosmic-theme] .announcement-card {
  padding:18px 20px ;
  border:1px solid rgba(214,174,88,.28) ;
  border-radius:18px ;
  background:linear-gradient(145deg,rgba(15,29,49,.94),rgba(6,14,27,.84)) ;
  box-shadow:0 16px 45px rgba(0,0,0,.28) ;
  transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease ;
}
html[data-cosmic-theme] .announcement-card:hover { transform:translateY(-2px) ; border-color:var(--pt-accent) ; box-shadow:0 22px 58px rgba(0,0,0,.36) ; }
html[data-cosmic-theme] .announcement-card.is-unread { border-left:4px solid var(--pt-accent) ; }
html[data-cosmic-theme] .announcement-card.is-read { opacity:.82 ; }
html[data-cosmic-theme] .announcement-card-topline { display:flex ; gap:11px ; align-items:flex-start ; }
html[data-cosmic-theme] .announcement-status-dot { width:9px ; height:9px ; margin-top:6px ; flex:0 0 9px ; border-radius:50% ; background:#657389 ; box-shadow:0 0 0 3px rgba(101,115,137,.10) ; }
html[data-cosmic-theme] .announcement-card.is-unread .announcement-status-dot { background:var(--pt-accent) ; box-shadow:0 0 0 3px color-mix(in srgb,var(--pt-accent) 13%,transparent),0 0 14px color-mix(in srgb,var(--pt-accent) 22%,transparent) ; }
html[data-cosmic-theme] .announcement-card-title { display:flex ; gap:8px ; flex-wrap:wrap ; align-items:center ; }
html[data-cosmic-theme] .announcement-title { color:#fff ; font-size:16px ; line-height:1.35 ; }
html[data-cosmic-theme] .announcement-meta { display:flex ; gap:7px ; flex-wrap:wrap ; color:#8f9eb1 ; margin:9px 0 11px 20px ; font-size:10px ; }
html[data-cosmic-theme] .announcement-body { margin:0 0 14px 20px ; color:#c4cfdd ; font-size:12px ; line-height:1.75 ; white-space:pre-wrap ; }
html[data-cosmic-theme] .announcement-card-footer { display:flex ; justify-content:flex-end ; margin-left:20px ; }
html[data-cosmic-theme] .announcement-card-footer button { min-height:34px ; border-radius:10px ; background:rgba(9,19,34,.94) ; color:#dfe7f2 ; border:1px solid rgba(214,174,88,.40) ; padding:0 12px ; }
html[data-cosmic-theme] .announcement-card-footer button:hover { background:var(--pt-accent) ; color:#07111f ; }

/* ---------- SUGGESTION BOX ---------- */
html[data-cosmic-theme] .suggestion-box {
  padding:21px ;
}
html[data-cosmic-theme] .suggestion-header {
  display:flex ; justify-content:space-between ; gap:15px ; align-items:flex-start ; margin-bottom:18px ;
}
html[data-cosmic-theme] .suggestion-header h2 { margin:4px 0 5px ; color:#fff ; font-size:20px ; }
html[data-cosmic-theme] .suggestion-security { flex:0 0 auto ; padding:7px 10px ; border-radius:999px ; background:rgba(73,214,161,.08) ; border:1px solid rgba(73,214,161,.18) ; color:#8fe0c0 ; font-size:9px ; font-weight:800 ; text-transform:uppercase ; letter-spacing:.08em ; }
html[data-cosmic-theme] .suggestion-footer { display:flex ; align-items:center ; justify-content:space-between ; gap:12px ; flex-wrap:wrap ; margin-top:4px ; }
html[data-cosmic-theme] .suggestion-footer small { color:#8f9eb1 ; max-width:520px ; line-height:1.5 ; }
html[data-cosmic-theme] .suggestion-success { text-align:center ; }
html[data-cosmic-theme] .suggestion-success-icon { width:54px ; height:54px ; margin:0 auto 12px ; display:grid ; place-items:center ; border-radius:50% ; background:rgba(73,214,161,.10) ; border:1px solid rgba(73,214,161,.25) ; color:#7be4bf ; font-size:25px ; font-weight:900 ; }

/* ---------- OTHER EMPLOYEE MODULES ---------- */
html[data-cosmic-theme] .attendance-card,
html[data-cosmic-theme] .info-card,
html[data-cosmic-theme] .table-card,
html[data-cosmic-theme] .payslip-card { min-height:100% ; }
html[data-cosmic-theme] .attendance-meta > div,
html[data-cosmic-theme] .quick-list button,
html[data-cosmic-theme] .info-list > div,
html[data-cosmic-theme] .balance-list > div,
html[data-cosmic-theme] .request-list > div,
html[data-cosmic-theme] .schedule-item,
html[data-cosmic-theme] .salary-lines > div {
  background:rgba(8,17,31,.72) ;
  border-color:rgba(151,179,224,.14) ;
  color:#e7edf5 ;
}
html[data-cosmic-theme] .employee-form input,
html[data-cosmic-theme] .employee-form select,
html[data-cosmic-theme] .employee-form textarea {
  background:#07111f ;
  color:#eff4fb ;
  border-color:rgba(151,179,224,.24) ;
}
html[data-cosmic-theme] .table-scroll,
html[data-cosmic-theme] .table-wrap { border-color:rgba(214,174,88,.22) ; }
html[data-cosmic-theme] .table-scroll table,
html[data-cosmic-theme] .table-wrap table { background:rgba(5,12,23,.42) ; }
html[data-cosmic-theme] .portal-info { background:rgba(73,214,161,.07) ; border-color:rgba(73,214,161,.22) ; color:#9fe5c8 ; }
html[data-cosmic-theme] .portal-error { background:rgba(255,88,110,.08) ; border-color:rgba(255,113,135,.22) ; color:#ffabb7 ; }

/* =========================================================
   FIVE THEMES — DISTINCT BACKGROUND IDENTITY
   ========================================================= */
html[data-cosmic-theme="sun"] .talenta-shell,
html[data-cosmic-theme="sun"] .employee-portal {
  background:radial-gradient(circle at 83% 8%,rgba(255,199,103,.24),transparent 20%),linear-gradient(180deg,#130e09 0%,#05080f 62%,#02050a 100%) ;
}
html[data-cosmic-theme="sun"] .talenta-shell::after,
html[data-cosmic-theme="sun"] .employee-portal::before {
  background:radial-gradient(circle at 83% 8%,rgba(255,235,180,.18) 0 2%,transparent 11%),conic-gradient(from 20deg at 83% 8%,transparent 0 18deg,rgba(255,165,64,.16) 29deg,transparent 43deg,rgba(255,225,154,.10) 58deg,transparent 74deg 360deg) ;
  animation:pt-theme-sun 12s ease-in-out infinite alternate ;
}
@keyframes pt-theme-sun{from{transform:scale(1) rotate(-1deg);opacity:.55}to{transform:scale(1.08) rotate(2deg);opacity:.95}}

html[data-cosmic-theme="moon"] .talenta-shell,
html[data-cosmic-theme="moon"] .employee-portal {
  background:radial-gradient(circle at 78% 10%,rgba(224,237,255,.18),transparent 17%),linear-gradient(180deg,#071326 0%,#040a15 60%,#02060e 100%) ;
}
html[data-cosmic-theme="moon"] .talenta-shell::after,
html[data-cosmic-theme="moon"] .employee-portal::before {
  background:radial-gradient(circle at 78% 10%,rgba(244,249,255,.62) 0 2.4%,rgba(190,218,247,.16) 5%,transparent 15%),radial-gradient(circle at 17% 71%,rgba(112,164,226,.10),transparent 26%) ;
  animation:pt-theme-moon 15s ease-in-out infinite alternate ;
}
@keyframes pt-theme-moon{from{transform:translate3d(-1%,0,0);opacity:.62}to{transform:translate3d(1%,1%,0);opacity:1}}

html[data-cosmic-theme="galaxy"] .talenta-shell,
html[data-cosmic-theme="galaxy"] .employee-portal {
  background:radial-gradient(ellipse at 72% 16%,rgba(177,123,255,.23),transparent 23%),radial-gradient(ellipse at 20% 72%,rgba(80,141,255,.14),transparent 27%),linear-gradient(180deg,#100a23 0%,#05030f 68%,#020107 100%) ;
}
html[data-cosmic-theme="galaxy"] .talenta-shell::after,
html[data-cosmic-theme="galaxy"] .employee-portal::before {
  background:linear-gradient(155deg,transparent 28%,rgba(213,156,255,.09) 43%,transparent 57%),radial-gradient(ellipse at 62% 32%,rgba(81,194,255,.15),transparent 28%) ;
  animation:pt-theme-galaxy 20s ease-in-out infinite alternate ;
}
@keyframes pt-theme-galaxy{from{transform:translate3d(-1%,.5%,0) rotate(-.5deg);opacity:.55}to{transform:translate3d(1%,-.7%,0) rotate(1deg);opacity:1}}

html[data-cosmic-theme="blackhole"] .talenta-shell,
html[data-cosmic-theme="blackhole"] .employee-portal {
  background:radial-gradient(circle at 75% 12%,rgba(99,215,255,.11),transparent 16%),linear-gradient(180deg,#07090e 0%,#020306 70%,#010204 100%) ;
}
html[data-cosmic-theme="blackhole"] .talenta-shell::after,
html[data-cosmic-theme="blackhole"] .employee-portal::before {
  background:radial-gradient(circle at 75% 12%,#000 0 4%,transparent 4.5%),radial-gradient(ellipse at 75% 12%,transparent 0 6%,rgba(240,191,91,.26) 8%,rgba(73,203,255,.22) 11%,transparent 17%),conic-gradient(from 20deg at 75% 12%,transparent 0 17%,rgba(83,212,255,.15) 28%,transparent 41%,rgba(245,185,80,.13) 56%,transparent 77%) ;
  animation:pt-theme-blackhole 16s linear infinite ;
}
@keyframes pt-theme-blackhole{to{transform:rotate(360deg)}}

html[data-cosmic-theme="nebula"] .talenta-shell,
html[data-cosmic-theme="nebula"] .employee-portal {
  background:radial-gradient(ellipse at 70% 17%,rgba(255,139,215,.20),transparent 21%),radial-gradient(ellipse at 22% 65%,rgba(82,192,255,.13),transparent 27%),radial-gradient(ellipse at 80% 73%,rgba(169,90,255,.10),transparent 23%),linear-gradient(180deg,#160818 0%,#060510 68%,#02040a 100%) ;
}
html[data-cosmic-theme="nebula"] .talenta-shell::after,
html[data-cosmic-theme="nebula"] .employee-portal::before {
  background:radial-gradient(ellipse at 64% 22%,rgba(255,159,226,.22),transparent 24%),radial-gradient(ellipse at 30% 66%,rgba(91,208,255,.17),transparent 29%),radial-gradient(ellipse at 78% 72%,rgba(194,107,255,.14),transparent 24%) ;
  filter:blur(7px) saturate(1.08) ;
  animation:pt-theme-nebula 17s ease-in-out infinite alternate ;
}
@keyframes pt-theme-nebula{from{transform:translate3d(-1%,1%,0) scale(1)}to{transform:translate3d(1.2%,-1%,0) scale(1.07)}}

@media(max-width:900px){
  html[data-cosmic-theme] .employee-page { padding:24px 18px 84px ; }
  html[data-cosmic-theme] .ess-kpis { grid-template-columns:1fr ; }
}
@media(max-width:680px){
  html[data-cosmic-theme] .employee-page { padding:20px 13px 80px ; }
  html[data-cosmic-theme] .announcement-center-header { padding:17px ; }
  html[data-cosmic-theme] .announcement-card { padding:15px ; }
  html[data-cosmic-theme] .announcement-meta,
  html[data-cosmic-theme] .announcement-body,
  html[data-cosmic-theme] .announcement-card-footer { margin-left:0 ; }
  html[data-cosmic-theme] .suggestion-header { flex-direction:column ; }
  html[data-cosmic-theme] .suggestion-security { align-self:flex-start ; }
  html[data-cosmic-theme] .suggestion-footer { align-items:stretch ; }
  html[data-cosmic-theme] .suggestion-footer .portal-primary { width:100% ; }
  html[data-cosmic-theme] .row-actions { justify-content:flex-start ; }
}
@media(prefers-reduced-motion:reduce){
  html[data-cosmic-theme] .ess-kpi::after,
  html[data-cosmic-theme] .portal-card::after,
  html[data-cosmic-theme="sun"] .talenta-shell::after,
  html[data-cosmic-theme="sun"] .employee-portal::before,
  html[data-cosmic-theme="moon"] .talenta-shell::after,
  html[data-cosmic-theme="moon"] .employee-portal::before,
  html[data-cosmic-theme="galaxy"] .talenta-shell::after,
  html[data-cosmic-theme="galaxy"] .employee-portal::before,
  html[data-cosmic-theme="blackhole"] .talenta-shell::after,
  html[data-cosmic-theme="blackhole"] .employee-portal::before,
  html[data-cosmic-theme="nebula"] .talenta-shell::after,
  html[data-cosmic-theme="nebula"] .employee-portal::before { animation:none ; }
}


/* =========================================================
   PROJECT BY TIRTA — EMPLOYEE DARK ENTERPRISE LOCK
   Portal karyawan tidak mengikuti tema Admin/HRD/Super Admin.
   ========================================================= */

.employee-login,
.employee-portal {
  --navy: #0b1222 ;
  --navy-2: #172033 ;
  --gold: #d6ae58 ;
  --gold-light: #f0d68c ;
  --muted: #aeb7c5 ;
  --line: #d6ae58 ;
  --bg: #071126 ;

  --app-primary: #0b1222 ;
  --app-primary-contrast: #f8fafc ;
  --app-accent: #d6ae58 ;
  --app-bg: #071126 ;
  --app-surface: #101827 ;
  --app-surface-alt: #172033 ;
  --app-text: #e2e5ea ;
  --app-muted: #aeb7c5 ;
  --app-border: #d6ae58 ;
}

.employee-portal,
.employee-login {
  background: #071126 ;
  color: #e2e5ea ;
}

.employee-topbar {
  background: #101827 ;
  color: #e2e5ea ;
  border-bottom: 2px solid #d6ae58 ;
}


/* =========================================================
   PROJECT BY TIRTA — SIDEBAR FOLLOWS COSMIC THEME
   Struktur/layout sidebar tetap, warna dan ambience mengikuti tema.
   ========================================================= */

.talenta-shell .sidebar,
.talenta-shell .talenta-sidebar {
  color: #f8fafc ;
  border-right-width: 2px ;
  border-right-style: solid ;
  backdrop-filter: blur(24px) saturate(145%) ;
  -webkit-backdrop-filter: blur(24px) saturate(145%) ;
  transition: background .35s ease, border-color .35s ease, box-shadow .35s ease ;
}

html[data-cosmic-theme="sun"] .talenta-shell .sidebar,
html[data-cosmic-theme="sun"] .talenta-shell .talenta-sidebar {
  background:
    radial-gradient(circle at 18% 8%, rgba(246,199,103,.16), transparent 30%),
    linear-gradient(180deg, #321b0b 0%, #170c05 52%, #090503 100%) ;
  border-right-color: #f6c767 ;
  box-shadow: 18px 0 56px rgba(255,152,93,.10), inset -1px 0 rgba(246,199,103,.16) ;
}

html[data-cosmic-theme="moon"] .talenta-shell .sidebar,
html[data-cosmic-theme="moon"] .talenta-shell .talenta-sidebar {
  background:
    radial-gradient(circle at 82% 12%, rgba(131,189,251,.13), transparent 30%),
    linear-gradient(180deg, #0b1d35 0%, #061326 52%, #020712 100%) ;
  border-right-color: #e4d1a0 ;
  box-shadow: 18px 0 56px rgba(131,189,251,.08), inset -1px 0 rgba(228,209,160,.16) ;
}

html[data-cosmic-theme="galaxy"] .talenta-shell .sidebar,
html[data-cosmic-theme="galaxy"] .talenta-shell .talenta-sidebar {
  background:
    radial-gradient(circle at 78% 12%, rgba(122,169,255,.16), transparent 28%),
    linear-gradient(180deg, #24114a 0%, #12082d 52%, #04020c 100%) ;
  border-right-color: #d7adff ;
  box-shadow: 18px 0 62px rgba(122,169,255,.10), inset -1px 0 rgba(215,173,255,.18) ;
}

html[data-cosmic-theme="blackhole"] .talenta-shell .sidebar,
html[data-cosmic-theme="blackhole"] .talenta-shell .talenta-sidebar {
  background:
    radial-gradient(circle at 82% 10%, rgba(99,215,255,.13), transparent 25%),
    linear-gradient(180deg, #0b0e14 0%, #05070b 52%, #010204 100%) ;
  border-right-color: #e8c36f ;
  box-shadow: 18px 0 62px rgba(99,215,255,.08), inset -1px 0 rgba(232,195,111,.18) ;
}

html[data-cosmic-theme="nebula"] .talenta-shell .sidebar,
html[data-cosmic-theme="nebula"] .talenta-shell .talenta-sidebar {
  background:
    radial-gradient(circle at 82% 12%, rgba(255,191,232,.15), transparent 28%),
    radial-gradient(circle at 18% 72%, rgba(113,213,255,.10), transparent 30%),
    linear-gradient(180deg, #2a0e2b 0%, #130718 52%, #04030a 100%) ;
  border-right-color: #ffbfe8 ;
  box-shadow: 18px 0 62px rgba(255,191,232,.08), inset -1px 0 rgba(255,191,232,.18) ;
}

/* Sidebar headings/branding remain readable in every theme. */
.talenta-shell .sidebar .brand,
.talenta-shell .sidebar .sidebar-head,
.talenta-shell .talenta-sidebar .brand,
.talenta-shell .talenta-sidebar .sidebar-head {
  background: transparent ;
  color: #f8fafc ;
}

.talenta-shell .sidebar .nav-item,
.talenta-shell .talenta-sidebar .nav-item {
  color: #e6edf6 ;
}

.talenta-shell .sidebar .nav-item:hover,
.talenta-shell .talenta-sidebar .nav-item:hover {
  color: #ffffff ;
  background: rgba(255,255,255,.06) ;
}

.talenta-shell .sidebar .nav-item.active,
.talenta-shell .talenta-sidebar .nav-item.active {
  color: var(--pt-bg-deep, #07111f) ;
  border-color: var(--pt-accent) ;
  background: linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 62%, #fff 38%)) ;
  box-shadow: 0 8px 24px color-mix(in srgb, var(--pt-accent) 22%, transparent) ;
}

@media (max-width: 760px) {
  .talenta-shell .sidebar,
  .talenta-shell .talenta-sidebar {
    border-right-width: 1px ;
  }
}

/* Project by Tirta — account-scoped theme control */
.theme-control { position: relative; display: inline-flex; align-items: center; }
.theme-control-button { position: relative; }
.theme-control-menu {
  position: absolute; top: calc(100% + 10px); right: 0; z-index: 250;
  min-width: 190px; padding: 8px; border: 1px solid var(--mx-border, #d6ae58);
  border-radius: 12px; background: var(--mx-surface, #101827); color: var(--mx-text, #f8fafc);
  box-shadow: 0 18px 44px rgba(0,0,0,.35);
}
.theme-control-option {
  width: 100%; min-height: 36px; display: flex; align-items: center; gap: 9px;
  padding: 7px 9px; border: 0; border-radius: 8px; background: transparent;
  color: var(--mx-text, #f8fafc); text-align: left;
}
.theme-control-option:hover, .theme-control-option.active { background: rgba(214,174,88,.12); }
.theme-control-option b { margin-left: auto; }
.theme-control-dot { width: 15px; height: 15px; display: inline-block; border-radius: 50%; border: 1px solid rgba(255,255,255,.45); }
.theme-control .cosmic-theme-sun { background: linear-gradient(135deg,#f6c767,#ff985d); }
.theme-control .cosmic-theme-moon { background: linear-gradient(135deg,#dfe8f4,#586f92); }
.theme-control .cosmic-theme-galaxy { background: linear-gradient(135deg,#d7adff,#4f62ff); }
.theme-control .cosmic-theme-blackhole { background: linear-gradient(135deg,#050608,#63d7ff); }
.theme-control .cosmic-theme-nebula { background: linear-gradient(135deg,#ffbfe8,#71d5ff); }


/* TIRTA_FINAL_UI_FIX_V2 */
/* =========================================================
   LOGIN — tombol Login tetap dapat dijangkau pada viewport pendek
   ========================================================= */
.unified-login-page.modal-overlay {
  overflow-x: hidden ;
  overflow-y: auto ;
  align-items: flex-start ;
  justify-content: center ;
  padding: 12px ;
  min-height: 100vh ;
  height: 100vh ;
  height: 100dvh ;
}

.unified-login-page.modal-overlay .login-modal-card {
  width: min(460px, calc(100vw - 24px)) ;
  max-width: 100% ;
  max-height: calc(100vh - 24px) ;
  max-height: calc(100dvh - 24px) ;
  margin: auto ;
  flex: 0 0 auto ;
  overflow-x: hidden ;
  overflow-y: auto ;
  overscroll-behavior: contain ;
  -webkit-overflow-scrolling: touch ;
}

.unified-login-page .unified-login-form {
  min-height: 0 ;
  gap: 14px ;
}

.unified-login-page .unified-login-button {
  display: flex ;
  align-items: center ;
  justify-content: center ;
  width: 100% ;
  min-height: 48px ;
  height: 48px ;
  flex: 0 0 auto ;
  visibility: visible ;
  opacity: 1 ;
  position: relative ;
  z-index: 5 ;
  color: #08111d ;
  background: linear-gradient(135deg, var(--pt-accent), color-mix(in srgb, var(--pt-accent) 62%, #fff 38%)) ;
  border: 1px solid color-mix(in srgb, var(--pt-accent) 72%, #fff 28%) ;
}

/* Pada layar laptop pendek, rapatkan jarak agar CTA Login lebih cepat terlihat. */
@media (max-height: 760px) {
  .unified-login-page.modal-overlay {
    padding: 8px ;
  }

  .unified-login-page.modal-overlay .login-modal-card {
    max-height: calc(100vh - 16px) ;
    max-height: calc(100dvh - 16px) ;
  }

  .unified-login-page .unified-brand {
    margin-bottom: 22px ;
  }

  .unified-login-page .unified-login-heading {
    margin-bottom: 18px ;
  }

  .unified-login-page .unified-login-register {
    margin-top: 14px ;
  }

  .unified-login-page .unified-login-security {
    margin-top: 16px ;
  }
}

/* =========================================================
   HEADER — notifikasi tidak boleh menimpa tema/refresh/profil
   ========================================================= */
.topbar .top-actions {
  position: relative ;
  display: flex ;
  align-items: center ;
  justify-content: flex-end ;
  gap: 7px ;
  min-width: 0 ;
  flex-wrap: nowrap ;
}

.topbar .top-actions > .admin-floating-notification-group {
  position: relative ;
  inset: auto ;
  top: auto ;
  right: auto ;
  bottom: auto ;
  left: auto ;
  z-index: 40 ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  gap: 5px ;
  width: auto ;
  height: auto ;
  margin: 0 ;
  padding: 0 ;
  pointer-events: auto ;
  transform: none ;
  filter: none ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action {
  width: 32px ;
  height: 32px ;
  min-width: 32px ;
  min-height: 32px ;
  flex: 0 0 32px ;
  margin: 0 ;
  padding: 0 ;
  border-radius: 50% ;
  position: relative ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action-icon {
  font-size: 16px ;
  line-height: 1 ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action-badge {
  top: -3px ;
  right: -3px ;
  min-width: 15px ;
  height: 15px ;
  padding: 0 3px ;
  line-height: 15px ;
  font-size: 9px ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-notification-dropdown {
  top: calc(100% + 10px) ;
  right: 0 ;
  left: auto ;
  z-index: 250 ;
}

/* Mencegah icon tema dan profil ikut saling tindih saat lebar layar sempit. */
.topbar .top-actions > .theme-control,
.topbar .top-actions > .icon-btn,
.topbar .top-actions > .admin-floating-notification-group,
.topbar .top-actions > .profile-trigger-wrap {
  position: relative ;
  flex: 0 0 auto ;
}

/* Facebook-style action order: theme → refresh → people → message → bell → profile.
   The notification cluster stays immediately beside the profile without changing React order. */
.topbar .top-actions > .theme-control { order: 1 ; }
.topbar .top-actions > .icon-btn { order: 2 ; }
.topbar .top-actions > .admin-floating-notification-group { order: 3 ; }
.topbar .top-actions > .profile-trigger-wrap { order: 4 ; }

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action {
  background: rgba(255,255,255,.045) ;
  border-color: rgba(148,163,184,.22) ;
  color: #e8eef7 ;
  box-shadow: 0 5px 16px rgba(0,0,0,.14) ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action:hover,
.topbar .top-actions > .admin-floating-notification-group .admin-floating-action.active {
  background: rgba(255,255,255,.10) ;
  border-color: rgba(214,174,88,.58) ;
  color: #fffaf0 ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action-icon {
  display: inline-flex ;
  width: 18px ;
  height: 18px ;
  align-items: center ;
  justify-content: center ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action-icon .ui-icon {
  width: 18px ;
  height: 18px ;
  display: block ;
}

.topbar .top-actions > .admin-floating-notification-group .admin-floating-action-badge {
  background: #e53935 ;
  color: #fff ;
  border: 2px solid #07111f ;
  font-weight: 850 ;
  box-shadow: 0 2px 8px rgba(229,57,53,.42) ;
}

.admin-notification-dropdown-head-actions {
  align-items: flex-start ;
  gap: 8px ;
}

.admin-notification-dropdown-head-actions > div {
  display: grid ;
  gap: 2px ;
  min-width: 0 ;
}

.admin-notification-mark-read {
  border: 0 ;
  background: transparent ;
  color: var(--pt-accent, #d6ae58) ;
  padding: 2px 0 ;
  font-size: 10px ;
  font-weight: 750 ;
  white-space: nowrap ;
}

.admin-notification-mark-read:hover {
  text-decoration: underline ;
}

/* =========================================================
   SIDEBAR — menu aktif selalu punya teks + icon yang terbaca
   ========================================================= */
.talenta-shell .sidebar .nav-item,
.talenta-shell .talenta-sidebar .nav-item {
  min-height: 42px ;
  color: #e6edf6 ;
  -webkit-text-fill-color: #e6edf6 ;
  background: transparent ;
  border: 2px solid transparent ;
  border-radius: 9px ;
  opacity: 1 ;
}

.talenta-shell .sidebar .nav-item:hover,
.talenta-shell .talenta-sidebar .nav-item:hover {
  color: #ffffff ;
  -webkit-text-fill-color: #ffffff ;
  background: rgba(214, 174, 88, 0.10) ;
  border-color: rgba(214, 174, 88, 0.65) ;
  opacity: 1 ;
}

.talenta-shell .sidebar .nav-item.active,
.talenta-shell .talenta-sidebar .nav-item.active {
  color: #0b1222 ;
  -webkit-text-fill-color: #0b1222 ;
  background: #d6ae58 ;
  border: 2px solid #f0d68c ;
  box-shadow: 0 0 18px rgba(214, 174, 88, 0.22) ;
  opacity: 1 ;
  filter: none ;
}

.talenta-shell .sidebar .nav-item.active span,
.talenta-shell .sidebar .nav-item.active svg,
.talenta-shell .sidebar .nav-item.active path,
.talenta-shell .talenta-sidebar .nav-item.active span,
.talenta-shell .talenta-sidebar .nav-item.active svg,
.talenta-shell .talenta-sidebar .nav-item.active path {
  color: #0b1222 ;
  -webkit-text-fill-color: #0b1222 ;
  fill: none ;
  stroke: currentColor ;
  opacity: 1 ;
}

.talenta-shell .sidebar .nav-item.active > svg,
.talenta-shell .talenta-sidebar .nav-item.active > svg {
  flex: 0 0 auto ;
}

.talenta-shell .sidebar .nav-item:focus-visible,
.talenta-shell .talenta-sidebar .nav-item:focus-visible {
  outline: 2px solid #f0d68c ;
  outline-offset: 1px ;
}

@media (max-width: 700px) {
  .topbar .top-actions {
    gap: 4px ;
  }

  .topbar .top-actions > .admin-floating-notification-group {
    gap: 3px ;
  }

  .topbar .top-actions > .admin-floating-notification-group .admin-floating-action {
    width: 30px ;
    height: 30px ;
    min-width: 30px ;
    min-height: 30px ;
    flex-basis: 30px ;
  }
}


/* =========================================================
   FINAL UI FIX V3 — LOGIN + SIDEBAR CONTRAST
   Tujuan:
   1) Tombol Masuk selalu terlihat pada laptop dengan viewport pendek.
   2) Menu sidebar aktif tidak boleh menjadi hitam/blank.
   3) Garis/bingkai utama dashboard tidak lagi putih terang.
   ========================================================= */

/* ---------- LOGIN ---------- */
.unified-login-page.modal-overlay {
  min-height: 100dvh ;
  height: 100dvh ;
  max-height: 100dvh ;
  overflow-y: auto ;
  overflow-x: hidden ;
  align-items: flex-start ;
  justify-content: center ;
  padding: 8px ;
}

.unified-login-page.modal-overlay .login-modal-card {
  width: min(440px, calc(100vw - 16px)) ;
  max-width: 440px ;
  max-height: calc(100dvh - 16px) ;
  margin: auto ;
  padding: 18px 20px ;
  overflow-x: hidden ;
  overflow-y: auto ;
  box-sizing: border-box ;
  border: 1px solid var(--pt-accent) ;
  border-radius: 20px ;
  background: linear-gradient(145deg, rgba(13,25,44,.97), rgba(5,12,24,.97)) ;
}

.unified-login-page.modal-overlay .login-modal-close {
  width: 30px ;
  height: 30px ;
  top: 10px ;
  right: 10px ;
  background: #101827 ;
  color: #f4f7fb ;
  border: 1px solid var(--pt-accent) ;
}

.unified-login-page.modal-overlay .unified-brand {
  gap: 10px ;
  margin: 0 38px 14px 0 ;
}

.unified-login-page.modal-overlay .unified-logo {
  width: 44px ;
  height: 44px ;
  min-width: 44px ;
}

.unified-login-page.modal-overlay .unified-logo .moon-logo {
  width: 44px ;
  height: 44px ;
}

.unified-login-page.modal-overlay .unified-brand strong {
  font-size: 15px ;
}

.unified-login-page.modal-overlay .unified-brand small {
  font-size: 9px ;
}

.unified-login-page.modal-overlay .unified-login-heading {
  margin-bottom: 12px ;
}

.unified-login-page.modal-overlay .unified-login-heading > span {
  margin-bottom: 5px ;
  font-size: 9px ;
}

.unified-login-page.modal-overlay .unified-login-heading h1 {
  margin-bottom: 5px ;
  font-size: clamp(22px, 5vw, 27px) ;
  line-height: 1.12 ;
}

.unified-login-page.modal-overlay .unified-login-heading p {
  font-size: 12px ;
  line-height: 1.4 ;
}

.unified-login-page.modal-overlay .unified-login-form {
  gap: 9px ;
}

.unified-login-page.modal-overlay .unified-login-form label {
  gap: 5px ;
}

.unified-login-page.modal-overlay .unified-login-form label > span {
  font-size: 11px ;
}

.unified-login-page.modal-overlay .unified-login-form input {
  height: 42px ;
  min-height: 42px ;
  padding: 0 12px ;
  font-size: 13px ;
  border-radius: 10px ;
}

.unified-login-page.modal-overlay .password-toggle {
  margin-top: -1px ;
  font-size: 9px ;
  color: #f0d68c ;
}

.unified-login-page.modal-overlay .login-options {
  min-height: 22px ;
  margin-top: -2px ;
}

.unified-login-page.modal-overlay .remember-option,
.unified-login-page.modal-overlay .login-options > button {
  font-size: 10px ;
}

.unified-login-page.modal-overlay .forgot-panel {
  padding: 10px ;
  margin-top: -2px ;
  border-color: rgba(214,174,88,.45) ;
  background: rgba(11,24,44,.82) ;
}

.unified-login-page.modal-overlay .forgot-panel input {
  height: 38px ;
  min-height: 38px ;
}

.unified-login-page.modal-overlay .forgot-panel > div {
  display: flex ;
  justify-content: flex-end ;
  gap: 7px ;
  margin-top: 8px ;
}

.unified-login-page.modal-overlay .forgot-panel > div button {
  min-height: 34px ;
  padding: 7px 11px ;
}

.unified-login-page.modal-overlay .unified-login-button {
  display: flex ;
  align-items: center ;
  justify-content: center ;
  width: 100% ;
  min-height: 46px ;
  height: 46px ;
  margin-top: 2px ;
  flex: 0 0 auto ;
  visibility: visible ;
  opacity: 1 ;
  position: relative ;
  z-index: 10 ;
  border: 2px solid #f0d68c ;
  border-radius: 11px ;
  background: #d6ae58 ;
  color: #0b1222 ;
  font-size: 12px ;
  font-weight: 850 ;
  box-shadow: 0 8px 22px rgba(214,174,88,.20) ;
}

.unified-login-page.modal-overlay .unified-login-button:hover:not(:disabled) {
  background: #f0d68c ;
  color: #07111f ;
  filter: none ;
  transform: translateY(-1px) ;
}

.unified-login-page.modal-overlay .unified-login-register {
  margin-top: 9px ;
  font-size: 10px ;
  line-height: 1.3 ;
}

.unified-login-page.modal-overlay .unified-login-register button {
  font-size: 10px ;
  color: #f0d68c ;
}

.unified-login-page.modal-overlay .unified-login-security {
  gap: 8px ;
  margin-top: 9px ;
  padding: 8px 10px ;
  border-color: rgba(214,174,88,.35) ;
  background: rgba(11,24,44,.70) ;
}

.unified-login-page.modal-overlay .unified-login-security > span {
  width: 28px ;
  height: 28px ;
  min-width: 28px ;
  background: rgba(214,174,88,.10) ;
}

.unified-login-page.modal-overlay .unified-login-security strong {
  font-size: 10px ;
  color: #eef3fb ;
}

@media (max-height: 620px) {
  .unified-login-page.modal-overlay .login-modal-card {
    padding: 14px 16px ;
  }

  .unified-login-page.modal-overlay .unified-brand {
    margin-bottom: 9px ;
  }

  .unified-login-page.modal-overlay .unified-logo,
  .unified-login-page.modal-overlay .unified-logo .moon-logo {
    width: 38px ;
    height: 38px ;
    min-width: 38px ;
  }

  .unified-login-page.modal-overlay .unified-login-heading {
    margin-bottom: 8px ;
  }

  .unified-login-page.modal-overlay .unified-login-form {
    gap: 7px ;
  }

  .unified-login-page.modal-overlay .unified-login-form input {
    height: 38px ;
    min-height: 38px ;
  }

  .unified-login-page.modal-overlay .unified-login-button {
    min-height: 42px ;
    height: 42px ;
  }

  .unified-login-page.modal-overlay .unified-login-security {
    margin-top: 6px ;
    padding: 6px 8px ;
  }
}

/* ---------- SIDEBAR ACTIVE STATE ---------- */
.talenta-shell .sidebar,
.talenta-shell .talenta-sidebar {
  border-right: 2px solid #d6ae58 ;
}

.talenta-shell .sidebar .nav-title,
.talenta-shell .talenta-sidebar .nav-title {
  color: #f0d68c ;
  -webkit-text-fill-color: #f0d68c ;
}

.talenta-shell .sidebar .nav-item,
.talenta-shell .talenta-sidebar .nav-item {
  min-height: 42px ;
  color: #e6edf6 ;
  -webkit-text-fill-color: #e6edf6 ;
  background: transparent ;
  border: 2px solid transparent ;
  border-radius: 9px ;
  opacity: 1 ;
}

.talenta-shell .sidebar .nav-item:hover,
.talenta-shell .talenta-sidebar .nav-item:hover {
  color: #ffffff ;
  -webkit-text-fill-color: #ffffff ;
  background: rgba(214,174,88,.10) ;
  border-color: rgba(214,174,88,.65) ;
}

.talenta-shell .sidebar .nav-item.active,
.talenta-shell .talenta-sidebar .nav-item.active,
.talenta-shell .sidebar .nav-group-items .nav-item.active,
.talenta-shell .talenta-sidebar .nav-group-items .nav-item.active {
  background: #d6ae58 ;
  background-image: none ;
  color: #0b1222 ;
  -webkit-text-fill-color: #0b1222 ;
  border: 2px solid #f0d68c ;
  box-shadow: 0 0 18px rgba(214,174,88,.22) ;
  opacity: 1 ;
  filter: none ;
  text-shadow: none ;
}

.talenta-shell .sidebar .nav-item.active span,
.talenta-shell .sidebar .nav-item.active svg,
.talenta-shell .sidebar .nav-item.active path,
.talenta-shell .talenta-sidebar .nav-item.active span,
.talenta-shell .talenta-sidebar .nav-item.active svg,
.talenta-shell .talenta-sidebar .nav-item.active path {
  color: #0b1222 ;
  -webkit-text-fill-color: #0b1222 ;
  fill: none ;
  stroke: currentColor ;
  opacity: 1 ;
  visibility: visible ;
}

/* ---------- DASHBOARD LINES / FRAMES ---------- */
.talenta-shell .panel,
.talenta-shell .stat-card,
.talenta-shell .quick,
.talenta-shell .table-panel,
.talenta-shell .toolbar-panel,
.talenta-shell .form-panel,
.talenta-shell .org-card,
.talenta-shell .calendar-card,
.talenta-shell .feature-card,
.talenta-shell .report-card,
.talenta-shell .setting-card,
.talenta-shell .employee-detail-card,
.talenta-shell .export-card,
.talenta-shell .detail-panel,
.talenta-shell .table-card {
  border-color: rgba(214,174,88,.58) ;
}

.talenta-shell .quick-action {
  color: #eef3fb ;
  border-top-color: rgba(214,174,88,.48) ;
  background: transparent ;
}

.talenta-shell .quick-action > span:last-child {
  color: #f0d68c ;
}

.talenta-shell .quick-icon,
.talenta-shell .stat-icon {
  background: rgba(214,174,88,.08) ;
  color: #f0d68c ;
  border-color: rgba(214,174,88,.42) ;
}

.talenta-shell .table-wrap,
.talenta-shell table {
  border-color: rgba(214,174,88,.34) ;
}

.talenta-shell table th {
  background: rgba(214,174,88,.08) ;
  color: #dce5f2 ;
  border-bottom: 1px solid rgba(214,174,88,.48) ;
}

.talenta-shell table td {
  color: #e5edf8 ;
  border-bottom: 1px solid rgba(214,174,88,.18) ;
}


/* FINAL BORDER COLOR FIX V57.2 */
.sidebar-bottom,
.topbar,
.employee-topbar,
.public-header {
  border-color: rgba(214,174,88,.42) ;
}

.table-wrap,
.employee-tabs,
.cosmic-theme-dock,
.cosmic-theme-global-dock {
  border-color: rgba(214,174,88,.38) ;
}

table th {
  border-bottom-color: rgba(214,174,88,.38) ;
}

table td {
  border-bottom-color: rgba(214,174,88,.16) ;
}

.stat-card,
.panel,
.quick,
.form-panel,
.report-card,
.org-card,
.calendar-card,
.feature-card,
.setting-card,
.info-box,
.portal-card,
.employee-login-card,
.theme-card,
.custom-theme-panel,
.export-card,
.detail-panel,
.table-card {
  border-color: rgba(214,174,88,.42) ;
}

.secondary,
.portal-secondary,
.public-secondary {
  border-color: rgba(214,174,88,.38) ;
}

.search-global,
.icon-btn,
.cosmic-theme-dock button,
.cosmic-theme-global-dock button {
  border-color: rgba(214,174,88,.30) ;
}


/* =========================================================
   FINAL WHITE UI FIX V57.2
   Semua elemen putih legacy pada Overview Dashboard
   diselaraskan ke dark enterprise + gold accent.
   Login dan Sidebar tidak disentuh.
   ========================================================= */

/* Grafik komposisi karyawan */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .dept-row .progress {
  background: rgba(151,179,224,.12) ;
  border: 1px solid rgba(214,174,88,.18) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .dept-row .progress span {
  background: linear-gradient(
    90deg,
    #8d6b2b,
    #d6ae58,
    #f0d68c
  ) ;
}

/* Ring absensi */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-ring {
  background: conic-gradient(
    #d6ae58 var(--rate),
    rgba(151,179,224,.13) 0deg
  ) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-ring::before {
  background: #101827 ;
  border: 1px solid rgba(214,174,88,.18) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-ring strong {
  color: #f8fafc ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-ring small {
  color: #9ba6b6 ;
}

/* Legenda ring */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-legend span {
  color: #aeb7c5 ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .health-legend b {
  color: #f1f4f8 ;
}

/* Quick Access */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .executive-quick .quick-action {
  background: rgba(16,24,39,.72) ;
  color: #e8edf5 ;
  border-top: 1px solid rgba(214,174,88,.20) ;
  border-left: 1px solid transparent ;
  border-right: 1px solid transparent ;
  border-bottom: 1px solid transparent ;
  border-radius: 10px ;
  margin: 4px 0 ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .executive-quick .quick-action:hover {
  background: rgba(214,174,88,.09) ;
  color: #f8fafc ;
  border-color: rgba(214,174,88,.38) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard .executive-quick .quick-action > span:last-child {
  color: #d6ae58 ;
}

/* Ikon quick access */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .executive-quick .quick-icon {
  background: rgba(214,174,88,.08) ;
  color: #f0d68c ;
  border: 1px solid rgba(214,174,88,.28) ;
}

/* Tabel Overview */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .table-wrap {
  background: rgba(6,14,28,.55) ;
  border: 1px solid rgba(214,174,88,.28) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard table th {
  background: rgba(214,174,88,.07) ;
  color: #dce5f2 ;
  border-bottom: 1px solid rgba(214,174,88,.32) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard table td {
  background: transparent ;
  color: #e5ebf4 ;
  border-bottom: 1px solid rgba(214,174,88,.14) ;
}

html[data-cosmic-theme] .talenta-shell .executive-dashboard tbody tr:hover td {
  background: rgba(214,174,88,.035) ;
}

/* Semua garis/card Overview */
html[data-cosmic-theme] .talenta-shell .executive-dashboard .panel,
html[data-cosmic-theme] .talenta-shell .executive-dashboard .stat-card {
  border-color: rgba(214,174,88,.46) ;
}

/* HEADER 3 BUTTONS - NO HOVER */
.topbar .topbar-left > .icon-btn,
.topbar .topbar-left > .icon-btn:hover,
.topbar .topbar-left > .icon-btn:focus,
.topbar .topbar-left > .icon-btn:active,
.topbar .theme-control .theme-control-button,
.topbar .theme-control .theme-control-button:hover,
.topbar .theme-control .theme-control-button:focus,
.topbar .theme-control .theme-control-button:active,
.topbar .top-actions > .icon-btn,
.topbar .top-actions > .icon-btn:hover,
.topbar .top-actions > .icon-btn:focus,
.topbar .top-actions > .icon-btn:active {
  transform: none ;
  filter: none ;
  transition: none ;
  background: rgba(255,255,255,.035) ;
  color: #dfe7f7 ;
  border-color: rgba(255,255,255,.07) ;
  box-shadow: inset 0 1px rgba(255,255,255,.03) ;
}



/* COMPANY LOGO LOADING ANIMATION V57.3 */
.app-loading-indicator {
  display: flex ;
  align-items: center ;
  justify-content: center ;
  width: 54px ;
  height: 54px ;
  margin: 14px auto 0 ;
}

.app-loading-logo {
  width: 44px ;
  height: 44px ;
  display: block ;
  object-fit: contain ;
  animation: pt-company-logo-loading 1.8s ease-in-out infinite ;
  filter: drop-shadow(0 0 10px rgba(214,174,88,.32)) ;
}

@keyframes pt-company-logo-loading {
  0%, 100% {
    transform: scale(.94) rotate(-2deg);
    opacity: .72;
  }
  50% {
    transform: scale(1.08) rotate(2deg);
    opacity: 1;
  }
}

.login-loading-content {
  display: inline-flex ;
  align-items: center ;
  justify-content: center ;
  gap: 8px ;
}

.login-loading-logo {
  width: 20px ;
  height: 20px ;
  display: inline-block ;
  object-fit: contain ;
  animation: pt-login-logo-loading .95s ease-in-out infinite ;
  filter: drop-shadow(0 0 6px rgba(11,18,34,.22)) ;
}

@keyframes pt-login-logo-loading {
  0%, 100% {
    transform: scale(.9) rotate(-3deg);
    opacity: .72;
  }
  50% {
    transform: scale(1.06) rotate(3deg);
    opacity: 1;
  }
}

/* FINAL COMPANY LOGO LOADING V57.4 */

.app-loading-screen {
  min-height: 100dvh ;
  display: grid ;
  place-items: center ;
  background:
    radial-gradient(circle at 50% 42%, rgba(214,174,88,.10), transparent 28%),
    linear-gradient(180deg, #071126 0%, #030710 100%) ;
}

.app-loading-card {
  width: auto ;
  min-width: 0 ;
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  justify-content: center ;
  gap: 12px ;
  padding: 18px ;
  border: 0 ;
  border-radius: 0 ;
  background: transparent ;
  box-shadow: none ;
  backdrop-filter: none ;
}

.app-loading-brand {
  width: 86px ;
  height: 86px ;
  display: grid ;
  place-items: center ;
  border-radius: 24px ;
  background: #0d172b ;
  border: 1px solid #d6ae58 ;
  box-shadow:
    0 0 0 1px rgba(214,174,88,.10),
    0 0 35px rgba(214,174,88,.18) ;
  animation: pt-company-logo-pulse 1.8s ease-in-out infinite ;
}

.app-loading-brand img {
  width: 58px ;
  height: 58px ;
  object-fit: contain ;
}

.app-loading-copy {
  display: flex ;
  flex-direction: column ;
  align-items: center ;
  gap: 4px ;
  text-align: center ;
}

.app-loading-copy strong {
  color: #f4f7fb ;
  font-size: 13px ;
}

.app-loading-copy span {
  color: #aeb9c9 ;
  font-size: 10px ;
}

.app-loading-indicator {
  width: 46px ;
  height: 4px ;
  display: block ;
  padding: 0 ;
  margin-top: 2px ;
  border-radius: 999px ;
  background: linear-gradient(90deg, transparent, #d6ae58, transparent) ;
  animation: pt-loading-line 1.4s ease-in-out infinite ;
}

.app-loading-indicator i {
  display: none ;
}

@keyframes pt-company-logo-pulse {
  0%, 100% {
    transform: scale(.94);
    box-shadow: 0 0 0 1px rgba(214,174,88,.08), 0 0 18px rgba(214,174,88,.10);
  }
  50% {
    transform: scale(1.04);
    box-shadow: 0 0 0 1px rgba(214,174,88,.18), 0 0 38px rgba(214,174,88,.24);
  }
}

@keyframes pt-loading-line {
  0%, 100% { opacity: .35; transform: scaleX(.65); }
  50% { opacity: 1; transform: scaleX(1); }
}

.unified-login-button:disabled {
  background: #111b33 ;
  color: #f4f7fb ;
  border: 1px solid #d6ae58 ;
  box-shadow: none ;
  opacity: 1 ;
  transform: none ;
}

.login-loading-content {
  display: inline-flex ;
  align-items: center ;
  justify-content: center ;
  gap: 8px ;
}

.login-loading-logo {
  width: 20px ;
  height: 20px ;
  object-fit: contain ;
  animation: pt-login-logo-spin 1.4s ease-in-out infinite ;
  filter: drop-shadow(0 0 7px rgba(214,174,88,.35)) ;
}

@keyframes pt-login-logo-spin {
  0%, 100% { transform: scale(.88) rotate(-4deg); opacity: .72; }
  50% { transform: scale(1.08) rotate(4deg); opacity: 1; }
}

/* =========================================================
   ALL LOADING DARK LOGO V57.7
   - Menghilangkan background putih pada SEMUA loading utama
   - Session checking / login loading menjadi full dark
   - Card loading menjadi dark
   - Logo perusahaan tetap menjadi indikator utama
   ========================================================= */

/* 1. Session checking yang sebelumnya putih */
html:has(.login-wrap .loading),
body:has(.login-wrap .loading),
#root:has(.login-wrap .loading) {
  background: #030710 ;
}

.login-wrap:has(.loading) {
  position: fixed ;
  inset: 0 ;
  z-index: 99999 ;
  width: 100vw ;
  min-height: 100dvh ;
  height: 100dvh ;
  display: grid ;
  place-items: center ;
  margin: 0 ;
  padding: 18px ;
  box-sizing: border-box ;
  overflow: hidden ;
  background:
    radial-gradient(circle at 50% 42%, rgba(214,174,88,.10), transparent 28%),
    linear-gradient(180deg, #071126 0%, #030710 100%) ;
}

.login-wrap:has(.loading) .login-card {
  width: min(360px, calc(100vw - 32px)) ;
  min-height: 150px ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  margin: auto ;
  padding: 26px ;
  box-sizing: border-box ;
  background: #0d172b ;
  border: 1px solid #d6ae58 ;
  border-radius: 18px ;
  color: #e8edf5 ;
  box-shadow: 0 22px 60px rgba(0,0,0,.40), 0 0 30px rgba(214,174,88,.10) ;
}

.login-wrap:has(.loading) .login-card .loading {
  position: static ;
  inset: auto ;
  width: 100% ;
  min-height: 76px ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  gap: 12px ;
  margin: 0 ;
  padding: 10px ;
  box-sizing: border-box ;
  background: transparent ;
  border: 0 ;
  border-radius: 0 ;
  color: #e8edf5 ;
  font-size: 12px ;
  font-weight: 700 ;
}

.login-wrap:has(.loading) .login-card .loading::before {
  content: "" ;
  width: 42px ;
  height: 42px ;
  min-width: 42px ;
  display: block ;
  background-image: var(--pt-company-logo) ;
  background-repeat: no-repeat ;
  background-position: center ;
  background-size: contain ;
  filter: drop-shadow(0 0 10px rgba(214,174,88,.32)) ;
  animation: pt-all-loading-logo 1.7s ease-in-out infinite ;
}

/* 2. Loading screen yang sudah punya card */
.app-loading-screen,
.employee-loading-screen {
  background:
    radial-gradient(circle at 50% 42%, rgba(214,174,88,.10), transparent 28%),
    linear-gradient(180deg, #071126 0%, #030710 100%) ;
}

.app-loading-card,
.employee-loading-card {
  background: #0d172b ;
  color: #e8edf5 ;
  border-color: #d6ae58 ;
}

/* 3. Semua loading inline */
.loading,
.unified-loading,
.employee-loading-bar,
.app-loading-indicator,
.verify-id-loading {
  background-color: transparent ;
}

.loading {
  color: #e8edf5 ;
}

.loading::before,
.unified-loading::before {
  background-image: var(--pt-company-logo) ;
}

/* 4. Loading verifikasi ID */
.verify-id-loading span {
  display: none ;
}

.verify-id-loading::before {
  content: "" ;
  width: 46px ;
  height: 46px ;
  display: block ;
  margin: 0 auto ;
  background-image: var(--pt-company-logo) ;
  background-repeat: no-repeat ;
  background-position: center ;
  background-size: contain ;
  filter: drop-shadow(0 0 9px rgba(214,174,88,.30)) ;
  animation: pt-all-loading-logo 1.7s ease-in-out infinite ;
}

/* 5. Loading di dalam card/panel tidak boleh membuat panel putih */
.panel:has(.loading),
.card:has(.loading),
.modal:has(.loading),
.modal-card:has(.loading),
.admin-page-frame:has(.loading) {
  background: #0d172b ;
  color: #e8edf5 ;
  border-color: rgba(214,174,88,.40) ;
}

@keyframes pt-all-loading-logo {
  0%, 100% {
    transform: scale(.90);
    opacity: .70;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}
/* =========================================================
   PROJECT BY TIRTA — COSMIC MOBILE REDESIGN V58
   Login + employee dashboard based on the supplied reference.
   ========================================================= */
.pt-cosmic-auth{background-color:#020812 ;background-position:center ;background-size:cover ;background-repeat:no-repeat ;padding:18px }
.pt-cosmic-auth::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 68% 25%,rgba(91,223,255,.16),transparent 30%),linear-gradient(180deg,rgba(1,6,15,.16),rgba(1,6,15,.72));pointer-events:none}
.pt-auth-card{position:relative;z-index:2;overflow:hidden ;width:min(430px,calc(100vw - 24px)) ;max-height:calc(100dvh - 24px) ;border:1px solid rgba(214,174,88,.78) ;border-radius:26px ;background:linear-gradient(145deg,rgba(5,15,30,.95),rgba(5,11,22,.92)) ;box-shadow:0 28px 90px rgba(0,0,0,.55),0 0 36px rgba(80,207,255,.10) ;backdrop-filter:blur(18px) saturate(140%)}
.pt-auth-card::after{content:"";position:absolute;width:260px;height:260px;right:-120px;bottom:-120px;border-radius:50%;border:1px solid rgba(102,222,255,.30);box-shadow:0 0 60px rgba(91,223,255,.16);pointer-events:none}
.pt-auth-card .unified-brand strong,.pt-auth-card .unified-login-heading h1{letter-spacing:-.025em}
.pt-auth-card .unified-login-heading h1{font-size:clamp(25px,7vw,33px) }
.pt-auth-card .unified-login-button{background:linear-gradient(135deg,#f3c85e,#d6ae58) ;border-color:#ffe29a ;box-shadow:0 10px 28px rgba(214,174,88,.23) }
.pt-auth-card .unified-login-form input{border-color:rgba(101,186,255,.36) ;background:rgba(7,20,39,.86) }
.pt-auth-card .unified-login-form input:focus{border-color:#71dcff ;box-shadow:0 0 0 3px rgba(113,220,255,.12) }

.pt-cosmic-shell{min-height:100vh ;background-color:#020812 ;background-size:cover ;background-position:center ;background-attachment:fixed ;position:relative}
.pt-cosmic-shell::before{content:"";position:fixed;inset:0;background:linear-gradient(180deg,rgba(2,8,18,.42),rgba(2,8,18,.86) 72%);pointer-events:none;z-index:0}
.pt-cosmic-shell>*{position:relative;z-index:1}
.pt-cosmic-shell .employee-topbar{position:sticky ;top:0;z-index:40 ;background:rgba(3,10,22,.76) ;border-bottom:1px solid rgba(214,174,88,.48) ;backdrop-filter:blur(22px) saturate(145%)}
.pt-cosmic-shell .employee-user{gap:8px }.pt-notification-button{width:36px;height:36px;border-radius:12px;border:1px solid rgba(80,201,255,.36);background:rgba(7,23,43,.78);color:#e9f4ff;display:grid;place-items:center;position:relative;font-size:16px;cursor:pointer}.pt-notification-button b{position:absolute;right:-4px;top:-5px;min-width:15px;height:15px;padding:0 4px;border-radius:999px;background:#ef5b62;color:#fff;font-size:8px;display:grid;place-items:center;border:2px solid #071321}
.pt-cosmic-shell .employee-page{max-width:1100px ;margin:0 auto ;padding:18px 18px 120px }
.pt-cosmic-shell .employee-heading{display:none }
.pt-cosmic-shell .employee-tabs{display:none }
.pt-cosmic-shell .portal-card,.pt-cosmic-shell .pt-highlight-card{background:linear-gradient(145deg,rgba(11,27,49,.86),rgba(4,13,28,.90)) ;border:1px solid rgba(67,180,255,.42) ;box-shadow:0 18px 55px rgba(0,0,0,.26),inset 0 1px rgba(255,255,255,.03) ;backdrop-filter:blur(14px)}
.pt-dashboard-hero{min-height:240px;margin-bottom:16px;padding:28px 28px 24px;border-radius:26px;border:1px solid rgba(214,174,88,.62);background-position:center;background-size:cover;overflow:hidden;position:relative;box-shadow:0 22px 70px rgba(0,0,0,.35)}
.pt-dashboard-hero::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,10,22,.94) 0%,rgba(3,12,26,.72) 46%,rgba(3,10,22,.18) 100%)}
.pt-dashboard-hero-copy{position:relative;z-index:2;max-width:610px}
.pt-dashboard-hero-copy h1{margin:7px 0 4px;color:#f4f8ff ;font-size:36px;line-height:1.05;letter-spacing:-.035em}
.pt-dashboard-hero-copy h1 strong{color:#f0d68c ;font-weight:800}
.pt-dashboard-hero-copy p{margin:0;color:#9fb6cf }
.pt-dashboard-hero-orb{position:absolute;right:32px;top:32px;width:210px;height:210px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#d8f1ff 0,#548cc8 18%,#133a67 55%,#071423 74%);box-shadow:0 0 60px rgba(67,209,255,.22);opacity:.95}
.pt-dashboard-orbit,.pt-dashboard-glow{position:absolute;inset:-16px;border-radius:50%;border:1px solid rgba(123,225,255,.35)}
.pt-dashboard-orbit{transform:rotate(-18deg) scaleY(.32);box-shadow:0 0 20px rgba(123,225,255,.20)}
.pt-dashboard-glow{inset:24px;border-color:rgba(214,174,88,.28);filter:blur(1px)}
.pt-attendance-summary{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(300px,.8fr);gap:16px;margin-bottom:16px}
.pt-attendance-main{padding:20px }
.pt-attendance-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}
.pt-attendance-top h2,.pt-work-card h2,.pt-section-heading h2,.pt-highlight-card h2{margin:4px 0 0;color:#f7f9fc ;font-size:22px}
.pt-attendance-top p{margin:5px 0 0;color:#849bb5;font-size:12px}
.pt-attendance-metrics{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}
.pt-attendance-metrics>div{padding:16px;border-radius:15px;background:rgba(4,14,29,.68);border:1px solid rgba(72,180,255,.22)}
.pt-attendance-metrics small,.pt-work-time span{display:block;color:#8ea9c4;font-size:11px}
.pt-attendance-metrics strong{display:block;color:#f6fbff;font-size:28px;margin:4px 0}
.pt-attendance-metrics span{color:#6ce8bc;font-size:11px}
.pt-attendance-progress{margin-top:14px}.pt-attendance-progress>div:first-child{display:flex;justify-content:space-between;color:#90a8c2;font-size:11px;margin-bottom:6px}.pt-attendance-progress b{color:#e3ebf6}.pt-progress-track{height:8px;border-radius:999px;background:rgba(255,255,255,.06);overflow:hidden}.pt-progress-track span{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#46d7ff,#d6ae58);box-shadow:0 0 16px rgba(70,215,255,.32)}
.pt-work-card{padding:20px }.pt-work-time{margin-top:28px}.pt-work-time strong{display:block;color:#f8fbff;font-size:27px}.pt-work-line{position:relative;height:8px;margin:18px 0;background:rgba(255,255,255,.06);border-radius:999px;overflow:hidden}.pt-work-line span{position:absolute;left:0;top:0;height:100%;width:52%;background:linear-gradient(90deg,#3ad9ff,#d6ae58);border-radius:999px}.pt-work-line i{position:absolute;left:49%;top:-4px;width:15px;height:15px;border-radius:50%;background:#fff1bc;box-shadow:0 0 20px rgba(214,174,88,.6)}.pt-work-foot{display:flex;justify-content:space-between;color:#8197b1;font-size:11px}.pt-work-foot b{color:#f0d68c}
.pt-feature-section{margin-bottom:16px}.pt-section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin:4px 2px 12px}.pt-section-heading h2{font-size:21px }.pt-feature-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px}.pt-feature-tile{padding:12px 8px 13px;border-radius:16px;background:linear-gradient(180deg,rgba(10,29,54,.96),rgba(5,16,31,.96));border:1px solid rgba(65,181,255,.32);color:#fff;display:flex;align-items:center;flex-direction:column;gap:5px;min-height:110px;cursor:pointer;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease}.pt-feature-tile:hover{transform:translateY(-2px);border-color:rgba(214,174,88,.74);box-shadow:0 12px 30px rgba(0,0,0,.25)}.pt-feature-icon{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;font-size:24px;font-weight:800;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.20),rgba(18,67,122,.82));border:1px solid rgba(103,219,255,.58);box-shadow:inset 0 1px rgba(255,255,255,.12),0 0 22px rgba(49,184,255,.12)}.pt-feature-payroll,.pt-feature-report{color:#f2d16c}.pt-feature-leave{color:#8df0d0}.pt-feature-approval{color:#f3d06e}.pt-feature-tile b{font-size:12px}.pt-feature-tile small{color:#7e9bb8;font-size:9px;text-align:center}
.pt-highlight-card{min-height:170px;border-radius:22px;margin-bottom:16px;padding:22px;display:flex;justify-content:space-between;align-items:flex-end;background-position:center;background-size:cover ;overflow:hidden;position:relative}.pt-highlight-card::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,15,29,.94),rgba(4,15,29,.52),rgba(4,15,29,.16))}.pt-highlight-card>div{position:relative;z-index:1}.pt-highlight-card p{max-width:520px;color:#9bb0c7;font-size:12px;line-height:1.45;margin:7px 0 12px}.pt-highlight-camera{width:74px;height:74px;border-radius:50%;display:grid;place-items:center;border:2px solid #d6ae58;color:#f0d68c;background:rgba(4,13,27,.72);font-size:30px;box-shadow:0 0 26px rgba(214,174,88,.18)}
.pt-activity-card{padding:18px 20px }.pt-activity-row{display:grid;grid-template-columns:42px 1fr auto;gap:12px;align-items:center}.pt-activity-icon{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#39c990;color:#fff;font-weight:900;box-shadow:0 0 18px rgba(57,201,144,.26)}.pt-activity-row b{display:block;color:#f6fbff}.pt-activity-row small{display:block;color:#819bb7;margin-top:3px}.pt-activity-row strong{color:#e9f1f9}
.pt-bottom-nav{position:fixed ;left:50%;bottom:12px;transform:translateX(-50%);z-index:90;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:7px;border-radius:22px;background:rgba(3,10,21,.88);border:1px solid rgba(214,174,88,.45);box-shadow:0 20px 50px rgba(0,0,0,.42),0 0 24px rgba(78,197,255,.09);backdrop-filter:blur(18px);min-width:min(460px,calc(100vw - 26px))}.pt-bottom-nav button{border:0;background:transparent;color:#8fa6bf;border-radius:15px;padding:7px 12px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2px;min-height:50px}.pt-bottom-nav button.active{background:linear-gradient(180deg,rgba(214,174,88,.96),rgba(214,174,88,.78));color:#07111f;box-shadow:0 7px 18px rgba(214,174,88,.16)}.pt-bottom-nav button span{font-size:18px;line-height:1}.pt-bottom-nav button small{font-size:9px;font-weight:700}.pt-bottom-menu{position:fixed ;left:50%;bottom:80px;transform:translateX(-50%);z-index:89;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;width:min(520px,calc(100vw - 26px));padding:10px;border-radius:20px;background:rgba(4,12,25,.96);border:1px solid rgba(214,174,88,.42);box-shadow:0 24px 60px rgba(0,0,0,.48);backdrop-filter:blur(18px)}.pt-bottom-menu button{min-height:38px;border-radius:12px;border:1px solid rgba(70,179,255,.25);background:rgba(11,28,51,.84);color:#dce9f7;font-size:11px}.pt-bottom-menu button.active{border-color:#d6ae58;color:#07111f;background:#d6ae58}
.pt-cosmic-shell .portal-primary{border:1px solid #f0d68c ;background:linear-gradient(135deg,#f0d68c,#d6ae58) ;color:#07111f }.pt-cosmic-shell .portal-secondary{border-color:rgba(94,198,255,.4) ;background:rgba(11,28,51,.78) ;color:#e9f3ff }
@media(max-width:760px){.pt-cosmic-shell .employee-page{padding:12px 12px 116px }.pt-dashboard-hero{min-height:210px;padding:22px 18px}.pt-dashboard-hero-copy h1{font-size:29px}.pt-dashboard-hero-orb{right:-26px;top:46px;width:170px;height:170px}.pt-attendance-summary{grid-template-columns:1fr}.pt-feature-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.pt-feature-tile{min-height:100px;padding:9px 5px}.pt-feature-icon{width:42px;height:42px}.pt-highlight-card{min-height:190px;padding:18px}.pt-highlight-camera{width:62px;height:62px;font-size:25px}.pt-section-heading h2{font-size:19px }}
@media(max-width:480px){.pt-cosmic-auth{padding:10px }.pt-auth-card{width:calc(100vw - 12px) ;border-radius:22px }.pt-auth-card .unified-login-form input{height:44px }.pt-feature-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.pt-feature-tile b{font-size:10px}.pt-feature-tile small{font-size:7px}.pt-attendance-top{flex-direction:column}.pt-attendance-metrics strong{font-size:24px}.pt-bottom-nav{bottom:8px}.pt-bottom-menu{bottom:74px;grid-template-columns:repeat(2,minmax(0,1fr))}}

/* COSMIC V58 ANDROID: TABS + NO NESTED CARDS + CRISP SUN */
/* Android-only: scoped below .pt-cosmic-shell so web/PWA remains unchanged. */
.pt-cosmic-shell .employee-tabs{display:flex;align-items:center;gap:7px;width:100%;margin:0 0 16px;padding:5px;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;position:sticky;top:60px;z-index:35;border-radius:16px;border:1px solid rgba(214,174,88,.36);background:rgba(4,12,24,.96);box-shadow:0 10px 28px rgba(0,0,0,.24);backdrop-filter:none;-webkit-backdrop-filter:none}
.pt-cosmic-shell .employee-tabs::-webkit-scrollbar{display:none}
.pt-cosmic-shell .employee-tabs button{flex:0 0 auto;min-height:38px;padding:0 14px;border:1px solid rgba(88,186,255,.24);border-radius:11px;background:#0a1b31;color:#b9c9db;font-size:11px;font-weight:750;line-height:1;white-space:nowrap;box-shadow:none}
.pt-cosmic-shell .employee-tabs button.active{border-color:#d6ae58;background:linear-gradient(135deg,#f2d58a,#d6ae58);color:#09111d;box-shadow:0 7px 18px rgba(214,174,88,.16)}
.pt-cosmic-shell .pt-bottom-menu{display:none}
.pt-cosmic-shell .employee-topbar{background:rgba(3,10,22,.97);backdrop-filter:none;-webkit-backdrop-filter:none}
.pt-cosmic-shell .portal-card,.pt-cosmic-shell .pt-highlight-card{background:linear-gradient(145deg,rgba(10,24,43,.98),rgba(4,13,27,.98));backdrop-filter:none;-webkit-backdrop-filter:none;box-shadow:0 14px 34px rgba(0,0,0,.24)}
.pt-cosmic-shell .pt-attendance-metrics{gap:0}
.pt-cosmic-shell .pt-attendance-metrics>div{margin:0;padding:15px 14px;background:transparent;border:0;border-radius:0;box-shadow:none}
.pt-cosmic-shell .pt-attendance-metrics>div+div{border-left:1px solid rgba(92,190,255,.18)}
.pt-cosmic-shell .pt-section-heading,.pt-cosmic-shell .pt-dashboard-hero-copy,.pt-cosmic-shell .pt-attendance-top,.pt-cosmic-shell .pt-attendance-progress,.pt-cosmic-shell .pt-work-time,.pt-cosmic-shell .pt-work-foot,.pt-cosmic-shell .pt-activity-row,.pt-cosmic-shell .card-title{background:transparent;border:0;box-shadow:none}
html[data-cosmic-theme="sun"] .pt-cosmic-shell{background-color:#24170b}
html[data-cosmic-theme="sun"] .pt-cosmic-shell::before{background:radial-gradient(circle at 78% 14%,rgba(255,190,93,.16),transparent 30%),linear-gradient(180deg,rgba(34,18,7,.12),rgba(16,9,4,.40) 72%)}
html[data-cosmic-theme="sun"] .pt-cosmic-shell .employee-topbar,html[data-cosmic-theme="sun"] .pt-cosmic-shell .employee-tabs{background:#21150b}
html[data-cosmic-theme="sun"] .pt-cosmic-shell .portal-card,html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-highlight-card{background:linear-gradient(145deg,#2b1b0c,#191008);border-color:rgba(246,199,103,.48)}
html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#2a1b0d,#191108);border-color:rgba(246,199,103,.36)}
html[data-cosmic-theme="sun"] .pt-cosmic-shell .employee-tabs button{background:#2b1a0b;border-color:rgba(246,199,103,.24);color:#e9d7b6}
html[data-cosmic-theme="sun"] .pt-cosmic-shell .employee-tabs button.active{background:linear-gradient(135deg,#f8da8e,#d9a947);color:#261606}
@media(max-width:760px){.pt-cosmic-shell .employee-tabs{top:58px;margin-bottom:12px;border-radius:14px}.pt-cosmic-shell .employee-tabs button{min-height:36px;padding:0 12px;font-size:10px}.pt-cosmic-shell .pt-attendance-metrics>div{padding:14px 10px}}

/* =========================================================
   AURORA THEME
   Web admin + Android employee portal
   ========================================================= */
html[data-cosmic-theme="aurora"] .pt-cosmic-shell{
  background-color:#07131b ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell::before{
  background:
    radial-gradient(circle at 78% 14%,rgba(124,255,178,.16),transparent 30%),
    radial-gradient(circle at 30% 42%,rgba(111,211,255,.10),transparent 28%),
    linear-gradient(180deg,rgba(4,18,22,.10),rgba(2,8,12,.46) 72%) ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell .employee-topbar,
html[data-cosmic-theme="aurora"] .pt-cosmic-shell .employee-tabs{
  background:#071821 ;
  border-color:rgba(124,255,178,.34) ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell .employee-tabs button{
  background:#0a2027 ;
  border-color:rgba(111,211,255,.24) ;
  color:#c8eee1 ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell .employee-tabs button.active{
  background:linear-gradient(135deg,#7cffb2,#6fd3ff) ;
  color:#042016 ;
  border-color:#9dffd0 ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell .portal-card,
html[data-cosmic-theme="aurora"] .pt-cosmic-shell .pt-highlight-card{
  background:linear-gradient(145deg,#0b2428,#06161b) ;
  border-color:rgba(124,255,178,.34) ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-shell .pt-feature-tile{
  background:linear-gradient(180deg,#0c2b27,#06181b) ;
  border-color:rgba(124,255,178,.36) ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-auth{
  background-color:#041116 ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-auth::before{
  background:
    radial-gradient(circle at 74% 23%,rgba(124,255,178,.22),transparent 31%),
    radial-gradient(circle at 28% 54%,rgba(111,211,255,.11),transparent 30%),
    linear-gradient(180deg,rgba(4,18,22,.10),rgba(1,7,10,.76)) ;
}

html[data-cosmic-theme="aurora"] .pt-cosmic-auth .pt-auth-card{
  border-color:rgba(124,255,178,.72) ;
}


`;


/* =========================================================
   PROJECT BY TIRTA — PROFESSIONAL WEB LEGIBILITY V60
   Web-only visual refinement.
   Android cosmic UI is explicitly excluded.
   ========================================================= */

const PROFESSIONAL_WEB_LEGIBILITY = `
/* ---------- WEB ONLY ROOT ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth)) {
  color-scheme: dark ;
  background: var(--pt-bg-deep, #030710) ;
  color: var(--mx-page-text, #eef4fb) ;
  -webkit-font-smoothing: antialiased ;
  text-rendering: optimizeLegibility ;
}

/* ---------- WEB PAGE TYPOGRAPHY ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.verify-id-page {
  color: var(--mx-page-text, #eef4fb) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h1,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h2,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h3,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h4,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h5,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell h6,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home h1,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home h2,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home h3,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page h1,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.verify-id-page h1,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.verify-id-page h2 {
  color: var(--mx-page-text, #f8fbff) ;
  -webkit-text-fill-color: var(--mx-page-text, #f8fbff) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell p,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell label,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home p,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page label,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.verify-id-page p {
  color: var(--mx-text-secondary, #cbd7e5) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell small,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .muted,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .subtext,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .help-text,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .field-help,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home small,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page small,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.verify-id-page small {
  color: var(--mx-text-muted, #aebbd0) ;
}

/* ---------- PROFESSIONAL SURFACES ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .panel,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .form-panel,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .table-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .detail-panel,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .export-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .setting-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .theme-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .report-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .org-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .calendar-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .feature-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .info-box,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .quick,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .custom-theme-panel {
  background: linear-gradient(145deg, #101a2c 0%, #0a1424 100%) ;
  color: var(--mx-text, #edf4fb) ;
  border-color: rgba(145, 171, 205, .22) ;
  box-shadow:
    0 18px 48px rgba(0, 0, 0, .24),
    inset 0 1px rgba(255, 255, 255, .025) ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

/* ---------- DASHBOARD FRAME ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .panel *,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .form-panel *,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .table-card *,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .detail-panel * {
  text-shadow: none ;
}

/* ---------- TABLES ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .table-wrap,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell table {
  background: rgba(6, 14, 28, .56) ;
  border-color: rgba(145, 171, 205, .20) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell table th {
  background: rgba(111, 145, 188, .10) ;
  color: #dfe8f3 ;
  -webkit-text-fill-color: #dfe8f3 ;
  border-bottom-color: rgba(145, 171, 205, .25) ;
  font-weight: 800 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell table td {
  background: transparent ;
  color: #eef4fb ;
  -webkit-text-fill-color: #eef4fb ;
  border-bottom-color: rgba(145, 171, 205, .12) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell table tbody tr:hover td {
  background: rgba(214, 174, 88, .045) ;
}

/* ---------- SIDEBAR ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar {
  border-right: 1px solid rgba(145, 171, 205, .20) ;
  box-shadow: 12px 0 38px rgba(0, 0, 0, .20) ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item {
  color: #d7e0eb ;
  -webkit-text-fill-color: #d7e0eb ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item:hover {
  color: #ffffff ;
  -webkit-text-fill-color: #ffffff ;
  background: rgba(255, 255, 255, .055) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item.active,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item.active {
  color: #101722 ;
  -webkit-text-fill-color: #101722 ;
  background: linear-gradient(135deg, var(--pt-accent, #d6ae58), #fff0c7) ;
  border-color: var(--pt-accent, #d6ae58) ;
  box-shadow: 0 8px 22px rgba(214, 174, 88, .15) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item.active span,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item.active svg,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .sidebar .nav-item.active path,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item.active span,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item.active svg,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .talenta-sidebar .nav-item.active path {
  color: #101722 ;
  -webkit-text-fill-color: #101722 ;
  fill: none ;
  stroke: currentColor ;
}

/* ---------- TOPBAR ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .topbar {
  border-bottom: 1px solid rgba(145, 171, 205, .20) ;
  box-shadow: 0 10px 32px rgba(0, 0, 0, .18) ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .icon-btn,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .theme-control-button,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .admin-floating-action {
  color: #e6eef8 ;
  -webkit-text-fill-color: #e6eef8 ;
  border-color: rgba(145, 171, 205, .22) ;
  background: rgba(255, 255, 255, .035) ;
  opacity: 1 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .icon-btn:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .theme-control-button:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.topbar .admin-floating-action:hover {
  background: rgba(214, 174, 88, .12) ;
  border-color: rgba(214, 174, 88, .44) ;
  color: #fff8e7 ;
}

/* ---------- CONTROLS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell select,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell textarea {
  background: #0c1728 ;
  color: #eef5ff ;
  -webkit-text-fill-color: #eef5ff ;
  border: 1px solid #3b4c64 ;
  box-shadow: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input::placeholder,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell textarea::placeholder {
  color: #9cabbf ;
  opacity: 1 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input:focus,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell select:focus,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell textarea:focus {
  border-color: var(--pt-accent, #d6ae58) ;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--pt-accent, #d6ae58) 18%, transparent) ;
  outline: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell option {
  background: #0c1728 ;
  color: #eef5ff ;
}

/* ---------- BUTTONS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .primary,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .portal-primary {
  color: #111722 ;
  -webkit-text-fill-color: #111722 ;
  background: linear-gradient(135deg, var(--pt-accent, #d6ae58), #fff0c7) ;
  border-color: var(--pt-accent, #d6ae58) ;
  opacity: 1 ;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--pt-accent, #d6ae58) 14%, transparent) ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .secondary,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .portal-secondary {
  color: #eaf1f9 ;
  -webkit-text-fill-color: #eaf1f9 ;
  background: #172338 ;
  border: 1px solid rgba(145, 171, 205, .30) ;
  opacity: 1 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .secondary:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .portal-secondary:hover {
  color: #ffffff ;
  background: #263a57 ;
  border-color: rgba(214, 174, 88, .58) ;
}

/* ---------- LINKS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell a,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home a,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page a {
  color: #f0d68c ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell a:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home a:hover,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page a:hover {
  color: #fff2c9 ;
}

/* ---------- STATUS / SEMANTIC COLORS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status.green,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status-active {
  color: #8fe6c2 ;
  -webkit-text-fill-color: #8fe6c2 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status.orange,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status-warning {
  color: #ffd27e ;
  -webkit-text-fill-color: #ffd27e ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status.red,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status-inactive {
  color: #ffadb8 ;
  -webkit-text-fill-color: #ffadb8 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .status.blue {
  color: #9bc8ff ;
  -webkit-text-fill-color: #9bc8ff ;
}

/* ---------- MODALS / DRAWERS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.drawer,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.edit-drawer,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.employee-detail-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.profile-panel,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.simple-modal,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.modal-card {
  background: #0d1728 ;
  color: #edf4fb ;
  border-color: rgba(145, 171, 205, .26) ;
  box-shadow: 0 24px 70px rgba(0, 0, 0, .42) ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.drawer input,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.drawer select,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.drawer textarea,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.edit-drawer input,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.edit-drawer select,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.edit-drawer textarea {
  background: #111d31 ;
  color: #f0f5fc ;
  -webkit-text-fill-color: #f0f5fc ;
  border-color: #52627a ;
}

/* ---------- LOGIN / PUBLIC ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.registration-card {
  background: linear-gradient(145deg, #101a2c, #0a1424) ;
  color: #eef4fb ;
  border-color: rgba(145, 171, 205, .24) ;
  box-shadow: 0 24px 80px rgba(0, 0, 0, .38) ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-heading h1,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-card .unified-brand strong {
  color: #ffffff ;
  -webkit-text-fill-color: #ffffff ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-heading p,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-card .unified-brand small {
  color: #bdc9d8 ;
  -webkit-text-fill-color: #bdc9d8 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-form label > span {
  color: #dbe5f0 ;
  -webkit-text-fill-color: #dbe5f0 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-form input {
  background: #0c1728 ;
  color: #f1f6fd ;
  -webkit-text-fill-color: #f1f6fd ;
  border-color: #3b4c64 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-form input::placeholder {
  color: #9cabbf ;
  opacity: 1 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-button {
  background: linear-gradient(135deg, var(--pt-accent, #d6ae58), #fff0c7) ;
  color: #111722 ;
  -webkit-text-fill-color: #111722 ;
  border-color: var(--pt-accent, #d6ae58) ;
  opacity: 1 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-register,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-security small {
  color: #aebbd0 ;
  -webkit-text-fill-color: #aebbd0 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-register button,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.password-toggle,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.login-options > button {
  color: #f0d68c ;
  -webkit-text-fill-color: #f0d68c ;
}

/* ---------- FOCUS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell button:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell select:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell textarea:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page button:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page input:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--pt-accent, #d6ae58) 48%, transparent) ;
  outline-offset: 2px ;
}

/* ---------- DISABLED ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell button:disabled,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input:disabled,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell select:disabled,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell textarea:disabled {
  opacity: .62 ;
  cursor: not-allowed ;
}

/* =========================================================
   PROJECT BY TIRTA — PROFESSIONAL WEB CONTRAST GUARD V61
   Web-only final readability guard.
   Android cosmic UI remains untouched.
   ========================================================= */

/* ---------- GENERIC TEXT ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .text-muted,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .text-secondary,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .secondary-text,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .description,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .subtitle,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .caption,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .helper-text {
  color: #b8c6d8 ;
  -webkit-text-fill-color: #b8c6d8 ;
}

/* ---------- COMMON FORM TEXT ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell label,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .form-label,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .field-label,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .input-label {
  color: #d9e3ef ;
  -webkit-text-fill-color: #d9e3ef ;
}

/* ---------- COMMON VALUE / DATA TEXT ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .value,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .data-value,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .stat-value,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .metric-value {
  color: #f2f6fb ;
  -webkit-text-fill-color: #f2f6fb ;
}

/* ---------- EMPTY / LOADING / NOTICE ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .empty-state,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .empty-state p,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .loading-state,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .notice,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .info-message {
  color: #c5d1df ;
  -webkit-text-fill-color: #c5d1df ;
}

/* ---------- ALERTS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .alert-error,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .error-message,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .danger-message {
  color: #ffb8c2 ;
  -webkit-text-fill-color: #ffb8c2 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .alert-success,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .success-message {
  color: #98e7c8 ;
  -webkit-text-fill-color: #98e7c8 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .alert-warning,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .warning-message {
  color: #ffd48c ;
  -webkit-text-fill-color: #ffd48c ;
}

/* ---------- BADGES / CHIPS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .badge,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .chip,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .tag {
  opacity: 1 ;
  text-shadow: none ;
}

/* Status badges with dark surfaces */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .badge.success,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .chip.success,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .tag.success {
  color: #9be8cb ;
  -webkit-text-fill-color: #9be8cb ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .badge.warning,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .chip.warning,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .tag.warning {
  color: #ffd58d ;
  -webkit-text-fill-color: #ffd58d ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .badge.danger,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .chip.danger,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .tag.danger {
  color: #ffb6c0 ;
  -webkit-text-fill-color: #ffb6c0 ;
}

/* ---------- LINKS INSIDE DATA ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell td a,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .table-wrap a,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .detail-panel a {
  color: #f1d58f ;
  -webkit-text-fill-color: #f1d58f ;
  text-decoration-thickness: 1px ;
  text-underline-offset: 2px ;
}

/* ---------- BUTTON ICONS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell button svg,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .icon-btn svg {
  opacity: 1 ;
}

/* ---------- FILE INPUT ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="file"] {
  color: #e7eef7 ;
  -webkit-text-fill-color: #e7eef7 ;
  background: #0c1728 ;
  border-color: #3b4c64 ;
}

body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="file"]::file-selector-button {
  color: #111722 ;
  background: #d6ae58 ;
  border: 0 ;
  border-radius: 7px ;
  padding: 7px 11px ;
  font-weight: 800 ;
  cursor: pointer ;
}

/* ---------- NATIVE CONTROL READABILITY ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="date"],
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="datetime-local"],
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="time"],
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell input[type="month"] {
  color-scheme: dark ;
  color: #eef5ff ;
  -webkit-text-fill-color: #eef5ff ;
}

/* ---------- HR / DIVIDERS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell hr,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .divider {
  border-color: rgba(145,171,205,.18) ;
  background: rgba(145,171,205,.18) ;
}

/* ---------- SELECTION ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell ::selection,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.public-home ::selection,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.unified-login-page ::selection {
  background: rgba(214,174,88,.34) ;
  color: #ffffff ;
}

/* ---------- FOCUS FOR CUSTOM INTERACTIVE ELEMENTS ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell [role="button"]:focus-visible,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell [tabindex]:focus-visible {
  outline: 3px solid rgba(214,174,88,.50) ;
  outline-offset: 2px ;
}

/* ---------- PROFESSIONAL SURFACE CONSISTENCY ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .section-card,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .content-card {
  color: #edf4fb ;
  border-color: rgba(145,171,205,.20) ;
}

/* Avoid accidental bright/white native surfaces in the professional shell */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .card input:not([type="checkbox"]):not([type="radio"]):not([type="file"]),
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .card select,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell .card textarea {
  background: #0c1728 ;
  color: #eef5ff ;
  -webkit-text-fill-color: #eef5ff ;
}

/* ---------- FINAL BODY READABILITY ---------- */
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell strong,
body:not(:has(.pt-cosmic-shell)):not(:has(.pt-cosmic-auth))
.talenta-shell b {
  color: #f3f7fc ;
  -webkit-text-fill-color: #f3f7fc ;
}

`;

export const COSMIC_THEMES = {
  "sun": {
    "name": "Matahari",
    "accent": "#f6c767",
    "secondary": "#ff985d",
    "base": "#0a111f",
    "deep": "#030710"
  },
  "moon": {
    "name": "Bulan",
    "accent": "#e4d1a0",
    "secondary": "#83bdfb",
    "base": "#071222",
    "deep": "#020712"
  },
  "galaxy": {
    "name": "Galaksi",
    "accent": "#d7adff",
    "secondary": "#7aa9ff",
    "base": "#0d0820",
    "deep": "#03020a"
  },
  "blackhole": {
    "name": "Blackhole",
    "accent": "#e8c36f",
    "secondary": "#63d7ff",
    "base": "#06070a",
    "deep": "#010204"
  },
  "nebula": {
    "name": "Nebula",
    "accent": "#ffbfe8",
    "secondary": "#71d5ff",
    "base": "#100614",
    "deep": "#03040b"
  },
  "aurora": {
    "name": "Aurora",
    "accent": "#7cffb2",
    "secondary": "#6fd3ff",
    "base": "#07131b",
    "deep": "#02070b"
  }
} as const;
export type CosmicThemeId = keyof typeof COSMIC_THEMES;

const THEME_STORAGE_KEY = 'project-tirta-cosmic-theme';

function readPersistedCosmicTheme(): CosmicThemeId {
  if (typeof localStorage === 'undefined') return 'sun';
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved && saved in COSMIC_THEMES ? saved as CosmicThemeId : 'sun';
  } catch {
    return 'sun';
  }
}

export function installProjectByTirtaTheme(): void {
  if (typeof document === 'undefined') return;
  // The rebuilt web UI owns all browser styling. Keep this legacy runtime
  // stylesheet isolated to Android so the Android experience remains intact.
  if (document.documentElement.dataset.platform === 'web') return;
  const styleId = 'project-by-tirta-runtime-theme';
  if (document.getElementById(styleId)) return;
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = LEGACY_STYLES + '\n\n' + FUTURE_STYLES + PROFESSIONAL_WEB_LEGIBILITY + `

      /* =====================================================
         LOADING NO CARD V57.10
         Full-screen dark background + logo only.
         ===================================================== */

      html:has(.app-loading-screen),
      body:has(.app-loading-screen),
      #root:has(.app-loading-screen),
      html:has(.employee-loading-screen),
      body:has(.employee-loading-screen),
      #root:has(.employee-loading-screen),
      html:has(.login-wrap:has(.loading)),
      body:has(.login-wrap:has(.loading)),
      #root:has(.login-wrap:has(.loading)) {
        background: #030710 ;
      }

      .app-loading-screen,
      .employee-loading-screen,
      .login-wrap:has(.loading) {
        position: fixed ;
        inset: 0 ;
        z-index: 99999 ;
        width: 100vw ;
        height: 100dvh ;
        min-height: 100dvh ;
        margin: 0 ;
        padding: 0 ;
        display: grid ;
        place-items: center ;
        overflow: hidden ;
        background: #030710 ;
      }

      /* HAPUS CARD secara visual — tidak ada background/border/shadow */
      .app-loading-card,
      .employee-loading-card,
      .login-wrap:has(.loading) .login-card {
        display: contents ;
        width: auto ;
        max-width: none ;
        min-width: 0 ;
        height: auto ;
        min-height: 0 ;
        margin: 0 ;
        padding: 0 ;
        background: transparent ;
        border: 0 ;
        outline: 0 ;
        border-radius: 0 ;
        box-shadow: none ;
        backdrop-filter: none ;
      }

      /* Hilangkan frame/logo-container lama */
      .app-loading-brand,
      .employee-loading-logo {
        display: contents ;
        width: auto ;
        height: auto ;
        min-width: 0 ;
        min-height: 0 ;
        padding: 0 ;
        margin: 0 ;
        background: transparent ;
        border: 0 ;
        outline: 0 ;
        border-radius: 0 ;
        box-shadow: none ;
      }

      .app-loading-logo-only,
      .app-loading-brand img,
      .employee-loading-logo img {
        width: 78px ;
        height: 78px ;
        max-width: 78px ;
        max-height: 78px ;
        display: block ;
        object-fit: contain ;
        margin: 0 ;
        padding: 0 ;
        background: transparent ;
        border: 0 ;
        outline: 0 ;
        border-radius: 0 ;
        box-shadow: none ;
        filter: drop-shadow(0 0 15px rgba(214,174,88,.38)) ;
        animation: tirta-loading-logo-v57-10 1.7s ease-in-out infinite ;
      }

      /* Session loading: tampilkan logo sebagai satu-satunya isi */
      .login-wrap:has(.loading) .login-card .loading {
        display: block ;
        width: auto ;
        min-width: 0 ;
        min-height: 0 ;
        height: auto ;
        padding: 0 ;
        margin: 0 ;
        background: transparent ;
        border: 0 ;
        outline: 0 ;
        border-radius: 0 ;
        box-shadow: none ;
        color: transparent ;
        font-size: 0 ;
      }

      .login-wrap:has(.loading) .login-card .loading::before {
        content: "" ;
        display: block ;
        width: 78px ;
        height: 78px ;
        margin: 0 ;
        background: var(--pt-company-logo) center / contain no-repeat ;
        filter: drop-shadow(0 0 15px rgba(214,174,88,.38)) ;
        animation: tirta-loading-logo-v57-10 1.7s ease-in-out infinite ;
      }

      /* Hilangkan seluruh teks/indikator tambahan pada full-screen loading */
      .app-loading-copy,
      .employee-loading-copy,
      .app-loading-indicator,
      .employee-loading-bar,
      .employee-loading-skeletons {
        display: none ;
      }

      @keyframes tirta-loading-logo-v57-10 {
        0%, 100% {
          transform: scale(.92);
          opacity: .72;
        }
        50% {
          transform: scale(1.08);
          opacity: 1;
        }
      }

/* =========================================================
   ANDROID V58.3 — HOME ONE-SCREEN / COMPACT MENU / CLEAN HEADER
   - Home does not scroll; feature pages can still scroll.
   - Employee name + safe attendance are the first visible content.
   - Company logo/name and notification button are removed from Home.
   - Bottom navigation: Home / Attendance / Menu / Profile.
   - Menu tiles are icon-first and no longer look like nested cards.
   ========================================================= */
html.pt-android-home-lock,
body.pt-android-home-lock {
  height: 100% ;
  overflow: hidden ;
}

.pt-cosmic-shell.pt-home-active {
  height: 100dvh ;
  min-height: 100dvh ;
  max-height: 100dvh ;
  overflow: hidden ;
}

.pt-cosmic-shell.pt-home-active .employee-page {
  height: 100dvh ;
  min-height: 100dvh ;
  max-height: 100dvh ;
  overflow: hidden ;
  padding: 14px 12px 82px ;
}

.pt-cosmic-shell.pt-home-active .pt-home-intro {
  padding: 4px 3px 8px ;
}

.pt-cosmic-shell.pt-home-active .pt-home-intro .portal-eyebrow {
  font-size: 8px ;
  letter-spacing: .12em ;
}

.pt-cosmic-shell.pt-home-active .pt-home-intro h1 {
  font-size: clamp(22px, 6vw, 28px) ;
  margin: 2px 0 1px ;
}

.pt-cosmic-shell.pt-home-active .pt-home-intro p {
  font-size: 9px ;
  margin: 0 ;
}

/* Safe attendance remains one main rectangular panel. */
.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card {
  margin: 0 0 8px ;
  padding: 11px ;
  border-radius: 18px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top {
  padding-bottom: 7px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top .status-badge {
  display: none ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .card-kicker {
  font-size: 9px ;
  letter-spacing: .08em ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top h2 {
  font-size: 17px ;
  margin: 2px 0 ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top p {
  font-size: 8px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-metrics {
  gap: 6px ;
  margin-top: 5px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-metrics > div {
  padding: 8px 10px ;
  border-radius: 12px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-metrics small {
  font-size: 8px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-metrics strong {
  font-size: 21px ;
  margin: 2px 0 ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-metrics span {
  font-size: 7px ;
}

.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-security-line {
  margin: 6px 0 ;
  font-size: 8px ;
}

.pt-cosmic-shell.pt-home-active .pt-home-attendance-actions {
  gap: 6px ;
  margin-top: 5px ;
}

.pt-cosmic-shell.pt-home-active .pt-home-attendance-actions button {
  min-height: 34px ;
  height: 34px ;
  padding: 0 8px ;
  font-size: 9px ;
}

/* Do not add a visual card behind the word MENU. */
.pt-cosmic-shell.pt-home-active .pt-home-menu-section {
  margin: 0 ;
}

.pt-cosmic-shell.pt-home-active .pt-home-menu-section .pt-heading-plain {
  display: none ;
}

/* Menu buttons become clean icon+label controls, not cards. */
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home {
  display: grid ;
  grid-template-columns: repeat(4, minmax(0, 1fr)) ;
  gap: 5px 3px ;
  margin: 0 ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile {
  min-height: 60px ;
  padding: 3px 2px 2px ;
  border: 0 ;
  border-radius: 0 ;
  background: transparent ;
  box-shadow: none ;
  color: #eef6ff ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile:hover,
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile:active {
  transform: none ;
  box-shadow: none ;
  background: transparent ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  width: 34px ;
  height: 34px ;
  margin-bottom: 1px ;
  border-radius: 11px ;
  font-size: 18px ;
  box-shadow: 0 0 12px rgba(70,199,255,.10) ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile b {
  font-size: 8px ;
  line-height: 1 ;
  font-weight: 750 ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile small {
  display: none ;
}

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile em {
  top: 0 ;
  right: 1px ;
  min-width: 12px ;
  height: 12px ;
  font-size: 6px ;
  border-width: 1px ;
}

/* Remove any leftover Home activity area so the Home is one compact screen. */
.pt-cosmic-shell.pt-home-active .pt-home-activity {
  display: none ;
}

/* Feature pages: simple compact header; no company logo/name. */
.pt-cosmic-shell .pt-feature-topbar {
  min-height: 48px ;
  height: 48px ;
  padding: 0 12px ;
  display: flex ;
  align-items: center ;
  gap: 10px ;
  backdrop-filter: none ;
}

.pt-back-button {
  width: 34px ;
  height: 34px ;
  border-radius: 11px ;
  border: 1px solid rgba(82,194,255,.35) ;
  background: rgba(7,23,43,.62) ;
  color: #e9f3ff ;
  display: grid ;
  place-items: center ;
  font-size: 18px ;
}

.pt-feature-topbar-title {
  font-size: 14px ;
  color: #f5f8ff ;
}

/* No notification button remains in Android header. */
.pt-cosmic-shell .pt-notification-button {
  display: none ;
}

.pt-cosmic-shell .pt-profile-logout {
  width: 100% ;
  margin-top: 12px ;
  min-height: 42px ;
}

/* Theme-specific menu icon frames stay aligned with the Home design. */
html[data-cosmic-theme="sun"] .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  background: radial-gradient(circle at 35% 30%, rgba(255,245,210,.38), #5a3b18 72%) ;
  border-color: rgba(246,199,103,.55) ;
  color: #ffe0a2 ;
}
html[data-cosmic-theme="moon"] .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  background: radial-gradient(circle at 35% 30%, rgba(209,235,255,.22), #12345d 72%) ;
}
html[data-cosmic-theme="galaxy"] .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  background: radial-gradient(circle at 35% 30%, rgba(234,208,255,.25), #2a1655 72%) ;
}
html[data-cosmic-theme="blackhole"] .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  background: radial-gradient(circle at 35% 30%, rgba(186,241,255,.18), #0b1a24 72%) ;
}
html[data-cosmic-theme="nebula"] .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon {
  background: radial-gradient(circle at 35% 30%, rgba(255,214,241,.25), #421942 72%) ;
}

@media(max-width:390px){
  .pt-cosmic-shell.pt-home-active .employee-page { padding-left: 9px ; padding-right: 9px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home { gap: 3px 1px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon { width: 31px ; height: 31px ; font-size: 16px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile { min-height: 56px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile b { font-size: 7px ; }
}


/* =========================================================
   ANDROID V58.5 — COMPACT WORK DURATION + SIX MENU ICONS
   - Home shows real-time work duration from check-in.
   - Menu middle grid contains exactly six feature entries.
   - No extra profile/attendance feature tiles because those are in bottom nav.
   - Icons use theme-aligned color instead of dark glyphs.
   - Android cosmic background stays crisp; decorative blur layers are disabled.
   ========================================================= */
.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card { padding: 10px ; margin-bottom: 7px ; }
.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top { padding-bottom: 4px ; }
.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top h2 { font-size: 15px ; margin: 1px 0 ; }
.pt-cosmic-shell.pt-home-active .pt-safe-attendance-card .pt-attendance-top p { font-size: 7px ; opacity: .78 ; }
.pt-cosmic-shell.pt-home-active .pt-work-duration { padding: 2px 1px 4px ; }
.pt-cosmic-shell.pt-home-active .pt-work-duration > strong { display:block ; font-size: 25px ; line-height:1 ; letter-spacing:.04em ; color:#f9fbff ; font-variant-numeric:tabular-nums ; }
.pt-cosmic-shell.pt-home-active .pt-work-progress { height: 8px ; margin: 8px 0 5px ; border-radius:999px ; overflow:hidden ; background:rgba(255,255,255,.11) ; border:1px solid rgba(255,255,255,.07) ; }
.pt-cosmic-shell.pt-home-active .pt-work-progress span { display:block ; height:100% ; min-width:0 ; border-radius:inherit ; background:linear-gradient(90deg,#39d7ff 0%,#5ce5c0 48%,#d6ae58 100%) ; box-shadow:0 0 16px rgba(70,215,255,.30) ; transition:width .7s linear ; }
.pt-cosmic-shell.pt-home-active .pt-work-duration-meta { display:flex ; justify-content:space-between ; align-items:center ; font-size:7px ; color:#8fa6bf ; }
.pt-cosmic-shell.pt-home-active .pt-work-duration-meta b { color:var(--pt-accent) ; }

.pt-cosmic-shell.pt-home-active .pt-feature-grid-home,
.pt-cosmic-shell .pt-feature-grid { grid-template-columns:repeat(3,minmax(0,1fr)) ; gap:4px 3px ; }
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile,
.pt-cosmic-shell .pt-feature-grid .pt-feature-tile { min-height:58px ; padding:3px 2px 4px ; gap:2px ; border:0 ; border-radius:0 ; background:transparent ; box-shadow:none ; }
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon,
.pt-cosmic-shell .pt-feature-grid .pt-feature-icon { width:31px ; height:31px ; margin-bottom:1px ; border-radius:10px ; font-size:16px ; border:1px solid rgba(255,255,255,.18) ; box-shadow:0 0 13px rgba(0,0,0,.16), inset 0 1px rgba(255,255,255,.10) ; }
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile b,
.pt-cosmic-shell .pt-feature-grid .pt-feature-tile b { font-size:8px ; line-height:1 ; text-align:center ; }
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile small,
.pt-cosmic-shell .pt-feature-grid .pt-feature-tile small { display:none ; }
.pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile em,
.pt-cosmic-shell .pt-feature-grid .pt-feature-tile em { top:0 ; right:0 ; min-width:11px ; height:11px ; font-size:6px ; border:1px solid rgba(0,0,0,.22) ; }

/* Six feature icons: vivid but still professional. */
.pt-cosmic-shell .pt-feature-payroll { color:#ffd86a ; background:radial-gradient(circle at 35% 30%,rgba(255,231,155,.42),#5a4116 72%) ; }
.pt-cosmic-shell .pt-feature-leave { color:#76f5cd ; background:radial-gradient(circle at 35% 30%,rgba(191,255,232,.42),#174f48 72%) ; }
.pt-cosmic-shell .pt-feature-overtime { color:#6ee7ff ; background:radial-gradient(circle at 35% 30%,rgba(185,247,255,.40),#164b68 72%) ; }
.pt-cosmic-shell .pt-feature-announcements { color:#ff9edc ; background:radial-gradient(circle at 35% 30%,rgba(255,215,244,.44),#5a194f 72%) ; }
.pt-cosmic-shell .pt-feature-schedule { color:#9fc3ff ; background:radial-gradient(circle at 35% 30%,rgba(220,234,255,.42),#203d74 72%) ; }
.pt-cosmic-shell .pt-feature-feedback { color:#b6a2ff ; background:radial-gradient(circle at 35% 30%,rgba(235,226,255,.42),#3b2770 72%) ; }

/* Keep Android background sharp: remove legacy veil/filter layers. */
.pt-cosmic-shell::before,
.pt-cosmic-shell .employee-portal-cosmic::before,
.pt-cosmic-shell::after,
.pt-cosmic-shell .employee-portal-cosmic::after { opacity:0 ; background:none ; filter:none ; animation:none ; }
.pt-cosmic-shell { background-blend-mode:normal ; filter:none ; backdrop-filter:none ; -webkit-backdrop-filter:none ; }
.pt-cosmic-shell.pt-home-active { background-color:transparent ; }

/* Menu page uses the same flat icon grid as Home. */
.pt-cosmic-shell .pt-menu-page { padding-top:2px ; }
.pt-cosmic-shell .pt-menu-page .pt-page-heading { padding-bottom:8px ; }
.pt-cosmic-shell .pt-menu-page .pt-page-heading p { display:none ; }

/* ANDROID V58.6 — THEME-SYNCED ATTENDANCE HISTORY + CRISP BACKGROUND */
.pt-cosmic-shell .pt-attendance-history-page { padding:4px 0 90px ; }
.pt-cosmic-shell .pt-attendance-history-page .pt-page-heading { margin-bottom:10px ; padding:2px 2px 8px ; }
.pt-cosmic-shell .pt-attendance-history-page .pt-page-heading h1 { margin:3px 0 ; font-size:22px ; color:var(--pt-text) ; }
.pt-cosmic-shell .pt-attendance-history-page .pt-page-heading p { margin:0 ; font-size:9px ; color:var(--pt-muted) ; }
.pt-cosmic-shell .pt-attendance-history-list { display:grid ; gap:7px ; }
.pt-cosmic-shell .pt-attendance-history-row { margin:0 ; padding:10px 11px ; display:grid ; grid-template-columns:minmax(0,1fr) auto ; gap:7px 10px ; color:var(--pt-text) ; background:linear-gradient(145deg,rgba(10,24,43,.92),rgba(4,13,27,.94)) ; border:1px solid color-mix(in srgb,var(--pt-accent) 34%, transparent) ; border-radius:13px ; box-shadow:none ; }
.pt-cosmic-shell .pt-attendance-history-date { display:flex ; align-items:center ; justify-content:space-between ; gap:8px ; min-width:0 ; }
.pt-cosmic-shell .pt-attendance-history-date b { color:var(--pt-text) ; font-size:11px ; white-space:nowrap ; }
.pt-cosmic-shell .pt-attendance-history-date span { color:var(--pt-accent) ; font-size:8px ; font-weight:800 ; }
.pt-cosmic-shell .pt-attendance-history-times { grid-column:1 / -1 ; display:grid ; grid-template-columns:repeat(3,minmax(0,1fr)) ; border-top:1px solid rgba(255,255,255,.07) ; padding-top:7px ; }
.pt-cosmic-shell .pt-attendance-history-times>div { padding:0 8px ; border-left:1px solid rgba(255,255,255,.06) ; }
.pt-cosmic-shell .pt-attendance-history-times>div:first-child { padding-left:0 ; border-left:0 ; }
.pt-cosmic-shell .pt-attendance-history-times small { display:block ; color:var(--pt-muted) ; font-size:7px ; }
.pt-cosmic-shell .pt-attendance-history-times b { display:block ; margin-top:2px ; color:var(--pt-text) ; font-size:11px ; font-variant-numeric:tabular-nums ; }
.pt-cosmic-shell .pt-attendance-history-source { grid-column:1 / -1 ; color:var(--pt-muted) ; font-size:7px ; }
.pt-cosmic-shell .pt-attendance-history-empty { padding:16px 2px ; color:var(--pt-muted) ; font-size:10px ; }
html[data-cosmic-theme="sun"] .pt-cosmic-shell { background-color:#4a2d0a ; }
html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-attendance-history-row { background:linear-gradient(145deg,#352008,#211305); border-color:rgba(246,199,103,.42); }
html[data-cosmic-theme="moon"] .pt-cosmic-shell .pt-attendance-history-row { background:linear-gradient(145deg,#102a4b,#07172d); border-color:rgba(131,189,251,.34); }
html[data-cosmic-theme="galaxy"] .pt-cosmic-shell .pt-attendance-history-row { background:linear-gradient(145deg,#26164a,#100a25); border-color:rgba(215,173,255,.36); }
html[data-cosmic-theme="blackhole"] .pt-cosmic-shell .pt-attendance-history-row { background:linear-gradient(145deg,#111b21,#05080c); border-color:rgba(99,215,255,.32); }
html[data-cosmic-theme="nebula"] .pt-cosmic-shell .pt-attendance-history-row { background:linear-gradient(145deg,#3b1740,#1b0a22); border-color:rgba(255,191,232,.36); }

/* Never blur/filter the Android cosmic background; only content cards may use visual depth. */
.pt-cosmic-shell,
.pt-cosmic-shell::before,
.pt-cosmic-shell::after { filter:none ; backdrop-filter:none ; -webkit-backdrop-filter:none ; }
.pt-cosmic-shell::before { opacity:0 ; background:none ; }
.pt-cosmic-shell::after { opacity:0 ; background:none ; }

@media(max-width:390px){
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home { gap:2px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile { min-height:54px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-icon { width:29px ; height:29px ; font-size:15px ; }
  .pt-cosmic-shell.pt-home-active .pt-feature-grid-home .pt-feature-tile b { font-size:7.5px ; }
}

`;
  document.head.appendChild(style);

    const centerFix = document.createElement("style");
    centerFix.id = "tirta-loading-center-v57-11";
    centerFix.textContent = `\n/* LOADING CENTER FIX V57.11 */\n\n.app-loading-screen,\n.employee-loading-screen,\n.login-wrap:has(.loading) {\n  position: fixed ;\n  inset: 0 ;\n  width: 100vw ;\n  height: 100dvh ;\n  display: block ;\n  margin: 0 ;\n  padding: 0 ;\n  overflow: hidden ;\n  background: #030710 ;\n}\n\n.app-loading-card,\n.employee-loading-card,\n.login-wrap:has(.loading) .login-card {\n  position: static ;\n  width: 100% ;\n  height: 100% ;\n  min-width: 0 ;\n  min-height: 0 ;\n  margin: 0 ;\n  padding: 0 ;\n  display: block ;\n  background: transparent ;\n  border: 0 ;\n  box-shadow: none ;\n}\n\n.app-loading-brand,\n.employee-loading-logo {\n  position: fixed ;\n  left: 50% ;\n  top: 50% ;\n  width: 78px ;\n  height: 78px ;\n  min-width: 0 ;\n  min-height: 0 ;\n  margin: 0 ;\n  padding: 0 ;\n  display: block ;\n  transform: translate(-50%, -50%) ;\n  background: transparent ;\n  border: 0 ;\n  box-shadow: none ;\n}\n\n.app-loading-brand img,\n.employee-loading-logo img,\n.app-loading-logo {\n  position: static ;\n  left: auto ;\n  top: auto ;\n  width: 78px ;\n  height: 78px ;\n  min-width: 78px ;\n  min-height: 78px ;\n  margin: 0 ;\n  padding: 0 ;\n  display: block ;\n  object-fit: contain ;\n  transform: none ;\n  animation: tirta-logo-center-pulse 1.7s ease-in-out infinite ;\n  filter: drop-shadow(0 0 14px rgba(214,174,88,.38)) ;\n}\n\n.login-wrap:has(.loading) .login-card .loading {\n  position: fixed ;\n  left: 50% ;\n  top: 50% ;\n  width: 78px ;\n  height: 78px ;\n  min-width: 78px ;\n  min-height: 78px ;\n  margin: 0 ;\n  padding: 0 ;\n  display: block ;\n  transform: translate(-50%, -50%) ;\n  background: transparent ;\n  border: 0 ;\n  box-shadow: none ;\n  color: transparent ;\n  font-size: 0 ;\n}\n\n.login-wrap:has(.loading) .login-card .loading::before {\n  content: "" ;\n  width: 78px ;\n  height: 78px ;\n  display: block ;\n  margin: 0 ;\n  background: var(--pt-company-logo) center / contain no-repeat ;\n  filter: drop-shadow(0 0 14px rgba(214,174,88,.38)) ;\n  animation: tirta-logo-center-pulse 1.7s ease-in-out infinite ;\n}\n\n@keyframes tirta-logo-center-pulse {\n  0%, 100% {\n    scale: .92;\n    opacity: .72;\n  }\n  50% {\n    scale: 1.08;\n    opacity: 1;\n  }\n}\n\n.app-loading-copy,\n.employee-loading-copy,\n.app-loading-indicator,\n.employee-loading-bar,\n.employee-loading-skeletons {\n  display: none ;\n}\n`;
    document.head.appendChild(centerFix);
}

export function getCosmicTheme(): CosmicThemeId {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.dataset.cosmicTheme;
    if (current && current in COSMIC_THEMES) return current as CosmicThemeId;
  }
  return 'sun';
}

export function applyCosmicTheme(themeId: CosmicThemeId, persist = true): void {
  if (typeof document === 'undefined') return;
  const theme = COSMIC_THEMES[themeId] ?? COSMIC_THEMES.sun;
  const root = document.documentElement;
  root.dataset.cosmicTheme = themeId;
  root.style.setProperty('--pt-accent', theme.accent);
  root.style.setProperty('--pt-accent-2', theme.secondary);
  root.style.setProperty('--pt-bg-base', theme.base);
  root.style.setProperty('--pt-bg-deep', theme.deep);
  root.style.setProperty('--pt-bg-glow', theme.secondary);
  root.style.setProperty('--mx-primary', theme.base);
  root.style.setProperty('--mx-accent', theme.accent);
  root.style.setProperty('--mx-background', theme.base);
  root.style.setProperty('--mx-surface', theme.base);
  root.style.setProperty('--mx-border', theme.accent);
  root.style.setProperty('--mx-border-strong', theme.accent);
  root.style.setProperty('--mx-focus', theme.accent);
  const sidebarColors: Record<CosmicThemeId, { background: string; text: string; muted: string; activeText: string }> = {
    sun: { background: '#351808', text: '#fff8ed', muted: '#e8cda6', activeText: '#2a1608' },
    moon: { background: '#06142d', text: '#f5f7fb', muted: '#afbed3', activeText: '#07111f' },
    galaxy: { background: '#160b31', text: '#fbf8ff', muted: '#ccbce7', activeText: '#180b29' },
    blackhole: { background: '#020408', text: '#f4f8fb', muted: '#a9bac4', activeText: '#07111f' },
    nebula: { background: '#240a2b', text: '#fff5fc', muted: '#d5bdd3', activeText: '#21091e' },
    aurora: { background: '#061019', text: '#f3fffb', muted: '#9fc1bb', activeText: '#062016' },
  };
  const sidebar = sidebarColors[themeId];
  root.style.setProperty('--mx-sidebar', sidebar.background);
  root.style.setProperty('--mx-sidebar-text', sidebar.text);
  root.style.setProperty('--mx-sidebar-muted', sidebar.muted);
  root.style.setProperty('--mx-sidebar-active', theme.accent);
  root.style.setProperty('--mx-sidebar-active-text', sidebar.activeText);
  root.style.setProperty('--app-accent', theme.accent);
  root.style.setProperty('--app-bg', theme.base);
  root.style.setProperty('--app-surface', theme.base);
  root.style.setProperty('--app-border', theme.accent);
  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeId);
    } catch {
      // Theme persistence is best-effort when storage is unavailable.
    }
  }
  window.dispatchEvent(new CustomEvent('project-tirta-theme-change', { detail: themeId }));
}

export function initializeCosmicTheme(): void {
  installProjectByTirtaTheme();


      /* =========================================================
     V58.1 — GLOBAL PAGE BACKGROUND
     Area luar card mengikuti background tema aktif.
     ========================================================= */
  if (typeof document !== 'undefined' && !document.getElementById('pt-global-page-background-v581')) {
    const pageBackgroundFix = document.createElement('style');
    pageBackgroundFix.id = 'pt-global-page-background-v581';
    pageBackgroundFix.textContent = `

      /* =========================================================
         COSMIC CARD GUARD V62
         6 tema Employee: tidak ada card putih.
         Professional tidak tersentuh.
         ========================================================= */

      html[data-cosmic-theme="sun"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,#3a2611,#211306) ;
        color:#fff7e8 ;
        border-color:rgba(246,199,103,.42) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      html[data-cosmic-theme="moon"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,#102a4b,#07172d) ;
        color:#f4f8ff ;
        border-color:rgba(131,189,251,.36) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      html[data-cosmic-theme="galaxy"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,#28164f,#100a25) ;
        color:#fbf7ff ;
        border-color:rgba(215,173,255,.40) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      html[data-cosmic-theme="blackhole"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,#111c23,#05080c) ;
        color:#f3f9fc ;
        border-color:rgba(99,215,255,.34) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      html[data-cosmic-theme="nebula"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,#3b1740,#1b0a22) ;
        color:#fff4fc ;
        border-color:rgba(255,191,232,.36) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      html[data-cosmic-theme="aurora"] .employee-portal
      :where([class*="card"],[class*="panel"],[class*="module"]) {
        background:linear-gradient(145deg,rgba(7,32,35,.96),rgba(4,18,27,.96)) ;
        color:#effff9 ;
        border-color:rgba(106,255,207,.32) ;
        box-shadow:none ;
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
      }

      /* Kontrol form tetap kontras dan tidak ikut putih. */
      html[data-cosmic-theme="sun"] .employee-portal
      input,
      html[data-cosmic-theme="sun"] .employee-portal
      select,
      html[data-cosmic-theme="sun"] .employee-portal
      textarea {
        background:#2a1808 ;
        color:#fff6e8 ;
        border-color:rgba(246,199,103,.32) ;
      }

      html[data-cosmic-theme="moon"] .employee-portal
      input,
      html[data-cosmic-theme="moon"] .employee-portal
      select,
      html[data-cosmic-theme="moon"] .employee-portal
      textarea {
        background:#081b34 ;
        color:#f3f8ff ;
        border-color:rgba(131,189,251,.30) ;
      }

      html[data-cosmic-theme="galaxy"] .employee-portal
      input,
      html[data-cosmic-theme="galaxy"] .employee-portal
      select,
      html[data-cosmic-theme="galaxy"] .employee-portal
      textarea {
        background:#140b2c ;
        color:#fbf8ff ;
        border-color:rgba(215,173,255,.30) ;
      }

      html[data-cosmic-theme="blackhole"] .employee-portal
      input,
      html[data-cosmic-theme="blackhole"] .employee-portal
      select,
      html[data-cosmic-theme="blackhole"] .employee-portal
      textarea {
        background:#060d12 ;
        color:#f2f8fb ;
        border-color:rgba(99,215,255,.28) ;
      }

      html[data-cosmic-theme="nebula"] .employee-portal
      input,
      html[data-cosmic-theme="nebula"] .employee-portal
      select,
      html[data-cosmic-theme="nebula"] .employee-portal
      textarea {
        background:#210b27 ;
        color:#fff5fc ;
        border-color:rgba(255,191,232,.28) ;
      }

      html[data-cosmic-theme="aurora"] .employee-portal
      input,
      html[data-cosmic-theme="aurora"] .employee-portal
      select,
      html[data-cosmic-theme="aurora"] .employee-portal
      textarea {
        background:#06161b ;
        color:#effff9 ;
        border-color:rgba(106,255,207,.28) ;
      }


      .admin-page-frame,
      .talenta-shell,
      .talenta-main,
      .page,
      .page-content,
      .content-area,
      .module-page,
      .id-card-module,
      .announcement-module,
      .feedback-module {
        background: transparent ;
      }

      .admin-page-frame {
        border: 0 ;
        box-shadow: none ;
      }

      .admin-page-frame::before,
      .admin-page-frame::after,
      .module-page::before,
      .module-page::after {
        display: none ;
      }

      /* =========================================================
         ANDROID V58 — COMPACT HOME + MATCHING MENU
         ========================================================= */
      .pt-cosmic-shell .employee-page{max-width:720px;padding:14px 14px 100px}
      .pt-cosmic-shell .employee-heading,.pt-cosmic-shell .employee-tabs{display:none}
      .pt-cosmic-shell .pt-home-intro{padding:6px 4px 12px}
      .pt-cosmic-shell .pt-home-intro h1{margin:3px 0 2px;font-size:27px;line-height:1.05;letter-spacing:-.02em}
      .pt-cosmic-shell .pt-home-intro p{margin:0;color:#a9bfd6;font-size:12px}
      .pt-cosmic-shell .pt-safe-attendance-card{margin:0 0 14px;padding:15px}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-top{padding:0 0 10px}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-top h2{margin:2px 0 2px;font-size:19px}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-top p{margin:0;font-size:10px;color:#98aec5}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics{display:grid;grid-template-columns:1fr 1fr;margin:0 -15px;border-top:1px solid rgba(88,186,255,.16);border-bottom:1px solid rgba(88,186,255,.16)}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics>div{padding:12px 14px}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics>div+div{border-left:1px solid rgba(88,186,255,.16)}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics small{font-size:9px;color:#8fa6bf}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics strong{font-size:24px;line-height:1}
      .pt-cosmic-shell .pt-safe-attendance-card .pt-attendance-metrics span{font-size:9px;color:#9fb7ce}
      .pt-cosmic-shell .pt-security-line{display:flex;justify-content:space-between;gap:8px;margin:10px 0;padding:0;background:transparent;border:0;color:#b7cbe0;font-size:10px;font-weight:700}
      .pt-cosmic-shell .pt-home-attendance-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
      .pt-cosmic-shell .pt-home-attendance-actions button{min-height:40px}
      .pt-cosmic-shell .pt-section-heading.pt-heading-plain{padding:2px 2px 9px;background:transparent;border:0;box-shadow:none}
      .pt-cosmic-shell .pt-section-heading.pt-heading-plain h2{font-size:18px;margin:3px 0 0}
      .pt-cosmic-shell .pt-feature-section{margin:0 0 15px}
      .pt-cosmic-shell .pt-feature-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
      .pt-cosmic-shell .pt-feature-tile{min-height:88px;padding:9px 5px;position:relative;background:linear-gradient(180deg,#0b213b,#071427);border:1px solid rgba(74,188,255,.34);border-radius:14px;box-shadow:0 10px 24px rgba(0,0,0,.18)}
      .pt-cosmic-shell .pt-feature-icon{width:38px;height:38px;margin-bottom:6px;border-radius:12px}
      .pt-cosmic-shell .pt-feature-tile b{font-size:10px;line-height:1.1;text-align:center}
      .pt-cosmic-shell .pt-feature-tile small{font-size:7px;line-height:1.15;text-align:center;color:#91a9c0}
      .pt-cosmic-shell .pt-feature-tile em{position:absolute;right:5px;top:5px;min-width:14px;height:14px;padding:0 3px;border-radius:999px;background:#ef6a70;color:#fff;font-size:7px;font-style:normal;display:grid;place-items:center;border:2px solid #081626}
      .pt-cosmic-shell .pt-home-activity{margin-top:3px}
      .pt-cosmic-shell .pt-activity-list{display:grid;gap:6px}
      .pt-cosmic-shell .pt-activity-row{display:flex;align-items:center;gap:10px;padding:10px 2px;background:transparent;border:0;box-shadow:none}
      .pt-cosmic-shell .pt-activity-dot{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:#123252;border:1px solid #49d7b7;color:#76ffd0;flex:0 0 auto}
      .pt-cosmic-shell .pt-activity-row div{display:grid;gap:2px}.pt-cosmic-shell .pt-activity-row b{font-size:11px}.pt-cosmic-shell .pt-activity-row small{font-size:9px;color:#93a9bf}
      .pt-cosmic-shell .pt-empty-text{padding:12px 2px;color:#8fa6bf;font-size:10px}
      .pt-cosmic-shell .pt-menu-page{padding:4px 0}.pt-cosmic-shell .pt-page-heading{padding:4px 3px 14px}.pt-cosmic-shell .pt-page-heading h1{margin:4px 0;font-size:26px}.pt-cosmic-shell .pt-page-heading p{margin:0;color:#9db3ca;font-size:11px}
      .pt-cosmic-shell .pt-page-grid{gap:12px}.pt-cosmic-shell .pt-page-card{box-shadow:0 14px 32px rgba(0,0,0,.22)}
      .pt-cosmic-shell .pt-camera-frame{margin-top:8px;border-radius:16px;overflow:hidden}
      .pt-cosmic-shell .pt-text-notice{margin:4px 0 10px}
      html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#3a2612,#25170a);border-color:rgba(246,199,103,.38)}
      html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-feature-tile small,html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-home-intro p{color:#dfc99f}
      html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-safe-attendance-card{background:linear-gradient(145deg,#3a2611,#241608);border-color:rgba(246,199,103,.48)}
      html[data-cosmic-theme="sun"] .pt-cosmic-shell .pt-bottom-nav{background:#24170a;border-color:rgba(246,199,103,.5);backdrop-filter:none}
      @media(max-width:560px){.pt-cosmic-shell .pt-feature-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.pt-cosmic-shell .pt-feature-tile{min-height:82px;padding:8px 3px}.pt-cosmic-shell .pt-feature-icon{width:34px;height:34px}.pt-cosmic-shell .pt-feature-tile b{font-size:9px}.pt-cosmic-shell .pt-feature-tile small{font-size:6.5px}.pt-cosmic-shell .employee-user>div{max-width:112px}}
      @media(max-width:390px){.pt-cosmic-shell .employee-page{padding-left:10px;padding-right:10px}.pt-cosmic-shell .pt-feature-tile{min-height:78px}.pt-cosmic-shell .pt-feature-icon{width:31px;height:31px}.pt-cosmic-shell .pt-feature-tile b{font-size:8px}.pt-cosmic-shell .pt-feature-tile small{display:none}.pt-cosmic-shell .pt-bottom-nav button{padding-left:8px;padding-right:8px}}
      /* Android V58.2 — theme-synced menu tiles and crisp login */
      html[data-cosmic-theme="moon"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#102a4b,#07172d);border-color:rgba(131,189,251,.38)}
      html[data-cosmic-theme="galaxy"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#25164a,#100a25);border-color:rgba(215,173,255,.42)}
      html[data-cosmic-theme="blackhole"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#111a20,#05080c);border-color:rgba(99,215,255,.34)}
      html[data-cosmic-theme="nebula"] .pt-cosmic-shell .pt-feature-tile{background:linear-gradient(180deg,#3b1740,#1b0a22);border-color:rgba(255,191,232,.40)}
      .pt-cosmic-auth{position:relative;overflow:hidden}
      .pt-cosmic-auth::before{z-index:0;transition:background .25s ease,opacity .25s ease}
      .pt-cosmic-auth > *{position:relative;z-index:1}
      html[data-cosmic-theme="sun"] .pt-cosmic-auth{background-color:#24170b}
      html[data-cosmic-theme="sun"] .pt-cosmic-auth::before{background:radial-gradient(circle at 76% 24%,rgba(255,192,93,.34),transparent 31%),linear-gradient(180deg,rgba(52,25,8,.18),rgba(20,9,3,.72))}
      html[data-cosmic-theme="moon"] .pt-cosmic-auth::before{background:radial-gradient(circle at 76% 24%,rgba(131,189,251,.25),transparent 31%),linear-gradient(180deg,rgba(2,12,29,.16),rgba(1,6,16,.74))}
      html[data-cosmic-theme="galaxy"] .pt-cosmic-auth::before{background:radial-gradient(circle at 70% 26%,rgba(215,173,255,.27),transparent 31%),linear-gradient(180deg,rgba(20,8,39,.16),rgba(5,2,15,.76))}
      html[data-cosmic-theme="blackhole"] .pt-cosmic-auth::before{background:radial-gradient(circle at 72% 26%,rgba(99,215,255,.20),transparent 30%),linear-gradient(180deg,rgba(3,8,12,.12),rgba(0,2,5,.80))}
      html[data-cosmic-theme="nebula"] .pt-cosmic-auth::before{background:radial-gradient(circle at 72% 26%,rgba(255,191,232,.23),transparent 31%),linear-gradient(180deg,rgba(44,8,46,.16),rgba(10,2,13,.78))}
      html[data-cosmic-theme="sun"] .pt-cosmic-auth .pt-auth-card{background:linear-gradient(145deg,#3b250e,#211306);border-color:rgba(248,218,142,.78)}
      html[data-cosmic-theme="moon"] .pt-cosmic-auth .pt-auth-card{border-color:rgba(228,209,160,.78)}
      html[data-cosmic-theme="galaxy"] .pt-cosmic-auth .pt-auth-card{border-color:rgba(215,173,255,.74)}
      html[data-cosmic-theme="blackhole"] .pt-cosmic-auth .pt-auth-card{border-color:rgba(232,195,111,.76)}
      html[data-cosmic-theme="nebula"] .pt-cosmic-auth .pt-auth-card{border-color:rgba(255,191,232,.72)}
      html[data-cosmic-theme="sun"] .pt-cosmic-auth .pt-auth-card .unified-login-form input{background:#2a1808;border-color:rgba(248,218,142,.38);color:#fff6e8}
      html[data-cosmic-theme="sun"] .pt-cosmic-auth .pt-auth-card .unified-login-button{background:linear-gradient(135deg,#f8da8e,#d9a947)}

      /* =========================================================
         FINAL MOBILE WEB LAYOUT
         Sidebar = drawer, content = full viewport.
         ========================================================= */
      @media (max-width: 900px) {
        html, body, #root {
          width: 100% ;
          min-width: 0 ;
          max-width: 100% ;
          overflow-x: hidden ;
        }

        .talenta-shell {
          display: block ;
          width: 100% ;
          min-width: 0 ;
          max-width: 100% ;
          min-height: 100dvh ;
          overflow-x: hidden ;
        }

        .talenta-shell .sidebar,
        .talenta-shell .talenta-sidebar {
          position: fixed ;
          inset: 0 auto 0 0 ;
          width: min(82vw, 280px) ;
          max-width: 280px ;
          height: 100dvh ;
          z-index: 1000 ;
          transform: translateX(-110%) ;
          transition: transform .22s ease ;
          overflow-y: auto ;
          overflow-x: hidden ;
        }

        .talenta-shell .sidebar.open,
        .talenta-shell .talenta-sidebar.open {
          transform: translateX(0) ;
        }

        .talenta-shell .sidebar.collapsed,
        .talenta-shell .talenta-sidebar.collapsed {
          transform: translateX(-110%) ;
        }

        .talenta-main {
          display: block ;
          width: 100% ;
          min-width: 0 ;
          max-width: 100% ;
          overflow-x: hidden ;
        }

        .talenta-main .topbar {
          width: 100% ;
          min-width: 0 ;
          max-width: 100% ;
          display: grid ;
          grid-template-columns: auto minmax(0,1fr) auto ;
          gap: 7px ;
          min-height: 56px ;
          padding: 8px 10px ;
          flex-wrap: nowrap ;
        }

        .talenta-main .topbar-left {
          min-width: 0 ;
          overflow: hidden ;
        }

        .talenta-main .crumb {
          min-width: 0 ;
          max-width: 100% ;
          overflow: hidden ;
          white-space: nowrap ;
          text-overflow: ellipsis ;
        }

        .talenta-main .search-global {
          display: none ;
        }

        .talenta-main .top-actions {
          min-width: 0 ;
          max-width: 45vw ;
          overflow: hidden ;
          flex-wrap: nowrap ;
          gap: 4px ;
        }

        .admin-page-frame {
          width: 100% ;
          max-width: 100% ;
          min-width: 0 ;
          padding: 12px 10px 90px ;
          overflow-x: hidden ;
        }

        .admin-page-frame > * {
          min-width: 0 ;
          max-width: 100% ;
        }

        .si-debar-floating-nav {
          display: none ;
        }
      }

      @media (max-width: 720px) {
        .talenta-shell .dashboard-grid-top,
        .talenta-shell .dashboard-grid-bottom,
        .talenta-shell .content-grid,
        .talenta-shell .report-grid,
        .talenta-shell .action-card-grid,
        .talenta-shell .pt-page-grid {
          grid-template-columns: minmax(0,1fr) ;
        }

        .talenta-shell .stat-grid {
          grid-template-columns: repeat(2,minmax(0,1fr)) ;
        }

        .talenta-shell .table-wrap,
        .talenta-shell .table-scroll {
          width: 100% ;
          max-width: 100% ;
          overflow-x: auto ;
        }
      }

      @media (max-width: 560px) {
        .talenta-shell .stat-grid {
          grid-template-columns: 1fr ;
        }

        .talenta-main .topbar .top-actions {
          max-width: 40vw ;
        }

        .topbar .top-actions > .admin-floating-notification-group {
          display: none ;
        }

        .admin-page-frame {
          padding-left: 8px ;
          padding-right: 8px ;
        }
      }

    
/* =========================================================
   PROJECT BY TIRTA — FINAL ANDROID ADMIN LAYOUT REPAIR
   ========================================================= */
@media (max-width:899px) {
  html, body, #root {
    width:100% ;
    max-width:100% ;
    min-width:0 ;
    margin:0 ;
    overflow-x:hidden ;
  }

  .talenta-shell {
    display:block ;
    width:100vw ;
    max-width:100vw ;
    min-width:0 ;
    min-height:100dvh ;
    height:auto ;
    overflow:visible ;
    position:relative ;
  }

  .talenta-shell > .talenta-main,
  .talenta-main {
    display:block ;
    width:100% ;
    max-width:100vw ;
    min-width:0 ;
    margin:0 ;
    flex:none ;
    overflow-x:hidden ;
    overflow-y:visible ;
  }

  .talenta-shell > .talenta-main > .topbar,
  .topbar {
    width:100% ;
    max-width:100vw ;
    min-width:0 ;
    box-sizing:border-box ;
  }

  .talenta-shell > .talenta-main > .page,
  .page {
    width:100% ;
    max-width:100% ;
    min-width:0 ;
    box-sizing:border-box ;
    overflow:visible ;
  }

  /* Sidebar Android = overlay, tidak boleh mengambil lebar halaman */
  .talenta-shell > .sidebar,
  .sidebar {
    position:fixed ;
    left:0 ;
    top:0 ;
    bottom:0 ;
    z-index:99999 ;
    width:min(290px,82vw) ;
    min-width:0 ;
    max-width:290px ;
    height:100dvh ;
    min-height:100dvh ;
    margin:0 ;
    flex:none ;
    box-sizing:border-box ;
    overflow-x:hidden ;
    overflow-y:auto ;
    transform:translateX(-110%) ;
    transition:transform .22s ease ;
  }

  .talenta-shell > .sidebar.open,
  .sidebar.open,
  .sidebar.is-open {
    transform:translateX(0) ;
  }

  .talenta-shell > .sidebar.collapsed,
  .sidebar.collapsed,
  .sidebar.is-closed {
    width:min(290px,82vw) ;
    min-width:0 ;
    max-width:290px ;
    flex-basis:auto ;
    transform:translateX(-110%) ;
  }

  /* Konten selalu full-width */
  .talenta-shell > .sidebar + .talenta-main {
    width:100% ;
    max-width:100vw ;
    min-width:0 ;
    margin-left:0 ;
  }

  .sidebar.open .nav-item > span,
  .sidebar.is-open .nav-item > span,
  .sidebar.open .sidebar-head .brand > div:last-child,
  .sidebar.is-open .sidebar-head .brand > div:last-child {
    display:block ;
    min-width:0 ;
  }

  .sidebar.open .nav-item {
    width:100% ;
    max-width:100% ;
  }

  .sidebar.collapsed .nav-item > span,
  .sidebar.is-closed .nav-item > span {
    display:none ;
  }

  .page-heading,
  .dashboard-grid,
  .content-grid,
  .report-grid,
  .action-card-grid,
  .pt-page-grid,
  .stat-grid {
    min-width:0 ;
    max-width:100% ;
    box-sizing:border-box ;
  }

  .table-wrap,
  .data-table-wrap {
    max-width:100% ;
    overflow-x:auto ;
  }
}

`;
    document.head.appendChild(pageBackgroundFix);

  }
  applyCosmicTheme(readPersistedCosmicTheme(), false);
}
