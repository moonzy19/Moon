# Fullmoon Android — Build lewat Termux

Project ini sudah memiliki Capacitor Android project dan Gradle wrapper. Script `scripts/termux-build-android.sh` menyiapkan toolchain, membangun web, menjalankan `npx cap sync android`, membuat APK debug, lalu menyalinnya ke `~/storage/downloads/Fullmoon-Admin-debug.apk`.

## Jalankan

```bash
termux-setup-storage
cd ~/fullmoon-github
chmod +x scripts/termux-build-android.sh
bash scripts/termux-build-android.sh
```

Untuk memasukkan perubahan ke GitHub dari repository lokal yang sudah terautentikasi:

```bash
cd ~/fullmoon-github
chmod +x scripts/termux-push-main.sh
bash scripts/termux-push-main.sh
```

Project menggunakan `compileSdkVersion = 36` dan `targetSdkVersion = 36`, sehingga script memasang `platforms;android-36` dan `build-tools;36.0.0`.
