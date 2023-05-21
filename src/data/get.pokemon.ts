const getPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon));
};

getPokemon();
