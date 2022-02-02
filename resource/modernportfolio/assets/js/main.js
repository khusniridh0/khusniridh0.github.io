/*
Author       : Khusni Ridho
kategory     : Undangan
Version      : 0.1
*/

(function($) {
  "use strict";

  // Declaret navbar
  let navHeight = $('nav').outerHeight();

  //**================= Preloader =====================**//
  $(window).on('load', function() { 
    $('.hsr-status').fadeOut();
    $('.hsr-preloader').delay(350).fadeOut('slow'); 
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
      $('.hsr-back-to-top').css('bottom', '30px');
    } else {
      $('.hsr-back-to-top').css('bottom', '-70px');
    }
  }

  //**================= Clicked Scroll Up =====================**//

  $(".hsr-back-to-top").click(function () {
    let target = $(this).attr('data-targets');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000, 'easeInOutExpo');
  });

  //**================= Owl Carousel =====================**//
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
  })


})(jQuery);