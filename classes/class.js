'use strict';

class Student {
    constructor({ name, age, interestLevel=5 } = {}) {
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel;
        this.grades = new Map();
    }
}

let joey = new Student({ name: 'Joey', age: 25 });
let sarah = new Student({ name: 'Sarah', age: 22, interestLevel: 10 });

sarah.grades.set('History', 'A');
sarah.grades.set('Math', 'A');

//console.log(Array.from(sarah.grades));
for (let grade of sarah.grades) {
    console.log(grade);
}

//console.log(joey);
//console.log(sarah);
