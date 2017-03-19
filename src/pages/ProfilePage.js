import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfileBanner, ProfileCallout, ProfileListItem } from '../components/Profile';

import './ProfilePage.css';

class ProfilePage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/profile/settings', label:'Settings'}} transparent />
        <LayoutContent className="ProfilePageContent">
          <ProfileBanner />
          <ProfileCallout />
          <ProfileListItem emotion='Arousal' adjective='arousing' most='12.3.2016' least='07.3.2016'/>
          <ProfileListItem emotion='Conduciveness' adjective='conducive' most='12.3.2016' least='07.3.2016'/>
          <ProfileListItem emotion='Controllability' adjective='controllable' most='12.3.2016' least='07.3.2016'/>
          <ProfileListItem emotion='Intensity' adjective='intense' most='12.3.2016' least='07.3.2016'/>
          <ProfileListItem emotion='Valence' adjective='valence' most='12.3.2016' least='07.3.2016'/>
        </LayoutContent>
        <Footer border/>
      </LayoutContainer>
    );
  }
}

export default ProfilePage;
