import { login, logout, display_notification_drawer, hide_notification_drawer } from './uiActionTypes';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetch from 'node-fetch';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('uiActionCreators', () => {
    afterEach(() => {
      fetchMock.restore();
    });
  
    it('creates LOGIN and LOGIN_SUCCESS when fetching login is done', () => {
      fetchMock.getOnce('http://localhost:9000/login-success.json', {
        body: { success: true },
        headers: { 'content-type': 'application/json' }
      });
  
      const expectedActions = [
        { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
        { type: LOGIN_SUCCESS }
      ];
      const store = mockStore({});
  
      return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  
    it('creates LOGIN and LOGIN_FAILURE when fetching login fails', () => {
      fetchMock.getOnce('http://localhost:9000/login-success.json', {
        throws: new Error('Failed to fetch')
      });
  
      const expectedActions = [
        { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
        { type: LOGIN_FAILURE }
      ];
      const store = mockStore({});
  
      return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
