const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (i) => {
  try {
    const url = `https://pokeapi.co/api/v2/growth-rate/${i}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (err) {
    console.log(err);
  }
};
fetchPokemons();
