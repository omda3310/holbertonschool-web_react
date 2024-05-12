import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';

export function Notifications() {
  return (
    <div className='Notifications'>
        <p style={{color: 'black'}}>Here is the list of notifications</p>
        <ul>
          <li data-priority='default'>New course available</li>
          <li dat-priority='urgent'>New resume available</li>
          <li
           data-priority='urgent'
           dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
          </li>
        </ul>
        <button
          aria-label='close' type='button'
          style={{
            position: 'relative',
            float: 'right',
            top: '-130px',
            cursor: 'pointer',
            background: 'white',
            border: 'none'
          }}>x
        </button>

    </div>
  )
}
