import React, { Component } from 'react';
import { timeParse, timeFormat } from 'd3';
import { Sky, Sea, Aura, Hummock, Bummock, Wave } from './Scene.js';
import classNames from 'classnames';
import './Detail.css';

export class Detail extends Component {
  render() {
    const classes = classNames('Detail', 'Detail-' + this.props.detail);
    return (
      <div className={classes}>
        <Sky record={this.props.record} />
        {this.props.detail > 0 ? <Aura record={this.props.record} /> : null}
        <Hummock record={this.props.record} />
        {this.props.detail > 0 ? <Bummock record={this.props.record} /> : null}
        <Wave record={this.props.record} />
        <EmotionHeader emotion={this.props.record.emotion} date={this.props.record.date}/>
        <Sea />
      </div>
    )
  }
};

export const EmotionHeader = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d");
  const formatTime = timeFormat("%B %d, %Y");
  const formattedDate = formatTime(parseTime(props.date))

  const emotionAndDate = (
    <div className='EmotionHeader'>
      <h1 className='EmotionName'>{props.emotion}</h1>
      <span className='EmotionDate'>{formattedDate}</span>
    </div>
  );

  const emotionLoading = (
    <div className='EmotionHeader'>
      <span className='EmotionLoading'>…Loading Feels…</span>
    </div>
  );

  let output = null;

  if(props.date && props.emotion) {
    output = emotionAndDate;
  }else{
    output = emotionLoading;
  };

  return output;
}
