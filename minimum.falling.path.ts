function minFallingPathSum(matrix: number[][]): number {
    const rows: number = matrix.length;
    const cols: number = matrix[0].length;

    // Create a copy of the matrix to store the minimum falling path sums
    const dp: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Copy the first row of the matrix to the dp array
    dp[0] = matrix[0].slice();

    // Iterate through the matrix starting from the second row
    for (let row = 1; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Calculate the minimum falling path sum for the current position
            dp[row][col] =
                matrix[row][col] +
                Math.min(
                    dp[row - 1][Math.max(0, col - 1)], // left or diagonal-left
                    dp[row - 1][col], // directly above
                    dp[row - 1][Math.min(cols - 1, col + 1)] // right or diagonal-right
                );
        }
    }

    // The minimum falling path sum is the minimum value in the last row of dp
    return Math.min(...dp[rows - 1]);
}

// Example usage:
const matrix: number[][] = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
];
const output: number = minFallingPathSum(matrix);
console.log("🚀 ~ output:", output);


// example 

// function minFallingPathSum(matrix: number[][]): number {
//     for (let i = 1; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             let add = matrix[i - 1][j];
//             if (j > 0) add = Math.min(add, matrix[i - 1][j - 1]);
//             if (j < matrix.length - 1) add = Math.min(add, matrix[i - 1][j + 1]);
//             matrix[i][j] += add;
//         }
//     }
//     return Math.min(...matrix[matrix.length - 1]);
// }
