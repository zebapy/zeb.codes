// var userFeed = new Instafeed({
//     get: 'user',
//     userId: 259725889,
//     accessToken: '259725889.467ede5.c033f82aca634bf2a615a1352f958de0',
//     limit: 6,
//     template: '<a href="{{link}}" data-likes="{{likes}}"><img src="{{image}}"></a>'
// });

// userFeed.run();

$(window).load(function() {
    $('a').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
});