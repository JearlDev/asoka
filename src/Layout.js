import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import MenuModal from './components/MenuModal/MenuModal';

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <MenuModal />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
