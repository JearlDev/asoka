import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import './Hero.css';

const Hero = () => {
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);

  const data = {
    videoUrl: '/videos/asoka-homepage.mov',
    imageUrl: '/images/hero-bg.webp',
  };

  useEffect(() => {
    if (data.videoUrl) {
      // open lightbox
      if (videoModalIsOpen) {
        const videoBtn = document.querySelector('.video-modal-btn');
        const video = document.querySelector('.video-modal video');
        const videoModal = document.querySelector('.video-modal');
        const videoClose = document.querySelector('.video-modal__close');

        // set video src
        video.src = videoBtn
          .querySelector('#video-src')
          .getAttribute('data-src');

        // show lightbox
        videoModal.style.display = 'block';
        setTimeout(function () {
          videoModal.style.opacity = '100%';
        }, 10);
        setTimeout(function () {
          video.style.opacity = '100%';
          video.style.transform = 'scale(1,1)';
        }, 140);
        setTimeout(function () {
          videoClose.style.opacity = '100%';
          videoClose.style.transform = 'translateX(0)';
        }, 350);
        // setTimeout(function () {
        //   document.body.style.overflow = 'hidden';
        // }, 750);

        video.play();
      } else {
        // close lightbox
        const video = document.querySelector('.video-modal video');
        const videoModal = document.querySelector('.video-modal');
        const videoClose = document.querySelector('.video-modal__close');
        document.querySelector('.video-modal');

        // hide lightbox
        videoClose.style.transform = 'translateX(10%)';
        videoClose.style.opacity = '0';

        setTimeout(function () {
          video.style.opacity = '0';
          video.style.transform = 'scale(0.9,0.9)';
        }, 200);
        setTimeout(function () {
          videoModal.style.opacity = '0';
        }, 300);
        setTimeout(function () {
          videoModal.style.display = 'none';
          // document.body.style.overflow = 'visible';
        }, 600);

        video.pause();
      }
    }
  }, [videoModalIsOpen, data.videoUrl]);
  return (
    <>
      <section className="hero h-screen w-full relative flex flex-col items-center">
        <a href="/" className="relative z-[20]">
          <img
            src="/images/logo-white.svg"
            alt=""
            className="logo logo--hero object-contain h-[150px] mt-25"
          />
        </a>
        <img
          src={data.imageUrl}
          alt=""
          className="bg-img bg-img--hero absolute top-0 left-0 object-cover h-full w-full"
        />
        <div className="video-modal-btn-wrapper absolute z-10 h-full w-full flex items-center justify-center">
          <button
            onClick={() => {
              setVideoModalIsOpen(true);
            }}
            className={`video-modal-btn flex gap-3 items-center after:content-[''] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:z-[10] after:bg-black/10  after:pointer-events-none after:transition-all after:duration-300 after:ease-out group mt-[100px]`}
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
      </section>

      {/* {videoModalIsOpen && ( */}
      <section
        className="video-modal fixed h-screen w-full top-0 right-0 z-[99999999] bg-black/70"
        style={{ display: 'none' }}
      >
        <div className="video-modal__inner h-full w-full flex items-center justify-center">
          <button
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
          </button>
          <video
            className="h-[42vw] w-[82vw] -md:h-[70vh] -md:w-[90vw] overflow-hidden object-cover bg-transparent rounded-[10px]"
            controls
            type="video/mp4"
          ></video>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

export default Hero;
