import React, { Component } from 'react';
import { timeParse, timeFormat } from 'd3';
import classNames from 'classnames';
import './DetailInfo.css';

export const EmotionHeader = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatTime = timeFormat("%B %d, %Y ・ %H:%M");
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

const EmotionNote = ( props ) => {
  return (
    <div className='EmotionNote'>
      <p>{ props.text ? props.text : false}</p>
    </div>
  );
}

const EmotionAction = ( props ) => (
  <div className='EmotionAction'>
    <p>{ props.text ? props.text : 'Emotion Actions'}</p>
  </div>
);

const EmotionTrigger = ( props ) => (
  <div className='EmotionTrigger'>
    <p>{ props.text ? props.text : 'Emotion Triggers'}</p>
  </div>
);

export class DetailInfo extends Component {
  render() {
    const classes = classNames('DetailInfo', 'DetailInfo-' + this.props.level);
    let header = '';
    if(this.props.record.date && this.props.record.emotion) {
      header = <EmotionHeader record={this.props.record} />;
    }else{
      header = <EmotionHeaderLoading />;
    };

    return (
      <div className={classes}>
        {header}
        {this.props.level > 0 ? <EmotionNote text={this.props.record.event} /> : null}
        {this.props.level > 1 ? <EmotionAction text={this.props.record.action} /> : null}
        {this.props.level > 1 ? <EmotionTrigger text={this.props.record.trigger} /> : null}
      </div>
    )
  }
};
