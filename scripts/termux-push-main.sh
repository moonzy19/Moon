#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "Bukan Git repository: $PROJECT_ROOT" >&2
  exit 1
}

REMOTE="$(git remote get-url origin 2>/dev/null || true)"
[ -n "$REMOTE" ] || { echo "Remote origin belum tersedia." >&2; exit 1; }

if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "Tidak ada perubahan untuk di-push."
  exit 0
fi

echo "Remote: $REMOTE"
echo "Branch: $(git branch --show-current)"
git status --short

git add src scripts capacitor.config.ts package.json package-lock.json android
if git diff --cached --quiet; then
  echo "Tidak ada perubahan yang ter-stage setelah filter file."
  exit 0
fi

git commit -m "feat: finalize admin dashboard visual and Termux Android build"
git push origin "$(git branch --show-current)"

echo "Push selesai."
