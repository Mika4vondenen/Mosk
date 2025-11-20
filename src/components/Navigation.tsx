import { Zap, Info, Image, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/services') {
        setActiveSection('Leistungen');
        return;
      } else if (location.pathname === '/about') {
        setActiveSection('Über uns');
        return;
      } else if (location.pathname === '/portfolio') {
        setActiveSection('Portfolio');
        return;
      }

      if (location.pathname === '/') {
        const contactSection = document.getElementById('contact');

        if (contactSection) {
          const contactRect = contactSection.getBoundingClientRect();
          if (contactRect.top < window.innerHeight / 2) {
            setActiveSection('Kontakt');
            return;
          }
        }

        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Leistungen', icon: Zap, onClick: () => navigate('/services') },
    { name: 'Über uns', icon: Info, onClick: () => navigate('/about') },
    { name: 'Portfolio', icon: Image, onClick: () => navigate('/portfolio') },
    { name: 'Kontakt', icon: Mail, onClick: () => scrollToContact() },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-4 px-4">
      <div className="flex justify-between items-start max-w-7xl mx-auto">
        <button
          onClick={goToHome}
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="/ChatGPT Image 20. Nov. 2025, 13_15_32.png"
            alt="edit by mosk"
            className="h-20 w-auto"
          />
        </button>
        <NavBar items={navItems} activeSection={activeSection} />
      </div>
    </div>
  );
}
