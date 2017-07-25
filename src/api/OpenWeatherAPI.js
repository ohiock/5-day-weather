import axios from 'axios';

import Config from '../constants/Config';

const OpenWeatherAPI = {
  getWeatherForecast(city) {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
      params: {
        APPID: Config.APP_ID,
        q: city,
      },
    })
    .then((response) => {
      if (response && response.status === 200) {
        return response.data
      }

      return {};
    })
    .catch((error) => {
      // failure
      console.log(error);
    });
  }
};

export default OpenWeatherAPI;
