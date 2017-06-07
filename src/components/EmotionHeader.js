import React from 'react';
import { timeParse, timeFormat } from 'd3';

import './EmotionHeader.css';

export const EmotionHeader = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatDate = timeFormat("%B %d, %Y");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatDate(parseTime(props.record.date))
  const formattedTime = formatTime(parseTime(props.record.date))

  return(
    <div className='EmotionHeader'>
      <h1 className='EmotionName'>{props.record.emotion ? props.record.emotion : 'Fine'}</h1>
      <span className='EmotionDate'>{formattedDate}</span>
      <span className='EmotionTime'>{formattedTime}</span>
    </div>
  );
};

export const EmotionHeaderSlim = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatDate = timeFormat("%B %d, %Y");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatDate(parseTime(props.record.date))
  const formattedTime = formatTime(parseTime(props.record.date))

  return(
    <div className='EmotionHeader EmotionHeader--Slim'>
      <h2 className='EmotionName EmotionName--Slim'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='EmotionDate EmotionDate--Slim'>{formattedDate}</span>
      <span className='EmotionTime EmotionTime--Slim'>{formattedTime}</span>
    </div>
  );
};
