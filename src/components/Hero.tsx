import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    '/assets/982564cf-d447-492e-a99f-f592f3f4d981.png',
    '/assets/f61c5e57-a3c5-4a50-99e0-637f33fef76b.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#0d2a5c] to-[#0A1F44] pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Professionelle<br />
          <span className="text-[#F5B700]">Foto-, Video- & Editing-</span><br />
          Dienstleistungen
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Wir verwandeln Ihre Vision in visuelle Meisterwerke. Für Privatkunden und Unternehmen in ganz Deutschland.
        </p>

        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Jetzt Beratung anfragen
          <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </button>
      </div>
    </section>
  );
}
