import React from 'react';
import renderer from 'react-test-renderer';

import WeatherForecast from './WeatherForecast';

it('renders correctly', () => {
  const forecast = {
    city: '',
    days: []
  }

  const tree = renderer.create(
    <WeatherForecast weatherForecast={forecast} goBackCallback={() => true} show={true} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
