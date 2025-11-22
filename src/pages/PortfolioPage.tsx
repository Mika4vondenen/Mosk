import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlurFade } from '../components/ui/blur-fade';

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
    <div className="pt-32">
      <section className="py-24 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BlurFade delay={0.25} inView>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A1F44] mb-6">
                Portfolio
              </h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ein Einblick in unsere Arbeit – Projekte, die begeistern und überzeugen.
              </p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <BlurFade key={index} delay={0.75 + index * 0.1} inView>
                <div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#F5B700] text-sm font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={1.75} inView>
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
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
