import React, { Component } from 'react';
import { Slider } from './Slider.js';
import './Form.css';

export class EmotionForm extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        <label className='Input-label'>Emotion</label>
        <input className='Input-text'
               type='text'
               value={ this.props.record.emotion ? this.props.record.emotion : ''}
               onChange={this.props.onChange.bind(null, 'emotion')} />
      </form>
    )
  }
}

export class TriggerForm extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        <label className='Input-label'>Trigger</label>
        <input className='Input-text'
               type='text'
               value={ this.props.record.trigger ? this.props.record.trigger : ''}
               onChange={this.props.onChange.bind(null, 'trigger')} />
      </form>
    )
  }
}

export class ActionForm extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        <label className='Input-label'>Action</label>
        <input className='Input-text'
               type='text'
               value={ this.props.record.action ? this.props.record.action : ''}
               onChange={this.props.onChange.bind(null, 'action')} />
      </form>
    )
  }
}

export class DimensionsForm extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        <div className='Slider-group'>
          <Slider name='Arousal'
                  value={this.props.record.arousal}
                  onChange={this.props.onChange.bind(null, 'arousal')} />
          <Slider name='Conduciveness'
                  value={this.props.record.conduciveness}
                  onChange={this.props.onChange.bind(null, 'conduciveness')} />
          <Slider name='Controllability'
                  value={this.props.record.controllability}
                  onChange={this.props.onChange.bind(null, 'controllability')} />
          <Slider name='Intensity'
                  value={this.props.record.intensity}
                  onChange={this.props.onChange.bind(null, 'intensity')} />
          <Slider name='Valence'
                  value={this.props.record.valence}
                  onChange={this.props.onChange.bind(null, 'valence')} />
        </div>
      </form>
    )
  }
}
