import React from 'react';
import './Button.css';

export const Button = ({ disabled, onChange, type, style, children }) => (
  <button
    className='Button PrimaryButton'
    disabled={disabled}
    type={type}
    onChange={onChange}
    style={style}>
    {children}
  </button>
);

export const SecondaryButton = ({ disabled, onChange, type, style, children }) => (
  <button
    className='Button SecondaryButton'
    disabled={disabled}
    type={type}
    onChange={onChange}
    style={style}>
    {children}
  </button>
);
