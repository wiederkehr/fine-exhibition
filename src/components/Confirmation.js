import React from 'react';
import { LayoutFooter } from '../components/Layout';
import { CheckmarkIcon } from '../components/Icons';
import './Confirmation.css';

export const Confirmation = ( props ) => {
  setTimeout(props.restart, 5000)
  return (
    <LayoutFooter className='Confirmation'>
      <span className="ConfirmationActionRight">
        <ConfirmationAction onClick={props.restart} />
      </span>
    </LayoutFooter>
  )
};

const ConfirmationAction = ({ onClick, children }) => (
  <button className="ConfirmationAction" onClick={onClick}><CheckmarkIcon /></button>
);
