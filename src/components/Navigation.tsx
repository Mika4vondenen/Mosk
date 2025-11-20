import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img src="/image copy.png" alt="Edit by Mosk" className="h-12" />
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Leistungen
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Über uns
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Kontakt
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#0A1F44]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Leistungen
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Über uns
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-[#0A1F44] hover:text-[#F5B700] transition-colors duration-300 font-medium">
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
