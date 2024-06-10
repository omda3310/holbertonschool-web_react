import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from "../actions/notificationActionTypes";

export  const initializeNotification = {
    notifications: [],
    filter: "default"
};

const notificationReducer = (state=initializeNotification, action) => {
    switch(action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			return ({
				...state,
				notifications: action.data.map(notification => {
					return ({
						...notification,
						isRead: false
					});
				})
			});

		case MARK_AS_READ:
			return ({
				...state,
				notifications: state.notifications.map(notification => {
					const notif = {
						...notification,
					};
					if (notification.id == action.index)
						notif.isRead = true;
					return notif;
				})
			});

		case SET_TYPE_FILTER:
			return ({
				...state,
				filter: action.filter
			});
		
		default:
			break;
	}
	return state;
}

export default notificationReducer;
