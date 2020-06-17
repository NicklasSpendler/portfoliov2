let nav__ulElem = null;
let ulElem = null;
let liElems = null;
let animation__lineElem = null;
let selectedMenu = 0;

function init(ul, animationLine, selectedMenu) {
	nav__ulElem = ul;

	liElems = nav__ulElem.querySelectorAll('li');
	animation__lineElem = animationLine;
	createEventListeners();
	animateLine(0);
}

function createEventListeners() {
	liElems.forEach(li => {
		li.addEventListener('mouseover', (e) => {
			animateLine(e.target.dataset.number);
		});
		li.addEventListener('click', (e) => {
			selectedMenu = e.target.dataset.number;

			liElems[selectedMenu].classList.add("active");
			clearNavClass()
		});
		li.addEventListener('mouseout', () => {
			animateLine(selectedMenu)
			clearNavClass();
		});
	});
}

function clearNavClass(){
	liElems.forEach(li => {
		if(li.dataset.number != selectedMenu){
			li.classList.remove("active")
		}
	});
}

function animateLine(index) {
	let position = liElems[index].offsetLeft + parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-left').split("px")[0]) + "px";
	let width = liElems[index].offsetWidth - parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-left').split("px")[0]) - parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-right').split("px")[0]) + "px";
	let top = liElems[index].clientHeight + liElems[index].offsetTop - 5 + "px"

	animation__lineElem.style.left = position;
	animation__lineElem.style.width = width;
	animation__lineElem.style.top = top;
}


module.exports = {
	init
}