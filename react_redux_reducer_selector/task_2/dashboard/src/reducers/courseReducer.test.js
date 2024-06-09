import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import courseReducer from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the data with isSelected set to false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ]
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the correct item', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the correct item', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
