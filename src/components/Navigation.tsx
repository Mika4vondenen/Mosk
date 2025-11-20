import { Zap, Info, Image, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Leistungen', icon: Zap, onClick: () => scrollToSection('services') },
    { name: 'Über uns', icon: Info, onClick: () => scrollToSection('about') },
    { name: 'Portfolio', icon: Image, onClick: () => scrollToSection('portfolio') },
    { name: 'Kontakt', icon: Mail, onClick: () => scrollToSection('contact') },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-4 px-4">
      <div className="flex justify-between items-start max-w-7xl mx-auto">
        <img
          src="/ChatGPT Image 20. Nov. 2025, 13_15_32.png"
          alt="edit by mosk"
          className="h-20 w-auto"
        />
        <NavBar items={navItems} />
      </div>
    </div>
  );
}
