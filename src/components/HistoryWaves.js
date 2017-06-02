import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import './HistoryWaves.css';

export class HistoryWaves extends Component {

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
