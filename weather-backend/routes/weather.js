"use strict";

const express = require("express");
const router = new express.Router();
const dotenv = require('dotenv');
const axios = require("axios");

const { BadRequestError } = require("../expressError");

dotenv.config();
const API_KEY = process.env.API_KEY;

/** GET /weather/location
 * query should be {city, state?, country?, limit}
 *
 */
router.get("/location", async function (req, res, next) {
  const {city, state, country, limit} = req.query;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${API_KEY}`)
      console.log("response", response)
    return res.json(response.data)
  }
  catch(err) {
    res.send(err)
  }

  let dummy = { lat: 0, long: 0 };
  return res.json(dummy);
});

module.exports = router;