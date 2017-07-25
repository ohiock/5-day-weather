import axios from 'axios';

const WeatherService = {
  getWeatherForecast(city) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
        params: {
          APPID: 'a2b600c3b599aed333c39b707a6bc2b9',
          q: city,
        },
      })
      .then((response) => {
        // success
        console.log(response);
      })
      .catch((error) => {
        // failure
        console.log(error);
      });
  },
};

export default WeatherService;
