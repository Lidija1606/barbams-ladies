import constants from '../constants';

const initialState = {
  productsList: [],
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_PRODUCTS_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsList: action.payload
      }
    default:
      return state;

  }
}