import React, { Component } from 'react';
import classNames from 'classnames';
import * as d3 from 'd3';
import './Recording.css';

const min       = 1;
const max       = 5;
const color     = d3.scaleLinear().domain([min, max]).range(["#ca0020", "#0571b0"]);

export class Recording extends Component {
  render() {
    const classes = classNames('Recording', 'Recording--Step-' + this.props.step);
    return (
      <div className={classes}>
        <Sky valence={this.props.record.valence}/>
        <Hummock />
        <Bummock />
        <Aura />
        <Wave />
        <Sea />
      </div>
    )
  }
}

export class Sky extends Component {
  render() {
    return (
      <div className='Sky' style={{ background: color(this.props.valence) }}>Sky</div>
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
      <div className='Hummock'>Hummock</div>
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
      <div className='Wave'>Wave</div>
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
