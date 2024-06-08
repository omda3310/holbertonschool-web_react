import { login, logout, display_notification_drawer, hide_notification_drawer } from './uiActionTypes';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionTypes actions', () => {
    it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
            type: LOGIN,
            user: { email, password },
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        expect(logout()).toEqual(expectedAction);
    });

    it('should create an action to display notification drawer', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        expect(display_notification_drawer()).toEqual(expectedAction);
    });

    it('should create an action to hide notification drawer', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        expect(hide_notification_drawer()).toEqual(expectedAction);
    });
});
