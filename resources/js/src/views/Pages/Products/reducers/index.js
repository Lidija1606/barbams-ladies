import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productPricesReducer from './productPricesReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  productsReducer, productPricesReducer, countriesReducer
});

export default rootReducer;
