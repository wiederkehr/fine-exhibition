import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';
import './Pagination.css';

export const Pagination = ({ forward, backward, dots, activeDot }) => (
  <LayoutFooter className="Pagination">
    <PaginationBackward>{backward.label ? backward.label : '← Back'}</PaginationBackward>
    <PaginationDots dots={dots} activeDot={activeDot}/>
    <PaginationForward>{forward.label ? forward.label : 'Next →'}</PaginationForward>
  </LayoutFooter>
);

export const PaginationForward = ({ to, children }) => (
  <Link className="PaginationAction PaginationAction--Forward" to={to}>{children}</Link>
);

export const PaginationBackward = ({ to, children }) => (
  <Link className="PaginationAction PaginationAction--Backward" to={to}>{children}</Link>
);

export const PaginationDots = ({ dots, activeDot }) => (
  <div className='PaginationDots'>
    {
      dots.map(function(dot, i) {
        return <PaginationDot key={i} status={'past'} />
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
