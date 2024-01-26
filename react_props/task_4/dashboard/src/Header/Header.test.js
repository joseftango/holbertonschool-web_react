import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from "./Header";


configure({adapter: new Adapter()});
describe("Testing the <Header /> Component", () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).to.be.true;
	  });
	
	  it('should render img and h1 tags', () => {
		const wrapper = shallow(<Header />);
		
		// Expect an img tag to be present
		expect(wrapper.find('img')).to.have.lengthOf(1);
	
		// Expect an h1 tag to be present
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	  });
	
});
