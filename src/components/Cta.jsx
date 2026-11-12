import bg from '../assets/images/panels-sky.jpg';
import { INSTAGRAM_URL, PHONE_DISPLAY, whatsappLink } from '../lib/contact';
import Button from './ui/Button';
import Divider from './ui/Divider';
import { InstagramIcon } from './ui/Icons';
import Reveal from './ui/Reveal';

export default function Cta() {
  return (
    <section id="contato" className="section cta-section has-divider">
      <div className="container">
        <Reveal className="cta">
          <img src={bg} alt="" className="cta__bg" loading="lazy" />
          <div className="cta__shade" aria-hidden="true" />
          <h2>
            Vamos deixar suas placas <span className="text-gradient">como novas?</span>
          </h2>
          <p>Chame no WhatsApp e receba seu orçamento sem compromisso.</p>
          <div className="cta__actions">
            <Button href={whatsappLink()} icon="whatsapp" size="lg">
              {PHONE_DISPLAY}
            </Button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="cta__insta">
              <InstagramIcon size={18} /> @newclean.solar
            </a>
          </div>
        </Reveal>
      </div>
      <Divider variant="wave" color="#050f2e" back="#f7931e" flip />
    </section>
  );
}
