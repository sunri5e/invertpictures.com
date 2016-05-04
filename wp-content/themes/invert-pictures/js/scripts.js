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

// scrollify sections
function scrollifyTransition() {
  $('section.active').addClass('-trans');
  drawSVG(false);
}

function scrollifyActive() {
  var indx = $.grep($('body').attr('class').split(" "), function(v, i){
    return v.indexOf('fp-viewing-') === 0;
  }).join();
  num = indx.substring(11);

  $('section[data-section-id="'+num+'"]')
    .addClass('active')
    .siblings('section').removeClass('active');
  $('section').removeClass('-trans');
  drawSVG(true);
}

function svgInit() {
  $('.-drawable-svg path.stroked').each(function(){
    var path = $(this).get(0);
    var pathLen = path.getTotalLength() + 'px';
    $(this)
      .css('stroke-dashoffset', pathLen)
      .css('stroke-dasharray', pathLen)
      .attr('data-draw', pathLen);
  });
}

function drawSVG(tf) {
  var svgObj = $('section.active svg path.stroked');
  svgObj.each(function(){
    var to = $(this).attr('data-draw');
    $(this).stop();
    if (tf) {
      $(this).animate({'stroke-dashoffset': 0}, 500);
    } else {
      $(this).animate({'stroke-dashoffset': to}, 500);
    }
  });
}

function scrollToSection() {
  if(queryExists('section')) {
    var section = getQueryVariable('section');
  }
}

function newsPostOpen() {
  if(queryExists('post')) {
    var post = decodeURIComponent(getQueryVariable('post'));
    popUpOpen(post);
  }
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
        para1top: ($('section.about').offset().top),
        para1bot: ($('.home-paralax-1').offset().top + ($('.home-paralax-1').outerHeight() / 2)),
        para2top: ($('.home-paralax-2').offset().top - 700),
        para2bot: ($('.home-paralax-2').offset().top + ($('.home-paralax-2').outerHeight() / 2)),
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
  $('.burger').on('click', function(){
    $('body').toggleClass('nav-open');
  });

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
