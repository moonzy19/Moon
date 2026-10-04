import { translations } from '../locales/translations';

export type WebLang = 'id' | 'en' | 'ja' | 'ko' | 'zh';

/** Canonical web translation adapter. The web shell no longer maintains a
 * second dictionary; every UI key resolves from src/locales/translations.ts. */
export function wt(lang: WebLang, key: string, fallback = key): string {
  return translations[lang]?.[key]
    ?? translations.id?.[key]
    ?? fallback;
}
