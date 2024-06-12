import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("<NotificationItem />", () => {
    it('the component works without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });
    it('Renderind the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        wrapper.update();
        expect(wrapper.html()).toContain('<li data-notification-type="default"');
        expect(wrapper.html()).toContain('test</li>');
    });
    it('Rendering th correct html (props)', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });
});
