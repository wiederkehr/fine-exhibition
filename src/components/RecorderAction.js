import React from 'react';
import { ToggleGroup } from '../components/Toggle';
import { Actions } from '../content/Options';

export const ActionRecorder = ( props ) => {
  return (
    <div className='Recorder Recorder--Action'>
      <h2 className='RecorderHeadline'>How did you react?</h2>
      <ActionForm
        record={props.record}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
    </div>
  )
};

const ActionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'action')}
      selection={props.record.action}
      options={Actions} />
  </form>
);
