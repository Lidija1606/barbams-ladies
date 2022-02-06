import constants from '../constants';

const isLogin = !!(localStorage.getItem('auth_token'));

// const initialState = isLogin ? { isLoggedIn: true } : { isLoggedIn: false }
const initialState = {
  isLoggedIn: isLogin,
  email: 'markos494@gmail.com',
  password: 'marko123'
};
export default function reducer(state = initialState, action) {

  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      // console.log(action.payload);
      // localStorage.setItem('auth_token', action.payload)
      // return state;
      return {
        ...state,
        isLoggedIn: true
      }
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload
      }
    case constants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    case constants.ON_TEXT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }

}