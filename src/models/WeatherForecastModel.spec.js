import WeatherForecastModel from './WeatherForecastModel';

const rawForecast = {
  city: {
    name: 'Boulder'
  },
  list: [
    {
      dt: 12345,
      temp: {
        day: 100,
      },
      weather: [
        {
          main: 'Clouds',
          description: 'Very cloudy',
          icon: '01d',
        }
      ]
    }
  ]
};

const model = new WeatherForecastModel(rawForecast);
const day = model.days[0];

describe('WeatherForecastModel', () => {
  test('has the correct city name', () => {
    expect(model.city).toBe('Boulder');
  });

  test('has the correct date', () => {
    expect(day.date).toBe(12345);
  });

  test('has the correct temp', () => {
    expect(day.temp).toBe(100);
  });

  test('has the correct condition', () => {
    expect(day.condition).toBe('Clouds');
  });

  test('has the correct description', () => {
    expect(day.description).toBe('Very cloudy');
  });

  test('has the correct icon', () => {
    expect(day.icon).toBe('01d');
  });
});
