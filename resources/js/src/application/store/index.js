import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
const logger = createLogger();
// let middleware = []
// if (process.env.NODE_ENV !== 'production') {
//   const loggerMiddleware = createLogger()

//   middleware = [...middleware, loggerMiddleware]
// }
// let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// if (process.env.NODE_ENV === 'production') {
//   devTools = a => a
// }
const store = createStore(
  rootReducer,

  applyMiddleware(thunkMiddleware, logger)
)

export default store

