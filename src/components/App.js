import React, { Component } from 'react';
import Form from './Form.js';

import 'normalize.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Emotion Tracking</h1>
        </div>
        <div className="App-content">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
