import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { Switch } from '../components/Switch';
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

export const ListItem = ({ className, children }) => (
  <li className={ classNames('ListItem', className) }>{children}</li>
);

export const ListLinkItem = ({ to, children }) => (
  <ListItem className='ListLinkItem'>
    <ListLink to={to}>{children}<ListLinkIcon /></ListLink>
  </ListItem>
);

export const ListSwitchItem = ({ name, status, onChange, children }) => (
  <ListItem className='ListSwitchItem'>
    {children}
    <Switch name={name} status={status} onChange={onChange} className='ListSwitch'/>
  </ListItem>
);

export const ListLinkSwitchItem = ({ to, name, status, onChange, children }) => (
  <ListItem className='ListLinkSwitchItem'>
    <ListLink to={to}>{children}<ListLinkIcon /></ListLink>
    <Switch name={name} status={status} onChange={onChange} className='ListSwitch'/>
  </ListItem>
);

const ListLink = ({ to, children }) => (
  <Link className='ListLink' to={to}>{children}</Link>
);

const ListLinkIcon = () => (
  <span className='ListLinkIcon'><ArrowRight /></span>
);

const ArrowRight = () => (
  <svg
    className='ArrowRight'
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="10px" height="16px"
    xmlSpace="preserve">
      <polyline points="2,2 8,8 2,14"/>
  </svg>
)
