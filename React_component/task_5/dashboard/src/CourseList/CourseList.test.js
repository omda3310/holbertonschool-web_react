import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
    it('Rendering CourseList without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('Rendering the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});

