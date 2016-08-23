'use strict';

let classroom = new Map();

let stevenJ = { name: 'Steven', age: 22 };
let sarah = { name: 'Sarah', age: 23 };
let stevenS = { name: 'Steven', age: 22 };

classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

console.log('classroom size:', classroom.size);
//classroom.clear(); // empties map
//console.log('classroom size:', classroom.size);

//if (classroom.has('stevenJ')) console.log("StevenJ is in the classroom");
//if (classroom.has('sarah')) console.log("Sarah is in the classroom");
//if (classroom.has('stevenS')) console.log("StevenS is in the classroom");

console.log('stevenJ:', classroom.get('stevenJ'));
console.log('sarah:', classroom.get('sarah'));

classroom.delete('stevenS')
console.log('stevenS:', classroom.get('stevenS'));
console.log('classroom size:', classroom.size);

for (let student of classroom) {
    console.log(`${student[0]}: ${student[1].name} is ${student[1].age} years old`);
}
