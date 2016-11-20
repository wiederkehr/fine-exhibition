import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { HistoryItem, MonthlyGrid, WeeklyGrid, DailyGrid } from '../components/History';


export default () => (
      <Page>
        <h2>History</h2>
        <h3>Item</h3>
        <ReactSpecimen noSource={true} span={3}>
          <HistoryItem>History Item</HistoryItem>
        </ReactSpecimen>
        <h3>Monthly Grid</h3>
        <ReactSpecimen noSource={true} span={3}>
          <MonthlyGrid/>
        </ReactSpecimen>
        <h3>Weekly Grid</h3>
        <ReactSpecimen noSource={true} span={3}>
          <WeeklyGrid/>
        </ReactSpecimen>
        <h3>Daily Grid</h3>
        <ReactSpecimen noSource={true} span={3}>
          <DailyGrid/>
        </ReactSpecimen>
      </Page>
);
