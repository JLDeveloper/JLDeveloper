 $(function(){ // DOM ready
   //GITHUB
   $( ".skill" ).mouseenter(function() {
    $( this ).animate({boxShadow: '0 0 30px #00cc00'}, 200 );
   });
   $( ".skill" ).mouseleave(function() {
    $( this ).animate({boxShadow: '0 0 0 #000000'}, 200 );
   });
 });

/*
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
*/
