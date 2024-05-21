import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import { PropTypes } from 'prop-types';

function Notifications({displayDrawer}) {
  return (
    <>
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
    {displayDrawer && (
      <div className='Notifications'>
        <p style={{color: 'black'}}>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
        </ul>
        <button
          aria-label='close' type='button'
          style={{
            position: 'relative',
            float: 'right',
            top: '-120px',
            cursor: 'pointer',
            background: 'white',
            border: 'none'
          }}>x
        </button>

      </div>
    )}
    </>
  )
}

Notifications.defaultProps = {
  displayDrawer: true,
};
Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;