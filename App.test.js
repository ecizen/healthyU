import React from 'react';
import renderer from 'react-test-renderer';

import Home from './component/Home';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
