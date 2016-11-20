import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutHeader } from '../components/Layout';

import './Header.css';

export class Header extends Component {
  render() {
    return (
      <LayoutHeader className="Header">
        <span className="HeaderTitle">{this.props.children}</span>
        <span className="HeaderActionLeft">
        { this.props.left ? <HeaderAction to={this.props.left.to}>{this.props.left.label}</HeaderAction> : null }
        </span>
        <span className="HeaderActionRight">
        { this.props.right ? <HeaderAction to={this.props.right.to}>{this.props.right.label}</HeaderAction> : null }
        </span>
      </LayoutHeader>
    );
  }
};

export class HeaderAction extends Component {
  render() {
    return (
      <Link className="HeaderAction" to={this.props.to}>{this.props.children}</Link>
    );
  }
};
