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

  class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' });
  console.log(freddie.colorChange('orange'));

  // Answer:
  // The colorChange function is static. Static methods are designed to live only on the 
  // constructor in which they are created, and cannot be passed down to any children or called
  //  upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.
  
  console.log("--------------------------------------------------");
