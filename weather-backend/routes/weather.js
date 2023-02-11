"use strict";

const express = require("express");
const router = new express.Router();
const getLatAndLon = require("../apis/locate")
const getWeatherData = require("../apis/weatherData")

const { BadRequestError } = require("../expressError");




/** GET /weather
 
 */

router.get("/", getLatAndLon, getWeatherData)
  // res.send("let me tell you about the weather")



module.exports = router;