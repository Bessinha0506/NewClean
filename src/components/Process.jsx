import { steps } from '../data/content';
import Divider from './ui/Divider';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Process() {
  return (
    <section id="processo" className="section process has-divider">
      <div className="container">
        <SectionHeading align="center" eyebrow="Como funciona" title="Simples assim" />
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 100}>
              <span className="step__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
      <Divider variant="wave" color="#f3f6fc" back="#bfe6fb" backOpacity={0.6} />
    </section>
  );
}
