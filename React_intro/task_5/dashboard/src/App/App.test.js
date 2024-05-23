import React from "react";
import App from "./App";
import { shallow } from "enzyme";

test('Render App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});

test('Render App component with App-header div', () => {
    const wrapper = shallow(<App />);
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv.exists()).toBe(true);
});

test('Render App component with App-body div', () => {
    const wrapper = shallow(<App />);
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv.exists()).toBe(true);
});

test('Render App component with App-footer div', () => {
    const wrapper = shallow(<App />);
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv.exists()).toBe(true);
});
