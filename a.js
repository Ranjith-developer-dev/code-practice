let total = 0;

// If you need to format `total` as `0.0` when it's zero
if (total === 0) {
    total = total.toFixed(1); // This will convert the number 0 to the string "0.0"
}

console.log(total); // Outputs "0.0"


if (String(true)) {

    let check = "true"
    
    total = check || "true" === "true"; // This will convert the number 0 to the string "0.0"
}

console.log( typeof total); // Outputs "0.0"
