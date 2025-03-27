function climbStairs(n: number): number {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 3;
    }

    const ways: number[] = new Array(n + 1);
    ways[1] = 1;
    ways[2] = 2;
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]; //This is because, to reach the current step i, one can either come from step i - 1 by taking one step or from step i - 2 by taking two steps.
    }

    return ways[n];
}


// Example usage:
const numberOfStairs: number = 5;
const ClimbResult: number = climbStairs(numberOfStairs);
console.log("🚀 ~ ClimbResult:", ClimbResult)
