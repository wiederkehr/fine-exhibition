import React from 'react';
import './Button.css';

export const Button = ({ disabled, onClick, type, style, children }) => (
  <button
    className='Button PrimaryButton'
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);

export const SecondaryButton = ({ disabled, onClick, type, style, children }) => (
  <button
    className='Button SecondaryButton'
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);
