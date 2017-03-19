import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';
import './Footer.css';

export const Footer = ({border, transparent}) => {
  const classes = classNames({
    'Footer' : true,
    'Footer--border' : border,
    'Footer--transparent' : transparent,
  });
  return (
    <LayoutFooter className={classes}>
      <FooterAction to='#'>Home</FooterAction>
      <FooterAction to='/profile'>Profile</FooterAction>
      <FooterAction to='/history'>History</FooterAction>
      <FooterAction to='/record'>Record</FooterAction>
    </LayoutFooter>
  );
}

export const FooterAction = ({ to, children }) => (
  <Link className="FooterAction" activeClassName="FooterAction--active" to={to}>{children}</Link>
);
