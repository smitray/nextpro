import React from 'react';

import IndexPage from 'app/client/pages/index';

describe('Pages', () => {
  it('Index page says, Hello world', () => {
    const wrap = shallow(<IndexPage />);
    expect(wrap.find('h1').text()).toBe('Hi this is a test');
  });
});
