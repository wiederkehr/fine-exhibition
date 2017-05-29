import React from 'react';
import { Slider } from './Slider.js';
import './Form.css';

export const EmotionEntryForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <label className='Input-label'>Emotion</label>
    <input className='Input-text'
           type='text'
           value={ props.record.emotion ? props.record.emotion : ''}
           onChange={props.onChange.bind(null, 'emotion')} />
  </form>
);

export const TriggerForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <label className='Input-label'>Trigger</label>
    <input className='Input-text'
           type='text'
           value={ props.record.trigger ? props.record.trigger : ''}
           onChange={props.onChange.bind(null, 'trigger')} />
  </form>
);

export const ActionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <label className='Input-label'>Action</label>
    <input className='Input-text'
           type='text'
           value={ props.record.action ? props.record.action : ''}
           onChange={props.onChange.bind(null, 'action')} />
  </form>
);

export const DimensionsForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <div className='Slider-group'>
      <Slider name='Arousal'
              value={props.record.arousal}
              onChange={props.onChange.bind(null, 'arousal')} />
      <Slider name='Conduciveness'
              value={props.record.conduciveness}
              onChange={props.onChange.bind(null, 'conduciveness')} />
      <Slider name='Controllability'
              value={props.record.controllability}
              onChange={props.onChange.bind(null, 'controllability')} />
      <Slider name='Intensity'
              value={props.record.intensity}
              onChange={props.onChange.bind(null, 'intensity')} />
      <Slider name='Valence'
              value={props.record.valence}
              onChange={props.onChange.bind(null, 'valence')} />
    </div>
  </form>
);
