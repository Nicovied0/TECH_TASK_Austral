// pokeService.js
const axios = require("axios");

const getDataForPokemon = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getDataInfoForArray = async (pokeTo, limitPoke) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokeTo}&offset=${limitPoke}`);
    const pokeData = response.data.results;
    const pokeDetails = await Promise.all(pokeData.map((pokemon) => getDataForPokemon(pokemon.name)));
    return pokeDetails.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((type) => type.type.name),
      image: pokemon.sprites.other["official-artwork"].front_default,
    }));
  } catch (error) {
    throw error;
  }
};

module.exports = { getDataInfoForArray, getDataForPokemon };
