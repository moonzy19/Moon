# Branding patch — Project by Tirta

Perubahan ini mengganti logo lama dengan logo perusahaan berbentuk crescent emas/navy yang diberikan pengguna.

Nama aplikasi **tetap `Project by Tirta`**. Tidak ada perubahan pada app name, package name, atau judul aplikasi.

Yang diperbarui:
- Android launcher icon (normal + round + adaptive foreground)
- Android splash images (portrait + landscape, seluruh density)
- favicon
- PWA/web icons
- logo internal aplikasi yang sebelumnya mengimpor `moon-logo.svg`

File ini adalah patch relatif terhadap root project. Ekstrak ke `~/Moonjustfine13` dengan overwrite.

Setelah ekstraksi:
```bash
cd ~/Moonjustfine13
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```
