import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

import "node-fetch";

export const login = (email, password) => {
    return ({
        type: LOGIN,
        user: { email, password},
    });
}

export const logout = () => {
    return ({
        type: LOGOUT,
    });
}

export const display_notification_drawer = () => {
    return ({
        type: DISPLAY_NOTIFICATION_DRAWER,
    });
}

export const hide_notification_drawer = () => {
    return ({
        type: HIDE_NOTIFICATION_DRAWER,
    });
}

export const loginSuccess = () => {
    return ({
        type: LOGIN_SUCCESS
    });
}

export const loginFailure = () => {
    return ({
        type: LOGIN_FAILURE
    });
}

export const loginRequest = (email, password) => {
    return ((dispatch) => {
        dispatch(login(email, password));
        return fetch("http://localhost:9000/login-success.json")
        .then((res) => res.json())
        .then((json) => dispatch(loginSuccess()))
        .catch((error) => dispatch(loginFailure()))
    });
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export const boundLogout = () => dispatch(logout());

export const boundDisplay_notification_drawer = () => dispatch(display_notification_drawer());

export const boundHide_notification_drawer = () => dispatch(hide_notification_drawer());
