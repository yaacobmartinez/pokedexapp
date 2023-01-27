import {createStore, combineReducers, applyMiddleware} from 'redux';
import PokemonReducer from './pokemonReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  pokemon: PokemonReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
