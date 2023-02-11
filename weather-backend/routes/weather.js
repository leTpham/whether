"use strict";

const express = require("express");
const router = new express.Router();
const getLatAndLon = require("../apis/locate")
const getWeatherData = require("../apis/weatherData")
const generate = require("../apis/generate")

const { BadRequestError } = require("../expressError");
const { default: axios } = require("axios");


/** GET /weather

 */

// router.get("/", getLatAndLon, getWeatherData)
  // res.send("let me tell you about the weather")
router.get("/", getLatAndLon, getWeatherData, async function suggest (req, res, next) {
  let results = await axios.post("http://localhost:3000/api/generate", {
    body: {"weatherData": req.weatherData}
  })
  res.json(results)
})


module.exports = router;