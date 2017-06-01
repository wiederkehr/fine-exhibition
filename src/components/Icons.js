import React from 'react';
import './Icons.css';

export const CloseIcon = () => (
  <svg className='CloseIcon' width='16' height='16'>
    <g>
      <line x1="2" y1="2" x2="14" y2="14"/>
      <line x1="2" y1="14" x2="14" y2="2"/>
    </g>
  </svg>
);

export const DetailIcon = () => (
  <svg className='DetailIcon' width='24' height='24'>
    <g>
      <line x1="2" y1="2" x2="22" y2="2"/>
      <line x1="2" y1="8" x2="22" y2="8"/>
      <line x1="2" y1="14" x2="12" y2="14"/>
    </g>
  </svg>
);
