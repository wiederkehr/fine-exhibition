import React, { Component } from 'react';
import './Recorder.css';

export class Recorder extends Component {
  render() {
    switch (this.props.step) {
      case 'Emotion':
        return (
          <div className='Recorder'>Emotion</div>
        )
        break;
      case 'Dimensions':
        return (
          <div className='Recorder'>Dimensions</div>
        )
        break;
      case 'Triggers':
        return (
          <div className='Recorder'>Triggers</div>
        )
        break;
      case 'Actions':
        return (
          <div className='Recorder'>Actions</div>
        )
        break;
      case 'Review':
        return (
          <div className='Recorder'>Review</div>
        )
        break;
    }
    return (

    )
  }
}
