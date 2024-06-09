import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER,
     HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

export const initialize = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

const uiReducer = (state=initialize, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true
            };
        
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false
            };
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            };
    
        case LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            };
        
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            };

        default:
            break;

    }
    return state;
};

export default uiReducer;
