// const fs = require("fs");

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 700); //CBQ

// setImmediate(() => {
//     console.log("Immediate 1");
// }); // CBQ

// process.nextTick(() => {
//     console.log("nextTick 1");
// }); //CBQ // 1st pr

// new Promise((resolve) => {
//     resolve("Resolved 1");
// }).then((res) => {
//     console.log(res);
// }); // MTQ

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 300); //CBQ

// fs.readFile("example.txt", "utf8", (err, data) => {
//     console.log("File Read Complete:", data);
// }); //MTQ

// console.log("End");


function example() {
    {
        let a = 1;
        var b = 2;
    }
    console.log(b);
    console.log(a);
}

// example();

var obj = {
    name: "somename",
    fn: () => this.name,
    fn2: function () { return this.name }
}
console.log(obj.fn()) 
console.log(obj.fn2()) 

let a = { name: "John", "address": { "city": "Delhi" } }
let b = { ...a };
b.address.city = "Mumbai"
b.name = "Harry"
console.log(a.address.city) // Mumbai
console.log(a.name) // Harry



setTimeout(() => {
    console.log("setTimeout 1");
    process.nextTick(() => console.log("nextTick inside timeout"));
    Promise.resolve().then(() => console.log("promise inside timeout"));
}, 0);

Promise.resolve().then(() => console.log("promise 1"));

process.nextTick(() => console.log("nextTick 1"));

setTimeout(() => {
    console.log("setTimeout 2");
}, 0);

console.log("sync");



const user = {
  name: 'Alice',
  greet: function () {
    setTimeout(function () {
      console.log(`Hi, ${this.name}`);
    }, 0);
  }
};
user.greet();
