import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { HistoryScene } from '../components/HistoryScene';
import { CloseIcon } from '../components/Icons';

import './HistoryPage.css';

class HistoryPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      overlay: false,
      records: [
        {
          date: false,
          emotion: false,
          trigger: false,
          action: 'Engage',
          arousal: 3,
          conduciveness: 1,
          controllability: 3,
          intensity: 3,
          valence: 3,
        },
        {
          action:"Suppress",
          arousal:3,
          conduciveness:2,
          controllability:2,
          date:"2017-05-31 12:32",
          emotion:"Joy",
          intensity:1,
          trigger:"Thing,Person",
          valence:4
        },
        {
          action:"Withdraw",
          arousal:2,
          conduciveness:3,
          controllability:2,
          date:"2017-05-31 12:32",
          emotion:"Joy",
          intensity:5,
          trigger:"Activity",
          valence:5
        },
        {
          action:"Savor",
          arousal:3,
          conduciveness:4,
          controllability:3,
          date:"2017-06-01 12:32",
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
          date:"2017-06-01 12:32",
          emotion:"Trust",
          intensity:3,
          trigger:"Person",
          valence:3
        },
        {
          action:"Other",
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01 12:32",
          emotion:"Trust",
          intensity:3,
          trigger:"Place",
          valence:5
        },
        {
          action:null,
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01 12:32",
          emotion:null,
          intensity:3,
          trigger:null,
          valence:4
        },
        {
          action:"Fight",
          arousal:2,
          conduciveness:4,
          controllability:2,
          date:"2017-05-31 12:32",
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
          date:"2017-06-01 12:32",
          emotion:"Joy",
          intensity:3,
          trigger:"Person",
          valence:3
        },
        {
          action:"Withdraw",
          arousal:3,
          conduciveness:4,
          controllability:3,
          date:"2017-05-31 12:32",
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
          date:"2017-05-31 12:32",
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
          date:"2017-06-01 12:32",
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
          date:"2017-06-01 12:32",
          emotion:"Trust",
          intensity:3,
          trigger:"Person",
          valence:3
        },
        {
          action:"Fight",
          arousal:3,
          conduciveness:5,
          controllability:3,
          date:"2017-06-01 12:32",
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
          date:"2017-06-01 12:32",
          emotion:null,
          intensity:3,
          trigger:null,
          valence:3
        },
        {
          action:"Fight",
          arousal:2,
          conduciveness:4,
          controllability:2,
          date:"2017-05-31 12:32",
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
          date:"2017-06-01 12:32",
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
          date:"2017-06-01 12:32",
          emotion:"Trust",
          intensity:3,
          trigger:"Person",
          valence:3
        }
      ]
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);
    this.setTimer=this.setTimer.bind(this);

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
      .then(this.setRecordsState)
      .then(this.setTimer);
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

  getEmptyRecords(existing) {
    let row = 8;
    let rows = Math.ceil(existing / row);
    let empty = rows * row - existing;
    let emptyRecords = []
    for (let i = 0; i < empty; i++) {
      emptyRecords.push(
        <RecordEmpty key={'empty-'+i} />
      );
    }
    return emptyRecords;
  }

  setTimer() {
    // setTimeout(this.getRecords(), 30000);
  };

  render() {

    const emptyRecords = this.getEmptyRecords(this.state.records.length);
    const allRecords = this.state.records.map((record, i) => (
      <Record key={'record-'+i} record={this.state.records[i]} />
    ));
    const currentEmotion = this.state.records[0].emotion ? this.state.records[1].emotion : 'fine';

    return (
      <LayoutContainer>
        <LayoutContent className="HistoryPageContent">
          <div className="HistoryHeader">
            <h1>Right now, we feel <span>{currentEmotion}</span>.</h1>
            {/* <a onClick={() => { this.setState({overlay: true})}}>Fine.</a> */}
          </div>
          <div className='HistoryGrid'>
            {allRecords}
            {emptyRecords}
          </div>
          { this.state.overlay ? <Overlay close={() => { this.setState({overlay: false})}} /> : null }
        </LayoutContent>
      </LayoutContainer>
    );
  };
}

export default HistoryPage;

const Record = ({ record }) => (
  <div className='HistoryRecord'>
    <HistoryScene record={record} />
  </div>
);

const RecordEmpty = ( ) => (
  <div className='HistoryRecord HistoryRecord--empty'></div>
);

const Overlay = ({ close }) => (
  <div className='HistoryOverlay'>
    <a className='HistoryOverlayClose' onClick={close}><CloseIcon /></a>
    <ol>
      <li>📱 Pick up the iPad.</li>
      <li>💬 Tell us how you're feeling today.</li>
      <li>🌄 See your emotion added here.</li>
    </ol>
  </div>
);
