

	var openNav = document.querySelector('.navMenu');
	var hamburger = document.querySelector('#mainHamburger');
	var  closeNav = document.querySelector('.closeNav');
	

	hamburger.addEventListener('click', function() {
		openNav.classList.add('navMenuHover');
});

	closeNav.addEventListener('click', function(){
		openNav.className = 'navMenu';
});