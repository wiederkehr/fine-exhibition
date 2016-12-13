import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';
import './Pagination.css';

export const Pagination = () => (
  <LayoutFooter className="Pagination">
    <PaginationBackward>Back</PaginationBackward>
    <PaginationDots />
    <PaginationForward>Next</PaginationForward>
  </LayoutFooter>
);

export const PaginationForward = ({ to, children }) => (
  <Link className="PaginationAction PaginationAction--Forward" to={to}>{children} →</Link>
);

export const PaginationBackward = ({ to, children }) => (
  <Link className="PaginationAction PaginationAction--Backward" to={to}>← {children}</Link>
);

export const PaginationDots = ({ dots }) => (
  <div className='PaginationDots'>
    <PaginationDot status={'past'} />
    <PaginationDot status={'past'}/>
    <PaginationDot status={'active'}/>
    <PaginationDot status={'next'}/>
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
