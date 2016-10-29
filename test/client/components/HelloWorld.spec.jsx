import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import HelloWorld from '../../../client/components/HelloWorld';

describe('Hello world test suite', () => {
  it('renders Hello world! message', () => {
    // when
    const wrapper = mount(
        <HelloWorld />
    );

    // then
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').text()).to.equal('Hello world!');
  });
});
