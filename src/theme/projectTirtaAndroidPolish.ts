const STYLE_ID = 'project-tirta-android-polish';

export function installProjectTirtaAndroidPolish() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .app-loading-card,
    .employee-loading-card {
      display:flex ;
      flex-direction:column ;
      align-items:center ;
      justify-content:center ;
      gap:10px ;
      text-align:center ;
    }

    .app-loading-logo,
    .employee-loading-logo img {
      width:94px ;
      height:94px ;
      object-fit:contain ;
      display:block ;
      border-radius:22px ;
    }

    .app-loading-company,
    .employee-loading-copy strong {
      display:block ;
      color:#fff ;
      font-size:18px ;
      font-weight:800 ;
      letter-spacing:.15px ;
      text-shadow:0 2px 14px rgba(0,0,0,.35) ;
    }

    .app-loading-card::after {
      content:'HRIS & Payroll Solution';
      display:block;
      color:rgba(225,235,255,.72);
      font-size:11px;
      letter-spacing:.4px;
    }

    .employee-loading-copy span {
      color:rgba(225,235,255,.78) ;
      font-size:11px ;
    }

    .pt-android-home-brand {
      display:flex ;
      align-items:center ;
      gap:12px ;
      margin:2px 2px 14px ;
      padding:10px 12px ;
      border:1px solid rgba(120,190,255,.20) ;
      border-radius:20px ;
      background:rgba(5,18,42,.54) ;
      backdrop-filter:blur(12px) ;
      -webkit-backdrop-filter:blur(12px) ;
    }

    .pt-android-home-brand-logo {
      width:52px ;
      height:52px ;
      flex:0 0 52px ;
      display:grid ;
      place-items:center ;
      border-radius:16px ;
      background:rgba(255,255,255,.06) ;
      border:1px solid rgba(216,181,99,.28) ;
      overflow:hidden ;
    }

    .pt-android-home-brand-logo img {
      width:42px ;
      height:42px ;
      object-fit:contain ;
    }

    .pt-android-home-brand-copy {
      display:flex ;
      flex-direction:column ;
      gap:2px ;
      min-width:0 ;
    }

    .pt-android-home-brand-copy strong {
      color:#fff ;
      font-size:16px ;
      font-weight:800 ;
    }

    .pt-android-home-brand-copy span {
      color:#b9c7df ;
      font-size:10px ;
    }

    .pt-feature-grid.pt-feature-grid-home {
      grid-template-columns:repeat(3,minmax(0,1fr)) ;
      gap:12px ;
      padding:12px ;
    }

    .pt-feature-grid.pt-feature-grid-home .pt-feature-tile {
      min-height:116px ;
      padding:14px 8px 12px ;
      border-radius:20px ;
      justify-content:center ;
    }

    .pt-feature-grid.pt-feature-grid-home .pt-feature-icon {
      width:62px ;
      height:62px ;
      min-width:62px ;
      min-height:62px ;
      margin-bottom:9px ;
      border-radius:19px ;
      font-size:27px ;
    }

    .pt-feature-grid.pt-feature-grid-home .pt-feature-tile b {
      font-size:11px ;
      line-height:1.2 ;
    }

    .pt-feature-grid.pt-feature-grid-home .pt-feature-tile small {
      font-size:8px ;
      line-height:1.2 ;
    }

    .pt-page-card .card-title h2,
    .pt-page-card h1,
    .pt-page-card h2,
    .pt-page-card h3,
    .pt-page-card .portal-profile h3,
    .pt-page-card .info-list b {
      color:#fff ;
      text-shadow:0 1px 10px rgba(0,0,0,.28) ;
    }

    .pt-page-card p,
    .pt-page-card label,
    .pt-page-card .muted,
    .pt-page-card small,
    .pt-page-card .portal-profile p,
    .pt-page-card .info-list span,
    .pt-page-card .info-list small {
      color:rgba(236,243,255,.88) ;
    }

    .pt-page-card input,
    .pt-page-card select,
    .pt-page-card textarea {
      color:#fff ;
      -webkit-text-fill-color:#fff ;
    }

    .pt-bottom-nav button {
      min-height:58px ;
    }

    .pt-nav-home-icon {
      width:30px ;
      height:30px ;
      display:grid ;
      place-items:center ;
      border-radius:10px ;
      overflow:hidden ;
    }

    .pt-nav-home-icon img {
      width:26px ;
      height:26px ;
      object-fit:contain ;
    }

    .pt-nav-pay-icon {
      width:30px ;
      height:30px ;
      display:grid ;
      place-items:center ;
      border-radius:10px ;
      font-size:11px ;
      font-weight:900 ;
      color:#07152d ;
      background:linear-gradient(145deg,#f6d77e,#d9a945) ;
      box-shadow:0 5px 18px rgba(217,169,69,.24) ;
    }

    @media (max-width:390px) {
      .pt-feature-grid.pt-feature-grid-home {
        gap:9px ;
        padding:9px ;
      }

      .pt-feature-grid.pt-feature-grid-home .pt-feature-tile {
        min-height:104px ;
        padding:11px 5px 10px ;
      }

      .pt-feature-grid.pt-feature-grid-home .pt-feature-icon {
        width:56px ;
        height:56px ;
        min-width:56px ;
        min-height:56px ;
        border-radius:17px ;
        font-size:24px ;
      }
    }

/* UI2_FINAL_LOWONGAN */
@media (max-width:600px){
  .pt-cosmic-auth{
    background-color:transparent;
  }

  .pt-android-home-brand{
    display:none;
  }

  .pt-home-menu-section,
  .pt-home-menu-section>*,
  .pt-home-menu-section .pt-menu-grid{
    background:transparent;
    border:0;
    box-shadow:none;
  }

  .pt-home-menu-section .pt-menu-grid{
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:14px;
  }

  .pt-home-menu-section .pt-menu-grid>button{
    min-height:96px;
    padding:4px 2px;
    background:transparent;
    border:0;
    box-shadow:none;
    border-radius:0;
  }

  .pt-home-menu-section .pt-menu-grid>button>span:first-child{
    width:auto;
    height:auto;
    min-width:0;
    min-height:0;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:0;
    margin:0;
    background:transparent;
    border:0;
    box-shadow:none;
    border-radius:0;
    font-size:56px;
    line-height:1;
  }

  .pt-home-menu-section .pt-menu-grid>button [class*="title"],
  .pt-home-menu-section .pt-menu-grid>button [class*="sub"],
  .pt-home-menu-section .pt-menu-grid>button small{
    display:none;
  }

  .pt-nav-jobs-icon{
    display:inline-flex;
    width:30px;
    height:30px;
    align-items:center;
    justify-content:center;
    font-size:21px;
    font-weight:800;
  }

  .pt-jobs-page{
    padding:8px 0 100px;
  }

  .pt-jobs-toolbar{
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:16px;
  }

  .pt-jobs-toolbar>div{
    display:flex;
    flex-direction:column;
    gap:2px;
  }

  .pt-jobs-toolbar strong{
    font-size:18px;
  }

  .pt-jobs-toolbar span{
    opacity:.68;
    font-size:12px;
  }

  .pt-jobs-back{
    border:0;
    background:rgba(255,255,255,.06);
    border-radius:12px;
    padding:9px 11px;
  }

  .pt-jobs-list{
    display:grid;
    gap:12px;
  }

  .pt-job-card{
    border-radius:18px;
    padding:16px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.10);
    box-shadow:none;
  }

  .pt-job-card-top{
    display:flex;
    justify-content:space-between;
    gap:10px;
  }

  .pt-job-card-top h3{
    margin:7px 0 0;
    font-size:18px;
  }

  .pt-job-badge{
    font-size:10px;
    font-weight:800;
    letter-spacing:.08em;
  }

  .pt-job-code{
    opacity:.55;
    font-size:10px;
  }

  .pt-job-meta{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:7px;
    margin:12px 0;
    font-size:12px;
    opacity:.82;
  }

  .pt-job-salary{
    font-weight:800;
    margin-bottom:10px;
  }

  .pt-job-card p,
  .pt-job-requirements div{
    white-space:pre-wrap;
    line-height:1.55;
    opacity:.82;
    font-size:13px;
  }

  .pt-job-requirements{
    margin-top:12px;
  }

  .pt-job-requirements strong{
    display:block;
    margin-bottom:5px;
  }

  .pt-jobs-empty{
    display:flex;
    flex-direction:column;
    gap:5px;
    align-items:center;
    justify-content:center;
    min-height:180px;
    text-align:center;
    opacity:.8;
  }
}
/* ANDROID SHARP THEME */
@media (max-width:600px){
.sidebar,.talenta-sidebar,.topbar,.search-global,.stat-card,.panel,.quick,.form-panel,.report-card,.org-card,.calendar-card,.feature-card,.setting-card,.info-box,.portal-card,.employee-login-card,.theme-card,.custom-theme-panel,.export-card,.detail-panel,.table-card,.admin-floating-action,.admin-notification-dropdown,.profile-menu,.role-menu,.profile-language-options,.employee-topbar{backdrop-filter:none;-webkit-backdrop-filter:none}
}
/* ANDROID HARD SHARP — remove remaining visual blur */
@media (max-width:600px){
html,body,#root{
  -webkit-backdrop-filter:none;
  backdrop-filter:none;
}
*,
*::before,
*::after{
  -webkit-backdrop-filter:none;
  backdrop-filter:none;
}
*[style*="blur"],
*[style*="filter"]{
  filter:none;
  -webkit-filter:none;
}
}

