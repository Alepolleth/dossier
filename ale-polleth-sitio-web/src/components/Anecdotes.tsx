import { Sparkles } from 'lucide-react';
import { anecdotes } from '@/data/content';

export default function Anecdotes() {
  return (
    <section id="anecdotas" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <p className="text-xs tracking-[3px] uppercase text-rose font-semibold mb-3">
          Detrás de Escena
        </p>
        <h2 className="font-serif text-3xl mb-3 text-cream font-normal">Anécdotas</h2>
        <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mb-10">
          Historias y momentos curiosos que también forman parte de mi camino.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-6 -mx-6 scrollbar-hide">
        {anecdotes.map((story, i) => (
          <div
            key={i}
            className="reveal snap-center shrink-0 w-[240px] bg-bg-card border border-white/[0.06] rounded-xl overflow-hidden text-left"
          >
            {story.type === 'video' ? (
              <video
                src={story.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-[200px] object-cover bg-black"
              />
            ) : (
              <img src={story.src} alt={story.title} className="w-full h-[200px] object-cover" />
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose flex-shrink-0" />
                <h3 className="font-serif text-sm text-cream font-normal leading-snug">{story.title}</h3>
              </div>
              <p className="text-cream-muted text-xs font-light leading-relaxed line-clamp-4">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-cream-muted/60 text-[0.65rem] mt-3 tracking-widest uppercase">
        ← desliza para ver más →
      </p>
    </section>
  );
}
