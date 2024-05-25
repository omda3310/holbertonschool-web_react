import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
    it('Login renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('Login contains 2 input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body input')).toHaveLength(2);
    });
    it('Login contains 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body label')).toHaveLength(2);
    });
})