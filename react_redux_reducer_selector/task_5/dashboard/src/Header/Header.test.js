import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import FirstContext from '../App/AppContext';

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

    const defaultContextValue = {
        user: { isLoggedIn: false, email: '' },
        logOut: jest.fn(),
      };
      
      const loggedInContextValue = {
        user: { isLoggedIn: true, email: 'test@example.com' },
        logOut: jest.fn(),
      };

    it('does not create the logout section when user is not logged in', () => {
        const wrapper = mount(
            <FirstContext.Provider value={defaultContextValue}>
                <Header />
            </FirstContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    });

    it('creates the logout section when user is logged in', () => {
        const wrapper = mount(
            <FirstContext.Provider value={loggedInContextValue}>
                <Header />
            </FirstContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
        expect(wrapper.find('#logoutSection b').text()).toBe(loggedInContextValue.user.email);
    });

    it('calls logOut when logout link is clicked', () => {
        const spyLogOut = jest.fn();
        const contextWithSpy = {
            ...loggedInContextValue,
            logOut: spyLogOut,
        };

        const wrapper = mount(
            <FirstContext.Provider value={contextWithSpy}>
                <Header />
            </FirstContext.Provider>
        );

        wrapper.find('#logoutSection span').simulate('click');
        expect(spyLogOut).toHaveBeenCalled();
    });

});
