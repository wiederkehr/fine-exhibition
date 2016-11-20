import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { HistoryItem, MonthlyGrid, WeeklyGrid } from '../components/History';

const week_1 = [1,2,3,4,5,6,7];
const week_2 = [8,9,10,11,12,13,14];
const week_3 = [15,16,17,18,19,20,21];
const week_4 = [22,23,24,25,26,27,28];
const week_5 = [29,30];
const month_1 = [week_1, week_2, week_3, week_4, week_5];

var weekly = function (week) {
  return week.map(function(day, i) {
    return (
      <HistoryItem key={i}>{day.toString()}</HistoryItem>
    );
  })
}

var monthly = function (month) {
  return month.map(function(week, i) {
    return (
      <WeeklyGrid key={i}>{weekly(week)}</WeeklyGrid>
    );
  })
}

export default () => (
      <Page>
        <h2>History</h2>
        <h3>Day</h3>
        <ReactSpecimen noSource={true}>
          <HistoryItem>History Item</HistoryItem>
        </ReactSpecimen>
        <h3>Weekly Grid</h3>
        <ReactSpecimen noSource={true}>
        <WeeklyGrid>{weekly(week_1)}</WeeklyGrid>
        </ReactSpecimen>
        <h3>Monthly Grid</h3>
        <ReactSpecimen noSource={true}>
          <MonthlyGrid>{monthly(month_1)}</MonthlyGrid>
        </ReactSpecimen>
      </Page>
);
