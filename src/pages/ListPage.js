import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';
import { Air, Sky, Aura, Hummock, Wave } from '../components/Scene';
import { EmotionHeaderSlim } from '../components/EmotionHeader';
import { Records } from '../content/Records';

import './ListPage.css';

export class ListPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      records: [],
      width: '0',
      height: '0'
    };

    this.getRecords=this.getRecords.bind(this);
    this.getDummyRecords=this.getDummyRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  };

  componentWillMount() {
    this.getRecords();
    // this.getDummyRecords();
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
  };

  getDummyRecords() {
    this.setState({ records: Records });
  };

  render() {
    const allRecords = this.state.records.map((record, i) => (
      <div className='DetailRecord' key={'record-'+i}>
        <Link to={ "/detail/" + record.id.replace('Sheet ','')}>
          <Air style={{ height: this.state.height }}>
            <Sky record={record} />
            <Aura record={record} />
            <Hummock record={record} />
            <Wave record={record} />
            <EmotionHeaderSlim record={record} />
          </Air>
        </Link>
      </div>
    ));
    return (
      <Layout>
        <Helmet>
          <title>Fine・List</title>
        </Helmet>
        <LayoutContainer>
          <LayoutContent className="ListPageContent">
            {allRecords}
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  };
};
