import { Check } from 'lucide-react';
import wesley from '../assets/images/wesley.webp';
import { SERVICE_AREA, whatsappLink } from '../lib/contact';
import Button from './ui/Button';
import Divider from './ui/Divider';
import Reveal from './ui/Reveal';

const points = ['Atendimento direto com o responsável', `Atendemos ${SERVICE_AREA}`, 'Residências, comércios e propriedades rurais'];

export default function About() {
  return (
    <section id="sobre" className="section about has-divider">
      <div className="container about__grid">
        <Reveal variant="zoom" className="about__visual">
          <div className="about__backdrop" aria-hidden="true">
            <span className="about__orbit" />
          </div>
          <img src={wesley} alt="Wesley, proprietário da New Clean" className="about__photo" loading="lazy" />
          <div className="about__badge">
            <strong>Wesley</strong>
            <span>Proprietário · New Clean</span>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={120}>
          <span className="eyebrow">Quem cuida do seu sistema</span>
          <h2 className="heading__title">Conheça o Wesley</h2>
          <p className="about__text">
            À frente da New Clean, o Wesley acompanha cada atendimento de perto, do primeiro contato até a entrega
            do serviço, para que suas placas fiquem limpas, seguras e gerando o máximo de energia.
          </p>
          <ul className="about__points">
            {points.map((p) => (
              <li key={p}>
                <Check size={16} strokeWidth={2.6} /> {p}
              </li>
            ))}
          </ul>
          <Button href={whatsappLink('Olá, Wesley! Vim pelo site da New Clean e gostaria de um orçamento.')} icon="whatsapp">
            Falar com o Wesley
          </Button>
        </Reveal>
      </div>
      <Divider variant="sun" color="#050f2e" />
    </section>
  );
}
