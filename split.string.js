//Three methods below

var s = "overpopulation";
var arrnew = [...s]
console.log("🚀 ~ arrnew:", arrnew)

let ar = [];
for (let i = 0; i < s.length; i++) {
    ar.push(s.charAt(i));
}

console.log("🚀 ~ ar:", ar)

//we can do this also
const split = s.split('')
console.log("🚀 ~ split:", split)
