import React from 'react';
import { Router, Route } from 'react-router';

import { HomePage } from './pages/HomePage';
import { RecordPage } from './pages/RecordPage';
import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';
import { GridPage } from './pages/GridPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/record" component={RecordPage} />
    <Route path="/list" component={ListPage} />
    <Route path="/detail(/:recordID)" component={DetailPage} />
    <Route path="/history" component={GridPage} />
    <Route path="/grid" component={GridPage} />
    <Route path="*" component={HomePage} />
  </Router>
);

export default Routes;
