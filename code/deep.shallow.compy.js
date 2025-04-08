try {
    const res = fetch("https://dummyjson.com/products").then(async (res) => {
        const data = await res.json();

        // Shallow copy - references are copied
        const shallowCopy = [...data.products];

        // Deep copy - creates completely new copy
        const deepCopy = JSON.parse(JSON.stringify(data.products));

        // Modify original
        data.products[0].title = "New Title";

        // Shallow copy will be affected
        console.log("Shallow copy title:", shallowCopy[0].title); // "New Title"

        // Deep copy preserves original values
        console.log("Deep copy title:", deepCopy[0].title); // Original title
    });
} catch (e) {
    console.log(e);
}
