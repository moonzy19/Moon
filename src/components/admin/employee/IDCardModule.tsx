import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { useTranslation } from '../../../locales/LanguageContext';
import type { Karyawan } from './types';
import { supabase } from '../../../lib/supabase/client';
import { code128SvgMarkup } from '../../../lib/code128';
import { qrMatrixToSvg } from '../../../lib/qr';

type Employee = Karyawan & {
  foto_url?: string | null;
  foto?: string | null;
  photo_url?: string | null;
};

type Props = {
  employees: Employee[];
  companyName: string;
  logoUrl: string;
};

type IDCardDesignTheme = keyof typeof ID_CARD_DESIGN_THEMES;

type IDCardDesign = {
  theme: IDCardDesignTheme;
  companyName: string;
  logoDataUrl: string;
  showQr: boolean;
  showBarcode: boolean;
};

type Palette = {
  top: string;
  top2: string;
  body: string;
  body2: string;
  accent: string;
  accentSoft: string;
  text: string;
  muted: string;
  line: string;
};

const ID_CARD_STORAGE_KEY = 'project-tirta-id-card-design-v2';
const ID_CARD_ORIENTATION_STORAGE_KEY = 'project-tirta-id-card-orientation-v1';
type IDCardOrientation = 'vertical' | 'horizontal';

const ID_CARD_DESIGN_THEMES: Record<
  string,
  { label: string; palette: Palette }
> = {
  moon: {
    label: 'Bulan',
    palette: {
      top: '#071a3d', top2: '#16335e', body: '#0a1222', body2: '#111c30',
      accent: '#d6ae58', accentSoft: '#f0d68c', text: '#f7f9fc', muted: '#aeb8c9', line: '#2e3f5f',
    },
  },
  sun: {
    label: 'Matahari',
    palette: {
      top: '#321507', top2: '#87440f', body: '#1b0b05', body2: '#2b1208',
      accent: '#f6c767', accentSoft: '#ffe4a5', text: '#fffaf0', muted: '#e6c99d', line: '#654126',
    },
  },
  galaxy: {
    label: 'Galaksi',
    palette: {
      top: '#1b103d', top2: '#47308a', body: '#0d0820', body2: '#1a1230',
      accent: '#d7adff', accentSoft: '#efdfff', text: '#fbf8ff', muted: '#c6bdd9', line: '#4c3b72',
    },
  },
  blackhole: {
    label: 'Blackhole',
    palette: {
      top: '#050609', top2: '#18202a', body: '#020307', body2: '#091018',
      accent: '#e8c36f', accentSoft: '#ffe7a4', text: '#f6fbff', muted: '#a7b4c0', line: '#31404d',
    },
  },
  nebula: {
    label: 'Nebula',
    palette: {
      top: '#32102f', top2: '#5e2e76', body: '#130712', body2: '#211028',
      accent: '#ffbfe8', accentSoft: '#ffe0f3', text: '#fff6fd', muted: '#d6bfce', line: '#64445d',
    },
  },
};

const DEFAULT_DESIGN = (companyName: string): IDCardDesign => ({
  theme: 'moon',
  companyName,
  logoDataUrl: '',
  showQr: true,
  showBarcode: true,
});

function safeId(employee: Employee) {
  return employee.id_karyawan || employee.id || 'EMPLOYEE';
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(x => x[0]).join('').toUpperCase() || 'ID';
}

function escapeXml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function safeImageHref(value: string) {
  const trimmed = String(value || '').trim();
  if (/^(?:https?:\/\/|\/|data:image\/)/i.test(trimmed)) return escapeXml(trimmed);
  return '';
}

function fittedFontSize(value: unknown, base: number, min: number, maxWidth = 490) {
  const text = String(value ?? '');
  if (!text) return base;
  const estimated = Math.floor(maxWidth / Math.max(text.length * 0.55, 1));
  return Math.max(min, Math.min(base, estimated));
}

function getVerifyBaseUrl() {
  const configured = String(import.meta.env.VITE_PUBLIC_VERIFY_BASE_URL || '').trim();
  if (configured) return `${configured.replace(/\/+$/, '')}/`;
  const pathname = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : `${window.location.pathname}/`;
  return `${window.location.origin}${pathname}`;
}

function buildVerifyUrl(token: string) {
  return `${getVerifyBaseUrl()}#/verify/${encodeURIComponent(token)}`;
}

function imageFromFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    if (file.size > 1024 * 1024) {
      reject(new Error('Logo maksimal 1 MB.'));
      return;
    }
    if (!/^image\/(?:png|jpeg|webp|svg\+xml)$/i.test(file.type)) {
      reject(new Error('Gunakan logo PNG, JPG, WEBP, atau SVG.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(new Error('Logo gagal dibaca.'));
    reader.readAsDataURL(file);
  });
}

