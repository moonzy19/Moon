#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

REPO="$HOME/Project-by-Tirta"
cd "$REPO"

FILE="src/components/admin/dashboard/DashboardAdmin.tsx"
mkdir -p "$HOME/Project-by-Tirta-backup-20260927"
cp -f "$FILE" "$HOME/Project-by-Tirta-backup-20260927/DashboardAdmin-before-email-confirm-$(date +%Y%m%d-%H%M%S).tsx"

python3 <<'PY'
from pathlib import Path

p=Path('src/components/admin/dashboard/DashboardAdmin.tsx')
s=p.read_text(encoding='utf-8')

start=s.find("  const decide=async(decision:'Terima'|'Tolak')=>{")
end=s.find("\n  };\n\n  return <>", start)
if start < 0 or end < 0:
    raise SystemExit('ERROR: blok Konfirmasi/Tolak HR tidak ditemukan. Tidak ada perubahan.')

new_block="""  const decide=async(decision:'Terima'|'Tolak')=>{\n    if(!selected) return;\n    setBusy(true);\n\n    const { data, error } = await supabase.functions.invoke('approve-employee-registration', {\n      body: {\n        employee_id: selected.id_karyawan || '',\n        decision,\n      },\n    });\n\n    if (error) {\n      let message = error.message || 'Gagal memproses persetujuan registrasi.';\n      try {\n        const context = (error as any).context;\n        if (context) {\n          const payload = await context.json();\n          if (payload?.error) message = payload.error;\n        }\n      } catch {\n        // Gunakan pesan error standar dari invoke.\n      }\n      await appAlert(message);\n      setBusy(false);\n      return;\n    }\n\n    if (!data?.ok) {\n      await appAlert(data?.error || 'Gagal memproses persetujuan registrasi.');\n      setBusy(false);\n      return;\n    }\n\n    setSelected(null);\n    setBusy(false);\n    onRefresh();\n  };"""

s=s[:start]+new_block+s[end+7:]
p.write_text(s,encoding='utf-8')
print('PATCH BERHASIL: HR approval sekarang memanggil Edge Function.')
PY

git diff --check

grep -n "approve-employee-registration" "$FILE"

echo

echo "== BUILD WEB =="
npm run build

echo

echo "== CAPACITOR SYNC =="
npx cap sync android

echo

echo "== BUILD APK =="
cd android
chmod +x gradlew
./gradlew assembleDebug --no-daemon
cd "$REPO"

APK="android/app/build/outputs/apk/debug/app-debug.apk"
OUT="$HOME/storage/downloads/Project-by-Tirta-HR-EmailConfirm.apk"
cp -f "$APK" "$OUT"

echo
echo "APK SELESAI:"
echo "$OUT"
echo

echo "== GIT STATUS =="
git status --short

echo

echo "== COMMIT =="
git add src/components/admin/dashboard/DashboardAdmin.tsx
if git diff --cached --quiet; then
  echo "Tidak ada perubahan baru untuk di-commit."
else
  git commit -m "fix: confirm employee email on HR approval"
  git push origin main
fi

echo
if command -v termux-open >/dev/null 2>&1; then
  termux-open "$OUT" || true
fi
