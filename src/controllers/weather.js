const express = require("express");
const { findWeather, wetherByCityId } = require("../services/weatherService");
const logger = require("../loaders/logger");
const Success = require("../handlers/successHandler");

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weatherByCityId = async (req, res) => {
  const { city, id } = req.params;
  logger.info(`city: ${city} id: ${id}`);
  const weather = await wetherByCityId(city, id);
  const success = new Success(weather);
  res.json(success);
};

module.exports = {
  weather,
  weatherByCityId,
};
