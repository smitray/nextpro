import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from 'app/client/pages/index';

describe('Pages', () => {
  it('Index page says, Hello world', () => {
    const wrap = shallow(<IndexPage />);
    expect(wrap.find('p').text()).toBe('Hello, world');
  });
});
