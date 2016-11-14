import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

import 'normalize.css';
import './index.css';

const NotFound = () => (<div className="App-content"><p>404.. This page is not found!</p></div>)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={HomePage} onEnter={(location, replaceWith) => {}} onLeave={() => {}} />
      <IndexRoute component={HomePage} onEnter={(location, replaceWith) => {}} onLeave={() => {}} />
      <Route path="/edit" component={EditPage} onEnter={() => {}} onLeave={() => {}} />
      <Route path="/view" component={ViewPage} onEnter={() => {}} onLeave={() => {}} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
