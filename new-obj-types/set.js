'use strict';

// new iterable that holds unique values

let classroom = new Set();

let stevenJ = { name: 'Steven', age: 22 };
let sarah = { name: 'Sarah', age: 23 };
let stevenS = { name: 'Steven', age: 22 };

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);
classroom.add(sarah); // set holds only unique values

if (classroom.has(stevenJ)) {
    console.log("StevenJ is in the classroom");
}
if (classroom.has(sarah)) {
    console.log("Sarah is in the classroom");
}
if (classroom.has(stevenS)) {
    console.log("StevenS is in the classroom");
}

console.log('classroom size:', classroom.size);

classroom.delete(stevenJ);

console.log('classroom size:', classroom.size);

// create an array of students from the classroom set;
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// create a set of an existing array
let alumni = new Set(arrayOfStudents);
console.log('alumni size:', alumni.size);
