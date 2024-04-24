import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
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

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(scrollYProgress.current);
  });

  return (
    <>
      <section
        ref={container}
        className="hero h-screen w-full relative flex flex-col items-center overflow-hidden"
      >
        <HeroLogo />
        <motion.img
          style={{ y }}
          src={data.imageUrl}
          alt=""
          className="bg-img bg-img--hero absolute top-0 left-0 object-cover h-full w-full"
        />
        <div className="video-modal-btn-wrapper absolute z-10 h-full w-full flex items-center justify-center">
          <button
            onClick={() => {
              setVideoModalIsOpen(true);
            }}
            className={`video-modal-btn flex gap-3 items-center after:content-[''] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:z-[10] after:bg-black/10  after:pointer-events-none after:transition-all after:duration-300 after:ease-out group mt-[100px] p-10`}
          >
            <img
              src="/images/watch-video-icon.svg"
              alt=""
              className={`video-modal-btn__icon relative z-[20] ${
                videoModalIsOpen
                  ? 'scale-[1.5] translate-x-[50.45px]'
                  : 'group-hover:scale-[1.5] group-hover:translate-x-[50.45px]'
              }  transition-all duration-[400ms] ease-out`}
            />
            <span
              className={`video-modal-btn__text btn text-white relative z-[20] ${
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
            className="video-modal fixed h-screen w-full top-0 right-0 z-[99999999] bg-black/70"
          >
            <div className="video-modal__inner h-full w-full flex items-center justify-center">
              <motion.button
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={videoModalButtonVariants}
                onClick={() => {
                  setVideoModalIsOpen(false);
                }}
                className="video-modal__close flex items-center gap-3 transition-all duration-300 ease-out absolute top-[24px] right-[28px] z-50 py-10 hover:cursor-pointer"
              >
                <img
                  src="/images/icons/close.svg"
                  alt=""
                  className="video-modal__close__icon"
                />
                <span className="menu-modal__close__text text-white btn">
                  Close
                </span>
              </motion.button>
              <motion.video
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={videoModalVariants}
                className="h-[42vw] w-[82vw] -md:h-[70vh] -md:w-[90vw] overflow-hidden object-cover bg-transparent rounded-[10px]"
                controls
                type="video/mp4"
              ></motion.video>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="sidebar absolute top-[50%] -translate-y-[60%] right-0 z-[9999] flex flex-col items-end">
        <div className="sidebar-btn bg-tertiary h-[109px] rounded-tl-[20px] w-[50px] flex flex-col gap-[10px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-tl-[0px]">
          <div className="sidebar-btn__menu-icon menu-icon h-[12px] w-[25px] flex flex-col justify-between items-end">
            <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
            <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[32px] transition-all duration-300 ease-out"></span>
            <span className="menu-icon__line block h-[1px] w-full bg-secondary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
          </div>
          <div className="sidebar-btn__text h-[39px]">
            <span className="btn text-secondary rotate-[270deg] translate-y-[12px]">
              Menu
            </span>
          </div>
        </div>
        <div className="sidebar-btn bg-secondary h-[145px] w-[50px] rounded-bl-[20px] flex flex-col gap-[13px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-bl-[0px] hover:bg-primary hover:text-white">
          <div className="sidebar-btn__book-icon book-icon h-[6px] w-[12px] rotate-180 flex flex-col justify-between">
            <span className="book-icon__line h-[1px] w-[9px] bg-tertiary -rotate-45 "></span>
            <span className="book-icon__line h-[1px] w-[9px] bg-tertiary rotate-45 translate-y-[1px]"></span>
          </div>
          <div className="sidebar-btn__text h-[73.5px]">
            <span className="btn text-tertiary rotate-[270deg] translate-y-[32px] translate-x-[1.75px] whitespace-nowrap">
              Book Now
            </span>
          </div>
        </div>
      </section>
      <section className="menu-modal"></section>

      <section className="bg-primary text-40 py-100 px-80 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus rem
        ratione eum pariatur saepe numquam laudantium omnis obcaecati eveniet
        nisi veniam dolor facilis distinctio, voluptatibus amet provident.
        Similique, consequatur quas! Commodi inventore beatae porro dicta
        excepturi praesentium corrupti quo tempore molestiae? Dolor cupiditate
        earum nam voluptas consequatur repellendus ab odit blanditiis nesciunt,
        culpa veniam reiciendis minima atque ullam laborum. Iusto! Nostrum
        voluptatem, fugiat beatae odit, vel eaque expedita commodi fugit
        exercitationem doloremque asperiores mollitia, impedit labore provident
        ipsum rem distinctio velit consequatur accusamus tempore consectetur
        dolor libero! Minus, nisi magnam. Maiores quos aliquid nisi voluptatem
        earum explicabo temporibus modi, adipisci eaque dolore blanditiis
        voluptates, est saepe quia cupiditate doloremque pariatur veritatis et!
        Aspernatur exercitationem saepe assumenda odio. Distinctio, ut.
        Perspiciatis? Sit, voluptates debitis doloribus, consequatur eos quod
        quibusdam placeat, aspernatur quisquam maiores rerum blanditiis unde!
        Labore tenetur molestiae quibusdam rerum fuga possimus aliquid! Saepe
        totam voluptatibus vero qui eaque eveniet! Possimus voluptatum tempore
        doloribus at itaque laboriosam soluta quis iste aspernatur ab eum
        excepturi suscipit eos, blanditiis ad corporis harum delectus, hic
        quasi, perspiciatis saepe rerum dignissimos natus fugit! Molestias!
        Blanditiis, molestiae dolorum iusto quis eligendi harum doloremque
        tenetur, tempore in perspiciatis autem impedit quibusdam repudiandae
        reprehenderit deleniti assumenda reiciendis maxime iste libero
        consequuntur eveniet. Culpa fugiat quos quisquam repudiandae. Beatae
        culpa expedita aut alias at reiciendis ex enim recusandae quod, corrupti
        accusamus quae consectetur impedit maiores hic quasi inventore, ratione
        fugiat totam qui dolor vero! Hic neque dolor eveniet. Magnam nihil vero
        asperiores laboriosam quasi, atque ullam sapiente eius excepturi debitis
        quis quod necessitatibus quibusdam adipisci dignissimos labore et sint
        cupiditate consequatur. Itaque unde ut aspernatur rerum quo quasi.
        Assumenda perferendis, laudantium, error quidem nulla reprehenderit
        reiciendis aut aliquid ipsam quod id repellat! Facilis, dignissimos
        blanditiis beatae quam eos corporis necessitatibus, aperiam maiores
        excepturi praesentium consequatur obcaecati reiciendis expedita?
      </section>
    </>
  );
};

export default Hero;
