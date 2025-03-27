function multiply(number1, number2) {
  if (number2 !== undefined) {
    return number1 * number2;
  }
  return function doMultiply(number2) {
    return number1 * number2;
  };
}

// const test = multiply(4, 5); // => 20


const double = multiply(2)(5);


console.log(">>>>", double)

// double(11); // => 22


  