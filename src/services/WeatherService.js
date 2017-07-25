import OpenWeatherAPI from '../api/OpenWeatherAPI';
import WeatherModel from '../models/WeatherModel';

const WeatherService = {
  getWeatherForecast(city) {
    const model = new WeatherModel(OpenWeatherAPI);

    return model.getWeatherForecast(city);
  },
};

export default WeatherService;
