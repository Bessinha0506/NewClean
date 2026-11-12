import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

/**
 * variant: primary (laranja) | light (branco) | ghost (contorno claro) | dark (azul)
 * icon: 'arrow' | 'whatsapp' | null
 */
export default function Button({ href = '#', variant = 'primary', icon = 'arrow', size = 'md', external, children, className = '', ...rest }) {
  const ext = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon === 'whatsapp' && (
        <span className="btn__lead" aria-hidden="true">
          <WhatsAppIcon size={18} />
        </span>
      )}
      <span>{children}</span>
      {icon === 'arrow' && (
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </span>
      )}
    </a>
  );
}
