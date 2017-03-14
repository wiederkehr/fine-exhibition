import React, { Component } from 'react';
import { Detail } from '../components/Detail.js';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { History, Timeline, TimelineItem } from '../components/History';

import './HistoryPage.css';

class HistoryPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/', label:'Close'}} transparent />
        <LayoutContent className="HistoryPageContent">
          <History>
            <Timeline>
              <TimelineItem />
              <TimelineItem />
              <TimelineItem />
              <TimelineItem />
              <TimelineItem />
              <TimelineItem />
            </Timeline>
          </History>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default HistoryPage;
