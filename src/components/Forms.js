import React from 'react';
import { DimensionSlider } from './Slider.js';
import { ToggleGroup, SelectGroup } from '../components/Toggle.js';
import './Form.css';

export const EmotionEntryForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <input
      className='Input-text Emotion-Input-text'
      type='text'
      value={ props.record.emotion ? props.record.emotion : ''}
      placeholder='Type Emotion'
      onChange={props.onChange.bind(null, 'emotion')} />
  </form>
);

export const EmotionSelectionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'emotion')}
      selection={props.record.emotion}
      options={props.options} />
  </form>
);

export const EmotionSubSelectionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'emotion')}
      selection={props.record.emotion}
      options={props.options} />
  </form>
);

export const DimensionsForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <div className='Slider-group'>
      <DimensionSlider
        name='How intense was it?'
        value={props.record.arousal}
        labels={['terrible', 'sad', 'fine', 'great', 'terrific']}
        onChange={props.onChange.bind(null, 'arousal')} />
      <DimensionSlider
        name='How controllable was it?'
        value={props.record.controllability}
        labels={['terrible', 'sad', 'fine', 'great', 'terrific']}
        onChange={props.onChange.bind(null, 'controllability')} />
      <DimensionSlider
        name='How pleasant was it?'
        value={props.record.valence}
        labels={['terrible', 'sad', 'fine', 'great', 'terrific']}
        onChange={props.onChange.bind(null, 'valence')} />
      <DimensionSlider
        name='How aroused was your body?'
        value={props.record.intensity}
        labels={['terrible', 'sad', 'fine', 'great', 'terrific']}
        onChange={props.onChange.bind(null, 'intensity')} />
      <DimensionSlider
        name='How conducive is it?'
        value={props.record.conduciveness}
        labels={['terrible', 'sad', 'fine', 'great', 'terrific']}
        onChange={props.onChange.bind(null, 'conduciveness')} />
    </div>
  </form>
);

export const TriggerForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <SelectGroup
      onChange={props.onChange.bind(null, 'trigger')}
      selection={props.record.trigger}
      options={[
        'Person',
        'Place',
        'Thing',
        'Activity',
        'Other'
      ]} />
  </form>
);

export const ActionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'action')}
      selection={props.record.action}
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
