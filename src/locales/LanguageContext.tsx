import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { translations } from './translations';
import { supabase } from '../lib/supabase/client';
import { resolveUiLabelKey } from './uiLabels';

export const SUPPORTED_LANGUAGES = [
  { code: 'id', name: 'Indonesia', nativeName: 'Indonesia' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
] as const;

export type LanguageCode = typeof SUPPORTED_LANGUAGES[number]['code'];

const DEFAULT_LANGUAGE: LanguageCode = 'id';
const ANONYMOUS_STORAGE_KEY = 'project-tirta-language-anonymous';
const USER_STORAGE_PREFIX = 'project-tirta-language-user:';
const LANGUAGE_CODES = new Set<string>(SUPPORTED_LANGUAGES.map(({ code }) => code));

export function isSupportedLanguage(value: unknown): value is LanguageCode {
  return typeof value === 'string' && LANGUAGE_CODES.has(value);
}

type LangContextType = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => Promise<void>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

function translateTextNode(textNode: Text, lang: LanguageCode) {
  const parent = textNode.parentElement;
  if (!parent) return;
  const tag = parent.tagName;
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

  const rawText = textNode.nodeValue || '';
  const rawToken = rawText.trim();
  if (!rawToken) return;

  const rememberedKey = parent.getAttribute('data-pt-legacy-i18n-key');
  const key = rememberedKey || resolveUiLabelKey(rawToken, lang);
  if (!key) return;

  const translated = translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key];
  if (!translated || translated === key) return;

  parent.setAttribute('data-pt-legacy-i18n-key', key);
  if (rawToken !== translated) {
    textNode.nodeValue = rawText.replace(rawToken, translated);
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(DEFAULT_LANGUAGE);
  const [userId, setUserId] = useState<string | null>(null);
  const languageRevision = useRef(0);

  // Session/auth preference bootstrap.
  useEffect(() => {
    let active = true;

    const loadForUser = async (nextUserId: string | null) => {
      const revisionAtStart = languageRevision.current;
      setUserId(nextUserId);

      if (!nextUserId) {
        if (revisionAtStart !== languageRevision.current) return;
        try {
          const saved = localStorage.getItem(ANONYMOUS_STORAGE_KEY);
          setLangState(isSupportedLanguage(saved) ? saved : DEFAULT_LANGUAGE);
        } catch {
          setLangState(DEFAULT_LANGUAGE);
        }
        return;
      }

      try {
        const cached = localStorage.getItem(USER_STORAGE_PREFIX + nextUserId);
        if (isSupportedLanguage(cached)) setLangState(cached);
      } catch {
        // Cache is optional; Supabase remains the source of truth.
      }

      if (revisionAtStart !== languageRevision.current) return;

      const { data, error } = await supabase
        .from('hris_user_preferences')
        .select('language')
        .eq('user_id', nextUserId)
        .maybeSingle();

      if (!active || revisionAtStart !== languageRevision.current) return;

      if (!error && isSupportedLanguage(data?.language)) {
        setLangState(data.language);
        try {
          localStorage.setItem(USER_STORAGE_PREFIX + nextUserId, data.language);
        } catch {
          // Cache is optional.
        }
      }
    };

    const bootstrap = async () => {
      const { data } = await supabase.auth.getSession();
      if (active) await loadForUser(data.session?.user?.id ?? null);
    };

    void bootstrap();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      window.setTimeout(() => {
        if (active) void loadForUser(session?.user?.id ?? null);
      }, 0);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Translate legacy literal labels that have not yet been migrated to t().
  // This remains intentionally isolated and never touches form controls.
  useEffect(() => {
    if (typeof document === 'undefined' || !document.body) return;

    document.documentElement.lang = lang;
    const root = document.body;
    let timer = 0;

    const applyLegacyLanguage = () => {
      timer = 0;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let current: Node | null = null;
      while ((current = walker.nextNode())) nodes.push(current as Text);
      for (const textNode of nodes) translateTextNode(textNode, lang);

      const attributes = ['placeholder', 'aria-label', 'title', 'alt'] as const;
      const elements = root.querySelectorAll<HTMLElement>('[placeholder], [aria-label], [title], [alt]');
      for (const element of elements) {
        for (const attribute of attributes) {
          const raw = element.getAttribute(attribute);
          if (!raw) continue;
          const marker = `data-pt-legacy-i18n-${attribute}`;
          const rememberedKey = element.getAttribute(marker);
          const key = rememberedKey || resolveUiLabelKey(raw, lang);
          if (!key) continue;
          const translated = translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key];
          if (!translated || translated === key) continue;
          element.setAttribute(marker, key);
          if (raw !== translated) element.setAttribute(attribute, translated);
        }
      }
    };

    const schedule = () => {
      if (timer) return;
      timer = window.setTimeout(applyLegacyLanguage, 0);
    };

    applyLegacyLanguage();
    const observer = new MutationObserver(schedule);
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      if (timer) window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [lang]);

  const setLang = async (newLang: LanguageCode) => {
    if (!isSupportedLanguage(newLang)) return;

    languageRevision.current += 1;
    setLangState(newLang);

    try {
      if (userId) {
        localStorage.setItem(USER_STORAGE_PREFIX + userId, newLang);
        const { error } = await supabase
          .from('hris_user_preferences')
          .upsert({ user_id: userId, language: newLang }, { onConflict: 'user_id' });
        if (error) console.warn('Unable to persist account language preference:', error);
      } else {
        localStorage.setItem(ANONYMOUS_STORAGE_KEY, newLang);
      }
    } catch (error) {
      console.warn('Unable to persist language preference:', error);
    }
  };

  const t = (key: string) => {
    return translations[lang]?.[key]
      ?? translations[DEFAULT_LANGUAGE]?.[key]
      ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
}
