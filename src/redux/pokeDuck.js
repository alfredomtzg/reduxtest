import axios from 'axios';
import { urlBase } from '../utils/route'

// Constantes
const initialData = {
  array: []
}

const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';

//  Reducer
export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return{...state, array: action.payload}

    default:
      return state
  }
}

// Acciones

export const getPokemonAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(urlBase)
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error);
  }
}
