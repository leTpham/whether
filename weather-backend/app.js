const express = require("express");

const app = express();

const { NotFoundError } = require("./expressError");

const weatherRoutes = require("./routes/weather")
// const wearRoutes = require("./routes/wear.js")
const generate = require('./apis/generate');


const morgan = require("morgan");

// process JSON body => req.body
app.use(express.json());
app.use(morgan("tiny"));

/** Add Access-Control-Allow-Origin header to Express responses.
 *
 * * This middleware function adds the `Access-Control-Allow-Origin` header to Express responses, allowing
 * requests from the specified origin (in this case, `http://localhost:3000`) to access resources on the server.
 * TODO: need to re-configure this when in production
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/weather", weatherRoutes)
app.post('/api/generate', generate);


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