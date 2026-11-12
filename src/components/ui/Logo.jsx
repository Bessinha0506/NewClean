import { useId } from 'react';

/** Emblema New Clean: gota d'água + painel solar + órbita laranja. */
export function LogoMark({ size = 44 }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <defs>
        <linearGradient id={`panel-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#13308f" />
        </linearGradient>
        <linearGradient id={`drop-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* órbita */}
      <path
        d="M9 45C4 33 16 18 34 14c11-2.4 19 .6 21 6.4"
        fill="none"
        stroke="#f7931e"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path d="M55 20.4c1.8 6.6-6 15.6-19 21.4" fill="none" stroke="#f7931e" strokeWidth="2.4" strokeLinecap="round" opacity=".55" />
      {/* painel */}
      <path d="M20 29.5 43.5 25l7 20.5L25 51z" fill={`url(#panel-${id})`} stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M31.6 27.3 37.5 48.2M22.4 36.6l24.6-4.7M23.4 44.2l25.6-4.6" stroke="#fff" strokeWidth="1.3" opacity=".9" />
      {/* suporte */}
      <path d="M33 51l-2 7h8l-2.6-7.6" fill="#0b1d52" />
      {/* gota */}
      <path d="M19 6c3.6 4.6 7 9.2 7 13a7 7 0 0 1-14 0c0-3.8 3.4-8.4 7-13z" fill={`url(#drop-${id})`} />
      <path d="M16.4 18.5a3 3 0 0 0 2.6 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".85" />
      <circle cx="29" cy="7" r="2.2" fill="none" stroke="#7dd3fc" strokeWidth="1.2" />
      <circle cx="31.6" cy="12" r="1.3" fill="none" stroke="#7dd3fc" strokeWidth="1" />
    </svg>
  );
}

export default function Logo({ tone = 'dark', size = 42 }) {
  return (
    <span className={`logo logo--${tone}`}>
      <LogoMark size={size} />
      <span className="logo__text">
        <span className="logo__name">
          NEW <b>CLEAN</b>
        </span>
        <span className="logo__tag">Higienização de placas solares</span>
      </span>
    </span>
  );
}
