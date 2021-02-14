const menu = document.querySelector('.menu');
const navItem = document.querySelectorAll('.nav-item');


 menu.addEventListener('click', function(e){
 	// navItem.classList.remove('active');

 	for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 	}
 	e.target.classList.add('active');
 	
 });

window.addEventListener('load', function (e) {
	let scroll = document.documentElement.scrollTop;
	const load = document.querySelector('.loding');
 	if (scroll <= 671) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[0].classList.add('active');
 	}else if (scroll <= document.getElementById('skill').offsetTop) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[1].classList.add('active');
 	}else if (scroll <= document.getElementById('education').offsetTop) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[2].classList.add('active');
 	};

 	load.style.transition = '0.2';
 	load.style.display = 'none';
});


window.addEventListener('scroll', function(e){
 	let scroll = document.documentElement.scrollTop;
 	if (scroll <= 671) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[0].classList.add('active');
 	}else if (scroll <= document.getElementById('skill').offsetTop) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[1].classList.add('active');
 	}else if (scroll <= document.getElementById('education').offsetTop) {
 		for (let i = navItem.length - 1; i >= 0; i--) {
 		navItem[i].classList.remove('active');
 		}
 		navItem[2].classList.add('active');
 	};

});
