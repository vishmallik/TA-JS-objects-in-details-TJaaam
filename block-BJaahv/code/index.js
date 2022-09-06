//- [ ] Using function to create object

function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };
  user.incrementProject = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };
  return user;
}

//test
let user1 = createUser("John", 1, 55);
let user2 = createUser("Sam", 9, 74);

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.incrementProject());
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.getProjects());
console.log(user1.changeName("Arya"));
console.log(user1.name);
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.incrementProject());
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.log(user2.getProjects());
console.log(user2.changeName("Ram"));
console.log(user2.name);
console.groupEnd();

//- [ ] Using Object.create (prototypal pattern)

let createUserMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};
function createUser(name, id, noOfProjects) {
  let user = Object.create(createUserMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}

//test
let user1 = createUser("John", 1, 55);
let user2 = createUser("Sam", 9, 74);

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.incrementProject());
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.getProjects());
console.log(user1.changeName("Arya"));
console.log(user1.name);
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.incrementProject());
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.log(user2.getProjects());
console.log(user2.changeName("Ram"));
console.log(user2.name);
console.groupEnd();

//- [ ] Using Pseudoclassical Way

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};
//test
let user1 = new CreateUser("John", 1, 55);
let user2 = new CreateUser("Sam", 9, 74);

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.incrementProject());
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.getProjects());
console.log(user1.changeName("Arya"));
console.log(user1.name);
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.incrementProject());
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.log(user2.getProjects());
console.log(user2.changeName("Ram"));
console.log(user2.name);
console.groupEnd();

//- [ ] Using Class

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  }
  incrementProject() {
    this.noOfProjects += 1;
    return this.noOfProjects;
  }
  decrementProject() {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  }
}

//test
let user1 = new User("John", 1, 55);
let user2 = new User("Sam", 9, 74);

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.incrementProject());
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.getProjects());
console.log(user1.changeName("Arya"));
console.log(user1.name);
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.incrementProject());
console.log(user2.incrementProject());
console.log(user2.decrementProject());
console.log(user2.getProjects());
console.log(user2.changeName("Ram"));
console.log(user2.name);
console.groupEnd();
