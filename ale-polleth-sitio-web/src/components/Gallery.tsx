import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/content';

export default function Gallery() {
  // activeEvent = el evento del set que se está viendo; lightboxIndex = índice
  // dentro de ESE grupo (no del arreglo completo), para que next/prev nunca
  // salte a fotos de otro evento.
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const eventImages = activeEvent
    ? galleryImages.filter((img) => img.event === activeEvent)
    : [];

  const openLightbox = (img: (typeof galleryImages)[number]) => {
    const group = galleryImages.filter((g) => g.event === img.event);
    setActiveEvent(img.event);
    setLightboxIndex(group.findIndex((g) => g.url === img.url));
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    setActiveEvent(null);
  };
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + eventImages.length) % eventImages.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % eventImages.length));

  // Solo se muestra la primera foto de cada evento como "portada" en el grid.
  // Al hacer click se abre el visor con todas las fotos de ese evento.
  const eventCovers = galleryImages.reduce<(typeof galleryImages)[number][]>((covers, img) => {
    if (!covers.some((c) => c.event === img.event)) covers.push(img);
    return covers;
  }, []);
  const countFor = (event: string) => galleryImages.filter((g) => g.event === event).length;

  return (
    <section id="galeria" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <p className="text-xs tracking-[3px] uppercase text-rose font-semibold mb-3">
          Momentos Capturados
        </p>
        <h2 className="font-serif text-3xl mb-3 text-cream font-normal">Galería</h2>
        <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mb-10">
          Una colección de instantes sobre el escenario y detrás de él.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {eventCovers.map((img, i) => {
          const total = countFor(img.event);
          return (
            <button
              key={img.event}
              onClick={() => openLightbox(img)}
              className="reveal relative rounded-lg overflow-hidden border border-white/[0.06] group cursor-pointer"
              style={{
                transitionDelay: `${(i % 4) * 0.1}s`,
                gridColumn: i % 3 === 0 ? 'span 2' : 'span 1',
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  style={{ objectPosition: (img as { coverPosition?: string }).coverPosition ?? 'center' }}
                  className="w-full h-full object-cover brightness-90 transition-all duration-500 group-hover:brightness-100 group-hover:scale-110"
                />
              </div>
              {total > 1 && (
                <span className="absolute top-2 right-2 bg-bg-deep/70 backdrop-blur-sm text-cream text-[0.65rem] px-2 py-0.5 rounded-full border border-white/10 tracking-wide">
                  +{total}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-start p-3">
                <p className="font-serif text-sm text-cream text-left">{img.event}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox: navega solo dentro de eventImages (fotos del mismo evento) */}
      {lightboxIndex !== null && eventImages.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-bg-deep/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream-muted hover:text-rose transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          {eventImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 text-cream-muted hover:text-rose transition-colors z-10 p-2"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 text-cream-muted hover:text-rose transition-colors z-10 p-2"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div className="max-w-[90%] max-h-[85%] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={eventImages[lightboxIndex].url}
              alt={eventImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            <p className="font-serif text-cream-muted text-sm mt-4 tracking-wide">
              {eventImages[lightboxIndex].event}
            </p>
            {eventImages.length > 1 && (
              <p className="text-cream-muted/60 text-xs mt-1 tracking-widest">
                {lightboxIndex + 1} / {eventImages.length}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
