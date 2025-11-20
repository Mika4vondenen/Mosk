import { Award, Clock, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="bg-[#F4F6F8] px-6 py-3 rounded-lg">
                  <p className="text-[#0A1F44] font-semibold">Deutschlandweiter Service</p>
                </div>
                <div className="bg-[#F4F6F8] px-6 py-3 rounded-lg">
                  <p className="text-[#0A1F44] font-semibold">Faire Preise</p>
                </div>
                <div className="bg-[#F4F6F8] px-6 py-3 rounded-lg">
                  <p className="text-[#0A1F44] font-semibold">Schnelle Lieferung</p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-10 group inline-flex items-center gap-3 bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Jetzt Beratung anfragen
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c] p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="text-[#F5B700]" size={40} />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
