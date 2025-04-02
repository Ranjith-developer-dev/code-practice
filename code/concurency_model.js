/* Set Timeout Trust issue */

console.log("start");

setTimeout(function cb() {
    console.log("callback");
}, 5000);

console.log("End");

let startTime = new Date().getTime();

let endTime = startTime;

while (endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("while expires");
