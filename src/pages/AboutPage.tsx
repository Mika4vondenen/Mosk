import { Award, Clock, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Timeline } from '../components/ui/timeline';

const stats = [
  { icon: Award, value: '500+', label: 'Projekte erfolgreich abgeschlossen' },
  { icon: Clock, value: '10+', label: 'Jahre Erfahrung im Markt' },
  { icon: Shield, value: '100%', label: 'Kundenzufriedenheit' },
  { icon: TrendingUp, value: '200+', label: 'Zufriedene Kunden' }
];

export default function AboutPage() {
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

  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expansion unserer Services und Integration modernster KI-gestützter Bearbeitungstechnologien. Lancierung neuer Express-Services für noch schnellere Projektabwicklung.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/1166428/pexels-photo-1166428.jpeg"
              alt="produktfotografie"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg"
              alt="videoproduktion"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg"
              alt="event coverage"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
              alt="business portraits"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020-2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Aufbau eines starken Teams von Kreativen und Technikern. Expansion in neue Geschäftsbereiche wie Drohnenfotografie und Social-Media-Content-Produktion.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Über 300 erfolgreiche Projekte mit Kunden aus verschiedensten Branchen - von kleinen Start-ups bis zu etablierten Großunternehmen.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="post production"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
              alt="architektur"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="fashion"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="social media"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Die Gründung von Edit by Mosk - mit einer klaren Vision und Leidenschaft für visuelle Exzellenz.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Erste Produktfotografie-Projekte
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Aufbau eines professionellen Studios
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Erste Imagefilme für lokale Unternehmen
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Investition in modernste Kameratechnik
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Entwicklung unserer Qualitätsstandards
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/2228571/pexels-photo-2228571.jpeg"
              alt="konzert"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.pexels.com/photos/1166428/pexels-photo-1166428.jpeg"
              alt="anfänge"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-32">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A1F44] mb-8">
                Über Edit by Mosk
              </h1>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Seit über 10 Jahren steht Edit by Mosk für erstklassige visuelle Dienstleistungen in Deutschland. Wir verbinden technisches Know-how mit kreativer Leidenschaft, um für unsere Kunden einzigartige Ergebnisse zu erzielen.
                </p>

                <p>
                  Ob Produktfotografie für den E-Commerce, Imagefilme für Ihr Unternehmen oder professionelles Editing – unser erfahrenes Team setzt Ihre Visionen mit höchster Qualität um.
                </p>

                <p>
                  Wir arbeiten mit modernster Technik und verfolgen stets die neuesten Trends der Branche. Dabei steht für uns die persönliche Betreuung und Zufriedenheit unserer Kunden an erster Stelle.
                </p>

                <p>
                  Mit jedem Projekt streben wir danach, Ihre Erwartungen zu übertreffen und langfristige Partnerschaften aufzubauen. Unser Engagement für Exzellenz hat uns zu einem vertrauten Partner für Unternehmen aller Größen gemacht.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-10 group inline-flex items-center gap-3 bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Jetzt Beratung anfragen
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Timeline data={timelineData} />
      </section>

      <section className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Unsere Werte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#F5B700] mb-4">Qualität</h3>
              <p className="text-gray-200">
                Wir kompromittieren nie bei der Qualität. Jedes Projekt erhält unsere volle Aufmerksamkeit und Expertise.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#F5B700] mb-4">Kreativität</h3>
              <p className="text-gray-200">
                Kreative Lösungen sind das Herzstück unserer Arbeit. Wir denken über den Tellerrand hinaus.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#F5B700] mb-4">Partnerschaft</h3>
              <p className="text-gray-200">
                Wir sehen uns als Partner unserer Kunden, nicht nur als Dienstleister. Ihr Erfolg ist unser Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
