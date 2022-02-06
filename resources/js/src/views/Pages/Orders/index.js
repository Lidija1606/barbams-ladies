import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import App from './App';

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, logger)
);

const Index = props => (
  <Provider store={store}>
    <App
      {...props}
    />
  </Provider>
);

export default Index;
