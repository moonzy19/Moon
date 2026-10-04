import { Capacitor } from '@capacitor/core';

/** True only when the Capacitor app is running as the Android app. */
export const isAndroidApp = Capacitor.getPlatform() === 'android';
