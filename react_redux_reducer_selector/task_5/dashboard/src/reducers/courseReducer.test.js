import { Map } from "immutable";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import courseReducer from "../reducers/courseReducer";
import coursesNormalize from "../schema/courses";

describe('courseReducer', () => {
    it('should return the default state', () => {
        const initialState = Map();
        const state = courseReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "Course 1" },
                { id: 2, name: "Course 2" }
            ]
        };
        const normalizedData = coursesNormalize(action.data);
        Object.keys(normalizedData).forEach(key => {
            normalizedData[key].isSelected = false;
        });
        const expectedState = Map(normalizedData);
        const state = courseReducer(undefined, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = Map({
            1: { id: 1, name: "Course 1", isSelected: false },
            2: { id: 2, name: "Course 2", isSelected: false }
        });
        const action = {
            type: SELECT_COURSE,
            index: 1
        };
        const expectedState = initialState.setIn(['1', 'isSelected'], true);
        const state = courseReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = Map({
            1: { id: 1, name: "Course 1", isSelected: true },
            2: { id: 2, name: "Course 2", isSelected: false }
        });
        const action = {
            type: UNSELECT_COURSE,
            index: 1
        };
        const expectedState = initialState.setIn(['1', 'isSelected'], false);
        const state = courseReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
