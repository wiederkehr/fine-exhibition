import React, { Component, PropTypes } from 'react';

import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <label className="Slider-label">
          <span className="Slider-label-key">{this.props.name}</span>
          <span className="Slider-label-value">{this.props.value}</span>
        </label>
        <input className="Slider-input" type="range" name={this.props.name} min="1" max="5" value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Slider;
