/*
$("#html5-logo").mouseover(function() {
	$(".hidden").css('visibility','visible');
 });
$(".hidden").mouseover(function() {
	$(".hidden").css('visibility','visible');
 });
$(".hidden").mouseout(function() {
	$(".hidden").css('visibility','hidden');
 });
 */
 $(function(){ // DOM ready
   //GITHUB
   $( ".skill" ).mouseenter(function() {
    $( this ).animate({boxShadow: '0 0 30px #ff0000'}, 200 );
   });
   $( ".skill" ).mouseleave(function() {
    $( this ).animate({boxShadow: '0 0 0 #000000'}, 200 );
   });
   $("#icon-github").hover( function() {
    $("#skill1").toggle();
   });
   $("#skill1").hover( function() {
    $("#skill1").show();
   });
   $("#skill1").mouseout( function() {
    $("#skill1").hide();
   });

   //ATOM
   $("#icon-atom").hover( function() {
    $("#skill2").toggle();
   });
   $("#skill2").hover( function() {
    $("#skill2").show();
   });
   $("#skill2").mouseout( function() {
    $("#skill2").hide();
   });

   //ECLIPSE
   $("#icon-eclipse").hover( function() {
    $("#skill3").toggle();
   });
   $("#skill3").hover( function() {
    $("#skill3").show();
   });
   $("#skill3").mouseout( function() {
    $("#skill3").hide();
   });

   //WORDPRESS
   $("#icon-wordpress").hover( function() {
    $("#skill4").toggle();
   });
   $("#skill4").hover( function() {
    $("#skill4").show();
   });
   $("#skill4").mouseout( function() {
    $("#skill4").hide();
   });
*/
 });
