// import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Loading from '../index';
// import { should } from 'chai';

describe('Loading component', () => {
  it('contains', () => {
    const wrap = shallow(<Loading name="ball-pulse" color="#666" />);
    // expect(wrap.find('.loader-inner').children()).to.have.length(3);
    wrap.find('.loader-inner').children().should.have.length(3)
  });
});