import { useState, useEffect } from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { BlurFade } from './ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';
import heroImg1 from '../../assets/1d26fb92-f725-4f82-8838-d35c9c7fe8b1.png';
import heroImg2 from '../../assets/982564cf-d447-492e-a99f-f592f3f4d981.png';
import heroImg3 from '../../assets/f61c5e57-a3c5-4a50-99e0-637f33fef76b.png';

export default function Hero() {
  const images = [heroImg1, heroImg2, heroImg3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { showInitialAnimation } = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#0d2a5c] to-[#0A1F44] pt-20 sm:pt-0">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 0.8 : 0,
          }}
        ></div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="hero-title">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}>
            STARKE FOTOS. STARKE VIDEOS. STARKES EDITING.<br />
            <span className="text-[#f59e0b]">ALLES AUS EINER HAND.</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView={showInitialAnimation} sessionKey="hero-subtitle">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Wir verwandeln Ihre Vision in visuelle Meisterwerke. Für Privatkunden und Unternehmen in ganz Deutschland.
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView={showInitialAnimation} sessionKey="hero-button">
          <InteractiveHoverButton
            text="Starten"
            onClick={scrollToContact}
          />
        </BlurFade>
      </div>
    </section>
  );
}
