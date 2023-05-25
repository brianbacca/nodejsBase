const express = require("express");

const { findCities } = require("../services/cityService");
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

module.exports = {
  cities,
};
