import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { ProfileBanner, ProfileCallout, ProfileListItem } from '../components/Profile';

export default () => (
  <Page>
    <h2>Profile Banner</h2>
    <ReactSpecimen noSource={true}>
      <ProfileBanner />
    </ReactSpecimen>
    <h2>Profile Callout</h2>
    <ReactSpecimen noSource={true}>
      <ProfileCallout />
    </ReactSpecimen>
    <h2>Profile ListItem</h2>
    <ReactSpecimen noSource={true}>
      <ProfileListItem emotion='Emotion' adjective='emotion' most='12.3.2016' least='07.3.2016' />
    </ReactSpecimen>
  </Page>
);
