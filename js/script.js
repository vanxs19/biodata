window.addEventListener('scroll', () => {
	let navbar = document.querySelector('nav');
	navbar.classList.toggle('sticky', window.scrollY > 0);
	if (window.scrollY <= 0) {
		navbar.classList.add('py-4', window.scrollY > 0);
		navbar.classList.remove('py-1', window.scrollY > 0);
	} else {
		navbar.classList.add('py-1', window.scrollY > 0);
		navbar.classList.remove('py-4', window.scrollY > 0);
	}
});