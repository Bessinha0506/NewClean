import { useEffect, useState } from 'react';
import { whatsappLink } from '../lib/contact';
import { WhatsAppIcon } from './ui/Icons';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${visible ? 'is-visible' : ''}`}
      aria-label="Fale com a New Clean no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
