import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import classNames from 'classnames';
import { timeParse, timeFormat } from 'd3';
import { scaleLinear } from 'd3-scale';
import './GridScene.css';

export class GridScene extends Component {
  render() {
    return (
      <div className='GridScene'>
        <Sky record={this.props.record} />
        <Aura record={this.props.record} />
        <Hummock record={this.props.record} />
        <Wave record={this.props.record} />
        <Header record={this.props.record} />
      </div>
    )
  }
};

const Sky = ({ record }) => {
  const conduciveness = scaleLinear()
    .domain([1, 3, 5])
    .range(["#FD7D5A", "#DEE6EA", "#B7E2F3"]);
  const topColor = conduciveness(record.conduciveness);
  const bottomColor = conduciveness(record.conduciveness - 1);
  return (
    <div
      className='GridSky'
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
    <div className={ classNames('GridAura', 'GridAura--'+record.action) }>
      <ReactSVG path={ path } />
    </div>
  )
};

const Hummock = ({ record }) => {
  const filename = "Key_" + record.valence + "_" + record.intensity + "_" + record.controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return (
    <div className='GridHummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Wave = ({ record }) => {
  const filename = 'Waves_' + record.arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return (
    <div className='GridWave'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Header = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='GridEmotionHeader'>
      <h2 className='GridEmotionName'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='GridEmotionDate'>{formattedDate}</span>
    </div>
  );
};
