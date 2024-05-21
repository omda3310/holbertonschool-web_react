import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

function NotificationItem({type = 'default', html, value}) {
    if(html) {
		return (
			<li className={type} data-notification-type={type} dangerouslySetInnerHTML={html} />
		);
	} else {
		return (
			<li className={type} data-notification-type={type} >{value}</li>
		);
	}
}

NotificationItem.PropTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
};

export default NotificationItem;
