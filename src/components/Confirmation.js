import React from 'react';
import classNames from 'classnames';
import { LayoutFooter } from '../components/Layout';
import './Confirmation.css';

export const Confirmation = ({ children }) => {
  const messageClasses = classNames('ConfirmationMessage');
  return (
    <LayoutFooter className={'Confirmation'}>
      <div className={messageClasses}>{children}</div>
      <span className="ConfirmationActionRight">
        <ConfirmationAction onClick={() => { console.log('Confirmation Click');}}>Restart</ConfirmationAction>
      </span>
    </LayoutFooter>
  )
};

const ConfirmationAction = ({ onClick, children }) => (
  <button className="ConfirmationAction" onClick={onClick}>{children}</button>
);
