import React, { Component } from 'react';
import classNames from 'classnames';
import './Toggle.css';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    this.props.onClick(event, this.props.index);
  };

  render() {
    return (
      <input
        className={ classNames('ToggleButton', this.props.isActive ? 'ToggleButton--On' : 'ToggleButton--Off') }
        type='button'
        value={this.props.value}
        onClick={this.handleClick}
      />
    );
  };
};

export const ToggleButtonRow = ({ children }) => (
  <div className='ToggleButtonRow'>{children}</div>
);

export class ToggleGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      selectedValue: null,
      options: this.props.options
    };
    this.toggleButton = this.toggleButton.bind(this);
  };

  toggleButton(event, index) {
    this.props.onChange(event);
    this.setState({
      selectedIndex: index,
      selectedValue: this.state.options[index],
      options: this.state.options
    });
  };

  render() {
    return (
      <div className="ToggleGroup">
        {this.state.options.map((option, i) => {
          return (
            <ToggleButtonRow key={i}>
              <ToggleButton
                index={i}
                value={option}
                onClick={this.toggleButton}
                isActive={(this.state.selectedIndex === i)}/>
            </ToggleButtonRow>
          )
        })}
      </div>
    );
  };
};

export class SelectGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndices: [],
      selectedValues: [],
      options: this.props.options
    };
    this.toggleButton = this.toggleButton.bind(this);
  };

  toggleButton(event, index) {

    let newIndices = this.state.selectedIndices.slice();
    let position = newIndices.indexOf(index);
    position === -1 ? newIndices.push(index) : newIndices.splice(position, 1);
    newIndices.length > 3 ? newIndices.shift() : false;

    let newValues = [];
    newIndices.map((index) => {
      newValues.push(this.state.options[index]);
    });

    this.setState({
      selectedIndices: newIndices,
      selectedValues: newValues
    });

    let newEvent = {target: {value: newValues}};
    this.props.onChange(newEvent);
  };

  render() {

    let allButtons = this.state.options.map((option, i) => {

      let position = this.state.selectedIndices.indexOf(i);
      let isActive = null;
      position === -1 ? isActive = false : isActive = true;

      return (
        <ToggleButtonRow key={i}>
          <ToggleButton
            index={i}
            value={option}
            onClick={this.toggleButton}
            isActive={isActive}/>
        </ToggleButtonRow>
      )
    });

    return (
      <div className="ToggleGroup">
        { allButtons }
      </div>
    );
  };
};
