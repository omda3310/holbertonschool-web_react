import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";

const initialize = [];

const courseReducer = (state = initialize, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({
                ...course,
                isSelected: false
            }));

        case SELECT_COURSE:
            return state.map((course) => {
                const book = {
                    ...course,
                };
                if (course.id === action.index) book.isSelected = true;
                return book;
            });

        case UNSELECT_COURSE:
            return state.map((course) => {
                const book = {
                    ...course,
                };
                if (course.id === action.index) book.isSelected = false;
                return book;
            });

        default:
            break;
    }
    return state;
}
