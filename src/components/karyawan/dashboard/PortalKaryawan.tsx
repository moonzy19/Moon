import { Capacitor } from '@capacitor/core';
import PortalKaryawanClassic from './PortalKaryawanClassic';
import PortalKaryawanCosmicAndroid from './PortalKaryawanCosmicAndroid';
import PortalKaryawanCosmicIOS from './PortalKaryawanCosmicIOS';

type Props = {
  onLogout?: () => void;
};

export default function PortalKaryawan({ onLogout }: Props) {
  const platform = Capacitor.getPlatform();

  if (platform === 'android') {
    return <PortalKaryawanCosmicAndroid onLogout={onLogout} />;
  }

  if (platform === 'ios') {
    return <PortalKaryawanCosmicIOS onLogout={onLogout} />;
  }

  return <PortalKaryawanClassic onLogout={onLogout} />;
}
