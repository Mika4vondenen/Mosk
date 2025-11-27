import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlurFade } from '../components/ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';
import icon1 from '../../assets/5dcbd8e8-73be-4b58-8b97-90007764cead.png';
import icon2 from '../../assets/1d9e47f1-8932-407d-aeb3-9505a3ad35ef.png';
import icon3 from '../../assets/c8561e14-7996-49e7-b4e0-e4b07a4612b4.png';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { showInitialAnimation } = useAnimation();

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
      <section className="pt-28 sm:pt-32 py-16 sm:py-24" style={{ backgroundColor: '#262626' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="services-header">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 dm-serif-text-regular" style={{ color: '#f59e0b' }}>
                Unsere Foto-, Video- & Editing-Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Von der ersten Idee bis zum fertigen Projekt – wir begleiten Sie mit Professionalität und Leidenschaft.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView={showInitialAnimation} sessionKey="services-cards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="service-box bg-gradient-to-br from-[#111111] to-[#181818] p-8 sm:p-12 rounded-xl">
              <img src={icon1} alt="icon" className="service-icon h-16 w-16 mb-4 sm:mb-6" />
              <h3 className="service-title text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Event- & Businessfotografie</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Seit 2022 begleite ich Festivals, Events und Unternehmen mit professioneller Fotografie. Klare Farben, starke Momente und ein moderner Look stehen bei mir im Fokus.
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
                <p className="text-gray-300 text-sm">Sie bekommen Bilder, die sofort nutzbar sind und Ihre Marke hochwertig wirken lassen.</p>
              </div>
            </div>
            <div className="service-box bg-gradient-to-br from-[#111111] to-[#181818] p-8 sm:p-12 rounded-xl">
              <img src={icon2} alt="icon" className="service-icon h-16 w-16 mb-4 sm:mb-6" />
              <h3 className="service-title text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Videoproduktion</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Seit 2021 produziere ich Eventfilme, Werbevideos und Social-Media-Content für lokale Unternehmen. Mein Fokus liegt auf dynamischen Bildern, klarer Bildsprache und Videos, die Wirkung erzeugen.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">Ideal für:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Social-Media-Videos</li>
                  <li>• Werbeclips für Geschäfte</li>
                  <li>• Eventfilme & Aftermovies</li>
                  <li>• Imagevideos</li>
                  <li>• Content für Websites & Ads</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Ihr Vorteil:</h4>
                <p className="text-gray-300 text-sm">Sie erhalten Videos, die Aufmerksamkeit erzeugen und Ihre Marke sichtbar machen – online und offline.</p>
              </div>
            </div>
            <div className="service-box bg-gradient-to-br from-[#111111] to-[#181818] p-8 sm:p-12 rounded-xl">
              <img src={icon3} alt="icon" className="service-icon h-16 w-16 mb-4 sm:mb-6" />
              <h3 className="service-title text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Post-Production / Editing</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Seit über fünf Jahren arbeite ich im Bereich Editing und verwandle rohes Videomaterial in modernen, hochwertigen Content. Saubere Schnitte, stimmige Farben und klare Looks stehen dabei im Mittelpunkt.
              </p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">Ideal für:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Videoschnitt</li>
                  <li>• Farbkorrektur (Color Grading)</li>
                  <li>• Retusche & Bildanpassungen</li>
                  <li>• Motion Graphics & kleine Effekte</li>
                  <li>• Social-Media-Optimierungen</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Ihr Vorteil:</h4>
                <p className="text-gray-300 text-sm">Sie liefern das Material – und ich mache daraus ein Video, das professionell wirkt und direkt eingesetzt werden kann.</p>
              </div>
            </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView={showInitialAnimation} sessionKey="services-cta">
            <div className="bg-black p-8 sm:p-12 rounded-xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Starten wir Ihr Projekt!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie mich für ein unverbindliches Erstgespräch und lassen Sie uns gemeinsam Ihre Vision verwirklichen.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-[#F5B700] text-[#0A1F44] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Jetzt Beratung anfragen
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
