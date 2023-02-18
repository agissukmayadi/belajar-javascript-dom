// document.querySelector('button').addEventListener('click', (e) => {
// 	console.log(e);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
// 	switch (e.code) {
// 		case 'ArrowUp':
// 			console.log('Tombol Arah Atas');
// 			break;
// 		case 'ArrowDown':
// 			console.log('Tombol Arah Bawah');
// 			break;
// 		case 'ArrowLeft':
// 			console.log('Tombol Arah Kiri');
// 			break;
// 		case 'ArrowRight':
// 			console.log('Tombol Arah Kanan');
// 			break;
// 		default:
// 			console.log('diabaikan');
// 	}
// });

// // input.addEventListener('keyup', () => {
// // 	console.log('Tombol dirilis');
// // });

const button = document.querySelector('button')
button.addEventListener('click', function (e) {
	console.log(e);
})

// const input = document.querySelector('input')
// input.addEventListener('keydown', function (e) {
// 	console.log(e);
// 	console.log(e.code)
// })
// input.addEventListener('keydown', function () {
// 	console.log("Keyboard ditekan");
// })
// input.addEventListener('keyup',function () {
// 	console.log("Keyboard dilepas");
// })

const inputArrow = document.querySelector('input')
inputArrow.addEventListener('keydown',function (e) {
	switch (e.code) {
		case "ArrowUp":
			console.log("Ke-Atas");
			break;
		case "ArrowDown":
			console.log("Ke-Bawah");
			break
		case "ArrowLeft":
			console.log("Ke-Kiri");
			break
		case "ArrowRight":
			console.log("Ke-Kanan");
			break
		default:
			break;
	}
})