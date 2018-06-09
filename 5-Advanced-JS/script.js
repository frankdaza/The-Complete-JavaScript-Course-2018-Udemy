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


// Lecture: Passing functions as arguments
var arrAges = [1990, 1946, 2008, 1997];

function arrCalculate(array, fn) {
  var arrTmp = [];

 for (let i = 0; i < array.length; i++) {
   arrTmp.push(fn(array[i]));
 }

 return arrTmp;
};

function ageCalculate(year) {
  return 2018 - year;
};

function fullAges(year) {
  return ageCalculate(year) >= 18;
}

var a = arrCalculate(arrAges, ageCalculate);
console.log(a);

var b = arrCalculate(arrAges, fullAges);
console.log(b);


// Lecture: Functions returning functions
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ", Can you please explain what UX design is?");
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    }
  } else {
    return function (name) {
      console.log("Hello, " + name + ". What do you do?");
    }
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Frank Daza");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Frank Daza");

var question = interviewQuestion("engineer");
question("Frank Daza");

interviewQuestion("teacher")("Mark");


// Lecture: IIFE
(
  function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
  }
)();

(
  function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
  }
)(5);


// Lecture: Closures
function retirement(retirementAge) {
  var a = " years left until retirement.";

  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(56)(1980);
*/

// Lecture: Bind, call and apply
var frank = {
  name: "Frank Daza",
  age: 28, 
  job: "Systems engineer",
  presentation: function name(style, timeOfDay) {
    if (style === "formal") {
      console.log("Good " + timeOfDay + " Ladies and Gentlemen! I\'m " + this.name + " I\'m " + this.job + " and I\'m " + this.age + " years old.");
    } else if (style === "friendly") {
      console.log("Hey! What's up? I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + this.timeOfDay + ".");
    }
  }
};

var vanessa = {
  name: "Vanessa Porras",
  age: 24,
  job: "Teacher"
};

frank.presentation("formal", "morning");
frank.presentation.call(vanessa, "friendly", "morning");

var johnFriendly = frank.presentation.bind(frank, "friendly");
johnFriendly("morning");

