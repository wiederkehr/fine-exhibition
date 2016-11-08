import React, { Component } from 'react';
import Slider from './Slider.js';
import Button from './Button.js';

import './Form.css';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state={
      name: 'Anna',
      emotion: 'Emotion',
      event: 'Event',
      arousal: '1',
      conduciveness: '1',
      controllability: '1',
      intensity: '1',
      valence: '1',
      status: 'Submit',
      disabled: false,
    }

    this.updateState=this.updateState.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.sendRecord=this.sendRecord.bind(this);
    this.getResponse=this.getResponse.bind(this);

  };

  updateState(field, event) {
    var stateUpdate = {};
    stateUpdate[field] = event.target.value;
    this.setState(stateUpdate);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ status: 'Sending…' }, this.sendRecord);
  }

  sendRecord() {
    var bookId = '5820e4e29f61d803006b2093';
    var sheetId = 'sheet';
    var baseUrl = 'https://api.fieldbook.com/v1/';
    var url = baseUrl + bookId + '/' + sheetId;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = dd+'/'+mm+'/'+yyyy;

    var record = {
      date: today,
      name: this.state.name,
      emotion: this.state.emotion,
      event: this.state.event,
      arousal: this.state.arousal,
      conduciveness: this.state.conduciveness,
      controllability: this.state.controllability,
      intensity: this.state.intensity,
      valence: this.state.valence
    };

    var username = process.env.REACT_APP_FIELDBOOK_USER;
    var password = process.env.REACT_APP_FIELDBOOK_KEY;
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
      <form className="Form" onSubmit={this.onSubmit}>
        <div className="Input-group">
          <input  className="Input-text"
                  id="emotion"
                  type="text"
                  placeholder="Emotion"
                  onChange={this.updateState.bind(null, "emotion")} />
          <input  className="Input-text"
                  id="event"
                  type="text"
                  placeholder="Event"
                  onChange={this.updateState.bind(null, "event")} />
        </div>
        <div className="Slider-group">
          <Slider name="Arousal"
                  value={this.state.arousal}
                  onChange={this.updateState.bind(null, "arousal")} />
          <Slider name="Conduciveness"
                  value={this.state.conduciveness}
                  onChange={this.updateState.bind(null, "conduciveness")} />
          <Slider name="Controllability"
                  value={this.state.controllability}
                  onChange={this.updateState.bind(null, "controllability")} />
          <Slider name="Intensity"
                  value={this.state.intensity}
                  onChange={this.updateState.bind(null, "intensity")} />
          <Slider name="Valence"
                  value={this.state.valence}
                  onChange={this.updateState.bind(null, "valence")} />
        </div>
        <Button type="submit" disabled={this.state.disabled} label={this.state.status} />
      </form>
    );
  }
}

export default Form;
