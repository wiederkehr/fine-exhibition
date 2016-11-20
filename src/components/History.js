import React, { Component } from 'react';
import './History.css';

export class HistoryItem extends Component {
  render() {
    return (
      <div className="HistoryItem">
        {this.props.children}
      </div>
    );
  }
}

export class MonthlyGrid extends Component {
  render() {
    return (
      <div className="MonthlyGrid">
        {this.props.children}
      </div>
    );
  }
}

export class WeeklyGrid extends Component {
  render() {
    return (
      <div className="WeeklyGrid">
        {this.props.children}
      </div>
    );
  }
}

export class DailyGrid extends Component {
  render() {
    return (
      <div className="DailyGrid">
        {this.props.children}
      </div>
    );
  }
}
