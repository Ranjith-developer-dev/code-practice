function findErrorNums(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    console.log(">>>>>>>>>>>>>>", [...new Set(nums)]);
    const actualSum = [...new Set(nums)].reduce((sum, num) => sum + num, 0);
    const missingNumber = expectedSum - actualSum;
    const numSet = new Set();
    let duplicateNumber = 0;
    for (const num of nums) {
        if (numSet.has(num)) {
            duplicateNumber = num;
            break;
        }
        numSet.add(num);
    }
    return [duplicateNumber, missingNumber];
}
const nums = [1, 2, 2, 4];
const mismatch = findErrorNums(nums);
console.log("🚀 ~ mismatch:", mismatch);
//# sourceMappingURL=set.missmatch.js.map