import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { PushNotifications } from '@capacitor/push-notifications';
import type { PluginListenerHandle } from '@capacitor/core';
import { supabase } from './supabase/client';

const CHANNEL_ID = 'project-tirta-announcements';
let activeUserId: string | null = null;
let currentToken: string | null = null;
let registered = false;
let registrationListener: PluginListenerHandle | null = null;
let foregroundListener: PluginListenerHandle | null = null;
let actionListener: PluginListenerHandle | null = null;
let registrationErrorListener: PluginListenerHandle | null = null;
let localActionListener: PluginListenerHandle | null = null;

async function ensureChannelsAndPermission(): Promise<boolean> {
  if (Capacitor.getPlatform() !== 'android') return false;

  let pushPermission = await PushNotifications.checkPermissions();
  if (pushPermission.receive !== 'granted') {
    pushPermission = await PushNotifications.requestPermissions();
  }
  if (pushPermission.receive !== 'granted') return false;

  try {
    await LocalNotifications.createChannel({
      id: CHANNEL_ID,
      name: 'Project by Tirta - Pengumuman',
      description: 'Pengumuman perusahaan dan informasi penting karyawan.',
      importance: 5,
      visibility: 1,
      vibration: true,
      lights: true,
    });
  } catch (error) {
    console.warn('Announcement notification channel:', error);
  }

  return true;
}

async function saveToken(userId: string, token: string): Promise<void> {
  const { error } = await supabase.from('hris_push_tokens').upsert({
    user_id: userId,
    token,
    platform: 'android',
    app_id: 'com.projectbytira.bernadya',
    is_active: true,
    last_seen_at: new Date().toISOString(),
  }, { onConflict: 'user_id,token' });
  if (error) console.warn('Gagal menyimpan token push:', error.message);
  else currentToken = token;
}

async function showForegroundAnnouncement(notification: { title?: string; body?: string; data?: Record<string, unknown> }): Promise<void> {
  if (!(await ensureChannelsAndPermission())) return;
  const localPermission = await LocalNotifications.checkPermissions();
  if (localPermission.display !== 'granted') {
    const requested = await LocalNotifications.requestPermissions();
    if (requested.display !== 'granted') return;
  }
  const title = notification.title || 'Pengumuman Project by Tirta';
  const body = notification.body || 'Ada pengumuman baru.';
  const rawId = String(notification.data?.announcement_id || Date.now());
  let numericId = 0;
  for (const char of rawId) numericId = (numericId * 31 + char.charCodeAt(0)) % 2000000000;
  if (numericId < 1) numericId = 1;

  await LocalNotifications.schedule({
    notifications: [{
      id: numericId,
      title,
      body,
      channelId: CHANNEL_ID,
      schedule: { at: new Date(Date.now() + 250) },
      extra: {
        source: 'project-tirta-announcement',
        announcement_id: notification.data?.announcement_id || '',
        link: '#/announcements',
      },
    }],
  });
}

async function removeListeners(): Promise<void> {
  for (const listener of [registrationListener, foregroundListener, actionListener, registrationErrorListener, localActionListener]) {
    if (listener) {
      try { await listener.remove(); } catch { /* listener already removed */ }
    }
  }
  registrationListener = null;
  foregroundListener = null;
  actionListener = null;
  registrationErrorListener = null;
  localActionListener = null;
}

export async function initAndroidPushNotifications(userId: string): Promise<void> {
  if (Capacitor.getPlatform() !== 'android' || !userId) return;
  if (registered && activeUserId === userId) return;

  await removeListeners();
  activeUserId = userId;
  currentToken = null;

  if (!(await ensureChannelsAndPermission())) return;

  registrationListener = await PushNotifications.addListener('registration', async ({ value }) => {
    if (activeUserId) await saveToken(activeUserId, value);
  });

  registrationErrorListener = await PushNotifications.addListener('registrationError', (error) => {
    console.warn('Registrasi FCM gagal:', error);
  });

  foregroundListener = await PushNotifications.addListener('pushNotificationReceived', async (notification) => {
    if (String(notification.data?.type || '') !== 'announcement') return;
    await showForegroundAnnouncement(notification);
  });

  actionListener = await PushNotifications.addListener('pushNotificationActionPerformed', (event) => {
    const data = event.notification?.data ?? {};
    const link = String(data.link || '#/announcements');
    if (link.startsWith('#/')) {
      window.location.hash = link.slice(1);
    } else {
      window.location.href = link;
    }
  });

  localActionListener = await LocalNotifications.addListener('localNotificationActionPerformed', (event) => {
    const extra = event.notification?.extra ?? {};
    const link = String(extra.link || '#/announcements');
    if (link.startsWith('#/')) {
      window.location.hash = link.slice(1);
    } else {
      window.location.href = link;
    }
  });

  try {
    await PushNotifications.register();
    registered = true;
  } catch (error) {
    registered = false;
    console.warn('Pendaftaran push Android gagal:', error);
  }
}

export async function stopAndroidPushNotifications(): Promise<void> {
  if (Capacitor.getPlatform() !== 'android') return;

  if (activeUserId && currentToken) {
    await supabase
      .from('hris_push_tokens')
      .delete()
      .eq('user_id', activeUserId)
      .eq('token', currentToken);
  }

  await removeListeners();
  try { await PushNotifications.unregister(); } catch { /* best effort */ }
  activeUserId = null;
  currentToken = null;
  registered = false;
}

