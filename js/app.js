(function() {

    'use strict';

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
            $.ajax({
                type: 'get',
                url: url,
                success: function(data) {
                    cb(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(arguments);
                }
            });
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

    var addHasErrorToGroup = function($group) {
        $group.parent('.form-group').addClass('has-error');
    };

    var validateEmail = function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };

    var $formSuccessContent = $('<h1>Your message has been sent. I\'ll get back to you as soon as I can :)</h1>');

    $('form').submit(function(event) {

        event.preventDefault();

        var hasErrors = false;

        var $form = $(this);
        var $formGroup = $form.find('.form-group');
        var $emailField = $form.find('input[name="email"]');
        var $submitButton = $form.find('input[type="submit"]');
        var originalSubmitButtonVal = $submitButton.val();
        var gotcha = $form.find('input[name="_gotcha"]').val();
        var name = $form.find('input[name="name"]').val();
        var email = $emailField.val();
        var message = $form.find('textarea[name="message"]').val();
        var sendingClass = $form.data('sending-class');

        $formGroup.removeClass('has-error');
        $form.addClass(sendingClass);
        $submitButton.val($submitButton.data('disable-with')).attr('disabled', true);
        
        if(!validateEmail(email)) {
            addHasErrorToGroup($emailField);
            hasErrors = true;
        }

        $form.find('[required]').each(function(index, field) {
            var $field = $(field);
            var val = $field.val();
            if(!val) {
                addHasErrorToGroup($field);
                hasErrors = true;
            }
        });

        if(hasErrors) {
            $submitButton.val(originalSubmitButtonVal).attr('disabled', false);
            return $form.removeClass(sendingClass);
        }

        var formData = {
            name: name,
            email: email,
            message: message,
            _gotcha: gotcha
        };

        $.ajax({
            url: '//formspree.io/zeb.apy@gmail.com',
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function() {
                $form.slideUp();
                $formSuccessContent.hide();
                $form.before($formSuccessContent);
                $form.remove();
                $formSuccessContent.fadeIn();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(arguments);
            }
        });
    });    

})();