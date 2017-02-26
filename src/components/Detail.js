import React, { Component } from 'react';
import { Sky, Sea, Aura, Hummock, Bummock, Wave } from './Scene.js';
import classNames from 'classnames';
import './Detail.css';

export class Detail extends Component {
  render() {
    const classes = classNames('Detail', 'Detail-' + this.props.detail);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        {this.props.detail > 0 ? <Aura record={this.props.record} /> : null}
        <Hummock record={this.props.record} />
        {this.props.detail > 0 ? <Bummock record={this.props.record} /> : null}
        <Wave record={this.props.record} />
        <Sea />
      </div>
    )
  }
};
