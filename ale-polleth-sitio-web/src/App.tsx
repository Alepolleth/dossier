import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Anecdotes from '@/components/Anecdotes';
import Repertoire from '@/components/Repertoire';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg text-cream font-sans max-w-[480px] mx-auto shadow-2xl border-l border-r border-white/[0.05] relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Anecdotes />
        <Repertoire />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
