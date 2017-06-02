import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { timeParse, timeFormat } from 'd3';
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
        <Header record={this.props.record} />
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
      className='HistorySky'
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
    <div className='HistoryAura'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Hummock = ({ record }) => {
  const filename = "Key_" + record.valence + "_" + record.intensity + "_" + record.controllability;
  const path = 'assets/vectors/hummock/' + filename + '.svg';
  return (
    <div className='HistoryHummock'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Wave = ({ record }) => {
  const filename = 'Waves_' + record.arousal;
  const path = 'assets/vectors/wave/' + filename + '.svg';
  return (
    <div className='HistoryWave'>
      <ReactSVG path={ path } />
    </div>
  )
};

const Header = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d");
  const formatTime = timeFormat("%B %d, %Y");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='HistoryEmotionHeader'>
      <h2 className='HistoryEmotionName'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='HistoryEmotionDate'>{formattedDate}</span>
    </div>
  );
};
