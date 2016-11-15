import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import AppHeader from '../components/AppHeader';

export default () => (
  <Page>
    <ReactSpecimen>
      <AppHeader back={false} title='Title'/>
    </ReactSpecimen>
    <ReactSpecimen>
      <AppHeader back={true} title='Title With Button'/>
    </ReactSpecimen>
  </Page>
);
