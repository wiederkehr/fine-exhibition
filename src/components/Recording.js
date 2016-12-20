import React, { Component } from 'react';
import './Recording.css';

export class Recording extends Component {
  render() {
    return (
      <table style={{marginBottom:'30px', width:'100%'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Dimension</th>
            <th style={{textAlign: 'right'}}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Emotion</td><td style={{textAlign: 'right'}}>{this.props.record.emotion}</td></tr>
          <tr><td>Event</td><td style={{textAlign: 'right'}}>{this.props.record.event}</td></tr>
          <tr><td>Trigger</td><td style={{textAlign: 'right'}}>{this.props.record.trigger}</td></tr>
          <tr><td>Action</td><td style={{textAlign: 'right'}}>{this.props.record.action}</td></tr>
          <tr><td>Arousal</td><td style={{textAlign: 'right'}}>{this.props.record.arousal}</td></tr>
          <tr><td>Conduciveness</td><td style={{textAlign: 'right'}}>{this.props.record.conduciveness}</td></tr>
          <tr><td>Controllability</td><td style={{textAlign: 'right'}}>{this.props.record.controllability}</td></tr>
          <tr><td>Intensity</td><td style={{textAlign: 'right'}}>{this.props.record.intensity}</td></tr>
          <tr><td>Valence</td><td style={{textAlign: 'right'}}>{this.props.record.valence}</td></tr>
        </tbody>
      </table>
    )
  }
}
