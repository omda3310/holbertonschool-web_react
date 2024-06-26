import { Map } from 'immutable';
import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER,
     HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

export const initialize = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

const uiReducer = (state=Map(initialize), action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", true);
        
        case HIDE_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", false);

        case LOGIN_SUCCESS:
            return state.set("isUserLoggedIn", true);
    
        case LOGIN_FAILURE:
            return state.set("isUserLoggedIn", false);

        case LOGOUT:
            return state.set("isUserLoggedIn", false);

        default:
            break;

    }
    return state;
};

export default uiReducer;
