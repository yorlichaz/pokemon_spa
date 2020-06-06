const fetchPokemons = async () => {
  const pokemons = await getAllResults("https://pokeapi.co/api/v2/pokemon/");
  return await buildUIReadableObject(pokemons);
};

const buildUIReadableObject = async (pokemons) => {
  return (await Promise.all(
    pokemons.map(async (pokemon, i) => {
      const details = await (await fetch(pokemon.url)).json();

      return Object.assign(
        {},
        {
          id: i,
          name: pokemon.name,
        },
        {
          image: details.sprites.front_default,
          abilities: details.abilities.map((index) => {
            return { name: index.ability.name };
          }),
          stats: details.stats.map((stat) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat,
            };
          }),
          types: details.types.map((index) => {
            return { name: index.type.name };
          }),
        }
      );
    })
  )).filter(pokemon => pokemon.image !== null);
};

const getAllResults = async (url) => {
  const response = await (await fetch(url)).json();

  if (response.next === null) {
    return response.results;
  } else {
    let rest = await getAllResults(response.next);
    return response.results.concat(rest);
  }
};

export default fetchPokemons;
