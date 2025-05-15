function findErrorNums(nums: number[]): number[] {
    const n: number = nums.length;
    const expectedSum: number = (n * (n + 1)) / 2;
    console.log("🚀 ~ findErrorNums ~ expectedSum:", expectedSum)
    console.log(">>>>>>>>>>>>>>", [...new Set(nums)]);
    const actualSum: number = [...new Set(nums)].reduce((sum, num) => sum + num, 0);
    console.log("🚀 ~ findErrorNums ~ actualSum:", actualSum)
    const missingNumber: number = expectedSum - actualSum;
    console.log("🚀 ~ findErrorNums ~ missingNumber:", missingNumber)

    // Find the duplicate number
    const numSet: Set<number> = new Set();
    let duplicateNumber: number = 0;

    for (const num of nums) {
        if (numSet.has(num)) {
            duplicateNumber = num;
            break;
        }
        numSet.add(num);
    }

    return [duplicateNumber, missingNumber];
}

// Example usage:
const nums: number[] = [1, 2, 2, 4];
const mismatch: number[] = findErrorNums(nums);
console.log("🚀 ~ mismatch:", mismatch)
