import React, { Component } from 'react';
import './Recording.css';

export class Recording extends Component {
  render() {
    let marginTop = 0;
    switch (this.props.step) {
      case 0:
        marginTop = 0;
        break;
      case 1:
        marginTop = 0;
        break;
      case 2:
        marginTop = 0;
        break;
      case 3:
        marginTop = '-60vh';
        break;
      case 4:
        marginTop = 0;
        break;
      case 5:
        marginTop = '-40vh';
        break;
      default:
        marginTop = 0;
        break;
    }
    return (
      <div className='Recording' style={{marginTop: marginTop}}>
        <div className='RecordingTop'></div>
        <div className='RecordingBottom'></div>
      </div>
    )
  }
}
