import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';

import './HomePage.css';

export class HomePage extends Component {

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Fine・Home</title>
        </Helmet>
        <LayoutContainer>
          <LayoutContent className="HomePageContent">
            <Link to="/record" className='HomePageLink'>
              <div className='HomePageIntroduction TypeContent'>
                <h1>How are you feeling?</h1>
                <span>Tap to record an emotion.</span>
              </div>
            </Link>
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  }
};
