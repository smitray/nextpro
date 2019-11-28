import React from 'react';

import IndexPage from 'app/client/pages/index';

describe('Pages', () => {
  it('Index page says, Hello world', () => {
    const wrap = shallow(<IndexPage />);
    expect(wrap.find('p').text()).toBe('Hello, world');
  });
});
