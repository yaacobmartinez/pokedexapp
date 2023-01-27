const initialState = {
  pokemons: [],
  searchKey: '',
  viewType: 'grid',
  sortType: 'ascending',
  noOfResults: 20,
  selectedPokemon: {},
  favorites: [],
  totalPokemons: 0,
  loading: false,
  searchResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_LIST':
      return {
        ...state,
        pokemons: [...new Set([...state.pokemons, ...action.payload])],
      };
    case 'SET_SEARCH_KEY':
      return {
        ...state,
        searchKey: action.payload,
      };
    case 'SET_VIEW_TYPE':
      return {
        ...state,
        viewType: state.viewType === 'grid' ? 'list' : 'grid',
      };
    case 'SET_SORT_TYPE':
      return {
        ...state,
        sortType: state.sortType === 'ascending' ? 'descending' : 'ascending',
      };
    case 'SET_NO_RESULTS':
      return {
        ...state,
        noOfResults: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    case 'UPDATE_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: {...state.selectedPokemon, ...action.payload},
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(a => a.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'EMPTY_FAVORITES':
      return {
        ...state,
        favorites: [],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites.filter(a => a.id !== action.payload)],
      };
    case 'SET_TOTAL':
      return {
        ...state,
        totalPokemons: action.payload,
      };
    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
