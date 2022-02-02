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

	//**================= Section background style =====================**//
	$('section').each(function (i) {
		let e = i%2;
		if (e == 0) {			
			$('section').eq(i).css('background-color', '#2b1d6a');
		}
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

	//**================= Clicked Scroll Up =====================**//

	$(".atf-back-to-top").click(function () {
			let target = $(this).attr('data-targets');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000, 'easeInOutExpo');
	});

	//**================= Particle Bubling =====================**//
	$(window).ready(function () {
		let docHeight = $(document).outerHeight();
		$('.atf-bubling-item').each(function (i) {
			let width = Math.floor(Math.random()*50)+50
			let delay = Math.floor(Math.random()*20);
			let duration = Math.floor(docHeight/(width-delay)-35);
			$('.atf-bubling-item').eq(i).css('width', width + 'px');
			$('.atf-bubling-item').eq(i).css('animation-delay', delay + 's');
			$('.atf-bubling-item').eq(i).css('animation-duration', duration + 's');
		})
	})

	//**================= Progress value =====================**//
	$('.progres').ready(function () {
		$('.progres').each(function (i) {
			$('.progres .canva').eq(i).html($(this).attr('data-id') + ' %');
			$(this).css('background-image', 'linear-gradient(to right, #021b42 ' + $(this).attr('data-id') + '%, #fff0 ' + $(this).attr('data-id') + '%)');
		})

		$('.atf-main-skill').click(function () {
			progres()
			$(this).css('background-image', 'linear-gradient(to right, #021b42 100%, #fff0 100%)');
			$(this).children().eq(0).css('transform', 'translateY(-87px)');
			$(this).children().eq(1).css('transform', 'translateY(-67px)');
		})
		$(window).scroll(function() {
			progres();
		})

		function progres() {
			$('.atf-main-skill').each(function () {
				$(this).css('background-image', 'linear-gradient(to right, #021b42 ' + $(this).attr('data-id') + '%, #fff0 ' + $(this).attr('data-id') + '%)');
				$('.atf-main-skill').children().css('transform', 'none');
			})
		}
	})

	//**================= Typed-word =====================**//
	let typed = new Typed('.typed-word', {
		strings: ["Icon Designer","Web Developer"," Web Designer"],
		typeSpeed: 40,
		backSpeed: 40,
		backDelay: 2000,
		startDelay: 500,
		loop: true,
		showCursor: true
	});

	//**================= WOW Scroll Spy =====================**//
	let wow = new WOW({
		// disabled for mobile
		mobile: false
	});
	wow.init();


})(jQuery);