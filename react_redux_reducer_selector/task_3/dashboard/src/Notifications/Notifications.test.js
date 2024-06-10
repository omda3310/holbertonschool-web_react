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

    beforeEach(() => {
		handleDisplayDrawerMock = jest.fn();
		handleHideDrawerMock = jest.fn();
		wrapper = shallow(
			<Notifications
				displayDrawer={false}
				listNotifications={[]}
				handleDisplayDrawer={handleDisplayDrawerMock}
				handleHideDrawer={handleHideDrawerMock}
			/>
		);
	});

	it('renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('renders menuItem when displayDrawer is false', () => {
		expect(wrapper.find('.menuItem').exists()).toBe(true);
	});

	it('does not render div.Notifications when displayDrawer is false', () => {
		expect(wrapper.find('.Notifications').exists()).toBe(false);
	});

	it('renders div.Notifications when displayDrawer is true', () => {
		wrapper.setProps({ displayDrawer: true });
		expect(wrapper.find('.Notifications').exists()).toBe(true);
	});

	it('calls handleDisplayDrawer when the menu item is clicked', () => {
		wrapper.find('.menuItem').simulate('click');
		expect(handleDisplayDrawerMock).toHaveBeenCalled();
	});

	it('calls handleHideDrawer when the close button is clicked', () => {
		wrapper.setProps({ displayDrawer: true });
		wrapper.find('button').simulate('click');
		expect(handleHideDrawerMock).toHaveBeenCalled();
	});

});
