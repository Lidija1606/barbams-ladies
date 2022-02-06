import axios from 'axios'



export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? (process.env.NODE_ENV !== 'development' ? 'http://127.0.0.1:8000/api/auth' : 'http://barbams.site/api/auth') : 'https://barbams.com/api/auth',
  headers: {
    'content-type': 'application/json'
  },
})