import { Camera, Video, Scissors, Lightbulb, Users, Zap } from 'lucide-react';

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
    icon: Lightbulb,
    title: 'Kreativberatung',
    description: 'Konzeptentwicklung und kreative Strategien für Ihre visuellen Projekte und Kampagnen.',
    features: ['Konzeptentwicklung', 'Storyboarding', 'Kampagnenplanung', 'Creative Direction']
  },
  {
    icon: Users,
    title: 'Event-Coverage',
    description: 'Komplette Dokumentation Ihrer Veranstaltungen, Messen und Firmenevents in Bild und Video.',
    features: ['Live-Streaming', 'Eventfotografie', 'Aftermovies', 'Dokumentation']
  },
  {
    icon: Zap,
    title: 'Express-Service',
    description: 'Schnelle Bearbeitung für dringende Projekte ohne Qualitätsverlust innerhalb von 24-48 Stunden.',
    features: ['24h Express', 'Prioritätsbearbeitung', 'Direktkontakt', 'Sofortlieferung']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#262626' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Foto-, Video- & Editing-Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von der ersten Idee bis zum fertigen Projekt – wir begleiten Sie mit Professionalität und Leidenschaft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#F5B700] to-[#ffc61a] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-[#0A1F44]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
