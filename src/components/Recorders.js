import React from 'react';
import { ActionForm, EmotionForm, DimensionsForm, TriggerForm } from '../components/Form';
import './Recorder.css';

export const EmotionRecorder = ( props ) => {
  return (
    <div className='Recorder'>
      <h2 className='RecorderHeadline'>How are you feeling?</h2>
      <EmotionForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}

export const DimensionsRecorder = ( props ) => {
  return (
    <div className='Recorder'>
      <DimensionsForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}

export const TriggerRecorder = ( props ) => {
  return (
    <div className='Recorder'>
      <h2 className='RecorderHeadline'>What made you feel that way?</h2>
      <TriggerForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}

export const ActionRecorder = ( props ) => {
  return (
    <div className='Recorder'>
      <h2 className='RecorderHeadline'>How did you react?</h2>
      <ActionForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
}
