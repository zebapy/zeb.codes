// var userFeed = new Instafeed({
//     get: 'user',
//     userId: 259725889,
//     accessToken: '259725889.467ede5.c033f82aca634bf2a615a1352f958de0',
//     limit: 6,
//     template: '<a href="{{link}}" data-likes="{{likes}}"><img src="{{image}}"></a>'
// });

// userFeed.run();

(function() {

    var scrollToHash = function(hash, cb) {
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            cb();
        });
    };

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        scrollToHash(hash);
    });

    // project link clicked
    var $projectLink = $('[data-project]').find('a');

    var projectLoadingClass = 'loading';
    var projectDoneClass = 'open';
    var currentProject = '';

    var getData = function(url, cb) {

        setTimeout(function() {

            // load content via ajax
            $.ajax({
                type: 'get',
                url: url,
                // async: true,
                success: function(data) {
                    cb(data);
                }
            });

        // REMOVE FOR PRODUCTION. just to dummy latency
        }, 1000);
    };

    var showProjectContent = function($project) {

    };

    var hideProjectContent = function() {

    };

    var closeProject = function(id) {

        var $projectToClose = $(id);

        var $projectContent = $projectToClose.find('.project-content');

        $projectToClose.removeClass(projectDoneClass);

        $projectContent.slideUp();
    };

    var openProject = function($this) {

        var url = $this.attr('href');

        var $project = $this.closest('[data-project]');
        var $projectSummary = $project.find('.project-summary');
        var projectId = $project.attr('id');
        var projectHash = '#' + projectId;
        var $projectContent = $('<div class="project-content"></div>');

        $projectContent.hide();
        $project.append($projectContent);

        if($project.hasClass(projectDoneClass)) {
            return closeProject(projectHash);
        } else if ($project.data('loaded') === true) {
            return $projectContent.slideDown();
        }

        // disable links
        $projectLink.attr('disabled', true);

        currentProject = projectId;

        // add loading to project container
        $project.addClass(projectLoadingClass).attr('data-loaded', true);

        // append new content
        getData(url, function(data) {

            $project.removeClass(projectLoadingClass).addClass(projectDoneClass);

            scrollToHash(projectHash, function() {
                
                // hide content
                $projectSummary.addClass('fadeOut');

                var content = $(data).find('#content');

                // show new content
                $projectContent.html(content);

                $projectContent.slideDown();
            });
        });
    };

    $projectLink.on('click', function(event) {

        event.preventDefault();

        openProject($(this));

    });

    

})();