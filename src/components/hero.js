import React from 'react';
import { Link } from 'gatsby';

const HeroSection = ({ title, text, avatar, alt }) => {
  return (
    <section className="hero">
      <figure className="hero-figure">
        <img src={avatar} alt={alt} className="hero-avatar" />
      </figure>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-text">{text}</p>
      <div className="hero-btns">
        <Link to="/work" className="btn hero-btn">
          See my work
        </Link>
        <div className="hero-or">or</div>
        <Link to="/contact" className="btn btn--alt hero-btn">
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
