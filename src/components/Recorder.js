import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { EmotionRecorder } from '../components/RecorderEmotion';
import { DimensionRecorder } from '../components/RecorderDimension';
import { TriggerRecorder } from '../components/RecorderTrigger';
import { ActionRecorder } from '../components/RecorderAction';
import { ReviewRecorder } from '../components/RecorderReview';
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
            <DimensionRecorder
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
            <ReviewRecorder record={this.props.record} />
          </RecorderTransition>
        )
      default:
        return null
    }
  }
};

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
};
