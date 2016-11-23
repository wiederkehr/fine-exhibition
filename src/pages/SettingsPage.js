import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import './SettingsPage.css';

class SettingsPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header left={{to:'/profile', label:'Back'}}>Settings</Header>
        <LayoutContent className="SettingsPageContent">
          <p>Here will be the user settings.</p>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default SettingsPage;
