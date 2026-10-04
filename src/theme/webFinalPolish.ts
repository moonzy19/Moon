/* Final WEB visual consistency layer. Loaded after the legacy/runtime theme. */
export const WEB_FINAL_POLISH = String.raw`
html[data-platform="web"] .employee360-page-content,
html[data-platform="web"] .feedback-page,
html[data-platform="web"] .announcements-page,
html[data-platform="web"] .reports-page-content,
html[data-platform="web"] .reports-subpage,
html[data-platform="web"] .id-card-page {
  min-width:0;
}

/* ---------- ID CARD: controls are not a card; preview remains the only card ---------- */
html[data-platform="web"] .id-card-page .id-card-designer,
html[data-platform="web"] .id-card-page .id-card-list {
  background:transparent ;
  border:0 ;
  border-radius:0 ;
  box-shadow:none ;
  padding:0 ;
  backdrop-filter:none ;
  -webkit-backdrop-filter:none ;
}
html[data-platform="web"] .id-card-page .id-card-designer {
  margin:0 ;
}
html[data-platform="web"] .id-card-page .id-card-designer-head {
  display:flex ;
  gap:14px ;
  align-items:flex-start ;
  justify-content:space-between ;
  padding:2px 2px 12px ;
  border-bottom:1px solid rgba(145,177,217,.15) ;
}
html[data-platform="web"] .id-card-page .id-card-designer-head b { font-size:15px ; color:#f7fbff ; }
html[data-platform="web"] .id-card-page .id-card-designer-head small { display:block ; max-width:760px ; color:#93a7bf ; line-height:1.55 ; }
html[data-platform="web"] .id-card-page .id-card-designer-grid {
  display:grid ;
  grid-template-columns:repeat(2,minmax(0,1fr)) ;
  gap:12px ;
  padding:12px 0 6px ;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid > label { min-width:0 ; }
html[data-platform="web"] .id-card-page .id-card-designer-grid > label span { color:#d9e5f3 ; font-size:10px ; font-weight:780 ; margin-bottom:5px ; }
html[data-platform="web"] .id-card-page .id-card-designer-toggles { align-self:stretch ; min-height:40px ; padding-top:2px ; }
html[data-platform="web"] .id-card-page .id-card-theme-pills { display:flex ; flex-wrap:wrap ; gap:6px ; padding:2px 0 8px ; }
html[data-platform="web"] .id-card-page .id-card-design-meta { display:flex ; gap:16px ; flex-wrap:wrap ; padding:3px 0 12px ; color:#8ea3bc ; font-size:8px ; }

html[data-platform="web"] .id-card-page .id-card-toolbar {
  display:grid ;
  grid-template-columns:minmax(180px,1fr) minmax(180px,1fr) auto auto ;
  gap:8px ;
  align-items:center ;
  margin:0 0 12px ;
}
html[data-platform="web"] .id-card-page .id-card-toolbar input,
html[data-platform="web"] .id-card-page .id-card-toolbar select {
  width:100% ;
  min-width:0 ;
  min-height:40px ;
  background:rgba(7,18,35,.76) ;
  border:1px solid var(--web-border) ;
  color:#eef6ff ;
}
html[data-platform="web"] .id-card-page .id-card-orientation-switch,
html[data-platform="web"] .id-card-page .side-switch { min-width:0 ; }
html[data-platform="web"] .id-card-page .id-card-orientation-switch { display:flex ; }
html[data-platform="web"] .id-card-page .id-card-orientation-switch button,
html[data-platform="web"] .id-card-page .side-switch button { min-height:40px ; white-space:nowrap ; }

html[data-platform="web"] .id-card-page .id-card-layout {
  display:grid ;
  grid-template-columns:minmax(0,1fr) minmax(240px,300px) ;
  gap:14px ;
  align-items:start ;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau-panel {
  min-width:0 ;
  overflow:hidden ;
  padding:12px ;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau {
  width:min(100%,856px) ;
  max-width:856px ;
  min-width:0 ;
  height:auto ;
  margin:0 auto ;
  aspect-ratio:856/540 ;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau svg,
html[data-platform="web"] .id-card-page .id-card-pratinjau > svg { width:100% ; max-width:100% ; height:auto ; display:block ; }
html[data-platform="web"] .id-card-page .id-card-list { min-width:0 ; overflow:visible ; }
html[data-platform="web"] .id-card-page .id-list-head { padding:0 0 7px ; margin:0 0 4px ; border-bottom:1px solid rgba(145,177,217,.14) ; }
html[data-platform="web"] .id-card-page .id-employee-row { padding:9px 0 ; border-top:1px solid rgba(145,177,217,.10) ; }

/* ---------- Employee 360: one employee card + KPI units; overview groups sit on page background ---------- */
html[data-platform="web"] .employee360-page-content { display:grid ; gap:12px ; }
html[data-platform="web"] .employee360-page-content .page-heading { margin-bottom:0 ; }
html[data-platform="web"] .employee360-page-content .employee-hero { margin:0 ; }
html[data-platform="web"] .employee360-kpis { display:grid ; grid-template-columns:repeat(5,minmax(0,1fr)) ; gap:8px ; }
html[data-platform="web"] .employee360-stat { min-width:0 ; }
html[data-platform="web"] .employee360-tabs { margin:0 ; }
html[data-platform="web"] .employee360-overview {
  display:grid ;
  grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr) ;
  gap:24px ;
  padding:6px 2px ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .employee360-info-group { min-width:0 ; padding:6px 0 10px ; }
html[data-platform="web"] .employee360-section-head { margin-bottom:10px ; }
html[data-platform="web"] .employee360-section-head h3 { margin:4px 0 0 ; color:#f6fbff ; font-size:14px ; }
html[data-platform="web"] .employee360-profile-grid { margin:0 ; display:grid ; grid-template-columns:repeat(2,minmax(0,1fr)) ; gap:0 ; }
html[data-platform="web"] .employee360-profile-grid > div { padding:9px 0 ; border-bottom:1px solid rgba(145,177,217,.12) ; min-width:0 ; }
html[data-platform="web"] .employee360-profile-grid dt { color:#7f94ad ; font-size:8px ; text-transform:uppercase ; letter-spacing:.06em ; }
html[data-platform="web"] .employee360-profile-grid dd { margin:3px 0 0 ; color:#e7f0fa ; font-size:11px ; font-weight:650 ; overflow:hidden ; text-overflow:ellipsis ; white-space:nowrap ; }
html[data-platform="web"] .employee360-subsection-head { margin:14px 0 7px ; color:#cbd9e9 ; font-size:9px ; font-weight:800 ; text-transform:uppercase ; letter-spacing:.06em ; }
html[data-platform="web"] .employee360-history-list { display:grid ; gap:0 ; }
html[data-platform="web"] .employee360-history-row { display:grid ; grid-template-columns:minmax(0,1fr) auto auto ; gap:8px ; padding:8px 0 ; border-bottom:1px solid rgba(145,177,217,.11) ; }
html[data-platform="web"] .employee360-history-row b { font-size:9px ; color:#e6eef8 ; }
html[data-platform="web"] .employee360-history-row span,html[data-platform="web"] .employee360-history-row small { color:#8ca0b8 ; font-size:8px ; }
html[data-platform="web"] .employee360-table-surface { margin:0 ; min-width:0 ; overflow:hidden ; }
html[data-platform="web"] .employee360-empty-state { padding:36px 0 ; text-align:center ; color:#8da2b9 ; }

/* ---------- Feedback: table surface is the unit; filters are page controls, not a card ---------- */
html[data-platform="web"] .feedback-page .feedback-module { display:grid ; gap:12px ; }
html[data-platform="web"] .feedback-page .feedback-list-surface { min-width:0 ; }
html[data-platform="web"] .feedback-page .feedback-card-title { margin-bottom:12px ; }
html[data-platform="web"] .feedback-page .feedback-filter-bar {
  display:grid ;
  grid-template-columns:minmax(220px,1fr) 150px 150px ;
  gap:8px ;
  margin:0 0 12px ;
}
html[data-platform="web"] .feedback-page .feedback-list-surface > :not(.feedback-filter-bar):not(.feedback-card-title) { min-width:0 ; }
html[data-platform="web"] .feedback-page .feedback-list-surface .data-table { width:100% ; }
html[data-platform="web"] .feedback-page .feedback-detail-card { margin:0 ; }
html[data-platform="web"] .feedback-message { padding:12px 0 ; margin:8px 0 ; color:#dbe7f4 ; border-top:1px solid rgba(145,177,217,.12) ; border-bottom:1px solid rgba(145,177,217,.12) ; background:transparent ; }

/* ---------- Feedback inbox feature ---------- */
html[data-platform="web"] .feedback-inbox-page { display:grid ; gap:14px ; }
html[data-platform="web"] .feedback-inbox-head { padding:2px 0 4px ; }
html[data-platform="web"] .feedback-inbox-head h2 { margin:0 0 4px ; color:#f8fbff ; }
html[data-platform="web"] .feedback-inbox-head p { margin:0 ; color:#8fa5bd ; }
html[data-platform="web"] .feedback-case-list { display:grid ; gap:9px ; }
html[data-platform="web"] .feedback-case { padding:14px ; border:1px solid var(--web-border) ; border-radius:14px ; background:linear-gradient(145deg,rgba(8,21,39,.90),rgba(4,12,24,.94)) ; box-shadow:0 12px 32px rgba(0,0,0,.20) ; }
html[data-platform="web"] .feedback-case h3 { margin:0 0 5px ; color:#f3f8fd ; font-size:13px ; }
html[data-platform="web"] .feedback-case p { margin:0 0 8px ; color:#bcc9d9 ; line-height:1.55 ; }
html[data-platform="web"] .feedback-case > small { display:block ; color:#849bb3 ; font-size:8px ; }
html[data-platform="web"] .feedback-case-actions { display:flex ; align-items:end ; flex-wrap:wrap ; gap:9px ; margin-top:10px ; }
html[data-platform="web"] .feedback-case-actions label { min-width:170px ; }

/* ---------- Announcements: page-level heading + two functional surfaces ---------- */
html[data-platform="web"] .announcement-page-shell { display:grid ; gap:12px ; }
html[data-platform="web"] .announcement-page-shell .announcement-hero { background:transparent ; border:0 ; box-shadow:none ; padding:2px 0 4px ; }
html[data-platform="web"] .announcement-page-shell .announcement-hero-icon { background:rgba(255,255,255,.04) ; }
html[data-platform="web"] .announcement-page-shell .announcement-compose-surface,
html[data-platform="web"] .announcement-page-shell .announcement-list-surface {
  color:#eef5ff ;
  border:1px solid var(--web-border) ;
  border-radius:16px ;
  background:linear-gradient(145deg,rgba(8,20,38,.88),rgba(3,11,22,.94)) ;
  box-shadow:var(--web-shadow) ;
  padding:14px ;
}
html[data-platform="web"] .announcement-page-shell .announcement-compose-surface { display:grid ; gap:10px ; }
html[data-platform="web"] .announcement-page-shell .announcement-form-grid { display:grid ; grid-template-columns:minmax(0,1fr) minmax(180px,220px) ; gap:10px ; }
html[data-platform="web"] .announcement-page-shell .announcement-field-wide { grid-column:1 / -1 ; }
html[data-platform="web"] .announcement-page-shell .announcement-field span { color:#cbd9ea ; font-size:9px ; font-weight:800 ; }
html[data-platform="web"] .announcement-page-shell .announcement-field input,
html[data-platform="web"] .announcement-page-shell .announcement-field select,
html[data-platform="web"] .announcement-page-shell .announcement-field textarea { width:100% ; min-width:0 ; color:#edf5ff ; background:rgba(255,255,255,.03) ; border:1px solid rgba(145,177,217,.20) ; }
html[data-platform="web"] .announcement-page-shell .announcement-field textarea { min-height:160px ; resize:vertical ; }
html[data-platform="web"] .announcement-page-shell .announcement-compose-footer { display:flex ; align-items:center ; justify-content:space-between ; gap:10px ; padding-top:2px ; }
html[data-platform="web"] .announcement-page-shell .announcement-list-surface { display:grid ; gap:9px ; }
html[data-platform="web"] .announcement-page-shell .announcement-list { display:grid ; gap:8px ; }
html[data-platform="web"] .announcement-page-shell .announcement-item { margin:0 ; }

/* ---------- Reports + all report-submenu pages ---------- */
html[data-platform="web"] .reports-page-content { display:grid ; gap:12px ; }
html[data-platform="web"] .reports-nav { margin:0 ; background:transparent ; border:0 ; padding:0 ; }
html[data-platform="web"] .reports-nav button { border:1px solid rgba(145,177,217,.15) ; background:rgba(7,18,35,.52) ; }
html[data-platform="web"] .reports-card-grid { display:grid ; grid-template-columns:repeat(3,minmax(0,1fr)) ; gap:10px ; }
html[data-platform="web"] .reports-single-card { min-width:0 ; }
html[data-platform="web"] .report-card {
  min-width:0 ;
  min-height:152px ;
  display:grid ;
  grid-template-columns:40px minmax(0,1fr) auto ;
  align-items:start ;
  gap:12px ;
  padding:14px ;
}
html[data-platform="web"] .report-card-icon { width:40px ; height:40px ; display:grid ; place-items:center ; border-radius:12px ; color:var(--web-accent) ; background:rgba(255,255,255,.045) ; border:1px solid var(--web-border) ; }
html[data-platform="web"] .report-card-copy { min-width:0 ; }
html[data-platform="web"] .report-card-copy > span { color:#8197af ; font-size:7px ; text-transform:uppercase ; letter-spacing:.10em ; }
html[data-platform="web"] .report-card-copy h3 { margin:4px 0 2px ; color:#eef6ff ; font-size:13px ; }
html[data-platform="web"] .report-card-copy strong { display:block ; color:#fff ; font-size:24px ; line-height:1 ; }
html[data-platform="web"] .report-card-copy p { margin:4px 0 0 ; color:#899db5 ; font-size:8px ; }
html[data-platform="web"] .report-card-action { align-self:end ; }
html[data-platform="web"] .reports-subpage .panel,
html[data-platform="web"] .reports-subpage .table-panel,
html[data-platform="web"] .reports-subpage .report-card,
html[data-platform="web"] .reports-subpage .form-panel { max-width:100% ; min-width:0 ; }

/* ---------- Common responsive cleanup ---------- */
@media (max-width:1100px) {
  html[data-platform="web"] .employee360-kpis { grid-template-columns:repeat(3,minmax(0,1fr)) ; }
  html[data-platform="web"] .employee360-overview { grid-template-columns:1fr ; gap:12px ; }
  html[data-platform="web"] .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) ; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr 1fr ; }
}
@media (max-width:720px) {
  html[data-platform="web"] .employee360-kpis,
  html[data-platform="web"] .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) ; }
  html[data-platform="web"] .employee360-profile-grid { grid-template-columns:1fr ; }
  html[data-platform="web"] .feedback-page .feedback-filter-bar { grid-template-columns:1fr ; }
  html[data-platform="web"] .announcement-page-shell .announcement-form-grid { grid-template-columns:1fr ; }
  html[data-platform="web"] .announcement-page-shell .announcement-field-wide { grid-column:auto ; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr ; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr ; }
  html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { padding:8px ; }
  html[data-platform="web"] .id-card-page .id-card-orientation-switch,
  html[data-platform="web"] .id-card-page .side-switch { width:100% ; }
  html[data-platform="web"] .id-card-page .id-card-orientation-switch button,
  html[data-platform="web"] .id-card-page .side-switch button { flex:1 1 0 ; }
}
@media (max-width:480px) {
  html[data-platform="web"] .employee360-kpis,
  html[data-platform="web"] .reports-card-grid { grid-template-columns:1fr 1fr ; gap:6px ; }
  html[data-platform="web"] .employee360-stat { padding:10px ; }
  html[data-platform="web"] .employee360-stat strong { font-size:20px ; }
  html[data-platform="web"] .report-card { grid-template-columns:34px minmax(0,1fr) ; min-height:132px ; }
  html[data-platform="web"] .report-card-action { grid-column:2 ; width:max-content ; }
}

/* =========================================================
   FINAL WEB QA PASS — page-level hierarchy + mobile robustness
   ========================================================= */
html[data-platform="web"] .id-card-page .id-card-designer {
  display:grid ;
  gap:12px ;
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  border-radius:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .id-card-page .id-card-designer-head {
  display:flex ;
  align-items:flex-start ;
  justify-content:space-between ;
  gap:12px ;
  padding:0 ;
  margin:0 ;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid {
  display:grid ;
  grid-template-columns:repeat(3,minmax(0,1fr)) ;
  gap:10px ;
  padding:0 ;
  margin:0 ;
}
html[data-platform="web"] .id-card-page .id-card-designer-grid > label,
html[data-platform="web"] .id-card-page .id-card-designer-grid input,
html[data-platform="web"] .id-card-page .id-card-designer-grid select { min-width:0 ; max-width:100% ; }
html[data-platform="web"] .id-card-page .id-card-designer-toggles {
  display:flex ;
  align-items:center ;
  align-self:end ;
  flex-wrap:wrap ;
  gap:10px ;
  min-width:0 ;
}
html[data-platform="web"] .id-card-page .id-card-theme-pills {
  display:flex ;
  flex-wrap:wrap ;
  gap:6px ;
  padding:0 ;
  margin:0 ;
}
html[data-platform="web"] .id-card-page .id-card-design-meta {
  display:flex ;
  align-items:center ;
  flex-wrap:wrap ;
  gap:6px 16px ;
  padding:0 ;
  margin:0 ;
}
html[data-platform="web"] .id-card-page .id-card-toolbar {
  display:grid ;
  grid-template-columns:minmax(190px,1fr) minmax(200px,1fr) auto auto ;
  gap:8px ;
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .id-card-page .id-card-list {
  min-width:0 ;
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  border-radius:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .id-card-page .id-list-head {
  display:flex ;
  align-items:flex-start ;
  justify-content:space-between ;
  gap:10px ;
  padding:0 0 8px ;
  margin:0 ;
  border-bottom:1px solid rgba(145,177,217,.12) ;
}
html[data-platform="web"] .id-card-page .id-list-head > div { min-width:0 ; }
html[data-platform="web"] .id-card-page .id-employee-row {
  display:grid ;
  grid-template-columns:20px 32px minmax(0,1fr) ;
  align-items:center ;
  width:100% ;
  min-width:0 ;
  gap:8px ;
  padding:9px 0 ;
  margin:0 ;
  border-top:1px solid rgba(145,177,217,.08) ;
}
html[data-platform="web"] .id-card-page .id-employee-row > span:last-child { min-width:0 ; overflow:hidden ; }
html[data-platform="web"] .id-card-page .id-employee-row b,
html[data-platform="web"] .id-card-page .id-employee-row small {
  display:block ;
  min-width:0 ;
  overflow:hidden ;
  text-overflow:ellipsis ;
  white-space:nowrap ;
}
html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { min-width:0 ; overflow:visible ; }
html[data-platform="web"] .id-card-page .id-card-pratinjau { width:100% ; max-width:856px ; min-width:0 ; margin:0 auto ; overflow:visible ; }
html[data-platform="web"] .id-card-page .id-card-pratinjau svg { display:block ; width:100% ; max-width:100% ; height:auto ; }

html[data-platform="web"] .employee360-page .employee360-overview {
  display:grid ;
  grid-template-columns:minmax(0,1.2fr) minmax(260px,.8fr) ;
  gap:18px ;
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .employee360-page .employee360-info-group {
  min-width:0 ;
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .employee360-page .employee360-section-head {
  padding:0 0 8px ;
  margin:0 0 10px ;
  border-bottom:1px solid rgba(145,177,217,.12) ;
}
html[data-platform="web"] .employee360-page .employee360-history-list { background:transparent ; border:0 ; }
html[data-platform="web"] .employee360-page .employee360-history-row { min-width:0 ; border-bottom:1px solid rgba(145,177,217,.08) ; }

html[data-platform="web"] .feedback-page .feedback-list-surface {
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .feedback-page .feedback-filter-bar {
  display:grid ;
  grid-template-columns:minmax(180px,1fr) 140px 140px ;
  gap:8px ;
  margin:0 0 10px ;
}
html[data-platform="web"] .feedback-page .feedback-list-surface > .card-title {
  padding:0 ;
  margin:0 0 10px ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .feedback-page .feedback-detail-card { margin:14px 0 0 ; }

html[data-platform="web"] .reports-page .reports-nav,
html[data-platform="web"] .reports-subpage .reports-nav {
  padding:0 ;
  margin:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:repeat(3,minmax(0,1fr)) ; }
html[data-platform="web"] .reports-subpage .page-heading,
html[data-platform="web"] .reports-subpage > .page-heading {
  padding:0 ;
  margin:0 0 8px ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .reports-subpage .panel { min-width:0 ; }

html[data-platform="web"] .announcements-page .announcement-hero {
  padding:0 ;
  margin:0 0 4px ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .announcements-page .announcement-compose-surface,
html[data-platform="web"] .announcements-page .announcement-list-surface { min-width:0 ; width:100% ; }
html[data-platform="web"] .announcements-page .announcement-item { min-width:0 ; }
html[data-platform="web"] .announcements-page .announcement-item-main { min-width:0 ; }
html[data-platform="web"] .announcements-page .announcement-item-title-row > strong { overflow-wrap:anywhere ; }

@media (max-width:1100px) {
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr 1fr ; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr ; }
  html[data-platform="web"] .employee360-page .employee360-overview { grid-template-columns:1fr ; }
  html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:repeat(2,minmax(0,1fr)) ; }
}
@media (max-width:720px) {
  html[data-platform="web"] .id-card-page .id-card-designer-grid { grid-template-columns:1fr ; }
  html[data-platform="web"] .id-card-page .id-card-designer-head { flex-direction:column ; }
  html[data-platform="web"] .id-card-page .id-card-toolbar { grid-template-columns:1fr ; }
  html[data-platform="web"] .id-card-page .id-card-actions { flex-direction:column ; }
  html[data-platform="web"] .id-card-page .id-card-actions button { width:100% ; }
  html[data-platform="web"] .id-card-page .id-card-layout { grid-template-columns:1fr ; }
  html[data-platform="web"] .id-card-page .id-card-list { margin-top:14px ; }
  html[data-platform="web"] .id-card-page .id-employee-row { grid-template-columns:20px 30px minmax(0,1fr) ; }
  html[data-platform="web"] .id-card-page .id-card-pratinjau-panel { padding:8px ; }
  html[data-platform="web"] .feedback-page .feedback-filter-bar { grid-template-columns:1fr ; }
  html[data-platform="web"] .reports-page .reports-card-grid { grid-template-columns:1fr ; }
}


/* Employee announcement center — no decorative outer card; announcement items remain functional cards. */
html[data-platform="web"] .employee-announcement-center {
  display:grid ;
  gap:12px ;
  min-width:0 ;
  padding:0 ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .employee-announcement-head {
  display:flex ;
  align-items:flex-end ;
  justify-content:space-between ;
  gap:12px ;
  padding:0 ;
  margin:0 0 4px ;
  background:transparent ;
  border:0 ;
  box-shadow:none ;
}
html[data-platform="web"] .employee-announcement-list {
  display:grid ;
  grid-template-columns:repeat(2,minmax(0,1fr)) ;
  gap:10px ;
  min-width:0 ;
}
html[data-platform="web"] .employee-announcement-item {
  min-width:0 ;
  overflow:hidden ;
}
html[data-platform="web"] .employee-announcement-item-title { min-width:0 ; }
html[data-platform="web"] .employee-announcement-item-title strong:last-child {
  min-width:0 ;
  overflow-wrap:anywhere ;
}
@media (max-width:820px) {
  html[data-platform="web"] .employee-announcement-list { grid-template-columns:1fr ; }
}
@media (max-width:560px) {
  html[data-platform="web"] .employee-announcement-head { align-items:flex-start ; flex-direction:column ; }
  html[data-platform="web"] .employee-announcement-title h2 { font-size:22px ; }
}

/* Feedback employee form is a single functional form surface; its internal labels/fields remain flat. */
html[data-platform="web"] .suggestion-box.employee-form {
  min-width:0 ;
}
html[data-platform="web"] .suggestion-box .suggestion-header,
html[data-platform="web"] .suggestion-box .suggestion-footer { min-width:0 ; }
html[data-platform="web"] .suggestion-box .suggestion-form-grid { min-width:0 ; }

`;

export function installWebFinalPolish() {
  if (typeof document === 'undefined') return;
  if (document.documentElement.dataset.platform !== 'web') return;
  const id = 'project-tirta-web-final-polish-v4';
  document.getElementById('project-tirta-web-final-polish-v2')?.remove();
  document.getElementById('project-tirta-web-final-polish-v3')?.remove();
  document.getElementById(id)?.remove();
  const style = document.createElement('style');
  style.id = id;
  style.textContent = WEB_FINAL_POLISH;
  document.head.appendChild(style);
}

// Final WEB QA pass: remove residual visual shells without touching Android/iOS styles.
