import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


configure({adapter: new Adapter()});
describe("Testing the <App /> Component and it children", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<App /> renders a div with Notifications component", () => {
		expect(wrapper.find(Notifications)).to.have.lengthOf(1);
	});

	it("<App /> renders a div with the Header component", () => {
		expect(wrapper.find(Header)).to.have.lengthOf(1);
	});

	it("<App /> renders a div with the Login component", () => {
		expect(wrapper.find(Login)).to.have.lengthOf(1);
	});

	it("<App /> renders a div with the Footer component", () => {
		expect(wrapper.find(Footer)).to.have.lengthOf(1);
	});

});
