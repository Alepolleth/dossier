import { useState } from 'react';
import { Heart, Music, Drum, Sparkles, Guitar, ChevronDown } from 'lucide-react';
import { songCategories } from '@/data/content';

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  music: Music,
  drum: Drum,
  sparkles: Sparkles,
  guitar: Guitar,
};

export default function Repertoire() {
  const [openCategory, setOpenCategory] = useState<string | null>(songCategories[0]?.category ?? null);

  const toggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="repertorio" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <p className="text-xs tracking-[3px] uppercase text-rose font-semibold mb-3">
          Mi Repertorio
        </p>
        <h2 className="font-serif text-3xl mb-3 text-cream font-normal">Canciones que interpreto</h2>
        <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mb-10">
          Una selección de temas organizados por estilo. Toca cada categoría para ver el listado.
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-md mx-auto text-left">
        {songCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Music;
          const isOpen = openCategory === cat.category;

          return (
            <div
              key={cat.category}
              className="reveal bg-bg-card border border-white/[0.06] rounded-xl overflow-hidden transition-all duration-300"
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <button
                onClick={() => toggle(cat.category)}
                className="w-full flex items-center justify-between px-5 py-4 group"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-rose/10 border border-rose/20 transition-all group-hover:bg-rose/20">
                    <Icon className="w-4 h-4 text-rose" />
                  </span>
                  <span className="font-serif text-base text-cream group-hover:text-rose transition-colors">
                    {cat.category}
                  </span>
                  <span className="text-cream-muted text-xs">
                    ({cat.songs.length})
                  </span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-cream-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-rose' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 pt-1 flex flex-col gap-1.5 border-t border-white/[0.04]">
                  {cat.songs.map((song, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-sm text-cream font-light">{song.title}</span>
                      <span className="text-xs text-cream-muted italic">{song.artist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mt-8 italic">
        Si te gustaría alguna otra canción que no esté en esta lista, no dudes en proponérmela.
      </p>
    </section>
  );
}
