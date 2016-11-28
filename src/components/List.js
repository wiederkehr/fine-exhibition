import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import './List.css';

export const ListGroup = ({ children }) => (
  <div className="ListGroup">{ children }</div>
);

export const ListHeader = ({ children }) => (
  <div className="ListHeader">{ children }</div>
);

export const List = ({ children }) => (
  <ul className="List">{ children }</ul>
);

export const ListItem = ({ to, className, children }) => (
  <li className={ classNames('ListItem', className) }>
    <ListLink to={to}>{children}{ to ? <ListLinkAction /> : null}</ListLink>
  </li>
);

export const ListLink = ({ to, children }) => (
  <Link className="ListLink" to={to}>{children}</Link>
);

export const ListLinkAction = () => (
  <span className="ListLinkAction"><ArrowRight /></span>
);

export const ArrowRight = () => (
  <svg
    className='ArrowRight'
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="10px" height="16px"
    xmlSpace="preserve">
      <polyline points="2,2 8,8 2,14"/>
  </svg>
)
