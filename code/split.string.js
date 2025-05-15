//Four methods below

//method 1
var s = "overpopulation";
var arrnew = [...s];


console.log("🚀 ~ arrnew:", arrnew);

//method 2
let ar = [];
for (let i = 0; i < s.length; i++) {
    ar.push(s.charAt(i));
}

console.log("🚀 ~ ar:", ar);

//method 3
const split = s.split("");
console.log("🚀 ~ split:", split);


//method 4
let arr = [];
for (const a of s) {
    arr.push(a);
}

console.log("🚀 ~ arr:", arr);



