import React, { Component } from 'react';
import classNames from 'classnames';
import './Recording.css';

export class Recording extends Component {
  render() {
    let positionClass = '';
    switch (this.props.step) {
      case 0:
        positionClass = 'Recording--sky';
        break;
      case 1:
        positionClass = 'Recording--sky';
        break;
      case 2:
        positionClass = 'Recording--sea';
        break;
      case 3:
        positionClass = 'Recording--sky';
        break;
      case 4:
        positionClass = 'Recording--both';
        break;
      default:
        positionClass = 'Recording--sky';
        break;
    }
    const classes = classNames('Recording', positionClass);
    return (
      <div className={classes}>
        <RecordingTop />
        <RecordingBottom />
      </div>
    )
  }
}

export class RecordingTop extends Component {
  render() {
    return (
      <div className='RecordingTop'>
        Recording Top
      </div>
    )
  }
}

export class RecordingBottom extends Component {
  render() {
    return (
      <div className='RecordingBottom'>
        Recording Bottom
      </div>
    )
  }
}
