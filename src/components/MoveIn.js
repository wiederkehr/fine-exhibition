import React, { Component } from 'react';
import './MoveIn.css';

export class MoveIn extends Component {

  constructor(props) {
    super(props)

    this.state={
      status: 'hidden'
    }

  }

  componentDidMount() {
    this.setState({status:'visible'})
  }

  componentWillUnmount() {
    this.setState({status:'hidden'})
  }

  render() {
    return (
      <div className={'MoveIn ' + this.state.status}>
        {this.props.children}
      </div>
    )
  };
};
