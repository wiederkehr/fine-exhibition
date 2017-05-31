import React, { Component } from 'react';
import { SecondaryButton } from '../components/Button';
import { LayoutRow } from '../components/Layout';
import { ToggleButton } from '../components/Toggle';
import { ToggleGroup } from '../components/Toggle';
import { Emotions } from '../content/Options';

import './Form.css';

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

  getPrimaryEmotions() {
    let primaryEmotions = Emotions.map((emotion) => { return emotion.primary });
    return primaryEmotions;
  };

  getSecondaryEmotions(primaryEmotion) {
    let secondaryEmotions = Emotions.filter((emotion) => {
      return emotion.primary === primaryEmotion;
    })
    return secondaryEmotions[0].secondary;
  };

  render() {
    switch (this.state.type) {
      case 'entry':
        return (
          <div className='Recorder Recorder--EmotionEntry'>
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
        )
      case 'selection':
        return (
          <div className='Recorder Recorder--EmotionSelection'>
            <h2 className='RecorderHeadline'>Here are some basic emotions:</h2>
            <EmotionSelectionForm
              record={this.props.record}
              onChange={(field, event) => {
                this.setState({ selection: event.target.value });
                this.props.onChange(field, event);
                this.toggleType('subselection');
              }}
              onSubmit={this.props.onSubmit}
              options={this.getPrimaryEmotions()}
            />
          </div>
        )
      case 'subselection':
        return (
          <div className='Recorder Recorder--EmotionSubSelection'>
            <h2 className='RecorderHeadline'>Wanna be more specific?</h2>
            <LayoutRow top='s' bottom='l'>
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
              options={this.getSecondaryEmotions(this.state.selection)}
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
        )
      default:
        return null
    }
  }
};

const EmotionEntryForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <input
      className='Input-text Emotion-Input-text'
      type='text'
      value={ props.record.emotion ? props.record.emotion : ''}
      placeholder='Type Emotion'
      onChange={props.onChange.bind(null, 'emotion')} />
  </form>
);

const EmotionSelectionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'emotion')}
      selection={props.record.emotion}
      options={props.options} />
  </form>
);

const EmotionSubSelectionForm = ( props ) => (
  <form className='Form' onSubmit={props.onSubmit}>
    <ToggleGroup
      onChange={props.onChange.bind(null, 'emotion')}
      selection={props.record.emotion}
      options={props.options} />
  </form>
);
