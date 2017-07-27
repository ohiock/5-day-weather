import OpenWeatherAPI from './OpenWeatherAPI';

test('should load a weather forecast', () => {
  return OpenWeatherAPI.getWeatherForecast('Boulder')
    .then(response => {
      expect(response).toBeDefined();
      expect(response.status).toBe(200);
    });
});
