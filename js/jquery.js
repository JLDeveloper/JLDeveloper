// Basic syntax:   $(selector).action()

$(function(){ // DOM ready

    $(".series-logo").fadeTo(0, 0.2); // initial opacity

    $(".series-logo").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
    });

});

$(document).ready(function(){
    $("#hide").click(function(){
        $(".profile-pic").hide();
    });
    $("#show").click(function(){
        $(".profile-pic").show();
    });
});

/* For scrolling to a div on screen
$("#nav_about_me").click(function() {
    $('html,body').animate({
        scrollTop: $(".about_me").offset().top},
        'slow');
});*/
