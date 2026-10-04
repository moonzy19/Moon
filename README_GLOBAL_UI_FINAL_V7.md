# Project by Tirta — Global UI Final V7

Patch untuk memperbaiki UI Web + Android berdasarkan screenshot terakhir.

Perubahan utama:
- Cosmic theme menjadi sumber visual global untuk Admin Web/Android dan halaman terkait.
- Menghilangkan white/light surfaces yang bocor pada topbar, clock, form, reports, role builder, AI Center, dan register saat cosmic theme aktif.
- Mematikan blur pada page/canvas/content surface; artwork tema tetap tajam.
- Memperbaiki responsive layout Reports dan Role & Permission agar tidak memecah teks menjadi satu karakter per baris.
- Menghapus heading kicker legacy yang menggandakan AI HR Center.
- Menambahkan 4 label prompt AI ke 5 locale agar key internal tidak tampil di UI.
- Memperbaiki checkbox Remember Me menjadi 16px.
- Audit theme kini mencakup 6 tema cosmic termasuk Aurora.
- Menambahkan alias npm `test:core` dan `audit:css-cascade`.
- Dashboard mengambil public theme dari Supabase sebagai theme authority, bukan preference akun yang menimpa tema global.

Instalasi dari root repository:

```bash
unzip -o ~/storage/downloads/Moon-global-ui-final-v7.zip
npm run audit
npm run audit:i18n
npm run audit:theme
npm run audit:css-cascade
npm run test:core
npm run build
```

Jangan commit `.env.local`.
