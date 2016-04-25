// banner videos



function vidplay() {

  var video = document.getElementById("vid1");

  var video2 = document.getElementById("vid2");

  if (video != null) {

    video.play();

  }

  if (video2 != null) {

    video2.play();

  }  

}



function navOffTop() {

  var offTop = $('nav.main-nav').height();

  var docScroll = $( document ).scrollTop();

  

  if (docScroll > offTop) {

    $('body').removeClass('at-top');

  } else {

    $('body').addClass('at-top');

  }

}



// Tabs

function activeTab() {

  var active = $('.tabs li.selected, .tabs-vertical li.selected').attr('tab-data-show');

  $('.tab-content[tab-data="' + active + '"]').show();

  $('.tab-content[tab-data="' + active + '"]').siblings('.tab-content').hide();

}



// Popups



// open Popup

function popUpOpen(id) {

  $('#' + id).show();

  $('body').addClass('modalActive');

}



// close Popup



function popupVideoReset(activePopupIframe) {

  var $frame = $('.iframe-popup').find('iframe');

  var vidsrc = $frame.attr('src');

  $frame.attr('src','');

}



function popUpClose() {

  $('body').removeClass('modalActive');

  var f = iFrame.find('iframe');

  popupVideoReset(f);

  $('.pop-up').hide();

}





function popupSetSource(cl) {

  var $this = cl,

      vidsrc = $this.attr('iframe-src'),

      $frame = $('.iframe-popup').find('iframe');

  $frame.attr('src', vidsrc);

}



var iFrame = $('.iframe-popup');



navOffTop();







// DOCUMENT READY

$(document).ready(function() {

  activeTab();

  jQuery.scrollSpeed(100, 800);

  if ($('body').hasClass('with-skrollr')) {

    skrollr.init({

      forceHeight: false,

      constants: {

        slider: $('.home-slider').height(),

        paratop: ($('.home-paralax').offset().top),

        parabot: ($('.home-paralax').offset().top + $('.home-paralax').outerHeight()),

      }

    });

  }

  if ($('body').hasClass('with-slider')) {

    // Init Slider

    $('.bxslider').bxSlider({

      mode: 'fade',

      pager: true,

      controls: false

    });

  }



  // Nav Show/Hide


  $('.tabs li span, .tabs-vertical li span').on('click', function(){

    $(this).parent('li').addClass('selected').siblings('li').removeClass('selected');

    activeTab();

  });



 // Modals



  $('[iframe-modal-open]').on('click', function () {

    var modalId = $(this).attr('popup-open');

    popupSetSource($(this));

    $('body').addClass('modalActive');

    iFrame.show();

  });



  $('[modal-open]').on('click', function () {

    var modalId = $(this).attr('modal-open');

    popUpOpen(modalId);

  });



  $('[close-popup]').on('click', function () {

    popUpClose();

  });



  //close popups on ESC

  $(document).keyup(function(e) {

    if (e.keyCode == 27) { 

      popUpClose();

    }  

  });

  $(".arrow-down").click(function() {

    $('html, body').animate({

      scrollTop: $("#about").offset().top - 80

    }, 500);

  });



});



// 



$(window).load(function() {

  vidplay();

  $('.preloader').fadeOut();

});



$(document).on('scroll', function() {

  navOffTop();

});

