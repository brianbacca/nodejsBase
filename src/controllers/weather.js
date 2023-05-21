const express = require("express");
const axios = require("axios");

const CityRepository = require("../repositories/cityRepository");
const repository = new CityRepository();

const config = require("../config");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res) => {
  res.json(await repository.findCities(req.params.city));
};

module.exports = {
  cities,
};
