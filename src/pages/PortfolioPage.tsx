import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';

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
      <Gallery />
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black p-12 rounded-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Starten wir Ihr Projekt!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie mich für ein unverbindliches Erstgespräch und lassen Sie uns gemeinsam Ihre Vision verwirklichen.
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
