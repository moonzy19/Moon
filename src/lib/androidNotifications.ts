import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const CHANNEL_ID = 'project-tirta-attendance';
let channelReady = false;

async function prepare(): Promise<boolean> {
  if (Capacitor.getPlatform() !== 'android') return false;

  let permission = await LocalNotifications.checkPermissions();
  if (permission.display !== 'granted') {
    permission = await LocalNotifications.requestPermissions();
  }
  if (permission.display !== 'granted') return false;

  if (!channelReady) {
    try {
      await LocalNotifications.createChannel({
        id: CHANNEL_ID,
        name: 'Project by Tirta - Absensi',
        description: 'Notifikasi check in, check out, dan sinkronisasi absensi.',
        importance: 4,
        visibility: 1,
        vibration: true,
        lights: true,
      });
    } catch (error) {
      console.warn('Notification channel:', error);
    }
    channelReady = true;
  }
  return true;
}

export async function notifyAndroidAttendance(title: string, body: string): Promise<void> {
  try {
    if (!(await prepare())) return;
    await LocalNotifications.schedule({
      notifications: [{
        id: Math.floor(Date.now() % 2000000000),
        title,
        body,
        channelId: CHANNEL_ID,
        schedule: { at: new Date(Date.now() + 250) },
        extra: { source: 'project-tirta-attendance' },
      }],
    });
  } catch (error) {
    console.warn('Attendance notification:', error);
  }
}
