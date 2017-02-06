// Basic syntax:   $(selector).action()

$(function(){ // DOM ready

    $(".series_logo").fadeTo(0, 0.2); // initial opacity

    $(".series_logo").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
    });

});

/* For scrolling to a div on screen
$("#nav_about_me").click(function() {
    $('html,body').animate({
        scrollTop: $(".about_me").offset().top},
        'slow');
});*/
