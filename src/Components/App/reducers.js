import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "./actionTypes";

const initialState = {
  pokemon: [],
  isPending: false,
  hasEror: false,
  error: ''
};

const setPokemon = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POKEMON_PENDING:
      return Object.assign({}, state, { isPending: true });

    case FETCH_POKEMON_SUCCESS:
      return Object.assign({}, state, {
        pokemon: action.pokemon,
        isPending: false,
      });
      
    case FETCH_POKEMON_FAILURE:
      return Object.assign({}, state, { 
        hasEror: true,
        error: action.error,
        isPending: false,
      });

    default:
      return state;
  }
};

export default setPokemon;
