var x= document.getElementById("myHead");
var x1= document.getElementById("myHead1");
var x2= document.getElementById("myHead2");
var x3= document.getElementById("myHead3");
var y= document.getElementById("myImg");
x.addEventListener("webkitAnimationEnd", myEndFunction);
x.addEventListener("animationend", myEndFunction);
function myEndFunction()
{
    x.style.width=0;
    x1.style.width=0;
    x2.style.width=0;
    x3.style.width=0;
    
}
y.addEventListener("webkitAnimationEnd", myEndFunction1);
y.addEventListener("animationend", myEndFunction1);
function myEndFunction1()
{
    y.style.opacity=100;
}
//navbar js
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});