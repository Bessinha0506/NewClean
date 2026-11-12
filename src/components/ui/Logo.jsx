import logoDark from '../../assets/images/logo.webp';
import logoLight from '../../assets/images/logo-light.webp';

/** Logotipo New Clean na horizontal: emblema à esquerda, nome e slogan ao lado.
 *  Feito a partir do logotipo original; a versão "light" tem o nome em branco
 *  para fundos escuros. */
export default function Logo({ tone = 'dark', size = 42 }) {
  const height = Math.round(size * 1.1);
  return (
    <span className={`logo logo--${tone}`}>
      <img
        src={tone === 'light' ? logoLight : logoDark}
        alt="New Clean — higienização de placas solares"
        height={height}
        width={Math.round((height * 1071) / 180)}
        className="logo__img"
      />
    </span>
  );
}
