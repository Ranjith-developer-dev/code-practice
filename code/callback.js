// Callback

/ * A function that passes into another function called callback * /;

function x(y) {
    console.log("x is called");
    y();
}

x(function y() {
    console.log("y is called ");
});

//callback can change javascript to act as asynchronous programming

setTimeout(function () {
    console.log("call timer");
}, 5000);
