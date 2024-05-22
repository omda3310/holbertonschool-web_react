import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { PropTypes } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({displayDrawer, listNotifications}) {
  return (
    <>
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
    {
    displayDrawer && (
      <div className='Notifications'>
        <p style={{color: 'black'}}>Here is the list of notifications</p>
        <ul>
          {
            listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )
          }
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
  listNotifications: [],
};
Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
