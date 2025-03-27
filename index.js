function a() {
    var x = 10,
        z = 10;
    return function b() {
        console.log(x);
    };
}

var c = a();

c();

