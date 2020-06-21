const fetchPokemons = async () => {
  const pokemons = await pokemonApiGetAll("https://pokeapi.co/api/v2/pokemon?limit=1000");
  return await buildUIReadableObject(pokemons);
};

const buildUIReadableObject = async (pokemons) => {
  return (await Promise.all(
    pokemons.map(async (pokemon, i) => {
      const details = await (await fetch(pokemon.url)).json();
      return {
          id: i,
          name: pokemon.name,
          image: details.sprites.front_default,
          abilities: details.abilities.map((index) => index.ability.name),
          stats: details.stats.map((index) => {return {[index.stat.name]: index.base_stat}}).reduce((rest,current) => {return {...rest, ...current}},{}),
          types: details.types.map((index) => index.type.name),
      }
    })
  )).filter(pokemon => pokemon.image !== null);
};

const pokemonApiGetAll= async (url) =>{
  return (await(await fetch(url)).json()).results;
}

export default fetchPokemons;
