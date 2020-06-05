import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "./actionTypes";

export const fetchingPokemon = () =>{
  return {
    type: FETCH_POKEMON_PENDING
  }
}

export const recievedPokemon = (pokemon) =>{
  return {
    type: FETCH_POKEMON_SUCCESS,
    pokemon
  }
}

export const failedPokemon = (error) =>{
  return {
    type: FETCH_POKEMON_FAILURE,
    error
  }
}

export const callPokemonAPI = () =>{
  return (async (dispatch) =>{
    dispatch(fetchingPokemon());

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const jsonResp = await response.json();
    dispatch(recievedPokemon(jsonResp.results));
  })
}

