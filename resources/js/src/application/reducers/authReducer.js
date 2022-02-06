import * as types from '../constants/authConstants'


const isLogin = !!(localStorage.getItem('auth_token'));

// const initialState = isLogin ? { isLoggedIn: true } : { isLoggedIn: false }
const initialState = {
  isLoggedIn: isLogin,
  email: '',
  password: ''
};
export default function reducer(state = initialState, action) {

  switch (action.type) {
    case types.LOGIN_SUCCESS:
      // console.log(action.payload);
      // localStorage.setItem('auth_token', action.payload)
      // return state;
      return {
        ...state,
        isLoggedIn: true
      }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload
      }
    case types.LOGOUT:

      return {
        ...state,
        isLoggedIn: false
      }
    case types.ON_TEXT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }

}