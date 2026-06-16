import { useInView } from 'react-intersection-observer';
import { useAnimation, type Variants } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1): {
  ref: (node?: Element | null) => void;
  controls: ReturnType<typeof useAnimation>;
  variants: Variants;
} => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return { ref, controls, variants };
};