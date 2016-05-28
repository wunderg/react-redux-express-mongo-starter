import 'babel-polyfill'; import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';
import requireAuth from './containers/login/require_auth.js';

import App from './containers/app';
import Dashboard from './containers/dashboard';
import About from './containers/about';
import Login from './containers/login/signin.js';
import SignUp from './containers/login/signup.js';


const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
