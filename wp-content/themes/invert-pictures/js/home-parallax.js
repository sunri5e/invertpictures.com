
$(document).ready(function() {
  if ($('body').hasClass('with-skrollr')) {
    skrollr.init({
      forceHeight: false,
      constants: {
        slider         : $('.home-slider').height(),




        // Паралакс
        para1top : $('.home-parallax-0').offset().top,
        para1bot : $(document).height() - $(window).height(),
        // para1bot : $('.home-parallax-1').offset().top - $(window).height(),
        // para2top : $('.home-parallax-1').offset().top,
        // para2bot : $(document).height() - $(window).height(),
      }
    });
  }
});