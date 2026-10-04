import { StrictMode } from 'react';
import { Capacitor } from '@capacitor/core';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './locales/LanguageContext';
import { registerPwa } from './pwa';
import { installLoadingStyles } from './loading-real-final-v57.15';
import './styles/admin-dashboard-reference-v2.css';

const platform = Capacitor.getPlatform();

document.documentElement.dataset.platform = platform;

if (platform === 'web' && !document.documentElement.dataset.cosmicTheme) {
  document.documentElement.dataset.cosmicTheme = 'sun';
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

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}

void bootstrap();
