$(document).ready(function () {
  'use strict';

  /*----------------------------------
      masonry
  -----------------------------------*/
  $(window).on('load', function () {
    $('.masonary-item').masonry({
      percentPosition: true
    });
  });

  /*----------------------------------
      video-play
  -----------------------------------*/
  $('.play-icon i').on('click', function () {
    var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });


  /*----------------------------------
      testimonial-slider
  -----------------------------------*/
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    arrows: false
  });

  /*----------------------------------
       inCircle element
   -----------------------------------*/
  function inCircleInit() {


    if ($(window).width() > 0) {
      var oTop;
      if ($('#inCircle-element').length !== 0) {
        oTop = $('#inCircle-element').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('#inCircle-element').incircle({
          radius: '7.5em', //distance from center
          start: -150
        });
      }
    }

    if ($(window).width() > 576) {
      var oTop;
      if ($('#inCircle-element').length !== 0) {
        oTop = $('#inCircle-element').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('#inCircle-element').incircle({
          radius: '10.5em', //distance from center
          start: -150
        });
      }
    }

    if ($(window).width() > 1200) {
      var oTop;
      if ($('#inCircle-element').length !== 0) {
        oTop = $('#inCircle-element').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('#inCircle-element').incircle({
          radius: '12.5em', //distance from center
          start: -150
        });
      }
    }
  }

  $(window).on('scroll', function () {
    inCircleInit();
    
  });


  /*----------------------------------
      reveal
  -----------------------------------*/
  function reveal() {

    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0
    });
  }             
  reveal(); 


  /*----------------------------------
       Preloader js
  -----------------------------------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut('show');
  });
});


/*----------------------------------
     inCircle element
 -----------------------------------*/
(function ($) {
  'use strict';
  $.fn.incircle = function (options) {
    var settings = $.extend({
      type: 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
      radius: '14em', //distance from center
      start: 0, //shift start from 0
      top: '0',
      left: '0'
    }, options);
    this.css({
      'position': 'relative',
      'top': settings.top,
      'left': settings.left,
      'list-style-type': 'none',
      'margin': 0
    });
    var elements = this.children(':not(:first-child)');
    var numberOfElements = (settings.type === 1) ? elements.length : elements.length - 1;
    var slice = 360 * settings.type / numberOfElements;
    elements.each(function (i) {
      var $self = $(this),
        rotate = slice * i + settings.start,
        rotateReverse = rotate * -1;
      $self.css({
        'position': 'absolute',
        '-webkit-transition': 'all 1s linear',
        '-moz-transition': 'all 1s linear',
        'transition': 'all 1s linear'
      });
      $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + settings.radius + ') rotate(' + rotateReverse + 'deg)'
      });
    });
    return this;
  };
}(jQuery));