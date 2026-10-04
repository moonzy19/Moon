#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SDK_ROOT="${ANDROID_HOME:-${HOME}/android-sdk}"
CMDLINE_REV="15859902"
CMDLINE_ZIP="commandlinetools-linux-${CMDLINE_REV}_latest.zip"
CMDLINE_URL="https://dl.google.com/android/repository/${CMDLINE_ZIP}"

log(){ printf '\n[Fullmoon] %s\n' "$*"; }
die(){ printf '\n[Fullmoon] ERROR: %s\n' "$*" >&2; exit 1; }

[ -d "$PROJECT_ROOT" ] || die "Project directory not found: $PROJECT_ROOT"
cd "$PROJECT_ROOT"

if ! command -v pkg >/dev/null 2>&1; then
  die "Script ini harus dijalankan di Termux."
fi

log "Install paket dasar Termux"
pkg update -y
pkg install -y git unzip zip wget curl openjdk-21 aapt2 android-tools

export JAVA_HOME="${JAVA_HOME:-$PREFIX/lib/jvm/openjdk-21}"
export ANDROID_HOME="$SDK_ROOT"
export ANDROID_SDK_ROOT="$SDK_ROOT"
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/36.0.0:$PATH"

log "Pastikan Android SDK tersedia di $ANDROID_HOME"
if [ ! -x "$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager" ]; then
  mkdir -p "$ANDROID_HOME/cmdline-tools"
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' EXIT
  cd "$tmp"
  wget -O "$CMDLINE_ZIP" "$CMDLINE_URL"
  unzip -q "$CMDLINE_ZIP"
  rm -rf "$ANDROID_HOME/cmdline-tools/latest"
  mkdir -p "$ANDROID_HOME/cmdline-tools/latest"
  cp -a cmdline-tools/. "$ANDROID_HOME/cmdline-tools/latest/"
fi

SDKMANAGER="$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager"
[ -x "$SDKMANAGER" ] || die "sdkmanager tidak ditemukan setelah setup."

if command -v termux-fix-shebang >/dev/null 2>&1; then
  find "$ANDROID_HOME/cmdline-tools/latest/bin" -type f -maxdepth 1 -exec termux-fix-shebang {} \; 2>/dev/null || true
fi

log "Terima license dan pasang SDK yang diperlukan (compile/target 36)"
yes | "$SDKMANAGER" --sdk_root="$ANDROID_HOME" --licenses >/dev/null || true
"$SDKMANAGER" --sdk_root="$ANDROID_HOME" \
  "platform-tools" \
  "platforms;android-36" \
  "build-tools;36.0.0"

mkdir -p "$HOME/.gradle"
GRADLE_PROPS="$HOME/.gradle/gradle.properties"
touch "$GRADLE_PROPS"
if command -v aapt2 >/dev/null 2>&1; then
  if ! grep -q '^android\.aapt2FromMavenOverride=' "$GRADLE_PROPS"; then
    printf '\nandroid.aapt2FromMavenOverride=%s\n' "$(command -v aapt2)" >> "$GRADLE_PROPS"
  fi
fi

log "Pasang dependency JavaScript"
npm ci

log "Build web + sinkronisasi Capacitor Android"
npm run build
npx cap sync android

log "Build APK debug"
cd "$PROJECT_ROOT/android"
chmod +x ./gradlew
./gradlew assembleDebug --no-daemon

APK="$PROJECT_ROOT/android/app/build/outputs/apk/debug/app-debug.apk"
[ -f "$APK" ] || die "APK tidak ditemukan: $APK"

OUT="$HOME/storage/downloads/Fullmoon-Admin-debug.apk"
if [ -d "$HOME/storage/downloads" ]; then
  cp -f "$APK" "$OUT"
  log "APK siap: $OUT"
else
  log "APK siap: $APK"
  log "Jalankan termux-setup-storage lalu salin APK ke storage/downloads."
fi

if command -v adb >/dev/null 2>&1; then
  if adb devices 2>/dev/null | awk 'NR>1 && $2=="device"{found=1} END{exit(found?0:1)}'; then
    log "Device ADB terdeteksi — install APK"
    adb install -r "$APK"
  else
    log "Tidak ada device ADB aktif; APK tidak di-install otomatis."
  fi
fi

log "SELESAI"
