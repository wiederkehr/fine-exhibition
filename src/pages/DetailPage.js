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
      record: {},
      width: '0',
      height: '0'
    };

    this.getRecord=this.getRecord.bind(this);
    this.getDummyRecord=this.getDummyRecord.bind(this);
    this.getResponse=this.getResponse.bind(this);
    this.handleErrors=this.handleErrors.bind(this);
    this.handleResponse=this.handleResponse.bind(this);
    this.getImage=this.getImage.bind(this);
    this.getImageResponse=this.getImageResponse.bind(this);
    this.handleImageErrors=this.handleImageErrors.bind(this);
    this.handleImageResponse=this.handleImageResponse.bind(this);
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
    this.getImage();
  };

  getImage() {
    var detailId = this.state.id;
    var baseUrl = 'https://fine-screenshots.annawiederkehr.com/';
    var url = baseUrl + '?detailId=' + detailId;

    var headers = new Headers({
      'Accept': 'image/png'
      // 'Accept': 'application/json',
    });

    var request = new Request(url, {
      method: 'GET',
      headers: headers,
      mode: 'no-cors'
    })

    fetch(request)
      .then(this.getImageResponse)
      .then(this.handleImageResponse)
      .catch(this.handleImageErrors);
  };

  getImageResponse(response) {
    console.log(response);
    if (!response.ok) {
      throw Error(response.statusText);
    };
    return response.json();
  };

  handleImageErrors(error) {
    console.log(error);
  };

  handleImageResponse(response) {
    console.log(response);
    this.setState({ image: response });
  };

  getDummyRecord() {
    this.setState({ record: Records.reverse().splice(0,1)[0] });
  };

  render() {
    let record = null;
    if(this.state.record.arousal){
      record = <DetailRecord height={this.state.height} record={this.state.record} />;
    }else{
      record = <EmptyRecord height={this.state.height} />;
    };
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

const DetailRecord = ({record, height}) => {
  return (
    <div className='DetailRecord'>
      <Air style={{ height: height }}>
        <Sky record={record} />
        <Aura record={record} />
        <Hummock record={record} />
        <Wave record={record} />
        <EmotionHeaderSlim record={record} />
      </Air>
    </div>
  )
}

const EmptyRecord = ({height}) => (
  <div className='EmptyRecord'>
    <div className='EmotionLoading'>…Loading Feels…</div>
  </div>
);
