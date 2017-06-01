import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { scaleLinear } from 'd3-scale';
import './HistoryScene.css';

export class HistoryScene extends Component {
  render() {
    return (
      <div className='HistoryScene'>
        <Sky record={this.props.record} />
        <Aura record={this.props.record} />
        <Hummock record={this.props.record} />
        <Wave record={this.props.record} />
      </div>
    )
  }
};

const Sky = ({ record }) => {
  const conduciveness = scaleLinear().domain([0, 1, 3, 5]).range(["#FF5627", "#FF7D54", "#E5CCC5" , "#B6E2F4"]);
  const topColor = conduciveness(record.conduciveness);
  const bottomColor = conduciveness(record.conduciveness - 1);
  return (
    <div
      className='Sky'
      style={{
        background: "linear-gradient(" + topColor + " 50%, " + bottomColor + ")"
      }}
    >
    </div>
  )
};

const Aura = ({ record }) => {
  const filename = 'A_' + record.action;
  const path = 'assets/vectors/aura/' + filename + '.svg';
  return (
    <div className='Aura'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Hummock = ({ record }) => {
  const filename = "Key_" + record.valence + "_" + record.intensity + "_" + record.controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return (
    <div className='Hummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Wave = ({ record }) => {
  const filename = 'Waves_' + record.arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return (
    <div className='Wave'>
      <ReactSVG path={ path } />
    </div>
  )
};
