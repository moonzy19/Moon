import { useTranslation } from '../../locales/LanguageContext';
import { appPrompt } from '../../lib/app-dialog';
import type { Suggestion } from './types';

const statusKeys: Record<string, string> = {
  new: 'new',
  reviewing: 'reviewing',
  in_progress: 'in_progress',
  resolved: 'resolved',
  archived: 'archived',
};
const categoryKeys: Record<string, string> = {
  Saran: 'suggestion',
  Keluhan: 'complaint',
  Masukan: 'feedback',
};

export default function SuperAdminSuggestionInbox({
  suggestions,
  onStatusChange,
  onReply,
}: {
  suggestions: Suggestion[];
  onStatusChange?: (id: string, status: Suggestion['status']) => void;
  onReply?: (id: string, reply: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <section className="feedback-inbox-page" aria-label={t('suggestion_inbox')}>
      <header className="feedback-inbox-head">
        <h2>{t('suggestion_inbox')}</h2>
        <p>{t('suggestion_inbox_desc')}</p>
      </header>
      {suggestions.length === 0 ? <p>{t('suggestion_none')}</p> : (
        <div className="feedback-case-list">
          {suggestions.map((s) => (
            <article className="feedback-case" key={s.id}>
              <h3>{s.title}</h3>
              <p>{s.content}</p>
              <small>
                {s.anonymous ? t('anonymous') : (s.submittedBy || t('employee'))}
                {' · '}{t(categoryKeys[s.category] || 'category')} · {s.priority} · {t(statusKeys[s.status] || s.status)}
              </small>
              <div className="feedback-case-actions">
                <label>{t('status')}
                  <select value={s.status} onChange={(e) => onStatusChange?.(s.id, e.target.value as Suggestion['status'])}>
                    <option value="new">{t('new')}</option>
                    <option value="reviewing">{t('reviewing')}</option>
                    <option value="in_progress">{t('in_progress')}</option>
                    <option value="resolved">{t('resolved')}</option>
                    <option value="archived">{t('archived')}</option>
                  </select>
                </label>
                <button type="button" onClick={async () => {
                  const reply = await appPrompt(t('employee_reply_prompt'), '');
                  if (reply?.trim()) onReply?.(s.id, reply.trim());
                }}>{t('reply')}</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
