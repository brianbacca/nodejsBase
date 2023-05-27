const axios = require("axios");

const config = require("../config");
const logger = require("../loaders/logger");

class CityRepository {
  constructor() {
    this.language = "es";
    this.country = "ar";
    this.pathBase = config.mapbox.pathBase;
    this.apiKey = config.mapbox.apiKey;
  }

  async findCities(city) {
    // throw new Error("Prueba");
    try {
      const instace = axios.create({
        baseURL: `${this.pathBase}${city}.json`,
        params: {
          access_token: this.apiKey,
          country: this.country,
          types: "place,region,locality",
          language: this.language,
        },
      });

      const response = await instace.get();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
