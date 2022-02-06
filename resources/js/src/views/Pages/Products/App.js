import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner'
import ProductList from './ProductList';
import ProductPrices from './ProductPrices';
import history from '../../../helpers/history';

import { HashRouter, Route, Switch, BrowserRouter, Router } from 'react-router-dom';


import {
  getProducts
} from './actions/productsActions';
class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/dashboard/products/list" component={ProductList} {...this.props} />
          <Route exact path="/dashboard/products/prices" component={ProductPrices} {...this.props} />
        </Switch>
      </Router>
    );
  }
}



export default App;