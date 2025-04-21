const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is first");
    }, 15000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is Second");
    }, 10000);
});

function getData() {
    try {
        console.log("i am the first one");

        p2.then((res) => console.log(res));

        p1.then((res) => console.log(res));

        console.log("ending the function");
    } catch (err) {
        console.log(err);
    }
}

async function getAsyncData() {
    try {
        console.log("i am the first one");

        const data = await p1;
        console.log("🚀 ~ getData ~ data:", data);

        const data2 = await p2;
        console.log("🚀 ~ getData ~ data2:", data2);

        console.log("ending the function");
    } catch (err) {
        console.log(err);
    }
}

// getData();

getAsyncData();
