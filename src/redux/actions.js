import axios from 'axios';
import {
  LOAD_LIST,
  SET_SEARCH_KEY,
  SET_VIEW_TYPE,
  SET_SORT_TYPE,
  SET_NO_RESULTS,
  SET_SELECTED_POKEMON,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_TOTAL,
  TOGGLE_LOADING,
  SET_SEARCH_RESULTS,
  UPDATE_SELECTED_POKEMON,
  EMPTY_FAVORITES,
} from './constants';
import {getPokemonId} from '../utils';

export const setList = list => {
  return {
    type: LOAD_LIST,
    payload: list,
  };
};
export const setTotal = total => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};
export const setSelectedPokemon = payload => {
  return {
    type: SET_SELECTED_POKEMON,
    payload,
  };
};
export const setSort = () => {
  return {
    type: SET_SORT_TYPE,
  };
};
export const setView = () => {
  return {
    type: SET_VIEW_TYPE,
  };
};
export const setResultNo = number => {
  return {
    type: SET_NO_RESULTS,
    payload: number,
  };
};
export const addToFavorites = payload => {
  return {
    type: ADD_TO_FAVORITES,
    payload,
  };
};
export const removeFromFavorites = id => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
export const setSearchResults = payload => {
  return {
    type: SET_SEARCH_RESULTS,
    payload,
  };
};
export const updateSelectedPokemon = payload => {
  return {
    type: UPDATE_SELECTED_POKEMON,
    payload,
  };
};
export const emptyFavorites = () => {
  return {
    type: EMPTY_FAVORITES,
  };
};
export const getPokemon = name => {
  return async dispatch => {
    try {
      dispatch(setSelectedPokemon({}));
      const {data} = await axios.get(`/pokemon/${name}`);
      const pokemonInfo = await axios.get(`/pokemon-species/${name}`);
      dispatch(setSelectedPokemon({...data, ...pokemonInfo.data}));
    } catch (error) {
      dispatch(setSelectedPokemon({}));
    }
  };
};
export const getPokeDesc = id => {
  return async dispatch => {
    try {
      if (!id) {
        return;
      }
      const {data} = await axios.get(`/pokemon-species/${id}`);
      dispatch(updateSelectedPokemon(data));
    } catch (error) {
      console.log('pokedesc', error);
    }
  };
};
export const searchPokemon = query => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/pokemon/${query}`);
      dispatch(setSearchResults([data]));
    } catch (error) {
      dispatch(setSearchResults([]));
    }
  };
};
export const getList = (limit = 20, offset = 0) => {
  return async dispatch => {
    try {
      dispatch({type: TOGGLE_LOADING});
      const {data} = await axios.get(
        `/pokemon?offset=${offset}&limit=${limit}`,
      );
      dispatch(setTotal(data.count));
      const pokemonsWithId = data.results.map(pokemon => {
        const id = getPokemonId(pokemon);
        return {...pokemon, id};
      });
      dispatch(setList(pokemonsWithId));
      dispatch({type: TOGGLE_LOADING});
    } catch (error) {
      console.error(error);
    }
  };
};
