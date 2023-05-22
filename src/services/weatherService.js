const WeatherRepository = require("../repositories/weatherRepository");

const logger = require("../loaders/logger");

const repository = new WeatherRepository();

const findWeather = async (lon, lat) => {
  const weather = await repository.weatherByCoordinates(lon, lat);

  logger.silly(`Weather: ${JSON.stringify(weather)}`);

  return {
    name: weather.name,
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    teperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
  };
};

module.exports = {
  findWeather,
};
