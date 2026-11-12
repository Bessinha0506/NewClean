import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';
import { whatsappLink } from '../lib/contact';
import { Icon } from './ui/Icons';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <SectionHeading align="center" eyebrow="Serviços" title="O que fazemos" />

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal as="article" key={s.id} className="service" delay={i * 100}>
              <div className="service__media">
                <img src={s.image} alt="" loading="lazy" />
              </div>
              <div className="service__body">
                <span className="service__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href={whatsappLink(s.message)} target="_blank" rel="noopener noreferrer" className="service__link">
                  Pedir orçamento <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
