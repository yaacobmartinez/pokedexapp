export const capitalize = ([initial, ...rest]) => {
  return [initial.toUpperCase(), ...rest].join('');
};

export const getPokemonId = pokemon => {
  const stripped = pokemon.url.replace(
    'https://pokeapi.co/api/v2/pokemon/',
    '',
  );
  return stripped.replace('/', '');
};

export const isInArray = (array, name) => {
  return array.some(object => object.name === name);
};
