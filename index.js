const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;

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
  const pokemonInnerHTML = `
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="num">${pokemon.id}</span>
          <h3 class="name">${pokemon.name}</h3>
          <small class="type"> Type <span>${pokemon.types[0].type.name}</span></small>
        </div>
   `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
  //   console.log(pokemonInnerHTML);
};
fetchPokemons();
