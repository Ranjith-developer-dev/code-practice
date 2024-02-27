//it's a local or global scope, so it is scoped to the nearest function scope 


for(var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), i)
}


// it's scoped to the block in which it's defined, 
// In each iteration of the loop, a new lexical environment is created for the setTimeout callback, and it captures the value of i at that particular iteration

for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(i), i)
}