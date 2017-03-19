import React, { Component } from 'react';
import { timeParse, timeFormat } from 'd3';
import classNames from 'classnames';
import './DetailInfo.css';

const DetailIcon = () => (
  <svg className='DetailIcon' width='24' height='24'>
    <g>
      <line x1="2" y1="2" x2="22" y2="2"/>
      <line x1="2" y1="8" x2="22" y2="8"/>
      <line x1="2" y1="14" x2="12" y2="14"/>
    </g>
  </svg>
);

export const EmotionHeader = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d");
  const formatTime = timeFormat("%B %d, %Y");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='EmotionHeader'>
      <h1 className='EmotionName'>{props.record.emotion}</h1>
      <span className='EmotionDate'>{formattedDate}</span>
    </div>
  );
};

const EmotionHeaderLoading = () => (
  <div className='EmotionHeader'>
    <span className='EmotionLoading'>…Loading Feels…</span>
  </div>
);

const EmotionNote = ( text ) => (
  <div className='EmotionNote'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
);

const EmotionDescription = ( text ) => (
  <div className='EmotionDescription'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
);

const EmotionAction = ( text ) => (
  <div className='EmotionAction'>
    <p>Yell, Insult, Fight</p>
  </div>
);

const EmotionTrigger = ( text ) => (
  <div className='EmotionTrigger'>
    <p>Yell, Insult, Fight</p>
  </div>
);

export class DetailInfo extends Component {
  render() {
    const classes = classNames('DetailInfo', 'DetailInfo-' + this.props.level);
    let header = '';
    if(this.props.record.date && this.props.record.emotion) {
      header = <EmotionHeader record={this.props.record}/>;
    }else{
      header = <EmotionHeaderLoading />;
    };

    return (
      <div className={classes}>
        {header}
        {this.props.level > 0 ? <EmotionNote text={this.props.record.note} /> : null}
        {this.props.level > 1 ? <EmotionDescription text={this.props.record.note} /> : null}
        {this.props.level > 1 ? <EmotionAction text={this.props.record.action} /> : null}
        {this.props.level > 1 ? <EmotionTrigger text={this.props.record.trigger} /> : null}
      </div>
    )
  }
};
