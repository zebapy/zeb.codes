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

    var loadProject = function(url, cb) {

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
        }, 0);
    };

    $projectLink.on('click', function(event) {

        event.preventDefault();

        var $this = $(this);

        var $project = $this.closest('[data-project]');
        var $projectSummary = $project.find('.project-summary');

        if($project.hasClass('project-loaded')) return false;

        // disable links
        $projectLink.attr('disabled', true);
        
        var url = $this.attr('href');

        var projectId = $project.attr('id');
        var projectHash = '#' + projectId;

        // add loading to project container
        $project.addClass('project-loading');

        var $newContent = $('<div class="project-content"></div>');

        // append new content
        $project.append($newContent);

        loadProject(url, function(data) {

            $project.removeClass('project-loading').addClass('project-loaded');

            scrollToHash(projectHash, function() {
                
                // hide content
                $projectSummary.addClass('fadeOut');

                var content = $(data).find('#content');

                // show new content
                $newContent.html(content);
            });
        });

    });

})();