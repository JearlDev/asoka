import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

const HeroLogo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-25px start', 'end start'],
  });

  const [scaleValue, setScaleValue] = useState(1);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScaleValue(1 - scrollYProgress.current);
  });

  return (
    <>
      <a
        href="/"
        className="logo-link absolute top-[25px] mx-auto z-[20] transition-all duration-300 ease-out"
      >
        <img
          ref={ref}
          style={{
            opacity: scaleValue,
          }}
          src="/images/logo-white.svg"
          alt=""
          className="logo logo--hero object-contain h-[200px]"
        />
      </a>
    </>
  );
};

export default HeroLogo;
