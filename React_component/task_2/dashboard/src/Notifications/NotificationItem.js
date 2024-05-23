import React from "react";
import PropTypes from "prop-types"

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.type = props.type;
    this.value = props.value;
    this.html = props.html;
    this.markAsRead = props.markAsRead;
  }

  render() {
    if (this.value) {
      return (<li data-notification-type={this.type} onClick={this.markAsRead}>{this.value}</li>);
    } else {
      return (
        <li data-notification-type={this.type} dangerouslySetInnerHTML={this.html} onClick={this.markAsRead(this.id)} />
      );
    }
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default NotificationItem;
