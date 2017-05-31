import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './modules/App';

import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import RecordPage from './pages/RecordPage';

import 'normalize.css';
import './index.css';

const NotFound = () => (<div className="App-content"><p>404.. This page is not found!</p></div>)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute
        title="Home"
        component={HomePage}
      />
      <Route
        path="/history"
        title="History"
        component={HistoryPage}
      />
      <Route
        path="/record"
        title="Record"
        component={RecordPage}
      />
    </Route>
    <Route
      path='*'
      component={NotFound}
    />
  </Router>,
  document.getElementById('root')
);
