import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="wrapper bg-secondary">
        <h1 className="heading heading--lg text-primary">Heading</h1>
        <h2 className="heading heading--md text--secondary">Heading</h2>
        <h3 className="heading heading--sm text-secondary">Heading</h3>
        <p className="bodyText text-bodyDark">
          Lorem ipsum dolor sit amet consectetur{' '}
          <a href="#">adipisicing elit.</a> Harum omnis, dignissimos porro ipsam
          saepe distinctio quia in soluta veniam itaque fuga nesciunt dolor
          tenetur vitae labore tempore aliquam repellendus perspiciatis.
        </p>
        {/* <div className="btn-wrapper flex gap-2 justify-start">
          <a href="#" className="btn btn--underline btn--underlineDark">
            <div className="btn--underline__inner">
              <span>Learn More</span>
            </div>
            <div className="btn--underline__inner overlayText">
              <span>Learn More</span>
            </div>
          </a>
        </div> */}
        {/* <div className="btn-wrapper flex gap-2 justify-start">
          <a href="#" className="btn btn--underline btn--underlineLight">
            <div className="btn--underline__inner">
              <span>Learn More</span>
            </div>
            <div className="btn--underline__inner overlayText">
              <span>Learn More</span>
            </div>
          </a>
        </div> */}
        <div className="btn-wrapper flex gap-2 justify-start mt-10">
          <a href="#" className="btn btn--rounded btn--roundedGold">
            <span className="btn--rounded__text">Learn More</span>
          </a>
          <a href="#" className="btn btn--rounded btn--roundedWhite">
            <span className="btn--rounded__text">Learn More</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
