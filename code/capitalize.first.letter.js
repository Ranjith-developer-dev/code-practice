function uppercase(str) {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log("🚀 ~ uppercase ~ uppercase:", uppercase("ranjith is good"));
