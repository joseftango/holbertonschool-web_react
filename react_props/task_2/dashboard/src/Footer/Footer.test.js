import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Footer from './Footer';


configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).to.be.true;
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    
    // Expect the text "Copyright" to be present
    expect(wrapper.text()).to.include('Copyright');
  });
});
