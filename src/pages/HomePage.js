import React, { Component } from 'react';
import { Link } from 'react-router';

import './HomePage.css';

class HomePage extends Component {

  render() {
    const style = {marginBottom: '10px'}
    return (
      <div className="AppContainer">
        <div className="HomePage AppContent">
          <Link className="Button" style={style} to="/edit">Track Emotion</Link>
          <Link className="Button" to="/view" disabled={true}>View History</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
