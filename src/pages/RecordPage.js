import React, { Component } from 'react';
import update from 'immutability-helper';
import { browserHistory } from 'react-router';
import { timeFormat } from 'd3';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { Confirmation } from '../components/Confirmation';
import { Notification } from '../components/Notification';
import { Recorder } from '../components/Recorder';
import { Recording } from '../components/Recording';
import { CloseIcon } from '../components/Icons';

import './RecordPage.css';

class RecordPage extends Component {

  constructor(props) {
    super(props);

    this.state={
      record: {
        date: '',
        emotion: '',
        trigger: [],
        action: '',
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
      pagination: true,
      error: false,
    }

    this.forwardStep = this.forwardStep.bind(this);
    this.backwardStep = this.backwardStep.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendRecord = this.sendRecord.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.clearError = this.clearError.bind(this);
    this.restart = this.restart.bind(this);

  };

  componentDidMount() {
    var newState = update(this.state, {
      record: {
        date: { $set: timeFormat("%Y-%m-%d")(new Date()) }
      }
    });
    this.setState(newState);
  };

  forwardStep(event) {
    event.preventDefault();
    if (this.state.currentStep < this.state.steps.length - 1) {
      this.setState({
        direction: 'forward',
        currentStep: this.state.currentStep + 1,
        readyForNextStep: true
      });
    };
  };

  backwardStep(event) {
    event.preventDefault();
    if (this.state.currentStep > 0) {
      this.setState({
        direction: 'backward',
        currentStep: this.state.currentStep - 1,
        readyForNextStep: true
      });
    };
  };

  onChange(field, event) {
    console.log(field+':', event.target.value);
    var newState = update(this.state, {
      record: {
        [field]: { $set: event.target.value }
      }
    });
    this.setState(newState);
    this.setState({ readyForNextStep: true });
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState({ readyForNextStep: false });
    this.sendRecord();
  };

  sendRecord() {
    let record        = Object.assign({}, this.state.record);
    record.trigger    = record.trigger.join();
    let body          = JSON.stringify(record)

    let username      = process.env.REACT_APP_FIELDBOOK_USER;
    let password      = process.env.REACT_APP_FIELDBOOK_KEY;
    let bookId        = process.env.REACT_APP_FIELDBOOK_BOOK;
    let sheetId       = process.env.REACT_APP_FIELDBOOK_SHEET;
    let baseUrl       = 'https://api.fieldbook.com/v1/';
    let url           = baseUrl + bookId + '/' + sheetId;
    let userpass      = username + '--33:' + password;
    let authorization = 'Basic '+ btoa(userpass);

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': authorization
    });

    let request = new Request(url, {
      method: 'POST',
      headers: headers,
      body: body
    });

    fetch(request)
      .then(this.getResponse)
      .then(this.handleResponse)
      .catch(this.handleErrors);

  };

  getResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    };
    return response;
  };

  handleErrors(error) {
    console.log(error);
    this.setState({ error: true, readyForNextStep: true });
  };

  handleResponse(response) {
    console.log(response);
    this.setState({ pagination: false });
  };

  restart() {
    browserHistory.push('/');
  };

  clearError() {
    this.setState({ error: false });
  };

  render() {

    const pagination = (
      <Pagination
        forward={{onClick:this.forwardStep, onSubmit:this.onSubmit}}
        backward={{onClick:this.backwardStep}}
        dots={this.state.steps}
        currentDot={this.state.currentStep}
        readyForNextStep={this.state.readyForNextStep}
        readyForPreviousStep={this.state.readyForPreviousStep}
        transparent
      />
    );

    const confirmation = <Confirmation restart={this.restart}/>;
    const error = <Notification clear={this.clearError} type='error'>Sorry, an error occurred. <br/>Please try again.</Notification>;

    return (
      <LayoutContainer>
        <Header right={{to:'/', label:<CloseIcon />}} transparent />
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
        { this.state.error ? error : null }
        { this.state.pagination ? pagination : confirmation }
      </LayoutContainer>
    );
  };
}

export default RecordPage;
