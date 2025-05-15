// let total = 0;

// // If you need to format `total` as `0.0` when it's zero
// if (total === 0) {
//     total = total.toFixed(1); // This will convert the number 0 to the string "0.0"
// }

// console.log(total); // Outputs "0.0"

// if (String(true)) {
//     let check = "true";

//     total = check || "true" === "true"; // This will convert the number 0 to the string "0.0"
// }

// console.log(typeof total); // Outputs "0.0"

// process.nextTick(() => {
//     console.log("This runs after the current function finishes.");
// });
// console.log("This runs first.");

// if (3 > 2 > 1) {
//     console.log("true");
// } else {
//     console.log("false");
// }

function outerFunction() {
    var count = 0;

    function innerFunction() {
        count++;
        console.log(count);
    }

    return innerFunction;
}

const firstCall = outerFunction();
const secondCall = outerFunction();


// firstCall();
// firstCall();
// secondCall();
// secondCall();

// let counter = 0;
// for (var i = 1; i <= 10; i++) { 
//   counter+= i;
// }
// console.log(counter);
// console.log(i);

// let obj = {
//     a: 1,
//     b: function () {
//         return this.a;
//     },
// };

// let func = obj.b;

// console.log(obj.b());
// console.log(func());

const customerorderedFood = ["pizza", "burger", "momos", "noodles", "coke", "mineral bottle"];
const food =
    (foodFn) =>
    (...args) => {
        console.log("🚀 ~ args:", args)
        return foodFn(...args);
    };

const detailedFoodOrderedList = (...args) => {
    console.log("🚀 ~ detailedFoodOrderedList ~ args:", args)
    console.log(`Ordered foods are ${args}`);
};

const order = food(detailedFoodOrderedList);
order(customerorderedFood);
