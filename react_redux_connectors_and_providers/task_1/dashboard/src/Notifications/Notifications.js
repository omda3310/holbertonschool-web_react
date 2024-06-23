import React from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

		return (
			<>
				<div className={css(stl.menuItem)} onClick={handleDisplayDrawer}>
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(stl.Notifications)}>
						<button
							style={{
								background: "transparent",
								border: "none",
								position: "absolute",
								right: 10,
							}}
							onClick={handleHideDrawer}

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
										markNotificationAsRead={markNotificationAsRead}
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
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
	markNotificationAsRead: () => {},
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
};

const stl = StyleSheet.create({
	menuItem: {
		textAlign: "right",
		
	},
	Notifications: {
		display: "block",
		height: "110px",
		paddingleft: "1rem",
		border: "dotted",
		color: "red",
	}
});

export default Notifications;
