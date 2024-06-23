import { Map } from "immutable";
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";

export  const initializeNotification = {
    notifications: [],
    filter: "default"
};

const notificationReducer = (state = Map(initializeNotification), action) => {
    switch(action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const normalizeDT = notificationsNormalizer(action.data);

			Object.keys(normalizeDT.notifications).map(key => {
				normalizeDT.notifications[key].isRead = false;
			});
			return state.merge(normalizeDT);

		case MARK_AS_READ:
			return state.setIn(["notifications", String(action.index), "isRead"], true);

		case SET_TYPE_FILTER:
			return state.set("filter", action.filter);

		default:
			break;
	}
	return state;
}

export default notificationReducer;
