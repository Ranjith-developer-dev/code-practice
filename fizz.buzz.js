for (let i = 1; i <= 100; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        // Is the number a multiple of 3?
        console.log('fizz')
        // Is the number a multiple of 5?
    } else if (i % 5 === 0) {
        console.log(`buzz %d is %d`, i, i % 5)
    } else {
        console.log(i)
    }
}