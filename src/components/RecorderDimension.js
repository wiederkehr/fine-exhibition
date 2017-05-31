import React from 'react';
import { DimensionSlider } from '../components/Slider';
import { Dimensions } from '../content/Options';

export const DimensionRecorder = ( props ) => {
  return (
    <div className='Recorder Recorder--Dimensions'>
      <h2 className='RecorderHeadline'>How does this feel?</h2>
      <DimensionForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
};

const DimensionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <div className='Slider-group'>
      <DimensionSlider
        name='How intense was it?'
        value={props.record.intensity}
        labels={Dimensions.intensity}
        onChange={props.onChange.bind(null, 'intensity')} />
      <DimensionSlider
        name='How pleasant was it?'
        value={props.record.valence}
        labels={Dimensions.valence}
        onChange={props.onChange.bind(null, 'valence')} />
      <DimensionSlider
        name='How controllable was it?'
        value={props.record.controllability}
        labels={Dimensions.controllability}
        onChange={props.onChange.bind(null, 'controllability')} />
      <DimensionSlider
        name='How aroused was your body?'
        value={props.record.arousal}
        labels={Dimensions.arousal}
        onChange={props.onChange.bind(null, 'arousal')} />
      <DimensionSlider
        name='How conducive is it?'
        value={props.record.conduciveness}
        labels={Dimensions.conduciveness}
        onChange={props.onChange.bind(null, 'conduciveness')} />
    </div>
  </form>
);
