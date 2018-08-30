import React from 'react';

const HomePage = ({ data }) => {
  return (
    <div class="container">
      <section class="section" id="hero">
        <div class="">
          <h1 class="font-huge mb0 color-primary">Hello, I'm Zeb Pykosz</h1>
          <h2 class="color-primary">
            I am a web developer and multidisciplinary designer based in
            Middlebury, Vermont.
          </h2>
          <a href="#work" class="btn btn-primary">
            View my work
          </a>
          <a href="#about" class="btn btn-secondary">
            Learn more about me
          </a>
        </div>
      </section>

      <section class="section" id="work">
        <div class="row">
          <div class="col-xs-12 col-md-2">
            <h1 class="section-title text-md-right">Work</h1>
          </div>
          <div class="col-xs-12 col-md-10 section-content">
            {/* projects */}
          </div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-8">
            <div class="row">
              <div class="col-xs-12 col-md-3">
                <h1 class="section-title text-md-right">About</h1>
              </div>
              <div class="col-xs-12 col-md-9 section-content">
                {/* <!-- <img src="{{site.gravatar}}" alt="{{site.author}}" class="img-round"> --> */}
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
          <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="row">
              <div class="col-xs-12 col-md-3">
                <h1 class="section-title text-md-right">Skills</h1>
              </div>
              <div class="col-xs-12 col-md-9 section-content">
                <ul class="skill-list">
                  {skills.map(skill => (
                    <li class="skill-item" key={skill.name}>
                      <span class="skill-label" title={skill.name}>
                        {skill.name}
                      </span>
                      <div
                        class="skill-bar"
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

      <section class="section" id="contact">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-8">
            <div class="row">
              <div class="col-xs-12 col-md-3">
                <h1 class="section-title text-md-right">Contact</h1>
              </div>
              <div class="col-xs-12 col-md-9 section-content">
                <p class="lead">
                  Want to say hello or talk to me about a project you have? I'd
                  be happy to hear from you. If you prefer, you can also email
                  me at <a href={`mailto:${email}`}>{email}</a>
                </p>
                <form name="contact" class="form" netlify>
                  <div class="row">
                    <div class="col-xs-12 col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          spellcheck="false"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-xs-12 col-lg-6">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group form-actions">
                    <input
                      type="submit"
                      value="Send message"
                      class="btn btn-secondary"
                      data-disable-with="Sending message..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="row">
              <div class="col-xs-12 col-md-3">
                <h1 class="section-title text-md-right">Elsewhere</h1>
              </div>
              <div class="col-xs-12 col-md-9 section-content">
                {/* {% include social.html %} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="global-footer">
        {/* <p>{{site.author}} &copy; {{ site.time | date: '%Y' }} &middot; <a href="https://github.com/zebapy/zebapy.github.io">View source</a></p> */}
      </footer>
    </div>
  );
};

export default HomePage;
