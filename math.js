const express = require("express");
const app = express();
const { findMean, convertAndValidateArray } = require("./mathFunctions");
// Route to calculate mean/ average
app.get("/mean", (req, res) => {
  // Throw error if empty query strings
  if (!req.query.nums) throw Error("Missing Query Inputs", 400);

  let numString = req.query.nums.split(",");

  let nums = convertAndValidateArray(numString);
  let result = {
    operation: "mean",
    value: findMean(nums),
  };

  return res.send(result);
});

// Route to calculate median
app.get("/median", (req, res) => {
  // Throw error if empty query strings
  if (!req.query.nums) throw Error("Missing Query Inputs", 400);

  let numString = req.query.nums.split(",");
  let nums = convertAndValidateArray(numString);
  let result = {
    operation: "median",
    value: findMedian(nums),
  };

  return res.send(result);
});

// Route to calculate mode
app.get("/mode", (req, res) => {
  // Throw error if empty query strings
  if (!req.query.nums) throw Error("Missing Query Inputs", 400);

  let numString = req.query.nums.split(",");
  let nums = convertAndValidateArray(numString);
  let result = {
    operation: "mode",
    value: findMode(nums),
  };

  return res.send(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
