#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

# Project by Tirta — Cosmic Login + Dashboard V58 Android builder
# Safe default: builds in a separate folder and does not overwrite the user's main repo.

DOWNLOAD_DIR="$HOME/storage/downloads"
SOURCE_ZIP="${1:-$DOWNLOAD_DIR/Project-by-Tirta-Cosmic-Login-Dashboard-V58.zip}"
WORK_DIR="${2:-$HOME/Project-by-Tirta-Cosmic-V58}"

if [ ! -f "$SOURCE_ZIP" ]; then
  echo "ERROR: ZIP tidak ditemukan: $SOURCE_ZIP" >&2
  echo "Letakkan ZIP ini di ~/storage/downloads atau berikan path ZIP sebagai argumen pertama." >&2
  exit 1
fi

command -v unzip >/dev/null 2>&1 || { echo "ERROR: unzip belum terpasang. Jalankan: pkg install unzip" >&2; exit 1; }
command -v node >/dev/null 2>&1 || { echo "ERROR: node belum terpasang. Jalankan: pkg install nodejs-lts" >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "ERROR: npm belum terpasang." >&2; exit 1; }
command -v java >/dev/null 2>&1 || { echo "ERROR: Java belum terpasang." >&2; exit 1; }

export ANDROID_HOME="${ANDROID_HOME:-$HOME/android-sdk}"
export ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-$ANDROID_HOME}"

case "$(node -v)" in
  v24.*) ;;
  *)
    echo "WARNING: Project ini ditujukan untuk Node 24.x; terdeteksi $(node -v)." >&2
    ;;
esac

JAVA_MAJOR="$(java -version 2>&1 | sed -n 's/.*version "\([0-9]*\).*/\1/p' | head -1)"
if [ "$JAVA_MAJOR" != "21" ]; then
  echo "WARNING: disarankan Java 21; terdeteksi Java $JAVA_MAJOR." >&2
fi

TMP_DIR="$(mktemp -d -t tirta-cosmic-v58.XXXXXX)"
cleanup(){ rm -rf "$TMP_DIR"; }
trap cleanup EXIT

rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR"
unzip -q "$SOURCE_ZIP" -d "$TMP_DIR"

ROOT="$(find "$TMP_DIR" -maxdepth 3 -type f -name package.json -print -quit | xargs -r dirname)"
if [ -z "$ROOT" ] || [ ! -f "$ROOT/package.json" ]; then
  echo "ERROR: struktur project tidak ditemukan di ZIP." >&2
  exit 1
fi

cp -a "$ROOT"/. "$WORK_DIR"/
cd "$WORK_DIR"

# Reuse Supabase/deployment env from an existing local Tirta project when present.
if [ ! -f .env ] && [ -f "$HOME/Project-by-Tirta/.env" ]; then
  cp "$HOME/Project-by-Tirta/.env" .env
  echo "✓ .env disalin dari ~/Project-by-Tirta"
fi

[ -f android/gradlew ] || { echo "ERROR: android/gradlew tidak ditemukan." >&2; exit 1; }
chmod +x android/gradlew

if [ ! -d "$ANDROID_HOME" ]; then
  echo "ERROR: Android SDK tidak ditemukan: $ANDROID_HOME" >&2
  echo "Set ANDROID_HOME ke folder SDK Android kamu." >&2
  exit 1
fi

echo "== [1/4] npm ci =="
npm ci --no-audit --no-fund

echo "== [2/4] npm run build =="
npm run build

echo "== [3/4] npx cap sync android =="
npx cap sync android

echo "== [4/4] Android debug APK =="
(cd android && ./gradlew assembleDebug --no-daemon --stacktrace)

APK="$WORK_DIR/android/app/build/outputs/apk/debug/app-debug.apk"
[ -f "$APK" ] || { echo "ERROR: APK tidak ditemukan: $APK" >&2; exit 1; }

mkdir -p "$DOWNLOAD_DIR"
OUT="$DOWNLOAD_DIR/Project-by-Tirta-Cosmic-V58-debug.apk"
cp -f "$APK" "$OUT"
sha256sum "$OUT" | tee "$OUT.sha256"

if command -v termux-open >/dev/null 2>&1; then
  echo "Membuka installer Android..."
  termux-open "$OUT" || true
fi

echo ""
echo "==============================================="
echo "SELESAI — Project by Tirta Cosmic V58"
echo "APK    : $OUT"
echo "SHA256 : $OUT.sha256"
echo "Source : $WORK_DIR"
echo "==============================================="
