import React from 'react';
import classNames from 'classnames';
import './Switch.css';

export const Switch = ({ className, state='on', onChange }) => (
  <div className={ classNames('Switch', state, className) }>
    <button className={ classNames('SwitchButton', state) } type='button' onChange={onChange}>
      {state}
    </button>
  </div>
);
