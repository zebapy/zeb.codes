import React from 'react';

import SEO from './seo';
import { Link } from 'gatsby';

export const SlideLetters = ({ children }) => {
  const words = children.split(' ');

  return words.map((word, wordIdx) => {
    const letters = word.split('');

    return (
      <React.Fragment key={wordIdx}>
        <span
          style={{
            whiteSpace: 'nowrap'
          }}
        >
          {letters.map((l, letterIdx) => (
            <>
              <span
                key={letterIdx}
                className="inline-block slide-letter animated fadeInDown"
                style={{
                  animationDelay: 20 * letterIdx + 'ms'
                }}
              >
                {l}
              </span>
            </>
          ))}
        </span>{' '}
      </React.Fragment>
    );
  });
};

export const SlideWords = ({ children }) => {
  if (typeof children !== 'string') {
    return children;
  }

  const words = children.split(' ');

  return words.map((l, i) => (
    <React.Fragment key={i}>
      <span
        className="inline-block slide-word animated fadeInDown"
        style={{
          animationDelay: 20 * i + 'ms'
        }}
      >
        {l}
      </span>{' '}
    </React.Fragment>
  ));
};

const PageHead = ({ title, text, backLinkText, backLink, children }) => (
  <header className="pt-6 mb-24 md:mb-32">
    <SEO title={title} description={text} />
    {backLink && backLinkText && (
      <nav>
        <Link to={backLink} className="btn btn--sm">
          <span>&larr; {backLinkText}</span>
        </Link>
      </nav>
    )}
    <div className="">
      <h1 className="h1">
        <SlideLetters>{title}</SlideLetters>
      </h1>
      {text && (
        <p className="text-3xl mb-5">
          <SlideWords>{text}</SlideWords>
        </p>
      )}
    </div>

    <div className="fadeIn animated">{children}</div>
  </header>
);

export default PageHead;
