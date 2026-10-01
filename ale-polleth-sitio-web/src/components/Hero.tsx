import { ChevronDown } from 'lucide-react';
import { heroImage } from '@/data/content';

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#biografia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[540px] flex flex-col justify-end items-center text-center px-6 pb-16 pt-32 overflow-hidden"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ale Polleth"
          className="w-full h-full object-cover"
          style={{ objectPosition: '45% 22%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 w-24 h-24 rounded-full bg-rose/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-6 w-32 h-32 rounded-full bg-gold/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p
          className="text-rose text-xs tracking-[4px] uppercase font-medium mb-4 animate-fade-in"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Coquimbo, Chile
        </p>
        <h1
          className="font-serif text-5xl text-white font-normal leading-[1.1] mb-3 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Ale Polleth
        </h1>
        <p
          className="text-rose text-sm tracking-[3px] uppercase font-medium mb-8 animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          Artista &amp; Cantante
        </p>
        <button
          onClick={() => {
            const el = document.querySelector('#contacto');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative inline-flex items-center gap-2 bg-gradient-to-br from-[#2c2520] to-[#1f1a17] text-cream border border-gold/60 px-7 py-3.5 rounded-full text-xs uppercase tracking-[2px] font-medium shadow-lg transition-all duration-300 hover:bg-gold hover:text-bg hover:-translate-y-0.5 animate-fade-up"
          style={{ animationDelay: '0.9s', opacity: 0 }}
        >
          Contacto Directo
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream-muted/60 hover:text-rose transition-colors"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
