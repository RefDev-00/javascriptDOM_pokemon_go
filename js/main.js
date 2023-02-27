const container = document.querySelector("#container"); // memanggil element id container
const baseImgUrl = // membuat variabel image url
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// perulangan untuk memanggil image sebanyak kurang lebih 500 gambar
for (let i = 1; i <= 500; i++) {
  const pokeBall = document.createElement("div"); // membuat element div untuk gambar menggunakan classList
  pokeBall.classList.add("pokemon");

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImgUrl}${i}.png`;

  const labelGambar = document.createElement("span");
  labelGambar.innerHTML = `Pokemon ${i} `;

  pokeBall.appendChild(imgPokemon); // menyimpan imgpokemon ke dalam pokeball
  pokeBall.appendChild(labelGambar);
  container.appendChild(pokeBall); // menyimpan pokeball kedalam container
}
