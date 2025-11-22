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
  
  // Das hier ist die wichtige Änderung:
  // Wir prüfen SOFORT beim Starten, ob die Animation schon mal lief.
  const [skipAnimation, setSkipAnimation] = useState(() => {
    if (typeof window !== "undefined" && sessionKey) {
      return sessionStorage.getItem(sessionKey) === "true";
    }
    return false;
  });

  const isInView = !inView || inViewResult;

  useEffect(() => {
    // Wenn das Element sichtbar wird, merken wir uns das für die Zukunft
    if (isInView && sessionKey && !skipAnimation) {
      sessionStorage.setItem(sessionKey, "true");
    }
  }, [isInView, sessionKey, skipAnimation]);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  // Wenn die Animation übersprungen werden soll, geben wir einfach den
  // fertigen Inhalt zurück - ohne Animationstechnik.
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

  // Andernfalls: Animation abspielen
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