PROJECT BY TIRTA — COSMIC V58

Paket ini berisi redesign Login + Dashboard dengan gaya cosmic navy/blue/gold.

Cara build di Termux:
1. Simpan ZIP ke ~/storage/downloads/
2. Jalankan:
   unzip -q ~/storage/downloads/Project-by-Tirta-Cosmic-Login-Dashboard-V58.zip -d ~/storage/downloads/tirta-v58-src
3. Masuk ke folder project hasil ekstrak.
4. Jalankan:
   chmod +x BUILD_ANDROID_COSMIC_V58.sh
   ./BUILD_ANDROID_COSMIC_V58.sh

Script akan:
- membuat folder build terpisah ~/Project-by-Tirta-Cosmic-V58
- menyalin .env dari ~/Project-by-Tirta bila tersedia
- npm ci
- npm run build
- npx cap sync android
- ./android/gradlew assembleDebug
- menyalin APK ke ~/storage/downloads/Project-by-Tirta-Cosmic-V58-debug.apk
- membuka installer Android bila termux-open tersedia

Sumber desain: referensi cosmic Project by Tirta yang diberikan di percakapan.
