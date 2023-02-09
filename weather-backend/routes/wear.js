// "use strict";

// const express = require("express");
// const router = new express.Router();
// const dotenv = require('dotenv');
// const axios = require("axios");
// const { BadRequestError } = require("../expressError");

// dotenv.config();
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// /**
//  * POST
//  */
// router.post("/generate", async function (req, res, next) {
//   // res.send("let me tell you about the weather")
//   console.log("req.location in weather route", req.location)
//   const {lat, lon} = req.location;
//   try {
//     // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`);
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${WEATHER_API_KEY}`);
//       console.log("response in weather route", response)
//       res.json(response.data)
//   }
//   catch (err) {
//     res.send(err)
//   }
// })