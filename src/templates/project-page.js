import React from 'react';

const ProjectPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-push-1">
          <header>
            <a href="/#work" className="btn btn-secondary">
              Thanks, I'm done looking
            </a>
            {/* <h1 className="font-huge">{{ page.title }}</h1> */}
            {/* <!-- <h4 className="project-type">{{ page.type }}</h4> --> */}
            <p className="project-tags">
              {/* {% for tag in page.tags %} */}
              {/* #{{tag }} */}
              {/* {% endfor %} */}
            </p>
          </header>
          <div id="content">
            {/* {{ content }} */}

            {/* {% if page.images %} */}
            <div className="row">
              <div className="col-md-7">
                {/* {% if page.images.desktop %} */}
                <div className="browser">
                  <div className="browser-toolbar">
                    <div className="browser-icons" />
                  </div>
                  <div className="browser-viewport">
                    <img src="/img/{{ page.images.desktop }}" alt="" />
                  </div>
                </div>
                {/* {% endif %} */}
              </div>
              <div className="col-md-5">
                {/* {% if page.images.mobile %} */}
                <div className="iphone">
                  <div className="iphone-screen">
                    <img src="/img/{{ page.images.mobile }}" alt="" />
                  </div>
                </div>
                {/* {% endif %} */}
              </div>
            </div>
            {/* {% endif %} */}

            {/* {% if page.project_url %} */}
            <div className="mtb2 text-center">
              {/* <a href="{{page.project_url}}" className="btn btn-primary">Visit project &rarr;</a> */}
            </div>
            {/* {% endif %} */}
          </div>
          {/* <!-- <img src="{{page.featured_image}}" alt="{{ page.title }}"> --> */}
          <footer className="text-center">
            <div className="p3">
              <a href="/#work" data-modal-close>
                &larr; Back home
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
