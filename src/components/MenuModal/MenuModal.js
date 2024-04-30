import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import React, { useState } from 'react';
import './MenuModal.css';

const MenuModal = () => {
  const [sidebarIsShown, setSidebarIsShown] = useState(true);
  const [sidebarIsFixed, setSidebarIsFixed] = useState(false);

  const data = {
    patternImageUrl: '/images/bg-pattern-small.webp',
    stayImageUrl: '/images/bg-stay.webp',
    storyImageUrl: '/images/bg-story.webp',
    surfingImageUrl: '/images/bg-surfing.webp',
    diningImageUrl: '/images/bg-dining.webp',
    wellnessImageUrl: '/images/bg-wellness.webp',
    primaryMenu: [
      {
        url: '#stay',
        title: 'Your Stay',
      },
      {
        url: '#story',
        title: 'Our Story',
      },
      {
        url: '#surfing',
        title: 'Surfing',
      },
      {
        url: '#dining',
        title: 'Dining',
      },
      {
        url: '#wellness',
        title: 'Wellness',
      },
    ],
    secondaryMenu: [
      {
        url: '#mountain-villa',
        title: 'Mountain Villa',
      },
      {
        url: '#superior-suite',
        title: 'Superior Suite',
      },
      {
        url: '#deluxe-suite',
        title: 'Deluxe Suite',
      },
      {
        url: '#pool-villa',
        title: 'Pool Villa',
      },
    ],
    secondaryMenuHeading: 'Our Rooms',
    bookNowLink: {
      url: '#book-now',
      title: 'Book Now',
    },
    socialIcons: [
      {
        url: '/images/icons/x-logo.svg',
      },
      {
        url: '/images/icons/insta-logo.svg',
      },
      {
        url: '/images/icons/fb-logo.svg',
      },
      {
        url: '/images/icons/yt-logo.svg',
      },
    ],
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);

    let isScrollingDown = scrollY.getPrevious() - latest < 0;

    let scrollDirection = isScrollingDown ? 'down' : 'up';

    if (latest > 250) {
      setSidebarIsShown(false);
    } else {
      setSidebarIsShown(true);
    }

    if (latest > 800) {
      setSidebarIsFixed(true);
    } else {
      setSidebarIsFixed(false);
    }

    if (latest > 1250 && scrollDirection === 'up') {
      setSidebarIsShown(true);
    }
  });

  const sidebarVariants = {
    hidden: {
      x: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {sidebarIsShown && (
          <motion.section
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={sidebarVariants}
            className={`sidebar ${
              sidebarIsFixed ? 'fixed' : 'absolute'
            } top-[35%] -md:top-[40%] right-0 z-[9999] flex flex-col items-end`}
          >
            <div className="sidebar-btn bg-secondary h-[109px] rounded-tl-[20px] w-[50px] flex flex-col gap-[10px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-tl-[0px]">
              <div className="sidebar-btn__menu-icon menu-icon h-[12px] w-[25px] flex flex-col justify-between items-end">
                <span className="menu-icon__line block h-[1px] w-full bg-tertiary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
                <span className="menu-icon__line block h-[1px] w-full bg-tertiary group-hover:w-[32px] transition-all duration-300 ease-out"></span>
                <span className="menu-icon__line block h-[1px] w-full bg-tertiary group-hover:w-[15px] transition-all duration-300 ease-out"></span>
              </div>
              <div className="sidebar-btn__text h-[39px]">
                <span className="btn text-tertiary rotate-[270deg] translate-y-[12px]">
                  Menu
                </span>
              </div>
            </div>
            <div className="sidebar-btn bg-tertiary overflow-hidden h-[145px] w-[50px] rounded-bl-[20px] flex flex-col gap-[13px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out hover:w-[60px] hover:rounded-bl-[0px] hover:bg-primary hover:text-white">
              <div className="sidebar-btn__book-icon book-icon h-[6px] w-[12px] rotate-180 flex flex-col justify-between">
                <span className="book-icon__line h-[1px] w-[9px] bg-secondary -rotate-45 group-hover:translate-x-[-8px] group-hover:bg-white transition-all duration-300 ease-out"></span>
                <span className="book-icon__line book-icon__line--hover block h-[1px] w-0 bg-secondary group-hover:bg-white group-hover:translate-x-[-7px] group-hover:w-[30px] transition-all duration-300 ease-out"></span>
                <span className="book-icon__line h-[1px] w-[9px] bg-secondary group-hover:bg-white rotate-45 translate-y-[1px] group-hover:translate-x-[-8px] transition-all duration-300 ease-out"></span>
              </div>
              <div className="sidebar-btn__text h-[73.5px]">
                <span className="btn text-secondary rotate-[270deg] translate-y-[32px] translate-x-[1.75px] whitespace-nowrap group-hover:text-white">
                  Book Now
                </span>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="menu-modal fixed top-0 right-0 h-screen w-full z-[99999] bg-black/50">
        <div className="menu-modal__inner">
          <button className="menu-modal__close h-[109px] w-[50px] flex flex-col gap-[10px] items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-out">
            <div className="close-icon h-[16px] w-[16px] flex flex-col justify-between items-end">
              <span className="close-icon__line block h-[1px] w-full bg-white group-hover:w-[15px] transition-all duration-300 ease-out"></span>
              <span className="close-icon__line block h-[1px] w-full bg-white group-hover:w-[32px] transition-all duration-300 ease-out"></span>
              <span className="close-icon__line block h-[1px] w-full bg-white group-hover:w-[15px] transition-all duration-300 ease-out"></span>
            </div>
            <div className="close-text h-[39px]">
              <span className="btn text-white rotate-[270deg] translate-y-[12px]">
                Close
              </span>
            </div>
          </button>
          <div className="social-icons">
            {data.socialIcons.length > 0 &&
              data.socialIcons.map((item) => {
                return <img src={item.url} alt="" className="social-icon" />;
              })}
          </div>
          <div className="menu-modal__menu-wrapper relative">
            <img
              src={data.patternImageUrl}
              alt=""
              className="bg-img menu-modal__bg-img"
            />
            <div className="primary-nav">
              {data.primaryMenu.length > 0 &&
                data.primaryMenu.map((item) => {
                  return (
                    <a href={item.url} className="primary-nav__item nav-item">
                      {item.title}
                    </a>
                  );
                })}
            </div>
            <div className="secondary-nav">
              <div className="secondary-nav__heading">Our Rooms</div>
              <div className="secondary-nav__items">
                {data.secondaryMenu.length > 0 &&
                  data.secondaryMenu.map((item) => {
                    return (
                      <a
                        href={item.url}
                        className="secondary-nav__item nav-item"
                      >
                        {item.title}
                      </a>
                    );
                  })}
              </div>
              {data.bookNowLink && (
                <div className="btn-wrapper">
                  <a
                    href={data.bookNowLink.url}
                    className="btn btn--rounded btn--roundedGold"
                  >
                    <span className="btn--rounded__text">
                      {data.bookNowLink.title}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuModal;
