function longestCommonSubsequence(text1: string, text2: string): number {
    const FirstTextLen = text1.length,
        SecondtextLen = text2.length;

    let dp = new Array(SecondtextLen + 1).fill(0);

    for (let i = 1; i <= FirstTextLen; i += 1) {
        const currDp = [...dp];
        for (let j = 1; j <= SecondtextLen; j += 1) {
            if (text1[i - 1] === text2[j - 1]) {
                currDp[j] = 1 + dp[j - 1];
            } else {
                currDp[j] = Math.max(dp[j], currDp[j - 1]);
            }
        }

        dp = currDp;
    }

    return dp[SecondtextLen];
}


// Example usage:
const text1 = "abcde";
const text2 = "ace";
const commonSub = longestCommonSubsequence(text1, text2);
console.log("🚀 ~ commonSub:", commonSub)
