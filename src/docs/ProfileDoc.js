import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { ProfileBanner } from '../components/Profile';

export default () => (
  <Page>
    <h2>Profile Elements</h2>
    <ReactSpecimen noSource={true}>
      <ProfileBanner />
    </ReactSpecimen>
  </Page>
);
