import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import classNames from 'classnames';
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
        <Waves record={this.props.record} iterator={this.props.iterator} />
        <Header record={this.props.record} />
      </div>
    )
  }
};

const Sky = ({ record }) => {
  const conduciveness = scaleLinear()
    .domain([1, 2, 3, 4, 5])
    .range(["#FD7D5A", "#F19D89", "#E4CCC6", "#DEE6EA", "#B7E2F3"]);
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
    <div className={ classNames('HistoryAura', 'HistoryAura--'+record.action) }>
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

class Waves extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: props.record
    }
    this.draw = this.draw.bind(this);
  };

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.context = this.refs.canvas.getContext('2d');
    this.canvas.height = 600 - this.state.record.arousal * 100;
    this.draw(this.props.iterator);
  };

  componentWillUpdate(nextProps, nextState) {
    this.canvas.height = 600 - this.state.record.arousal * 100;
    this.draw(nextProps.iterator);
  };

  draw(iterator) {

    var canvas = this.canvas;
    var context = this.context;

  	var offset, left, right, leftConstraint, rightConstraint;
  	var j = this.state.record.arousal;

  	for (j; j >= 0; j--) {

  		context.fillStyle = ('rgba(255, 255, 255, 0.2)');

  		offset = iterator + j * Math.PI * 50;
  		left = Math.sin(offset / 100) / 3 * 300;
  		right = Math.sin(offset / 100) / 3 * 300;
  		leftConstraint = (Math.sin((offset / 60) + 2) + 1) / 2 * 300;
  		rightConstraint = (Math.sin((offset / 60) + 1) + 1) / 2 * 300;

  		context.beginPath();
  		context.moveTo(0, left + 100);
  		context.bezierCurveTo(canvas.width / 3, leftConstraint, canvas.width / 3 * 2, rightConstraint, canvas.width, right + 100);
  		context.lineTo(canvas.width, canvas.height);
  		context.lineTo(0, canvas.height);
  		context.lineTo(0, left + 100);
  		context.closePath();
  		context.fill();
  	}
  };

  render() {
    return (
      <div className={'HistoryWaves HistoryWaves--'+this.state.record.arousal}>
        <canvas ref='canvas'></canvas>
      </div>
    )
  };
};

const Header = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='HistoryEmotionHeader'>
      <h2 className='HistoryEmotionName'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='HistoryEmotionDate'>{formattedDate}</span>
    </div>
  );
};
