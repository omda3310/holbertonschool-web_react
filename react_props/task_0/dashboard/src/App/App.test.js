import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });
});