function CardArtworkVertical({
  employee,
  side,
  design,
  logoUrl,
  photoOverride,
  verificationToken,
}: {
  employee: Employee;
  side: 'front' | 'back';
  design: IDCardDesign;
  logoUrl: string;
  photoOverride?: string;
  verificationToken?: string;
}) {
  const photo = photoOverride || employee.foto_url || employee.foto || employee.photo_url || '';
  const id = safeId(employee);
  const width = 540;
  const height = 856;
  const palette = ID_CARD_DESIGN_THEMES[design.theme].palette;
  const logo = design.logoDataUrl || logoUrl;
  const gradientId = `pt-card-vertical-${design.theme}-${side}`.replace(/[^a-z0-9-]/gi, '');
  const photoSvg = photo
    ? `<image href="${safeImageHref(photo)}" x="96" y="154" width="348" height="420" preserveAspectRatio="xMidYMid slice"/>`
    : `<rect x="96" y="154" width="348" height="420" rx="24" fill="${palette.body2}" stroke="${palette.line}" stroke-width="2"/><text x="270" y="390" text-anchor="middle" font-size="78" font-weight="700" fill="${palette.accentSoft}">${escapeXml(initials(employee.nama))}</text>`;

  if (side === 'back') {
    const qr = design.showQr && verificationToken
      ? `<rect x="126" y="164" width="288" height="288" rx="24" fill="#ffffff" stroke="${palette.accent}" stroke-width="4"/><g transform="translate(144 182) scale(1.72)">${qrMatrixToSvg(buildVerifyUrl(verificationToken), { size: 150, margin: 4, foreground: '#000000', background: '#ffffff', ecclevel: 'M' })}</g><text x="270" y="488" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="${palette.accentSoft}">SCAN UNTUK VERIFIKASI</text>`
      : `<rect x="126" y="164" width="288" height="288" rx="24" fill="${palette.body2}" stroke="${palette.line}" stroke-width="2"/><text x="270" y="298" text-anchor="middle" font-family="Arial" font-size="14" fill="${palette.muted}">QR VERIFIKASI</text><text x="270" y="325" text-anchor="middle" font-family="Arial" font-size="12" fill="${palette.muted}">menunggu token</text>`;
    const barcode = design.showBarcode
      ? `<text x="46" y="542" font-family="Arial" font-size="12" font-weight="700" fill="${palette.accentSoft}">CODE 128</text><g transform="translate(46 555)">${code128SvgMarkup(id, 448, 64)}</g><text x="46" y="642" font-family="Arial" font-size="17" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>`
      : `<text x="46" y="570" font-family="Arial" font-size="12" fill="${palette.muted}">ID KARYAWAN</text><text x="46" y="602" font-family="Arial" font-size="24" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs><linearGradient id="${gradientId}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${palette.top}"/><stop offset="1" stop-color="${palette.top2}"/></linearGradient></defs>
      <rect width="540" height="856" rx="34" fill="${palette.body}"/>
      <rect width="540" height="126" rx="34" fill="url(#${gradientId})"/><rect y="92" width="540" height="34" fill="url(#${gradientId})"/>
      <rect x="1" y="1" width="538" height="854" rx="33" fill="none" stroke="${palette.accent}" stroke-width="2" opacity=".92"/>
      <image href="${safeImageHref(logo)}" x="40" y="28" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
      <text x="116" y="56" font-family="Arial" font-size="${fittedFontSize(design.companyName, 22, 13, 370)}" font-weight="700" fill="${palette.text}">${escapeXml(design.companyName)}</text>
      <text x="116" y="83" font-family="Arial" font-size="11" fill="${palette.accentSoft}">KARTU IDENTITAS KARYAWAN</text>
      <text x="46" y="115" font-family="Arial" font-size="9" fill="${palette.muted}">Sisi belakang • verifikasi kartu</text>
      <text x="46" y="148" font-family="Arial" font-size="11" font-weight="700" fill="${palette.accentSoft}">VERIFIKASI DIGITAL</text>
      ${qr}
      ${barcode}
      <rect x="46" y="688" width="448" height="1" fill="${palette.line}"/>
      <text x="46" y="718" font-family="Arial" font-size="10" fill="${palette.muted}">Jangan dipinjamkan. QR memvalidasi status kartu</text>
      <text x="46" y="737" font-family="Arial" font-size="10" fill="${palette.muted}">pada sistem resmi Project by Tirta.</text>
      <text x="46" y="791" font-family="Arial" font-size="11" fill="${palette.muted}">Status kartu</text>
      <text x="494" y="791" text-anchor="end" font-family="Arial" font-size="12" font-weight="800" fill="${employee.status_aktif === false ? '#ff9eae' : palette.accentSoft}">${employee.status_aktif === false ? 'NONAKTIF' : 'AKTIF'}</text>
      <text x="46" y="818" font-family="Arial" font-size="9" fill="${palette.muted}">Project by Tirta • Kartu identitas karyawan</text>
    </svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="${gradientId}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${palette.top}"/><stop offset="1" stop-color="${palette.top2}"/></linearGradient></defs>
    <rect width="540" height="856" rx="34" fill="${palette.body}"/>
    <rect width="540" height="126" rx="34" fill="url(#${gradientId})"/><rect y="92" width="540" height="34" fill="url(#${gradientId})"/>
    <rect x="1" y="1" width="538" height="854" rx="33" fill="none" stroke="${palette.accent}" stroke-width="2" opacity=".92"/>
    <image href="${safeImageHref(logo)}" x="40" y="28" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
    <text x="116" y="56" font-family="Arial" font-size="${fittedFontSize(design.companyName, 22, 13, 370)}" font-weight="700" fill="${palette.text}">${escapeXml(design.companyName)}</text>
    <text x="116" y="83" font-family="Arial" font-size="11" fill="${palette.accentSoft}">KARTU IDENTITAS KARYAWAN</text>
    <text x="46" y="115" font-family="Arial" font-size="9" fill="${palette.muted}">Sisi depan • cocok untuk digantung di leher</text>
    ${photoSvg}
    <rect x="96" y="154" width="348" height="420" rx="24" fill="none" stroke="${palette.accent}" stroke-width="2"/>
    <text x="46" y="620" font-family="Arial" font-size="11" font-weight="700" fill="${palette.accentSoft}">NAMA LENGKAP</text>
    <text x="46" y="648" font-family="Arial" font-size="${fittedFontSize(employee.nama, 23, 14, 448)}" font-weight="700" fill="${palette.text}">${escapeXml(employee.nama || '-')}</text>
    <text x="46" y="680" font-family="Arial" font-size="11" font-weight="700" fill="${palette.accentSoft}">JABATAN</text>
    <text x="46" y="707" font-family="Arial" font-size="${fittedFontSize(employee.jabatan, 16, 11, 448)}" fill="${palette.text}">${escapeXml(employee.jabatan || '-')}</text>
    <text x="46" y="738" font-family="Arial" font-size="11" font-weight="700" fill="${palette.accentSoft}">ID KARYAWAN</text>
    <text x="46" y="764" font-family="Arial" font-size="20" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>
    <text x="270" y="738" font-family="Arial" font-size="11" font-weight="700" fill="${palette.accentSoft}">DEPARTEMEN</text>
    <text x="270" y="764" font-family="Arial" font-size="${fittedFontSize(employee.departemen, 14, 10, 224)}" fill="${palette.text}">${escapeXml(employee.departemen || '-')}</text>
    <rect x="46" y="791" width="448" height="1" fill="${palette.line}"/>
    <text x="46" y="818" font-family="Arial" font-size="9" fill="${palette.muted}">Status: ${employee.status_aktif === false ? 'NONAKTIF' : 'AKTIF'} • Project by Tirta</text>
  </svg>`;
}

export function CardArtwork({
  employee,
  side,
  design,
  logoUrl,
  photoOverride,
  verificationToken,
  orientation,
}: {
  employee: Employee;
  side: 'front' | 'back';
  design: IDCardDesign;
  logoUrl: string;
  photoOverride?: string;
  verificationToken?: string;
  orientation?: IDCardOrientation;
}) {
  if (orientation === 'vertical') {
    return CardArtworkVertical({ employee, side, design, logoUrl, photoOverride, verificationToken });
  }
  const photo = photoOverride || employee.foto_url || employee.foto || employee.photo_url || '';
  const id = safeId(employee);
  const width = 856;
  const height = 540;
  const palette = ID_CARD_DESIGN_THEMES[design.theme].palette;
  const logo = design.logoDataUrl || logoUrl;
  const gradientId = `pt-card-${design.theme}-${side}`.replace(/[^a-z0-9-]/gi, '');
  const photoSvg = photo
    ? `<image href="${safeImageHref(photo)}" x="58" y="140" width="190" height="238" preserveAspectRatio="xMidYMid slice"/>`
    : `<rect x="58" y="140" width="190" height="238" rx="20" fill="${palette.body2}" stroke="${palette.line}" stroke-width="2"/><text x="153" y="287" text-anchor="middle" font-size="62" font-weight="700" fill="${palette.accentSoft}">${escapeXml(initials(employee.nama))}</text>`;

  if (side === 'back') {
    const qr = design.showQr && verificationToken
      ? `<rect x="631" y="143" width="172" height="172" rx="15" fill="#ffffff" stroke="${palette.accent}" stroke-width="4"/><g transform="translate(642 154) scale(1.01)">${qrMatrixToSvg(buildVerifyUrl(verificationToken), { size: 150, margin: 4, foreground: '#000000', background: '#ffffff', ecclevel: 'M' })}</g><text x="717" y="337" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="${palette.accentSoft}">SCAN UNTUK VERIFIKASI</text>`
      : `<rect x="631" y="143" width="172" height="172" rx="15" fill="${palette.body2}" stroke="${palette.line}" stroke-width="2"/><text x="717" y="218" text-anchor="middle" font-family="Arial" font-size="14" fill="${palette.muted}">QR VERIFIKASI</text><text x="717" y="243" text-anchor="middle" font-family="Arial" font-size="12" fill="${palette.muted}">menunggu token</text>`;

    const barcode = design.showBarcode
      ? `<text x="54" y="300" font-family="Arial" font-size="13" font-weight="700" fill="${palette.accentSoft}">CODE 128</text><g transform="translate(54 312)">${code128SvgMarkup(id, 510, 64)}</g><text x="54" y="397" font-family="Arial" font-size="18" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>`
      : `<text x="54" y="318" font-family="Arial" font-size="13" fill="${palette.muted}">ID KARYAWAN</text><text x="54" y="350" font-family="Arial" font-size="24" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs><linearGradient id="${gradientId}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${palette.top}"/><stop offset="1" stop-color="${palette.top2}"/></linearGradient></defs>
      <rect width="856" height="540" rx="34" fill="${palette.body}"/>
      <rect width="856" height="104" rx="34" fill="url(#${gradientId})"/><rect y="70" width="856" height="34" fill="url(#${gradientId})"/>
      <rect x="1" y="1" width="854" height="538" rx="33" fill="none" stroke="${palette.accent}" stroke-width="2" opacity=".92"/>
      <image href="${safeImageHref(logo)}" x="48" y="24" width="58" height="58" preserveAspectRatio="xMidYMid meet"/>
      <text x="126" y="59" font-family="Arial" font-size="27" font-weight="700" fill="${palette.text}">${escapeXml(design.companyName)}</text>
      <text x="54" y="148" font-family="Arial" font-size="18" font-weight="700" fill="${palette.accentSoft}">KARTU IDENTITAS KARYAWAN</text>
      <text x="54" y="177" font-family="Arial" font-size="14" fill="${palette.muted}">Identitas resmi • Validasi melalui sistem Project by Tirta</text>
      <text x="54" y="214" font-family="Arial" font-size="13" font-weight="700" fill="${palette.accentSoft}">INFORMASI KARTU</text>
      <text x="54" y="239" font-family="Arial" font-size="14" fill="${palette.text}">Gunakan QR di sisi kanan untuk memeriksa status kartu.</text>
      <text x="54" y="266" font-family="Arial" font-size="14" fill="${palette.text}">Kartu tidak memuat data sensitif pemegangnya.</text>
      ${barcode}
      ${qr}
      <rect x="54" y="437" width="748" height="1" fill="${palette.line}"/>
      <text x="54" y="472" font-family="Arial" font-size="12" fill="${palette.muted}">Jangan dipinjamkan. Pemeriksaan keaslian dilakukan pada domain resmi perusahaan.</text>
      <text x="802" y="507" text-anchor="end" font-family="Arial" font-size="12" font-weight="700" fill="${employee.status_aktif === false ? '#ff9eae' : palette.accentSoft}">${employee.status_aktif === false ? 'NONAKTIF' : 'AKTIF'}</text>
    </svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="${gradientId}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="${palette.top}"/><stop offset="1" stop-color="${palette.top2}"/></linearGradient></defs>
    <rect width="856" height="540" rx="34" fill="${palette.body}"/>
    <rect width="856" height="120" rx="34" fill="url(#${gradientId})"/><rect y="88" width="856" height="32" fill="url(#${gradientId})"/>
    <rect x="1" y="1" width="854" height="538" rx="33" fill="none" stroke="${palette.accent}" stroke-width="2" opacity=".92"/>
    <image href="${safeImageHref(logo)}" x="52" y="28" width="64" height="64" preserveAspectRatio="xMidYMid meet"/>
    <text x="136" y="62" font-family="Arial" font-size="28" font-weight="700" fill="${palette.text}">${escapeXml(design.companyName)}</text>
    <text x="136" y="89" font-family="Arial" font-size="13" fill="${palette.accentSoft}">PROJECT BY TIRTA • KARTU IDENTITAS KARYAWAN</text>
    ${photoSvg}
    <rect x="58" y="140" width="190" height="238" rx="20" fill="none" stroke="${palette.accent}" stroke-width="2"/>
    <text x="285" y="160" font-family="Arial" font-size="14" font-weight="700" fill="${palette.accentSoft}">NAMA LENGKAP</text>
    <text x="285" y="194" font-family="Arial" font-size="${fittedFontSize(employee.nama, 28, 15, 490)}" font-weight="700" fill="${palette.text}">${escapeXml(employee.nama || '-')}</text>
    <text x="285" y="237" font-family="Arial" font-size="14" font-weight="700" fill="${palette.accentSoft}">JABATAN</text>
    <text x="285" y="269" font-family="Arial" font-size="${fittedFontSize(employee.jabatan, 20, 13, 490)}" fill="${palette.text}">${escapeXml(employee.jabatan || '-')}</text>
    <text x="285" y="312" font-family="Arial" font-size="14" font-weight="700" fill="${palette.accentSoft}">ID KARYAWAN</text>
    <text x="285" y="344" font-family="Arial" font-size="22" font-weight="700" fill="${palette.text}">${escapeXml(id)}</text>
    <text x="285" y="387" font-family="Arial" font-size="14" font-weight="700" fill="${palette.accentSoft}">DEPARTEMEN</text>
    <text x="285" y="417" font-family="Arial" font-size="${fittedFontSize(employee.departemen, 18, 13, 490)}" fill="${palette.text}">${escapeXml(employee.departemen || '-')}</text>
    <rect x="54" y="439" width="748" height="1" fill="${palette.line}"/>
    <text x="54" y="470" font-family="Arial" font-size="11" fill="${palette.muted}">Status kartu: ${employee.status_aktif === false ? 'NONAKTIF' : 'AKTIF'}</text>
    <text x="802" y="470" text-anchor="end" font-family="Arial" font-size="11" fill="${palette.muted}">Validasi: QR Code</text>
    <text x="54" y="506" font-family="Arial" font-size="12" fill="${palette.muted}">Kartu ini hanya sah selama status karyawan tercatat aktif di Project by Tirta.</text>
  </svg>`;
}

const EmployeeBatchRow = memo(function EmployeeBatchRow({
  employee,
  checked,
  onToggle,
}: {
  employee: Employee;
  checked: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <label className="id-employee-row">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(employee.id)}
      />
      <span className="id-avatar">{initials(employee.nama)}</span>
      <span>
        <b>{employee.nama}</b>
        <small>{safeId(employee)} · {employee.jabatan || '-'}</small>
      </span>
    </label>
  );
});

export default function IDCardModule({ employees, companyName, logoUrl }: Props) {
  const { t } = useTranslation();
  const eligibleEmployees = useMemo(() => employees.filter(e => e.status_aktif === true), [employees]);
  const isAndroidApp = Capacitor.getPlatform() === 'android';
  const [selectedId, setSelectedId] = useState(eligibleEmployees[0]?.id || '');
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [orientation, setOrientation] = useState<IDCardOrientation>(() => {
    if (typeof localStorage === 'undefined') return 'vertical';
    return localStorage.getItem(ID_CARD_ORIENTATION_STORAGE_KEY) === 'horizontal' ? 'horizontal' : 'vertical';
  });
  const [query, setQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState<string[]>([]);
  const [photoDataUrl, setPhotoDataUrl] = useState('');
  const [photoEmployeeId, setPhotoEmployeeId] = useState('');
  const [token, setToken] = useState('');
  const [tokenLoading, setTokenLoading] = useState(false);
  const [actionError, setActionError] = useState('');
  const [design, setDesign] = useState<IDCardDesign>(() => {
    if (typeof localStorage === 'undefined') return DEFAULT_DESIGN(companyName);
    try {
      const saved = JSON.parse(localStorage.getItem(ID_CARD_STORAGE_KEY) || 'null') as Partial<IDCardDesign> | null;
      if (!saved) return DEFAULT_DESIGN(companyName);
      return {
        ...DEFAULT_DESIGN(companyName),
        ...saved,
        companyName: typeof saved.companyName === 'string' && saved.companyName.trim() ? saved.companyName : companyName,
        theme: saved.theme && saved.theme in ID_CARD_DESIGN_THEMES ? saved.theme : 'moon',
        logoDataUrl: typeof saved.logoDataUrl === 'string' ? saved.logoDataUrl : '',
        showQr: saved.showQr !== false,
        showBarcode: saved.showBarcode !== false,
      };
    } catch {
      return DEFAULT_DESIGN(companyName);
    }
  });
  const cardRef = useRef<HTMLDivElement>(null);
  // Desktop performance caches. Photo data URLs are reused when switching
  // between employees instead of downloading/converting the same image again.
  const photoCache = useRef(new Map<string, string>());
  const photoAbortRef = useRef<AbortController | null>(null);
  const tokenCache = useRef(new Map<string, string>());


  const updateDesign = (patch: Partial<IDCardDesign>) => {
    setDesign(current => ({ ...current, ...patch }));
  };

  useEffect(() => {
    try {
      localStorage.setItem(ID_CARD_STORAGE_KEY, JSON.stringify(design));
    } catch (error) {
      console.warn('Desain ID Card tidak dapat disimpan:', error);
    }
  }, [design]);
  useEffect(() => {
    try {
      localStorage.setItem(ID_CARD_ORIENTATION_STORAGE_KEY, orientation);
    } catch (error) {
      console.warn('Orientasi ID Card tidak dapat disimpan:', error);
    }
  }, [orientation]);

  useEffect(() => {
    if (document.getElementById('pt-id-card-orientation-v1')) return;
    const style = document.createElement('style');
    style.id = 'pt-id-card-orientation-v1';
    style.textContent = `
      .id-card-orientation-switch {
        display:flex ;
        align-items:stretch ;
        overflow:hidden ;
        border:1px solid rgba(214,174,88,.38) ;
        border-radius:12px ;
        background:#172033 ;
        flex:0 0 auto ;
      }
      .id-card-orientation-switch button {
        min-height:42px ;
        padding:0 12px ;
        border:0 ;
        border-radius:0 ;
        background:#172033 ;
        color:#dce6f2 ;
        font-size:12px ;
        font-weight:750 ;
        white-space:nowrap ;
        cursor:pointer ;
      }
      .id-card-orientation-switch button + button { border-left:1px solid rgba(255,255,255,.08) ; }
      .id-card-orientation-switch button.active {
        background:var(--pt-accent,#d6ae58) ;
        color:#08121f ;
      }
      .id-card-module-android {
        width:100% ;
        max-width:100% ;
        min-width:0 ;
        padding:6px 8px 24px ;
        overflow-x:hidden ;
      }
      .id-card-module-android .page-heading {
        display:flex ;
        align-items:flex-start ;
        justify-content:space-between ;
        gap:8px ;
        margin-bottom:10px ;
      }
      .id-card-module-android .page-heading h1 { margin:0 ; font-size:21px ; line-height:1.12 ; }
      .id-card-module-android .page-heading p { margin:4px 0 0 ; font-size:9px ; line-height:1.35 ; color:#9fb3c8 ; }
      .id-card-module-android .page-heading > button { flex:0 0 auto ; min-height:36px ; padding:0 10px ; font-size:10px ; }
      .id-card-module-android .id-card-designer,
      .id-card-module-android .id-card-pratinjau-panel,
      .id-card-module-android .id-card-list {
        backdrop-filter:none ;
        -webkit-backdrop-filter:none ;
        box-shadow:none ;
      }
      .id-card-module-android .id-card-designer { padding:11px ; border-radius:15px ; margin-bottom:9px ; }
      .id-card-module-android .id-card-designer-head { gap:8px ; margin-bottom:10px ; }
      .id-card-module-android .id-card-designer-head b { font-size:13px ; }
      .id-card-module-android .id-card-designer-head small { font-size:9px ; line-height:1.35 ; }
      .id-card-module-android .id-card-designer-grid { grid-template-columns:1fr ; gap:8px ; }
      .id-card-module-android .id-card-designer-grid > label,
      .id-card-module-android .id-card-designer-toggles label { font-size:10px ; }
      .id-card-module-android .id-card-designer-grid > label input,
      .id-card-module-android .id-card-designer-grid > label select { min-height:38px ; font-size:11px ; }
      .id-card-module-android .id-card-theme-pills {
        gap:6px ;
        margin-top:9px ;
        overflow-x:auto ;
        flex-wrap:nowrap ;
        padding-bottom:2px ;
        scrollbar-width:none ;
      }
      .id-card-module-android .id-card-theme-pills::-webkit-scrollbar { display:none ; }
      .id-card-module-android .id-card-theme-pills button { flex:0 0 auto ; padding:7px 9px ; font-size:10px ; }
      .id-card-module-android .id-card-design-meta { margin-top:8px ; padding-top:8px ; font-size:8px ; }
      .id-card-module-android .id-card-toolbar {
        display:grid ;
        grid-template-columns:minmax(0,1fr) minmax(0,1fr) ;
        gap:7px ;
        margin-bottom:9px ;
      }
      .id-card-module-android .id-card-toolbar > input,
      .id-card-module-android .id-card-toolbar > select { min-width:0 ; min-height:38px ; font-size:10px ; }
      .id-card-module-android .id-card-toolbar .side-switch,
      .id-card-module-android .id-card-toolbar .id-card-orientation-switch { min-height:38px ; width:100% ; min-width:0 ; }
      .id-card-module-android .side-switch button,
      .id-card-module-android .id-card-orientation-switch button { min-height:38px ; padding:0 6px ; font-size:9px ; }
      .id-card-module-android .id-card-orientation-switch { display:flex ; }
      .id-card-module-android .id-card-orientation-switch button { flex:1 1 50% ; }
      .id-card-module-android .id-card-layout { display:grid ; grid-template-columns:1fr ; gap:9px ; }
      .id-card-module-android .id-card-pratinjau-panel { min-width:0 ; padding:8px ; border-radius:15px ; }
      .id-card-module-android .id-card-pratinjau { width:100% ; min-height:0 ; padding:2px ; overflow:hidden ; display:flex ; justify-content:center ; }
      .id-card-module-android .id-card-pratinjau svg { display:block ; width:min(100%,430px) ; height:auto ; max-width:100% ; }
      .id-card-module-android .id-card-actions { display:grid ; grid-template-columns:1fr 1fr ; gap:6px ; margin-top:8px ; }
      .id-card-module-android .id-card-actions button { min-height:38px ; padding:0 7px ; font-size:9px ; }
      .id-card-module-android .id-card-note { display:block ; margin-top:8px ; font-size:8px ; line-height:1.4 ; }
      .id-card-module-android .id-card-list { min-width:0 ; max-height:250px ; overflow:auto ; padding:9px ; border-radius:15px ; }
      .id-card-module-android .id-list-head { position:sticky ; top:0 ; z-index:2 ; padding-bottom:8px ; }
      .id-card-module-android .id-employee-row { min-width:0 ; gap:7px ; padding:8px 2px ; }
      .id-card-module-android .id-employee-row b { font-size:10px ; }
      .id-card-module-android .id-employee-row small { font-size:8px ; }
      .id-card-module-android .id-avatar { width:30px ; height:30px ; flex:0 0 30px ; font-size:9px ; }
      @media (max-width:390px) {
        .id-card-module-android { padding-left:6px ; padding-right:6px ; }
        .id-card-module-android .page-heading > button { font-size:9px ; padding-left:8px ; padding-right:8px ; }
        .id-card-module-android .id-card-actions button { font-size:8px ; }
      }
    `;
    document.head.appendChild(style);
  }, []);


  const filtered = useMemo(
    () => eligibleEmployees.filter(e => `${e.nama} ${e.id_karyawan || ''} ${e.jabatan || ''}`.toLowerCase().includes(query.toLowerCase())),
    [eligibleEmployees, query]
  );

  const employee = eligibleEmployees.find(e => e.id === selectedId) || filtered[0] || eligibleEmployees[0];

  useEffect(() => {
    if (employee?.id && !selectedId) setSelectedId(employee.id);
  }, [employee?.id, selectedId]);

  useEffect(() => {
    let cancelled = false;
    const photo = employee?.foto_url || employee?.foto || employee?.photo_url || '';
    const employeeId = employee?.id || '';

    photoAbortRef.current?.abort();
    photoAbortRef.current = null;

    if (!employeeId || !photo) {
      setPhotoDataUrl('');
      setPhotoEmployeeId('');
      return;
    }

    const cached = photoCache.current.get(photo);
    if (cached) {
      setPhotoDataUrl(cached);
      setPhotoEmployeeId(employeeId);
      return;
    }

    const toDataUrl = (blob: Blob) =>
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () =>
          typeof reader.result === 'string'
            ? resolve(reader.result)
            : reject(new Error('Gagal membaca foto'));
        reader.onerror = () => reject(new Error('Gagal membaca foto'));
        reader.readAsDataURL(blob);
      });

    const loadPhoto = async () => {
      const controller = new AbortController();
      photoAbortRef.current = controller;

      try {
        let source = photo;
        const isRemote = /^(?:https?:\/\/|data:image\/|blob:|\/)/i.test(photo);

        if (!isRemote) {
          const { data, error } = await supabase.storage
            .from('profile-photos')
            .createSignedUrl(photo, 900);
          if (error || !data?.signedUrl) {
            throw error || new Error('Signed URL foto gagal');
          }
          source = data.signedUrl;
        }

        const response = await fetch(source, { signal: controller.signal });
        if (!response.ok) throw new Error('Fetch foto gagal');

        const dataUrl = await toDataUrl(await response.blob());
        photoCache.current.set(photo, dataUrl);

        if (!cancelled) {
          setPhotoDataUrl(dataUrl);
          setPhotoEmployeeId(employeeId);
        }
      } catch (error) {
        if (!cancelled && !(error instanceof DOMException && error.name === 'AbortError')) {
          console.error('Fetch foto ID Card gagal:', error);
          setPhotoDataUrl('');
          setPhotoEmployeeId(employeeId);
        }
      }

    };

    void loadPhoto();

    return () => {
      cancelled = true;
      // Abort only the request that belongs to this selection.
      if (photoAbortRef.current) {
        photoAbortRef.current.abort();
        photoAbortRef.current = null;
      }
    };
  }, [employee?.id, employee?.foto_url, employee?.foto, employee?.photo_url]);

  const ensureVerificationToken = async (employeeId: string) => {
    const emp = eligibleEmployees.find(e => e.id === employeeId);
    if (!emp) throw new Error('Karyawan tidak ditemukan.');
    const id = safeId(emp);
    const cached = tokenCache.current.get(id);
    if (cached) return cached;
    const { data, error } = await supabase.rpc('ensure_id_card_verification_token', { p_id_karyawan: id });
    if (error) throw error;
    const next = String(data || '').trim();
    if (!next) throw new Error('Token verifikasi tidak berhasil dibuat.');
    tokenCache.current.set(id, next);
    return next;
  };

  useEffect(() => {
    let cancelled = false;
    const currentEmployeeId = employee?.id || '';

    // Never let the previous employee's QR token be rendered on the new card.
    setToken('');
    setTokenLoading(Boolean(employee));
    setActionError('');

    const loadToken = async () => {
      if (!employee) return;

      try {
        const next = await ensureVerificationToken(employee.id);
        if (!cancelled) setToken(next);
      } catch (error) {
        console.error('Token QR ID Card gagal:', error);
        if (!cancelled) {
          setToken('');
          setActionError(
            error instanceof Error
              ? error.message
              : 'Token verifikasi gagal dibuat.'
          );
        }
      } finally {
        if (!cancelled) setTokenLoading(false);
      }
    };

    void loadToken();
    return () => {
      cancelled = true;
      // currentEmployeeId intentionally captures the selection for this effect.
      void currentEmployeeId;
    };
  }, [employee?.id, employee?.id_karyawan]);

  const resetDesign = () => {
    const next = DEFAULT_DESIGN(companyName);
    setDesign(next);
    setActionError('');
  };

  const unduhSvg = () => {
    if (!employee) return;
    if (!token && design.showQr) {
      setActionError('Tunggu sampai QR verifikasi selesai dibuat.');
      return;
    }
    const svg = CardArtwork({ employee, side, design, logoUrl, photoOverride: activePhotoDataUrl, verificationToken: token, orientation });
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ID-CARD-${safeId(employee)}-${orientation}-${side}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const unduhPng = async () => {
    if (!employee) return;
    if (!token && design.showQr) {
      setActionError('Tunggu sampai QR verifikasi selesai dibuat.');
      return;
    }
    const exportSvg = CardArtwork({ employee, side, design, logoUrl, photoOverride: activePhotoDataUrl, verificationToken: token, orientation });
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = orientation === 'vertical' ? 1080 : 1712;
      canvas.height = orientation === 'vertical' ? 1712 : 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(blob => {
        if (!blob) return;
        const u = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = u;
        a.download = `ID-CARD-${safeId(employee)}-${orientation}-${side}.png`;
        a.click();
        URL.revokeObjectURL(u);
      }, 'image/png');
    };
    img.onerror = () => setActionError('Gagal merender ID Card menjadi PNG.');
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(exportSvg)}`;
  };

  const getPhotoDataUrl = async (photoUrl: string): Promise<string> => {
    if (!photoUrl) return '';
    try {
      const response = await fetch(photoUrl);
      if (!response.ok) throw new Error('Foto tidak dapat diambil');
      const blob = await response.blob();
      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Gagal mengubah foto'));
        reader.onerror = () => reject(new Error('Gagal membaca foto'));
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Gagal memuat foto untuk cetak:', error);
      return '';
    }
  };

  const cetakCards = async (ids: string[]) => {
    const list = eligibleEmployees.filter(e => ids.includes(e.id));
    if (!list.length) return;
    setActionError('');
    const win = window.open('', '_blank', 'width=1000,height=800');
    if (!win) {
      setActionError('Pop-up diblokir. Izinkan pop-up untuk mencetak ID Card.');
      return;
    }

    win.document.write(`<!doctype html><html><head><title>ID Card ${escapeXml(design.companyName)}</title><style>@page{size:A4 portrait;margin:0}*{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff}.cetak-card{width:210mm;height:297mm;display:flex;align-items:center;justify-content:center;break-after:page;page-break-after:always;overflow:hidden}.cetak-card:last-child{break-after:auto;page-break-after:auto}.cetak-card img{display:block;width:${orientation === 'vertical' ? '54mm' : '85.6mm'};height:${orientation === 'vertical' ? '85.6mm' : '54mm'};object-fit:contain}</style></head><body>`);

    try {
      for (const item of list) {
        const itemToken = design.showQr ? await ensureVerificationToken(item.id) : '';
        const photoUrl = item.foto_url || item.foto || item.photo_url || '';
        const employeePhotoDataUrl = item.id === employee?.id && photoDataUrl ? photoDataUrl : await getPhotoDataUrl(photoUrl);
        const frontSvg = CardArtwork({ employee: item, side: 'front', design, logoUrl, photoOverride: employeePhotoDataUrl, verificationToken: itemToken, orientation });
        const backSvg = CardArtwork({ employee: item, side: 'back', design, logoUrl, photoOverride: employeePhotoDataUrl, verificationToken: itemToken, orientation });
        const frontSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(frontSvg)}`;
        const backSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(backSvg)}`;
        win.document.write(`<div class="cetak-card"><img src="${frontSrc}" alt="ID Card Depan" /></div><div class="cetak-card"><img src="${backSrc}" alt="ID Card Belakang" /></div>`);
      }
      win.document.write('</body></html>');
      win.document.close();
      setTimeout(() => { win.focus(); win.print(); }, 700);
    } catch (error) {
      win.close();
      setActionError(error instanceof Error ? error.message : 'Gagal menyiapkan cetak ID Card.');
    }
  };

  const cetakCurrent = () => { if (employee) void cetakCards([employee.id]); };
  const unduhPdf = () => { if (employee) void cetakCards([employee.id]); };
  const toggleBatch = useCallback(
    (id: string) =>
      setSelectedBatch(v =>
        v.includes(id) ? v.filter(x => x !== id) : [...v, id]
      ),
    []
  );

  // Expensive SVG/QR/barcode generation is memoized. Switching unrelated UI
  // state no longer rebuilds the entire ID card artwork.
  const activePhotoDataUrl = employee && photoEmployeeId === employee.id ? photoDataUrl : '';
  const svg = useMemo(
    () =>
      employee
        ? CardArtwork({
            employee,
            side,
            design,
            logoUrl,
            photoOverride: activePhotoDataUrl,
            verificationToken: token, orientation,
          })
        : '',
    [
      employee,
      side,
      design,
      logoUrl,
      activePhotoDataUrl,
      token,
      orientation,
    ]
  );
  const currentTheme = ID_CARD_DESIGN_THEMES[design.theme];

  if (!employee) return <div className="id-card-empty-state" role="status"><p>{t('no_employee_for_id_card')}</p></div>;

  return (
    <div className={`id-card-module ${orientation === "vertical" ? "id-card-module-vertical" : "id-card-module-horizontal"}${isAndroidApp ? " id-card-module-android" : ""}`}>
      <div className="page-heading">
        <div><h1>{t('employee_id_card')}</h1><p>{t('id_card_desc')}</p></div>
        <button className="primary" onClick={cetakCurrent}>🖨️ Cetak Kartu</button>
      </div>

      {actionError && <div className="id-card-alert" role="alert">{actionError}</div>}

      <div className="id-card-designer">
        <div className="id-card-designer-head">
          <div><b>Designer ID Card</b><small>Ubah logo, nama perusahaan, tema, QR verifikasi, dan barcode. Perubahan tersimpan di perangkat ini.</small></div>
          <button type="button" className="secondary" onClick={resetDesign}>Reset desain</button>
        </div>
        <div className="id-card-designer-grid">
          <label><span>Nama perusahaan</span><input value={design.companyName} onChange={e => updateDesign({ companyName: e.target.value.slice(0, 60) })} maxLength={60} /></label>
          <label><span>Logo</span><input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={async e => { const file = e.target.files?.[0]; if (!file) return; try { updateDesign({ logoDataUrl: await imageFromFile(file) }); setActionError(''); } catch (error) { setActionError(error instanceof Error ? error.message : 'Logo gagal diproses.'); } }} /></label>
          <label><span>Tema ID Card</span><select value={design.theme} onChange={e => updateDesign({ theme: e.target.value as IDCardDesignTheme })}>{Object.entries(ID_CARD_DESIGN_THEMES).map(([id, item]) => <option key={id} value={id}>{item.label}</option>)}</select></label>
          <div className="id-card-designer-toggles">
            <label><input type="checkbox" checked={design.showQr} onChange={e => updateDesign({ showQr: e.target.checked })} /> Tampilkan QR</label>
            <label><input type="checkbox" checked={design.showBarcode} onChange={e => updateDesign({ showBarcode: e.target.checked })} /> Tampilkan Code 128</label>
          </div>
        </div>
        <div className="id-card-theme-pills">{Object.entries(ID_CARD_DESIGN_THEMES).map(([id, item]) => <button key={id} type="button" className={design.theme === id ? 'active' : ''} onClick={() => updateDesign({ theme: id as IDCardDesignTheme })}><span style={{ background: item.palette.accent }} />{item.label}</button>)}</div>
        <div className="id-card-design-meta"><span>Warna aktif: <b style={{ color: currentTheme.palette.accent }}>{currentTheme.label}</b></span><span>{tokenLoading ? 'QR: menyiapkan token…' : design.showQr ? 'QR: siap diverifikasi' : 'QR: nonaktif'}</span></div>
      </div>

      <div className="id-card-toolbar">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t('search_employee_id')} />
        <select value={selectedId} onChange={e => setSelectedId(e.target.value)}>{filtered.map(e => <option key={e.id} value={e.id}>{e.nama} — {safeId(e)}</option>)}</select>
        <div className="id-card-orientation-switch" aria-label="Pilih orientasi ID Card">
          <button type="button" className={orientation === 'vertical' ? 'active' : ''} onClick={() => setOrientation('vertical')}>↕️ Vertikal</button>
          <button type="button" className={orientation === 'horizontal' ? 'active' : ''} onClick={() => setOrientation('horizontal')}>↔️ Horizontal</button>
        </div>
        <div className="side-switch"><button type="button" className={side === 'front' ? 'active' : ''} onClick={() => setSide('front')}>{t('front')}</button><button type="button" className={side === 'back' ? 'active' : ''} onClick={() => setSide('back')}>{t('back')}</button></div>
      </div>

      <div className="id-card-layout">
        <div className="id-card-pratinjau-panel panel" ref={cardRef}>
          <div className="id-card-pratinjau" dangerouslySetInnerHTML={{ __html: svg }} />
          <div className="id-card-actions"><button type="button" className="secondary" onClick={unduhPng}>⬇️ PNG</button><button type="button" className="secondary" onClick={unduhSvg}>⬇️ SVG</button><button type="button" className="primary" onClick={unduhPdf}>⬇️ Cetak/PDF — Depan + Belakang</button><button type="button" className="primary" onClick={cetakCurrent}>🖨️ Cetak — Depan + Belakang</button></div>
          <small className="id-card-note">Format aktif: <b>{orientation === 'vertical' ? 'Vertikal 54 × 85,6 mm' : 'Horizontal 85,6 × 54 mm'}</b>. {t('id_card_print_note')}</small>
        </div>
        <div className="id-card-list"><div className="id-list-head"><div><b>{t('select_batch_print')}</b><small>{selectedBatch.length} karyawan dipilih</small></div><button className="link-btn" onClick={() => setSelectedBatch(filtered.map(e => e.id))}>{t('select_all')}</button></div>{filtered.map(e => (
  <EmployeeBatchRow
    key={e.id}
    employee={e}
    checked={selectedBatch.includes(e.id)}
    onToggle={toggleBatch}
  />
))}</div>
      </div>
    </div>
  );
}
