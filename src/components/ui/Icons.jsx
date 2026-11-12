import {
  Camera,
  Clock,
  Droplets,
  HardHat,
  ShieldCheck,
  Sparkles,
  Sun,
  Wallet,
  Wrench,
  Zap,
} from 'lucide-react';

const map = {
  camera: Camera,
  clock: Clock,
  droplets: Droplets,
  hardhat: HardHat,
  shield: ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  wallet: Wallet,
  wrench: Wrench,
  zap: Zap,
};

/** Resolve um ícone Lucide pelo nome usado em data/content.js. */
export function Icon({ name, size = 22, ...rest }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp size={size} strokeWidth={1.8} aria-hidden="true" {...rest} />;
}

// Marcas (o Lucide não inclui logotipos oficiais atualizados).
export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06a6.7 6.7 0 0 1-1.99-1.23 7.46 7.46 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ThreadsIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 11.1c-.1 0-.2-.1-.3-.1-.2-3-1.8-4.7-4.6-4.7h-.1c-1.6 0-3 .7-3.9 2l1.6 1.1c.6-1 1.6-1.2 2.3-1.2 1 0 1.7.3 2.2.9.3.4.5 1 .6 1.7-.8-.1-1.6-.2-2.5-.1-2.5.1-4.1 1.6-4 3.6.1 1 .6 1.9 1.4 2.4.7.5 1.6.7 2.6.6 1.3-.1 2.3-.6 3-1.5.5-.7.9-1.6 1-2.7.6.4 1.1.8 1.3 1.4.5 1 .5 2.7-.9 4.1-1.2 1.2-2.7 1.8-4.9 1.8-2.5 0-4.3-.8-5.5-2.3-1.1-1.4-1.7-3.4-1.7-6s.6-4.6 1.7-6c1.2-1.5 3-2.3 5.5-2.3s4.3.8 5.5 2.3c.6.7 1 1.7 1.3 2.7l1.9-.5c-.4-1.3-.9-2.4-1.7-3.4-1.6-2-3.9-3-6.9-3-3 0-5.4 1-6.9 3C3.8 7.6 3 10 3 12.5s.8 4.9 2.4 6.7c1.6 2 3.9 3 6.9 3 2.6 0 4.5-.7 6-2.2 2-2 2-4.6 1.3-6.2-.5-1.1-1.5-2.1-2.9-2.7Zm-4.3 4.7c-1.1.1-2.2-.4-2.3-1.4 0-.8.5-1.6 2.3-1.7h.7c.6 0 1.2.1 1.7.2-.2 2.4-1.3 2.8-2.4 2.9Z" />
    </svg>
  );
}
