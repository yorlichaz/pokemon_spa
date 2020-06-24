import {
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "./actionTypes";

const initialState = {
  pokemon: [],
  isPending: false,
  hasError: false,
  error: ''
};

const setPokemon = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POKEMON_PENDING:
      return {...state, isPending: true };
    case FETCH_POKEMON_SUCCESS:
      return {...state,
        pokemon: action.pokemon,
        isPending: false,
      };
      
    case FETCH_POKEMON_FAILURE:
      return {...state, 
        hasError: true,
        error: action.error,
        isPending: false,
      };

    default:
      return state;
  }
};

export default setPokemon;
