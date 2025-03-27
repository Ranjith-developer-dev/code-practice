function minFallingPathSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    dp[0] = matrix[0].slice();
    for (let row = 1; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dp[row][col] =
                matrix[row][col] +
                    Math.min(dp[row - 1][Math.max(0, col - 1)], dp[row - 1][col], dp[row - 1][Math.min(cols - 1, col + 1)]);
        }
    }
    return Math.min(...dp[rows - 1]);
}
const matrix = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
];
const output = minFallingPathSum(matrix);
console.log("🚀 ~ output:", output);
//# sourceMappingURL=minimum.falling.path.js.map