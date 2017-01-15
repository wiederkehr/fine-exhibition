import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Footer } from '../components/Footer';

import './HomePage.css';

class HomePage extends Component {

  render() {
    return (
      <LayoutContainer>
        <LayoutContent className="HomePageContent">
          <div className='HomePageIntroduction'>
            <h2>Bad days build better days.</h2>
            <p><Link to="/view">Swipe left</Link> to record,<br/> <Link to="/record">swipe right</Link> to review emotions.</p>
          </div>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HomePage;
