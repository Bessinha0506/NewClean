import { MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';
import { SERVICE_AREA, whatsappLink } from '../lib/contact';
import Button from './ui/Button';
import Divider from './ui/Divider';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        src={heroImage}
        alt="Profissionais limpando placas solares com escova rotativa"
        className="hero__img"
        fetchPriority="high"
      />
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <span className="hero__eyebrow anim-in" style={{ '--d': '80ms' }}>
          <MapPin size={14} /> {SERVICE_AREA}
        </span>

        <h1 className="hero__title anim-in" style={{ '--d': '180ms' }}>
          Placas limpas,
          <br />
          <span className="text-gradient">mais energia.</span>
        </h1>

        <p className="hero__text anim-in" style={{ '--d': '300ms' }}>
          Limpeza, instalação e manutenção de placas solares com segurança e cuidado.
        </p>

        <div className="hero__actions anim-in" style={{ '--d': '420ms' }}>
          <Button href={whatsappLink()} icon="whatsapp" size="lg">
            Pedir orçamento
          </Button>
          <Button href="#servicos" variant="ghost" size="lg">
            Ver serviços
          </Button>
        </div>
      </div>
      <Divider variant="wave" color="#ffffff" back="#38bdf8" backOpacity={0.55} />
    </section>
  );
}
