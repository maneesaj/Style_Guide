
$(document).ready(function() {
var stickyNavTop = $('nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('nav').addClass('sticky');
    $('#mobile_menu_cont li').addClass('float_right');
    $("#white_logo").css("display", "block");
    $('#white_logo').addClass('full_menu_logo_display');




} else {
    $('nav').removeClass('sticky');
    $('#mobile_menu_cont li').removeClass('float_right');
    $('#white_logo').addClass('full_menu_logo_none');
    $('#white_logo').removeClass('full_menu_logo_display');
    $("#white_logo").css("display", "none");


    

}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});

// Displays Mobile Menu

function display(){
    console.log("Hello, Is it me your looking for?");
                //If menu is not showing
                if ($(".mobile_menu").css("display") == "none") { 
                    //Show it
                    $(".mobile_menu").css("display", "block");
            } else {
                //If it is showing, dont show it
                  $(".mobile_menu").css("display", "none");

                
            }
}

