import React from 'react';
import Inventory from './Inventory';
import { shallow } from 'enzyme';

describe("Inventory", () => {
  let wrapper = shallow( <Inventory />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})