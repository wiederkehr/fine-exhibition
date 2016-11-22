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
      date: '',
      arousal: '1',
      conduciveness: '1',
      controllability: '1',
      intensity: '1',
      valence: '1',
      status: 'Submit',
      disabled: false,
    }

    this.onFormChange=this.onFormChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
    this.sendRecord=this.sendRecord.bind(this);
    this.getResponse=this.getResponse.bind(this);

  };

  componentDidMount() {
    // eslint-disable-next-line
    Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
    });
    this.setState({date: new Date().toDateInputValue()})
  }

  onFormChange(field, event) {
    var stateUpdate = {};
    stateUpdate[field] = event.target.value;
    this.setState(stateUpdate);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ status: 'Sending…' }, this.sendRecord);
  }

  sendRecord() {
    var bookId = '5820e4e29f61d803006b2093';
    var sheetId = 'sheet';
    var baseUrl = 'https://api.fieldbook.com/v1/';
    var url = baseUrl + bookId + '/' + sheetId;

    var record = {
      date: this.state.date,
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
      <form className="Form" onSubmit={this.onFormSubmit}>
        <div className="Input-group">
          <input  className="Input-text"
                  id="emotion"
                  type="text"
                  placeholder="Emotion"
                  onChange={this.onFormChange.bind(null, "emotion")} />
          <input  className="Input-text"
                  id="event"
                  type="text"
                  placeholder="Event"
                  onChange={this.onFormChange.bind(null, "event")} />
          <input  className="Input-date"
                  id="text"
                  type="date"
                  value={this.state.date}
                  onChange={this.onFormChange.bind(null, "date")} />
        </div>
        <div className="Slider-group">
          <Slider name="Arousal"
                  value={this.state.arousal}
                  onChange={this.onFormChange.bind(null, "arousal")} />
          <Slider name="Conduciveness"
                  value={this.state.conduciveness}
                  onChange={this.onFormChange.bind(null, "conduciveness")} />
          <Slider name="Controllability"
                  value={this.state.controllability}
                  onChange={this.onFormChange.bind(null, "controllability")} />
          <Slider name="Intensity"
                  value={this.state.intensity}
                  onChange={this.onFormChange.bind(null, "intensity")} />
          <Slider name="Valence"
                  value={this.state.valence}
                  onChange={this.onFormChange.bind(null, "valence")} />
        </div>
        <Button type="submit" disabled={this.state.disabled} label={this.state.status} />
      </form>
    );
  }
}

export default Form;
