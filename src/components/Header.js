import React, { Component } from 'react';
import { Link } from 'react-router';
import { LayoutHeader } from '../components/Layout';

import './Header.css';

export class Header extends Component {
  render() {
    return (
      <LayoutHeader className="Header">
        <span className="HeaderAction">
        { this.props.back ? <BackLink to="/" /> : null }
        </span>
        <span className="HeaderTitle">{this.props.children}</span>
      </LayoutHeader>
    );
  }
};

export class BackLink extends Component {
  render() {
    return (
      <Link className="BackLink" to={this.props.to}>Back</Link>
    );
  }
}
