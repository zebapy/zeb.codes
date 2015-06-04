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


})();