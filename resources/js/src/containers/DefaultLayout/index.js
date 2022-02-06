
import React from 'react';
import DefaultLayout from './DefaultLayout';
import { Provider } from 'react-redux';
import store from '../../application/store/index'
// import promise from 'redux-promise';

const Index = props => (
  <Provider store={store}>
    <DefaultLayout
      {...props}
    />
  </Provider>
);

export default Index;