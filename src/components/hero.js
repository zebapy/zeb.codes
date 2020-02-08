import React from 'react';
import { Link } from 'gatsby';

import Revealer from './revealer';

import { SlideWords, SlideLetters } from './page-head';

const HeroSection = ({ title, text, avatar, alt }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <figure className="hero-figure">
          <img src={avatar} alt={alt} className="hero-avatar" />
        </figure> */}
        <h1 className="fadeInDown h1">
          <SlideLetters>{title}</SlideLetters>
        </h1>
        <p className="fadeInDown delay-500 text-xl lg:text-3xl mb-5">
          <SlideWords>{text}</SlideWords>
        </p>
        <div className="animated fadeInDown delay-1500 inline-flex">
          <Link to="/work" className="btn mr-5">
            <span>See my work</span>
          </Link>
          <Link to="/contact" className="btn btn--alt">
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
