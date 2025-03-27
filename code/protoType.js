
// we create a generic function with firstname and lastname
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    //we inherited the properties of the function and made a prototype of it
    Person.prototype.getFullName = function(){
    return this.firstName + this.lastName
    }
    //here we are creating an new constructor function with different arguments
    let lydia = new Person("Lydia", "Hallie");
   const test =  lydia.getFullName() // This now works!
  
    console.log("🚀 ~ lydia:", test)