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

// const gambarBanner = document.querySelector("#banner")

// gambarBanner.attributes
// untuk mengatahui atribut apa saja yang dimiliki pada elemen

// gambarBanner.alt = "Ini gambar kucing"
// untuk mengubah isi atribut pada elemen

// gambarBanner.setAttribute('class','bannerClass')
// untuk membuat atribut baru

// gambarBanner.src
// gambarBanner.getAttribute("src")
// untuk mengetahui isi atribut

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const heading = document.querySelector("h1")
// heading.style
// untuk mengetahui atribut style apa saja yang digunakan

// const links = document.querySelectorAll('a');

// for (let link of links) {
// 	link.style.color = 'rgb(0, 108, 134)';
// 	link.style.textDecorationColor = 'magenta';
// 	link.style.textDecorationStyle = 'wavy';
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const heading = document.querySelector("h1")
// heading.setAttribute("class","testing")

// heading.classList
// untuk mengetahui isi atribut class

// heading.classList.contains("testing")
// untuk mengetahui ada atau tidak ada value tersebut dalam class yang akan menghasilkan true atau false

// heading.classList.add("bg-info", "text-white", "border-danger")
// untuk menambahkan value atribut class

// heading.classList.remove("border-danger")
// untuk menghapus value atribut class

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const textBold = document.querySelector("b")
// const paragraf = textBold.parentElement

// textBold.parentElement
// untuk mengetahui parent elemennya atau yang membungkusnya

// paragraf.children
// untuk mengetahui elemen apa saja yang ada di dalam

// paragraf.childElementCount
// untuk menghitung jumlah elemen yang ada di dalam

// const imageSquare = document.querySelector('.square')

// imageSquare.previousSibling
// imageSquare.nextSibling
// untuk mengetahui format code editor sebelum/sesudah elemen tersebut

// imageSquare.previousElementSibling
// imageSquare.nextElementSibling
// untuk mengetahui elemen yang ada pada sebelum/sesudah elemen tersebut

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const newImageSquare = document.createElement("img")

// newImageSquare.setAttribute("src", "https://www.acehardware.co.id/files/uploads/inspirationarticle/thumb_image/2022/Oct/11/mainimagecaramenjinakkankucingwebp-770x770.webp")
// newImageSquare.classList.add("square")

// document.body.appendChild(newImageSquare)
// untuk memasukan elemen diakhir elemen

// document.body.append("<b>AGIS</b>")
//  biasa digunakan untuk menambahkan teks seperti innerText di akhir elemen

// const h2 = document.createElement("h2")
// h2.innerText = "Its About Cat"

// const h1 = document.querySelector("h1")
// h1.insertAdjacentElement("afterend", h2)
// untuk menambahkan elemen sesuai posisi yang dinginkan
// begin : pembuka tag, end : penutup tag

// const paragraf = document.querySelector("p")
// paragraf.insertAdjacentText("afterbegin", "<b>ANJASSS</b>")
// untuk menambahkan teks sesuai posisi yang dinginkan

// paragraf.insertAdjacentHTML("beforeend", "<b>ANJASSS</b>")
// untuk menambahkan format html sesuai posisi yang diinginkan

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const firstList = document.querySelector("li")

// firstList.parentElement.removeChild(firstList)
// Untuk menghapus elemen, namun harus balik ke parentnya terlebih dahulu tapi support disemua browser

// firstList.remove()
// untuk menghapus elemen, tapi browser versi lama masih ada yang tidak support

// const imageSquare = document.querySelectorAll(".square")
// const selectImageSquare = imageSquare[1]
// selectImageSquare.remove()