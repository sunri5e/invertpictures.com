parallaxPaddings16x9 = [65.2654,60.41,44.1,57.8035,35.733];
parallaxPaddings3x4 = [80,60,55,57.8035,35];


function getRatio() { 
  return Math.round($(window).width() / $(window).height());
}

function setPadding(arr) {
  for (var i = 0; i < arr.length; i++) {
    $('.home-parallax-'+i).attr('style','padding-top: '+arr[i]+'%');
  }
}

function reInitHomeParallax() {
  var ratio = getRatio();
  if (ratio == 2) {
    $('body').removeClass('ratio-3x4')
    setPadding(parallaxPaddings16x9);
  } else {
    $('body').addClass('ratio-3x4')
    setPadding(parallaxPaddings3x4);
  }
}




$(document).ready(function() {
  reInitHomeParallax();
  if ($('body').hasClass('with-skrollr')) {
    skrollr.init({
      forceHeight: false,
      constants: {
        slider         : $('.home-slider').height(),
        para1top       : ($('section.about').offset().top),
        para1bot       : ($('.home-parallax-0').offset().top + ($('.home-parallax-0').outerHeight() / 2)),

        para2topbefore : ($('.home-parallax-1').offset().top - ($('.home-parallax-1').outerHeight() / 2)),
        para2top       : ($('.home-parallax-1').offset().top),
        para2mid       : ($('.home-parallax-1').offset().top + ($('.home-parallax-1').outerHeight() / 2)),
        para2bot       : ($('.home-parallax-1').offset().top + $('.home-parallax-1').outerHeight()),

        para3topbefore : ($('.home-parallax-2').offset().top - ($('.home-parallax-2').outerHeight() / 2)),
        para3top       : ($('.home-parallax-2').offset().top),

        para4topbefore : ($('.home-parallax-3').offset().top - ($('.home-parallax-3').outerHeight() / 3)),
        para4mid       : ($('.home-parallax-3').offset().top + ($('.home-parallax-3').outerHeight() / 2)),

        para5topbefore : ($('.home-parallax-4').offset().top - ($('.home-parallax-4').outerHeight() / 2)),
        para5top       : ($('.home-parallax-4').offset().top - ($('.home-parallax-4').outerHeight() / 3)),
      }
    });
  }
});



$(window).on('resize', function() {
  reInitHomeParallax();
});