/* =========================================================
   PROJECT BY TIRTA — ANDROID SHARP COSMIC BACKGROUND
   Preserve animation, remove haze/blur
   ========================================================= */

@media (max-width: 899px) {

  *,
  *::before,
  *::after {
    backdrop-filter: none ;
    -webkit-backdrop-filter: none ;
  }

  .page-heading::after,
  .employee-heading::after,
  .verify-id-ambient {
    filter: none ;
    -webkit-filter: none ;
  }

  html[data-cosmic-theme="sun"] body::before,
  html[data-cosmic-theme="moon"] body::before,
  html[data-cosmic-theme="galaxy"] body::before,
  html[data-cosmic-theme="blackhole"] body::before,
  html[data-cosmic-theme="nebula"] body::before {
    filter: none ;
    -webkit-filter: none ;
    opacity: .78 ;
  }

  .talenta-shell::before,
  .employee-portal::before,
  .public-home::before {
    filter: none ;
    -webkit-filter: none ;
    opacity: .35 ;
  }

  .topbar,
  .search-global,
  .sidebar,
  .stat-card,
  .panel,
  .quick,
  .form-panel,
  .report-card,
  .org-card,
  .calendar-card,
  .feature-card,
  .setting-card,
  .portal-card,
  .employee-login-card,
  .theme-card,
  .custom-theme-panel,
  .export-card,
  .detail-panel,
  .table-card,
  .profile-menu,
  .role-menu,
  .admin-notification-dropdown,
  .employee-topbar,
  .public-header,
  .unified-login-card,
  .registration-card {
    backdrop-filter: none ;
    -webkit-backdrop-filter: none ;
  }
}



