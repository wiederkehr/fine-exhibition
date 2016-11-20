import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <LayoutFooter className="Footer">
        <FooterAction to='#'>Home</FooterAction>
        <FooterAction to='/profile'>Profile</FooterAction>
        <FooterAction to='/view'>View</FooterAction>
        <FooterAction to='/add'>Add</FooterAction>
      </LayoutFooter>
    );
  }
};

export class FooterAction extends Component {
  render() {
    return (
      <Link className="FooterAction" activeClassName="FooterAction--active" to={this.props.to}>{this.props.children}</Link>
    );
  }
};
