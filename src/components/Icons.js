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

export const ArrowRightIcon = () => (
  <svg className='ArrowRightIcon' width='24' height='24'>
    <g>
      <polygon points="0 11 18 11 18 13 0 13"></polygon>
      <polygon points="18 8 18 16 24 12"></polygon>
    </g>
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg className='ArrowLeftIcon' width='24' height='24'>
    <g>
      <polygon points="6 11 24 11 24 13 6 13"></polygon>
      <polygon points="6 8 6 16 0 12"></polygon>
    </g>
  </svg>
);
