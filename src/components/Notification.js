import React from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';
import './Notification.css';

export const Notification = ( props ) => {
  setTimeout(props.clear, 3000);
  return (
    <Transition
      component={false}
      enter={{
        opacity: 1,
        translateY: spring(0, {stiffness: 200, damping: 10})
      }}
      leave={{
        opacity: 0,
        translateY: -50
      }}
      >
        <div className='NotificationWrapper'>
          <div className='Notification'>
            <span className='NotificationMessage'>
              { props.children }
            </span>
          </div>
        </div>
      </Transition>
    );
}
