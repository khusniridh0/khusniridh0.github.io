/*
  Author       : Khusni Ridho
  Template Name: Portofolio
  Version      : 0.2
  */

  (function($) {
    "use strict";

  // Declaret navbar
  let navHeight = $('nav').outerHeight();

  //**================= Preloader =====================**//
  $(window).on('load', function() { 
    $('.atf-status').fadeOut();
    $('.atf-preloader').delay(350).fadeOut('slow'); 
  });

  //**================= Smooth nav on scroll or click =====================**//
  $('a.page-scroll[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navHeight + 40)
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  //**================= Active scrollspy =====================**//
  $('body').scrollspy({
    target: '#menu-top',
    offset: navHeight*2+40
  });

  //**================= Navbar reduce, Custom scroll =====================**//
  $(window).ready(function () {
    menuReduce();
    customScroll()
    showScrocllUp()
    $('nav').slideUp().delay(1000).slideDown();
    $(window).scroll(function () {
      menuReduce();
      customScroll();
      showScrocllUp();
    });
  })

  // Custom scroll
  function customScroll() {
    let height = $(document).scrollTop()/($(document).height() - $(window).height())*100;
    $('.scroll-bar').css('height', height + 'vh');
  }

  // Navbar reduce
  function menuReduce(){
  // reduce
  $('.navbar-collapse').collapse('hide');
  if ($(window).scrollTop() > navHeight) {
    $('#menu-top').addClass('bg-nav');
  }else{
    $('#menu-top').removeClass('bg-nav');
  }

}

function showScrocllUp() {
  if ($(window).scrollTop() > navHeight) {
    $('.atf-back-to-top').css('bottom', '30px');
  } else {
    $('.atf-back-to-top').css('bottom', '-70px');
  }
}

  //**================= clicked Scroll Up =====================**//

  $(".atf-back-to-top").click(function () {
    let target = $(this).attr('data-targets');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000, 'easeInOutExpo');
  });

  //**================= WOW Scroll Spy =====================**//
  let wow = new WOW({
    // disabled for mobile
    mobile: false
  });
  wow.init();

  // tilt-js
  VanillaTilt.init(document.querySelectorAll(".tilt-js"),{
    max: 15,
    speed: 1000,
    perspective: 1000,
    transition: true
  });

})(jQuery);