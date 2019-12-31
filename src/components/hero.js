import React from 'react';
import { Link } from 'gatsby';

const HeroSection = ({ title, text, avatar, alt }) => {
  return (
    <section className="hero">
      {/* <figure className="hero-figure">
        <img src={avatar} alt={alt} className="hero-avatar" />
      </figure> */}
      <h1 className="hero-title">{title}</h1>
      <p className="hero-text">{text}</p>
      <div className="hero-btns">
        <Link to="/work" className="btn hero-btn">
          <span>See my work</span>
        </Link>
        <div className="hero-or"></div>
        <Link to="/contact" className="btn btn--alt hero-btn">
          <span>Get in touch</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
