//Closure examples

function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        var a = 10;
        return inner;
    }
    return outer;
}

let a = 100;
// outest()("Hi")(); // this is another method to invoke a function inside function

const close = outest()("Hi");
close(); // This is similar method as above

//Advantages
// -  module pattern
// -  function currying
//  - memos
//  - data hiding & encapsulation

//Disadvantages
// -  Accumulate lot of memory - memory consumption 
// -  Will freeze the browser if not handles properly 

// Data hiding & encapsulation example

function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    };
}

const counter1 = counter();

counter1();
counter1();

// Using constructor function

function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    };
    this.decrementCounter = function () {
        count--;
        console.log(count);
    };
}

var counterConstruct = new Counter();

counterConstruct.incrementCounter();
counterConstruct.decrementCounter();

// we can use class also

class CounterClass {
    constructor() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.log(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}

var counterConstruct = new CounterClass();

counterConstruct.incrementCounter();
counterConstruct.decrementCounter();

// Reference:
//https://www.youtube.com/watch?v=t1nFAMws5FI&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=14
