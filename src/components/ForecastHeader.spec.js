import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import ForecastHeader from './ForecastHeader';

it('renders correctly', () => {
  const tree = renderer.create(
    <ForecastHeader
      weekDay={moment().format('dddddd')}
      today={moment().format('dddd')}
      tomorrow={moment().add(1, 'days').format('dddd')} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
