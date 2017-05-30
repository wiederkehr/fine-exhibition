import React, { Component } from 'react';
import { ActionForm, EmotionEntryForm, EmotionSelectionForm, DimensionsForm, TriggerForm } from '../components/Forms';
import { SecondaryButton } from '../components/Button';
import { LayoutRow } from '../components/Layout';
import './Recorder.css';

export class EmotionRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {predefined: true};
    this.togglePredefined = this.togglePredefined.bind(this);
  };

  togglePredefined() {
    this.setState({ predefined: !this.state.predefined });
  };

  render() {
    const SelfdefinedEmotion = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>How're ya feeling?</h2>
        <EmotionEntryForm
          record={this.props.record}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
        <LayoutRow top='l'>
          <SecondaryButton onClick={this.togglePredefined}>Not sure… help?</SecondaryButton>
        </LayoutRow>
      </div>
    );

    const PredefinedEmotion = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>Here are some basic emotions:</h2>
        <EmotionSelectionForm
          record={this.props.record}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
        <LayoutRow top='l'>
          <SecondaryButton onClick={this.togglePredefined}>Go back</SecondaryButton>
        </LayoutRow>
      </div>
    );

    return this.state.predefined ? SelfdefinedEmotion : PredefinedEmotion;
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
