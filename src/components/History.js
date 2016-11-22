import React from 'react';
import './History.css';

export const HistoryItem = ({ children }) => {
  return <div className="HistoryItem">{children}</div>
}

export const WeeklyGrid = ({ children }) => {
  return <div className="WeeklyGrid">{children}</div>
}

export const MonthlyGrid = ({ children }) => {
  return <div className="MonthlyGrid">{children}</div>
}
