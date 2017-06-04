import React, { Component } from 'react';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';
import { HistoryScene } from '../components/HistoryScene';
import { CloseIcon } from '../components/Icons';
import { Records } from '../content/Records';

import './HistoryPage.css';

export class HistoryPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      overlay: false,
      iterator: 0,
      loadingTime: 0,
      loadingPercentage: 0,
      records: []
    }

    this.getRecords=this.getRecords.bind(this);
    this.getDummyRecords=this.getDummyRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);
    this.tick=this.tick.bind(this);
    this.setLoading=this.setLoading.bind(this);

  };

  componentWillMount() {
    // this.getRecords();
    this.getDummyRecords();
  };

  componentDidMount() {
    // this.animationInterval = setInterval(() => {
    //   this.tick();
    // }, 100);
  };

  componentWillUnmount(){
    // clearInterval(this.animationInterval);
    clearInterval(this.loadingInterval);
  };

  tick() {
    let newIterator = this.state.iterator + 2;
    if (newIterator > 1880) {
  		newIterator = 0;
  	};
    this.setState({ iterator: newIterator });
  };

  setLoading() {
    let newTime = this.state.loadingTime + 10;
    let newPercentage = 100 / 3000 * newTime;

    if (newTime > 3000) {
  		newTime = 0;
      newPercentage = 0;
      clearInterval(this.loadingInterval);
      // this.getRecords();
      this.getDummyRecords();
  	}else{
      newPercentage = 100 / 3000 * newTime;
    };

    this.setState({
      loadingTime: newTime,
      loadingPercentage: newPercentage
    });

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
      .then(this.handleResponse)
      .catch(this.handleErrors);
  };

  getResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    };
    return response.json();
  };

  handleErrors(error) {
    console.log(error);
  };

  handleResponse(response) {
    console.log(response);
    this.setState({ records: response.reverse() });
    this.loadingInterval = setInterval(() => {
      this.setLoading();
    }, 100);
  };

  getDummyRecords() {
    this.setState({ records: Records });
    this.loadingInterval = setInterval(() => {
      this.setLoading();
    }, 100);
  };

  getEmptyRecords(existing) {
    let row = 10;
    let rows = Math.ceil(existing / row);
    let empty = rows * row - existing;
    if(rows < 3) { empty += 10 };
    if(rows < 2) { empty += 10 };
    if(rows < 1) { empty += 10 };
    let emptyRecords = []
    for (let i = 0; i < empty; i++) {
      emptyRecords.push(
        <RecordEmpty key={'empty-'+i} />
      );
    }
    return emptyRecords;
  }

  render() {

    const emptyRecords = this.getEmptyRecords(this.state.records.length);
    const allRecords = this.state.records.map((record, i) => (
      <Record key={'record-'+i} record={this.state.records[i]} iterator={this.state.iterator} />
    ));
    // const currentEmotion = this.state.records[0].emotion ? this.state.records[1].emotion : 'fine';

    return (
      <Layout>
        <LayoutContainer>
          <LayoutContent className="HistoryPageContent">
            {/* <div className="HistoryHeader">
              <h1>Right now, we feel <span>{currentEmotion}</span>.</h1>
              <a onClick={() => { this.setState({overlay: true})}}>Fine.</a>
            </div> */}
            <div className='HistoryGrid'>
              {allRecords}
              {emptyRecords}
            </div>
            { this.state.overlay ? <Overlay close={() => { this.setState({overlay: false})}} /> : null }
            <Loader loadingPercentage={this.state.loadingPercentage} />
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  };
};

const Record = ({ record, iterator }) => (
  <div className='HistoryRecord'>
    <HistoryScene record={record} iterator={iterator} />
  </div>
);

const RecordEmpty = ( ) => (
  <div className='HistoryRecord HistoryRecord--empty'></div>
);

const Loader = ({ loadingPercentage }) => {
  return (
    <div className='HistoryLoader'>
      <div className='HistoryLoaderPercentage' style={{ width: loadingPercentage + '%'}}></div>
    </div>
  )
};

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
