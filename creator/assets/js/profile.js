/*
	Author       : Khusni Ridho
	Template Name: Portofolio
	Version      : 0.2
*/

(function($) {
	"use strict";

	// Declaret navbar
	let navHeight = $('nav').outerHeight();

	//**================= Requerst data =====================**//
	$.ajax({
		url: 'https://projek-ts81.000webhostapp.com/',
		method: 'get',
		dataType: 'json',
		success: function(res) {
			$('.caption-fesrt p').html(res.about.first)
			$('.caption-last p').html(res.about.last)

			let newItems = $('.carousel-item').clone()
			$.each(res.certificate, function (i, v) {
				newItems.find('img').attr('src', v)
			})
			$('.carousel-inner').append(newItems)
		},
	});

	//**================= Preloader =====================**//
	$(window).on('load', function() { 
		$('.atf-status').fadeOut()
		$('.atf-preloader').delay(350).fadeOut('slow')
		$('.atf-certificat').fadeOut()
	}); 

	//**================= Certificat =====================**//
	$('.certificat').click(function (e) {
		e.preventDefault()
		$($('.carousel-item')[0]).addClass('active')
		$('.atf-certificat').delay(350).fadeIn()
		$('.atf-certificat').addClass('active')
	})

	$('.atf-certificat .close').click(function (e) {
		e.preventDefault()
		$('.atf-certificat').delay(350).fadeOut()
		$('.atf-certificat').removeClass('active')
	})

	$(document).keyup(function(e) {
		if (e.keyCode === 27 && $('.atf-certificat').hasClass('active')) { 
			$('.atf-certificat').delay(350).fadeOut()
			$('.atf-certificat').removeClass('active')
		}
	})

	//**================= Form =====================**//
	$(document).on('ready', function() { 
		$('.form-input').each(function (i, e) {
			if ($(e).val().length > 0) $(e).addClass('active')
		})
	}); 

	$('.form-input').keyup(function () {
		if ($(this).val().length > 0) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})


	$('.atf-themes-btn').click(function () {
		$('.form-message').removeClass('show')
		let name = $('#name').val().trim()
		let email = $('#email').val().trim()
		let message = $('#message').val().trim()
		let name_valid, email_valid, message_valid
		message = message.replace(/\s+/g, ' ')

		if (name != '') {
			if (name.match(/[^a-zA-Z\s]/)) {
				$('.form-message').html('Nama hanya boleh huruf')
				$('.form-message').addClass('show')
				$('.form-message').addClass('error')
				hide_msg()
			} else {
				if (name.length > 3) {
					name_valid = true
				} else {
					$('.form-message').html('Nama terlalu pendek')
					$('.form-message').addClass('show')
					$('.form-message').addClass('error')
					hide_msg()
				}
			}
		} else {
			$('.form-message').html('Nama tidak boleh kosong')
			$('.form-message').addClass('show')
			$('.form-message').addClass('error')
			hide_msg()
		}

		if (email.match(/^[^\s@]+@gmail\.com$/i)) {
			email_valid = true
		} else {
			$('.form-message').html('Email salah, hanya boleh Gmail')
			$('.form-message').addClass('show')
			$('.form-message').addClass('error')
			hide_msg()
		}

		if (message != '') {
			if (message.length < 1000) {
				message_valid = true
			} else {
				$('.form-message').html('Pesan telalu panjang')
				$('.form-message').addClass('show')
				$('.form-message').addClass('error')
				hide_msg()	
			}
		} else {
			$('.form-message').html('Pesan tidak boleh kosong')
			$('.form-message').addClass('show')
			$('.form-message').addClass('error')
			hide_msg()
		}

		if (name_valid === true && email_valid === true && message_valid === true) {
			$.ajax({
				url: 'https://projek-ts81.000webhostapp.com/',
				method: 'post',
				dataType: 'json',
				data: {name, email, message},
				success: function (data) {
					console.log(data);
					$('.form-message').html('Pesan berhasil dikirim')
					$('.form-message').addClass('show')
				}
			})
		}
	})

	function hide_msg() {
		setTimeout(function () {
			$('.form-message').html('Coba lagi, semoga berhasil')
			$('.form-message').removeClass('error')
			setTimeout(function () {
				$('.form-message').removeClass('show')
			}, 2000)
		}, 5000)

	}
	//**================= Section background style =====================**//
	$('section').each(function (i) {
		let e = i%2;
		if (e == 0) {			
			$('section').eq(i).css('background-color', '#2b1d6a')
		}
	})

	//**================= Smooth nav on scroll or click =====================**//
	$('a.page-scroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			let target = $(this.hash)
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 40)
				}, 1000, 'easeInOutExpo')
				return false
			}
		}
	})

	//**================= Active scrollspy =====================**//
	$('body').scrollspy({
		target: '#menu-top',
		offset: navHeight*2+40
	})

	//**================= Navbar reduce, Custom scroll =====================**//
	$(window).ready(function () {
		menuReduce()
		customScroll()
		showScrocllUp()
		$('nav').slideUp().delay(1000).slideDown()
		$(window).scroll(function () {
			menuReduce()
			customScroll()
			showScrocllUp()
		})
	})

	// Custom scroll
	function customScroll() {
		let height = $(document).scrollTop()/($(document).height() - $(window).height())*100
		$('.scroll-bar').css('height', height + 'vh')
	}

	// Navbar reduce
	function menuReduce(){
		// reduce
		$('.navbar-collapse').collapse('hide')
		if ($(window).scrollTop() > navHeight) {
			$('#menu-top').addClass('bg-nav')
		}else{
			$('#menu-top').removeClass('bg-nav')
		}
	}

	function showScrocllUp() {
		if ($(window).scrollTop() > navHeight) {
			$('.atf-back-to-top').css('bottom', '30px')
		} else {
			$('.atf-back-to-top').css('bottom', '-70px')
		}
	}

	//**================= Clicked Scroll Up =====================**//

	$(".atf-back-to-top").click(function () {
		let target = $(this).attr('data-targets')
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000, 'easeInOutExpo')
	})

	//**================= Particle Bubling =====================**//
	$(window).ready(function () {
		let docHeight = $(document).outerHeight()
		$('.atf-bubling-item').each(function (i) {
			let width = Math.floor(Math.random()*50)+50
			let delay = Math.floor(Math.random()*20)
			let duration = Math.floor(docHeight/(width-delay)-35)
			$('.atf-bubling-item').eq(i).css('width', width + 'px')
			$('.atf-bubling-item').eq(i).css('animation-delay', delay + 's')
			$('.atf-bubling-item').eq(i).css('animation-duration', duration + 's')
		})
	})

	//**================= Progress value =====================**//
	$('.progres').ready(function () {
		$('.progres').each(function (i) {
			$('.progres .canva').eq(i).html($(this).attr('data-id') + ' %')
			$(this).css('background-image', 'linear-gradient(to right, #021b42 ' + $(this).attr('data-id') + '%, #fff0 ' + $(this).attr('data-id') + '%)')
		})

		$('.atf-main-skill').click(function () {
			progres()
			$(this).css('background-image', 'linear-gradient(to right, #021b42 100%, #fff0 100%)')
			$(this).children().eq(0).css('transform', 'translateY(-87px)')
			$(this).children().eq(1).css('transform', 'translateY(-67px)')
		})
		$(window).scroll(function() {
			progres()
		})

		function progres() {
			$('.atf-main-skill').each(function () {
				$(this).css('background-image', 'linear-gradient(to right, #021b42 ' + $(this).attr('data-id') + '%, #fff0 ' + $(this).attr('data-id') + '%)')
				$('.atf-main-skill').children().css('transform', 'none')
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
	})

	//**================= Typed-word =====================**//
	let dot = new Typed('.dot', {
		strings: [". . .",". . ."],
		typeSpeed: 85,
		backSpeed: 85,
		backDelay: 0,
		startDelay: 500,
		loop: true,
		showCursor: false
	})

	//**================= WOW Scroll Spy =====================**//
	let wow = new WOW({
		// disabled for mobile
		mobile: false
	})
	wow.init()

	// tilt-js
	VanillaTilt.init(document.querySelectorAll(".tilt-js"),{
		max: 15,
		speed: 1000,
		perspective: 1000,
		transition: true
	})

	//**================= Owl Carousel =====================**//
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoWidth:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	})

})(jQuery)