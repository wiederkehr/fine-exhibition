import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlyphContainer } from '../components/Glyph';

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

  renderEmotion(record, i) {
    return (
      <div key={i}>
      <GlyphContainer
        date={record.date}
        emotion={record.emotion}
        arousal={record.arousal}
        conduciveness={record.conduciveness}
        controllability={record.controllability}
        intensity={record.intensity}
        valence={record.valence}
      />
      </div>
    )
  }

  render() {
    var records = this.state.records.map(this.renderEmotion);
    return (
      <LayoutContainer>
        <Header>{this.props.route.title}</Header>
        <LayoutContent className="ViewPageContent">
          {this.state.records.length < 1 ? "Loading emotions…" : null }
          {records}
        </LayoutContent>
        <Footer border/>
      </LayoutContainer>
    );
  }
};

export default ViewPage;
