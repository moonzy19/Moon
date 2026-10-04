import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Capacitor } from '@capacitor/core';
import { createPortal } from 'react-dom';
import sunArt from '../../../assets/cosmic/cosmic-sun.webp';
import moonArt from '../../../assets/cosmic/cosmic-moon.webp';
import galaxyArt from '../../../assets/cosmic/cosmic-galaxy.webp';
import blackholeArt from '../../../assets/cosmic/cosmic-blackhole.webp';
import nebulaArt from '../../../assets/cosmic/cosmic-nebula.webp';

type CosmicTheme = 'sun'|'moon'|'galaxy'|'blackhole'|'nebula'|'aurora'|'professional';

const ART: Partial<Record<CosmicTheme,string>> = {
  sun:sunArt, moon:moonArt, galaxy:galaxyArt,
  blackhole:blackholeArt, nebula:nebulaArt
};

function readTheme(): CosmicTheme {
  const v = document.documentElement.dataset.cosmicTheme;
  return v && (v in ART || v === 'aurora')
    ? v as CosmicTheme
    : 'professional';
}

export default function AndroidCosmicBackground() {
  const isWeb = Capacitor.getPlatform() === 'web';
  const [theme,setTheme] = useState<CosmicTheme>(readTheme);

      const art = useRef<HTMLDivElement>(null);
  const atmosphere = useRef<HTMLDivElement>(null);
  const stars = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (isWeb) return;

      document.body.classList.add('pt-android-cosmic-mode');

      const root = document.documentElement;

      const sync = () => {
        const next = readTheme();
        setTheme(prev => prev === next ? prev : next);
      };

      sync();

      const observer = new MutationObserver(sync);

      observer.observe(root, {
        attributes: true,
        attributeFilter: ['data-cosmic-theme'],
      });

      const onThemeChange = () => {
        sync();
      };

      window.addEventListener(
        'project-tirta-theme-change',
        onThemeChange
      );

      window.addEventListener(
        'storage',
        sync
      );

      return () => {
        observer.disconnect();

        window.removeEventListener(
          'project-tirta-theme-change',
          onThemeChange
        );

        window.removeEventListener(
          'storage',
          sync
        );

        document.body.classList.remove(
          'pt-android-cosmic-mode'
        );
      };
    }, [isWeb]);

  useEffect(() => {
    if (isWeb) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now:number) => {
      const t=(now-start)/1000;

      /*
       * HD ART LOCK:
       * The source image stays visually fixed so the high-resolution
       * artwork is not continuously zoomed/panned on Android.
       * Only the atmosphere layer below is animated.
       */
      if (art.current) {
        art.current.style.transform = 'none';
      }

      /* Stars stay static. The atmosphere is the only moving layer. */
      const atmosphereSpeed: Record<CosmicTheme, number> = {
        professional: 0,
        sun: 0.75,
        moon: 0.35,
        galaxy: 0.55,
        blackhole: 4.5,
        nebula: 0.45,
        aurora: 0.65,
      };

      if (atmosphere.current) {
        if (theme === 'aurora' || theme === 'professional') {
          atmosphere.current.style.display = 'none';
          atmosphere.current.style.transform = 'none';
        } else {
          atmosphere.current.style.display = 'block';
          const speed = atmosphereSpeed[theme] ?? 0.55;
          const breathe = 1.02 + Math.sin(t * 0.16) * 0.012;
          const drift = Math.sin(t * 0.11) * 1.5;
          atmosphere.current.style.transform =
            `translate3d(${drift}px,0,0) rotate(${t*speed}deg) scale(${breathe})`;
        }
      }

      if (stars.current) {
        stars.current.style.display =
          theme === 'aurora' || theme === 'professional' ? 'none' : 'block';
      }

      raf=requestAnimationFrame(tick);
    };

    raf=requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  },[theme, isWeb]);

  const root:CSSProperties = {
    position:'fixed', inset:0, width:'100vw', height:'100dvh',
    zIndex:0, pointerEvents:'none', overflow:'hidden',
    background:'transparent'
  };

  const atmosphereBackground =
    theme==='professional'
      ? 'transparent'
      : theme==='aurora'
      ? 'transparent'
      : theme==='blackhole'
      ? 'conic-gradient(from 10deg at 50% 48%,transparent 0 18deg,rgba(70,210,255,.28) 24deg,rgba(255,175,75,.34) 32deg,transparent 42deg 150deg,rgba(255,145,55,.22) 166deg,rgba(55,210,255,.20) 184deg,transparent 198deg 360deg)'
      : theme==='galaxy'
      ? 'conic-gradient(from 20deg at 50% 50%,transparent 0 35deg,rgba(130,100,255,.20) 55deg,transparent 80deg 170deg,rgba(50,210,255,.18) 205deg,transparent 235deg)'
      : theme==='nebula'
      ? 'conic-gradient(from 35deg at 50% 50%,rgba(255,90,210,.14),transparent 35%,rgba(80,140,255,.16),transparent 70%)'
      : 'radial-gradient(circle at 50% 45%,rgba(80,190,255,.10),transparent 42%)';

  if (typeof document === 'undefined' || isWeb) return null;
  if (theme === 'professional') return null;

  return createPortal(
    <div style={root} aria-hidden="true">
      <div ref={art} style={{
        position:'absolute',
        inset:0,
        width:'100%',
        height:'100%',
        backgroundImage:
          theme === 'aurora'
            ? 'url("/aurora-background.webp")'
            : `url("${ART[theme]}")`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        backgroundSize:'100% 100%',
        opacity:.98,
        willChange:'auto',
        transform:'none',
        filter:'none',
        backdropFilter:'none'
      }}/>

      <div ref={atmosphere} style={{
        position:'absolute',
        width:'125%',height:'90%',
        left:'-12.5%',top:'5%',
        borderRadius:'50%',
        background:atmosphereBackground,
        opacity:.72,
        mixBlendMode:'screen',
        willChange:'auto'
      }}/>

      <div ref={stars} style={{
        position:'absolute',inset:'-15%',
        backgroundImage:
          'radial-gradient(circle at 18px 26px,rgba(255,255,255,.85) 0 1px,transparent 1.7px),radial-gradient(circle at 91px 67px,rgba(180,220,255,.72) 0 1px,transparent 1.7px)',
        backgroundSize:'170px 170px',
        opacity:.5,
        willChange:'transform'
      }}/>


    </div>,
    document.body
  );
}
