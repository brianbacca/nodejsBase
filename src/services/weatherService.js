const WeatherRepository = require("../repositories/weatherRepository");
const CityReository = require("../repositories/cityRepository");

const weatherRepository = new WeatherRepository();
const cityRepository = new CityReository();

const logger = require("../loaders/logger");

const findWeather = async (lon, lat) => {
  const weather = await weatherRepository.weatherByCoordinates(lon, lat);

  return {
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    teperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
  };
};

const wetherByCityId = async (city, id) => {
  const cities = await cityRepository.findCities(city);
  const cityData = cities.features.find((e) => e.id === id);

  debugger;
  return findWeather(
    cityData.geometry.coordinates[0],
    cityData.geometry.coordinates[1]
  );
};

module.exports = {
  findWeather,
  wetherByCityId,
};
