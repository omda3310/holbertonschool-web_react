import notificationReducer, { initializeNotification } from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    it('should return the initial state when no action is passed', () => {
        expect(notificationReducer(undefined, {})).toEqual(initializeNotification);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, message: 'Test notification 1' },
                { id: 2, message: 'Test notification 2' }
            ]
        };
        const expectedState = {
            ...initializeNotification,
            notifications: [
                { id: 1, message: 'Test notification 1', isRead: false },
                { id: 2, message: 'Test notification 2', isRead: false }
            ]
        };
        expect(notificationReducer(initializeNotification, action)).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = {
            ...initializeNotification,
            notifications: [
                { id: 1, message: 'Test notification 1', isRead: false },
                { id: 2, message: 'Test notification 2', isRead: false }
            ]
        };
        const action = {
            type: MARK_AS_READ,
            index: 1
        };
        const expectedState = {
            ...initializeNotification,
            notifications: [
                { id: 1, message: 'Test notification 1', isRead: true },
                { id: 2, message: 'Test notification 2', isRead: false }
            ]
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'urgent'
        };
        const expectedState = {
            ...initializeNotification,
            filter: 'urgent'
        };
        expect(notificationReducer(initializeNotification, action)).toEqual(expectedState);
    });
});
