import 'babel-polyfill'; import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';
import requireAuth from './containers/auth/require_auth.js';

import App from './containers/app';
import Dashboard from './containers/dashboard';
import About from './containers/about';
import Add from './containers/addStudent';
import Student from './containers/student';
import Guide from './containers/guide';
import Faq from './containers/faq';
import Resources from './containers/resources';
import Login from './containers/login/signin.js';
import SignUp from './containers/login/signup.js';
import Results from './containers/results/results.js';


const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/about" component={About} />
        <Route path="/results" component={requireAuth(Results)} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        <Route path="/add" component={requireAuth(Add)} />
        <Route path="/student" component={requireAuth(Student)} />
        <Route path="/guide" component={requireAuth(Guide)} />
        <Route path="/faq" component={requireAuth(Faq)} />
        <Route path="/resources" component={requireAuth(Resources)} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
