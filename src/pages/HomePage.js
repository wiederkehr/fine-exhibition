import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Footer } from '../components/Footer';

import './HomePage.css';

class HomePage extends Component {

  render() {
    const style = {marginBottom: '10px'}
    return (
      <LayoutContainer>
        <LayoutContent className="HomePageContent">
          <Link className="Button" style={style} to="/record">Record Emotion</Link>
          <Link className="Button" to="/view" disabled={true}>View History</Link>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HomePage;
