const menu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.nav-item');
const btn =  document.querySelector('.smooth-btn');


menu.addEventListener('click', function(e){
 	let element = e.target;
 	e.preventDefault();
 	let to = document.querySelector(element.hash).offsetTop;
 	let scrollto = document.documentElement.scrollTop = (to - 140);
});


btn.addEventListener('click', function(e){
	let btn = e.target;
 	e.preventDefault();
 	let to = document.querySelector(btn.hash).offsetTop;
 	let scrollto = document.documentElement.scrollTop = (to - 59);
});




window.addEventListener('load', function (e) {
	const load = document.querySelector('.loding');
 	load.style.transition = '0.2';
 	load.style.display = 'none';

 	let home = document.querySelector('#home').offsetTop + document.querySelector('#home').offsetHeight;
		home += document.querySelector('#profil').offsetHeight;
		home -= 140;
	let skill = document.querySelector('#skill').offsetTop + document.querySelector('#skill').offsetHeight;
		skill -= 140;
	let education = document.querySelector('#education').offsetTop + document.querySelector('#education').offsetHeight;

	if (document.documentElement.scrollTop <= home) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[0].classList.add('active');
	} else if (document.documentElement.scrollTop <= skill) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[1].classList.add('active');
	}else if (document.documentElement.scrollTop <= education) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[2].classList.add('active');
	}
});


window.addEventListener('scroll', function(e){
	let home = document.querySelector('#home').offsetTop + document.querySelector('#home').offsetHeight;
		home += document.querySelector('#profil').offsetHeight;
		home -= 140;
	let skill = document.querySelector('#skill').offsetTop + document.querySelector('#skill').offsetHeight;
		skill -= 140;
	let education = document.querySelector('#education').offsetTop + document.querySelector('#education').offsetHeight;

	if (document.documentElement.scrollTop <= home) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[0].classList.add('active');
	} else if (document.documentElement.scrollTop <= skill) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[1].classList.add('active');
	}else if (document.documentElement.scrollTop <= education) {
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[2].classList.add('active');
	}
	
});