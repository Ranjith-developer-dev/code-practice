const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());

  console.log("--------------------------------------------------");

  function bark() {
    console.log('Woof!');
  }
  
  const check = bark.animal = 'dog';
  
  console.log("🚀 ~ check:", check)
