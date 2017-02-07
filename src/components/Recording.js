import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { AuraAsset, HummockAsset, BummockAsset, WaveAsset } from './RecordingAsset.js';
import classNames from 'classnames';
import './Recording.css';

const conduciveness = scaleLinear().domain([1, 3, 5]).range(["#FF7D54", "#E5CCC5" , "#B6E2F4"]);

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
}

export class Sky extends Component {
  render() {
    return (
      <div className='Sky' style={{ background: conduciveness(this.props.record.conduciveness) }}>
      </div>
    )
  }
}
export class Aura extends Component {
  render() {
    return (
      <div className='Aura'>
        <AuraAsset action={ 'A_Engage' } />
      </div>
    )
  }
}
export class Hummock extends Component {
  render() {
    return (
      <div className='Hummock'>
        <HummockAsset
          controllability={this.props.record.controllability}
          intensity={this.props.record.intensity}
          valence={this.props.record.valence}
        />
      </div>
    )
  }
}
export class Bummock extends Component {
  render() {
    return (
      <div className='Bummock'>
        <BummockAsset trigger={ 'T1_1' } />
      </div>
    )
  }
}
export class Wave extends Component {
  render() {
    return (
      <div className='Wave'>
        <WaveAsset arousal={this.props.record.arousal} />
      </div>
    )
  }
}
export class Sea extends Component {
  render() {
    return (
      <div className='Sea'>
        <div className='SeaBackground'></div>
        <div className='SeaForeground'></div>
      </div>
    )
  }
}
