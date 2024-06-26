import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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
