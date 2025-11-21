import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1F44] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#F5B700] mb-4">Edit by Mosk</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Professionelle Foto-, Video- und Editing-Dienstleistungen für Privat- und Geschäftskunden in ganz Deutschland.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#F5B700] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@editbymosk.de"
                className="bg-white/10 hover:bg-[#F5B700] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="E-Mail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Über mich
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#F5B700] transition-colors duration-300">
                  Portfolio
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
            <h4 className="font-bold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2">
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

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Edit by Mosk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
