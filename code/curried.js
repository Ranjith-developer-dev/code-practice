function multiply(number1) {

  return function doMultiply(number2) {
    return number1 * number2;
  };
}

// const test = multiply(4, 5); // => 20


const double = multiply(2)(5);


console.log(">>>>", double)

// double(11); // => 22


  