import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { ActionForm, EmotionForm, DimensionsForm, TriggerForm } from '../components/Form';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 0:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <div className='Recorder'>
              <h2 className='RecorderHeadline'>How are you feeling?</h2>
              <EmotionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </RecorderTransition>
        )
      case 1:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <div className='Recorder'>
              <DimensionsForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </RecorderTransition>
        )
      case 2:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <div className='Recorder'>
              <h2 className='RecorderHeadline'>What made you feel that way?</h2>
              <TriggerForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </RecorderTransition>
        )
      case 3:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <div className='Recorder'>
              <h2 className='RecorderHeadline'>How did you react?</h2>
              <ActionForm
                record={this.props.record}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
              />
            </div>
          </RecorderTransition>
        )
      case 4:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <div className='Recorder'>
              <h2 className='RecorderHeadline'>{this.props.record.emotion}</h2>
              <h3 className='RecorderSubheadline'>{this.props.record.date}</h3>
              <table style={{marginBottom:'30px', width:'100%', padding: '10px', background: 'rgba(255,255,255,0.7)'}}>
                <thead>
                  <tr>
                    <th style={{textAlign: 'left'}}>Dimension</th>
                    <th style={{textAlign: 'right'}}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Emotion</td><td style={{textAlign: 'right'}}>{this.props.record.emotion}</td></tr>
                  <tr><td>Date</td><td style={{textAlign: 'right'}}>{this.props.record.date}</td></tr>
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
          </RecorderTransition>
        )
      default:
        return (
          <div className='Recorder'>Default</div>
        )
    }
  }
}

const RecorderTransition = ({ direction, step, children }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName={direction==='forward' ? 'RecorderTransitionForward' : 'RecorderTransitionBackward'}
      transitionEnterTimeout={0}
      transitionLeaveTimeout={0}
      component='div'>
      <div className='RecorderTransition' key={step}>
        { children }
      </div>
    </ReactCSSTransitionGroup>
  )
}
