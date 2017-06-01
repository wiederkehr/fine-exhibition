import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { HistoryScene } from '../components/HistoryScene';

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
          conduciveness: 3,
          controllability: 3,
          intensity: 3,
          valence: 3
        }
      ]
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);

  };

  componentWillMount() {
    // this.getRecords();
  };

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

    fetch(request)
      .then(this.getResponse)
      .then(this.setRecordsState);
  };

  getResponse(response) {
    return response.json();
  };

  setRecordsState(records) {
    this.setState({
      records: records.reverse()
    });
  };

  render() {
    return (
      <LayoutContainer>
        <LayoutContent className="HistoryPageContent">
          {/* <HistoryScene record={this.state.records[0]} /> */}
        </LayoutContent>
      </LayoutContainer>
    );
  };
}

export default HistoryPage;
