import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { HistoryScene } from '../components/HistoryScene';
import { CloseIcon } from '../components/Icons';
import { Records } from '../content/Records';

import './HistoryPage.css';

class HistoryPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      overlay: false,
      iterator: 0,
      records: null
    }

    this.getRecords=this.getRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.setRecordsState=this.setRecordsState.bind(this);
    this.setTimer=this.setTimer.bind(this);
    this.tick=this.tick.bind(this);

  };

  componentWillMount() {
    this.setState({ records: Records });
    //this.getRecords();
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick()
    }, 100);
  };

  componentWillUnmount(){
    clearInterval(this.intervalId);
  };

  tick() {
    let newIterator = this.state.iterator + 2;
    if (newIterator > 1880) {
  		newIterator = 0;
  	};
    this.setState({ iterator: newIterator });
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
      <Record key={'record-'+i} record={this.state.records[i]} iterator={this.state.iterator} />
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

const Record = ({ record, iterator }) => (
  <div className='HistoryRecord'>
    <HistoryScene record={record} iterator={iterator} />
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
