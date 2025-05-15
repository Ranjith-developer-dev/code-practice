// setTimeout(() => {
//     console.log("step 1");
//     setTimeout(() => {
//         console.log("step 2");
//         setTimeout(() => {
//             console.log("step 3");
//         }, 1000);
//     }, 1000);
// }, 1000);
// // you can see the callback iss nested inside one by one its makes callback hell

// //we can use promise to to this in optimized way

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// delay(1000)
//     .then(() => {
//         console.log("step 1");
//         return delay(1000);
//     })
//     .then(() => {
//         console.log("step 2");
//         return delay(1000);
//     })
//     .then(() => {
//         console.log("step 3");
//         return delay(1000);
//     });
// //Much cleaner and readable!

//using async await

async function runSteps() {
    await delay(1000);
    console.log("step 1");

    await delay(1000);
    console.log("step 2");

    await delay(1000);
    console.log("step 3");
}

// runSteps();

async function runSteps1(n, ms) {
    for (i = 0; i <= n; i++) {
        await delay(ms);
        console.log(`step ${i}`);
    }
}

runSteps1(5, 1000);
