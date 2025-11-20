import { Award, Clock, Shield, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '500+', label: 'Projekte erfolgreich abgeschlossen' },
  { icon: Clock, value: '10+', label: 'Jahre Erfahrung im Markt' },
  { icon: Shield, value: '100%', label: 'Kundenzufriedenheit' },
  { icon: TrendingUp, value: '200+', label: 'Zufriedene Kunden' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
              Über Edit by Mosk
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Seit über 10 Jahren steht Edit by Mosk für erstklassige visuelle Dienstleistungen in Deutschland. Wir verbinden technisches Know-how mit kreativer Leidenschaft, um für unsere Kunden einzigartige Ergebnisse zu erzielen.
              </p>

              <p>
                Ob Produktfotografie für den E-Commerce, Imagefilme für Ihr Unternehmen oder professionelles Editing – unser erfahrenes Team setzt Ihre Visionen mit höchster Qualität um.
              </p>

              <p>
                Wir arbeiten mit modernster Technik und verfolgen stets die neuesten Trends der Branche. Dabei steht für uns die persönliche Betreuung und Zufriedenheit unserer Kunden an erster Stelle.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
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
  );
}
