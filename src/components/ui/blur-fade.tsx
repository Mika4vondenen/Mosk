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

  // Hier liegt der Trick: Wir fragen SOFORT beim Laden, ob der Nutzer schon da war.
  const [skipAnimation, setSkipAnimation] = useState(() => {
    if (typeof window !== "undefined" && sessionKey) {
      return sessionStorage.getItem(sessionKey) === "true";
    }
    return false;
  });

  useEffect(() => {
    // Wir merken uns nur, dass die Animation lief, wenn sie wirklich startet.
    if (inView && sessionKey && !skipAnimation) {
      sessionStorage.setItem(sessionKey, "true");
    }
  }, [inView, sessionKey, skipAnimation]);

  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  // Wenn wir die Animation überspringen sollen, zeigen wir den Inhalt einfach sofort an.
  // Ohne Animationseffekte.
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