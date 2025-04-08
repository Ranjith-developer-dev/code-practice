//Write a JavaScript function that takes a string as input and finds the first repeating character.
// The function should also return the count of that character when it first repeats.

/* Example 1
Input: "abcaade"
Output: First repeating character: 'a' with count: 2
Example 2
Input: "abcdef"
Output: No repeating character found */

//trying with reduce

function findRepeatingCharacters(input) {
    const output = [...input].reduce(
        (acc, char) => {
            if (acc.found) {
                return acc;
            }
            if (acc.charMap[char]) {
                return {
                    found: true,
                    char: char,
                    count: acc.charMap[char] + 1,
                    charMap: acc.charMap,
                };
            } else {
                acc.charMap[char] = 1;
                return acc;
            }
        },
        { found: false, char: null, count: 0, charMap: {} }
    );
    console.log(output);

    if (output.found) {
        return `First repeating character: '${output.char}' with count: ${output.count}`;
    } else {
        return "No repeating character found";
    }
}

const input1 = "abcaade";
console.log(findRepeatingCharacters(input1));

//using straightforward approach

function firstRepeatingCharWithCount(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
            return { char, count: charCount[char] };
        } else {
            charCount[char] = 1;
        }
    }
    return null;
}

let input = "abcaade";
let result = firstRepeatingCharWithCount(input);

if (result) {
    console.log(`First repeating character: '${result.char}' with count: ${result.count}`);
} else {
    console.log("No repeating character found");
}
