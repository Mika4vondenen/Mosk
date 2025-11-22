import { useRef, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
  sessionKey?: string;
}

// WICHTIG: Diese Liste liegt außerhalb der Komponente.
// Sie merkt sich, was schon animiert wurde.
// Beim Refresh (F5) wird sie automatisch gelöscht -> Animation kommt wieder.
// Beim Tab-Wechsel bleibt sie erhalten -> Animation wird übersprungen.
const animationCache = new Set<string>();

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  sessionKey,
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });

  const [skipAnimation] = useState(() => {
    // Wir schauen in unsere temporäre Liste (Cache) statt in den sessionStorage
    if (sessionKey && animationCache.has(sessionKey)) {
      return true;
    }
    return false;
  });

  const isInView = !inView || inViewResult;

  useEffect(() => {
    // Wenn die Animation läuft, merken wir uns den Key in der Liste
    if (isInView && sessionKey && !skipAnimation) {
      animationCache.add(sessionKey);
    }
  }, [isInView, sessionKey, skipAnimation]);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  // Wenn im Cache gefunden: Statisch anzeigen
  if (skipAnimation) {
    return (
      <div 
        ref={ref} 
        className={className} 
        style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
      >
        {children}
      </div>
    );
  }

  // Sonst: Animieren
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}