 jQuery(document).ready(function($) {
 
    $(".scroll a").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });

document.getElementById("navbarHome").children[0].style.color = "#E89F10";
$(window).scroll(function() {
   var hT = $('#home').offset().top,
       hH = $('#home').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       for(var i=0; i<4; i++) {
           document.getElementById("navContainer").children[i].children[0].style.color = "#777";
       }
     document.getElementById("navbarHome").children[0].style.color = "#E89F10";
   }
});

$(window).scroll(function() {
    var hT = document.getElementById("home").clientHeight,
        hH = document.getElementById("top-nav").clientHeight,
        wS = $(this).scrollTop();
   if (wS > (hT-hH)){
       for(var i=0; i<4; i++) {
           document.getElementById("navContainer").children[i].children[0].style.color = "#777";
       }
       document.getElementById("navbarAbout").children[0].style.color = "#E89F10";
   }
});

$(window).scroll(function() {
    var hT = document.getElementById("about").clientHeight+document.getElementById("home").clientHeight,
        hH = document.getElementById("top-nav").clientHeight,
        wS = $(this).scrollTop();
   if (wS > (hT-hH)){
       for(var i=0; i<4; i++) {
           document.getElementById("navContainer").children[i].children[0].style.color = "#777";
       }
       document.getElementById("navbarWorks").children[0].style.color = "#E89F10";
   }
});

$(window).scroll(function() {
    var hT = document.getElementById("about").clientHeight+document.getElementById("home").clientHeight+document.getElementById("works").clientHeight,
        hH = document.getElementById("top-nav").clientHeight,
        wS = $(this).scrollTop();
   if (wS > (hT-hH)){
       for(var i=0; i<4; i++) {
           document.getElementById("navContainer").children[i].children[0].style.color = "#777";
       }
     document.getElementById("navbarContact").children[0].style.color = "#E89F10";
   }
});
var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

function verify() {
    var string = document.getElementById("email-input").value,
    substring = "@";
    if(string.indexOf(substring) > -1){
        document.getElementById("actual-send").click();
    } else{
        alert("Success! Message has been sent.");
        location.reload();
    }
}



