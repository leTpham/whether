"use strict";

const express = require("express");
const router = new express.Router();
const dotenv = require('dotenv');
const axios = require("axios");
const {getLatAndLon} = require("../middleware/locate")
const { BadRequestError } = require("../expressError");

dotenv.config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


/** GET /weather
 *
 * TODO: frontend needs form to fill in query
 * eg: http://localhost:3000/weather?city=oakland&state=ca&country=us&limit=5
 * OR with space, add "%20"
 * http://localhost:3000/weather?city=new%20york&state=ny&country=us&limit=5
 */

router.get("/", getLatAndLon, async function (req, res, next) {
  // res.send("let me tell you about the weather")
  console.log("req.location in weather route", req.location)
  const {lat, lon} = req.location;
  try {
    // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${WEATHER_API_KEY}`);
      console.log("response in weather route", response)
      res.json(response.data)
  }
  catch (err) {
    res.send(err)
  }
})



module.exports = router;