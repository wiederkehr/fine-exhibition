import React, { Component } from 'react';

import BackLink from './BackLink';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        { this.props.back ? <BackLink to="/" /> : null }
        <span className="HeaderTitle">{this.props.title}</span>
      </div>
    );
  }
}

export default Header;
