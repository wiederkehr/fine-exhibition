import React from 'react';
import classNames from 'classnames';
import './Switch.css';

export const Switch = ({ state, onChange }) => (
  <div className={ classNames('Switch', state) }>
    <button className={ classNames('SwitchButton', state) } type='button' onChange={onChange}>
      {state}
    </button>
  </div>
);
