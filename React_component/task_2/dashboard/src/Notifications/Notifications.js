import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
	constructor() {
		super();
		this.markAsRead = this.markAsRead.bind(this);
	}
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		return (
			<>
				<div className="menuItem">
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className="Notifications">
						<button
							style={{
								background: "transparent",
								border: "none",
								position: "absolute",
								right: 20,
							}}
						>
							x
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{listNotifications.length === 0 ? (
								<NotificationItem value="No new notification for now" />
							) : (
								listNotifications.map(notification => (
									<NotificationItem
										key={notification.id}
										type={notification.type}
										value={notification.value}
										html={notification.html}
										markAsRead={() => { this.markAsRead(notification.id) }}
									/>
								)))}
						</ul>
					</div>
				)}
			</>
		);
	};
}


Notifications.defaultProps = {
	displayDrawer: true,
	listNotifications: [],
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
