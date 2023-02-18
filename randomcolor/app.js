const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

btn.addEventListener('click',function () {
	const newColor = generateColor()
	document.body.style.backgroundColor = newColor

	h1.innerText = newColor
})

function generateColor() {
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)

	return `rgb(${r},${g},${b})`
}