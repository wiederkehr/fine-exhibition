import React, { Component } from 'react';
import { ActionForm, EmotionForm, DimensionsForm, TriggerForm } from '../components/Forms';
import { SecondaryButton } from '../components/Button';
import { SelectorList, Selector } from '../components/Selector';
import './Recorder.css';

export class EmotionRecorder extends Component {
  constructor(props) {
    super(props);
    this.state={
      predefined: true
    }
    this.togglePredefined = this.togglePredefined.bind(this);
    this.selectEmotion = this.selectEmotion.bind(this);
  };

  togglePredefined() {
    this.setState({ predefined: !this.state.predefined });
  };

  selectEmotion(label) {
    console.log(label);
    this.setState({ predefined: !this.state.predefined });
  };

  render() {
    const SelfdefinedEmotion = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>How are you feeling?</h2>
        <EmotionForm
          record={this.props.record}
          onChange={this.props.onChange}
        />
        <SecondaryButton onClick={this.togglePredefined}>Not sure… help?</SecondaryButton>
    </div>
    )

    const PredefinedEmotion = (
      <div className='Recorder'>
        <h2 className='RecorderHeadline'>Here are a few basic emotions:</h2>
        <SelectorList>
          <Selector onClick={this.selectEmotion}>Joy</Selector>
          <Selector onClick={this.selectEmotion}>Trust</Selector>
          <Selector onClick={this.selectEmotion}>Fear</Selector>
          <Selector onClick={this.selectEmotion}>Surprise</Selector>
          <Selector onClick={this.selectEmotion}>Sadness</Selector>
          <Selector onClick={this.selectEmotion}>Disgust</Selector>
          <Selector onClick={this.selectEmotion}>Anger</Selector>
          <Selector onClick={this.selectEmotion}>Anticipation</Selector>
        </SelectorList>
      </div>
    )

    return this.state.predefined ? SelfdefinedEmotion : PredefinedEmotion;
  }
}

export const DimensionsRecorder = ( props ) => {
  return (
    <div className='Recorder'>
      <DimensionsForm
        record={props.record}
        onChange={props.onChange}
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
      />
    </div>
  )
}
