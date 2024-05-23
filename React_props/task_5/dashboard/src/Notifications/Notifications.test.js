import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { NotificationItem } from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications render without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('Notifications render items with default first', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const itemList = wrapper.find("NotificationItem");
        expect(itemList).toBeDefined();
        expect(itemList.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
    it('menu item is being displayed when displayDrawer is false', () =>{
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
    });
    it('div.Notifications is not being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("div.Notifications")).toHaveLength(0);
    });
    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
    });
    it('div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find("div.Notifications")).toHaveLength(1);
    });

});
