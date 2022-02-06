import constants from '../constants';

const initialState = {
  productPricesList: [],
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_PRODUCT_PRICES_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.GET_PRODUCT_PRICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productPricesList: action.payload
      }
    default:
      return state;

  }
}