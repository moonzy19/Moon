import { translations } from './translations';

export type UiLabelLanguage = 'id' | 'en' | 'ja' | 'ko' | 'zh';

const LEGACY_UI_ALIASES: Record<string, string> = {
  'web name': 'web_name',
  'web employee module': 'web_employee_module',
  'web all employees': 'web_all_employees',
  'web pending registration': 'web_pending_registration',
};

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLocaleLowerCase();
}

// Duplicate visible labels are deliberately treated as ambiguous. Falling back to
// the last key inserted (the old behavior) could translate a legacy label into an
// unrelated key when several entries share the same display text.
const NORMALIZED_LABELS_BY_LOCALE: Record<UiLabelLanguage, Map<string, string | null>> = {
  id: new Map(),
  en: new Map(),
  ja: new Map(),
  ko: new Map(),
  zh: new Map(),
};

for (const lang of Object.keys(NORMALIZED_LABELS_BY_LOCALE) as UiLabelLanguage[]) {
  const map = NORMALIZED_LABELS_BY_LOCALE[lang];
  for (const [key, value] of Object.entries(translations[lang])) {
    const normalized = normalize(value);
    if (!normalized) continue;
    if (!map.has(normalized)) {
      map.set(normalized, key);
    } else if (map.get(normalized) !== key) {
      map.set(normalized, null);
    }
  }
}

export function resolveUiLabelKey(value: string, lang: UiLabelLanguage = 'id'): string | null {
  const raw = value.trim();
  if (!raw) return null;

  const alias = LEGACY_UI_ALIASES[normalize(raw)];
  if (alias) return alias;

  const resolved = NORMALIZED_LABELS_BY_LOCALE[lang]?.get(normalize(raw));
  return resolved ?? null;
}
