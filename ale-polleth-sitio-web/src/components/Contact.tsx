import { useState } from 'react';
import { Instagram, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkgqbgv';
const CONTACT_EMAIL = 'alexandrapollethm@gmail.com';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Nuevo mensaje de ${name.trim()} — Web Ale Polleth`,
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje. Inténtalo de nuevo.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ocurrió un error al enviar el mensaje.');
    }
  };

  return (
    <section id="contacto" className="py-16 px-6 text-center border-b border-white/[0.05]">
      <div className="reveal">
        <p className="text-xs tracking-[3px] uppercase text-rose font-semibold mb-3">
          Conectemos
        </p>
        <h2 className="font-serif text-3xl mb-3 text-cream font-normal">Escríbeme</h2>
        <p className="text-cream-muted text-sm font-light max-w-xs mx-auto mb-10">
          ¿Tienes un proyecto, evento o simplemente quieres saludar? Me encantará leerte.
        </p>
      </div>

      {/* Quick links */}
      <div className="reveal reveal-delay-1 flex flex-col gap-3 mb-10 max-w-md mx-auto">
        <a
          href="https://www.instagram.com/alepolleth?stkn=MWEzaDRsOXBtNXZ1MQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between bg-bg-card border border-gold/20 px-5 py-4 rounded-xl transition-all duration-300 hover:border-rose hover:translate-x-1 hover:bg-rose/[0.03]"
        >
          <span className="flex items-center gap-3 font-serif text-cream">
            <Instagram className="w-5 h-5 text-rose" />
            Instagram Oficial
          </span>
          <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group flex items-center justify-between bg-bg-card border border-gold/20 px-5 py-4 rounded-xl transition-all duration-300 hover:border-rose hover:translate-x-1 hover:bg-rose/[0.03]"
        >
          <span className="flex items-center gap-3 font-serif text-cream text-sm">
            <Mail className="w-5 h-5 text-rose shrink-0" />
            {CONTACT_EMAIL}
          </span>
          <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="reveal reveal-delay-2 flex flex-col gap-4 max-w-md mx-auto text-left">
        <div>
          <label className="block text-[0.7rem] tracking-[1px] uppercase text-cream-muted mb-2">
            Tu Nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre..."
            required
            disabled={status === 'loading'}
            className="w-full bg-bg-card border border-white/[0.1] px-4 py-3.5 rounded-lg text-cream font-sans text-sm transition-colors focus:outline-none focus:border-rose disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-[0.7rem] tracking-[1px] uppercase text-cream-muted mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu-correo@example.com"
            required
            disabled={status === 'loading'}
            className="w-full bg-bg-card border border-white/[0.1] px-4 py-3.5 rounded-lg text-cream font-sans text-sm transition-colors focus:outline-none focus:border-rose disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-[0.7rem] tracking-[1px] uppercase text-cream-muted mb-2">
            Mensaje
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            required
            disabled={status === 'loading'}
            rows={5}
            className="w-full bg-bg-card border border-white/[0.1] px-4 py-3.5 rounded-lg text-cream font-sans text-sm transition-colors focus:outline-none focus:border-rose resize-vertical min-h-[120px] disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-2 bg-cream text-bg border-none py-3.5 rounded-lg font-semibold uppercase tracking-[2px] text-xs cursor-pointer transition-all duration-300 hover:bg-rose hover:text-white disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </>
          )}
        </button>

        {/* Status messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 text-rose bg-rose/5 border border-rose/20 rounded-lg px-4 py-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="text-sm">¡Mensaje enviado! Gracias por escribir, te responderé pronto.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/5 border border-red-400/20 rounded-lg px-4 py-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm">{errorMsg || 'No se pudo enviar el mensaje. Inténtalo de nuevo.'}</span>
          </div>
        )}
      </form>
    </section>
  );
}
