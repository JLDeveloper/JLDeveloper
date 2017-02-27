// Basic syntax:   $(selector).action()

$(function(){ // DOM ready

    $(".series-logo").fadeTo(0, 0.2); // initial opacity

    $(".series-logo").hover(function( e ) {
       $(this).stop().fadeTo(300, e.type=="mouseenter"?1:0.2);
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
