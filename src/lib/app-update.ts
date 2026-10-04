import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { appConfirm } from './app-dialog';

const GITHUB_API =
  'https://api.github.com/repos/ProjectByMoon/Tirta/releases/latest';

function parseVersion(value: unknown): number[] {
  const match = String(value || '')
    .trim()
    .replace(/^v/i, '')
    .match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?/);

  if (!match) return [];

  return [
    Number(match[1] || 0),
    Number(match[2] || 0),
    Number(match[3] || 0),
  ];
}

function isNewerVersion(latest: unknown, current: unknown): boolean {
  const a = parseVersion(latest);
  const b = parseVersion(current);

  if (!a.length || !b.length) return false;

  for (let i = 0; i < 3; i += 1) {
    if ((a[i] || 0) > (b[i] || 0)) return true;
    if ((a[i] || 0) < (b[i] || 0)) return false;
  }

  return false;
}

export async function checkForAppUpdate(): Promise<void> {
  // Update APK hanya relevan untuk Android.
  if (Capacitor.getPlatform() !== 'android') {
    return;
  }

  try {
    const current = await App.getInfo();
    const currentVersion = String(current.version || '').trim();

    const response = await fetch(GITHUB_API, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return;
    }

    const release = await response.json();

    const latestVersion = String(release?.tag_name || '').trim();

    if (!isNewerVersion(latestVersion, currentVersion)) {
      return;
    }

    const apkAsset = release.assets?.find(
      (asset: { name?: string; browser_download_url?: string }) =>
        asset.name?.toLowerCase().endsWith('.apk')
    );

    if (!apkAsset?.browser_download_url || !release?.html_url) {
      console.warn('Release terbaru tidak memiliki APK atau halaman release.');
      return;
    }

    const releaseNotes = String(release?.body || '').trim();

    const update = await appConfirm(
      `Versi baru Project by Tirta tersedia.\n\n` +
      `Versi saat ini: ${currentVersion}\n` +
      `Versi terbaru: ${latestVersion.replace(/^v/i, '')}\n\n` +
      (releaseNotes
        ? `${releaseNotes.slice(0, 500)}\n\n`
        : '') +
      `Buka halaman download untuk memasang update?`
    );

    if (update) {
      const releaseUrl = new URL(String(release.html_url));
      if (releaseUrl.protocol !== 'https:' || releaseUrl.hostname !== 'github.com') {
        console.warn('URL release update tidak dipercaya.');
        return;
      }
      window.open(releaseUrl.toString(), '_blank', 'noopener,noreferrer');
    }
  } catch (error) {
    // Kegagalan cek update tidak boleh menghalangi aplikasi dibuka.
    console.warn('Pemeriksaan update gagal:', error);
  }
}
