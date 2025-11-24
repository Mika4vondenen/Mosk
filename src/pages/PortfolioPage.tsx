import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BGPattern } from '../components/ui/bg-pattern';

const portfolioItems = [
  {
    image: 'https://images.pexels.com/photos/1166428/pexels-photo-1166428.jpeg',
    category: 'Produktfotografie',
    title: 'E-Commerce Shooting',
    description: 'Hochwertige Produktbilder für Online-Shop'
  },
  {
    image: 'https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg',
    category: 'Videoproduktion',
    title: 'Imagefilm',
    description: 'Corporate Video für Unternehmensdarstellung'
  },
  {
    image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg',
    category: 'Event-Coverage',
    title: 'Firmenevent',
    description: 'Professionelle Eventdokumentation'
  },
  {
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg',
    category: 'Business-Portraits',
    title: 'Mitarbeiterfotos',
    description: 'Professionelle Businessportraits'
  },
  {
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    category: 'Post-Production',
    title: 'Video-Editing',
    description: 'Professionelle Nachbearbeitung'
  },
  {
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    category: 'Architekturfotografie',
    title: 'Immobilien',
    description: 'Hochwertige Architekturaufnahmen'
  },
  {
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    category: 'Produktfotografie',
    title: 'Fashion Photography',
    description: 'Lifestyle und Mode-Shootings'
  },
  {
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    category: 'Videoproduktion',
    title: 'Social Media Content',
    description: 'Moderne Content-Produktion für digitale Kanäle'
  },
  {
    image: 'https://images.pexels.com/photos/2228571/pexels-photo-2228571.jpeg',
    category: 'Event-Coverage',
    title: 'Konzert & Bühne',
    description: 'Live-Event Dokumentation'
  }
];

export default function PortfolioPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const navHeight = 120;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div>
      <section className="relative pt-32 py-24 bg-black overflow-hidden">
        <BGPattern variant="grid" mask="fade-edges" fill="rgba(209, 213, 219, 0.15)" size={60} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ein Einblick in unsere Arbeit – Projekte, die begeistern und überzeugen.
            </p>
          </div>


          <div className="bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c] p-12 rounded-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lassen Sie uns Ihr nächstes Projekt starten
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Beeindruckt von unserer Arbeit? Kontaktieren Sie uns und lassen Sie uns gemeinsam etwas Großartiges schaffen.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
