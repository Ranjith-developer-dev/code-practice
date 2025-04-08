setTimeout(() => {
    console.log("step1");
    setTimeout(() => {
        console.log("step2");
        setTimeout(() => {
            console.log("step3");
        }, 1000);
    }, 1000);
}, 1000);

// you can see the callback iss nested inside one by one its makes callback hell

//we can use promise to to this in optimized way

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000)
    .then(() => {
        console.log("step1");
        return delay(1000);
    })
    .then(() => {
        console.log("step2");
        return delay(1000);
    })
    .then(() => {
        console.log("step3");
        //");
        return delay(1000);
    });

//Much cleaner and readable!
