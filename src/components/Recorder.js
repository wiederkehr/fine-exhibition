import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { EmotionHeader } from './DetailInfo.js';
import { ActionRecorder, EmotionRecorder, DimensionsRecorder, TriggerRecorder } from '../components/Recorders';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 0:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <EmotionRecorder
              record={this.props.record}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          </RecorderTransition>
        )
      case 1:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <DimensionsRecorder
              record={this.props.record}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          </RecorderTransition>
        )
      case 2:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <TriggerRecorder
              record={this.props.record}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
          </RecorderTransition>
        )
      case 3:
        return (
          <RecorderTransition direction={this.props.direction} step={this.props.step}>
            <ActionRecorder
              record={this.props.record}
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
            />
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
        return <div className='Recorder'>Default</div>
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
