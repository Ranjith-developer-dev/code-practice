class StringProcessor {
    a: any;
    b: any;
    constructor(a: any, b: any) {
        this.a = a; // Array of strings
        this.b = b; // Random string to be removed (as substring)
    }

    getSecondLargestString() {
        // Filter out words that contain `b` as a substring
        const filteredArray = this.a.filter((word) => !word.includes(this.b));

        if (filteredArray.length < 2) return "Not enough words to find the second largest.";

        // Sort remaining words by length (longest first)
        const sortedWords = filteredArray.sort((a, b) => b.length - a.length);

        return sortedWords[1]; // Second largest string
    }
}

// Example Usage
const a = ["apple", "alan", "november", "banana", "plan"];
const b = "ap"; // Any word that contains "an" should be removed

const processor = new StringProcessor(a, b);

console.log("Second largest string:", processor.getSecondLargestString());

//  Corrected Interview Question:
// You are given:

// a: An array of strings.
// b: A string.
// Task:

// Remove all occurrences of b from array a.
// Find the second-largest string (by length) in the remaining array.

function findSecondLargest() {
  const A = ["apple", "ala", "november"];
  const B = "ajkaippsdfdsalsdve";

  // Check if a string is a subsequence of B
  const isSubsequence = (word) => {
    let bIndex = 0;
    for (const char of word) {
      while (bIndex < B.length && B[bIndex] !== char) bIndex++;
      if (bIndex >= B.length) return false; // Character not found
      bIndex++; // Move to next character in B
    }
    return true;
  };

  // Get valid strings (preserving order from A)
  const validStrings = A.filter(word => isSubsequence(word));

  if (validStrings.length < 2) return null;

  // Extract unique lengths sorted descendingly
  const lengths = [...new Set(validStrings.map(s => s.length))].sort((a, b) => b - a);
  if (lengths.length < 2) return null;

  // Find the FIRST occurrence of the second-largest length
  return validStrings.find(s => s.length === lengths[1]);
}

// Test (output depends on B's content)
console.log(findSecondLargest()); // Returns "ala" if valid

let A = ["apple", "ala", "november"];
let stringData = "ajkaippsdfdsalsdve";
let longestSubstring = "";
for (let str of A) {
    if (stringData.includes(str) && str.length > longestSubstring.length) {
        longestSubstring = str;
    }
}
console.log(longestSubstring); // Output: "ala"
