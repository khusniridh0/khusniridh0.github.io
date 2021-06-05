const menu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.nav-item');
const hide = document.querySelector('.scroll-up');
const sideMenu = document.querySelector('.toggel');

menu.addEventListener('click', function(e){
 	let element = e.target;
	 e.preventDefault();
 	let to = document.querySelector(element.hash).offsetTop;
	 if (element == navItem[0]) {
		 document.documentElement.scrollTop = (to - 59);
		}else if(element == navItem[3]){
			document.documentElement.scrollTop = (to - 50);
		}else{
			document.documentElement.scrollTop = (to - 140);
	 }
});

hide.addEventListener('click', function(e) {
	e.preventDefault();
	document.documentElement.scrollTop = (0);
});

sideMenu.addEventListener('click', function(e) {
	e.preventDefault();
	hide.classList.toggle('disabled');
	menu.classList.toggle('show-menu');
});

window.addEventListener('load', function() {
	const load = document.querySelector('.loading');
	load.style.transition = '0.2';
 	load.style.display = 'none';
	scroll();
});

window.addEventListener('scroll', function() {
	scroll();
})

function scroll() {
	let home = document.querySelector('#head').offsetTop + document.querySelector('#head').offsetHeight;
		home += document.querySelector('#profile').offsetHeight;
		home -= 140;
	let skill = document.querySelector('#skills').offsetTop + document.querySelector('#skills').offsetHeight;
		skill -= 140;
	let education = document.querySelector('#education').offsetTop + document.querySelector('#education').offsetHeight;
		education -= 140
	let contacts = document.querySelector('#contact').offsetTop;	
		contacts -= 140;
	let showup = document.querySelector('#profile').offsetTop;
		showup -=140
	 
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
	}else if (document.documentElement.scrollTop <= contacts){
		for (let i = navItem.length - 1; i >= 0; i--) {
			navItem[i].classList.remove('active');
		}
		navItem[3].classList.add('active');
	}

	if (showup <= document.documentElement.scrollTop)  {
		hide.classList.add('up');
	}else{
		hide.classList.remove('up');
	}
}