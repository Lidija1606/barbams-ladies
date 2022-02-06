import API from '../../../../helpers/api';
import constants from '../constants';

export const getProductPrices = (productId, countryCode) => (dispatch) => {
  console.log('========== getProductPrices =========== ');

  dispatch({
    type: constants.GET_PRODUCT_PRICES_INIT
  });

  API.get(
    '/products/prices', {
      params: {
        productId: productId,
        countryCode: countryCode
      }
    }
  ).then((response) => {
    console.log('========= ordersactions ======== response', response);
    dispatch({
      type: constants.GET_PRODUCT_PRICES_SUCCESS,
      payload: response.data.data
    });
  });
}

