import React, { Component } from 'react';
import './History.css';

export const History = ( props ) => (
  <div className='History'>{ props.children }</div>
)

export const Timeline = ( props ) => (
  <div className='Timeline'>{ props.children }</div>
)

export const TimelineItem = ( props ) => (
  <div className='TimelineItem'>{ props.children }</div>
);
