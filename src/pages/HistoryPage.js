import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Detail } from '../components/Detail';

import './HistoryPage.css';

class HistoryPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/', label:'Close'}} transparent />
        <LayoutContent className="HistoryPageContent">
          <Detail
            detail = { 2 }
            record = {{
              arousal : 2,
              controllability : 2,
              conduciveness : 4,
              intensity : 3,
              valence : 2,
            }}
          />
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HistoryPage;
