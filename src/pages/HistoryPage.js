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
          action: 'Engage',
          arousal: 3,
          conduciveness: 3,
          controllability: 3,
          intensity: 3,
          valence: 3,
        },
        {
          action:"Withdraw",
          arousal:3,
          conduciveness:4,
          controllability:3,
          date:"2017-05-31",
          emotion:"Joy",
          intensity:3,
          trigger:"Thing,Person",
          valence:3
        },
        {
          action:"Fight",
          arousal:2,
          conduciveness:4,
          controllability:2,
          date:"2017-05-31",
          emotion:"Joy",
          intensity:2,
          trigger:"Activity",
          valence:2
        },
        {
          action:"Engage",
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01",
          emotion:"Joy",
          intensity:3,
          trigger:"Person",
          valence:3
        },
        {
          action:"Fight",
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01",
          emotion:"Trust",
          intensity:3,
          trigger:"Person",
          valence:3
        },
        {
          action:"Fight",
          arousal:3,
          conduciveness:6,
          controllability:3,
          date:"2017-06-01",
          emotion:"Trust",
          intensity:3,
          trigger:"Place",
          valence:3
        },
        {
          action:null,
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01",
          emotion:null,
          intensity:3,
          trigger:null,
          valence:3
        }
      ]
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);

  };

  componentWillMount() {
    //this.getRecords();
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
    console.log(response.json());
    return response.json();
  };

  setRecordsState(records) {
    this.setState({
      records: records.reverse()
    });
  };

  render() {
    let allRecords = this.state.records.map((record, i) => {
      return (
        <div className='HistoryRecord' key={i}>
          <HistoryScene record={this.state.records[i]} />
        </div>
      )
    });
    return (
      <LayoutContainer>
        <LayoutContent className="HistoryPageContent">
          <div className="HistoryHeader"><h1>How are you feeling today?</h1></div>
          <div className='HistoryGrid'>
            {allRecords}
          </div>
          {/* <HistoryScene record={this.state.records[0]} /> */}
        </LayoutContent>
      </LayoutContainer>
    );
  };
}

export default HistoryPage;
