export type DialogOptions = {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  placeholder?: string;
  defaultValue?: string;
};

function openDialog(options: DialogOptions, mode: 'alert' | 'confirm' | 'prompt'): Promise<string | boolean | void> {
  if (typeof document === 'undefined') return Promise.resolve(mode === 'confirm' ? false : mode === 'prompt' ? null as never : undefined);
  return new Promise(resolve => {
    const dialog = document.createElement('dialog');
    dialog.className = 'app-dialog';
    dialog.setAttribute('aria-modal', 'true');
    const language = document.documentElement.lang || 'id';
    const defaults: Record<string, { information: string; confirmation: string; enter: string; close: string; value: string; continue: string; cancel: string; save: string; ok: string }> = {
      id: { information: 'Informasi', confirmation: 'Konfirmasi', enter: 'Masukkan informasi', close: 'Tutup', value: 'Nilai', continue: 'Lanjutkan', cancel: 'Batal', save: 'Simpan', ok: 'OK' },
      en: { information: 'Information', confirmation: 'Confirmation', enter: 'Enter information', close: 'Close', value: 'Value', continue: 'Continue', cancel: 'Cancel', save: 'Save', ok: 'OK' },
      ja: { information: '情報', confirmation: '確認', enter: '情報を入力', close: '閉じる', value: '値', continue: '続行', cancel: 'キャンセル', save: '保存', ok: 'OK' },
      ko: { information: '정보', confirmation: '확인', enter: '정보 입력', close: '닫기', value: '값', continue: '계속', cancel: '취소', save: '저장', ok: 'OK' },
      zh: { information: '信息', confirmation: '确认', enter: '输入信息', close: '关闭', value: '值', continue: '继续', cancel: '取消', save: '保存', ok: '确定' },
    };
    const d = defaults[language] || defaults.id;
    const title = options.title || (mode === 'prompt' ? d.enter : mode === 'confirm' ? d.confirmation : d.information);
    const cancel = options.cancelText || d.cancel;
    const confirm = options.confirmText || (mode === 'confirm' ? d.continue : mode === 'prompt' ? d.save : d.ok);
    dialog.innerHTML = `
      <form method="dialog" class="app-dialog-card">
        <div class="app-dialog-head"><h2>${escapeHtml(title)}</h2><button type="button" class="app-dialog-close" data-action="cancel" aria-label="${escapeAttr(d.close)}">×</button></div>
        <div class="app-dialog-body"><p>${escapeHtml(options.message || '')}</p>${mode === 'prompt' ? `<label class="app-dialog-field"><span>${escapeHtml(d.value)}</span><input name="value" type="text" placeholder="${escapeAttr(options.placeholder || '')}" value="${escapeAttr(options.defaultValue || '')}" autocomplete="off" /></label>` : ''}</div>
        <div class="app-dialog-foot">${mode !== 'alert' ? `<button type="button" class="secondary" data-action="cancel">${escapeHtml(cancel)}</button>` : ''}<button type="button" class="primary" data-action="confirm">${escapeHtml(confirm)}</button></div>
      </form>`;
    document.body.appendChild(dialog);
    const finish = (value: string | boolean | void) => { dialog.close(); dialog.remove(); resolve(value); };
    dialog.querySelectorAll<HTMLElement>('[data-action="cancel"]').forEach(el => el.addEventListener('click', () => finish(mode === 'confirm' ? false : mode === 'prompt' ? null as never : undefined)));
    dialog.querySelector<HTMLElement>('[data-action="confirm"]')?.addEventListener('click', () => {
      if (mode === 'prompt') finish((dialog.querySelector<HTMLInputElement>('input[name="value"]')?.value || '').trim());
      else finish(mode === 'confirm' ? true : undefined);
    });
    dialog.addEventListener('cancel', event => { event.preventDefault(); finish(mode === 'confirm' ? false : mode === 'prompt' ? null as never : undefined); }, { once: true });
    dialog.addEventListener('click', event => { if (event.target === dialog) finish(mode === 'confirm' ? false : mode === 'prompt' ? null as never : undefined); });
    dialog.showModal();
    const focus = dialog.querySelector<HTMLInputElement>('input') || dialog.querySelector<HTMLElement>('[data-action="confirm"]');
    focus?.focus();
  });
}

function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char)); }
function escapeAttr(value: string) { return escapeHtml(value); }

export const appAlert = (message: string, title?: string) => openDialog({ title, message }, 'alert') as Promise<void>;
export const appConfirm = (message: string, options: Omit<DialogOptions, 'message'> = {}) => openDialog({ ...options, message }, 'confirm') as Promise<boolean>;
export const appPrompt = (message: string, defaultValue = '', options: Omit<DialogOptions, 'message' | 'defaultValue'> = {}) => openDialog({ ...options, message, defaultValue }, 'prompt') as Promise<string | null>;
