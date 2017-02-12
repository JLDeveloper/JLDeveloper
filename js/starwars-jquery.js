$(function(){ // DOM ready

    $(".back_button_starwars").fadeTo(1, 0.2); // initial opacity

    $(".back_button_starwars").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
    });

});
