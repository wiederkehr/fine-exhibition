import React from 'react';
import classNames from 'classnames';
import { LayoutFooter } from '../components/Layout';
import './Pagination.css';

export const Pagination = ({ forward, backward, dots, currentDot }) => (
  <LayoutFooter className="Pagination">
    <PaginationBackward onClick={backward.onClick}>{backward.label ? backward.label : '← Back'}</PaginationBackward>
    <PaginationDots dots={dots} currentDot={currentDot}/>
    <PaginationForward onClick={forward.onClick}>{forward.label ? forward.label : 'Next →'}</PaginationForward>
  </LayoutFooter>
);

export const PaginationForward = ({ onClick, children }) => (
  <button className="PaginationAction PaginationAction--Forward" onClick={onClick}>{children}</button>
);

export const PaginationBackward = ({ onClick, children }) => (
  <button className="PaginationAction PaginationAction--Backward" onClick={onClick}>{children}</button>
);

export const PaginationDots = ({ dots, currentDot }) => (
  <div className='PaginationDots'>
    {
      dots.map(function(dot, i) {
        return <PaginationDot key={i} status={ currentDot === i ? 'active' : 'passive' } />
      })
    }
  </div>
);

export const PaginationDot = ({ status }) => {
  const classes = classNames('PaginationDot', 'PaginationDot--' + status);
  return (
    <svg className={classes} width='12' height='12'>
      <circle r='4' cy='6' cx='6'/>
    </svg>
  )

};
