// import React from 'react';
// import {shallow, mount, render} from 'enzyme';
// import Loading from '../index.js';

var React = require('react');
var {shallow, mount, render} = require('enzyme');
var Loading = require('loading');

describe('Loading component', function() {
  it('contains' function() {
    expect(shallow(<Loading />).contains(
      "<div>\
        <div className='loader'>\
          <div className='loader-inner line-scale-pulse-out'>\
            <div></div><div></div><div></div>\
          </div>\
        </div>\
        <div className='clear'></div>\
      </div>"
    ))
  })
})