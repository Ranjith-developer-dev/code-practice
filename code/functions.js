//Function Statement As same as Function declaration

function a() {
    console.log("a called ");
}
a();

//Function Expression

const b = function () {
    console.log("b called ");
};
b();

// main difference between function statement and function expression is hoisting we can use a before initialization but we cannot use b

//anonymous function - cannot use this, it will create syntax issue, the how ?? - we can declare a anonymous function to a variable

// function() {
// }

// Named function expression
const c = function abc() {
    console.log("c called ");
};
c();

//First class functions

/ * The ability of functions to be used as values and can be passed to an argument to another functions and can be returned from the functions * /;

