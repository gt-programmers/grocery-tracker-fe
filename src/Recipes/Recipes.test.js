import React from 'react';
import Recipes from './Recipes';
import { shallow } from 'enzyme';

describe("Recipes", () => {
  let wrapper = shallow( <Recipes />)


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})