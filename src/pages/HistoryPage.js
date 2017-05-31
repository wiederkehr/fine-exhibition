import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { DetailScene } from '../components/DetailScene';
import { DetailInfo } from '../components/DetailInfo';

import './HistoryPage.css';

class HistoryPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      records: [
        {
          date: false,
          emotion: false,
          trigger: false,
          action: false,
          arousal: 3,
          controllability: 3,
          conduciveness: 3,
          intensity: 3,
          valence: 3
        },
      ],
      level: 0,
      currentDay: 0
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);
    this.forwardDay = this.forwardDay.bind(this);
    this.backwardDay = this.backwardDay.bind(this);

  };

  componentWillMount() {
    this.getRecords();
  }

  getRecords() {
    var username = process.env.REACT_APP_FIELDBOOK_USER;
    var password = process.env.REACT_APP_FIELDBOOK_KEY;
    var bookId = process.env.REACT_APP_FIELDBOOK_BOOK;
    var sheetId = process.env.REACT_APP_FIELDBOOK_SHEET;
    var baseUrl = 'https://api.fieldbook.com/v1/';
    var url = baseUrl + bookId + '/' + sheetId;
    var userpass = username + ':' + password;
    var authorization = 'Basic '+ btoa(userpass);

    var headers = new Headers({
      'Accept': 'application/json',
      'Authorization': authorization
    });

    var request = new Request(url, {
      method: 'GET',
      headers: headers
    })

    fetch(request).then(this.getResponse).then(this.setRecordsState);
  }

  getResponse(response) {
    return response.json();
  }

  setRecordsState(records) {
    this.setState({
      records: records.reverse()
    });
  }

  backwardDay(event) {
    event.preventDefault();
    if (this.state.currentDay < this.state.records.length - 1) {
      this.setState({ currentDay: this.state.currentDay + 1 });
    };
  }

  forwardDay(event) {
    event.preventDefault();
    if (this.state.currentDay > 0) {
      this.setState({ currentDay: this.state.currentDay - 1 });
    };
  }

  render() {
    return (
      <LayoutContainer>
        <LayoutContent className="HistoryPageContent">
          <DetailScene
            level={this.state.level}
            record={this.state.records[this.state.currentDay]}
          />
          <DetailInfo
            level={this.state.level}
            record={this.state.records[this.state.currentDay]}
          />
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default HistoryPage;
