// Lecture: let and const

/*

// ES5
var name5 = "John Snow";
name5 = "Johan Gutierrez";

// ES6
//const name6 = "Frank Daza";
let name6 = "Frank Daza";
name6 = "Frank Gonzalez";



function driversLicense5(passedTest) {
    
    console.log(firstName);
    
    if (passedTest) {
        var firstName = "Frank";
        var yearOfBirth = 1989;

        console.log(firstName + " born in " + yearOfBirth
         + ", is now officially allowed to drive a car. ES5.");
    }
}

driversLicense5(true);

function driversLicense6(passedTest) {

    // console.log(firstName);

    let firstName;
    const yearOfBirth = 1989;

    if (passedTest) {
        firstName = "Frank";
    }

    console.log(firstName + " born in " + yearOfBirth
    + ", is now officially allowed to drive a car. ES6.");
}

driversLicense6(true);

let i = 23;

for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log(i);



// Lecture: Blocks and IIFEs

// ES6 IIFE
{
    let a = 1;
    const b = 3;
    var c = 12;
}
// console.log(a + b);
console.log(c);



// Lecture: Strings

let firstName = "Frank Edward";
let lastName = "Daza Gonzalez";
const yearOfBirth = 1989;

function calculateAge(year) {
    return 2018 - year;
}

// ES5
console.log("This is " + firstName + " " + lastName 
    + ". He was born in " + yearOfBirth + ". Today, he is "
    + calculateAge(yearOfBirth) + " years old. ES5.");

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
    Today, he is ${calculateAge(yearOfBirth)} years old. ES6.`);

const name = "áFrank Edward Daza González";
console.log(name.startsWith("á"));
console.log(name.endsWith("z"));
console.log(name.includes(" "));
console.log(name.repeat(10));



// Lecture: Arrow functions

const years = [1989, 1990, 1976, 1960, 2000];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;

    return `Element ${index + 1}: ${age}.`;
});
console.log(ages6);



// Lecture: Destructuring

// ES5
var frank = ["Frank Edward", 28];
var name5 = frank[0];
var age5 = frank[1];
console.log(name5);
console.log(age5);

// ES6
var [name6, age6] = ["Frank Daza", 30];
console.log(name6);
console.log(age6);




// Lecture: Arrays in ES6 / ES2015

const boxes = document.querySelectorAll(".box");

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = "yellow";
// });

// ES6
Array.from(boxes).forEach(cur => 
cur.style.backgroundColor = "red");

var ages = [16, 34, 12, 14, 19, 25];
console.log(ages.findIndex(e => e >= 18));
console.log(ages.find(e => e >= 18));



// Lecture: The spread operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

const ages = [12, 43, 25, 42];

const sum = addFourAges(...ages);
console.log(sum);

const familyDaza = ["Obed", "Martha", "Frank"];
const familyPorras = ["Adiela", "Vanessa", "Gabriela"];
const bigFamily = [...familyDaza, ...familyPorras];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(boxes).forEach(box =>
    box.style.color = "purple"
);



// Lecture: Rest parameters

function isFullAge6(...years) {
    years.forEach(e => 
        console.log((2018 - e) >= 18)
    );
}

isFullAge6(990, 2000, 1965);



// Lecture: Default parameters

const Person = function(firstName, yearOfBirth = 0, lastName, nationality = "Colombiano") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let frank = new Person("Frank");
console.log(frank);



// Lecture: Maps

const question = new Map();
question.set("question", "What is the official name of the lastest Javascript version?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer!");
question.set(false, "Wrong, please try again.");

// console.log(question.get("question"));
// console.log(question.size);
// console.log(question.delete(4));
// console.log(question.size);
// console.log(question.clear());
// console.log(question.size);

// question.forEach((value, key) =>
//     console.log(`This is key: ${key}, and it's set to ${value}`)
// );

// for (const [key, value] of question.entries()) {
//     console.log(`This is key: ${key}, and it's set to ${value}`)
// }

for (const [key, value] of question.entries()) {
    if (typeof(key) === "number") {
        console.log(`Answer ${key}: ${value}`)
    }
}

*/

// Lecture: Classes

class Person {

    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log("Hey there!");
        
    }
}

const frank = new Person("Frank Edward Daza González", 1989, "Systems Engineer");
Person.greeting();