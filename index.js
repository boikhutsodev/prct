const squareDigits = (num) => {
  // Convert the number to a string
  const numStr = num.toString();

  // Initialize an empty string to hold the result
  let result = "";

  // Loop through each character in the string
  for (let char of numStr) {
    // Convert the character back to a number and square it
    let square = Number(char) ** 2;

    // Convert the squared number back to a string and add it to the result
    result += square.toString();
  }

  // Convert the result string back to a number and return it
  return Number(result);
};

console.log(squareDigits(2112)); //  4114
console.log(squareDigits(3212)); //  9414
console.log(squareDigits(9159)); //  8112581
