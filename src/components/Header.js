import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { LayoutHeader } from '../components/Layout';
import './Header.css';

export const Header = ({ left, right, transparent, children }) => {
  const classes = classNames('Header', transparent === true ? 'Header--transparent' : null);
  return (
    <LayoutHeader className={classes}>
      <span className="HeaderActionLeft">
      { left ? <HeaderAction to={left.to}>{left.label}</HeaderAction> : null }
      </span>
      <span className="HeaderTitle">{children}</span>
      <span className="HeaderActionRight">
      { right ? <HeaderAction to={right.to}>{right.label}</HeaderAction> : null }
      </span>
    </LayoutHeader>
  );
}

export const HeaderAction = ({ to, children }) => (
  <Link className="HeaderAction" to={to}>{children}</Link>
);
