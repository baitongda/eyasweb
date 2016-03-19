// import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Loading from '../index';
import { expect } from 'chai';

describe('Loading component', () => {
  it('contains', () => {
    const wrap = shallow(<Loading name="ball-pulse" color="#666" />);
    expect(wrap.find('.loader-inner').children()).to.have.length(3);
  });
});