import Config from '../constants/Config';

class WeatherForecastModel {
  constructor(rawForecast) {
    this.success = true;
    this.city = (rawForecast.city && rawForecast.city.name) || Config.DATA_NOT_AVAILABLE;
    this.days = [];

    rawForecast.list.forEach(item => {
      this.days.push({
        temp: (item.temp && item.temp.day) || Config.DATA_NOT_AVAILABLE,
        condition: (item.weather[0] && item.weather[0].main) || Config.DATA_NOT_AVAILABLE,
        description: (item.weather[0] && item.weather[0].description) || Config.DATA_NOT_AVAILABLE,
        icon: (item.weather[0] && item.weather[0].icon) || Config.DATA_NOT_AVAILABLE,
      });
    });
  };
};

export default WeatherForecastModel;
