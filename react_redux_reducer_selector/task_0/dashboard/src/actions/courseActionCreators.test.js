import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('creator actions', () => {
    it('selectCourse should return:{type: SELECT_COURSE, index: 1}', () => {
        const result = selectCourse(1);
        expect(result).toEqual({type: SELECT_COURSE, index: 1});
    })
    it('selectCourse should return:{type: UNSELECT_COURSE, index: 1}', () => {
        const result = unSelectCourse(1);
        expect(result).toEqual({type: UNSELECT_COURSE, index: 1});
    })
})
