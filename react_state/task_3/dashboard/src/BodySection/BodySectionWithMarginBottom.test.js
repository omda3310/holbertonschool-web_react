import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; 

describe('<BodySectionWithMarginBottom />', () => {
  it('renders BodySection component with correct props', () => {
    const title = 'Test Title';
    const children = <p>Test Children</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toEqual(true);
  });
});
