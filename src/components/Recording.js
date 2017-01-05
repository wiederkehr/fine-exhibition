import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { range, extent } from 'd3-array';
import { line } from 'd3-shape';
import classNames from 'classnames';
import './Recording.css';

const min = 1;
const max = 5;
const conduciveness = scaleLinear().domain([min, 3, max]).range(["#FF7D54", "#E5CCC5" , "#B6E2F4"]);
const valence = scaleLinear().domain([min, 3, max]).range(["#850021", "#c684a3" , "#7eb1d1"]);
const height = scaleLinear().domain([min, max]).range([50, 100]);

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
    let peak = 100 - height(this.props.record.intensity);
    let middle = 100 - (height(this.props.record.intensity) / 2);
    let line = "M 50," + peak + " L 1,100 L 100,100, Z";
    let area = "M 50," + peak + " L 1,100 L 100,100, Z";
    let control = [
      "M 0,0",
      "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100, M 50," + peak + " L 50,100, M 100,100, L 50," + middle,
      "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100, M 50," + peak + " L 50,100",
      "M 50," + peak + " L 75,100, M 50," + peak + " L 25,100",
      "M 50," + peak + " L 75,100",
      "M 0,0",
    ];

    return (
      <div className='Hummock'>
        <div className='RecordingLabel'>Hummock (Controllability: {this.props.record.controllability}, Valence: {this.props.record.valence}, Intensity: {this.props.record.intensity})</div>
        <svg className="RecordingGlyph HummockGlyph" width='101' height='101'>
          <path className="HummockGlyphArea" d={area} fill={valence(this.props.record.valence)}/>
          <path className="HummockGlyphLine" d={line} />
          <path className="HummockGlyphLine" d={control[this.props.record.controllability]} />
        </svg>
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
    let sine = range(0, 10).map(function(k) {
      var value = [0.5 * k * Math.PI, Math.sin(0.5 * k * Math.PI)];
      return value;
    });
    let xScale = scaleLinear().range([0, 300]).domain(extent(sine, function(d) {
      return d[0];
    }));
    let yScale = scaleLinear().range([50, 0]).domain([-1, 1]);
    // let line = line()
    //   .x(function(d) {
    //     return xScale(d[0]);
    //   })
    //   .y(function(d) {
    //     return yScale(d[1]);
    //   });
    return (
      <div className='Wave'>
        <div className='RecordingLabel'>Wave (Arousal: {this.props.record.arousal})</div>
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
