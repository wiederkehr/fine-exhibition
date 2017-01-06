import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { HummockVisualization, WaveVisualization } from './RecordingVisualization.js';
import classNames from 'classnames';
import './Recording.css';

const conduciveness = scaleLinear().domain([1, 3, 5]).range(["#FF7D54", "#E5CCC5" , "#B6E2F4"]);

export class Recording extends Component {
  render() {
    const classes = classNames('Recording', 'Recording--Step-' + this.props.step);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        {this.props.step > 0 ? <Hummock record={this.props.record} /> : null}
        {this.props.step > 1 ? <Bummock /> : null}
        {this.props.step > 2 ? <Aura /> : null}
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
        <div className='RecordingLabel'>Sky (Conduciveness: {this.props.record.conduciveness})</div>
      </div>
    )
  }
}
export class Aura extends Component {
  render() {
    return (
      <div className='Aura'>
        <div className='RecordingLabel'>Aura</div>
      </div>
    )
  }
}
export class Hummock extends Component {
  render() {
    return (
      <div className='Hummock'>
        <div className='RecordingLabel'>Hummock (Controllability: {this.props.record.controllability}, Valence: {this.props.record.valence}, Intensity: {this.props.record.intensity})</div>
        <HummockVisualization
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
        <div className='RecordingLabel'>Bummock</div>
      </div>
    )
  }
}
export class Wave extends Component {
  render() {
    return (
      <div className='Wave'>
        <div className='RecordingLabel'>Wave (Arousal: {this.props.record.arousal})</div>
        <WaveVisualization arousal={this.props.record.arousal} />
      </div>
    )
  }
}
export class Sea extends Component {
  render() {
    return (
      <div className='Sea'>
        <div className='RecordingLabel'>Sea</div>
      </div>
    )
  }
}
