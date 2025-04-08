//To determine whether a given year is a leap year in JavaScript, use the following conditions:

/* 
A year is a leap year if:
It is divisible by 4, AND
It is not divisible by 100, unless
It is also divisible by 400.
*/

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let year = 2025;

const result = isLeapYear(year);

if (result) {
    console.log(` ${year} is a leap year`);
} else {
    console.log(` ${year} is not a leap year`);
}

//swap array
let a = 5,
    b = 10;

[a, b] = [b, a];

console.log(a, b); // Output: 10, 5

/*
Step 1: Variables are declared and initialized
--------------------------------------------
Memory:
┌─────────┬─────┐
│ a       │  5  │
├─────────┼─────┤
│ b       │ 10  │
└─────────┴─────┘

Step 2: [a, b] = [b, a] is executed
--------------------------------------------
First, the right side [b, a] is evaluated:
[b, a] → [10, 5]

Then, destructuring assignment happens:
[a, b] = [10, 5]
  ↓  ↓    ↓  ↓
  a=10    b=5

Memory after swap:
┌─────────┬─────┐
│ a       │ 10  │ ← changed from 5 to 10
├─────────┼─────┤
│ b       │  5  │ ← changed from 10 to 5
└─────────┴─────┘

Step 3: console.log(a, b) outputs:
--------------------------------------------
10 5
*/
