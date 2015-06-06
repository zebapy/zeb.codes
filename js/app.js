(function() {

    var scrollToHash = function(hash, cb) {
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            cb();
        });
    };

    var pluginName = 'projectify';
    var defaults = {
        projectLoadingClass: 'loading',
        projectDoneClass: 'open'
    };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.id = this.$element.attr('id');
        this.$projectContent = $('<div class="project-content"></div>');
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {

        init: function() {
            this.$element.data('loaded', false);
            this.initListener();
            this.$projectContent.hide();
            this.$element.append(this.$projectContent);
        },

        initListener: function() {
            var self = this;
            var $projectLink = this.$element.find('a');

            $projectLink.on('click', function(event) {
                event.preventDefault();
                self.onProjectLinkClick($projectLink);
            });
        },

        onProjectLinkClick: function($link) {
            var url = $link.attr('href');

            var projectLoaded = this.$element.data('loaded');
            var projectOpen = this.$element.hasClass(this.settings.projectDoneClass);

            if(!projectLoaded) {
                this.openProject(url);
            } else if(projectLoaded && !projectOpen) {
                this.showProjectContent();
            } else {
                this.closeProject();
            }
        },

        openProject: function(url) {
            var self = this;

            this.onProjectLoading();

            this.loadData(url, function(data) {

                self.content = $(data).find('#content');

                self.insertProjectContent();

                self.scrollToProject(function() {

                    self.onProjectLoaded();

                    self.showProjectContent();

                });

            });
        },

        insertProjectContent: function() {
            this.$projectContent.html(this.content);
        },

        showProjectContent: function() {
            this.$element.addClass(this.settings.projectDoneClass);
            this.$projectContent.show();
        },

        onProjectLoading: function() {
            this.$element.addClass(this.settings.projectLoadingClass);
        },

        onProjectLoaded: function() {
            this.$element.removeClass(this.settings.projectLoadingClass);
            this.$element.data('loaded', true);
        },

        scrollToProject: function(cb) {
            var hash = '#' + this.id;
            scrollToHash(hash, cb);
        },

        closeProject: function() {
            this.$projectContent.hide();
            this.$element.removeClass(this.settings.projectDoneClass);
        },

        loadData: function(url, cb) {
            setTimeout(function() {

                $.ajax({
                    type: 'get',
                    url: url,
                    success: function(data) {
                        cb(data);
                    },
                    error: function() {

                    }
                });

            // REMOVE FOR PRODUCTION. just to dummy latency
            }, 1000);
        }
    });

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if(!$.data( this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

    $('[data-project]').projectify();

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        scrollToHash(hash);
    });

})();