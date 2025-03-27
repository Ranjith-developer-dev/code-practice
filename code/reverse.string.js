//str = "sandip"
// function reverseString(str) {
//     let character = "";
//     for (let i = 0; i < str.length; i++) {
//         character = str[i] + character;
//     }
//     console.log(character);
// }
// reverseString("hello sandip");


//we can do either way


function reverseString1(str) {
    let character = "";
    for (let s of str) {
        character = s + character;
    }
    console.log(character);
}
reverseString1("hello sandip");


//we can do this also
const str = "hello sandip"

const reverse = str.split("").reverse().join('')
console.log("🚀 ~ reverse:", reverse)


//Reverse a string without changing the position

function reverseString(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

const posreverse = reverseString("hello sandip")

console.log("🚀 ~ posreverse:", posreverse)

