import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Emotion Visualization</h1>
        </div>
        <div className="App-content">
          <form className="content-form">
            <div className="form-field">
              <label>Arousal</label>
              <input type="range" name="q1" min="1" max="5" defaultValue="3" />
            </div>
            <div className="form-field">
              <label>Conduciveness</label>
              <input type="range" name="q2" min="1" max="5" defaultValue="3" />
            </div>
            <div className="form-field">
              <label>Controllability</label>
              <input type="range" name="q3" min="1" max="5" defaultValue="3" />
            </div>
            <div className="form-field">
              <label>Intensity</label>
              <input type="range" name="q4" min="1" max="5" defaultValue="3" />
            </div>
            <div className="form-field">
              <label>Valence</label>
              <input type="range" name="q5" min="1" max="5" defaultValue="3" />
            </div>
            <button className="form-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
