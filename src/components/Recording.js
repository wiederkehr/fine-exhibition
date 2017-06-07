import React, { Component } from 'react';
import { Air, Water, Sky, Sea, Aura, Hummock, Bummock, Wave } from './Scene.js';
import classNames from 'classnames';
import './Recording.css';

export class Recording extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0', lifted: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const classes = classNames('Recording', 'Recording--Step-' + this.props.step);
    return (
      <div className={classes}>
        <Air style={{ height: this.state.height }}>
          <Sky record={this.props.record} />
          {this.props.step === 0 ? <Fog /> : null}
          {this.props.step > 2 ? <Aura record={this.props.record} /> : null}
          {this.props.step > 0 ? <Hummock record={this.props.record} /> : null}
          <Wave record={this.props.record} />
        </Air>
        <Water style={{ height: this.state.height }}>
          {this.props.step > 1 ? <Bummock record={this.props.record} /> : null}
          <Sea />
        </Water>
      </div>
    )
  }
};

const Fog = () => (
  <div className='Fog'></div>
);
