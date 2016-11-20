import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './modules/App';
import Styleguide from './modules/Styleguide';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';

import 'normalize.css';
import './index.css';

const NotFound = () => (<div className="App-content"><p>404.. This page is not found!</p></div>)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route
        path="/"
        title="Welcome"
        component={HomePage}
        onEnter={(location, replaceWith) => {}}
        onLeave={() => {}}
      />
      <IndexRoute
        component={HomePage}
        title="Welcome"
        onEnter={(location, replaceWith) => {}}
        onLeave={() => {}}
      />
      <Route
        path="/profile"
        title="Profile"
        component={ProfilePage}
        onEnter={() => {}}
        onLeave={() => {}}
      />
      <Route
        path="/add"
        title="Add"
        component={AddPage}
        onEnter={() => {}}
        onLeave={() => {}}
      />
      <Route
        path="/view"
        title="View"
        component={ViewPage}
        onEnter={() => {}}
        onLeave={() => {}}
      />
    </Route>
    <Route
      path="/docs"
      component={Styleguide}
    />
    <Route
      path='*'
      component={NotFound}
    />
  </Router>,
  document.getElementById('root')
);
