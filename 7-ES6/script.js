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

*/

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