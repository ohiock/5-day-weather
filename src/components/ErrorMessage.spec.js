import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from './ErrorMessage';

it('renders correctly', () => {
  const tree = renderer.create(
    <ErrorMessage errorMessage={'Error'} show={true} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
