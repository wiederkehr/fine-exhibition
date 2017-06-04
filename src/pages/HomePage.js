import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';

import './HomePage.css';

export class HomePage extends Component {

  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
};
