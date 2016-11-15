import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Header from '../components/Header';

export default () => (
  <Page>
    <ReactSpecimen>
      <Header back={false} title='Title'/>
    </ReactSpecimen>
    <ReactSpecimen>
      <Header back={true} title='Title With Button'/>
    </ReactSpecimen>
  </Page>
);
