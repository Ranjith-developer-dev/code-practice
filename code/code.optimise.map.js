/* We try to code a multiple functions and try to optimize*/

//create a function to calculate area
const radius = [2, 5, 7, 8];
debugger;
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
// console.log(radius.map(areaFormula));

//To achieve same behaviors we need to use prototype

Array.prototype.calculate = function (logic) {
    const output = [];
    for (i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

//Same like map
// console.log(radius.calculate(areaFormula));

// Reduce

//sum example

const arr = [2, 4, 6, 8];

function findSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(findSum(arr));

// Here reduce take place you can see reduce has two parameters one is accumulator and current
// --> from above example acc is meant to sum and current is meant to arr[i]

const sumOfArray = arr.reduce(function (sum, cur) {
    sum = sum + cur;
    return sum;
}, 0); // 0  is a initial value same like sum = 0

console.log(sumOfArray);

//lets play with another example

const users = [
    { name: "ranjith", age: 26 },
    { name: "suman", age: 26 },
    { name: "barani", age: 29 },
];

//Need to find a age with count { 26:2, 29:1}

const output = users.reduce(function (acc, cur) {
    if (acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age];
    } else {
        acc[cur.age] = 1;
    }

    return acc;
}, {}); //why object? - because the desired output needs to be in object
console.log(output);

// Counting occurrences of elements

const words = ["apple", "banana", "apple", "orange", "banana", "banana"];

const wordCount = new Map();

words.forEach((word) => wordCount.set(word, (wordCount.get(word) || 0) + 1));

console.log("🚀 ~ wordCount:", wordCount);

const person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key, person[key]);
}

//Every
const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: true

const obj = { name: "Alice" };

console.log(obj + " is here!");

//5. Customizing toString()

const person1 = {
    name: "ranjith",
    toString() {
        return this.name;
    },
};

console.log(person1 + " is here!");
