import React, { Component } from 'react';

import BackLink from './BackLink';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="HeaderAction">
        { this.props.back ? <BackLink to="/" /> : null }
        </span>
        <span className="HeaderTitle">{this.props.title}</span>
      </div>
    );
  }
}

export default Header;
