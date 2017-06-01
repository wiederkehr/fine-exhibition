import React from 'react';
import './Notification.css';

export const Notification = ( props ) => {
  setTimeout(props.clear, 3000)
  return (
    <div className='Notification'>
      <span className='NotificationMessage'>
        { props.children }
      </span>
    </div>
  );
}
