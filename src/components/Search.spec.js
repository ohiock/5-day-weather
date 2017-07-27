import React from 'react';
import renderer from 'react-test-renderer';

import Search from './Search';

it('renders correctly', () => {
  const tree = renderer.create(
    <Search searchCallback={() => true} show={true} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
