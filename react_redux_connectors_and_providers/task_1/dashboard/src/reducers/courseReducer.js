import { Map } from "immutable";
import coursesNormalize from "../schema/courses";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

const initialize = [];

const courseReducer = (state = Map(initialize), action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizeDT = coursesNormalize(action.data);
            Object.keys(normalizeDT).map((key) => {
                normalizeDT[key].isSelected = false;
            });
            return state.merge(normalizeDT);

        case SELECT_COURSE:
            return state.setIn([String(action.index), "isSelected"], true);

        case UNSELECT_COURSE:
            return state.setIn([String(action.index), "isSelected"], false);

        default:
            break;
    }
    return state;
}

export default courseReducer;
