import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../data/content';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="duvidas" className="section faq">
      <div className="container faq__inner">
        <SectionHeading align="center" eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="accordion">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} className={`acc ${isOpen ? 'is-open' : ''}`} delay={i * 60}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className="acc__icon" aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="acc__panel">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
