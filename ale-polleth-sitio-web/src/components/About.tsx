import { aboutImage } from '@/data/content';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="biografia" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-3 h-3 text-rose" />
          <p className="text-xs tracking-[3px] uppercase text-rose font-semibold">
            Explora mi Trayectoria
          </p>
          <Sparkles className="w-3 h-3 text-rose" />
        </div>
        <h2 className="font-serif text-3xl mb-8 text-cream font-normal">Acerca de Mí</h2>
      </div>

      <div className="reveal reveal-delay-1 max-w-md mx-auto">
        <p className="text-cream-muted text-[0.95rem] leading-[1.8] font-light text-justify mb-8">
          Mi nombre es Alexandra Méndez, nacida en la ciudad de Coquimbo, IV región (Chile) el año
          2003. Cantando desde un zigzag frente al puerto, como también en un escenario. La vida me
          ha llenado de razones para no despedir a las artes de mí misma y junto con ello, llegar a
          todo corazón, sobre todo al corazón de Dios.
        </p>
      </div>

      <div className="reveal reveal-delay-2 relative max-w-md mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-b from-gold/20 to-rose/10 rounded-xl blur-md" />
        <div className="relative rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl group">
          <img
            src={aboutImage}
            alt="Ale Polleth Artista"
            className="w-full h-[400px] object-cover brightness-90 transition-all duration-700 group-hover:brightness-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
