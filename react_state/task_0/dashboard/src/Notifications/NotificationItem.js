import React, {memo} from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
const NotificationItem = memo(({ id, type = "default", html, value, markAsRead}) => {
  const handleClick = () => {
    markAsRead(id);
  };

  const notifStyle = css(type === "urgent" ? stl.urgent : stl.default);

    if (value) {
      return (<li className={notifStyle} data-notification-type={type} onClick={handleClick}>{value}</li>);
    } else {
      return (
        <li className={notifStyle} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead(id)} />
      );
    }
  })

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const stl = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default NotificationItem;
