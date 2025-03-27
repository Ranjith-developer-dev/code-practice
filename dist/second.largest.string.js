class StringProcessor {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getSecondLargestString() {
        const filteredArray = this.a.filter((word) => !word.includes(this.b));
        if (filteredArray.length < 2)
            return "Not enough words to find the second largest.";
        const sortedWords = filteredArray.sort((a, b) => b.length - a.length);
        return sortedWords[1];
    }
}
const a = ["apple", "alan", "november", "banana", "plan"];
const b = "ap";
const processor = new StringProcessor(a, b);
console.log("Second largest string:", processor.getSecondLargestString());
function findSecondLargest() {
    const A = ["apple", "ala", "november"];
    const B = "ajkaippsdfdsalsdve";
    const isSubsequence = (word) => {
        let bIndex = 0;
        for (const char of word) {
            while (bIndex < B.length && B[bIndex] !== char)
                bIndex++;
            if (bIndex >= B.length)
                return false;
            bIndex++;
        }
        return true;
    };
    const validStrings = A.filter(word => isSubsequence(word));
    if (validStrings.length < 2)
        return null;
    const lengths = [...new Set(validStrings.map(s => s.length))].sort((a, b) => b - a);
    if (lengths.length < 2)
        return null;
    return validStrings.find(s => s.length === lengths[1]);
}
console.log(findSecondLargest());
let A = ["apple", "ala", "november"];
let stringData = "ajkaippsdfdsalsdve";
let longestSubstring = "";
for (let str of A) {
    if (stringData.includes(str) && str.length > longestSubstring.length) {
        longestSubstring = str;
    }
}
console.log(longestSubstring);
//# sourceMappingURL=second.largest.string.js.map