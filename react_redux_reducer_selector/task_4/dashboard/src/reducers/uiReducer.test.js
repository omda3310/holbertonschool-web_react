import { Map, toJS } from 'immutable';
import uiReducer, { initialize } from './uiReducer';
import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state.toJS()).toEqual(initialize.toJS());
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: 'SELECT_COURSE' };
        const state = uiReducer(undefined, action);
        expect(state.toJS()).toEqual(initialize.toJS());
    });

    it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const expectedState = initialize.set('isNotificationDrawerVisible', true);
        const state = uiReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const initialState = initialize.set('isNotificationDrawerVisible', true);
        const expectedState = initialize.set('isNotificationDrawerVisible', false);
        const state = uiReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should change isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
        const action = { type: LOGIN_SUCCESS };
        const expectedState = initialize.set('isUserLoggedIn', true);
        const state = uiReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should change isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
        const action = { type: LOGIN_FAILURE };
        const expectedState = initialize.set('isUserLoggedIn', false);
        const state = uiReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should change isUserLoggedIn to false when LOGOUT is passed', () => {
        const action = { type: LOGOUT };
        const initialState = initialize.set('isUserLoggedIn', true);
        const expectedState = initialize.set('isUserLoggedIn', false);
        const state = uiReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });
});
