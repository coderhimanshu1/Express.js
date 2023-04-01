const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const {
  findMode,
  findMedian,
  findMean,
  convertAndValidateArray,
} = require("./mathFunctions");
// Route to calculate mean/ average
app.get("/mean", (req, res, next) => {
  try {
    // Throw error if empty query strings
    if (!req.query.nums) throw new ExpressError("Missing Query Inputs", 400);

    let numString = req.query.nums.split(",");

    let nums = convertAndValidateArray(numString);
    let result = {
      operation: "mean",
      value: findMean(nums),
    };

    return res.send(result);
  } catch (err) {
    next(err);
  }
});

// Route to calculate median
app.get("/median", (req, res, next) => {
  try {
    // Throw error if empty query strings
    if (!req.query.nums) throw new ExpressError("Missing Query Inputs", 400);

    let numString = req.query.nums.split(",");
    let nums = convertAndValidateArray(numString);
    let result = {
      operation: "median",
      value: findMedian(nums),
    };

    return res.send(result);
  } catch (err) {
    next(err);
  }
});

// Route to calculate mode
app.get("/mode", (req, res, next) => {
  // Throw error if empty query strings
  if (!req.query.nums) throw new ExpressError("Missing Query Inputs", 400);

  let numString = req.query.nums.split(",");
  let nums = convertAndValidateArray(numString);
  let result = {
    operation: "mode",
    value: findMode(nums),
  };

  return res.send(result);
});

// If no other route matches, respond with a 404
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let message = err.msg;

  return res.json({
    message: message,
    status: status,
  });
});

//   start app at port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
