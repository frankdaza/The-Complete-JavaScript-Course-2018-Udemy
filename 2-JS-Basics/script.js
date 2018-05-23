
/**
var name = "Frank Edward";
console.log(name);

var lastName = "Daza González";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);



 // Lecture: variables 2
var name = "John";
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;
// console.log(job);

job = "Teacher";
isMarried = false;
console.log(name + " is a " + age + " years old " + job + " Is he married? " + isMarried);

age = "thirty six";
job = "driver";
console.log(name + " is a " + age + " years old " + job + " Is he married? " + isMarried);

var lastName = prompt("What is the last name?");
console.log("The lastname is: " + lastName);
alert("The lastname is: " + lastName);



// Lecture: operators
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
ageJohn++;
ageJohn = ageJohn + 1;
ageMark *= 2;

console.log("ageJohn: " + ageJohn)https://www.google.com/;
console.log("ageMark: " + ageMark)https://www.google.com/;
https://www.google.com/
https://www.google.com/
https://www.google.com/
// Lecture: if/else statementshttps://www.google.com/
var name = "Frank Edward";https://www.google.com/
var age = 28;https://www.google.com/
var isMarried = "no";https://www.google.com/
https://www.google.com/
if (isMarried === "no") {https://www.google.com/
    console.log(name + " is marriehttps://www.google.com/d!");
} else {https://www.google.com/
    console.log(name + " will hopehttps://www.google.com/fully marry soon :)!");
}

isMarried = false;

if (isMarried) {
    console.log("YES!");
} else {
    console.log("NO!");
}

if (23 === "23") {
// if (23 == "23") {
    console.log("somthing to print...");
}




// Lecture: Boolean Logic and Switch
var age = 100;

if (age < 20) {
    console.log("John is a teenager!");
} else if (age >= 20 && age <= 30) {
    console.log("John is a young man!");
} else { 
    console.log("John is a man");
}

var job = prompt("What does John do?");

switch (job) {
    case "teacher":
      console.log("John teaches kids.");
      break;
    case "driver":
      console.log("John drives a cab.");
      break;
    case "cop":
      console.log("John helps fight crime.");
      break;
    default:
      console.log("John does something else.");
}

// var number = 2;

// switch (number) {
//     case "1":
//       console.log("John teaches kids.");
//       break;
//     case "2":
//       console.log("John drives a cab.");
//       break;
//     case "12":
//       console.log("John helps fight crime.");
//       break;
//     default:
//       console.log("John does something else.");
// }



// LECTURE: FUNCTIONS
function calculateAge(yearOfBirth) {
    return 2018 - yearOfBirth;
}

var ageFrank = calculateAge(1989);
// console.log(ageFrank);

function yearsUntilRetirement(name, yearOfBirth) {
    var year = calculateAge(yearOfBirth);
    var retirement = 65 - year;

    if (retirement >= 0) {
        console.log(name + " retires in " + retirement + " years.");
    } else {
        console.log(name + " is already retired.");
    }
}

yearsUntilRetirement("Frank Daza", 1989);
yearsUntilRetirement("Mary Morgan", 1949);




// LECTURE: STATEMENTS AND EXPRESSIONS
function someFun(par) {
    // code
}

var someFun = function(par) {
    // code
}

// Expressions
3 + 4;
var x = 3;

// Statements
if (x === 5) {
    // do something
}

*/

// LECTURE: ARRAYS
var names = ["Frank", "Vanessa", "John"];
var ages = new Array(28, 24, 26);

console.log(names);
console.log(names[0]);
console.log(ages);
console.log(ages[1]);

names[0] = "Ben";
console.log(names);

var frank = ["Frank", "Edward", 28, "professor", false];
console.log(frank);

// Add an element at the end of the array.
frank.push("González");
// Add an element at the beginning of the array
frank.unshift("Engineer");
console.log(frank);
// Remove the last element from the array and returns it.
frank.pop();
console.log(frank);
// Remove the first element from the array and returns it.
frank.shift();
console.log(frank);

if (frank.indexOf("professor") === -1) {
    console.log("Frank is not a professor");
} else {
    console.log("Frank is a professor");
}





