import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { ActionForm, EmotionForm, DimensionsForm, TriggerForm } from '../components/Form';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 0:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={10}>
            <div className='Recorder' key={0}>
              <EmotionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 1:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={10}>
            <div className='Recorder' key={1}>
              <DimensionsForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 2:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={10}>
            <div className='Recorder' key={2}>
              <TriggerForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 3:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={10}>
            <div className='Recorder' key={3}>
              <ActionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </ReactCSSTransitionGroup>
        )
      case 4:
        return (
          <ReactCSSTransitionGroup
            transitionName="RecorderTransition"
            transitionEnterTimeout={10}
            transitionLeaveTimeout={10}>
            <div className='Recorder' key={4}>
              <table style={{marginBottom:'30px', width:'100%', padding: '10px', background: 'rgba(255,255,255,0.7)'}}>
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
            </div>
          </ReactCSSTransitionGroup>
        )
      default:
        return (
          <div className='Recorder'>Default</div>
        )
    }
  }
}
