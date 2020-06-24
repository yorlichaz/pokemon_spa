import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "./actionTypes";

import fetchPokemons from '../../utils/fetchPokemon';

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
    try{
    dispatch(recievedPokemon(await fetchPokemons()));
    }catch(err){
      dispatch(failedPokemon(err));
    }
  })
}

