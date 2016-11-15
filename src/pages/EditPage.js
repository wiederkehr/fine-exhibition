import React, { Component } from 'react';

import Header from '../components/Header';
import Form from '../components/Form.js';

import './EditPage.css';

class EditPage extends Component {

  render() {
    return (
      <div className="AppContainer">
        <Header back={true} title='Edit'/>
        <div className="EditPage AppContent">
          <Form />
        </div>
      </div>
    );
  }
}

export default EditPage;
