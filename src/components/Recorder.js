import React, { Component } from 'react';
import { ActionForm, EmotionForm, EventForm, DimensionsForm, TriggerForm } from '../components/Form';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 0:
        return (
          <div className='Recorder'>
            <EmotionForm
              record={this.props.record}
              onChange={this.props.onChange}
            />
          </div>
        )
      case 1:
        return (
          <div className='Recorder'>
            <EventForm
              record={this.props.record}
              onChange={this.props.onChange}
            />
          </div>
        )
      case 2:
        return (
          <div className='Recorder'>
            <DimensionsForm
              record={this.props.record}
              onChange={this.props.onChange}
            />
          </div>
        )
      case 3:
        return (
          <div className='Recorder'>
            <TriggerForm
              record={this.props.record}
              onChange={this.props.onChange}
            />
          </div>
        )
      case 4:
        return (
          <div className='Recorder'>
            <ActionForm
              record={this.props.record}
              onChange={this.props.onChange}
            />
          </div>
        )
      case 5:
        return (
          <div className='Recorder'>Review</div>
        )
      default:
        return (
          <div className='Recorder'>Default</div>
        )
    }
  }
}
