function beautifulArray(n: number): number[] {
    if (n === 1) {
        return [1];
    }


    // Divide the problem into even and odd parts
    const evenPart = beautifulArray(Math.floor((n + 1) / 2));
    const oddPart = beautifulArray(Math.floor(n / 2));

    // Combine the two parts by interleaving them
    const result: number[] = [];
    for (const x of evenPart) {
        result.push(2 * x - 1);
    }
    for (const x of oddPart) {
        result.push(2 * x);
    }

    return result;
}

// Example usage:
const number: number = 4;
const result: number[] = beautifulArray(number);
console.log(result);

//Explained
/* 
n =4 
enter into even beauty function with n = 2 - still active
enter into even beauty function with n = 1 - return [1]
enter into odd beauty function with n = 1 - return [1]
result [1,2]
enter into even beauty function with n = 2 - return[1,2]
enter into odd beauty function with n = 2 - still active
enter into even beauty function with n = 1 - return [1]
enter into odd beauty function with n = 1 - return [1]
result [1,2]
enter into odd beauty function with n = 2 - return[1,2]
*/
