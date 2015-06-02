// var userFeed = new Instafeed({
//     get: 'user',
//     userId: 259725889,
//     accessToken: '259725889.467ede5.c033f82aca634bf2a615a1352f958de0',
//     limit: 6,
//     template: '<a href="{{link}}" data-likes="{{likes}}"><img src="{{image}}"></a>'
// });

// userFeed.run();

(function() {

    var scrollToHash = function(hash) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
    };

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        scrollToHash(hash);
    });

    var $body = $('body');
    var $modal = $('<div class="modal animated fadeInDown"></div>');

    $('body').on('click', '[data-modal-close]', function(event) {
        event.preventDefault();

        $(this).closest('.modal').addClass('fadeOut').delay(1000).removeClass('fadeOut').remove();

        $body.removeClass('noscroll');
        scrollToHash('#work');
        document.location.hash = '';
    });

    var openModal = function(data) {
        $body.append($modal);

        var $content = $(data).find('#project').html();

        $modal.html($content);

        $body.addClass('noscroll');
    };

    var getContent = function(url, cb) {

        $.ajax({
            type: 'GET',
            url: url,
            success: function(data) {
                cb(data);
            },
            error: function(e) {
                console.log(e);
            }
        });
    };

    var showProject = function(url) {
        getContent(url, function(data) {
            openModal(data);
            document.location.hash = url;
        });
    };

    $('.project-anchor').on('click', function(event) {

        event.preventDefault();

        var url = $(this).attr('href');

        showProject(url);

    });


    // window.onhashchange = showProject(window.location.hash);

})();