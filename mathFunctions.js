// Calculate frequency of number in an array
function calculateFrequency(array) {
  return array.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

// Function to calculate mode
function findMode(array) {
  let freqCounter = calculateFrequency(array);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

// Function to calculate median
function findMedian(array) {
  // sort and get the middle element
  array.sort((a, b) => a - b);
  let middleIndex = Math.floor(array.length / 2);

  let median;

  if (array.length % 2 === 0) {
    median = (array[middleIndex] + array[middleIndex - 1]) / 2;
  } else {
    median = array[middleIndex];
  }
  return median;
}

// Function to calculate mean / average
function findMean(array) {
  if (array.length === 0) return 0;
  return (
    array.reduce(function (acc, cur) {
      return acc + cur;
    }) / array.length
  );
}

// Convert input strings to an array and validate if the entered query contains numbers
function convertAndValidateArray(numString) {
  let numArray = [];

  for (let i = 0; i < numString.length; i++) {
    let valToNum = Number(numString[i]);

    if (Number.isNaN(valToNum))
      return new Error(`${numString[i]} is not a valid number`);

    numArray.push(valToNum);
  }
  return numArray;
}

module.exports = { findMode, findMedian, findMean, convertAndValidateArray };
