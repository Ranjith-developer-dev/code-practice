function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 3;
    }
    const ways = new Array(n + 1);
    ways[1] = 1;
    ways[2] = 2;
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
}
const numberOfStairs = 5;
const ClimbResult = climbStairs(numberOfStairs);
console.log("🚀 ~ ClimbResult:", ClimbResult);
//# sourceMappingURL=climb.stair.js.map