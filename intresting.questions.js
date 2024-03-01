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

  ///function is conside as object
  function bark() {
    console.log('Woof!');
  }
  
  const check = bark.animal = 'dog';
  
  console.log("🚀 ~ check:", check)

  console.log("--------------------------------------------------");

  const tesdt1 = +true;
  console.log("🚀 ~ tesdt1:", tesdt1)
  const tesd2 = !'Lydia';
  console.log("🚀 ~ tesd2:", tesd2)

  console.log("--------------------------------------------------");

