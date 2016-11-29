import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './modules/App';
import Styleguide from './modules/Styleguide';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SettingsNotificationsPage from './pages/SettingsNotificationsPage';
import SettingsAboutPage from './pages/SettingsAboutPage';
import SettingsDisclaimerPage from './pages/SettingsDisclaimerPage';
import SettingsImprintPage from './pages/SettingsImprintPage';
import AddPage from './pages/AddPage';
import ViewPage from './pages/ViewPage';

import 'normalize.css';
import './index.css';

const store = createStore(reducer);

const NotFound = () => (<div className="App-content"><p>404.. This page is not found!</p></div>)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route
          path="/"
          title="Home"
          component={HomePage}
        />
        <IndexRoute
          title="Home"
          component={HomePage}
        />
        <Route path="/profile">
          <IndexRoute title="Profile" component={ProfilePage} />
          <Route path="/profile/settings">
            <IndexRoute title="Settings" component={SettingsPage} />
            <Route path="/settings/notifications" title="Notifications" component={SettingsNotificationsPage} />
            <Route path="/settings/about" title="About" component={SettingsAboutPage} />
            <Route path="/settings/disclaimer" title="Disclaimer" component={SettingsDisclaimerPage} />
            <Route path="/settings/imprint" title="Imprint" component={SettingsImprintPage} />
          </Route>
        </Route>
        <Route
          path="/add"
          title="Add"
          component={AddPage}
        />
        <Route
          path="/view"
          title="View"
          component={ViewPage}
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
    </Router>
  </Provider>,
  document.getElementById('root')
);
