function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotate(nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1); //sort
    reverse(nums, 0, k - 1); // rotate array
    reverse(nums, k, nums.length - 1); // last portion sort

    return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 4));

console.log(nums); // Output: [5,6,7,1,2,3,4]
