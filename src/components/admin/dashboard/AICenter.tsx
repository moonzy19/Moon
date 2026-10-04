import { useMemo, useState, type FormEvent } from 'react';
import { supabase } from '../../../lib/supabase/client';
import { hasPermission } from '../../../lib/security';
import { useTranslation } from '../../../locales/LanguageContext';

type AICenterProps = {
  dbPerms: string[];
  userRole: string;
};

type Message = { role: 'user' | 'assistant'; text: string; model?: string };

type ModuleKey = 'assistant' | 'analytics' | 'reports' | 'feedback' | 'recruitment' | 'attendance' | 'turnover' | 'payroll' | 'people';

const MODULE_PERMISSION: Record<ModuleKey, string> = {
  assistant: 'ai_hr_center',
  analytics: 'ai_hr_analytics',
  reports: 'ai_hr_reports',
  feedback: 'ai_hr_feedback',
  recruitment: 'ai_hr_recruitment',
  attendance: 'ai_hr_analytics',
  turnover: 'ai_hr_analytics',
  payroll: 'ai_hr_payroll',
  people: 'ai_hr_people',
};

const PROMPTS: Array<{ key: string; module: ModuleKey }> = [
  { key: 'ai_example_headcount', module: 'assistant' },
  { key: 'ai_example_attendance', module: 'analytics' },
  { key: 'ai_example_leave', module: 'analytics' },
  { key: 'ai_example_turnover', module: 'turnover' },
];

export default function AICenter({ dbPerms, userRole }: AICenterProps) {
  const { t } = useTranslation();
  const [module, setModule] = useState<ModuleKey>('assistant');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [lastModel, setLastModel] = useState('');
  const [lastSnapshot, setLastSnapshot] = useState<Record<string, unknown> | null>(null);

  const modules = useMemo(() => {
    const all: Array<{ key: ModuleKey; label: string }> = [
      { key: 'assistant', label: t('ai_module_assistant') },
      { key: 'analytics', label: t('ai_module_analytics') },
      { key: 'reports', label: t('ai_module_reports') },
      { key: 'feedback', label: t('ai_module_feedback') },
      { key: 'recruitment', label: t('ai_module_recruitment') },
      { key: 'attendance', label: t('ai_module_attendance') },
      { key: 'turnover', label: t('ai_module_turnover') },
      { key: 'payroll', label: t('ai_module_payroll') },
      { key: 'people', label: t('ai_module_people') },
    ];
    return all.filter((item) => userRole === 'Super Admin' || hasPermission(dbPerms, MODULE_PERMISSION[item.key], userRole));
  }, [dbPerms, t, userRole]);

  const canUse = userRole === 'Super Admin' || hasPermission(dbPerms, 'ai_hr_center', userRole);

  async function ask(nextQuestion = question, nextModule = module) {
    const cleaned = nextQuestion.trim();
    if (!cleaned || busy) return;
    if (!canUse) {
      setError(t('ai_no_permission'));
      return;
    }
    setBusy(true);
    setError('');
    setQuestion('');
    setMessages((prev) => [...prev, { role: 'user', text: cleaned }]);

    try {
        const { data, error: invokeError } = await supabase.functions.invoke('ai-hr-center', {
          body: {
            action: 'assistant',
            module: nextModule,
            question: cleaned,
          },
        });
        if (invokeError) {
          const detail = (invokeError as any)?.context?.error || invokeError.message || 'AI request failed.';
          throw new Error(String(detail));
        }
        if (!data?.ok) throw new Error(data?.error || t('ai_service_error'));
        const answer = String(data.answer || '').trim() || t('ai_empty');
        const modelLabel = data.provider_unavailable ? 'Fallback data' : String(data.model || '');
        setLastModel(modelLabel);
        setLastSnapshot((data.snapshot || null) as Record<string, unknown> | null);
        setMessages((prev) => [...prev, { role: 'assistant', text: answer, model: modelLabel }]);
        if (data.provider_unavailable) {
          setError(String(data.warning || 'Layanan AI eksternal sedang tidak tersedia. Jawaban ditampilkan dari data HR yang tersedia.'));
        }
    } catch (e) {
      const message = e instanceof DOMException && e.name === 'AbortError'
        ? t('ai_timeout')
        : e instanceof Error ? e.message : t('ai_service_error');
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask();
  }

  return (
    <div className="ai-center-page">
      <header className="ai-center-heading">
        <div className="ai-center-heading-row">
          <div>
            <div className="ai-heading-kicker">AI HR CENTER</div>
            <h1>🤖 {t('ai_hr_center')}</h1>
            <p>{t('ai_hr_center_desc')}</p>
          </div>
          <div className="ai-model-badge">
            {lastModel || t('ai_model_not_loaded')}
          </div>
        </div>
      </header>

      {!canUse ? (
        <div className="ai-empty-state" role="status">{t('ai_no_permission')}</div>
      ) : (
        <>
          <section className="ai-module-tools">
            <div className="ai-module-scroll">
              {modules.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => setModule(item.key)}
                  className={`ai-module-chip ${module === item.key ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ai-prompt-list">
              {PROMPTS.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => { setModule(item.module); setQuestion(t(item.key)); }}
                  className="ai-prompt-chip"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </section>

          <section className="ai-chat-surface">
            <div className="ai-message-list">
              {messages.length === 0 ? (
                <div className="ai-empty-content">
                  <div className="ai-empty-icon">🤖</div>
                  <strong>{t('ai_empty_state_title')}</strong>
                  <span>{t('ai_empty_state_desc')}</span>
                </div>
              ) : messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`ai-message ${message.role === 'user' ? 'user' : 'assistant'}`}>
                  <div className="ai-message-bubble">
                    <div className="ai-message-role">
                      {message.role === 'user' ? 'ANDA' : 'AI HR CENTER'}
                    </div>
                    <div className="ai-message-text">{message.text}</div>
                    {message.model && <div className="ai-message-model">{message.model}</div>}
                  </div>
                </div>
              ))}
              {busy && <div className="ai-thinking">{t('ai_thinking')}</div>}
            </div>

            {error && <div className="alert ai-error">{error}</div>}

            <form onSubmit={onSubmit} className="ai-compose">
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value.slice(0, 4000))}
                placeholder={t('ai_ask_placeholder')}
                rows={4}
                maxLength={4000}
                className="ai-compose-input"
              />
              <button type="submit" className="primary ai-compose-submit" disabled={busy || !question.trim()}>
                {busy ? t('ai_thinking') : t('ai_send')}
              </button>
            </form>
            <div className="ai-data-note">{t('ai_data_note')}</div>
          </section>

          {lastSnapshot && (
            <details className="ai-snapshot">
              <summary>{t('ai_data_snapshot')}</summary>
              <pre className="ai-snapshot-pre">{JSON.stringify(lastSnapshot, null, 2)}</pre>
            </details>
          )}
        </>
      )}
    </div>
  );
}
