import React, { Component } from 'react';
import { timeParse, timeFormat } from 'd3';
import classNames from 'classnames';
import './DetailInfo.css';

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
