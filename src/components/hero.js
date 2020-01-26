import React from 'react';
import { Link } from 'gatsby';

import Revealer from './revealer';

const HeroSection = ({ title, text, avatar, alt }) => {
  return (
    <section className="py-16 lg:py-64">
      <div className="lg:w-2/3">
        {/* <figure className="hero-figure">
          <img src={avatar} alt={alt} className="hero-avatar" />
        </figure> */}
        <h1 className="h1">{title}</h1>
        <p className="text-xl mb-5">{text}</p>
        <div className="inline-flex">
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
