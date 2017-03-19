import React, { Component } from 'react';
import { Sky, Sea, Aura, Hummock, Bummock, Wave } from './Scene.js';
import classNames from 'classnames';
import './DetailScene.css';

export class DetailScene extends Component {
  render() {
    const classes = classNames('DetailScene', 'DetailScene-' + this.props.level);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        {this.props.level > 0 ? <Aura record={this.props.record} /> : null}
        <Hummock record={this.props.record} />
        {this.props.level > 0 ? <Bummock record={this.props.record} /> : null}
        <Wave record={this.props.record} />
        <Sea />
      </div>
    )
  }
};
