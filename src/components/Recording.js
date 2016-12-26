import React, { Component } from 'react';
import classNames from 'classnames';
import './Recording.css';

export class Recording extends Component {
  render() {
    let positionClass = '';
    switch (this.props.step) {
      case 0:
        positionClass = 'Recording--bottom';
        break;
      case 1:
        positionClass = 'Recording--bottom';
        break;
      case 2:
        positionClass = 'Recording--bottom';
        break;
      case 3:
        positionClass = 'Recording--top';
        break;
      case 4:
        positionClass = 'Recording--bottom';
        break;
      case 5:
        positionClass = 'Recording--center';
        break;
      default:
        positionClass = 'Recording--bottom';
        break;
    }
    const classes = classNames('Recording', positionClass);
    return (
      <div className={classes}>
        <div className='RecordingTop'></div>
        <div className='RecordingBottom'></div>
      </div>
    )
  }
}
