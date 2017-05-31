import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutContainer, LayoutContent } from '../components/Layout';

import './HomePage.css';

class HomePage extends Component {

  render() {
    return (
      <LayoutContainer>
        <LayoutContent className="HomePageContent">
          <div className='HomePageIntroduction TypeContent'>
            <h1>Bad days build<br/> better days.</h1>
            <p><Link to="/record">Swipe left</Link> to record,<br/> <Link to="/history">swipe right</Link> to review emotions.</p>
          </div>
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default HomePage;
