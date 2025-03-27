const occurenceResult = uniqueOccurrences([1, 2, 2, 1, 1, 3]);

console.log("🚀 ~ occurenceResult:", occurenceResult);

function uniqueOccurrences(arr: number[]): boolean {
    const countMap: Map<number, number> = new Map();

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const occurenceSet: Set<number> = new Set();

    for (const count of countMap.values()) {
        if (occurenceSet.has(count)) {
            return false;
        }
        occurenceSet.add(count);
    }

    return true;
}
