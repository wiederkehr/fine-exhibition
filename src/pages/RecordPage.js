import React, { Component } from 'react';
import update from 'immutability-helper';
import { timeFormat } from 'd3';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { Recorder } from '../components/Recorder';
import { Recording } from '../components/Recording';

import './RecordPage.css';

class RecordPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      record: {
        date: '',
        name: 'Anna',
        emotion: false,
        trigger: false,
        action: false,
        arousal: 3,
        conduciveness: 3,
        controllability: 3,
        intensity: 3,
        valence: 3,
      },
      steps: [
        'Emotion',
        'Dimensions',
        'Triggers',
        'Actions',
        'Review',
      ],
      readyForNextStep: true,
      readyForPreviousStep: true,
      currentStep: 0,
      direction: 'forward',
      status: 'Submit',
      disabled: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendRecord = this.sendRecord.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.forwardStep = this.forwardStep.bind(this);
    this.backwardStep = this.backwardStep.bind(this);

  };

  componentDidMount() {
    var newState = update(this.state, {
      record: {
        date: { $set: timeFormat("%Y-%m-%d")(new Date()) }
      }
    });
    this.setState(newState);
  }

  forwardStep(event) {
    event.preventDefault();
    if (this.state.currentStep < this.state.steps.length - 1) {
      this.setState({ direction: 'forward' });
      this.setState({ currentStep: this.state.currentStep + 1 });
      this.setState({ readyForNextStep: true });
    }
  }

  backwardStep(event) {
    event.preventDefault();
    if (this.state.currentStep > 0) {
      this.setState({ direction: 'backward' });
      this.setState({ currentStep: this.state.currentStep - 1 });
      this.setState({ readyForNextStep: true });
    }
  }

  onChange(field, event) {
    var newState = update(this.state, {
      record: {
        [field]: { $set: event.target.value }
      }
    });
    this.setState(newState);
    this.setState({ readyForNextStep: true });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // this.setState({ status: 'Sending…' }, this.sendRecord);
  }

  sendRecord() {
    var record = this.state.record;
    var username = process.env.REACT_APP_FIELDBOOK_USER;
    var password = process.env.REACT_APP_FIELDBOOK_KEY;
    var bookId = process.env.REACT_APP_FIELDBOOK_BOOK;
    var sheetId = process.env.REACT_APP_FIELDBOOK_SHEET;
    var baseUrl = 'https://api.fieldbook.com/v1/';
    var url = baseUrl + bookId + '/' + sheetId;
    var userpass = username + ':' + password;
    var authorization = 'Basic '+ btoa(userpass);

    var headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': authorization
    });

    var request = new Request(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(record)
    })

    fetch(request).then(this.getResponse);

  }

  getResponse(response) {
    this.setState({ status: 'Sent ✔︎', disabled: true });
  }

  render() {
    return (
      <LayoutContainer>
        <Header right={{to:'/', label:'Close'}} transparent />
        <LayoutContent className="RecordPageContent">
          <Recording
            record={this.state.record}
            step={this.state.currentStep}
          />
          <Recorder
            record={this.state.record}
            steps={this.state.steps}
            step={this.state.currentStep}
            direction={this.state.direction}
            onChange={this.onChange}
            onSubmit={this.forwardStep}
          />
        </LayoutContent>
        <Pagination
          forward={{onClick:this.forwardStep, onSubmit:this.onSubmit}}
          backward={{onClick:this.backwardStep}}
          dots={this.state.steps}
          currentDot={this.state.currentStep}
          readyForNextStep={this.state.readyForNextStep}
          readyForPreviousStep={this.state.readyForPreviousStep}
          transparent
        />
      </LayoutContainer>
    );
  }
}

export default RecordPage;
