import React from 'react';
import './Button.css';

export const Button = ({ type, disabled, onChange, children }) => (
  <button className="Button" disabled={disabled} type={type} onChange={onChange}>
    {children}
  </button>
);
