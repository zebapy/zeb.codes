---
---

$(window).load ->
    $('.hero-background').css
        'opacity': 0.25
        'filter': 'alpha(opacity=0.25)'


$('a').on 'click', ->
    $('html, body').animate
        scrollTop: $( $(this).attr 'href' ).offset().top
    , 500
    false
