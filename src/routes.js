import React from 'react';
import { Router, Route } from 'react-router';

import { HomePage } from './pages/HomePage';
import { RecordPage } from './pages/RecordPage';
import { DetailPage } from './pages/DetailPage';
import { HistoryPage } from './pages/HistoryPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/record" component={RecordPage} />
    <Route path="/detail" component={DetailPage} />
    <Route path="/history" component={HistoryPage} />
    <Route path="*" component={HomePage} />
  </Router>
);

export default Routes;
