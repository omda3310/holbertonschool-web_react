import { fromJS } from "immutable";
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from "../actions/notificationActionTypes";
import notificationReducer from "../reducers/notificationReducer";
import notificationsNormalizer from "../schema/notifications";

describe('notificationReducer', () => {
    it('should return the default state', () => {
        const initialState = fromJS({
            notifications: [],
            filter: "default"
        });
        const state = notificationReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState.toJS());
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, value: "Notification 1" },
                { id: 2, value: "Notification 2" }
            ]
        };
        const normalizedData = notificationsNormalizer(action.data);
        Object.keys(normalizedData.notifications).forEach(key => {
            normalizedData.notifications[key].isRead = false;
        });
        const expectedState = fromJS({
            ...normalizedData,
            filter: "default"
        });
        const state = notificationReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = fromJS({
            notifications: {
                1: { id: 1, value: "Notification 1", isRead: false },
                2: { id: 2, value: "Notification 2", isRead: false }
            },
            filter: "default"
        });
        const action = {
            type: MARK_AS_READ,
            index: 1
        };
        const expectedState = initialState.setIn(["notifications", String(action.index), "isRead"], true);
        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = fromJS({
            notifications: {
                1: { id: 1, value: "Notification 1", isRead: false },
                2: { id: 2, value: "Notification 2", isRead: false }
            },
            filter: "default"
        });
        const action = {
            type: SET_TYPE_FILTER,
            filter: "urgent"
        };
        const expectedState = initialState.set("filter", action.filter);
        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });
});
