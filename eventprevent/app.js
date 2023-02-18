// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const noteValue = input.value;
// 	const newList = document.createElement('li');
// 	newList.innerText = noteValue;
// 	list.append(newList);
// 	input.value = '';
// });

////////////////////////////////////////////////////////////////

// const form = document.querySelector('form')
// form.addEventListener('submit', function (e) {
// 	e.preventDefault()
// 	// untuk mencegah default
// 	console.log(e);
// })

// const anchor = document.querySelector('a')
// anchor.addEventListener('click',function (e) {
// 	e.preventDefault()
// 	console.log("YAAAA GA BISA MASUK KE LINK YAA");
// })

////////////////////////////////////////////////////////////////

const form = document.querySelector('form')
const notes = document.querySelector('ul')
const inputText = document.querySelector('input[name="note"]')

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const noteText = inputText.value
	const infoSmall = document.querySelector('small')
	let isSame
	if (!noteText == "") {
		const lists = document.querySelectorAll('li')
		let tes = 1
		for (const list of lists) {
			const listText = list.innerText
			console.log(`Looping ke -  ${tes}`)
			if (listText == noteText) {			
				infoSmall.style.display = "block"
				console.log(infoSmall);
				isSame = true
			}
			tes += 1
		}
		if (isSame !== true) {
			const newList = document.createElement('li')
			newList.innerText = noteText
			notes.appendChild(newList)
			infoSmall.style.display = "none"
			inputText.value = ""
		}
	}
})
////////////////////////////////////////////////////////////////

// const input = document.querySelector('input[name="note"]')

// input.addEventListener('input',function () {
// 	document.querySelector('h1').innerText = input.value
// 	console.log("MASUK PA EKOOOO");
// })

// input.addEventListener('change',function () {
// 	console.log("BERUBAHHH")
// })