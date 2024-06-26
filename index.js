const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (i) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    // console.log(pokemon);
    createPokemonCard(pokemon);
  } catch (err) {
    console.log(err);
  }
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const nameCapitalized =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  console.log(color);

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="num">#${pokemon.id}</span>
          <h3 class="name">${nameCapitalized}</h3>
          <small class="type"> Type : <span>${pokemon.types[0].type.name}</span></small>
        </div>
   `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
  //   console.log(pokemonInnerHTML);
};
fetchPokemons();
