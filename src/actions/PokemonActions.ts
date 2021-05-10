import { Dispatch } from "redux";
import * as actionTypes from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({ type: actionTypes.POKEMON_LOADING });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({ type: actionTypes.POKEMON_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: actionTypes.POKEMON_FAIL });
  }
};
