import React from 'react';
import Helmet from 'react-helmet';

import '../styles/app.scss';

const HomePage = ({ data, buildTime, email, social = [], skills = [] }) => {
  return (
    <div className="container">
      <Helmet>
        <meta name="author" content="{{ site.author }}" />
        <meta name="description" content="{{ site.description }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="{{ site.title }}" />
        <meta property="og:description" content="{{ site.description }}" />
        <meta property="og:site_name" content="{{ site.author }}" />
        <meta property="og:image" content="{{site.image_path}}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ site.url }}" />
        <meta name="twitter:image" content="{{ site.image_path }}" />
        <meta name="twitter:title" content="{{ site.title }}" />
        <meta name="twitter:description" content="{{ site.description }}" />
        <link rel="stylesheet" href="/css/app.min.css" />
        <link
          href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <section className="section" id="hero">
        <div className="">
          <h1 className="font-huge mb0 color-primary">Hello, I'm Zeb Pykosz</h1>
          <h2 className="color-primary">
            I am a web developer and multidisciplinary designer based in
            Middlebury, Vermont.
          </h2>
          <a href="#work" className="btn btn-primary">
            View my work
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn more about me
          </a>
        </div>
      </section>

      <section className="section" id="work">
        <div className="row">
          <div className="col-md-2">
            <h1 className="section-title text-md-right">Work</h1>
          </div>
          <div className="col-md-10 section-content">{/* projects */}</div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">About</h1>
              </div>
              <div className="col-md-9 section-content">
                {/* <!-- <img src="{{site.gravatar}}" alt="{{site.author}}" className="img-round"> --> */}
                <p>
                  I&rsquo;m a designer and front-end developer born and raised
                  in rural Vermont. I am primarily self-taught with {buildTime}{' '}
                  combined years of freelance and professional experience. I
                  have a passion for writing code and tweaking pixels.
                </p>
                <p>
                  I am currently employed at Middlebury College where I develop
                  micro and Wordpress sites, and do front-end for Drupal themes.
                </p>
                <p>
                  I am also co-founder of a project called Fateseal which
                  consumes a lot of my free time. You can learn more about it in
                  my <a href="#work">portfolio</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Skills</h1>
              </div>
              <div className="col-md-9 section-content">
                <ul className="skill-list">
                  {skills.map(skill => (
                    <li className="skill-item" key={skill.name}>
                      <span className="skill-label" title={skill.name}>
                        {skill.name}
                      </span>
                      <div
                        className="skill-bar"
                        data-level={skill.level}
                        style={{
                          backgroundColor: skill.color,
                          width: skill.level + '%'
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Contact</h1>
              </div>
              <div className="col-md-9 section-content">
                <p className="lead">
                  Want to say hello or talk to me about a project you have? I'd
                  be happy to hear from you. If you prefer, you can also email
                  me at <a href={`mailto:${email}`}>{email}</a>
                </p>
                <form name="contact" className="form" data-netlify>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          spellCheck={false}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group form-actions">
                    <input
                      type="submit"
                      value="Send message"
                      className="btn btn-secondary"
                      data-disable-with="Sending message..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Elsewhere</h1>
              </div>
              <div className="col-md-9 section-content">
                <ul class="social-list">
                  {social.map(item => (
                    <li class="social-item" key={item.place}>
                      <a href={item.url} class="social-anchor">
                        {item.place}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="global-footer">
        {/* <p>{{site.author}} &copy; {{ site.time | date: '%Y' }} &middot; <a href="https://github.com/zebapy/zebapy.github.io">View source</a></p> */}
      </footer>
    </div>
  );
};

export default HomePage;
