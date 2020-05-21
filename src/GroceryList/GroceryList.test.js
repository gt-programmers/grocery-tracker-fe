import React from 'react';
import GroceryList from './GroceryList';
import { shallow } from 'enzyme';

describe("GroceryList", () => {
  let wrapper = shallow( <GroceryList />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})