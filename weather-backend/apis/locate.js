const express = require("express")
const axios = require("axios")

const dotenv = require('dotenv');
dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

/** Middleware: Locate user by calling Geocoding api.
 */

async function getLatAndLon(req, res, next) {
  const { city, state, country, limit } = req.query;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${WEATHER_API_KEY}`);

    const { lat, lon } = response.data[0];
    req.location = { lat, lon };
    next();
  }
  catch (err) {
    next(err);
  }
}

module.exports =  getLatAndLon ;