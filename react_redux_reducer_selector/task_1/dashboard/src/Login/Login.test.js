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

    
    beforeEach(() => {
        wrapper = shallow(<Login isLoggedIn={false} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('submit button is disabled by default', () => {
        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
    });

    it('submit button is enabled after changing the value of the two inputs', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { value: 'admin' } });
        expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);
    });
})
