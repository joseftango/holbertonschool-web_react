import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';


test('renders App component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('renders App component with App-header div', () => {
  const wrapper = shallow(<App />);
  const appHeaderDiv = wrapper.find('.App-header');
  expect(appHeaderDiv.exists()).toBe(true);
});

test('renders App component with App-body div', () => {
  const wrapper = shallow(<App />);
  const appBodyDiv = wrapper.find('.App-body');
  expect(appBodyDiv.exists()).toBe(true);
});

test('renders App component with App-footer div', () => {
  const wrapper = shallow(<App />);
  const appFooterDiv = wrapper.find('.App-footer');
  expect(appFooterDiv.exists()).toBe(true);
});


test('renders Notifications div component the sibiling of App', () => {
	const wrapper = shallow(<Notifications/>);
	const list = wrapper.find('ul');
	expect(list.exists()).toBe(true);
	expect(list.children().length).toEqual(3)
	const para = wrapper.find('p').text();
	expect(para).toBe('Here is the list of notifications');
  });
