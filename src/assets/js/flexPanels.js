const panels = document.querySelectorAll('.panel');

function toggleOpen(e) {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		//jest duzo roznych tranzycji ktore sie odpalaja, my chcemy aby napis pojawil sie po rozszerzeniu ekranu czyli po flex-grow
		this.classList.toggle('open-active');
	}
}
panels.forEach((panel) => panel.addEventListener('click', toggleOpen, toggleActive));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
// debugger;
