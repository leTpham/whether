const express = require("express");

const app = express();

const { NotFoundError } = require("./expressError");

const weatherRoutes = require("./routes/weather")

const morgan = require("morgan");

// process JSON body => req.body
app.use(express.json());
app.use(morgan("tiny"));

app.use("/weather", weatherRoutes)

/** Homepage renders simple message. */
app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});



/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});


module.exports = app;