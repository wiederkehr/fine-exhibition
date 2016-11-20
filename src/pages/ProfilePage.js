import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import './ProfilePage.css';

class ProfilePage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header back={false}>Profile</Header>
        <LayoutContent className="ProfilePageContent">
          <p>Here will be the user profile.</p>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default ProfilePage;
