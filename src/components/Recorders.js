import React, { Component } from 'react';
import { ActionForm, EmotionEntryForm, EmotionSelectionForm, EmotionSubSelectionForm, DimensionsForm, TriggerForm } from '../components/Forms';
import { SecondaryButton } from '../components/Button';
import { LayoutRow } from '../components/Layout';
import { ToggleButton } from '../components/Toggle';
import './Recorder.css';

export class EmotionRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'entry',
      selection: null
    };
    this.toggleType = this.toggleType.bind(this);
  };

  toggleType(t) {
    this.setState({ type: t });
  };

  render() {

    const EmotionEntry = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>How're ya feeling?</h2>
        <EmotionEntryForm
          record={this.props.record}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
        <LayoutRow top='l'>
          <SecondaryButton onClick={this.toggleType.bind(null, 'selection')}>Not sure… help?</SecondaryButton>
        </LayoutRow>
      </div>
    );

    const EmotionSelection = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>Here are some basic emotions:</h2>
        <EmotionSelectionForm
          record={this.props.record}
          onChange={(field, event) => {
            this.setState({ selection: event.target.value });
            this.props.onChange(field, event);
            this.toggleType('subselection');
          }}
          onSubmit={this.props.onSubmit}
        />
      </div>
    );

    const EmotionSubSelection = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>Wanna be more specific?</h2>
        <LayoutRow top='l' bottom='l'>
          <ToggleButton
            value={this.state.selection}
            disabled={true}
            onClick={false}
            isActive={true}/>
        </LayoutRow>
        <EmotionSubSelectionForm
          record={this.props.record}
          onChange={(field, event) => {
            this.props.onChange(field, event);
            this.toggleType('entry');
          }}
          onSubmit={this.props.onSubmit}
        />
        <LayoutRow top='l'>
          <SecondaryButton
            onClick={() => {
              this.props.onChange('emotion', {target: {value: this.state.selection}});
              this.toggleType('entry');
            }}
          >
            Nope
          </SecondaryButton>
        </LayoutRow>
      </div>
    );

    switch (this.state.type) {
      case 'entry':
        return EmotionEntry
      case 'selection':
        return EmotionSelection
      case 'subselection':
        return EmotionSubSelection
      default:
        return EmotionEntry
    }
  }
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
