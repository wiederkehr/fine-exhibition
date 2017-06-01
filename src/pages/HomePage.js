import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutContainer, LayoutContent } from '../components/Layout';

import './HomePage.css';

class HomePage extends Component {

  render() {
    return (
      <LayoutContainer>
        <LayoutContent className="HomePageContent">
          <Link to="/record" className='HomePageLink'>
            <div className='HomePageIntroduction TypeContent'>
              <h1>How are you feeling?</h1>
              <p>Tab to record an emotion.</p>
            </div>
          </Link>
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default HomePage;
