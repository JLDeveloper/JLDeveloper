$(function(){ // DOM ready

    $(".back-button-starwars").fadeTo(1, 0.2); // initial opacity

    $(".back-button-starwars").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
    });

});
