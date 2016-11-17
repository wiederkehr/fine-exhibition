import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Header from '../components/Header';
import BackLink from '../components/BackLink';

export default () => (
  <Page>
    <h2>Header Variants</h2>
    <ReactSpecimen>
      <Header back={false} title='Title'/>
    </ReactSpecimen>
    <ReactSpecimen>
      <Header back={true} title='Title With Button'/>
    </ReactSpecimen>
    <h2>Header Actions</h2>
    <ReactSpecimen>
      <BackLink to="/backlink"/>
    </ReactSpecimen>
  </Page>
);
