import React from 'react';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';
import './Footer.css';

export const Footer = () => (
  <LayoutFooter className="Footer">
    <FooterAction to='#'>Home</FooterAction>
    <FooterAction to='/profile'>Profile</FooterAction>
    <FooterAction to='/view'>View</FooterAction>
    <FooterAction to='/record'>Record</FooterAction>
  </LayoutFooter>
);

export const FooterAction = ({ to, children }) => (
  <Link className="FooterAction" activeClassName="FooterAction--active" to={to}>{children}</Link>
);