/* =========================================================
   PROJECT BY TIRTA — ANDROID COSMIC VISIBLE
   Sharp background, stronger theme presence
   ========================================================= */

@media (max-width: 899px) {

  html[data-cosmic-theme="sun"] body::before {
    opacity: 1 ;
  }

  html[data-cosmic-theme="moon"] body::before {
    opacity: .95 ;
  }

  html[data-cosmic-theme="galaxy"] body::before {
    opacity: 1 ;
  }

  html[data-cosmic-theme="blackhole"] body::before {
    opacity: 1 ;
  }

  html[data-cosmic-theme="nebula"] body::before {
    opacity: 1 ;
  }

  /* Jangan hilangkan lapisan theme utama */
  html[data-cosmic-theme] body::before {
    filter: none ;
    -webkit-filter: none ;
    transform: translateZ(0);
    will-change: transform, opacity;
  }

  /* Ambient hanya sangat tipis */
  .talenta-shell::before,
  .employee-portal::before,
  .public-home::before {
    opacity: .22 ;
    filter: none ;
    -webkit-filter: none ;
  }

}



/* =========================================================
   PROJECT BY TIRTA — ANDROID COSMIC STRONG
   Background lebih terlihat tanpa blur
   ========================================================= */

@media (max-width: 899px) {

  html[data-cosmic-theme="sun"] .employee-portal {
    background:
      radial-gradient(circle at 82% 9%,
        rgba(255, 214, 102, .30) 0%,
        rgba(255, 160, 54, .14) 15%,
        transparent 36%),
      radial-gradient(circle at 12% 72%,
        rgba(255, 116, 48, .10),
        transparent 30%),
      linear-gradient(180deg,
        #15110a 0%,
        #08090d 48%,
        #03050a 100%) ;
  }

  html[data-cosmic-theme="moon"] .employee-portal {
    background:
      radial-gradient(circle at 80% 9%,
        rgba(190, 216, 255, .34) 0%,
        rgba(98, 157, 255, .16) 16%,
        transparent 38%),
      radial-gradient(circle at 12% 72%,
        rgba(54, 126, 255, .14),
        transparent 30%),
      linear-gradient(180deg,
        #0b1428 0%,
        #060a14 48%,
        #02050b 100%) ;
  }

  html[data-cosmic-theme="galaxy"] .employee-portal {
    background:
      radial-gradient(ellipse at 76% 10%,
        rgba(183, 128, 255, .34) 0%,
        rgba(113, 63, 235, .18) 17%,
        transparent 39%),
      radial-gradient(ellipse at 18% 72%,
        rgba(54, 108, 255, .16),
        transparent 30%),
      radial-gradient(ellipse at 72% 76%,
        rgba(236, 73, 201, .10),
        transparent 30%),
      linear-gradient(180deg,
        #120d25 0%,
        #070914 48%,
        #03050b 100%) ;
  }

  html[data-cosmic-theme="blackhole"] .employee-portal {
    background:
      radial-gradient(circle at 76% 10%,
        rgba(0, 0, 0, .98) 0 7%,
        transparent 7.5%),
      radial-gradient(ellipse at 76% 10%,
        rgba(73, 198, 255, .32) 0%,
        rgba(229, 143, 57, .22) 17%,
        transparent 34%),
      linear-gradient(180deg,
        #07111c 0%,
        #040912 48%,
        #020409 100%) ;
  }

  html[data-cosmic-theme="nebula"] .employee-portal {
    background:
      radial-gradient(circle at 74% 10%,
        rgba(255, 144, 213, .34) 0%,
        rgba(196, 91, 218, .18) 18%,
        transparent 39%),
      radial-gradient(ellipse at 30% 70%,
        rgba(91, 109, 255, .16),
        transparent 30%),
      radial-gradient(ellipse at 78% 76%,
        rgba(255, 85, 155, .12),
        transparent 30%),
      linear-gradient(180deg,
        #180d1d 0%,
        #090811 48%,
        #03050a 100%) ;
  }

  .employee-portal {
    background-color: #03050a ;
    background-attachment: fixed ;
    background-repeat: no-repeat ;
    background-size: cover ;
  }

}



/* PROJECT BY TIRTA — FINAL ANDROID COSMIC THEME AUTHORITY */

/* Tema Android dikendalikan sepenuhnya oleh data-cosmic-theme. */
html[data-cosmic-theme="sun"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 83% 8%, rgba(255,199,103,.24), transparent 20%),
    linear-gradient(180deg,#130e09 0%,#05080f 62%,#02050a 100%) ;
  background-size: cover ;
  background-position: center top ;
  background-attachment: scroll ;
}

html[data-cosmic-theme="moon"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 78% 10%, rgba(224,237,255,.18), transparent 17%),
    linear-gradient(180deg,#071326 0%,#040a15 60%,#02060e 100%) ;
  background-size: cover ;
  background-position: center top ;
  background-attachment: scroll ;
}

html[data-cosmic-theme="galaxy"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 72% 16%, rgba(177,123,255,.23), transparent 23%),
    radial-gradient(ellipse at 20% 72%, rgba(80,141,255,.14), transparent 27%),
    linear-gradient(180deg,#100a23 0%,#05030f 68%,#020107 100%) ;
  background-size: cover ;
  background-position: center top ;
  background-attachment: scroll ;
}

html[data-cosmic-theme="blackhole"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 75% 12%, rgba(99,215,255,.11), transparent 16%),
    linear-gradient(180deg,#07090e 0%,#020306 70%,#010204 100%) ;
  background-size: cover ;
  background-position: center top ;
  background-attachment: scroll ;
}

html[data-cosmic-theme="nebula"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 70% 17%, rgba(255,139,215,.20), transparent 21%),
    radial-gradient(ellipse at 22% 65%, rgba(82,192,255,.13), transparent 27%),
    radial-gradient(ellipse at 80% 73%, rgba(169,90,255,.10), transparent 23%),
    linear-gradient(180deg,#160818 0%,#060510 68%,#02040a 100%) ;
  background-size: cover ;
  background-position: center top ;
  background-attachment: scroll ;
}

/* Pulihkan pseudo-element tema yang sebelumnya dimatikan oleh rule lama. */
html[data-cosmic-theme="sun"] .pt-cosmic-shell::before {
  content: "" ;
  opacity: .95 ;
  filter: none ;
  background:
    radial-gradient(circle at 83% 8%,rgba(255,235,180,.18) 0 2%,transparent 11%),
    conic-gradient(from 20deg at 83% 8%,transparent 0 18deg,rgba(255,165,64,.16) 29deg,transparent 43deg,rgba(255,225,154,.10) 58deg,transparent 74deg 360deg) ;
  animation: pt-theme-sun 12s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="moon"] .pt-cosmic-shell::before {
  content: "" ;
  opacity: .95 ;
  filter: none ;
  background:
    radial-gradient(circle at 78% 10%,rgba(244,249,255,.62) 0 2.4%,rgba(190,218,247,.16) 5%,transparent 15%),
    radial-gradient(circle at 17% 71%,rgba(112,164,226,.10),transparent 26%) ;
  animation: pt-theme-moon 15s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="galaxy"] .pt-cosmic-shell::before {
  content: "" ;
  opacity: .95 ;
  filter: none ;
  background:
    linear-gradient(155deg,transparent 28%,rgba(213,156,255,.09) 43%,transparent 57%),
    radial-gradient(ellipse at 62% 32%,rgba(81,194,255,.15),transparent 28%) ;
  animation: pt-theme-galaxy 20s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="blackhole"] .pt-cosmic-shell::before {
  content: "" ;
  opacity: .95 ;
  filter: none ;
  background:
    radial-gradient(circle at 75% 12%,#000 0 4%,transparent 4.5%),
    radial-gradient(ellipse at 75% 12%,transparent 0 6%,rgba(240,191,91,.26) 8%,rgba(73,203,255,.22) 11%,transparent 17%),
    conic-gradient(from 20deg at 75% 12%,transparent 0 17%,rgba(83,212,255,.15) 28%,transparent 41%,rgba(245,185,80,.13) 56%,transparent 77%) ;
  animation: pt-theme-blackhole 16s linear infinite ;
}

html[data-cosmic-theme="nebula"] .pt-cosmic-shell::before {
  content: "" ;
  opacity: .95 ;
  filter: none ;
  background:
    radial-gradient(ellipse at 64% 22%,rgba(255,159,226,.22),transparent 24%),
    radial-gradient(ellipse at 30% 66%,rgba(91,208,255,.17),transparent 29%),
    radial-gradient(ellipse at 78% 72%,rgba(194,107,255,.14),transparent 24%) ;
  animation: pt-theme-nebula 17s ease-in-out infinite alternate ;
}

/* Jangan biarkan rule lama menghilangkan background tema. */
html[data-cosmic-theme] .pt-cosmic-shell::before {
  pointer-events: none ;
}

html[data-cosmic-theme] .pt-cosmic-shell::after {
  pointer-events: none ;
}

.pt-cosmic-shell {
  filter: none ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}



/* PROJECT BY TIRTA — ANDROID COSMIC VISIBLE BACKGROUND */

html[data-cosmic-theme="sun"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 82% 9%, rgba(255,214,123,.34), transparent 20%),
    radial-gradient(circle at 18% 38%, rgba(255,150,70,.10), transparent 26%),
    linear-gradient(180deg,#3a2410 0%,#121827 42%,#050810 100%) ;
}

html[data-cosmic-theme="moon"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 78% 10%, rgba(214,235,255,.30), transparent 19%),
    radial-gradient(circle at 18% 45%, rgba(92,164,255,.13), transparent 28%),
    linear-gradient(180deg,#102d50 0%,#081629 44%,#020712 100%) ;
}

html[data-cosmic-theme="galaxy"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 72% 12%, rgba(193,137,255,.34), transparent 24%),
    radial-gradient(ellipse at 18% 60%, rgba(75,126,255,.19), transparent 28%),
    linear-gradient(180deg,#24105a 0%,#0b061e 48%,#020107 100%) ;
}

html[data-cosmic-theme="blackhole"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 75% 11%, rgba(78,211,255,.22), transparent 18%),
    radial-gradient(circle at 75% 11%, rgba(226,174,72,.11), transparent 32%),
    linear-gradient(180deg,#0e1922 0%,#04070c 48%,#010204 100%) ;
}

html[data-cosmic-theme="nebula"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 70% 13%, rgba(255,132,211,.32), transparent 23%),
    radial-gradient(ellipse at 23% 58%, rgba(77,193,255,.18), transparent 28%),
    radial-gradient(ellipse at 82% 74%, rgba(177,91,255,.15), transparent 25%),
    linear-gradient(180deg,#3a1140 0%,#0d0715 48%,#02040a 100%) ;
}

/* Perkuat ambient layer tanpa blur */
html[data-cosmic-theme="sun"] .pt-cosmic-shell::before,
html[data-cosmic-theme="moon"] .pt-cosmic-shell::before,
html[data-cosmic-theme="galaxy"] .pt-cosmic-shell::before,
html[data-cosmic-theme="blackhole"] .pt-cosmic-shell::before,
html[data-cosmic-theme="nebula"] .pt-cosmic-shell::before {
  mix-blend-mode:screen ;
}



/* PROJECT BY TIRTA — ANDROID COSMIC FULLSCREEN AMBIENT */

.pt-cosmic-shell {
  position: relative ;
  isolation: isolate ;
  min-height: 100dvh ;
}

/* Ambient layer memenuhi seluruh viewport */
.pt-cosmic-shell::before {
  content: "" ;
  position: fixed ;
  inset: 0 ;
  z-index: 0 ;
  pointer-events: none ;
  filter: none ;
  backdrop-filter: none ;
  -webkit-backdrop-filter: none ;
}

/* Pastikan isi portal tetap di atas ambient */
.pt-cosmic-shell > * {
  position: relative;
  z-index: 1;
}

/* SUN */
html[data-cosmic-theme="sun"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 82% 10%, rgba(255,214,123,.32), transparent 22%),
    radial-gradient(circle at 18% 52%, rgba(255,145,65,.12), transparent 30%),
    radial-gradient(circle at 75% 82%, rgba(255,182,83,.08), transparent 28%),
    linear-gradient(180deg,#38230f 0%,#151d2b 42%,#080c15 74%,#050710 100%) ;
}

/* MOON */
html[data-cosmic-theme="moon"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 78% 10%, rgba(220,238,255,.28), transparent 21%),
    radial-gradient(circle at 18% 48%, rgba(82,161,255,.14), transparent 30%),
    radial-gradient(circle at 78% 82%, rgba(101,153,230,.08), transparent 30%),
    linear-gradient(180deg,#102d50 0%,#0b1b31 42%,#06101e 74%,#030813 100%) ;
}

/* GALAXY */
html[data-cosmic-theme="galaxy"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 72% 10%, rgba(195,139,255,.34), transparent 25%),
    radial-gradient(ellipse at 18% 50%, rgba(78,126,255,.18), transparent 31%),
    radial-gradient(ellipse at 82% 82%, rgba(155,82,255,.12), transparent 28%),
    linear-gradient(180deg,#24105a 0%,#10082a 43%,#070415 75%,#020107 100%) ;
}

/* BLACKHOLE */
html[data-cosmic-theme="blackhole"] .pt-cosmic-shell {
  background:
    radial-gradient(circle at 75% 10%, rgba(75,215,255,.22), transparent 20%),
    radial-gradient(circle at 75% 10%, rgba(224,173,72,.12), transparent 34%),
    radial-gradient(circle at 22% 66%, rgba(55,140,180,.07), transparent 30%),
    linear-gradient(180deg,#101c25 0%,#080e15 43%,#03060b 76%,#010204 100%) ;
}

/* NEBULA */
html[data-cosmic-theme="nebula"] .pt-cosmic-shell {
  background:
    radial-gradient(ellipse at 70% 10%, rgba(255,129,209,.32), transparent 24%),
    radial-gradient(ellipse at 22% 52%, rgba(73,194,255,.18), transparent 31%),
    radial-gradient(ellipse at 82% 80%, rgba(177,88,255,.15), transparent 28%),
    linear-gradient(180deg,#38103e 0%,#15091d 43%,#090512 76%,#02040a 100%) ;
}

/* Ambient bergerak perlahan, tanpa blur */
html[data-cosmic-theme="sun"] .pt-cosmic-shell::before {
  background:
    radial-gradient(circle at 78% 12%,rgba(255,238,180,.16),transparent 18%),
    radial-gradient(circle at 22% 68%,rgba(255,164,77,.08),transparent 24%);
  animation: pt-android-ambient-sun 14s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="moon"] .pt-cosmic-shell::before {
  background:
    radial-gradient(circle at 76% 13%,rgba(235,247,255,.15),transparent 18%),
    radial-gradient(circle at 20% 68%,rgba(80,159,255,.08),transparent 25%);
  animation: pt-android-ambient-moon 17s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="galaxy"] .pt-cosmic-shell::before {
  background:
    radial-gradient(ellipse at 72% 16%,rgba(212,169,255,.15),transparent 22%),
    radial-gradient(ellipse at 25% 70%,rgba(78,144,255,.09),transparent 25%);
  animation: pt-android-ambient-galaxy 20s ease-in-out infinite alternate ;
}

html[data-cosmic-theme="blackhole"] .pt-cosmic-shell::before {
  background:
    radial-gradient(circle at 75% 12%,rgba(82,216,255,.12),transparent 20%),
    radial-gradient(circle at 75% 12%,rgba(245,187,82,.07),transparent 30%);
  animation: pt-android-ambient-blackhole 18s linear infinite ;
}

html[data-cosmic-theme="nebula"] .pt-cosmic-shell::before {
  background:
    radial-gradient(ellipse at 70% 15%,rgba(255,155,222,.15),transparent 22%),
    radial-gradient(ellipse at 24% 68%,rgba(82,207,255,.09),transparent 26%);
  animation: pt-android-ambient-nebula 18s ease-in-out infinite alternate ;
}

@keyframes pt-android-ambient-sun {
  from { transform:translate3d(-1%,0,0); opacity:.65; }
  to   { transform:translate3d(1%,1%,0); opacity:1; }
}

@keyframes pt-android-ambient-moon {
  from { transform:translate3d(-1%,0,0); opacity:.65; }
  to   { transform:translate3d(1%,1%,0); opacity:1; }
}

@keyframes pt-android-ambient-galaxy {
  from { transform:translate3d(-1%,.5%,0); opacity:.60; }
  to   { transform:translate3d(1%,-.5%,0); opacity:1; }
}

@keyframes pt-android-ambient-blackhole {
  from { transform:rotate(0deg); opacity:.65; }
  to   { transform:rotate(360deg); opacity:1; }
}

@keyframes pt-android-ambient-nebula {
  from { transform:translate3d(-1%,1%,0) scale(1); opacity:.65; }
  to   { transform:translate3d(1%,-1%,0) scale(1.04); opacity:1; }
}


/* =========================================================
   ANDROID FINAL LOGIN / REGISTRATION ROOT OVERRIDE V64
   Runtime style is appended after professionalTheme, therefore
   these  rules intentionally win over old card styles.
   ========================================================= */

html[data-cosmic-theme] body:has(.pt-cosmic-auth),
html[data-cosmic-theme] #root:has(.pt-cosmic-auth),
html[data-cosmic-theme] body:has(.pt-cosmic-register),
html[data-cosmic-theme] #root:has(.pt-cosmic-register) {
  background:transparent ;
  background-color:transparent ;
  background-image:none ;
}

@media(max-width:899px){
  html[data-cosmic-theme] .pt-cosmic-auth,
  html[data-cosmic-theme] .pt-cosmic-register {
    position:relative ;
    isolation:isolate ;
    min-height:100dvh ;
    width:100vw ;
    background:transparent ;
    background-color:transparent ;
    background-image:none ;
  }

  html[data-cosmic-theme] .pt-cosmic-auth > .pt-android-cosmic-bg,
  html[data-cosmic-theme] .pt-cosmic-register > .pt-android-cosmic-bg {
    position:fixed ;
    inset:0 ;
    width:100vw ;
    height:100dvh ;
    z-index:0 ;
    pointer-events:none ;
    background:transparent ;
  }

  /* Remove only the OUTER login wrapper. Inputs/buttons remain. */
  html[data-cosmic-theme] .pt-cosmic-auth > .login-modal-card,
  html[data-cosmic-theme] .pt-cosmic-auth > .pt-auth-card,
  html[data-cosmic-theme] .pt-cosmic-auth > .unified-login-card {
    position:relative ;
    z-index:10 ;
    background:transparent ;
    background-color:transparent ;
    background-image:none ;
    border:0 ;
    border-radius:0 ;
    box-shadow:none ;
    backdrop-filter:none ;
    -webkit-backdrop-filter:none ;
  }

  /* Registration outer card must never become a black rectangle. */
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-shell,
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-card,
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-content,
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-panel {
    background:transparent ;
    background-color:transparent ;
    background-image:none ;
    border:0 ;
    border-radius:0 ;
    box-shadow:none ;
    backdrop-filter:none ;
    -webkit-backdrop-filter:none ;
  }

  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-section {
    background:transparent ;
    background-color:transparent ;
    background-image:none ;
    border:0 ;
    box-shadow:none ;
  }

  /* Preserve readable controls, but never recreate a giant card. */
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-field input,
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-field select,
  html[data-cosmic-theme] body:has(.pt-cosmic-register) .registration-field textarea {
    background:rgba(5,15,30,.55) ;
    color:#f4f8ff ;
    border:1px solid color-mix(in srgb,var(--pt-accent) 38%,transparent) ;
    box-shadow:none ;
    backdrop-filter:none ;
    -webkit-backdrop-filter:none ;
  }

  /* Aurora is a static photo only — no atmosphere or star overlays. */
  html[data-cosmic-theme="aurora"] .pt-android-cosmic-bg > div:nth-child(2),
  html[data-cosmic-theme="aurora"] .pt-android-cosmic-bg > div:nth-child(3) {
    display:none ;
    visibility:hidden ;
    opacity:0 ;
    animation:none ;
    transform:none ;
  }

  html[data-cosmic-theme="aurora"] .pt-android-cosmic-bg > div:first-child {
    background-image:url("/aurora-background.webp") ;
    background-repeat:no-repeat ;
    background-position:center center ;
    background-size:100% 100% ;
    opacity:1 ;
    filter:none ;
    animation:none ;
    transform:none ;
  }
}

`;

  document.head.appendChild(style);
}
