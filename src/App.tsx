import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import { AnimationProvider } from './context/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AnimationProvider>
  );
}

export default App;
