import { useEffect, useState } from 'react';
import { useTranslation } from '../../../locales/LanguageContext';
import { supabase } from '../../../lib/supabase/client';
import { appAlert, appPrompt } from '../../../lib/app-dialog';

const BUCKET = 'bpjs-cards';


function Header(props: any) {
  return (
    <div className="w-section-head">
      <div>
        {props.title && <h2>{props.title}</h2>}
        {props.description && <p>{props.description}</p>}
      </div>
      {props.children}
    </div>
  );
}

type EmployeeBPJS = {
  id: string;
  id_karyawan: string;
  nama: string;
  departemen?: string;
  jabatan?: string;
  bpjs_kesehatan?: string;
  bpjs_ketenagakerjaan?: string;
  bpjs_kesehatan_card_path?: string;
  bpjs_ketenagakerjaan_card_path?: string;
};

export default function BPJSModule() {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<EmployeeBPJS[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState('');

  const fetchEmployees = async () => {
    setLoading(true);
    setError('');

    const { data, error: fetchError } = await supabase
      .from('karyawan')
      .select(
        'id,id_karyawan,nama,departemen,jabatan,bpjs_kesehatan,bpjs_ketenagakerjaan,bpjs_kesehatan_card_path,bpjs_ketenagakerjaan_card_path'
      )
      .order('nama', { ascending: true });

    if (fetchError) setError(fetchError.message);
    setEmployees((data || []) as EmployeeBPJS[]);
    setLoading(false);
  };

  useEffect(() => {
    void fetchEmployees();
  }, []);

  const filtered = employees.filter(employee => {
    const q = search.trim().toLowerCase();
    if (!q) return true;

    return [
      employee.nama,
      employee.id_karyawan,
      employee.departemen,
      employee.jabatan,
    ]
      .map(v => String(v || ''))
      .join(' ')
      .toLowerCase()
      .includes(q);
  });

  const saveNumber = async (
    id: string,
    field: 'bpjs_kesehatan' | 'bpjs_ketenagakerjaan',
    value: string,
  ) => {
    const { error: saveError } = await supabase
      .from('karyawan')
      .update({ [field]: value.trim() || null })
      .eq('id', id);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setNotice(t('bpjs_number_updated'));
    await fetchEmployees();
  };

  const uploadCard = async (
    employee: EmployeeBPJS,
    kind: 'kesehatan' | 'ketenagakerjaan',
    file: File,
  ) => {
    setError('');
    setNotice('');

    const allowed = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/pdf',
    ];

    if (!allowed.includes(file.type)) {
      await appAlert(t('bpjs_card_format_error'), t('dialog_information'));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      await appAlert(t('bpjs_card_size_error'), t('dialog_information'));
      return;
    }

    const oldPath =
      kind === 'kesehatan'
        ? employee.bpjs_kesehatan_card_path
        : employee.bpjs_ketenagakerjaan_card_path;

    const ext =
      file.name.split('.').pop()?.toLowerCase() ||
      (file.type === 'application/pdf' ? 'pdf' : 'jpg');

    const random =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const path = `employees/${employee.id_karyawan}/${kind}-${random}.${ext}`;

    setUploading(`${employee.id}:${kind}`);

    try {
      const { data: signed, error: signedError } = await supabase.storage
        .from(BUCKET)
        .createSignedUploadUrl(path, { upsert: false });

      if (signedError) throw signedError;
      if (!signed?.token) throw new Error(t('bpjs_upload_token_missing'));

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .uploadToSignedUrl(path, signed.token, file);

      if (uploadError) throw uploadError;

      const column =
        kind === 'kesehatan'
          ? 'bpjs_kesehatan_card_path'
          : 'bpjs_ketenagakerjaan_card_path';

      const { error: saveError } = await supabase
        .from('karyawan')
        .update({ [column]: path })
        .eq('id', employee.id);

      if (saveError) {
        await supabase.storage.from(BUCKET).remove([path]).catch(() => undefined);
        throw saveError;
      }

      if (oldPath && oldPath !== path) {
        await supabase.storage.from(BUCKET).remove([oldPath]).catch(() => undefined);
      }

      setNotice(
        kind === 'kesehatan'
          ? t('bpjs_health_upload_success')
          : t('bpjs_work_upload_success'),
      );

      await fetchEmployees();
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : t('bpjs_upload_failed'),
      );
    } finally {
      setUploading('');
    }
  };

  const openCard = async (path?: string | null) => {
    if (!path) {
      setError(t('bpjs_card_not_available'));
      return;
    }

    const { data, error: linkError } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(path, 900);

    if (linkError || !data?.signedUrl) {
      setError(linkError?.message || t('bpjs_card_open_failed'));
      return;
    }

    window.open(data.signedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section>
      <Header
        title={t('web_bpjs')}
        description={t('web_bpjs_desc')}
      />

      <div className="web-f-toolbar">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t('web_search_employee')}
        />
        <button
          type="button"
          className="web-f-secondary"
          onClick={() => void fetchEmployees()}
        >
          {t('web_refresh')}
        </button>
      </div>

      {notice && <div className="web-f-alert">{notice}</div>}
      {error && <div className="web-f-alert">{error}</div>}

      <div className="web-f-panel web-f-table-panel">
        <div className="web-f-scroll">
          <table className="web-f-table">
            <thead>
              <tr>
                <th>{t('web_name')}</th>
                <th>{t('web_id_employee')}</th>
                <th>{t('web_bpjs_health')}</th>
                <th>{t('web_bpjs_work')}</th>
                <th>{t('web_action')}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="web-f-empty">
                    {t('web_loading')}
                  </td>
                </tr>
              ) : filtered.length ? (
                filtered.map(employee => (
                  <tr key={employee.id}>
                    <td>
                      <b>{employee.nama}</b>
                      <small>
                        {employee.departemen || '—'} · {employee.jabatan || '—'}
                      </small>
                    </td>
                    <td>{employee.id_karyawan}</td>
                    <td>
                      <div>{employee.bpjs_kesehatan || '—'}</div>
                      <div className="web-f-inline-actions">
                        <label className="web-f-upload-button">
                          {uploading === `${employee.id}:kesehatan`
                            ? t('web_processing')
                            : t('web_upload_card')}
                          <input
                            hidden
                            type="file"
                            accept="image/jpeg,image/png,image/webp,application/pdf"
                            disabled={Boolean(uploading)}
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) void uploadCard(employee, 'kesehatan', file);
                              e.target.value = '';
                            }}
                          />
                        </label>
                        {employee.bpjs_kesehatan_card_path && (
                          <button
                            type="button"
                            className="web-f-link"
                            onClick={() => void openCard(employee.bpjs_kesehatan_card_path)}
                          >
                            {t('web_open_saved_card')}
                          </button>
                        )}
                        <button
                          type="button"
                          className="web-f-link"
                          onClick={() => void (async () => { const value = await appPrompt(t('web_bpjs_health'), employee.bpjs_kesehatan || '', { title: t('web_bpjs_health'), cancelText: t('cancel'), confirmText: t('web_save') }); if (value !== null) await saveNumber(employee.id, 'bpjs_kesehatan', value); })()}
                        >
                          {t('web_edit')}
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>{employee.bpjs_ketenagakerjaan || '—'}</div>
                      <div className="web-f-inline-actions">
                        <label className="web-f-upload-button">
                          {uploading === `${employee.id}:ketenagakerjaan`
                            ? t('web_processing')
                            : t('web_upload_card')}
                          <input
                            hidden
                            type="file"
                            accept="image/jpeg,image/png,image/webp,application/pdf"
                            disabled={Boolean(uploading)}
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) void uploadCard(employee, 'ketenagakerjaan', file);
                              e.target.value = '';
                            }}
                          />
                        </label>
                        {employee.bpjs_ketenagakerjaan_card_path && (
                          <button
                            type="button"
                            className="web-f-link"
                            onClick={() => void openCard(employee.bpjs_ketenagakerjaan_card_path)}
                          >
                            {t('web_open_saved_card')}
                          </button>
                        )}
                        <button
                          type="button"
                          className="web-f-link"
                          onClick={() => void (async () => { const value = await appPrompt(t('web_bpjs_work'), employee.bpjs_ketenagakerjaan || '', { title: t('web_bpjs_work'), cancelText: t('cancel'), confirmText: t('web_save') }); if (value !== null) await saveNumber(employee.id, 'bpjs_ketenagakerjaan', value); })()}
                        >
                          {t('web_edit')}
                        </button>
                      </div>
                    </td>
                    <td>—</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="web-f-empty">
                    {t('web_no_employees')}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
