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
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ein Einblick in unsere Arbeit – Projekte, die begeistern und überzeugen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
}
