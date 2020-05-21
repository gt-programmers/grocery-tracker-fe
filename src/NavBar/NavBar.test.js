import React from 'react';
import NavBar from './NavBar';
import { shallow } from 'enzyme';

describe("NavBar", () => {
  let wrapper = shallow( <NavBar />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})


