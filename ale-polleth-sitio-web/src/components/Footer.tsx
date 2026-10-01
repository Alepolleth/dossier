import { Instagram, Mail, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center bg-bg-deep border-t border-white/[0.05]">
      <div className="reveal">
        <p className="font-serif text-xl tracking-[2px] uppercase text-rose mb-4">
          Ale Polleth
        </p>

        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/alepolleth?stkn=MWEzaDRsOXBtNXZ1MQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-muted hover:text-rose transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@alepolleth/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-muted hover:text-rose transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="mailto:alexandrapollethm@gmail.com"
            className="text-cream-muted hover:text-rose transition-colors"
            aria-label="Correo"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-cream-muted text-xs tracking-[1px] flex items-center justify-center gap-1.5">
          © 2026 • Hecho con
          <Heart className="w-3 h-3 text-rose fill-rose" />
          • Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
