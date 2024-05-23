import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('<Notifications />', () => {
    it('Notifications render without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Notifications render three items', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('Notifications render the text', () => {
        const text = 'Here is the list of notifications';
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find('.Notifications p').text()).toEqual(text);
    });
});
