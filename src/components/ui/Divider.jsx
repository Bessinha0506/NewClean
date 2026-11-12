/**
 * Divisores temáticos entre seções. Ficam na base da seção e são preenchidos
 * com a cor da seção seguinte.
 *
 * - wave:  ondas de água (limpeza), com uma segunda camada translúcida
 * - sun:   arco de horizonte com a "órbita" laranja do logotipo
 * - drops: onda com gotas d'água subindo
 */
const shapes = {
  wave: {
    back: 'M0,46 C180,96 360,6 600,40 C840,74 1020,10 1220,34 C1320,46 1390,58 1440,52 L1440,120 L0,120 Z',
    front: 'M0,74 C200,118 420,30 680,66 C920,100 1140,40 1440,80 L1440,120 L0,120 Z',
  },
  sun: {
    front: 'M0,120 L0,104 Q720,-30 1440,104 L1440,120 Z',
    accent: 'M-20,96 Q720,-48 1460,96',
  },
  drops: {
    front: 'M0,86 C160,60 320,60 480,80 C640,100 800,104 960,82 C1120,60 1280,58 1440,78 L1440,120 L0,120 Z',
  },
};

export default function Divider({ variant = 'wave', color = '#fff', back, backOpacity = 1, flip = false, className = '' }) {
  const s = shapes[variant];
  return (
    <div className={`divider divider--${variant} ${flip ? 'divider--flip' : ''} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        {s.back && <path d={s.back} fill={back || color} opacity={back ? backOpacity : 0.45} />}
        <path d={s.front} fill={color} />
        {s.accent && <path d={s.accent} fill="none" className="divider__accent" vectorEffect="non-scaling-stroke" />}
      </svg>
      {variant === 'drops' && (
        <div className="divider__drops">
          {[12, 27, 44, 61, 78, 90].map((left, i) => (
            <span key={left} style={{ left: `${left}%`, '--i': i, background: color }} />
          ))}
        </div>
      )}
    </div>
  );
}
