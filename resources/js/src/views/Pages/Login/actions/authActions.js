import AUTH from '../../../../helpers/auth';
import constants from '../constants';
import history from '../../../../helpers/history'

export const login = (email, password) => (dispatch) => {
  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  // let data = {
  //   email: email,
  //   password: password
  // }
  // console.log('asdadasdasdasadasdsa =sadasdasdasdasd ', data);
  AUTH.post(
    '/login',
    formData
  ).then((response) => {
    // console.log('============= auth actions ========= ', response.data.data);
    localStorage.setItem('user_id', response.data.data.id);
    localStorage.setItem('auth_token', response.data.data.auth_token);
    localStorage.setItem('product_price_ids', response.data.data.product_price_ids)
    dispatch({
      type: constants.LOGIN_SUCCESS,
      payload: response.data.data
    });

    history.push('/dashboard');
  }).catch((error) => {
    console.log('error ========= ', error);
    dispatch({
      type: constants.LOGIN_FAILURE,
      payload: "Invalid email or password"
    })
  });

}

export const logout = () => (dispatch) => {
  console.log('test');
  try {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    dispatch({ type: constants.LOGOUT })
    // dispatch(push("/login"));
    history.push('/login');
  } catch (err) {
    if (err.response.status === 401) {
      history.push('/login');
    }
    console.log(err)
  }
}

export const onInputChange = (name, value) => (dispatch) => {
  dispatch({
    type: constants.ON_TEXT_CHANGE,
    payload: {
      name, value
    }
  })
}