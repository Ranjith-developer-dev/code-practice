var person = {
    name: "Sandip",
    age: 26,
};
var address = {
    addressLine1: "Some Location x",
    addressLine2: "Some Location y",
    city: "Kolkata",
    name: "check",
};

function merge(toObj, fromObj) {
    // Make sure both of the parameter is an object

    if (typeof toObj === "object" && typeof fromObj === "object") {
        for (var from in fromObj) {
            // Assign only own properties not inherited properties
            if (fromObj.hasOwnProperty(from)) {
                toObj[from] = fromObj[from];
            }
        }

        return toObj;
    } else {
        throw "Merge function can apply only on object";
    }
}
//calling function
const test = merge(person, address);

//we can do this also :)
address = { ...person };

console.log(">>>>>>>>>", test);

console.log(">>>>>>>>>", address);
