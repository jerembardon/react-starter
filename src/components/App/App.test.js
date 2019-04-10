import React from 'react';
import { shallow } from 'enzyme';

import App from "./App";

describe('App rendering test', () => {
    it('Should render app', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });