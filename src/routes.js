import React from 'react';
import { Router, Route } from 'react-router';

import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { RecordPage } from './pages/RecordPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/history" component={HistoryPage} />
    <Route path="/record" component={RecordPage} />
    <Route path="*" component={HomePage} />
  </Router>
);

export default Routes;
