import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = !!(localStorage.getItem('auth_token'));
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogin
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);
export default ProtectedRoute;