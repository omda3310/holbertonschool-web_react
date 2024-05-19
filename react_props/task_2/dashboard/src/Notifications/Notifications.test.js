import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { NotificationItem } from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications render without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Notifications render three items with default first', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find('NotificationItem').first().html()).toEqual(
            '<li data-notification-type={type} dangerouslySetInnerHTML={html}>'
        );
    });
});
