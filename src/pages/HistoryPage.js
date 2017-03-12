import React, { Component } from 'react';
import { Detail } from '../components/Detail.js';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import './HistoryPage.css';

class HistoryPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/', label:'Close'}} transparent />
        <LayoutContent className="HistoryPageContent">
          <Detail
            record={{
              arousal: 2,
              conduciveness: 4,
              controllability: 3,
              intensity: 2,
              valence: 2
            }}
            detail={0}
          />
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HistoryPage;
