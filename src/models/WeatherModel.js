class WeatherModel {
  constructor(api) {
    this.api = api;
  };

  getWeatherForecast(city) {
    const rawForecast = this.api.getWeatherForecast(city);

    return {

    };
  };
};

export default WeatherModel;
