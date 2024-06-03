import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow 
        textFirstCell="test"
        isHeader={true}
      />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('should render two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow 
        textFirstCell="test"
        textSecondCell="test2"
        isHeader={true}
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('should render two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow 
        textFirstCell="test"
        textSecondCell="test2"
        isHeader={false}
      />
    );
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });

  
});
