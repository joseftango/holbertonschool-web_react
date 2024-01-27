import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Login from './Login';


configure({ adapter: new Adapter() });

describe('Login Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).to.be.true;
  });

  it('should render 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    
    // Expect 2 input tags to be present
    expect(wrapper.find('input')).to.have.lengthOf(2);

    // Expect 2 label tags to be present
    expect(wrapper.find('label')).to.have.lengthOf(2);
  });
});
