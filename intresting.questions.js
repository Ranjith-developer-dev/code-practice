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
// console.log(freddie.colorChange('orange'));

// Answer:
// The colorChange function is static. Static methods are designed to live only on the 
// constructor in which they are created, and cannot be passed down to any children or called
//  upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.

console.log("--------------------------------------------------");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const member = new Person('Lydia', 'Hallie');
console.log("🚀 ~ member:", member)


console.log(member.getFullName());

console.log("--------------------------------------------------");

const num = async () => {
  let number = 0;
  console.log(number++);
  console.log(++number);
  console.log(number);
}
num()

console.log("--------------------------------------------------");

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

console.log("--------------------------------------------------");

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

// Answer:
// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

console.log("--------------------------------------------------");

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

console.log("--------------------------------------------------");

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

console.log("--------------------------------------------------");

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

console.log("--------------------------------------------------");

let person1 = { name: 'Lydia' };
const members = [person1];
person1 = null;

console.log(members);

console.log("--------------------------------------------------");

let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}

console.log("--------------------------------------------------");

const fruit = ['🍌', '🍊', '🍎']

const sliceCheck = fruit.slice(0, 1)

console.log("🚀 ~ sliceCheck:", sliceCheck)

fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)

console.log("--------------------------------------------------");

const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const objProxy = new Proxy({}, handler);

objProxy.name = 'Lydia';
objProxy.name;


console.log("--------------------------------------------------");

const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);

console.log("--------------------------------------------------");

const person2 = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person2 }) => (x.age += 1);
const changeAgeAndName = (x = { ...person2 }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person2);
changeAgeAndName();

console.log(person2);

console.log("--------------------------------------------------");

console.log(`${(x => x)('I love')} to program`);


console.log("--------------------------------------------------");


console.log("--------------------------------------------------");


console.log("--------------------------------------------------");


console.log("--------------------------------------------------");


console.log("--------------------------------------------------");

