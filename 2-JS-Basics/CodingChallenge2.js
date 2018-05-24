var years = [1989, 2000, 2001, 1960];
var ages = [];

function ageFromBirtdate(years) {    
    for (var i = 0; i < years.length; i++) {
        var age = 2018 - years[i];
        ages.push(age);

        if (age >= 18) {
            console.log("Has a full age: " + age);
        } else {
            console.log("Has NOT a full age: " + age);
        }
    }
    return ages;
}

function printFullAge(ages) {
    var areFullAges = [];
    var booleanFullAges = [];

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            booleanFullAges.push(true);
            console.log("Has a full age: " + ages[i]);
        } else {
            booleanFullAges.push(false);
            console.log("Has NOT a full age: " + ages[i]);
        }
    }
    return booleanFullAges;
}

var full_1 = printFullAge(ages);