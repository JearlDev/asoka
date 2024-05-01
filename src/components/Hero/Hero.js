import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import './Hero.css';
import HeroBottomFadeOverlay from './HeroBottomFadeOverlay';
import HeroLogo from './HeroLogo';

const Hero = () => {
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);

  const data = {
    videoUrl: '/videos/asoka-homepage.mov',
    imageUrl: '/images/hero-bg.webp',
  };

  useEffect(() => {
    if (data.videoUrl) {
      let videoOpened = false;
      // open lightbox
      if (videoModalIsOpen) {
        const videoBtn = document.querySelector('.video-modal-btn');
        const video = document.querySelector('.video-modal video');

        // set video src
        video.src = videoBtn
          .querySelector('#video-src')
          .getAttribute('data-src');

        video.play();

        let videoOpened = true;
      } else {
        if (videoOpened) {
          // close lightbox
          const video = document.querySelector('.video-modal video');

          video.pause();
        }
      }
    }
  }, [videoModalIsOpen, data.videoUrl]);

  const videoModalWrapperVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const videoModalButtonVariants = {
    hidden: { opacity: 0, x: 10 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const videoModalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <>
      <section ref={container} className="hero">
        <HeroLogo />
        <motion.img
          style={{ y }}
          src={data.imageUrl}
          alt=""
          className="bg-img bg-img--hero"
        />
        <div className="video-modal-btn-wrapper">
          <button
            onClick={() => {
              setVideoModalIsOpen(true);
            }}
            className={`video-modal-btn group`}
          >
            <img
              src="/images/watch-video-icon.svg"
              alt=""
              className={`video-modal-btn__icon ${
                videoModalIsOpen
                  ? 'scale-[1.5] translate-x-[50.45px]'
                  : 'group-hover:scale-[1.5] group-hover:translate-x-[50.45px]'
              }  transition-all duration-[400ms] ease-out`}
            />
            <span
              className={`video-modal-btn__text btn ${
                videoModalIsOpen
                  ? 'opacity-0 translate-x-[-15px]'
                  : 'group-hover:opacity-0 group-hover:translate-x-[-15px]'
              } transition-all duration-[400ms] ease-out`}
            >
              Watch Video
            </span>
            <span
              id="video-src"
              className="hidden"
              data-src={data.videoUrl}
            ></span>
          </button>
        </div>
        <HeroBottomFadeOverlay />
      </section>
      <AnimatePresence>
        {videoModalIsOpen && (
          <motion.section
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={videoModalWrapperVariants}
            className="video-modal"
          >
            <div className="video-modal__inner">
              <motion.button
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={videoModalButtonVariants}
                onClick={() => {
                  setVideoModalIsOpen(false);
                }}
                className="video-modal__close group"
              >
                <div className="close-icon">
                  <span className="close-icon__line"></span>
                  <span className="close-icon__line"></span>
                  <span className="close-icon__line"></span>
                </div>
                <span className="menu-modal__close__text text-white btn pb-[2px]">
                  Close
                </span>
              </motion.button>
              <motion.video
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={videoModalVariants}
                className="video-modal__video"
                controls
                type="video/mp4"
              ></motion.video>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
