import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    it('Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).taEqual(true);
    });
    it('Footer contains at least the text “Copyright”', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div.App-footer').text()).toContain("Copyright");
    });
});
