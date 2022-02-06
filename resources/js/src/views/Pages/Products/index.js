import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../../helpers/history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import promise from 'redux-promise';
import reducers from './reducers';
import App from './App';
import ProductPriceApp from './ProductPrices/App';

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, logger)
);

const Index = props => (
  <Provider store={store}>
    {/* <Router history={history}>
      <Switch>
        <Route exact path="/list" name="Product List" component={App} {...props} />
        <Route exact path="/prices" name="Product List" component={ProductPriceApp} {...props} />
      </Switch>
    </Router> */}
    <App
      {...props}
    />
    {/* <ProductPriceApp
      {...props}
    /> */}

  </Provider>
);

export default Index;
