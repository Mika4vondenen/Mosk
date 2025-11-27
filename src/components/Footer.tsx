import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1F44] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5B700] mb-3 sm:mb-4">Edit by Mosk</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
              Professionelle Foto-, Video- und Editing-Dienstleistungen für Privat- und Geschäftskunden in ganz Deutschland.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:info@editbymosk.de"
                className="bg-white/10 hover:bg-[#F5B700] w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="E-Mail"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Über mich
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {currentYear} Edit by Mosk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
