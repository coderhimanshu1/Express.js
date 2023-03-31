// Function to calculate mean / average
function findMean(nums) {
  console.log(nums);
  if (nums.length === 0) return 0;
  return (
    nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
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

module.exports = { findMean, convertAndValidateArray };
