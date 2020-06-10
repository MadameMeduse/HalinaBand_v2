$('.top-menu a').click(function() {
	$('.top-menu-wrapper').removeClass('show-offcanvas');
});

console.log('it works');

//ta funkcja ograniczy odpalanie funkcji (co 20 milisekund) tak aby nie przeciązać strony
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			git;
		args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

AOS.init();

//unable to scroll when mobile menu is open

const mobileMenu = document.querySelector('.top-menu-wrapper');

function enableScroll() {
	if (mobileMenu.classList.contains('show-offcanvas')) {
		document.body.style.overflowY = 'hidden';
	}
	return;
}
enableScroll();
