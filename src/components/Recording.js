import React, { Component } from 'react';
import { Sky, Sea, Aura, Hummock, Bummock, Wave } from './Scene.js';
import classNames from 'classnames';
import './Recording.css';

export class Recording extends Component {
  render() {
    const classes = classNames('Recording', 'Recording--Step-' + this.props.step);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        {this.props.step > 2 ? <Aura record={this.props.record} /> : null}
        {this.props.step > 0 ? <Hummock record={this.props.record} /> : null}
        {this.props.step > 1 ? <Bummock record={this.props.record} /> : null}
        <Wave record={this.props.record} />
        <Sea />
      </div>
    )
  }
};
