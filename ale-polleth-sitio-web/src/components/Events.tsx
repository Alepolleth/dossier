import { Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { events } from '@/data/content';

export default function Events() {
  const upcoming = events.filter((e) => e.status !== 'Finalizado');
  const past = events.filter((e) => e.status === 'Finalizado');

  const statusColors: Record<string, string> = {
    'Próximo': 'text-rose border-rose/40 bg-rose/5',
    'Confirmado': 'text-gold border-gold/40 bg-gold/5',
    'Finalizado': 'text-cream-muted border-white/10 bg-white/[0.02]',
  };

  return (
    <section id="eventos" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <p className="text-xs tracking-[3px] uppercase text-rose font-semibold mb-3">
          Esencia &amp; Pasión
        </p>
        <h2 className="font-serif text-3xl mb-3 text-cream font-normal">Próximos Eventos</h2>
        <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mb-10">
          Acompáñame en este viaje musical. Cada evento es un capítulo que refleja dedicación y pasión.
        </p>
      </div>

      {upcoming.length === 0 && past.length === 0 && (
        <div className="reveal max-w-xs mx-auto bg-bg-card border border-white/[0.06] rounded-xl p-6">
          <Calendar className="w-6 h-6 text-rose mx-auto mb-3" />
          <p className="text-cream-muted text-sm font-light">
            Próximamente anunciaré nuevas fechas. ¡Vuelve pronto para no perdértelas!
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 max-w-md mx-auto text-left">
        {upcoming.map((event, i) => (
          <div
            key={i}
            className="reveal group bg-bg-card border border-white/[0.06] rounded-xl p-5 transition-all duration-300 hover:border-rose/30 hover:shadow-lg hover:shadow-rose/5"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose" />
                <span className="text-xs tracking-[2px] uppercase font-semibold text-cream">
                  {event.date}
                </span>
              </div>
              <span className={`text-[0.65rem] px-2.5 py-1 rounded-full border ${statusColors[event.status]} uppercase tracking-wider font-medium`}>
                {event.status}
              </span>
            </div>

            <h3 className="font-serif text-lg text-cream mb-2 group-hover:text-rose transition-colors">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 mb-2 text-cream-muted">
              <MapPin className="w-3.5 h-3.5 text-rose/70" />
              <span className="text-xs">{event.venue} — {event.city}</span>
            </div>

            <p className="text-cream-muted text-xs leading-relaxed font-light">
              {event.description}
            </p>
          </div>
        ))}
      </div>

      {past.length > 0 && (
        <>
          <div className="reveal mt-12 mb-6">
            <p className="text-xs tracking-[3px] uppercase text-cream-muted font-semibold flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" />
              Eventos Anteriores
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-md mx-auto text-left">
            {past.map((event, i) => (
              <div
                key={i}
                className="reveal flex items-center gap-3 bg-bg-card/50 border border-white/[0.04] rounded-lg p-4 opacity-70"
              >
                <CheckCircle2 className="w-5 h-5 text-cream-muted shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-sm text-cream truncate">{event.title}</h3>
                  <p className="text-cream-muted text-xs">{event.date} — {event.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
