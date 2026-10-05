import { StrictMode } from 'react';
import { Capacitor } from '@capacitor/core';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './locales/LanguageContext';
import { registerPwa } from './pwa';
import { installLoadingStyles } from './loading-real-final-v57.15';
import './styles/admin-dashboard-reference-v2.css';
import './styles/theme-authority-v5.css';

const platform = Capacitor.getPlatform();

document.documentElement.dataset.platform = platform;

const PUBLIC_THEME_CACHE_KEY = 'project-tirta-public-theme';
const CACHED_COSMIC_THEMES = new Set(['sun', 'moon', 'galaxy', 'blackhole', 'nebula', 'aurora']);

if (!document.documentElement.dataset.cosmicTheme) {
  try {
    const cached = localStorage.getItem(PUBLIC_THEME_CACHE_KEY);
    if (cached && CACHED_COSMIC_THEMES.has(cached)) {
      document.documentElement.dataset.cosmicTheme = cached;
    }
  } catch {
    // Cache is optional. App loads the authoritative theme from Supabase.
  }
}

async function bootstrap() {
  registerPwa();

  if (platform !== 'web') {
    await Promise.all([
      import('./styles/android-cosmic-background.css'),
      import('./styles/android-login-profile-polish.css'),
      import('./styles/android-admin-dashboard.css'),
      import('./styles/login-safe-background.css'),
    ]);
  }

  if (platform === 'android') {
    const [
      {
        installProjectByTirtaTheme,
        initializeCosmicTheme,
      },
      { installProjectTirtaAndroidPolish },
    ] = await Promise.all([
      import('./theme/professionalTheme'),
      import('./theme/projectTirtaAndroidPolish'),
    ]);

    installProjectByTirtaTheme();
    initializeCosmicTheme();
    installProjectTirtaAndroidPolish();
  }

  installLoadingStyles();

  await import('./styles/admin-theme-final-v4.css');
  await import('./styles/theme-authority-v7.css');
  await import('./styles/theme-authority-v10.css');
  await import('./styles/theme-authority-v11.css');

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}

void bootstrap();
