const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getAllUsers = (req, res) => {
  const user = [
    {
      id: 1,
      name: "John",
      age: 30,
    },
    {
      id: 2,
      name: "Doe",
      age: 40,
    },
  ];
  res.json(user);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createUser = (req, res) => {
  const user = req.body;
  user.id = Date.now();
  const result = {
    message: "User created",
    user,
  };
  res.status(201).json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateUser = (req, res) => {
  const { id } = req.params;
  const user = req.body;
  user.id = id;
  user.name = req.body.name + " Doe";
  const result = {
    message: "User update",
    user,
  };

  res.json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updatePartialUser = (req, res) => {
  const { id } = req.params;
  const user = req.body;

  user.id = id;
  user.name = "John Doe";
  const result = {
    message: "User update",
    user,
  };

  res.json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const deleteUser = (req, res) => {
  const { id } = req.params;
  const result = {
    message: `User with id:${id} deleted`,
  };
  res.json(result);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  updatePartialUser,
  deleteUser,
};
