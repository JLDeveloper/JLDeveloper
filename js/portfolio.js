$(function(){ // DOM ready

 //Skill Glow
 $( ".skill" ).mouseenter(function() {
  $( this ).animate({boxShadow: '0 0 30px #00cc00'}, 200 );
 });
 $( ".skill" ).mouseleave(function() {
  $( this ).animate({boxShadow: '0 0 0 #000000'}, 200 );
 });

 //Show Email Address
 $("#emailicon").click(function () {
     $("#email").fadeOut(function () {
       $("#email").text('jonathan.lawrence215@gmail.com').fadeIn();
     });
 });
});

/*
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
*/
