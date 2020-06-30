var x= document.getElementById("myHead");
var x1= document.getElementById("myHead1");
var x2= document.getElementById("myHead2");
var x3= document.getElementById("myHead3");
var y= document.getElementById("myImg");
var z=document.getElementById("arrow");
var a=document.getElementById("head1");
var b=document.getElementById("head2");
var c= document.getElementById("head3");
var d= document.getElementById("head4");
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
    y.style.top='-'+89+'%';
    z.style.display='block';
    a.style.opacity=`${75}%`;
    b.style.opacity=`${75}%`;
    c.style.opacity=`${40}%`;
    d.style.opacity=`${70}%`;
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
/*Carousel*/
$(document).ready(function() {
    var getProductHeight = $('.product.active').height();
  
    $('.products').css({
      height: getProductHeight
    });
  
    function calcProductHeight() {
      getProductHeight = $('.product.active').height();
  
      $('.products').css({
        height: getProductHeight
      });
    }
  
    function animateContentColor() {
      var getProductColor = $('.product.active').attr('product-color');
  
  
  
      $('.title').css({
        color: getProductColor
      });
  
      $('.btn').css({
        color: getProductColor
      });
      $('.btn1').css({
        color: getProductColor
      });
    }
  
    var productItem = $('.product'),
      productCurrentItem = productItem.filter('.active');
  
    $('#next').on('click', function(e) {
      e.preventDefault();
  
      var nextItem = productCurrentItem.next();
  
      productCurrentItem.removeClass('active');
  
      if (nextItem.length) {
  
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }
  
      calcProductHeight();
      animateContentColor();
    });
  
    $('#prev').on('click', function(e) {
      e.preventDefault();
  
      var prevItem = productCurrentItem.prev();
  
      productCurrentItem.removeClass('active');
  
      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }
  
      calcProductHeight();
      animateContentColor();
    });
  
    // Ripple
    $('[ripple]').on('click', function(e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $('.ripple');
  
      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        background: $(this).attr("ripple-color")
      }).appendTo($(this));
  
      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);
    });
  });
