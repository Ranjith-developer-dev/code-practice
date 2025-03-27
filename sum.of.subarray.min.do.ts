function sumOfMins(arr: number[]): number {
    const MOD = 1e9 + 7;
    const n = arr.length;
    let result = 0;
    const stack: number[] = [];

    for (let i = 0; i <= n; i++) {
        while (stack.length > 0 && (i === n || arr[i] < arr[stack[stack.length - 1]])) {
            const j = stack.pop()!;
            const k = stack.length > 0 ? stack[stack.length - 1] : -1;
            result = (result + arr[j] * (i - j) * (j - k)) % MOD;
        }
        stack.push(i);
    }

    return result;
}

// Example usage
const arr = [3, 1, 2, 4];
const minSUbArray = sumOfMins(arr);
console.log("🚀 ~ minSUbArray:", minSUbArray);
