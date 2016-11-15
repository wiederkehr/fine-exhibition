import React, { Component } from 'react';

import AppHeader from '../components/AppHeader';
import Form from '../components/Form.js';

import './EditPage.css';

class EditPage extends Component {

  render() {
    return (
      <div className="AppContainer">
        <AppHeader back={true} title='Edit'/>
        <div className="EditPage AppContent">
          <Form />
        </div>
      </div>
    );
  }
}

export default EditPage;
