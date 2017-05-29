import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './modules/App';
import Styleguide from './modules/Styleguide';

import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SettingsNotificationsPage from './pages/SettingsNotificationsPage';
import SettingsAboutPage from './pages/SettingsAboutPage';
import SettingsDisclaimerPage from './pages/SettingsDisclaimerPage';
import SettingsImprintPage from './pages/SettingsImprintPage';
import SettingsDataImportPage from './pages/SettingsDataImportPage';
import SettingsDataExportPage from './pages/SettingsDataExportPage';
import RecordPage from './pages/RecordPage';
import ViewPage from './pages/ViewPage';

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
        path="/"
        title="Home"
        component={HomePage}
      />
      <Route
        path="/history"
        title="History"
        component={HistoryPage}
      />
      <Route path="/profile">
        <IndexRoute title="Profile" component={ProfilePage} />
        <Route path="/profile/settings">
          <IndexRoute title="Settings" component={SettingsPage} />
          <Route path="/settings/notifications" title="Notifications" component={SettingsNotificationsPage} />
          <Route path="/settings/about" title="About" component={SettingsAboutPage} />
          <Route path="/settings/disclaimer" title="Disclaimer" component={SettingsDisclaimerPage} />
          <Route path="/settings/imprint" title="Imprint" component={SettingsImprintPage} />
          <Route path="/settings/import" title="Import" component={SettingsDataImportPage} />
          <Route path="/settings/export" title="Export" component={SettingsDataExportPage} />
        </Route>
      </Route>
      <Route
        path="/record"
        title="Record"
        component={RecordPage}
      />
      <Route
        path="/view"
        title="View"
        component={ViewPage}
      />
    </Route>
    <Route
      path="/styleguide"
      component={Styleguide}
    />
    <Route
      path='*'
      component={NotFound}
    />
  </Router>,
  document.getElementById('root')
);
