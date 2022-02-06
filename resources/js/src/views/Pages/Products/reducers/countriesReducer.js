import constants from '../constants';

const initialState = {
  countriesList: [],
  isLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_COUNTRIES_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countriesList: action.payload
      }
    default:
      return state;

  }
}