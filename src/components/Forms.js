import React from 'react';
import { Slider } from './Slider.js';
import { ToggleGroup } from '../components/Toggle.js';
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

export const EmotionSelectionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'emotion')}
      multiselect={false}
      options={[
        'Joy',
        'Trust',
        'Fear',
        'Surprise',
        'Sadness',
        'Disgust',
        'Anger',
        'Anticipation'
      ]} />
  </form>
);

export const DimensionsForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <div className='Slider-group'>
      <Slider
        name='Arousal'
        value={props.record.arousal}
        onChange={props.onChange.bind(null, 'arousal')} />
      <Slider
        name='Conduciveness'
        value={props.record.conduciveness}
        onChange={props.onChange.bind(null, 'conduciveness')} />
      <Slider
        name='Controllability'
        value={props.record.controllability}
        onChange={props.onChange.bind(null, 'controllability')} />
      <Slider
        name='Intensity'
        value={props.record.intensity}
        onChange={props.onChange.bind(null, 'intensity')} />
      <Slider
        name='Valence'
        value={props.record.valence}
        onChange={props.onChange.bind(null, 'valence')} />
    </div>
  </form>
);

export const TriggerForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'trigger')}
      multiselect={true}
      options={[
        'Person',
        'Place',
        'Nature',
        'Activity',
        'Not sure'
      ]} />
  </form>
);

export const ActionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'action')}
      multiselect={false}
      options={[
        'Engage',
        'Suppress',
        'Savor',
        'Withdraw',
        'Fight',
        'Other'
      ]} />
  </form>
);
