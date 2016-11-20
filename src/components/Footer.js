import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutFooter } from '../components/Layout';

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <LayoutFooter className="Footer">
        <FooterAction to='#'>Home</FooterAction>
        <FooterAction to='#'>Profile</FooterAction>
        <FooterAction to='#'>History</FooterAction>
        <FooterAction to='#'>Add</FooterAction>
      </LayoutFooter>
    );
  }
};

export class FooterAction extends Component {
  render() {
    return (
      <Link className="FooterAction" to={this.props.to}>{this.props.children}</Link>
    );
  }
};
