import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

const HeroBottomFadeOverlay = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-200px start', '300px start'],
  });

  const [scaleValue, setScaleValue] = useState(1);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScaleValue(1 - scrollYProgress.current);
  });

  return (
    <>
      <motion.div
        ref={ref}
        style={{ opacity: scrollYProgress }}
        className="white-fade-overlay absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/0 to-white/90"
      ></motion.div>
    </>
  );
};

export default HeroBottomFadeOverlay;
