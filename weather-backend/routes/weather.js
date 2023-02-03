"use strict";

const express = require("express");
const router = new express.Router();
const dotenv = require('dotenv');
const axios = require("axios");
const {getLatAndLon} = require("../middleware/locate")
const { BadRequestError } = require("../expressError");

dotenv.config();
const API_KEY = process.env.API_KEY;


/** GET /weather
 */

router.get("/", getLatAndLon, async function (req, res, next) {
  // res.send("let me tell you about the weather")
  console.log("req.location in weather route", req.location)
  const {lat, lon} = req.location;
  try {
    //TODO: handle exclude
    // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`);
      console.log("response in weather route", response)
      res.json(response.data)
  }
  catch (err) {
    res.send(err)
  }
})



module.exports = router;