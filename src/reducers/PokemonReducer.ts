import * as actionTypes from "../actions/PokemonActionTypes";

const defaultState: DefaultStateI = { loading: false };

const pokemonReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case actionTypes.POKEMON_FAIL:
      return { loading: false };
    case actionTypes.POKEMON_LOADING:
      return { loading: true };
    case actionTypes.POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
