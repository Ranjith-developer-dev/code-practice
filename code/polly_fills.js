// What is polyfill ??
//A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

//For Example we can take bind method

const name = {
    firstName: "Ranjith",
    secondName: "kumar",
};

const printName = function (homeTown, state) {
    console.log(this.firstName + " " + this.secondName + ", " + homeTown + ", " + state);
};

const printMyName = printName.bind(name, "Chennai");

printMyName("TamilNadu");

// use of polyfill, Can we create our own function that exactly act like polyfill ?
// Yessssss, we can and here

//How can we use global function that every method can access - using prototype

Function.prototype.myBind = function (...args) {
    const obj = this;
    const params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    };
};

const printMyName2 = printName.myBind(name, "Chennai");

printMyName2("TamilNadu");


//So we just replicate a exact bind method as our won this is known as polyfills
