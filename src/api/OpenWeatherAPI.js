import axios from 'axios';

import Config from '../constants/Config';

const OpenWeatherAPI = {
  getWeatherForecast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
      params: {
        APPID: Config.APP_ID,
        cnt: Config.FORECAST_REQUEST_DAY_COUNT,
        units: Config.FORECAST_REQUEST_UNITS,
        q: city,
      },
    });
  }
};

export default OpenWeatherAPI;
