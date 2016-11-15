import React, { Component } from 'react';

import AppHeader from '../components/AppHeader';

import './ViewPage.css';

class ViewPage extends Component {

  render() {
    return (
      <div className="AppContainer">
        <AppHeader back={true} title='View'/>
        <div className="ViewPage AppContent">
          <p>The visualization history will show up here.</p>
        </div>
      </div>
    );
  }
}

export default ViewPage;
