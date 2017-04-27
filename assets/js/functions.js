$(document).ready(function() {
$(".mobnav").addClass("hide");
 $("#hamburger-click").click(function() {
         $(".mobnav").removeClass("hide").slideToggle(700);
 });
});
