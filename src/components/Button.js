import React from 'react';
import './Button.css';

export const Button = ({ disabled, onChange, type, children }) => (
  <button className='Button' disabled={disabled} type={type} onChange={onChange}>
    {children}
  </button>
);
