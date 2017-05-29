import React from 'react';
import './Selector.css';

export const SelectorList = ({ children}) => (
  <ul className='SelectorList'>
    { children }
  </ul>
);

export const Selector = ({ onClick, active, style, children }) => (
  <li className='SelectorListItem'>
    <button
      className='Selector'
      onClick={onClick.bind(null, children)}
      style={style}>
      {children}
    </button>
  </li>
);
