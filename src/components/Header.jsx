import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import { whatsappLink } from '../lib/contact';
import Button from './ui/Button';
import Logo from './ui/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header className={`header ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" aria-label="New Clean — início" onClick={close}>
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        <nav className="nav" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <Button href={whatsappLink()} icon="whatsapp" size="sm" className="header__cta">
          Fale conosco
        </Button>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="menu-mobile" className="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Menu mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
              {l.label}
            </a>
          ))}
        </nav>
        <Button href={whatsappLink()} icon="whatsapp" onClick={close} tabIndex={open ? 0 : -1}>
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
