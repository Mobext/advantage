
var winH = window.innerHeight;
var winW = window.innerWidth;
var range = winH/3;
var scroll = $(window).scrollTop();



window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

    window.requestAnimationFrame(updateLax)

}

window.addEventListener("resize", function() {
	lax.updateElements()
});

// // Scroll Variables (tweakable)
// var defaultOptions = {
    
//         // Scrolling Core
//         frameRate        : 300, // [Hz] 150
//         animationTime    : winh*5, // [px] 400
//         stepSize         : winh*5, // [px] 120
    
//         // Pulse (less tweakable)
//         // ratio of "tail" to "acceleration"
//         pulseAlgorithm   : true,
//         pulseScale       : 8,
//         pulseNormalize   : 1,
    
//         // Acceleration
//         accelerationDelta : 80,  // 20
//         accelerationMax   : 20,   // 1
    
//         // Keyboard Settings
//         keyboardSupport   : true,  // option
//         arrowScroll       : 50,     // [px]
    
//         // Other
//         touchpadSupport   : true,
//         fixedBackground   : true, 
//         excluded          : ""    
// };

// var options = defaultOptions;


$(window).scroll(function() {
    
    

    scroll = $(window).scrollTop();
    console.log(scroll);
    /*if( scroll > 0) {
      start.reverse();
    } else {
      start.play();
    }*/
    //document.getElementById("pinMask").style.opacity = "1";
    //console.log(scroll)
    
  });

  var start = new TimelineMax();

  $pc = $('.laptop');
  $title= $('.content h1');
  $text= $('.content p');
  $tri1= $('.triangle-down1');
  $tri2= $('.triangle-down2');
  $tri3= $('.triangle-down2');

  start.to($pc, 0.5, {css: {right: "-10%", opacity: 1}} )
  .to($title, 0.5, {css: {top: "0", opacity: 1}} )
  .to($text, 0.5, {css: {top: "0", opacity: 1}} )
  .to($tri1, 0.5, {css: {top: "0", opacity: 1}}, "-=0.5" )
  .to($tri2, 0.5, {css: {top: "0", opacity: 1}}, "-=0.25" )
  .to($tri3, 0.5, {css: {top: "20%", opacity: 1}}, "-=0.25" );


  start.play(); 



/* SCROLL FULL PAGE */

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.1, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});