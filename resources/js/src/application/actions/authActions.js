import AUTH from '../../helpers/auth';
import * as types from '../constants/authConstants';
import history from '../../helpers/history'
import { push } from 'react-router-redux';

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
    localStorage.setItem('auth_token', response.data.data.auth_token);
    localStorage.setItem('user_id', response.data.data.id);
    localStorage.setItem('product_price_ids', response.data.data.product_price_ids)
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: response.data.data.auth_login
    });

    history.push('/dashboard');
  }).catch((error) => {
    console.log('error ========= ', error);
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: "Invalid email or password"
    })
  });

}


export const logout = () => (dispatch) => {
  
  // AUTH.post(
  //   '/logout',
  //   {
  //     token: localStorage.getItem('auth_token')
  //   }
  // ).then((response) => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    dispatch({ type: types.LOGOUT });
    history.push('/login');
  // }).catch((error) => {
  //   console.log('logout error ');
  //   localStorage.removeItem('auth_token');
  //   localStorage.removeItem('user_id');
  //   history.push('/login');
  // })

  // try {
  //   localStorage.removeItem('auth_token')
  //   dispatch({ type: types.LOGOUT })
  //   // dispatch(push("/login"));
  //   history.push('/login');
  // } catch (err) {
  //   if (err.response.status === 401) {
  //     history.push('/login');
  //   }
  //   console.log(err)
  // }
}

export const onInputChange = (name, value) => (dispatch) => {
  dispatch({
    type: types.ON_TEXT_CHANGE,
    payload: {
      name, value
    }
  })
}