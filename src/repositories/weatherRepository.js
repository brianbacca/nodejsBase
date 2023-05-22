const axios = require("axios");

const config = require("../config");
const logger = require("../loaders/logger");

class WeatherRepository {
  constructor() {
    this.lang = "es";
    this.units = "metric";
    this.pathBase = config.openWatherMap.pathBase;
    this.appid = config.openWatherMap.apiKey;
  }

  async weatherByCoordinates(lon, lat) {
    try {
      const instace = axios.create({
        baseURL: `${this.pathBase}`,
        params: {
          units: this.units,
          lang: this.lang,
          appid: this.appid,
          lon,
          lat,
        },
      });

      const response = await instace.get();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = WeatherRepository;
