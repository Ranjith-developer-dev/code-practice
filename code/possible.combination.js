const n = "367";

function possibleCombination(n) {
    let result = [];

    function loopthrough(initial, remaining) {
        if (initial.length === 3) {
            result.push(initial);
        }

        for (let i = 0; i < remaining.length; i++) {
            loopthrough(initial + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }

    loopthrough("", n);
    return result;
}

console.log(possibleCombination(n));
