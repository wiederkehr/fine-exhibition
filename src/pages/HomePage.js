import React, { Component } from 'react';
import { Link } from 'react-router';

import './HomePage.css';

class Home extends Component {

  render() {
    const style = {marginBottom: '10px'}
    return (
      <div className="App-content">
        <Link className="Button" style={style} to="/edit">Track Emotion</Link>
        <Link className="Button" to="/view" disabled={true}>View History</Link>
      </div>
    );
  }
}

export default Home;
