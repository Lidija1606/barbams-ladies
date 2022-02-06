import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../application/store/index'

// import store from './store/index'
// import promise from 'redux-promise';
import Login from './Login';

const Index = props => (
  <Provider store={store}>
    <Login
      {...props}
    />
  </Provider>
);

export default Index;
