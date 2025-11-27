import { Home, Zap, Info, Image, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import logo from '../../public/ChatGPT Image 20. Nov. 2025, 13_15_32.png';
import homeIcon from '../../assets/ChatGPT Image 20. Nov. 2025, 22_43_05.png';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (location.pathname === '/services') {
      setActiveSection('Services');
      return;
    } else if (location.pathname === '/about') {
      setActiveSection('Über mich');
      return;
    } else if (location.pathname === '/portfolio') {
      setActiveSection('Galerie');
      return;
    }

    if (location.pathname === '/') {
      const handleScroll = () => {
        if (isScrollingRef.current) return;

        const scrollPosition = window.scrollY;
        const contactSection = document.getElementById('contact');

        if (contactSection) {
          const contactRect = contactSection.getBoundingClientRect();
          const contactTop = contactRect.top + scrollPosition;

          if (scrollPosition + window.innerHeight * 0.5 >= contactTop) {
            setActiveSection('Kontakt');
          } else {
            setActiveSection('Home');
          }
        } else {
          setActiveSection('Home');
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveSection('Home');
    }
  }, [location.pathname]);

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          isScrollingRef.current = true;
          const navHeight = 120;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setTimeout(() => { isScrollingRef.current = false; }, 1000);
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        isScrollingRef.current = true;
        const navHeight = 120;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setTimeout(() => { isScrollingRef.current = false; }, 1000);
      }
    }
  };

  const goToHome = () => {
    isScrollingRef.current = true;
    window.scrollTo({ top: 0, behavior: 'auto' });
    setActiveSection('Home');
    navigate('/');
    setTimeout(() => { isScrollingRef.current = false; }, 100);
  };

  const goToServices = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToAbout = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goToPortfolio = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navItems = [
    { name: 'Home', image: homeIcon, onClick: () => goToHome() },
    { name: 'Services', icon: Zap, onClick: () => goToServices() },
    { name: 'Über mich', icon: Info, onClick: () => goToAbout() },
    { name: 'Galerie', icon: Image, onClick: () => goToPortfolio() },
    { name: 'Kontakt', icon: Mail, onClick: () => scrollToContact() },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-3 px-4 sm:py-4">
      <div className="flex justify-between items-start max-w-7xl mx-auto">
        <button
          onClick={goToHome}
          className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
        >
          <img
            src={logo}
            alt="edit by mosk"
            className="h-16 sm:h-20 w-auto"
          />
        </button>
        <div className="flex-shrink-0">
          <NavBar items={navItems} activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}
