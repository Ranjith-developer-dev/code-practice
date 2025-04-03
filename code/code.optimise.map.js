/* We try to code a multiple functions and try to optimize*/

//create a function to calculate area
const radius = [2, 5, 7, 8];

const area = function () {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
};

// console.log(area(radius));

// if we try to create another function this is not reusable function - we need to optimize it

const areaFormula = (radius) => {
    return Math.PI * radius * radius;
};

const circumference = (radius) => {
    return Math.PI * radius;
};
const calculate = function (logic, radius) {
    const output = [];
    for (i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

// console.log(calculate(areaFormula, radius));
// console.log(calculate(circumference, radius));

// the above Higher order function is looks similar to map function right ?? - Hope we can recreate map function now

//EX
console.log(radius.map(areaFormula));

//To achieve same behaviors we need to use prototype

Array.prototype.calculate = function (logic) {
    const output = [];
    for (i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

//Same like map
console.log(radius.calculate(areaFormula));
