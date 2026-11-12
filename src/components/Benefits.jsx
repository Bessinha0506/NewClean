import { benefits } from '../data/content';
import Divider from './ui/Divider';
import { Icon } from './ui/Icons';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Benefits() {
  return (
    <section className="section benefits has-divider">
      <div className="container">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Por que limpar"
          title={
            <>
              Sujeira nas placas é <span className="text-gradient">energia perdida</span>
            </>
          }
        />
        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <Reveal key={b.title} className="benefit" delay={i * 100}>
              <span className="benefit__icon">
                <Icon name={b.icon} size={26} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Divider variant="drops" color="#ffffff" />
    </section>
  );
}
