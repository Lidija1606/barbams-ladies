import API from '../../../../helpers/api';
import constants from '../constants';

export const getCountries = () => (dispatch) => {

  dispatch({
    type: constants.GET_COUNTRIES_INIT
  });

  API.get(
    '/countries', {
    }
  ).then((response) => {
    console.log('========= ordersactions ======== response', response);
    dispatch({
      type: constants.GET_COUNTRIES_SUCCESS,
      payload: response.data.data
    });
  });
}

