import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AnimationContextType {
  hasVisitedHomepage: boolean;
  setHasVisitedHomepage: (value: boolean) => void;
  hasVisitedServicesPage: boolean;
  setHasVisitedServicesPage: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [hasVisitedHomepage, setHasVisitedHomepage] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('hasVisitedHomepage') === 'true';
  });

  const [hasVisitedServicesPage, setHasVisitedServicesPage] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('hasVisitedServicesPage') === 'true';
  });

  useEffect(() => {
    sessionStorage.setItem('hasVisitedHomepage', String(hasVisitedHomepage));
  }, [hasVisitedHomepage]);

  useEffect(() => {
    sessionStorage.setItem('hasVisitedServicesPage', String(hasVisitedServicesPage));
  }, [hasVisitedServicesPage]);

  return (
    <AnimationContext.Provider value={{
      hasVisitedHomepage,
      setHasVisitedHomepage,
      hasVisitedServicesPage,
      setHasVisitedServicesPage
    }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
}
