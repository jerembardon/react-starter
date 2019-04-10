import React from 'react';
import { shallow } from 'enzyme';

import App from "./App"
import pool from "./../../assets/img/pool.jpg";

describe('App rendering test', () => {
    it('Should render app', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });