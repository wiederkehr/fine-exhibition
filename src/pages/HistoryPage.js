import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Detail } from '../components/Detail';
import { Navigation } from '../components/Navigation';

import './HistoryPage.css';

class HistoryPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/', label:'Close'}} transparent />
        <LayoutContent className="HistoryPageContent">
          <Detail
            detail={ 2 }
            record={{
              arousal : 2,
              controllability : 2,
              conduciveness : 4,
              intensity : 3,
              valence : 2,
            }}
          />
          <Navigation
            days={[0,1,2,3,4]}
            currentDay={1}
            forward={{
              onClick: function(){console.log('Click Forward')}
            }}
            backward={{
              onClick: function(){console.log('Click Backward')}
            }}
          />
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HistoryPage;
