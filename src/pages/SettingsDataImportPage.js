import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

import './SettingsPage.css';

class SettingsDataImportPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header left={{to:'/profile/settings', label:'Back'}}>{this.props.route.title}</Header>
        <LayoutContent className="SettingsDataImportPageContent TypeContent">
          <p>You can import data using a simple CSV file.</p>
          <Button type="button">Upload Data</Button>
        </LayoutContent>
        <Footer border/>
      </LayoutContainer>
    );
  }
}

export default SettingsDataImportPage;
