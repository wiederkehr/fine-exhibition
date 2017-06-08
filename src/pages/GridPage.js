import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';
import { GridScene } from '../components/GridScene';
import { Records } from '../content/Records';

import './GridPage.css';

export class GridPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      loadingTime: 0,
      loadingPercentage: 0,
      records: []
    }

    this.getRecords=this.getRecords.bind(this);
    this.getDummyRecords=this.getDummyRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);
    this.setLoading=this.setLoading.bind(this);

  };

  componentWillMount() {
    this.getRecords();
    // this.getDummyRecords(Records);
  };

  componentWillUnmount(){
    clearInterval(this.loadingInterval);
  };

  setLoading() {
    let newTime = this.state.loadingTime + 10;
    let newPercentage = 100 / 3000 * newTime;

    if (newTime > 3000) {
  		newTime = 0;
      newPercentage = 0;
      clearInterval(this.loadingInterval);
      this.getRecords();
      // this.getDummyRecords(Records);
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
    this.setState({ records: response.reverse().slice(0,30) });
    this.loadingInterval = setInterval(() => {
      this.setLoading();
    }, 100);
  };

  getDummyRecords(response) {
    this.setState({ records: response.reverse().slice(0,30) });
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

    return (
      <Layout>
        <Helmet>
          <title>Fine・Grid</title>
        </Helmet>
        <LayoutContainer>
          <LayoutContent className="GridPageContent">
            <div className='GridGrid'>
              {allRecords}
              {emptyRecords}
            </div>
            <Loader loadingPercentage={this.state.loadingPercentage} />
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  };
};

const Record = ({ record, iterator }) => (
  <div className='GridRecord'>
    <GridScene record={record} iterator={iterator} />
  </div>
);

const RecordEmpty = ( ) => (
  <div className='GridRecord GridRecord--empty'></div>
);

const Loader = ({ loadingPercentage }) => {
  return (
    <div className='GridLoader'>
      <div
        className='GridLoaderPercentage'
        style={{
          width: 100 - loadingPercentage + '%'
        }}></div>
    </div>
  )
};
