function beautifulArray(n) {
    if (n === 1) {
        return [1];
    }
    const evenPart = beautifulArray(Math.floor((n + 1) / 2));
    const oddPart = beautifulArray(Math.floor(n / 2));
    const result = [];
    for (const x of evenPart) {
        result.push(2 * x - 1);
    }
    for (const x of oddPart) {
        result.push(2 * x);
    }
    return result;
}
const number = 4;
const result = beautifulArray(number);
console.log(result);
//# sourceMappingURL=beautiful.array.js.map