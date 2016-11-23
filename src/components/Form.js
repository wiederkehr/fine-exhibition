import React, { Component } from 'react';
import { Slider } from './Slider.js';
import { Button } from './Button.js';
import './Form.css';

class AddForm extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        <div className='Input-group'>
          <input  className='Input-text'
                  id='emotion'
                  type='text'
                  placeholder='Emotion'
                  onChange={this.props.onChange.bind(null, 'emotion')} />
          <input  className='Input-text'
                  id='event'
                  type='text'
                  placeholder='Event'
                  onChange={this.props.onChange.bind(null, 'event')} />
          <input  className='Input-date'
                  id='text'
                  type='date'
                  value={this.props.date}
                  onChange={this.props.onChange.bind(null, 'date')} />
        </div>
        <div className='Slider-group'>
          <Slider name='Arousal'
                  value={this.props.arousal}
                  onChange={this.props.onChange.bind(null, 'arousal')} />
          <Slider name='Conduciveness'
                  value={this.props.conduciveness}
                  onChange={this.props.onChange.bind(null, 'conduciveness')} />
          <Slider name='Controllability'
                  value={this.props.controllability}
                  onChange={this.props.onChange.bind(null, 'controllability')} />
          <Slider name='Intensity'
                  value={this.props.intensity}
                  onChange={this.props.onChange.bind(null, 'intensity')} />
          <Slider name='Valence'
                  value={this.props.valence}
                  onChange={this.props.onChange.bind(null, 'valence')} />
        </div>
        <Button type='submit' disabled={this.props.disabled}>{this.props.status}</Button>
      </form>
    )
  }
}

export default AddForm;
