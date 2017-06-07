import React, { Component } from 'react';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';
import { Air, Sky, Aura, Hummock, Wave } from '../components/Scene';
import { EmotionHeaderSlim } from '../components/EmotionHeader';
import { Records } from '../content/Records';

import './DetailPage.css';

export class DetailPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      id: props.params.recordID,
      record: null,
      width: '0',
      height: '0'
    };

    this.getRecord=this.getRecord.bind(this);
    this.getDummyRecord=this.getDummyRecord.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  };

  componentWillMount() {
    if(this.state.id) {
      this.getRecord(this.state.id);
    }else{
      // this.getDummyRecord();
      this.getRecord(166);
    };
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

  getRecord(id) {
    var username = process.env.REACT_APP_FIELDBOOK_USER;
    var password = process.env.REACT_APP_FIELDBOOK_KEY;
    var bookId = process.env.REACT_APP_FIELDBOOK_BOOK;
    var sheetId = process.env.REACT_APP_FIELDBOOK_SHEET;
    var baseUrl = 'https://api.fieldbook.com/v1/';
    var url = baseUrl + bookId + '/' + sheetId + '/' + id;
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
    this.setState({ record: response });
  };

  getDummyRecord() {
    this.setState({ record: Records.reverse().splice(0,1)[0] });
  };

  render() {
    let record = null;
    if(this.state.record){
      record = (
        <div className='DetailRecord'>
          <Air style={{ height: this.state.height }}>
            <Sky record={this.state.record} />
            <Aura record={this.state.record} />
            <Hummock record={this.state.record} />
            <Wave record={this.state.record} />
            <EmotionHeaderSlim record={this.state.record} />
          </Air>
        </div>
      )
    }else{
      record = <div className='DetailRecord DetailRecord--empty'></div>
    }
    return (
      <Layout>
        <LayoutContainer>
          <LayoutContent className="DetailPageContent">
            { record }
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  };
};
