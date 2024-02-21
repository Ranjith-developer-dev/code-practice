const debounce = (func, time) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, time);
    };
};

console.log("🚀 ~ debounce:", debounce)

const debounceTest = () => {
    console.log("testing debounce");
};

debounce(debounceTest, 1000);