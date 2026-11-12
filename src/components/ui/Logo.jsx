import { useId } from 'react';

/* Emblema New Clean: gota d'água + painel solar + órbita laranja + bolhas. */
export function LogoMark({ size = 44 }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="logo-mark">
      <defs>
        <linearGradient id={`pn-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d4fd8" />
          <stop offset="1" stopColor="#16308f" />
        </linearGradient>
        <linearGradient id={`dr-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fd0f7" />
          <stop offset="1" stopColor="#1a9ee3" />
        </linearGradient>
        <linearGradient id={`or-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#f6a531" />
          <stop offset="1" stopColor="#ee8a12" />
        </linearGradient>
      </defs>
      {/* painel */}
      <g transform="rotate(38 39 35)">
        <rect x="26" y="22" width="27" height="27" rx="3.2" fill={`url(#pn-${id})`} />
        <path d="M39.5 22V49M26 35.5H53" stroke="#fff" strokeWidth="1.5" />
        <circle cx="39.5" cy="35.5" r="1.7" fill="#fff" />
        <circle cx="39.5" cy="28.5" r="1" fill="#fff" />
        <circle cx="32.8" cy="35.5" r="1" fill="#fff" />
        <circle cx="46.2" cy="35.5" r="1" fill="#fff" />
        <circle cx="39.5" cy="42.3" r="1" fill="#fff" />
      </g>
      {/* gota */}
      <path
        d="M22 6c5.4 7 10.8 13.8 10.8 20.2a10.8 10.8 0 0 1-21.6 0C11.2 19.8 16.6 13 22 6z"
        fill={`url(#dr-${id})`}
        stroke="#fff"
        strokeWidth="1.6"
      />
      <path d="M16 25.6a6.2 6.2 0 0 0 3.8 6" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".9" />
      {/* bolhas */}
      <g fill="none" stroke="#5fd0f7">
        <circle cx="33" cy="12.4" r="2.7" strokeWidth="1.1" />
        <circle cx="37.8" cy="7.4" r="2" strokeWidth="1" />
        <circle cx="41.6" cy="10.8" r="1.6" strokeWidth=".9" />
      </g>
      <circle cx="35.6" cy="14.6" r=".8" fill="#5fd0f7" />
      {/* órbita */}
      <path
        d="M2 54C19 58 45 47 57 28c3.4-5.4 2-9.6-4.2-10 3.4 1.8 2.8 5.2-.6 9.6C40 42 21 51 2 54z"
        fill={`url(#or-${id})`}
      />
    </svg>
  );
}

/* Letreiro "NEW CLEAN" desenhado em traço (mesmo estilo largo do logotipo original,
   com o "A" sem travessão) + slogan em Michroma ajustado à mesma largura. */
const WORD_W = 1086;
const WORD_PATH =
  'M10,-5V105 M102,-5V105 M2,-4L110,104 M234,10H172A26,26 0 0 0 146,36V64A26,26 0 0 0 172,90H234 M146,50H228 M261,-6L296.48,106L332,-6L367.52,106L403,-6 M574,10H502A26,26 0 0 0 476,36V64A26,26 0 0 0 502,90H574 M608,-5V64A26,26 0 0 0 634,90H688 M810,10H748A26,26 0 0 0 722,36V64A26,26 0 0 0 748,90H810 M722,50H804 M835,110L892,10L949,110 M984,-5V105 M1076,-5V105 M976,-4L1084,104';

function Wordmark({ height }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      className="logo__word"
      height={height}
      width={(height * WORD_W) / 160}
      viewBox={`0 0 ${WORD_W} 160`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`cap-${id}`}>
          <rect width={WORD_W} height="100" />
        </clipPath>
      </defs>
      <path
        d={WORD_PATH}
        clipPath={`url(#cap-${id})`}
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeMiterlimit="10"
      />
      <text
        className="logo__tag"
        x="0"
        y="146"
        textLength={WORD_W}
        lengthAdjust="spacing"
        fontSize="38"
        strokeWidth="1.6"
      >
        HIGIENIZAÇÃO DE PLACAS SOLARES
      </text>
    </svg>
  );
}

export default function Logo({ tone = 'dark', size = 42 }) {
  return (
    <span className={`logo logo--${tone}`} role="img" aria-label="New Clean — higienização de placas solares">
      <LogoMark size={size} />
      <Wordmark height={Math.round(size * 0.62)} />
    </span>
  );
}
