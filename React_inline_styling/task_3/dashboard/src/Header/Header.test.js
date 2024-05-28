import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('Header contains the img tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header img').exists()).toEqual(true);
    });
    it('Header contains the h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header h1').exists()).toEqual(true);
    });
});
