const express = require("express");

const { findCities } = require("../services/cityService");
const { findWeather } = require("../services/weatherService");
const Success = require("../handlers/successHandler");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res) => {
  const cities = await findCities(req.params.city);
  const success = new Success(cities);
  res.json(success);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weather = async (req, res) => {
  const { lon, lat } = req.query;

  const weather = await findWeather(lon, lat);
  const success = new Success(weather);
  res.json(success);
};

module.exports = {
  cities,
  weather,
};
