import React from 'react';

const ProjectPage = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-push-1">
          <header>
            <a href="/#work" class="btn btn-secondary">
              Thanks, I'm done looking
            </a>
            {/* <h1 class="font-huge">{{ page.title }}</h1> */}
            {/* <!-- <h4 class="project-type">{{ page.type }}</h4> --> */}
            <p class="project-tags">
              {/* {% for tag in page.tags %} */}
              {/* #{{tag }} */}
              {/* {% endfor %} */}
            </p>
          </header>
          <div id="content">
            {/* {{ content }} */}

            {/* {% if page.images %} */}
            <div class="row">
              <div class="col-xs-12 col-md-7">
                {/* {% if page.images.desktop %} */}
                <div class="browser">
                  <div class="browser-toolbar">
                    <div class="browser-icons" />
                  </div>
                  <div class="browser-viewport">
                    <img src="/img/{{ page.images.desktop }}" alt="" />
                  </div>
                </div>
                {/* {% endif %} */}
              </div>
              <div class="col-xs-12 col-md-5">
                {/* {% if page.images.mobile %} */}
                <div class="iphone">
                  <div class="iphone-screen">
                    <img src="/img/{{ page.images.mobile }}" alt="" />
                  </div>
                </div>
                {/* {% endif %} */}
              </div>
            </div>
            {/* {% endif %} */}

            {/* {% if page.project_url %} */}
            <div class="mtb2 text-center">
              {/* <a href="{{page.project_url}}" class="btn btn-primary">Visit project &rarr;</a> */}
            </div>
            {/* {% endif %} */}
          </div>
          {/* <!-- <img src="{{page.featured_image}}" alt="{{ page.title }}"> --> */}
          <footer class="text-center">
            <div class="p3">
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
