import { Camera, Video, Scissors, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Camera,
    title: 'Fotografie',
    description: 'Hochwertige Produktfotografie, Business-Portraits, Event- und Architekturfotografie für Ihr Unternehmen.',
    features: ['Produktfotografie', 'Business-Portraits', 'Eventdokumentation', 'Architekturfotografie']
  },
  {
    icon: Video,
    title: 'Videoproduktion',
    description: 'Professionelle Imagefilme, Werbevideos, Eventaufnahmen und Social-Media-Content mit modernster Technik.',
    features: ['Imagefilme', 'Werbevideos', 'Drohnenaufnahmen', 'Social Media Videos']
  },
  {
    icon: Scissors,
    title: 'Post-Production',
    description: 'Professionelles Editing, Farbkorrektur, Retusche und Motion Graphics für perfekte Endergebnisse.',
    features: ['Video-Editing', 'Farbkorrektur', 'Bildretusche', 'Motion Graphics']
  },
  {
    icon: Users,
    title: 'Event-Coverage',
    description: 'Komplette Dokumentation Ihrer Veranstaltungen, Messen und Firmenevents in Bild und Video.',
    features: ['Live-Streaming', 'Eventfotografie', 'Aftermovies', 'Dokumentation']
  }
];

export default function ServicesPage() {
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
      <section className="pt-32 py-24" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 dm-serif-text-regular" style={{ color: '#f59e0b' }}>
              Unsere Foto-, Video- & Editing-Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Von der ersten Idee bis zum fertigen Projekt – wir begleiten Sie mit Professionalität und Leidenschaft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#111111] to-[#181818] p-12 rounded-xl">
              <img src="/assets/5dcbd8e8-73be-4b58-8b97-90007764cead.png" alt="icon" className="h-16 w-16 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Event- & Businessfotografie</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Seit 2022 begleitet MOSK Unlimited Festivals, Events und Unternehmen mit professioneller Fotografie. Klare Farben, starke Momente, moderner Look.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">Ideal für:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Events & Festivals</li>
                  <li>• Business-Portraits</li>
                  <li>• Produkte & Werbematerial</li>
                  <li>• Social-Media-Content</li>
                  <li>• Website-Fotos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Ihr Vorteil:</h4>
                <p className="text-gray-300 text-sm">Bilder, die sofort nutzbar sind und Ihre Marke hochwertig wirken lassen.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#181818] p-12 rounded-xl flex flex-col items-center">
              <img src="/assets/1d9e47f1-8932-407d-aeb3-9505a3ad35ef.png" alt="icon" className="h-16 w-16 mb-6" />
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#181818] p-12 rounded-xl flex flex-col items-center">
              <img src="/assets/c8561e14-7996-49e7-b4e0-e4b07a4612b4.png" alt="icon" className="h-16 w-16 mb-6" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c] p-12 rounded-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und lassen Sie uns gemeinsam Ihre Vision verwirklichen.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Jetzt Beratung anfragen
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
