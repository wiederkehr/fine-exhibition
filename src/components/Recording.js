import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import classNames from 'classnames';
import './Recording.css';

const min       = 1;
const max       = 5;
const color     = scaleLinear().domain([min, max]).range(["#ca0020", "#0571b0"]);

export class Recording extends Component {
  render() {
    const classes = classNames('Recording', 'Recording--Step-' + this.props.step);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        <Hummock record={this.props.record} />
        <Bummock />
        <Aura />
        <Wave record={this.props.record} />
        <Sea />
      </div>
    )
  }
}

export class Sky extends Component {
  render() {
    return (
      <div className='Sky' style={{ background: color(this.props.record.conduciveness) }}>Sky</div>
    )
  }
}
export class Aura extends Component {
  render() {
    return (
      <div className='Aura'>Aura</div>
    )
  }
}
export class Hummock extends Component {
  render() {
    return (
      <div className='Hummock'>Hummock (Controllability: {this.props.record.controllability}, Valence: {this.props.record.valence}, Intensity: {this.props.record.intensity})</div>
    )
  }
}
export class Bummock extends Component {
  render() {
    return (
      <div className='Bummock'>Bummock</div>
    )
  }
}
export class Wave extends Component {
  render() {
    return (
      <div className='Wave'>Wave (Arousal: {this.props.record.arousal})</div>
    )
  }
}
export class Sea extends Component {
  render() {
    return (
      <div className='Sea'>Sea</div>
    )
  }
}
