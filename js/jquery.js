// Basic syntax:   $(selector).action()

$(function(){ // DOM ready

    $(".series-logo").fadeTo(0, 0.2); // initial opacity

    $(".series-logo").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
    });

});

$(function(){
    $("#hide").click(function(){
        $("#education").hide();
        $("#skills").hide();
    });
    $("#show").click(function(){
        $("#education").show();
        $("#skills").show();
    });
});

$(function () {
    $("#right-arrow").toggle(function () {
        $(this).parent().parent().animate({left:'0px'}, {queue: false, duration: 500});
    }, function () {
        $(this).parent().parent().animate({left:'-280px'}, {queue: false, duration: 500});
    });
});

/*
    <script>
    $( function() {
      $( document ).tooltip();
    } );
    </script>
    -->
    */
