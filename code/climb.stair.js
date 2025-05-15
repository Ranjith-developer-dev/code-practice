function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    const way = new Array(n + 1);

    way[1] = 1;
    way[2] = 2;

    for (let i = 3; i <= n; i++) {
        way[i] = way[i - 1] + way[i - 2];
    }

    return way[n];
}

// Example usage
const numberOfStairs = 5;
const climbResult = climbStairs(numberOfStairs);
console.log("🚀 ~ climbResult:", climbResult); // Output: 8
