import React from 'react';

const HeroSection = ({ title, text, avatar, alt }) => {
  return (
    <section className="hero">
      <figure className="hero-figure">
        <img src={avatar} alt={alt} className="hero-avatar" />
      </figure>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-text">{text}</p>
      <div className="hero-btns">
        <a href="#work" className="btn hero-btn">
          See my work
        </a>
        <div className="hero-or">or</div>
        <a href="#contact" className="btn btn--alt hero-btn">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
