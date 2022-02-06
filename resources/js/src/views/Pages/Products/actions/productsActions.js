import API from '../../../../helpers/api';
import constants from '../constants';

export const getProducts = () => (dispatch) => {

  dispatch({
    type: constants.GET_PRODUCTS_INIT
  });



  API.get(
    '/products'
  ).then((response) => {
    // console.log('========= ordersactions ======== response', response);
    dispatch({
      type: constants.GET_PRODUCTS_SUCCESS,
      payload: response.data.data
    });
  });
}

