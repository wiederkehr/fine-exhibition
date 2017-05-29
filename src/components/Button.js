import React from 'react';
import classNames from 'classnames';
import './Button.css';

export const PrimaryButton = ({ disabled, onClick, type, style, children }) => (
  <button
    className={ classNames('Button', 'PrimaryButton') }
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);

export const SecondaryButton = ({ disabled, onClick, type, style, children }) => (
  <button
    className={ classNames('Button', 'SecondaryButton') }
    disabled={disabled}
    type={type}
    onClick={onClick}
    style={style}>
    {children}
  </button>
);
