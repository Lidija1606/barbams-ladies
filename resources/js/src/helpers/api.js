import axios from 'axios';
import history from './history'
let api = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? (process.env.NODE_ENV !== 'development' ? 'http://127.0.0.1:8000/api' : 'http://barbams.site/api') : 'https://barbams.com/api',
  headers: {
    Authorization: `${localStorage.getItem('auth_token')}`,
    'content-type': 'application/json',
  },
})

// api.interceptors.response.use((response) => response, (error) => {
//   // console.log('=========== interceptors ========= response', response);
//   console.log('=========== interceptors ========= error', error.response);

//   if (error.response.status === 401 && error.response.data.error === 'token_expired') {
//     console.log('test');
//   }
// });

api.interceptors.response.use(function (response) {
  if (response.headers.Authorization) {
    const newToken = response.headers.Authorization;
    localStorage.setItem('auth_token', newToken);
  }



  // const newtoken = get(response, 'headers.authorization')
  // if (newtoken) localStorage.setItem('auth_token', newtoken);
  // console.log(response.data)
  return response
}, function (error) {
  console.log('=========== arror ========= ', error.data);
  // localStorage.clear();
  // switch (error.response.status) {

  //   case 401:
  //     store.dispatch('logoff')
  //     break
  //   default:
  //     console.log(error.response)
  // }
  return Promise.reject({ ...error })
});

export default api;