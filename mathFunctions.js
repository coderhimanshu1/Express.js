function convertAndValidateArray(numString) {
  let numArray = [];

  for (let i = 0; i < numString.length; i++) {
    let num = Number(numString[i]);

    if (Number.isNaN(num))
      return new Error(`${numString[i]} is not a valid number`);

    numArray.push(num);

    return numArray;
  }
}

module.exports = { convertAndValidateArray };
