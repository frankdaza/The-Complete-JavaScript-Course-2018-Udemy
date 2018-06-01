// Function constructor
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