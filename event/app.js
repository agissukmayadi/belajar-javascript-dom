// const button = document.querySelector('#clickme');

// button.onclick = function () {
// 	console.log('You clicked me');
// };

// const scream = () => {
// 	console.log('Dont touch me');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', stepSatu);
// eventbtn.addEventListener('click', stepDua);

// function stepSatu() {
// 	console.log('step satu');
// }

// function stepDua() {
// 	console.log('step dua');
// }

// // eventbtn.onclick = stepSatu;
// // eventbtn.onclick = stepDua;

const button = document.querySelector('#clickMe')

button.onmouseover = function () {
	button.innerText = "DONT TOUCH ME OK?"
}

function scream() {
	button.innerText = "FUCK YOUUU!"
	button.style.backgroundColor = "red"
	button.style.color = "white"
}

button.onclick = scream

/////////////////////////////////////////////////////////////////////////////////

const eventBtn = document.querySelector("#eventbtn")

function stepSatu() {
	console.log("Step Satu");
}

function stepDua() {
	console.log("Step Dua");
}
eventBtn.addEventListener('click',stepSatu)
eventBtn.addEventListener('click',stepDua)

/////////////////////////////////////////////////////////////////////////////////
