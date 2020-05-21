import React from 'react';
import Stats from './Stats';
import { shallow } from 'enzyme';

describe("Stats", () => {
  let wrapper = shallow( <Stats />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})


