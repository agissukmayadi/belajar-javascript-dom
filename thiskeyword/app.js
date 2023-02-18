function generateColor() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};

function changeColor() {
	this.style.backgroundColor = generateColor()
}

const AllButton = document.querySelectorAll('button')

for (const button of AllButton) {
	button.addEventListener('click',changeColor)
}

const AllHeading = document.querySelectorAll('h1')
for (const heading of AllHeading) {
	heading.addEventListener('click',changeColor)
}

