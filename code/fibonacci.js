var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    // console.log(fib[i]);
}
// console.log(fib);

function testFib(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);

        fib.push(fib[i]);
    }

    return fib;
}
const result = testFib(10);
console.log("🚀 ~ check:", result);

//fibo number or not
function isFibonacci(n) {
    // Check if the number is 0 or 1
    if (n === 0 || n === 1) {
        return true;
    }

    let a = 0;
    let b = 1;

    // Generate Fibonacci numbers until we reach a number greater than or equal to n
    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    // If the last Fibonacci number generated is equal to n, then n is a Fibonacci number
    return b === n;
}
const check = isFibonacci(21);
// console.log("🚀 ~ check:", check);
// isFibonacci(3)

function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
const checNum = fibonacci(10);
console.log("🚀 ~ checNum:", checNum);
