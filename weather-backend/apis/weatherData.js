
const dotenv = require('dotenv');
const axios = require("axios");
dotenv.config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

/** Call openWeatherAPI with latitude and lontitude gathered from locate.js
 * to fetch weather data of the location
 * *
 * TODO: frontend needs form to fill in query
 * eg: http://localhost:3000/weather?city=oakland&state=ca&country=us&limit=5
 * OR with space, add "%20"
 * http://localhost:3000/weather?city=new%20york&state=ny&country=us&limit=5
 */
async function getWeatherData (req, res, next) {
  // res.send("let me tell you about the weather")
  const {lat, lon} = req.location;
  try {
    // `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={API key}`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${WEATHER_API_KEY}&units=metric`);
      req.weatherData = response.data.current;
      // res.json(response.data.current)
      next();
  }
  catch (err) {
    res.send(err)
  }
}

module.exports = getWeatherData;