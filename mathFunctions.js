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
    console.log(i);
    if (Number.isNaN(valToNum))
      return new Error(`${numString[i]} is not a valid number`);

    numArray.push(valToNum);
  }
  return numArray;
}

module.exports = { findMedian, findMean, convertAndValidateArray };
