// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/

const container = document.querySelector("#container")
const imagesPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

for (let index = 1; index <= 500; index++) {
	const pokeCard = document.createElement('div')
	pokeCard.classList.add("pokemon")

	container.appendChild(pokeCard)

	const imgPoke = document.createElement("img")
	imgPoke.setAttribute("src", `${imagesPokemon}/${index}.png`)
	pokeCard.appendChild(imgPoke)

	const label = document.createElement("span")
	label.innerText = `Pokemon - ${index}`
	pokeCard.appendChild(label)

}