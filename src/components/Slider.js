import React from 'react';
import './Slider.css';

export const Slider = ({ name, value, onChange}) => (
  <div className="Slider">
    <label className="Slider-label">
      <span className="Slider-label-key">{name}</span>
      <span className="Slider-label-value">{value}</span>
    </label>
    <input className="Slider-input" type="range" name={name} min="1" max="5" value={value} onChange={onChange} />
  </div>
);
