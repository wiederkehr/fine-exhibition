import React, { Component } from 'react';
import { Layout, LayoutContainer, LayoutContent } from '../components/Layout';
import { DetailScene } from '../components/DetailScene';
import { Records } from '../content/Records';

import './DetailPage.css';

export class DetailPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      records: []
    }

    this.getRecords=this.getRecords.bind(this);
    this.getDummyRecords=this.getDummyRecords.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);

  };

  componentWillMount() {
    // this.getRecords();
    this.getDummyRecords();
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
  };

  getDummyRecords() {
    this.setState({ records: Records });
  };

  render() {
    return (
      <Layout>
        <LayoutContainer>
          <LayoutContent className="DetailPageContent">
            <div className='DetailRecord'>
              <DetailScene record={this.state.records[3]} />
            </div>
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    );
  };
};
