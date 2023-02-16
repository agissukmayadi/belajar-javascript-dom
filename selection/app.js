// const gambar = document.getElementsByTagName("img")

// for (const image of gambar) {
// 	image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg'
	// mengganti source
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const gambarSquare = document.getElementsByClassName("square")

// for (const image of gambarSquare) {
// 	image.src = "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"
	// mengganti source

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const firstParagraf = document.querySelector('p')

// const imageBanner = document.querySelector('#banner')
// const imageSquare = document.querySelector('.square')
// hanya memilih 1 elemen pertama

// const allParagraf = document.querySelectorAll('p')
// memilih semua elemen

// const anchorInParagraf = document.querySelector("p a")
// mengambil "<a>" yang parentnya "<p>"

// for (const link of anchorInParagraf) {
// 	console.log(link.href);
// 	// mengambil link
// }

// const checkbox = document.querySelector('input[type="checkbox"]')
// const anchorCarnivorus = document.querySelector('a[title="Carnivorous"]')
// mengambil elemen berdasarkan atribut

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const paragraf = document.querySelector('p')

// paragraf.innerText
// paragraf.innerText = "Ini hanya teks saja"
// untuk hanya mengambil isi teksnya saja tanpa format code editor dan tag html
// paragraf.textContent
// paragraf.textContent = "<b>Ini text bold yang tidak bisa bold</b>"
// untuk mengambil isi teks dan format code saja tanpa tag html
// paragraf.innerHTML	
// paragraf.innerHTML = "<b>ini text bisa bold lohhh</b>"	
// untuk mengambil seluruh isinya berikut format code editor dan tag htmlnya


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const links = document.querySelectorAll('a');

for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
