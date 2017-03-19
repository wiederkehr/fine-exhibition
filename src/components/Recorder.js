import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { EmotionHeader } from './DetailInfo.js';
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
              <EmotionHeader
                record={this.props.record}
              />
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
