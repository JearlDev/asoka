import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

const HeroLogo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-25px start', '155px start'],
  });

  const [scaleValue, setScaleValue] = useState(1);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScaleValue(1 - scrollYProgress.current);
  });

  return (
    <>
      <motion.a
        ref={ref}
        style={{
          scale: scaleValue,
        }}
        initial={{
          cursor: 'auto',
        }}
        whileInView={{
          cursor: 'pointer',
          transition: {
            duration: 0,
            ease: 'easeOut',
          },
        }}
        viewport={{
          margin: '-125px',
        }}
        href="/"
        className="logo-link absolute top-[25px] mx-auto h-[200px] w-[189.86px] z-[20] transition-all duration-300 ease-out"
      >
        <motion.img
          initial={{
            opacity: 0,
            y: '-10px',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
            },
          }}
          viewport={{
            margin: '-125px',
          }}
          src="/images/logo-white.svg"
          alt=""
          className="logo logo--hero h-full w-full"
        />
      </motion.a>
    </>
  );
};

export default HeroLogo;
