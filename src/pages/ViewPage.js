import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import './ViewPage.css';

class ViewPage extends Component {
  constructor(props) {
    super(props);

    this.state={
      records: []
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);
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
      records: records
    });
  }

  render() {
    var records = this.state.records.map(function(record) {
      return (
        <li key={record.id}>{record.emotion}</li>
      );
    });
    return (
      <LayoutContainer>
        <Header>View</Header>
        <LayoutContent className="ViewPageContent">
          {this.state.records.length < 1 ? "Loading emotions…" : null }
          <ul>
            {records}
          </ul>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
};

export default ViewPage;
