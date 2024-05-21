import React from "react";
import App from "./App";
import { shallow } from "enzyme";

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
        //wrapper.update();
        expect(wrapper.find("Header").exists()).toBe(true);
    });
    it('App contains the Login component', () => {
        const wrapper = shallow(<App />);
        //wrapper.update();
        expect(wrapper.find("Login").exists()).toBe(true);
    });
    it('App contains the Footer component', () => {
        const wrapper = shallow(<App />);
        //wrapper.update();
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
});
