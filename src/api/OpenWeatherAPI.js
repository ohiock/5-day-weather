import axios from 'axios';

import Config from '../constants/Config';

const OpenWeatherAPI = {
  getWeatherForecast(city) {
    const url = process.env.NODE_ENV === Config.ENVIRONMENT_PRODUCTION
      ? `${Config.PROXY_URL}http://api.openweathermap.org/data/2.5/forecast/daily`
      : 'http://api.openweathermap.org/data/2.5/forecast/daily';

    return axios.get(url, {
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
