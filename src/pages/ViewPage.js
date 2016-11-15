import React, { Component } from 'react';

import Header from '../components/Header';

import './ViewPage.css';

class ViewPage extends Component {

  render() {
    return (
      <div className="AppContainer">
        <Header back={true} title='View'/>
        <div className="ViewPage AppContent">
          <p>The visualization history will show up here.</p>
        </div>
      </div>
    );
  }
}

export default ViewPage;
