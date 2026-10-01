import { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Biografía', href: '#biografia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Anécdotas', href: '#anecdotas' },
  { label: 'Repertorio', href: '#repertorio' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[480px] transition-all duration-500 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex items-center justify-between px-6">
        <button
          onClick={() => handleNavClick('#inicio')}
          className="font-serif text-lg tracking-[2px] uppercase text-cream flex items-center gap-2 group"
        >
          <Music2 className="w-4 h-4 text-rose transition-transform group-hover:rotate-12" />
          Ale <span className="text-rose">Polleth</span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-cream p-1 transition-colors hover:text-rose"
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pt-4 pb-6 flex flex-col gap-1 bg-bg-deep/98 backdrop-blur-md">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left py-3 px-4 rounded-lg text-sm uppercase tracking-[2px] text-cream-muted hover:text-rose hover:bg-white/[0.03] transition-all duration-300"
              style={{
                animation: menuOpen ? `slideInLeft 0.4s ease-out ${i * 0.08}s both` : undefined,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
