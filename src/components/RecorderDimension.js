import React from 'react';
import { DimensionSlider } from '../components/Slider';
import { Dimensions } from '../content/Options';
import { LayoutRow } from '../components/Layout';

export const DimensionRecorder = ( props ) => {
  return (
    <div className='Recorder Recorder--Dimensions'>
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
      <LayoutRow bottom='xl'>
        <DimensionSlider
          name='How intense was it?'
          value={props.record.intensity}
          labels={Dimensions.intensity}
          onChange={props.onChange.bind(null, 'intensity')} />
      </LayoutRow>
      <LayoutRow top='xl' bottom='xl'>
        <DimensionSlider
          name='How pleasant was it?'
          value={props.record.valence}
          labels={Dimensions.valence}
          onChange={props.onChange.bind(null, 'valence')} />
      </LayoutRow>
      <LayoutRow top='xl' bottom='xl'>
        <DimensionSlider
          name='How controllable was it?'
          value={props.record.controllability}
          labels={Dimensions.controllability}
          onChange={props.onChange.bind(null, 'controllability')} />
      </LayoutRow>
      <LayoutRow top='xl' bottom='xl'>
        <DimensionSlider
          name='How aroused was your body?'
          value={props.record.arousal}
          labels={Dimensions.arousal}
          onChange={props.onChange.bind(null, 'arousal')} />
      </LayoutRow>
      <LayoutRow top='xl' bottom='xl'>
        <DimensionSlider
          name='How conducive is it?'
          value={props.record.conduciveness}
          labels={Dimensions.conduciveness}
          onChange={props.onChange.bind(null, 'conduciveness')} />
      </LayoutRow>
    </div>
  </form>
);
