import React, { Component } from 'react';
import './Timeline.css';

export const TimelineWrapper = ( props ) => (
  <div className='TimelineWrapper'>{ props.children }</div>
);

export const Timeline = ( props ) => (
  <div className='Timeline'>{ props.children }</div>
);

export const TimelineItem = ( props ) => (
  <div className='TimelineItem'>{ props.children }</div>
);
