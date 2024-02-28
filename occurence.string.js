//STRING
function countInstances(string, word) {
    return string.split(word).length - 1;
}

const occur = countInstances("hello world hello hello", "hello")
console.log("🚀 ~ occur:", occur)

//ARRAY
function countSubstringOccurrences(array, substring) {
    return array.reduce((count, s) => count + (s.includes(substring) ? 1 : 0), 0);
}

// Example usage:
let array = ["apple", "banana", "pineapple", "orange", "grape"];
let substring = "apple";
let occurrences = countSubstringOccurrences(array, substring);
console.log(`The substring '${substring}' occurs ${occurrences} times in the array.`);
