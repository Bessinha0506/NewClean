import { MapPin } from 'lucide-react';
import { INSTAGRAM_URL, PHONE_DISPLAY, SERVICE_AREA, whatsappLink } from '../lib/contact';
import { InstagramIcon, WhatsAppIcon } from './ui/Icons';
import Logo from './ui/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo tone="light" size={44} />
        <ul className="footer__contact">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} /> {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={16} /> @newclean.solar
            </a>
          </li>
          <li>
            <span>
              <MapPin size={16} /> {SERVICE_AREA}
            </span>
          </li>
        </ul>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} New Clean · Higienização de Placas Solares
      </div>
    </footer>
  );
}
