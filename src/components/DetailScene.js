import React, { Component } from 'react';
import classNames from 'classnames';
import { timeParse, timeFormat } from 'd3';
import { Sky, Aura, Hummock, Wave } from './Scene.js';
import './DetailScene.css';

export class DetailScene extends Component {
  render() {
    const classes = classNames('DetailScene', 'DetailScene-' + this.props.level);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        <Aura record={this.props.record} />}
        <Hummock record={this.props.record} />
        <Wave record={this.props.record} />
        <Header record={this.props.record} />
      </div>
    )
  }
};

const Header = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='DetailEmotionHeader'>
      <h2 className='DetailEmotionName'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='DetailEmotionDate'>{formattedDate}</span>
    </div>
  );
};
