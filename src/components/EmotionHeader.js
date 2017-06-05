import React from 'react';
import { timeParse, timeFormat } from 'd3';

import './EmotionHeader.css';

export const EmotionHeader = ( props ) => {
  const parseTime = timeParse("%Y-%m-%d %H:%M");
  const formatTime = timeFormat("%H:%M");
  const formattedDate = formatTime(parseTime(props.record.date))

  return(
    <div className='EmotionHeader--Slim'>
      <h2 className='EmotionName--Slim'>{props.record.emotion ? props.record.emotion : 'Fine'}</h2>
      <span className='EmotionDate--Slim'>{formattedDate}</span>
    </div>
  );
};
