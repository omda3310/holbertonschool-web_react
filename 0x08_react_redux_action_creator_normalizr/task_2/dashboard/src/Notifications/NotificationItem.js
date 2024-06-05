import React, {memo} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
const NotificationItem = memo(({ id, type = "default", html, value, markNotificationAsRead}) => {
  const handleClick = () => {
    markNotificationAsRead(id);
  };

  const notifStyle = css(type === "urgent" ? stl.urgent : stl.default);

    if (value) {
      return (<li className={notifStyle} data-notification-type={type} onClick={handleClick}>{value}</li>);
    } else {
      return (
        <li className={notifStyle} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markNotificationAsRead(id)} />
      );
    }
  })

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markNotificationAsRead: PropTypes.func,
  id: PropTypes.number,
};
NotificationItem.defaultProps = {
  id: undefined,
  value: '',
  type: 'default',
  html: {},
  markNotificationAsRead: () => {},
}
const stl = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default NotificationItem;
