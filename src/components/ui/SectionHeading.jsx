import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'dark', children }) {
  return (
    <Reveal className={`heading heading--${align} heading--${tone}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading__title">{title}</h2>
      {text && <p className="heading__text">{text}</p>}
      {children}
    </Reveal>
  );
}
