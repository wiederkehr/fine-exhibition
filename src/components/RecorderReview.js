import React from 'react';
import { EmotionHeader } from '../components/DetailInfo';

export const ReviewRecorder = ( props ) => {
  return (
    <div className='Recorder Recorder--Review'>
      <EmotionHeader record={props.record} />
    </div>
  )
};
