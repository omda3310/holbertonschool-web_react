import React from "react";
import propTypes from "prop-types"

function NotificationItem({ type, value, html }) {
  
  if (value) {
    return ( <li data-notification-type={type}>{value}</li> );
  } else {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string
    }), 
};

export default NotificationItem;
