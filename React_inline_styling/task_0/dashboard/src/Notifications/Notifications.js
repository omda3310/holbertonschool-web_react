import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	markAsRead(ide) {
		console.log(`Notification ${ide} has been marked as read`);
	}

	shouldComponentUpdate(nextProps) {
		return (
			nextProps.listNotifications.length > this.props.listNotifications.length
		);
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
								right: 10,
							}}
						>
							x
						</button>
						<p>
							{ listNotifications.length > 0 ? 'Here is the list of notifications' : 'No new notification for now' }
						</p>
						<ul>
							{listNotifications.length === 0 ? (
								<NotificationItem value="No new notification for now" />
							) : (
								listNotifications.map(notification => (
									<NotificationItem
									    key={notification.id}
										id={notification.id}
										type={notification.type}
										value={notification.value}
										html={notification.html}
										markAsRead={this.markAsRead}
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
	id: NaN,
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
