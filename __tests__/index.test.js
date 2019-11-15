import React from 'react';
import { mount } from 'enzyme';

import IndexPage from '../app/client/pages/index';

describe('Pages', () => {
  it('Index page says, Hello world', () => {
    const wrap = mount(<IndexPage />);
    expect(wrap.find('p').text()).toBe('Hello, world');
  });
});
