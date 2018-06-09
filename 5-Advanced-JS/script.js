// Function constructor
/**
var frank = {
    name: "Frank Edward",
    yearOfBirth: 1989,
    job: "Systems engineer"
};

var Person = function(
  name,
  yearOfBirth,
  job
) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  };
};

Person.prototype.hello = function() {
  console.log("Hallo " + this.name);
};

var john = new Person("John Wick", 1978, "Vigilante");
var mark = new Person("Mark Wilson", 1960, "Teacher");


// Object.create
var personProto = {
  calculateAge: function() {
  console.log(2018 - this.yearOfBirth);
  }
};

var frank = Object.create(personProto);
frank.name = "Frank Daza"
frank.job = "Systems engineer"
frank.yearOfBirth = 1989;
 */

// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log("a = " + a);
console.log("b = " + b);

// Objects
var obj1 = {
  name: "Frank Daza",
  age: 28
};

var obj2 = obj1;
obj1.age = 15;
console.log("obj1.age = " + obj1.age);
console.log("obj2.age = " + obj2.age);

// Functions
var age = 24;
var obj = {
  name: "Chango Man",
  city: "Santiago de Chile"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
};

console.log("age = " + age);
console.log("b.city = " + b.city);



















