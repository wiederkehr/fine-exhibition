import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import BackLink from '../components/BackLink';

export default () => (
  <Page>
    <ReactSpecimen>
      <BackLink to="/backlink"/>
    </ReactSpecimen>
  </Page>
);
