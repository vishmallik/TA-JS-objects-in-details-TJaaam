// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
function createUser(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.sayHello = function () {
    return `Welcome ${obj.name}`;
  };
  return obj;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("John", 27);
let personTwo = createUser("Arya", 19);

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let userMethods = {
  sayHello: function () {
    return `Welcome ${this.name}`;
  },
};
function createUser(name, age) {
  let obj = Object.create(userMethods);
  obj.name = name;
  obj.age = age;
  return obj;
}
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
function CreateUser(name, age) {
  let obj = Object.create(userMethods);
  this.name = name;
  this.age = age;
  return obj;
}
CreateUser.prototype = {
  sayHello: function () {
    return `Welcome ${this.name}`;
  },
};
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
personOne = new CreateUser("Sam", 45);
personTwo = new CreateUser("Ram", 33);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();
// 8. Convert the `createUser` function into `User` class.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Welcome ${this.name}`;
  }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
personOne = new User("Gita", 28);
personTwo = new User("Sita", 38);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();
