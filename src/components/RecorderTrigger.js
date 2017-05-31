import React from 'react';
import { SelectGroup } from '../components/Toggle';
import { Triggers } from '../content/Options';

export const TriggerRecorder = ( props ) => {
  return (
    <div className='Recorder Recorder--Trigger'>
      <h2 className='RecorderHeadline'>What made you feel that way?</h2>
      <TriggerForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
};

const TriggerForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <SelectGroup
      onChange={props.onChange.bind(null, 'trigger')}
      selection={props.record.trigger}
      options={Triggers} />
  </form>
);
