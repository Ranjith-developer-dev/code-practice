function maxLength(arr) {
    function isUnique(str) {
        const set = new Set(str);
        return set.size === str.length;
    }
    let maxSubsequenceLength = 0;
    function backtrack(index, current) {
        if (isUnique(current)) {
            maxSubsequenceLength = Math.max(maxSubsequenceLength, current.length);
        }
        else {
            return;
        }
        if (index === arr.length) {
            return;
        }
        backtrack(index + 1, current + arr[index]);
        backtrack(index + 1, current);
    }
    backtrack(0, "");
    return maxSubsequenceLength;
}
const Strarr = ["cha", "r", "act", "ers"];
const maxLen = maxLength(Strarr);
console.log("🚀 ~ maxLen:", maxLen);
//# sourceMappingURL=max.len.concat.uniq.str.js.map