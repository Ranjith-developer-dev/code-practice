function maxLength(arr: string[]): number {
    function isUnique(str: string): boolean {
        const set = new Set(str);
        return set.size === str.length;
    }

    let maxSubsequenceLength = 0;

    function backtrack(index: number, current: string): void {
        // Check if the current subsequence has unique characters
        if (isUnique(current)) {
            // Update the maximum length when the current subsequence is longer
            maxSubsequenceLength = Math.max(maxSubsequenceLength, current.length);
        } else {
            return;
        }

        // Base case: reach the end of array
        if (index === arr.length) {
            return;
        }

        // Include the current string in the subsequence
        backtrack(index + 1, current + arr[index]);

        // Exclude the current string from the subsequence
        backtrack(index + 1, current);
    }

    // Start the backtracking process
    backtrack(0, "");

    return maxSubsequenceLength;
}

// Example usage:
const Strarr: string[] = ["cha", "r", "act", "ers"];
const maxLen: number = maxLength(Strarr);
console.log("🚀 ~ maxLen:", maxLen);
