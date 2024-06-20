import React from "react";
import App, { mapStateToProps } from "./App";
import { shallow } from "enzyme";
import { fromJS } from 'immutable';

describe("<App />", () => {
	it("App renders without crashing", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toEqual(true);
	});
	it('App contains the Notification component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Notifications").exists()).toBe(true);
	});
	it('App contains the Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Header").exists()).toBe(true);
	});
	it('App contains the Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Login").exists()).toBe(true);
	});
	it('App contains the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("Footer").exists()).toBe(true);
	});
	it('CourseList is not display', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("CourseList")).toHaveLength(0);
	});
	it('isLoggedIn is true', () => {
		const wrapper = shallow(<App isLoggedIn />);
		expect(wrapper.find("Login")).toHaveLength(0);
		expect(wrapper.find("CourseList")).toHaveLength(1);
	});
	let wrapper;
	let logOutMock;

	beforeAll(() => {
		logOutMock = jest.fn();
		wrapper = shallow();
	});

	it('should call logOut and alert when ctrl+h keys are pressed', () => {
		const event = {
			ctrlKey: true,
			key: 'h',
		};
		const action = jest.spyOn(window, 'alert').mockImplementation(() => { });

		wrapper.instance().handlePress(event);

		expect(logOutMock).toBeCalled();
		expect(action).toBeCalledWith('Logging you out');
	});

	afterAll(() => {
		wrapper.unmount();
		jest.restoreAllMocks();
	});

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should have displayDrawer set to false by default', () => {
		expect(wrapper.state('displayDrawer')).toBe(false);
	});

	it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).toBe(true);
	});

	it('should set displayDrawer to false when handleHideDrawer is called', () => {
		wrapper.setState({ displayDrawer: true }); // Ensure the initial state is true
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state('displayDrawer')).toBe(false);
	});
});

describe('mapStateToProps', () => {
	it('should return the correct isLoggedIn value from state', () => {
	  const state = fromJS({
		isUserLoggedIn: true
	  });
	  const rightProps = {
		isLoggedIn: true
	  };
	  expect(mapStateToProps(state)).toEqual(rightProps);
	});
});
