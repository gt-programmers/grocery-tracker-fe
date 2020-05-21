import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

describe("Profile", () => {
  let wrapper = shallow( <Profile />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})