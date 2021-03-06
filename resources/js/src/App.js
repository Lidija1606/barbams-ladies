import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter, Router } from 'react-router-dom';
// import { ProtectedRoute } from './application/components/index';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import history from './helpers/history'
// import DefaultLayout from './containers/DefaultLayout';
import Login from './views/Pages/Login/index'

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout/index'),
  loading
});
// Pages
// const Login = Loadable({
//   loader: () => import('./views/Pages/Login/index'),
//   loading
// });

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;