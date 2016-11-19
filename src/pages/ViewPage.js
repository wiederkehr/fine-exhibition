import React, { Component } from 'react';
import { LayoutContainer, LayoutContent, LayoutHeader } from '../components/Layout';
import Header from '../components/Header';

import './ViewPage.css';

class ViewPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <LayoutHeader>
          <Header back={true}>View</Header>
        </LayoutHeader>
        <LayoutContent className="ViewPageContent">
          <p>The visualization history will show up here.</p>
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default ViewPage;
